import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getSupabaseServerClient } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-05-27.dahlia' as any,
});

const TIER_PRICING: Record<string, { amount: number; name: string; description: string }> = {
  lite: { amount: 1500, name: 'Template Lite', description: '2 design edits per month' },
  managed: { amount: 6000, name: 'Template Managed', description: 'Unlimited design edits + monthly calls' },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tier, templateKey, onboardingData } = body;

    if (!tier || !TIER_PRICING[tier]) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Save onboarding submission if data is provided
    let submissionId = null;
    if (onboardingData) {
      const serviceClient = getSupabaseServerClient();
      const { data: submission, error: submissionError } = await serviceClient
        .from('onboarding_submissions')
        .insert([{ user_id: user.id, plan_tier: tier, answers: onboardingData }])
        .select()
        .single();

      if (submissionError) {
        console.error('Failed to save onboarding submission:', submissionError);
      } else {
        submissionId = submission?.id;
      }
    }

    const pricing = TIER_PRICING[tier];

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: user.email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: pricing.name,
              description: pricing.description,
            },
            unit_amount: pricing.amount,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?checkout_success=true&tier=${tier}&template=${templateKey || 'restaurant'}${submissionId ? `&submission=${submissionId}` : ''}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/onboarding?plan=${encodeURIComponent(tier.replace('_', ' '))}`,
      metadata: {
        tier,
        templateKey: templateKey || 'restaurant',
        userId: user.id,
        submissionId: submissionId || null,
      },
    });

    return NextResponse.json({ sessionId: checkoutSession.id, url: checkoutSession.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Checkout failed' },
      { status: 500 }
    );
  }
}
