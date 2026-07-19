import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { getStripe, platformFeeBps, UUID_RE } from '@/lib/storeApi';

/**
 * API Route: POST /api/store/checkout   (public — site visitors call this)
 *
 * Body: { tenantId, items: [{ id, qty }] }
 *
 * Validates every product server-side (price comes from the database, never
 * the client), then creates a Stripe Checkout Session with destination
 * charges to the tenant's connected account (+ optional platform fee).
 *
 * Returns: { url } — redirect the shopper there.
 */

export async function POST(request: NextRequest) {
  try {
    let body: any;
    try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 }); }

    const tenantId: string = body?.tenantId || '';
    const items: { id: string; qty: number }[] = Array.isArray(body?.items) ? body.items : [];

    if (!UUID_RE.test(tenantId)) {
      return NextResponse.json({ error: 'Invalid site.' }, { status: 400 });
    }
    if (items.length === 0 || items.length > 50) {
      return NextResponse.json({ error: 'Your cart is empty.' }, { status: 400 });
    }

    const serviceClient = getSupabaseServerClient();

    // 1. The tenant must have a charge-ready connected account
    const { data: tenant } = await serviceClient
      .from('tenants')
      .select('id, name, subdomain, custom_domain, stripe_account_id, store_settings')
      .eq('id', tenantId)
      .single();

    if (!tenant) return NextResponse.json({ error: 'Site not found.' }, { status: 404 });
    if (!tenant.stripe_account_id) {
      return NextResponse.json({ error: 'This store is not accepting payments yet.' }, { status: 409 });
    }

    // 2. Load the real products — prices are trusted from the DB only
    const ids = items.map(i => i.id).filter(id => UUID_RE.test(id));
    const { data: products } = await serviceClient
      .from('store_products')
      .select('id, name, description, price_cents, currency, images, inventory, active')
      .eq('tenant_id', tenantId)
      .in('id', ids);

    const productMap = new Map((products || []).map(p => [p.id, p]));
    const lineItems: any[] = [];
    const orderItems: any[] = [];
    let currency = 'usd';

    for (const item of items) {
      const product = productMap.get(item.id);
      const qty = Math.min(Math.max(Math.round(Number(item.qty) || 1), 1), 99);
      if (!product || !product.active) {
        return NextResponse.json({ error: 'One of the items is no longer available.' }, { status: 409 });
      }
      if (product.inventory !== null && product.inventory < qty) {
        return NextResponse.json({ error: `Only ${product.inventory} of "${product.name}" left in stock.` }, { status: 409 });
      }
      currency = product.currency || 'usd';
      lineItems.push({
        quantity: qty,
        price_data: {
          currency,
          unit_amount: product.price_cents,
          product_data: {
            name: product.name,
            ...(product.description ? { description: String(product.description).slice(0, 300) } : {}),
            ...(Array.isArray(product.images) && product.images[0] ? { images: [product.images[0]] } : {})
          }
        }
      });
      orderItems.push({ product_id: product.id, name: product.name, qty, unit_price_cents: product.price_cents });
    }

    const subtotal = orderItems.reduce((acc, i) => acc + i.unit_price_cents * i.qty, 0);
    const feeBps = platformFeeBps();
    const applicationFee = feeBps > 0 ? Math.floor((subtotal * feeBps) / 10000) : 0;

    // 3. Send the shopper back to the site they came from
    const origin = request.headers.get('origin')
      || (tenant.custom_domain ? `https://${tenant.custom_domain}` : `https://${tenant.subdomain}.michaelfreddesigns.com`);

    // Shipping: a flat rate, optionally waived above a free-shipping threshold —
    // both admin-configurable per tenant via store_settings, no new schema needed.
    const storeSettings = tenant.store_settings || {};
    const shippingFlatCents = Number(storeSettings.shippingFlatCents) || 0;
    const freeThresholdCents = storeSettings.shippingFreeThresholdCents != null ? Number(storeSettings.shippingFreeThresholdCents) : null;
    const qualifiesForFreeShipping = freeThresholdCents !== null && subtotal >= freeThresholdCents;
    const shippingAmount = qualifiesForFreeShipping ? 0 : shippingFlatCents;

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${origin}/?order=success`,
      cancel_url: `${origin}/?order=canceled`,
      // Let shoppers apply a Stripe promotion code created in the tenant's own
      // Connect dashboard — no parallel discount-code system needed.
      allow_promotion_codes: true,
      ...(applicationFee > 0 || tenant.stripe_account_id ? {
        payment_intent_data: {
          ...(applicationFee > 0 ? { application_fee_amount: applicationFee } : {}),
          transfer_data: { destination: tenant.stripe_account_id }
        }
      } : {}),
      shipping_address_collection: storeSettings.collectShipping === false
        ? undefined
        : { allowed_countries: ['US', 'CA', 'GB', 'AU'] },
      ...(storeSettings.collectShipping !== false && shippingFlatCents > 0 ? {
        shipping_options: [{
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: shippingAmount, currency },
            display_name: qualifiesForFreeShipping ? 'Free shipping' : 'Standard shipping',
          }
        }]
      } : {}),
      metadata: {
        type: 'store_order',
        tenant_id: tenantId
      }
    });

    // 4. Record the pending order (webhook flips it to paid)
    await serviceClient.from('store_orders').insert([{
      tenant_id: tenantId,
      stripe_session_id: session.id,
      amount_total_cents: subtotal,
      currency,
      status: 'pending',
      line_items: orderItems
    }]);

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('[Store Checkout] error:', error);
    return NextResponse.json({ error: error.message || 'Checkout failed. Please try again.' }, { status: 500 });
  }
}
