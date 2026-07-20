import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/utils/supabase/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { getDomainPricing } from '@/lib/domainPricing';

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2026-05-27.dahlia' as any,
  });

  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { tenantId, domain } = await request.json();

    if (!tenantId || !domain) {
      return NextResponse.json({ error: 'Missing tenantId or domain' }, { status: 400 });
    }

    // Verify tenant ownership — same check every other tenant-scoped route uses
    const serviceClient = getSupabaseServerClient();
    const { data: tenant } = await serviceClient.from('tenants').select('owner_id').eq('id', tenantId).single();
    if (!tenant || tenant.owner_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden: you do not own this site.' }, { status: 403 });
    }

    const cleanDomain = domain.trim().toLowerCase();

    // Price is looked up server-side (same helper /api/domains?search= uses),
    // never trusted from the client — this is a real money charge.
    const { available, price } = await getDomainPricing(cleanDomain);
    if (!available) {
      return NextResponse.json({ error: 'That domain is no longer available.' }, { status: 409 });
    }

    // Determine the base URL for redirects
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    // Create Stripe Checkout Session.
    // Domain registration (WHOIS) requires registrant contact info, so we
    // collect the buyer's billing address + phone at checkout and hand them to
    // the Vercel Registrar in the webhook.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Domain Registration: ${cleanDomain}`,
              description: '1 Year Custom Domain Registration & Management',
            },
            unit_amount: Math.round(price * 100),
            recurring: {
              interval: 'year',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      // Clients buy domains from their own dashboard, not the admin CRM —
      // redirecting to /admin here previously sent every real client to a
      // page their account can't access.
      success_url: `${baseUrl}/dashboard?domain_success=true&domain=${encodeURIComponent(cleanDomain)}`,
      cancel_url: `${baseUrl}/dashboard?domain_cancel=true`,
      metadata: {
        tenantId,
        domain: cleanDomain,
        userId: user.id,
        type: 'domain_purchase'
      },
      client_reference_id: tenantId,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe Checkout Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
