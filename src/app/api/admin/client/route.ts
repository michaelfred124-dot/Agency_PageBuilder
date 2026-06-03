import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';

/**
 * API Route: /api/admin/client
 * 
 * Secure administration API. Restricts access to user sessions matching the ADMIN_EMAILS whitelist.
 * Bypasses RLS to allow direct management of tenants, plan tiers, domains, and lead inboxes.
 */

// Simple Helper to verify admin auth
async function checkAdminAuth() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !user.email) {
    return { error: 'Unauthorized: Access Denied.', status: 401 };
  }

  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || [];
  if (!adminEmails.includes(user.email)) {
    return { error: 'Forbidden: Admins only.', status: 403 };
  }

  return { user };
}

export async function POST(request: NextRequest) {
  const auth = await checkAdminAuth();
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const body = await request.json();
    const { action } = body;
    const serviceClient = getSupabaseServerClient();

    if (action === 'update') {
      const { tenantId, data } = body;
      if (!tenantId || !data) {
        return NextResponse.json({ error: 'Missing tenantId or data' }, { status: 400 });
      }

      const updateData: any = {};
      if (data.name !== undefined) updateData.name = data.name;
      if (data.status !== undefined) updateData.status = data.status;
      if (data.plan_tier !== undefined) updateData.plan_tier = data.plan_tier;
      if (data.notes !== undefined) updateData.notes = data.notes;
      
      if (data.subdomain !== undefined) {
        updateData.subdomain = data.subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');
        if (!updateData.subdomain) {
          return NextResponse.json({ error: 'Subdomain cannot be empty' }, { status: 400 });
        }
      }
      
      if (data.custom_domain !== undefined) {
        updateData.custom_domain = data.custom_domain ? data.custom_domain.trim().toLowerCase() : null;
      }

      const { data: tenant, error } = await serviceClient
        .from('tenants')
        .update(updateData)
        .eq('id', tenantId)
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Update tenant error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, tenant });
    }

    if (action === 'update_lead') {
      const { leadId, status } = body;
      if (!leadId || !status) {
        return NextResponse.json({ error: 'Missing leadId or status' }, { status: 400 });
      }

      const { data: lead, error } = await serviceClient
        .from('contact_submissions')
        .update({ status })
        .eq('id', leadId)
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Update lead error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, lead });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('[Admin API] POST error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const auth = await checkAdminAuth();
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const serviceClient = getSupabaseServerClient();

    if (action === 'delete_tenant') {
      const tenantId = searchParams.get('tenantId');
      if (!tenantId) {
        return NextResponse.json({ error: 'Missing tenantId' }, { status: 400 });
      }

      const { error } = await serviceClient
        .from('tenants')
        .delete()
        .eq('id', tenantId);

      if (error) {
        console.error('[Admin API] Delete tenant error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    if (action === 'delete_lead') {
      const leadId = searchParams.get('leadId');
      if (!leadId) {
        return NextResponse.json({ error: 'Missing leadId' }, { status: 400 });
      }

      const { error } = await serviceClient
        .from('contact_submissions')
        .delete()
        .eq('id', leadId);

      if (error) {
        console.error('[Admin API] Delete lead error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('[Admin API] DELETE error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
