import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { TEMPLATES, TEMPLATE_PAGES } from '@/lib/templates';
import { normalizePageSlug } from '@/lib/publishValidation';
import { checkAdminAuth } from '@/utils/adminAuth';
import { createClient } from '@/utils/supabase/server';

/**
 * API Route: /api/admin/client
 *
 * Secure administration API. Restricts access to admins (see src/utils/adminAuth.ts
 * for the exact rule: ADMIN_EMAILS whitelist, hardcoded owner emails, or an
 * is_admin/role=admin flag in user/app metadata).
 * Bypasses RLS to allow direct management of tenants, plan tiers, domains, and lead inboxes.
 */

/**
 * GET ?action=template_pages&templateKey=X
 *
 * Lightweight {name, slug} list for a template — used by the admin "Add
 * Page" picker. TEMPLATE_PAGES holds full section trees for every template
 * and must never be imported into a client bundle; this keeps it server-side.
 */
export async function GET(request: NextRequest) {
  const isAdmin = await checkAdminAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized: Access Denied.' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  if (action === 'template_pages') {
    const templateKey = searchParams.get('templateKey');
    if (!templateKey || !TEMPLATE_PAGES[templateKey]) {
      return NextResponse.json({ pages: [] });
    }
    return NextResponse.json({
      pages: TEMPLATE_PAGES[templateKey].map(p => ({ name: p.name, slug: normalizePageSlug(p.slug) }))
    });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}

export async function POST(request: NextRequest) {
  const isAdmin = await checkAdminAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized: Access Denied.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action } = body;
    const serviceClient = getSupabaseServerClient();

    if (action === 'create') {
      const { data } = body;
      if (!data || !data.name || !data.subdomain) {
        return NextResponse.json({ error: 'Missing required tenant data (name, subdomain)' }, { status: 400 });
      }

      const formattedSubdomain = data.subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');
      if (!formattedSubdomain) {
        return NextResponse.json({ error: 'Invalid subdomain' }, { status: 400 });
      }

      // 1. Insert into tenants (optionally owned by a specific client user and
      //    seeded from a designer-coded template)
      const templateKey: string | undefined =
        typeof data.template_key === 'string' && (TEMPLATE_PAGES[data.template_key] || TEMPLATES[data.template_key])
          ? data.template_key
          : undefined;

      const { data: newTenant, error: createError } = await serviceClient
        .from('tenants')
        .insert([{
          name: data.name,
          subdomain: formattedSubdomain,
          plan_tier: data.plan_tier || 'DIY',
          status: data.status || 'Draft',
          owner_id: data.owner_id || null,
          template_key: templateKey || null,
          custom_domain: data.custom_domain ? data.custom_domain.trim().toLowerCase() : null
        }])
        .select()
        .single();

      if (createError) {
        console.error('[Admin API] Create tenant error:', createError);
        return NextResponse.json({ error: createError.message }, { status: 500 });
      }

      // 2. Seed sites_data. When a template_key is provided, deep-clone the
      //    designer-coded template (all pages) into this tenant's own rows so
      //    the client can edit their copy without affecting the master template.
      let pagesToSeed: { page_slug: string; sections: any[] }[];

      if (templateKey) {
        const multiPage = TEMPLATE_PAGES[templateKey];
        const pageDefs = multiPage?.length
          ? multiPage.map(p => ({ slug: p.slug, sections: p.sections }))
          : [{ slug: 'index', sections: TEMPLATES[templateKey] || [] }];

        pagesToSeed = pageDefs.map((page, pageIdx) => {
          const slug = normalizePageSlug(page.slug) || (pageIdx === 0 ? 'index' : `page-${pageIdx}`);
          // Deep clone + re-ID so each tenant owns independent section instances
          const sections = (page.sections || []).map((section: any, i: number) => ({
            ...JSON.parse(JSON.stringify(section)),
            id: `${section.id || section.type || 'section'}-${newTenant.id.slice(0, 8)}-${pageIdx}-${i}`
          }));
          return { page_slug: slug, sections };
        });
      } else {
        pagesToSeed = [{
          page_slug: 'index',
          sections: [{
            type: 'Hero',
            id: 'hero-1',
            props: {
              title: `Welcome to ${newTenant.name}`,
              subtitle: 'This site is under construction.',
              ctaText: 'Get Started',
              ctaLink: '#'
            }
          }]
        }];
      }

      const { error: seedError } = await serviceClient.from('sites_data').insert(
        pagesToSeed.map(p => ({
          tenant_id: newTenant.id,
          page_slug: p.page_slug,
          canvas_json: p.sections,
          theme_json: {}
        }))
      );

      if (seedError) {
        console.error('[Admin API] Seed sites_data error:', seedError);
        // Roll back the tenant so we don't leave a broken half-created site
        await serviceClient.from('tenants').delete().eq('id', newTenant.id);
        return NextResponse.json({ error: `Failed to seed site pages: ${seedError.message}` }, { status: 500 });
      }

      return NextResponse.json({ success: true, tenant: newTenant, pagesSeeded: pagesToSeed.length });
    }

    if (action === 'update') {
      const { tenantId, data } = body;
      if (!tenantId || !data) {
        return NextResponse.json({ error: 'Missing tenantId or data' }, { status: 400 });
      }

      const updateData: any = {};
      if (data.name !== undefined) updateData.name = data.name;
      if (data.status !== undefined) updateData.status = data.status;
      if (data.plan_tier !== undefined) updateData.plan_tier = data.plan_tier;
      if (data.notes !== undefined) updateData.notes = data.notes;
      
      if (data.subdomain !== undefined) {
        updateData.subdomain = data.subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');
        if (!updateData.subdomain) {
          return NextResponse.json({ error: 'Subdomain cannot be empty' }, { status: 400 });
        }
      }
      
      if (data.custom_domain !== undefined) {
        updateData.custom_domain = data.custom_domain ? data.custom_domain.trim().toLowerCase() : null;
      }

      const { data: tenant, error } = await serviceClient
        .from('tenants')
        .update(updateData)
        .eq('id', tenantId)
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Update tenant error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, tenant });
    }

    if (action === 'update_lead') {
      const { leadId, status } = body;
      if (!leadId || !status) {
        return NextResponse.json({ error: 'Missing leadId or status' }, { status: 400 });
      }

      const { data: lead, error } = await serviceClient
        .from('contact_submissions')
        .update({ status })
        .eq('id', leadId)
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Update lead error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, lead });
    }

    if (action === 'update_client_profile') {
      const { userId, data } = body;
      if (!userId) {
        return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
      }

      const allowedStages = ['lead', 'contacted', 'qualified', 'active', 'churned'];
      const updateData: any = { user_id: userId };
      if (data?.pipeline_stage !== undefined) {
        if (!allowedStages.includes(data.pipeline_stage)) {
          return NextResponse.json({ error: `pipeline_stage must be one of: ${allowedStages.join(', ')}` }, { status: 400 });
        }
        updateData.pipeline_stage = data.pipeline_stage;
      }
      if (data?.lead_source !== undefined) updateData.lead_source = data.lead_source;
      if (data?.tags !== undefined) updateData.tags = Array.isArray(data.tags) ? data.tags : [];
      if (data?.assigned_to !== undefined) updateData.assigned_to = data.assigned_to || null;
      if (data?.next_follow_up_at !== undefined) updateData.next_follow_up_at = data.next_follow_up_at || null;
      if (data?.estimated_mrr_cents !== undefined) {
        const cents = data.estimated_mrr_cents === null ? null : Math.round(Number(data.estimated_mrr_cents));
        if (cents !== null && (!Number.isFinite(cents) || cents < 0)) {
          return NextResponse.json({ error: 'estimated_mrr_cents must be a positive number.' }, { status: 400 });
        }
        updateData.estimated_mrr_cents = cents;
      }

      const { data: profile, error } = await serviceClient
        .from('client_profiles')
        .upsert([updateData], { onConflict: 'user_id' })
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Update client profile error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, profile });
    }

    if (action === 'add_activity') {
      const { userId, tenantId, type, body: activityBody } = body;
      if (!userId || !activityBody) {
        return NextResponse.json({ error: 'Missing userId or body' }, { status: 400 });
      }

      const authSupabase = await createClient();
      const { data: { user: actingAdmin } } = await authSupabase.auth.getUser();

      const { data: activity, error } = await serviceClient
        .from('client_activity')
        .insert([{
          user_id: userId,
          tenant_id: tenantId || null,
          author_id: actingAdmin?.id || null,
          type: type || 'note',
          body: activityBody
        }])
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Add activity error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, activity });
    }

    if (action === 'add_task') {
      const { userId, tenantId, title, dueAt, assignedTo } = body;
      if (!userId || !title) {
        return NextResponse.json({ error: 'Missing userId or title' }, { status: 400 });
      }

      const { data: task, error } = await serviceClient
        .from('client_tasks')
        .insert([{
          user_id: userId,
          tenant_id: tenantId || null,
          title,
          due_at: dueAt || null,
          assigned_to: assignedTo || null
        }])
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Add task error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, task });
    }

    if (action === 'update_task') {
      const { taskId, status, title, dueAt } = body;
      if (!taskId) {
        return NextResponse.json({ error: 'Missing taskId' }, { status: 400 });
      }

      const updateData: any = {};
      if (status !== undefined) updateData.status = status;
      if (title !== undefined) updateData.title = title;
      if (dueAt !== undefined) updateData.due_at = dueAt;

      const { data: task, error } = await serviceClient
        .from('client_tasks')
        .update(updateData)
        .eq('id', taskId)
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Update task error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, task });
    }

    if (action === 'add_page') {
      const { tenantId, pageSlug } = body;
      if (!tenantId || !pageSlug) {
        return NextResponse.json({ error: 'Missing tenantId or pageSlug' }, { status: 400 });
      }

      const { data: tenant } = await serviceClient.from('tenants').select('id, template_key').eq('id', tenantId).single();
      if (!tenant) {
        return NextResponse.json({ error: 'Site not found.' }, { status: 404 });
      }
      if (!tenant.template_key || !TEMPLATE_PAGES[tenant.template_key]) {
        return NextResponse.json({ error: 'This site has no template pages available to add.' }, { status: 400 });
      }

      const normalizedSlug = normalizePageSlug(pageSlug);
      if (!normalizedSlug) {
        return NextResponse.json({ error: 'Invalid page slug.' }, { status: 400 });
      }

      // Guard against collision before the DB unique constraint does it ungracefully
      const { data: existing } = await serviceClient
        .from('sites_data')
        .select('page_slug')
        .eq('tenant_id', tenantId)
        .eq('page_slug', normalizedSlug)
        .maybeSingle();
      if (existing) {
        return NextResponse.json({ error: 'This site already has a page with that slug.' }, { status: 409 });
      }

      const templatePage = TEMPLATE_PAGES[tenant.template_key].find(p => normalizePageSlug(p.slug) === normalizedSlug);
      if (!templatePage) {
        return NextResponse.json({ error: 'That page does not exist in this site\'s template.' }, { status: 400 });
      }

      // Same deep-clone + re-ID pattern as action:'create' — the new page's
      // sections are independent instances, not shared with the master template.
      const sections = (templatePage.sections || []).map((section: any, i: number) => ({
        ...JSON.parse(JSON.stringify(section)),
        id: `${section.id || section.type || 'section'}-${tenantId.slice(0, 8)}-new-${i}`
      }));

      const { data: maxOrderRow } = await serviceClient
        .from('sites_data')
        .select('sort_order')
        .eq('tenant_id', tenantId)
        .order('sort_order', { ascending: false })
        .limit(1)
        .maybeSingle();

      const { data: page, error } = await serviceClient
        .from('sites_data')
        .insert([{
          tenant_id: tenantId,
          page_slug: normalizedSlug,
          canvas_json: sections,
          theme_json: {},
          nav_label: templatePage.name,
          sort_order: (maxOrderRow?.sort_order ?? 0) + 1
        }])
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Add page error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, page });
    }

    if (action === 'delete_page') {
      const { tenantId, pageSlug } = body;
      if (!tenantId || !pageSlug) {
        return NextResponse.json({ error: 'Missing tenantId or pageSlug' }, { status: 400 });
      }
      if (normalizePageSlug(pageSlug) === 'index') {
        return NextResponse.json({ error: 'The home page cannot be deleted.' }, { status: 400 });
      }

      const { error } = await serviceClient
        .from('sites_data')
        .delete()
        .eq('tenant_id', tenantId)
        .eq('page_slug', pageSlug);

      if (error) {
        console.error('[Admin API] Delete page error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    if (action === 'update_page_meta') {
      const { tenantId, pageSlug, data } = body;
      if (!tenantId || !pageSlug) {
        return NextResponse.json({ error: 'Missing tenantId or pageSlug' }, { status: 400 });
      }

      const updateData: any = {};
      if (data?.nav_label !== undefined) updateData.nav_label = data.nav_label;
      if (data?.sort_order !== undefined) updateData.sort_order = Math.round(Number(data.sort_order)) || 0;
      if (data?.show_in_nav !== undefined) updateData.show_in_nav = !!data.show_in_nav;
      if (data?.seo_title !== undefined) updateData.seo_title = data.seo_title;
      if (data?.seo_description !== undefined) updateData.seo_description = data.seo_description;
      if (data?.og_image !== undefined) updateData.og_image = data.og_image;

      const { data: page, error } = await serviceClient
        .from('sites_data')
        .update(updateData)
        .eq('tenant_id', tenantId)
        .eq('page_slug', pageSlug)
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Update page meta error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, page });
    }

    if (action === 'update_onboarding_submission') {
      const { submissionId, status, convertedTenantId } = body;
      if (!submissionId) {
        return NextResponse.json({ error: 'Missing submissionId' }, { status: 400 });
      }

      const updateData: any = {};
      if (status !== undefined) updateData.status = status;
      if (convertedTenantId !== undefined) updateData.converted_tenant_id = convertedTenantId;

      const { data: submission, error } = await serviceClient
        .from('onboarding_submissions')
        .update(updateData)
        .eq('id', submissionId)
        .select()
        .single();

      if (error) {
        console.error('[Admin API] Update onboarding submission error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, submission });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('[Admin API] POST error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const isAdmin = await checkAdminAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized: Access Denied.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const serviceClient = getSupabaseServerClient();

    if (action === 'delete_tenant') {
      const tenantId = searchParams.get('tenantId');
      if (!tenantId) {
        return NextResponse.json({ error: 'Missing tenantId' }, { status: 400 });
      }

      const { error } = await serviceClient
        .from('tenants')
        .delete()
        .eq('id', tenantId);

      if (error) {
        console.error('[Admin API] Delete tenant error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    if (action === 'delete_lead') {
      const leadId = searchParams.get('leadId');
      if (!leadId) {
        return NextResponse.json({ error: 'Missing leadId' }, { status: 400 });
      }

      const { error } = await serviceClient
        .from('contact_submissions')
        .delete()
        .eq('id', leadId);

      if (error) {
        console.error('[Admin API] Delete lead error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    if (action === 'delete_task') {
      const taskId = searchParams.get('taskId');
      if (!taskId) {
        return NextResponse.json({ error: 'Missing taskId' }, { status: 400 });
      }

      const { error } = await serviceClient
        .from('client_tasks')
        .delete()
        .eq('id', taskId);

      if (error) {
        console.error('[Admin API] Delete task error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('[Admin API] DELETE error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
