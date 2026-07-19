import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { notifyNewOnboardingBriefEmail } from '@/lib/email';

/**
 * API Route: POST /api/onboarding/submit
 *
 * Persists a DIY or DFY onboarding intake so it actually reaches the CRM —
 * previously both flows only wrote to localStorage and were never visible
 * to the agency owner anywhere. Mirrors /api/contact's auth shape, except
 * onboarding is always behind login (src/app/onboarding/page.tsx redirects
 * to /login first), so user_id is always a real session, never anonymous.
 */

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: please log in.' }, { status: 401 });
    }

    const body = await request.json();
    const { planTier, answers } = body;

    if (!planTier || typeof planTier !== 'string') {
      return NextResponse.json({ error: 'Missing planTier.' }, { status: 400 });
    }
    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Missing answers.' }, { status: 400 });
    }

    const serviceClient = getSupabaseServerClient();
    const { data: submission, error } = await serviceClient
      .from('onboarding_submissions')
      .insert([{ user_id: user.id, plan_tier: planTier, answers }])
      .select()
      .single();

    if (error) {
      console.error('[Onboarding Submit] insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Best-effort notification — never block the submission on email failure.
    const adminEmail = process.env.ADMIN_EMAILS?.split(',')[0]?.trim();
    if (adminEmail) {
      notifyNewOnboardingBriefEmail({
        to: adminEmail,
        planTier,
        businessName: answers?.businessName || answers?.brandName,
        userEmail: user.email || 'unknown',
      }).catch(() => {});
    }

    return NextResponse.json({ success: true, submission });
  } catch (error: any) {
    console.error('[Onboarding Submit] error:', error);
    return NextResponse.json({ error: error.message || 'Failed to submit.' }, { status: 500 });
  }
}
