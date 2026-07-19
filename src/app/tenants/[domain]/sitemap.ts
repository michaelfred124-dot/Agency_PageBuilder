import { MetadataRoute } from 'next';
import { getTenantBySubdomain, getTenantByCustomDomain, getSupabaseServerClient } from '@/lib/supabase';

/**
 * Per-tenant sitemap. Reached via src/middleware.ts's hostname rewrite:
 * acme.michaelfreddesigns.com/sitemap.xml → /tenants/acme/sitemap.xml
 * (`.xml` isn't in the middleware's static-extension skip list and
 * `/sitemap.xml` isn't an AGENCY_PATHS entry, so no middleware change
 * was needed for this to be reached correctly).
 */
export default async function sitemap({ params }: { params: Promise<{ domain: string }> }): Promise<MetadataRoute.Sitemap> {
  const { domain } = await params;

  let tenant = await getTenantBySubdomain(domain);
  if (!tenant) {
    tenant = await getTenantByCustomDomain(domain);
  }
  if (!tenant) return [];

  const supabase = getSupabaseServerClient();
  const { data: pages } = await supabase
    .from('sites_data')
    .select('page_slug, updated_at, show_in_nav')
    .eq('tenant_id', tenant.id);

  const baseUrl = tenant.custom_domain
    ? `https://${tenant.custom_domain}`
    : `https://${tenant.subdomain}.michaelfreddesigns.com`;

  return (pages || [])
    .filter(page => page.show_in_nav !== false)
    .map(page => ({
      url: page.page_slug === 'index' ? baseUrl : `${baseUrl}/${page.page_slug}`,
      lastModified: page.updated_at ? new Date(page.updated_at) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: page.page_slug === 'index' ? 1.0 : 0.7,
    }));
}
