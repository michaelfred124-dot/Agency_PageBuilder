import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';

/**
 * Get all domains registered through the platform for this user's account.
 * Hits Vercel Registrar API to check registered domains.
 */
export async function GET(req: NextRequest) {
  try {
    const supabase = getSupabaseServerClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get all tenants owned by this user
    const { data: tenants, error: tenantError } = await supabase
      .from('tenants')
      .select('id, custom_domain, domain_info')
      .eq('owner_id', user.id);

    if (tenantError) throw tenantError;

    const registeredDomains: string[] = [];

    if (tenants) {
      for (const tenant of tenants) {
        if (tenant.custom_domain) {
          registeredDomains.push(tenant.custom_domain.toLowerCase());
        }
      }
    }

    // Also check Vercel registrar if token is available
    const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
    const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

    if (VERCEL_AUTH_TOKEN) {
      try {
        const url = `https://api.vercel.com/v4/domains${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${VERCEL_AUTH_TOKEN}` }
        });

        if (res.ok) {
          const data = await res.json();
          if (data.domains && Array.isArray(data.domains)) {
            for (const domain of data.domains) {
              if (domain.name) {
                registeredDomains.push(domain.name.toLowerCase());
              }
            }
          }
        }
      } catch (err) {
        // Silently fail, fall back to database records
        console.error('Failed to fetch Vercel domains:', err);
      }
    }

    return NextResponse.json({
      registeredDomains: [...new Set(registeredDomains)]
    });
  } catch (error: any) {
    console.error('Registered domains error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
