import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const templateKey = searchParams.get('templateKey');

    if (!templateKey) {
      return NextResponse.json({ error: 'Missing templateKey' }, { status: 400 });
    }

    // Use service role to bypass RLS since templates are owned by the admin
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 1. Find the shadow tenant
    const { data: tenant, error: tenantError } = await supabaseAdmin
      .from('tenants')
      .select('id')
      .eq('subdomain', templateKey)
      .eq('status', 'Template')
      .single();

    if (tenantError || !tenant) {
      // It's perfectly normal if a template hasn't been built yet (fallback to hardcoded)
      return NextResponse.json({ pages: null });
    }

    // 2. Fetch the layout data
    const { data: sitesData, error: sitesError } = await supabaseAdmin
      .from('sites_data')
      .select('*')
      .eq('tenant_id', tenant.id);

    if (sitesError || !sitesData || sitesData.length === 0) {
      return NextResponse.json({ pages: null });
    }

    // Transform into expected page structure
    const pages = sitesData.map(page => ({
      id: page.id,
      name: page.name || (page.slug === '/' ? 'Home' : page.slug),
      slug: page.slug,
      sections: page.content || []
    }));

    return NextResponse.json({ pages });

  } catch (error: any) {
    console.error('[Template Layout API Error]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
