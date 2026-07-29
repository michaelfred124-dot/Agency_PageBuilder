import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getSupabaseServerClient } from '@/lib/supabase';
import { getPlan } from '@/lib/plans';

/**
 * POST /api/checkout/plan
 *
 * Starts a monthly subscription for one of the website plans.
 *
 * The request body carries only a plan id — the price is looked up server-side
 * from src/lib/plans.ts. Never price from the request body.
 */

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Payments are not configured yet. Please get in touch directly.' },
        { status: 503 },
      );
    }

    const { planId } = await request.json();
    const plan = getPlan(String(planId || ''));
    if (!plan) {
      return NextResponse.json({ error: 'Unknown plan.' }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-05-27.dahlia' as any,
    });

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      // price_data avoids having to pre-create Price objects in the Stripe
      // dashboard and keeps plans.ts as the only place pricing lives.
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: plan.monthlyCents,
            recurring: { interval: 'month' },
            product_data: {
              name: plan.name,
              description: plan.description,
            },
          },
        },
      ],
      // Subscription mode always creates a Customer, so `customer_creation` is
      // rejected here — Stripe collects the email and we read it off the
      // session in the webhook to send the intake link.
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      success_url: `${origin}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: {
        type: 'website_subscription',
        planId: plan.id,
        planName: plan.name,
        monthlyCents: String(plan.monthlyCents),
      },
    });

    // Record the intent now so a webhook that arrives before the browser
    // redirect has a row to update, and so abandoned checkouts are visible.
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from('website_subscriptions').insert([
      {
        stripe_session_id: session.id,
        plan_id: plan.id,
        plan_name: plan.name,
        monthly_cents: plan.monthlyCents,
        status: 'pending_payment',
      },
    ]);

    if (error) {
      // Don't block the sale over a logging failure — the webhook upserts too.
      console.error('[checkout/plan] could not record pending subscription:', error);
    }

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('[checkout/plan] error:', error);
    return NextResponse.json(
      { error: error?.message || 'Could not start checkout.' },
      { status: 500 },
    );
  }
}
