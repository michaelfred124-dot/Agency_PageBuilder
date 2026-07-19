import { NextRequest, NextResponse } from 'next/server';
import { authorizeTenantOwner } from '@/lib/storeApi';

/**
 * API Route: /api/store/settings  (owner/admin only)
 *
 * GET   ?tenantId=                → current tenants.store_settings JSONB
 * PATCH { tenantId, ...settings } → shallow-merges into store_settings
 *
 * Backs shipping configuration (flat rate, free-shipping threshold, whether
 * to collect an address at all) — read by /api/store/checkout at charge time.
 */

const EDITABLE_FIELDS = ['collectShipping', 'shippingFlatCents', 'shippingFreeThresholdCents'] as const;

export async function GET(request: NextRequest) {
  const tenantId = request.nextUrl.searchParams.get('tenantId') || '';
  const auth = await authorizeTenantOwner(tenantId);
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });
  return NextResponse.json({ settings: auth.tenant.store_settings || {} });
}

export async function PATCH(request: NextRequest) {
  let body: any;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 }); }

  const auth = await authorizeTenantOwner(body?.tenantId || '');
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const updates: Record<string, any> = {};
  for (const key of EDITABLE_FIELDS) {
    if (body[key] === undefined) continue;
    if (key === 'collectShipping') {
      updates[key] = !!body[key];
    } else {
      const cents = body[key] === null ? null : Math.round(Number(body[key]));
      if (cents !== null && (!Number.isFinite(cents) || cents < 0)) {
        return NextResponse.json({ error: `${key} must be a positive number.` }, { status: 400 });
      }
      updates[key] = cents;
    }
  }

  const mergedSettings = { ...(auth.tenant.store_settings || {}), ...updates };

  const { data, error } = await auth.serviceClient
    .from('tenants')
    .update({ store_settings: mergedSettings })
    .eq('id', body.tenantId)
    .select('store_settings')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ settings: data.store_settings });
}
