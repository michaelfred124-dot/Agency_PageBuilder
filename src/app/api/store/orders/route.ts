import { NextRequest, NextResponse } from 'next/server';
import { authorizeTenantOwner } from '@/lib/storeApi';

/**
 * API Route: /api/store/orders  (owner/admin only)
 *
 * GET   ?tenantId=                → recent orders for the tenant
 * PATCH { tenantId, id, status }  → update fulfillment status
 */

const ALLOWED_STATUSES = ['pending', 'paid', 'fulfilled', 'refunded', 'canceled'];

export async function GET(request: NextRequest) {
  const tenantId = request.nextUrl.searchParams.get('tenantId') || '';
  const auth = await authorizeTenantOwner(tenantId);
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const { data, error } = await auth.serviceClient
    .from('store_orders')
    .select('id, customer_email, customer_name, amount_total_cents, currency, status, line_items, created_at')
    .eq('tenant_id', tenantId)
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ orders: data || [] });
}

export async function PATCH(request: NextRequest) {
  let body: any;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 }); }

  const auth = await authorizeTenantOwner(body?.tenantId || '');
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });
  if (!body?.id || !ALLOWED_STATUSES.includes(body?.status)) {
    return NextResponse.json({ error: 'Invalid order id or status.' }, { status: 400 });
  }

  const { data, error } = await auth.serviceClient
    .from('store_orders')
    .update({ status: body.status })
    .eq('id', body.id)
    .eq('tenant_id', body.tenantId)
    .select('id, status')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ order: data });
}
