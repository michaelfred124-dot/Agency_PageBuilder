import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: tenants, error: tenantsError } = await supabase
      .from('tenants')
      .select('id, name, subdomain, custom_domain')
      .eq('owner_id', user.id);

    if (tenantsError) {
      throw new Error(tenantsError.message);
    }

    const tenantsByDomain = new Map(
      (tenants ?? [])
        .filter((t) => t.custom_domain)
        .map((t) => [t.custom_domain as string, { id: t.id, name: t.name }])
    );

    if (!VERCEL_AUTH_TOKEN) {
      const domains = (tenants ?? [])
        .filter((t) => t.custom_domain)
        .map((t) => ({
          name: t.custom_domain as string,
          expiration: null,
          boughtAt: null,
          verified: true,
          connectedSite: { id: t.id, name: t.name },
        }));

      return NextResponse.json({ success: true, domains });
    }

    const url = `https://api.vercel.com/v5/domains?teamId=${VERCEL_TEAM_ID}&limit=100`;
    const vercelRes = await fetch(url, {
      headers: { Authorization: `Bearer ${VERCEL_AUTH_TOKEN}` },
    });

    if (!vercelRes.ok) {
      const err = await vercelRes.json();
      return NextResponse.json(
        { error: err.error?.message || 'Failed to fetch domains from Vercel' },
        { status: vercelRes.status }
      );
    }

    const vercelData = await vercelRes.json();
    const domains = (vercelData.domains ?? []).map((d: {
      name: string;
      expiration?: number | null;
      boughtAt?: number | null;
      verified?: boolean;
      serviceType?: string;
      aliases?: string[];
    }) => ({
      name: d.name,
      expiration: d.expiration ?? null,
      boughtAt: d.boughtAt ?? null,
      verified: d.verified ?? false,
      serviceType: d.serviceType,
      aliases: d.aliases ?? [],
      connectedSite: tenantsByDomain.get(d.name) ?? null,
    }));

    return NextResponse.json({ success: true, domains });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('[GET /api/domains/portfolio]', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
