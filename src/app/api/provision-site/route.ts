import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { TEMPLATES, TEMPLATE_PAGES } from '@/lib/templates';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tier, templateKey, submissionId } = body;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch the onboarding submission to get customization data
    const serviceClient = getSupabaseServerClient();
    const { data: submission, error: fetchError } = await serviceClient
      .from('onboarding_submissions')
      .select('*')
      .eq('id', submissionId)
      .eq('user_id', user.id)
      .single();

    if (fetchError || !submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    const answers = submission.answers || {};
    const businessName = answers.businessName || 'My Business';
    const tagline = answers.tagline || 'Premium Quality & Professional Service';
    const email = answers.email || 'contact@mybusiness.com';
    const phone = answers.phone || '(555) 123-4567';

    // Get template
    const rawTemplateData = TEMPLATES[templateKey] || [];

    // Customize template sections
    const customizedSections = rawTemplateData.map((section: any) => {
      if (!section.props) return section;

      const cloned = JSON.parse(JSON.stringify(section));
      if (cloned.type.includes('Hero')) {
        if (cloned.props.title) cloned.props.title = `${businessName}.\n${tagline}`;
        if (cloned.props.description) cloned.props.description = cloned.props.description.replace(/Osteria Bella/g, businessName);
      }
      if (cloned.type.includes('Footer')) {
        if (cloned.props.businessName) cloned.props.businessName = businessName;
        if (cloned.props.tagline) cloned.props.tagline = tagline;
        if (cloned.props.phone) cloned.props.phone = phone;
        if (cloned.props.email) cloned.props.email = email;
        if (cloned.props.text) cloned.props.text = `© 2026 ${businessName}. All rights reserved. Powered by Michaelfred Designs.`;
      }
      if (cloned.type.includes('Contact') || cloned.type.includes('FindUs')) {
        if (cloned.props.phone) cloned.props.phone = phone;
        if (cloned.props.email) cloned.props.email = email;
      }
      return cloned;
    });

    // Build pages
    const pagesList = TEMPLATE_PAGES[templateKey]
      ? TEMPLATE_PAGES[templateKey].map((page: any) => ({
          id: page.slug === '/' ? 'home' : `page-${page.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
          name: page.name,
          slug: page.slug,
          sections: page.sections.map((section: any) => {
            const cloned = JSON.parse(JSON.stringify(section));
            if (cloned.type.includes('Hero') && cloned.props?.title) {
              cloned.props.title = `${businessName}.\n${tagline}`;
            }
            if (cloned.type.includes('Footer')) {
              if (cloned.props?.businessName) cloned.props.businessName = businessName;
              if (cloned.props?.phone) cloned.props.phone = phone;
              if (cloned.props?.email) cloned.props.email = email;
            }
            return cloned;
          }),
        }))
      : [{ id: 'home', name: 'Home', slug: '/', sections: customizedSections }];

    // Create tenant in database
    const { data: tenant, error: tenantError } = await serviceClient
      .from('tenants')
      .insert([{
        owner_id: user.id,
        name: businessName,
        custom_domain: null,
      }])
      .select()
      .single();

    if (tenantError || !tenant) {
      console.error('Failed to create tenant:', tenantError);
      return NextResponse.json({ error: 'Failed to create site' }, { status: 500 });
    }

    // Create site_data rows (one per page)
    const siteDataRows = pagesList.map((page: any) => ({
      tenant_id: tenant.id,
      page_slug: page.slug,
      page_name: page.name,
      sections_json: JSON.stringify(page.sections),
      seo_title: `${businessName} - ${page.name}`,
      seo_description: tagline,
      theme_json: {
        fontFamily: 'System Default',
        headingFont: 'System Default',
        buttonRoundedness: 'rounded',
        pageBackground: '#ffffff',
      },
      nav_label: page.name,
      show_in_nav: true,
    }));

    const { error: siteDataError } = await serviceClient
      .from('sites_data')
      .insert(siteDataRows);

    if (siteDataError) {
      console.error('Failed to create sites_data:', siteDataError);
      return NextResponse.json({ error: 'Failed to create pages' }, { status: 500 });
    }

    // Update onboarding submission with tenant reference
    await serviceClient
      .from('onboarding_submissions')
      .update({ status: 'converted', converted_tenant_id: tenant.id })
      .eq('id', submissionId);

    return NextResponse.json({
      success: true,
      tenantId: tenant.id,
      tenantUrl: `https://${tenant.id}.michaelfreddesigns.com`,
    });
  } catch (error) {
    console.error('Provision site error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to provision site' },
      { status: 500 }
    );
  }
}
