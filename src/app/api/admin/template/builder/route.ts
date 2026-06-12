import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { checkAdminAuth } from '@/utils/adminAuth';

export async function POST(request: NextRequest) {
  try {
    // 1. Authenticate as Admin
    const isAdmin = await checkAdminAuth();
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized: Admin access required.' }, { status: 403 });
    }

    const body = await request.json();
    const { template_key, name } = body;

    if (!template_key || !name) {
      return NextResponse.json({ error: 'Missing required fields: template_key, name' }, { status: 400 });
    }

    // Use service role client to bypass RLS
    const supabase = getSupabaseServerClient();

    // 2. Check if a shadow tenant already exists for this template
    const { data: existingTenant, error: fetchError } = await supabase
      .from('tenants')
      .select('id')
      .eq('subdomain', template_key)
      .single();

    if (existingTenant) {
      // Template already has a tenant, return it
      return NextResponse.json({ success: true, tenantId: existingTenant.id });
    }

    // 3. Create a new shadow tenant for the template
    const { data: newTenant, error: insertError } = await supabase
      .from('tenants')
      .insert([
        {
          name: `Template: ${name}`,
          subdomain: template_key,
          status: 'Template',
          plan_tier: 'Template'
        }
      ])
      .select('id')
      .single();

    if (insertError || !newTenant) {
      console.error('[Template Builder] Insert Error:', insertError);
      return NextResponse.json({ error: 'Failed to create shadow tenant for template.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, tenantId: newTenant.id });

  } catch (error: any) {
    console.error('[Template Builder] Error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
