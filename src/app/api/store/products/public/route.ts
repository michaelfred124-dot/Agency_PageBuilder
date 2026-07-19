import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { UUID_RE } from '@/lib/storeApi';

/**
 * API Route: GET /api/store/products/public?tenantId=
 *
 * Public storefront endpoint — returns only ACTIVE products for a tenant,
 * with just the fields the storefront needs. No auth (visitors call this).
 */

export async function GET(request: NextRequest) {
  const tenantId = request.nextUrl.searchParams.get('tenantId') || '';
  if (!UUID_RE.test(tenantId)) {
    return NextResponse.json({ products: [] });
  }

  const serviceClient = getSupabaseServerClient();
  const { data, error } = await serviceClient
    .from('store_products')
    .select('id, name, description, price_cents, currency, images, inventory')
    .eq('tenant_id', tenantId)
    .eq('active', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    console.error('[Store Public] list error:', error);
    return NextResponse.json({ products: [] });
  }

  return NextResponse.json(
    { products: data || [] },
    { headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=300' } }
  );
}
