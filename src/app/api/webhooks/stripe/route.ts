import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getSupabaseServerClient } from '@/lib/supabase';
import { buyDomainViaRegistrar, RegistrarContact } from '@/lib/domainPricing';
import { notifyNewSubscriptionEmail, welcomeSubscriberEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2026-05-27.dahlia' as any,
  });

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    let event: Stripe.Event;

    if (webhookSecret && signature) {
      try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
      } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
      }
    } else {
      // If no webhook secret is set (e.g. in local dev without CLI), just parse the body.
      // This is less secure but allows testing without the CLI if necessary.
      event = JSON.parse(body);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.metadata?.type === 'domain_purchase') {
        const tenantId = session.metadata.tenantId;
        const domain = session.metadata.domain;
        const subscriptionId = typeof session.subscription === 'string' ? session.subscription : session.subscription?.id;

        console.log(`Processing domain purchase for tenant ${tenantId}, domain: ${domain}`);

        await fulfillDomainPurchase(tenantId, domain, session, subscriptionId);
      }

      if (session.metadata?.type === 'store_order') {
        await fulfillStoreOrder(session);
      }

      if (session.metadata?.type === 'website_subscription') {
        await fulfillWebsiteSubscription(session);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

/**
 * Activate a website subscription and send the customer their intake link.
 *
 * Upserts rather than updates: the checkout route inserts a pending row first,
 * but if that insert failed we still must not lose a paying customer.
 */
async function fulfillWebsiteSubscription(session: Stripe.Checkout.Session) {
  const supabase = getSupabaseServerClient();

  const email = session.customer_details?.email || null;
  const name = session.customer_details?.name || null;
  const planName = session.metadata?.planName || 'Website Plan';
  const monthlyCents = Number(session.metadata?.monthlyCents || 0);

  const { data: sub, error } = await supabase
    .from('website_subscriptions')
    .upsert(
      {
        stripe_session_id: session.id,
        stripe_subscription_id:
          typeof session.subscription === 'string' ? session.subscription : session.subscription?.id || null,
        stripe_customer_id:
          typeof session.customer === 'string' ? session.customer : session.customer?.id || null,
        customer_email: email,
        customer_name: name,
        plan_id: session.metadata?.planId || 'unknown',
        plan_name: planName,
        monthly_cents: monthlyCents,
        status: 'active',
      },
      { onConflict: 'stripe_session_id' },
    )
    .select()
    .single();

  if (error) {
    console.error('[Subscription Webhook] Could not record subscription:', error);
    return;
  }

  console.log(`[Subscription Webhook] ${planName} activated for ${email || 'unknown email'}`);

  // WordPress provisioning starts here implicitly, and deliberately so: rows are
  // created with wp_status='queued', but /api/provision/run only picks up orders
  // whose payment status has reached 'active'. Flipping that status above is
  // what releases this order to the provisioner. We do NOT clone inline —
  // a clone takes minutes and would blow Stripe's webhook timeout, causing
  // Stripe to retry a delivery that already succeeded.

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.michaelfreddesigns.com';
  const adminEmail = process.env.ADMIN_EMAILS?.split(',')[0]?.trim();

  // Notifications are best-effort — a mail failure must never fail the webhook,
  // or Stripe will retry a delivery that already succeeded.
  if (adminEmail) {
    notifyNewSubscriptionEmail({
      to: adminEmail,
      planName,
      monthlyTotal: `$${(monthlyCents / 100).toFixed(0)}`,
      customerEmail: email || 'unknown',
      customerName: name || undefined,
    }).catch(() => {});
  }

  if (email) {
    welcomeSubscriberEmail({
      to: email,
      name: name || undefined,
      planName,
      intakeUrl: `${siteUrl}/welcome?session_id=${session.id}`,
    }).catch(() => {});
  }
}

/** Mark a native store order paid and decrement tracked inventory. */
async function fulfillStoreOrder(session: Stripe.Checkout.Session) {
  const supabase = getSupabaseServerClient();

  const { data: order } = await supabase
    .from('store_orders')
    .update({
      status: 'paid',
      stripe_payment_intent: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id || null,
      customer_email: session.customer_details?.email || null,
      customer_name: session.customer_details?.name || null,
      amount_total_cents: session.amount_total ?? undefined,
      shipping: (session as any).shipping_details || session.customer_details?.address || null
    })
    .eq('stripe_session_id', session.id)
    .select('id, tenant_id, line_items')
    .single();

  if (!order) {
    console.error(`[Store Webhook] No pending order found for session ${session.id}`);
    return;
  }

  // Decrement inventory for tracked products (best-effort)
  const lineItems: any[] = Array.isArray(order.line_items) ? order.line_items : [];
  for (const item of lineItems) {
    if (!item?.product_id) continue;
    const { data: product } = await supabase
      .from('store_products')
      .select('id, inventory')
      .eq('id', item.product_id)
      .single();
    if (product && product.inventory !== null) {
      const next = Math.max(0, product.inventory - (item.qty || 1));
      await supabase.from('store_products').update({ inventory: next }).eq('id', product.id);
    }
  }

  console.log(`[Store Webhook] Order ${order.id} marked paid for tenant ${order.tenant_id}`);
}

/** Build the registrar contact record the Vercel buy API requires from the Stripe checkout session. */
function contactFromSession(session: Stripe.Checkout.Session): RegistrarContact | null {
  const details = session.customer_details;
  const addr = details?.address;
  const fullName = (details?.name || '').trim();
  if (!details?.email || !details?.phone || !addr?.line1 || !addr?.city || !addr?.postal_code || !addr?.country) {
    return null;
  }
  const [firstName, ...rest] = fullName.split(/\s+/);
  const lastName = rest.join(' ') || firstName || 'Owner';
  return {
    firstName: firstName || 'Domain',
    lastName,
    email: details.email,
    phone: details.phone,
    address1: addr.line1,
    address2: addr.line2 || undefined,
    city: addr.city,
    state: addr.state || addr.city,
    zip: addr.postal_code,
    country: addr.country,
  };
}

async function fulfillDomainPurchase(
  tenantId: string,
  domain: string,
  session: Stripe.Checkout.Session,
  stripeSubscriptionId?: string,
) {
  const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
  const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
  const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

  let cleanDomain = domain.trim().toLowerCase();
  cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');

  const supabase = getSupabaseServerClient();

  // 1. Purchase via Vercel Registrar (new /v1/registrar buy endpoint).
  const contact = contactFromSession(session);
  if (!contact) {
    console.error(`[Domain Webhook] Missing registrant contact info for ${cleanDomain}; cannot complete registrar purchase. Customer paid — manual follow-up required.`);
  } else {
    const result = await buyDomainViaRegistrar(cleanDomain, contact, 1);
    if (!result.ok) {
      // The customer paid, so we must deliver or refund. Log loudly and still
      // link the domain below in case they already own it / we retry manually.
      console.error(`[Domain Webhook] Registrar purchase failed for ${cleanDomain}: ${result.error} (${result.code || 'n/a'})`);
    } else {
      console.log(`[Domain Webhook] Registrar order ${result.orderId} placed for ${cleanDomain}`);
    }
  }

  // 2. Link domain to Vercel Project
  if (VERCEL_AUTH_TOKEN && VERCEL_PROJECT_ID) {
    try {
      const url = `https://api.vercel.com/v10/projects/${VERCEL_PROJECT_ID}/domains${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
      const vercelRes = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: cleanDomain }),
      });
      if (!vercelRes.ok) {
        const errData = await vercelRes.json();
        console.error('Vercel POST domain link failed:', errData);
      }
    } catch (e) {
      console.error('Failed to link domain to Vercel project:', e);
    }
  }

  // 3. Update Supabase
  const registeredAt = new Date().toISOString();
  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  const defaultDnsRecords = [
    { id: 'dns_1', type: 'A', name: '@', value: '76.76.21.21', ttl: 3600 },
    { id: 'dns_2', type: 'CNAME', name: 'www', value: 'cname.vercel-dns.com', ttl: 3600 }
  ];

  const domainInfo = {
    registered_through_us: true,
    auto_renew: true,
    registered_at: registeredAt,
    expires_at: expiresAt.toISOString(),
    dns_records: defaultDnsRecords,
    // Needed to cancel the recurring annual charge if the client later
    // disconnects this domain (see DELETE /api/domains).
    stripe_subscription_id: stripeSubscriptionId || null
  };

  const { error: dbError } = await supabase
    .from('tenants')
    .update({ 
      custom_domain: cleanDomain,
      domain_info: domainInfo
    })
    .eq('id', tenantId);

  if (dbError) {
    console.error(`Supabase error updating tenant with domain: ${dbError.message}`);
  }
}
