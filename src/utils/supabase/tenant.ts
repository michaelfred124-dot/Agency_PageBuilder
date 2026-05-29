import { createClient } from './server';

export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  custom_domain: string | null;
  created_at: string;
}

export interface SiteData {
  id: string;
  tenant_id: string;
  page_slug: string;
  canvas_json: any;
  theme_json: any;
  updated_at: string;
}

/**
 * Fetch a tenant by their domain or subdomain.
 * @param domain The subdomain (e.g. 'acme') or custom domain (e.g. 'acme.com')
 */
export async function getTenantByDomain(domain: string): Promise<Tenant | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('tenants')
    .select('*')
    .or(`subdomain.eq.${domain},custom_domain.eq.${domain}`)
    .single();

  if (error || !data) {
    return null;
  }

  return data as Tenant;
}

/**
 * Fetch the page data for a specific tenant and page slug.
 * @param tenantId The UUID of the tenant
 * @param slug The page path (e.g. 'index', 'about', etc.)
 */
export async function getTenantSiteData(tenantId: string, slug: string): Promise<SiteData | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('sites_data')
    .select('*')
    .eq('tenant_id', tenantId)
    .eq('page_slug', slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data as SiteData;
}
