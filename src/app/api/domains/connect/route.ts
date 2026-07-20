import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';

/**
 * Connect an externally-owned domain to a site.
 * Used when user already owns a domain elsewhere and wants to connect it.
 */
export async function POST(req: NextRequest) {
  try {
    const supabase = getSupabaseServerClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { domain, tenantId } = await req.json();

    if (!domain || !tenantId) {
      return NextResponse.json(
        { error: 'domain and tenantId are required' },
        { status: 400 }
      );
    }

    // Verify the tenant belongs to this user
    const { data: tenant, error: tenantError } = await supabase
      .from('tenants')
      .select('id, owner_id')
      .eq('id', tenantId)
      .single();

    if (tenantError || !tenant || tenant.owner_id !== user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Normalize domain
    const cleanDomain = domain
      .trim()
      .toLowerCase()
      .replace(/^(https?:\/\/)?(www\.)?/, '')
      .replace(/\/$/, '');

    // Update tenant with the domain
    const { error: updateError } = await supabase
      .from('tenants')
      .update({
        custom_domain: cleanDomain,
        domain_info: {
          registered_through_us: false,
          auto_renew: false,
          external_registrar: true,
          connected_at: new Date().toISOString(),
        }
      })
      .eq('id', tenantId);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, domain: cleanDomain });
  } catch (error: any) {
    console.error('Connect domain error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
