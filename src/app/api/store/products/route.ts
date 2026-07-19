import { NextRequest, NextResponse } from 'next/server';
import { authorizeTenantOwner } from '@/lib/storeApi';

/**
 * API Route: /api/store/products  (owner/admin only)
 *
 * GET    ?tenantId=            → all products for the tenant (incl. inactive)
 * POST   { tenantId, product } → create product
 * PATCH  { tenantId, id, updates } → update product
 * DELETE ?tenantId=&id=        → delete product
 */

const EDITABLE_FIELDS = ['name', 'description', 'price_cents', 'currency', 'images', 'active', 'inventory', 'sku', 'sort_order'] as const;

function sanitizeProduct(input: any): Record<string, any> | { error: string } {
  const out: Record<string, any> = {};
  for (const key of EDITABLE_FIELDS) {
    if (input[key] === undefined) continue;
    out[key] = input[key];
  }
  if (out.name !== undefined && (typeof out.name !== 'string' || !out.name.trim())) {
    return { error: 'Product name is required.' };
  }
  if (out.price_cents !== undefined) {
    const cents = Math.round(Number(out.price_cents));
    if (!Number.isFinite(cents) || cents < 0) return { error: 'Price must be a positive number.' };
    out.price_cents = cents;
  }
  if (out.inventory !== undefined && out.inventory !== null) {
    const inv = Math.round(Number(out.inventory));
    out.inventory = Number.isFinite(inv) && inv >= 0 ? inv : null;
  }
  if (out.images !== undefined && !Array.isArray(out.images)) {
    out.images = [];
  }
  if (out.currency !== undefined) {
    out.currency = String(out.currency).toLowerCase().slice(0, 3) || 'usd';
  }
  return out;
}

export async function GET(request: NextRequest) {
  const tenantId = request.nextUrl.searchParams.get('tenantId') || '';
  const auth = await authorizeTenantOwner(tenantId);
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const { data, error } = await auth.serviceClient
    .from('store_products')
    .select('*')
    .eq('tenant_id', tenantId)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ products: data || [] });
}

export async function POST(request: NextRequest) {
  let body: any;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 }); }

  const auth = await authorizeTenantOwner(body?.tenantId || '');
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const clean = sanitizeProduct(body?.product || {});
  if ('error' in clean) return NextResponse.json({ error: clean.error }, { status: 400 });
  if (!clean.name) return NextResponse.json({ error: 'Product name is required.' }, { status: 400 });
  if (clean.price_cents === undefined) return NextResponse.json({ error: 'Price is required.' }, { status: 400 });

  const { data, error } = await auth.serviceClient
    .from('store_products')
    .insert([{ ...clean, tenant_id: body.tenantId }])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ product: data });
}

export async function PATCH(request: NextRequest) {
  let body: any;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 }); }

  const auth = await authorizeTenantOwner(body?.tenantId || '');
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });
  if (!body?.id) return NextResponse.json({ error: 'Missing product id.' }, { status: 400 });

  const clean = sanitizeProduct(body?.updates || {});
  if ('error' in clean) return NextResponse.json({ error: clean.error }, { status: 400 });

  const { data, error } = await auth.serviceClient
    .from('store_products')
    .update(clean)
    .eq('id', body.id)
    .eq('tenant_id', body.tenantId)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ product: data });
}

export async function DELETE(request: NextRequest) {
  const tenantId = request.nextUrl.searchParams.get('tenantId') || '';
  const id = request.nextUrl.searchParams.get('id') || '';
  const auth = await authorizeTenantOwner(tenantId);
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });
  if (!id) return NextResponse.json({ error: 'Missing product id.' }, { status: 400 });

  const { error } = await auth.serviceClient
    .from('store_products')
    .delete()
    .eq('id', id)
    .eq('tenant_id', tenantId);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
