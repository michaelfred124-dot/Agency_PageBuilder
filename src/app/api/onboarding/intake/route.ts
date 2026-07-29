import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';
import { notifyIntakeCompleteEmail } from '@/lib/email';

/**
 * GET  /api/onboarding/intake — load the signed-in client's answers (autosave resume)
 * POST /api/onboarding/intake — save answers; status 'in_progress' | 'submitted'
 *
 * Backed by `onboarding_submissions` (user_id + answers JSONB + status), so the
 * existing admin CRM picks these up without a new table. One row per client —
 * the newest row is the live draft.
 */

const MAX_ANSWERS_BYTES = 256 * 1024; // generous for text + ~30 photo URLs

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized: please log in.' }, { status: 401 });
  }

  const service = getSupabaseServerClient();
  const { data, error } = await service
    .from('onboarding_submissions')
    .select('id, answers, status, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error('[onboarding/intake] load failed:', error);
    return NextResponse.json({ answers: null, status: null });
  }

  return NextResponse.json({
    answers: data?.answers ?? null,
    status: data?.status ?? null,
  });
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: please log in.' }, { status: 401 });
    }

    const body = await request.json();
    const answers = body?.answers;
    if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
      return NextResponse.json({ error: 'Missing answers.' }, { status: 400 });
    }
    if (JSON.stringify(answers).length > MAX_ANSWERS_BYTES) {
      return NextResponse.json({ error: 'That is too much data to save at once.' }, { status: 413 });
    }

    const status = body?.status === 'submitted' ? 'submitted' : 'in_progress';

    const service = getSupabaseServerClient();

    // One row per client: reuse the newest, otherwise create the first.
    const { data: existing } = await service
      .from('onboarding_submissions')
      .select('id, status')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existing) {
      const { error } = await service
        .from('onboarding_submissions')
        .update({ answers, status })
        .eq('id', existing.id);
      if (error) throw error;
    } else {
      const { error } = await service
        .from('onboarding_submissions')
        .insert([{
          user_id: user.id,
          // Column is NOT NULL but tier language is gone from the product —
          // every client gets the same build service.
          plan_tier: 'standard',
          answers,
          status,
        }]);
      if (error) throw error;
    }

    // Only ping the designer on the transition into 'submitted', not on autosave.
    if (status === 'submitted' && existing?.status !== 'submitted') {
      const adminEmail = process.env.ADMIN_EMAILS?.split(',')[0]?.trim();
      if (adminEmail) {
        notifyIntakeCompleteEmail({
          to: adminEmail,
          businessName: String(answers.businessName || user.email || 'New client'),
          planName: 'Website build',
        }).catch(() => {});
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[onboarding/intake] error:', error);
    return NextResponse.json({ error: 'Could not save your answers.' }, { status: 500 });
  }
}
