import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

async function getAuthenticatedUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return { supabase, user };
}

async function verifyTenantOwnership(
  supabase: Awaited<ReturnType<typeof createClient>>,
  tenantId: string,
  userId: string
) {
  const { data: tenant, error } = await supabase
    .from('tenants')
    .select('id, owner_id, domain_info')
    .eq('id', tenantId)
    .single();

  if (error || !tenant || tenant.owner_id !== userId) {
    return null;
  }
  return tenant;
}

export async function GET(request: NextRequest) {
  try {
    const { supabase, user } = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');
    const tenantId = searchParams.get('tenantId');

    if (!domain || !tenantId) {
      return NextResponse.json({ error: 'Missing domain or tenantId' }, { status: 400 });
    }

    const tenant = await verifyTenantOwnership(supabase, tenantId, user.id);
    if (!tenant) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    if (!VERCEL_AUTH_TOKEN) {
      const records = tenant.domain_info?.dns_records ?? [];
      return NextResponse.json({ success: true, records });
    }

    const url = `https://api.vercel.com/v4/domains/${domain}/records?teamId=${VERCEL_TEAM_ID}`;
    const vercelRes = await fetch(url, {
      headers: { Authorization: `Bearer ${VERCEL_AUTH_TOKEN}` },
    });

    if (!vercelRes.ok) {
      const err = await vercelRes.json();
      return NextResponse.json(
        { error: err.error?.message || 'Failed to fetch DNS records' },
        { status: vercelRes.status }
      );
    }

    const data = await vercelRes.json();
    return NextResponse.json({ success: true, records: data.records ?? [] });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('[GET /api/domains/dns]', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { supabase, user } = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { domain, tenantId, type, name, value, ttl, priority } = await request.json();

    if (!domain || !tenantId || !type || !name || !value) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tenant = await verifyTenantOwnership(supabase, tenantId, user.id);
    if (!tenant) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    if (!VERCEL_AUTH_TOKEN) {
      const newRecord = {
        id: `dns_${Date.now()}`,
        type,
        name,
        value,
        ttl: ttl ?? 3600,
        ...(priority != null ? { mxPriority: priority } : {}),
      };

      const existingRecords: unknown[] = tenant.domain_info?.dns_records ?? [];
      const updatedRecords = [...existingRecords, newRecord];

      const { error: updateError } = await supabase
        .from('tenants')
        .update({
          domain_info: {
            ...(tenant.domain_info ?? {}),
            dns_records: updatedRecords,
          },
        })
        .eq('id', tenantId);

      if (updateError) {
        throw new Error(updateError.message);
      }

      return NextResponse.json({ success: true, record: newRecord });
    }

    const url = `https://api.vercel.com/v4/domains/${domain}/records?teamId=${VERCEL_TEAM_ID}`;
    const body: Record<string, unknown> = { name, type, value, ttl: ttl ?? 3600 };
    if (priority != null) body.mxPriority = priority;

    const vercelRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!vercelRes.ok) {
      const err = await vercelRes.json();
      return NextResponse.json(
        { error: err.error?.message || 'Failed to create DNS record' },
        { status: vercelRes.status }
      );
    }

    const data = await vercelRes.json();
    return NextResponse.json({ success: true, record: data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('[POST /api/domains/dns]', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { supabase, user } = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { domain, tenantId, recordId } = await request.json();

    if (!domain || !tenantId || !recordId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tenant = await verifyTenantOwnership(supabase, tenantId, user.id);
    if (!tenant) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    if (!VERCEL_AUTH_TOKEN) {
      const existingRecords: Array<{ id: string }> = tenant.domain_info?.dns_records ?? [];
      const updatedRecords = existingRecords.filter((r) => r.id !== recordId);

      const { error: updateError } = await supabase
        .from('tenants')
        .update({
          domain_info: {
            ...(tenant.domain_info ?? {}),
            dns_records: updatedRecords,
          },
        })
        .eq('id', tenantId);

      if (updateError) {
        throw new Error(updateError.message);
      }

      return NextResponse.json({ success: true });
    }

    const url = `https://api.vercel.com/v4/domains/${domain}/records/${recordId}?teamId=${VERCEL_TEAM_ID}`;
    const vercelRes = await fetch(url, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${VERCEL_AUTH_TOKEN}` },
    });

    if (!vercelRes.ok) {
      const err = await vercelRes.json();
      return NextResponse.json(
        { error: err.error?.message || 'Failed to delete DNS record' },
        { status: vercelRes.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('[DELETE /api/domains/dns]', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
