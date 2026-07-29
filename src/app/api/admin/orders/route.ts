import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { checkAdminAuth } from '@/utils/adminAuth';

/**
 * API Route: /api/admin/orders
 *
 * Admin-only view of paying website subscribers. `website_subscriptions` has
 * RLS on with no policies, so all access runs through the service-role key
 * behind an admin check.
 */

const STATUSES = ['pending_payment', 'active', 'intake_complete', 'building', 'live', 'cancelled'];

export async function GET() {
  if (!(await checkAdminAuth())) {
    return NextResponse.json({ error: 'Unauthorized: Access Denied.' }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from('website_subscriptions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[admin/orders] fetch failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ orders: data || [] });
}

export async function PATCH(request: NextRequest) {
  if (!(await checkAdminAuth())) {
    return NextResponse.json({ error: 'Unauthorized: Access Denied.' }, { status: 401 });
  }

  try {
    const { id, status, internalNotes } = await request.json();
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Missing order id.' }, { status: 400 });
    }

    const patch: Record<string, any> = {};
    if (status !== undefined) {
      if (!STATUSES.includes(status)) {
        return NextResponse.json({ error: 'Invalid status.' }, { status: 400 });
      }
      patch.status = status;
    }
    if (internalNotes !== undefined) {
      patch.internal_notes = String(internalNotes ?? '').slice(0, 10000);
    }
    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: 'Nothing to update.' }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from('website_subscriptions')
      .update(patch)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('[admin/orders] update failed:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, order: data });
  } catch (error: any) {
    console.error('[admin/orders] error:', error);
    return NextResponse.json({ error: error?.message || 'Update failed.' }, { status: 500 });
  }
}
