import { MetadataRoute } from 'next';
import { getTenantBySubdomain, getTenantByCustomDomain } from '@/lib/supabase';

/** Per-tenant robots.txt — same rewrite reachability as sitemap.ts (see there). */
export default async function robots({ params }: { params: Promise<{ domain: string }> }): Promise<MetadataRoute.Robots> {
  const { domain } = await params;

  let tenant = await getTenantBySubdomain(domain);
  if (!tenant) {
    tenant = await getTenantByCustomDomain(domain);
  }

  const baseUrl = tenant
    ? (tenant.custom_domain ? `https://${tenant.custom_domain}` : `https://${tenant.subdomain}.michaelfreddesigns.com`)
    : null;

  return {
    rules: { userAgent: '*', allow: '/' },
    ...(baseUrl ? { sitemap: `${baseUrl}/sitemap.xml` } : {}),
  };
}
