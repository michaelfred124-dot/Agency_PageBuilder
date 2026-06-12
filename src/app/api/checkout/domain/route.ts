import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/utils/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2026-05-27.dahlia' as any,
});

export async function POST(request: NextRequest) {
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

    // Determine the base URL for redirects
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Domain Registration: ${domain}`,
              description: '1 Year Custom Domain Registration & Management',
            },
            unit_amount: 2000, // $20.00
            recurring: {
              interval: 'year',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${baseUrl}/admin?domain_success=true&domain=${encodeURIComponent(domain)}`,
      cancel_url: `${baseUrl}/admin?domain_cancel=true`,
      metadata: {
        tenantId,
        domain,
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
