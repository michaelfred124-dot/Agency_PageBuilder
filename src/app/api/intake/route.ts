import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { notifyIntakeCompleteEmail } from '@/lib/email';
import { setSiteIdentity } from '@/lib/wordpress/wpRest';

/**
 * GET  /api/intake?session_id=... — status for the /welcome page
 * POST /api/intake                — save the questionnaire answers
 *
 * The Stripe checkout session id acts as the capability token: only someone who
 * actually completed checkout has it. Nothing sensitive is returned — just
 * enough to render the right state.
 */

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('session_id');
  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id.' }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const { data } = await supabase
    .from('website_subscriptions')
    .select('plan_name, status, customer_name, customer_email, intake_completed_at')
    .eq('stripe_session_id', sessionId)
    .single();

  if (!data) {
    return NextResponse.json({ error: 'We could not find that order.' }, { status: 404 });
  }

  return NextResponse.json({
    planName: data.plan_name,
    status: data.status,
    customerName: data.customer_name,
    customerEmail: data.customer_email,
    intakeComplete: !!data.intake_completed_at,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const sessionId = clean(body?.sessionId, 200);
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session id.' }, { status: 400 });
    }

    const businessName = clean(body?.businessName, 200);
    if (!businessName) {
      return NextResponse.json({ error: 'Please tell me your business name.' }, { status: 400 });
    }

    const intake = {
      businessName,
      contactName: clean(body?.contactName, 120),
      phone: clean(body?.phone, 40),
      address: clean(body?.address, 300),
      industry: clean(body?.industry, 120),
      whatYouDo: clean(body?.whatYouDo, 4000),
      services: clean(body?.services, 4000),
      targetCustomer: clean(body?.targetCustomer, 2000),
      brandColors: clean(body?.brandColors, 300),
      logoUrl: clean(body?.logoUrl, 500),
      existingWebsite: clean(body?.existingWebsite, 300),
      sitesYouLike: clean(body?.sitesYouLike, 1000),
      domainName: clean(body?.domainName, 200),
      socialLinks: clean(body?.socialLinks, 1000),
      addonsWanted: Array.isArray(body?.addonsWanted)
        ? body.addonsWanted.filter((a: unknown) => typeof a === 'string').slice(0, 20)
        : [],
      anythingElse: clean(body?.anythingElse, 4000),
    };

    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from('website_subscriptions')
      .update({
        intake,
        intake_completed_at: new Date().toISOString(),
        status: 'intake_complete',
      })
      .eq('stripe_session_id', sessionId)
      .select('plan_name, wp_status, wp_url')
      .single();

    if (error || !data) {
      console.error('[intake] update failed:', error);
      return NextResponse.json({ error: 'Could not save your answers.' }, { status: 500 });
    }

    // The site was provisioned at payment time, before we knew the business
    // name, so it is currently titled with a fallback. Now that we have the
    // real name, rename it. Best-effort — the answers are already saved, and a
    // WordPress hiccup must not fail the client's form submission.
    if (data.wp_status === 'ready' && data.wp_url) {
      setSiteIdentity(data.wp_url, { title: businessName }).catch(e =>
        console.error('[intake] could not rename WordPress site:', e),
      );
    }

    const adminEmail = process.env.ADMIN_EMAILS?.split(',')[0]?.trim();
    if (adminEmail) {
      notifyIntakeCompleteEmail({
        to: adminEmail,
        businessName,
        planName: data.plan_name,
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[intake] error:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
