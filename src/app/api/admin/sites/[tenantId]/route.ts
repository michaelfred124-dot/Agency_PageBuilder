import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { normalizePageSlug, validateSitePages } from '@/lib/publishValidation';
import { checkAdminAuth } from '@/utils/adminAuth';

interface RouteContext {
  params: Promise<{ tenantId: string }>;
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  if (!(await checkAdminAuth())) {
    return NextResponse.json({ error: 'Forbidden: administrator access is required.' }, { status: 403 });
  }

  try {
    const { tenantId } = await params;
    const { pages, theme } = await request.json();
    const issues = validateSitePages(pages);
    const errors = issues.filter((issue) => issue.level === 'error');
    if (errors.length > 0) {
      return NextResponse.json({ error: 'Fix the validation errors before saving.', issues }, { status: 422 });
    }

    const supabase = getSupabaseServerClient();
    const { data: tenant, error: tenantError } = await supabase
      .from('tenants')
      .select('id')
      .eq('id', tenantId)
      .single();
    if (tenantError || !tenant) {
      return NextResponse.json({ error: 'Site not found.' }, { status: 404 });
    }

    const payload = pages.map((page: any) => ({
      tenant_id: tenantId,
      page_slug: normalizePageSlug(page.slug),
      canvas_json: page.sections,
      theme_json: theme || null,
    }));
    const { data, error } = await supabase
      .from('sites_data')
      .upsert(payload, { onConflict: 'tenant_id,page_slug' })
      .select('id,page_slug,updated_at');
    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true, pages: data, warnings: issues.filter((issue) => issue.level === 'warning') });
  } catch (error: any) {
    console.error('[API /admin/sites/:tenantId] Save error:', error);
    return NextResponse.json({ error: error.message || 'Unable to save this site.' }, { status: 500 });
  }
}
