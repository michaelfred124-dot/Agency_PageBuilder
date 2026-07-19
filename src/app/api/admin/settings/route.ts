import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { checkAdminAuth } from '@/utils/adminAuth';

/**
 * API Route: /api/admin/settings
 *
 * Agency-wide settings (master domain, tracking script, default SEO
 * description, DIY/DFY monthly price) — single-row-by-convention in
 * `agency_settings` (see supabase/migrations/010_agency_settings.sql).
 * Admin-only; not to be confused with the per-tenant `global_settings`
 * table the client dashboard's SEO form writes to.
 */

const EDITABLE_FIELDS = [
  'master_domain',
  'global_tracking_script',
  'default_seo_description',
  'diy_monthly_price_cents',
  'dfy_monthly_price_cents',
] as const;

export async function GET() {
  const isAdmin = await checkAdminAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized: Access Denied.' }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from('agency_settings').select('*').limit(1).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ settings: data });
}

export async function PATCH(request: NextRequest) {
  const isAdmin = await checkAdminAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized: Access Denied.' }, { status: 401 });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const updates: Record<string, any> = {};
  for (const key of EDITABLE_FIELDS) {
    if (body[key] === undefined) continue;
    if (key === 'diy_monthly_price_cents' || key === 'dfy_monthly_price_cents') {
      const cents = Math.round(Number(body[key]));
      if (!Number.isFinite(cents) || cents < 0) {
        return NextResponse.json({ error: `${key} must be a positive number.` }, { status: 400 });
      }
      updates[key] = cents;
    } else {
      updates[key] = String(body[key]);
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'No valid fields to update.' }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const { data: existing } = await supabase.from('agency_settings').select('id').limit(1).single();

  const { data, error } = existing
    ? await supabase.from('agency_settings').update(updates).eq('id', existing.id).select().single()
    : await supabase.from('agency_settings').insert([updates]).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ settings: data });
}
