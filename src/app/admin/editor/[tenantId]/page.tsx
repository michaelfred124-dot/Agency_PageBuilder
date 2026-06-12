import React from 'react';
import { notFound } from 'next/navigation';
import { getSupabaseServerClient, getPageData } from '@/lib/supabase';
import SiteEditor from '@/components/SiteEditor';

export default async function AdminSiteEditorPage({ params }: { params: Promise<{ tenantId: string }> }) {
  const { tenantId } = await params;
  const supabase = getSupabaseServerClient();

  // 1. Fetch tenant data
  const { data: tenant, error: tenantError } = await supabase
    .from('tenants')
    .select('*')
    .eq('id', tenantId)
    .single();

  if (tenantError || !tenant) {
    console.error('Tenant not found:', tenantError);
    return notFound();
  }

  // 2. Fetch site data (we'll fetch 'index' for now, or fetch all pages)
  const { data: sitesData, error: sitesError } = await supabase
    .from('sites_data')
    .select('*')
    .eq('tenant_id', tenantId);

  let initialPages = undefined;
  let initialTheme = null;

  if (sitesData && sitesData.length > 0) {
    initialPages = sitesData.map((page: any) => ({
      id: page.id,
      name: page.page_slug === 'index' ? 'Home' : page.page_slug,
      slug: page.page_slug === 'index' ? '/' : `/${page.page_slug}`,
      sections: page.canvas_json,
    }));
    
    // Just grab theme from the first page for simplicity
    initialTheme = sitesData[0].theme_json;
  }

  // Define client-side wrapper to handle back action
  return (
    <div className="w-full h-full absolute inset-0 z-50 bg-white">
       <SiteEditor 
          siteName={tenant.name}
          siteId={tenant.id}
          tenantId={tenant.id}
          initialPages={initialPages}
          initialTheme={initialTheme}
          planTier={tenant.plan_tier}
          onBack={() => {
             // In a real app we'd pass a router, but here window.location works
             if (typeof window !== 'undefined') {
                window.location.href = '/admin';
             }
          }}
       />
    </div>
  );
}
