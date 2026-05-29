import { notFound } from 'next/navigation';
import { getTenantBySubdomain, getTenantByCustomDomain, getPageData } from '@/lib/supabase';
import { Renderers } from '@/lib/blocks';

interface TenantPageProps {
  params: Promise<{
    domain: string;
    slug?: string[];
  }>;
}

/**
 * Dynamic tenant page renderer.
 *
 * This route is the target of the Edge Middleware rewrite:
 *   acme.michaelfreddesigns.com/about → /_tenants/acme/about
 *
 * It resolves the tenant, fetches the canvas_json for the requested page,
 * and renders it using the existing block Renderers from src/lib/blocks.tsx.
 */
export default async function TenantPage({ params }: TenantPageProps) {
  const resolvedParams = await params;
  const { domain } = resolvedParams;
  const slugParts = resolvedParams.slug || [];
  const pageSlug = slugParts.length > 0 ? slugParts.join('/') : 'index';

  // 1. Resolve the tenant — try subdomain first, then custom domain
  let tenant = await getTenantBySubdomain(domain);
  if (!tenant) {
    tenant = await getTenantByCustomDomain(domain);
  }
  if (!tenant) {
    notFound();
  }

  // 2. Fetch the page data for this tenant + slug
  const pageData = await getPageData(tenant.id, pageSlug);
  if (!pageData) {
    notFound();
  }

  // 3. Extract the sections array from canvas_json
  const sections: any[] = Array.isArray(pageData.canvas_json)
    ? pageData.canvas_json
    : [];

  // 4. Extract optional theme overrides
  const theme = pageData.theme_json || {};

  // 5. Build dynamic inline styles from theme
  const themeStyle: React.CSSProperties = {};
  if (theme.fontFamily) {
    themeStyle.fontFamily = theme.fontFamily;
  }

  return (
    <>
      {/* Inject Google Font if specified */}
      {theme.fontFamily && theme.fontFamily !== 'System Default' && (
        // eslint-disable-next-line @next/next/no-page-custom-font
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${encodeURIComponent(theme.fontFamily)}:wght@300;400;500;600;700;800;900&display=swap`}
        />
      )}

      <main style={themeStyle}>
        {sections.map((section: any) => {
          const Renderer = Renderers[section.type];
          if (!Renderer) {
            console.warn(`[TenantPage] No renderer found for block type: ${section.type}`);
            return null;
          }
          return (
            <div key={section.id}>
              {Renderer(section.props || {})}
            </div>
          );
        })}

        {sections.length === 0 && (
          <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
              <p className="text-gray-500 text-lg">
                {tenant.name} is being built. Check back soon!
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

/**
 * Generate dynamic metadata for SEO based on the tenant's name.
 */
export async function generateMetadata({ params }: TenantPageProps) {
  const resolvedParams = await params;
  const { domain } = resolvedParams;

  let tenant = await getTenantBySubdomain(domain);
  if (!tenant) {
    tenant = await getTenantByCustomDomain(domain);
  }

  return {
    title: tenant ? tenant.name : 'Site Not Found',
    description: tenant ? `Welcome to ${tenant.name}` : 'This site could not be found.',
  };
}
