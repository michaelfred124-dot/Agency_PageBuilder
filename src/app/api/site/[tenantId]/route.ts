import { NextRequest, NextResponse } from 'next/server';
import { normalizePageSlug } from '@/lib/publishValidation';
import { authorizeTenantOwner as authorizeTenantAccess } from '@/lib/storeApi';

/**
 * API Route: /api/site/[tenantId]
 *
 * Owner-scoped site content API for the client dashboard editor.
 *
 * GET   → returns the tenant + all of its pages (sites_data rows)
 * PATCH → saves client edits for one page. Body: { pageSlug, canvasJson }
 *
 * Security model: clients may only change TEXT values (string props) and
 * IMAGE URLs inside their existing sections. The PATCH handler merges
 * incoming string values into the stored structure — section order, types,
 * ids, and non-string props are preserved from the stored copy, so the
 * designer-defined layout cannot be altered from the client side.
 *
 * Auth: shared with the store APIs via src/lib/storeApi.ts's
 * authorizeTenantOwner (owner-of-tenant or admin), aliased here to keep the
 * existing call-site name.
 */

// Sanitize one incoming list item against the designer's item shape (template).
// Only string leaves are taken from the client; every non-string field (icons,
// numeric flags, layout switches) is kept from the template so a client can't
// change a section's structure — only its words and images.
function sanitizeArrayItem(template: any, incItem: any): any {
  if (typeof template === 'string') {
    return typeof incItem === 'string' ? incItem : template;
  }
  if (template && typeof template === 'object' && !Array.isArray(template)) {
    const merged: any = { ...template };
    if (incItem && typeof incItem === 'object' && !Array.isArray(incItem)) {
      for (const sub of Object.keys(template)) {
        if (typeof template[sub] === 'string' && typeof incItem[sub] === 'string') {
          merged[sub] = incItem[sub];
        }
      }
    }
    return merged;
  }
  // Primitive/other template — keep the designer value.
  return template;
}

// Merge client edits (text, image URLs, links, and list add/remove/reorder)
// from the edited sections into the stored sections. Section order, types, ids,
// and every non-string leaf stay designer-controlled.
function mergeStringProps(stored: any, incoming: any): any {
  if (!incoming || typeof incoming !== 'object') return stored;
  const out: any = { ...stored };

  for (const key of Object.keys(incoming)) {
    const incVal = incoming[key];
    const curVal = out[key];

    if (typeof incVal === 'string' && (curVal === undefined || typeof curVal === 'string')) {
      out[key] = incVal;
    } else if (Array.isArray(incVal) && Array.isArray(curVal)) {
      // The item shape the designer defined — used as the template for every
      // (including newly added) item so structure can't be injected.
      const template =
        curVal.find((it: any) => it && typeof it === 'object') ??
        curVal[0] ??
        incVal.find((it: any) => it && typeof it === 'object') ??
        (incVal.length ? incVal[0] : '');
      out[key] = incVal.map((incItem: any) => sanitizeArrayItem(template, incItem));
    }
    // objects / numbers / booleans / new props: ignored (designer-only)
  }
  return out;
}

function mergeClientCanvas(storedSections: any[], incomingSections: any[]): any[] {
  const incomingById = new Map<string, any>(
    (Array.isArray(incomingSections) ? incomingSections : [])
      .filter((s: any) => s && typeof s === 'object' && typeof s.id === 'string')
      .map((s: any) => [s.id, s])
  );
  return storedSections.map((section: any) => {
    const incoming = incomingById.get(section?.id);
    if (!incoming) return section;
    return { ...section, props: mergeStringProps(section.props || {}, incoming.props || {}) };
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ tenantId: string }> }
) {
  const { tenantId } = await params;
  const auth = await authorizeTenantAccess(tenantId);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { data: pages, error } = await auth.serviceClient
    .from('sites_data')
    .select('page_slug, canvas_json, theme_json, updated_at, nav_label, sort_order, show_in_nav, seo_title, seo_description, og_image')
    .eq('tenant_id', tenantId)
    .order('page_slug', { ascending: true });

  if (error) {
    console.error('[Site API] GET pages error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Home page ('index') first, then by sort_order (new pages get one),
  // falling back to alphabetical for legacy rows that share the default 0.
  const sorted = (pages || []).sort((a, b) => {
    if (a.page_slug === 'index') return -1;
    if (b.page_slug === 'index') return 1;
    if ((a.sort_order ?? 0) !== (b.sort_order ?? 0)) return (a.sort_order ?? 0) - (b.sort_order ?? 0);
    return a.page_slug.localeCompare(b.page_slug);
  });

  const { tenant } = auth;
  return NextResponse.json({
    tenant: {
      id: tenant.id,
      name: tenant.name,
      subdomain: tenant.subdomain,
      custom_domain: tenant.custom_domain,
      status: tenant.status,
      plan_tier: tenant.plan_tier,
      template_key: tenant.template_key,
      favicon_url: tenant.favicon_url
    },
    pages: sorted
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ tenantId: string }> }
) {
  const { tenantId } = await params;
  const auth = await authorizeTenantAccess(tenantId);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  // Site-wide favicon — a tenant-level field, not page content, so it's
  // handled separately from the canvas merge below.
  if (body?.faviconUrl !== undefined && body?.pageSlug === undefined) {
    const { error: faviconError } = await auth.serviceClient
      .from('tenants')
      .update({ favicon_url: body.faviconUrl || null })
      .eq('id', tenantId);
    if (faviconError) {
      return NextResponse.json({ error: faviconError.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  const pageSlug = normalizePageSlug(body?.pageSlug);
  if (!pageSlug) {
    return NextResponse.json({ error: 'Invalid pageSlug.' }, { status: 400 });
  }
  if (!Array.isArray(body?.canvasJson)) {
    return NextResponse.json({ error: 'canvasJson must be an array of sections.' }, { status: 400 });
  }

  // Load the stored page — the source of truth for structure
  const { data: storedPage, error: loadError } = await auth.serviceClient
    .from('sites_data')
    .select('canvas_json')
    .eq('tenant_id', tenantId)
    .eq('page_slug', pageSlug)
    .single();

  if (loadError || !storedPage) {
    return NextResponse.json({ error: 'Page not found.' }, { status: 404 });
  }

  const storedSections: any[] = Array.isArray(storedPage.canvas_json) ? storedPage.canvas_json : [];
  const mergedCanvas = mergeClientCanvas(storedSections, body.canvasJson);

  const { error: saveError } = await auth.serviceClient
    .from('sites_data')
    .update({ canvas_json: mergedCanvas })
    .eq('tenant_id', tenantId)
    .eq('page_slug', pageSlug);

  if (saveError) {
    console.error('[Site API] PATCH save error:', saveError);
    return NextResponse.json({ error: saveError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, savedAt: new Date().toISOString() });
}
