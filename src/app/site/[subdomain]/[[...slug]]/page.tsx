import { notFound } from 'next/navigation';
import { getTenantBySubdomain, getPageData } from '@/lib/supabase';
import { Renderers } from '@/lib/blocks';

interface SiteFallbackPageProps {
  params: Promise<{
    subdomain: string;
    slug?: string[];
  }>;
}

/**
 * Local development fallback route.
 *
 * Since subdomains don't work on localhost, this route lets you test
 * tenant site rendering via a path-based URL:
 *
 *   http://localhost:3000/site/acme         → renders acme's index page
 *   http://localhost:3000/site/acme/about   → renders acme's about page
 *
 * In production, the Edge Middleware handles all subdomain routing —
 * this route is only needed for local dev convenience.
 */
export default async function SiteFallbackPage({ params }: SiteFallbackPageProps) {
  const resolvedParams = await params;
  const { subdomain } = resolvedParams;
  const slugParts = resolvedParams.slug || [];
  const pageSlug = slugParts.length > 0 ? slugParts.join('/') : 'index';

  // 1. Resolve the tenant by subdomain
  const tenant = await getTenantBySubdomain(subdomain);
  if (!tenant) {
    notFound();
  }

  // 2. Fetch the page data
  const pageData = await getPageData(tenant.id, pageSlug);
  if (!pageData) {
    notFound();
  }

  // 3. Extract sections and theme
  const sections: any[] = Array.isArray(pageData.canvas_json)
    ? pageData.canvas_json
    : [];

  const theme = pageData.theme_json || {};
  const themeStyle: React.CSSProperties = {
    ['--color-primary' as any]: theme.colorPrimary || '#3b82f6',
    ['--color-secondary' as any]: theme.colorSecondary || '#10b981',
    ['--color-accent' as any]: theme.colorAccent || '#f59e0b',
    ['--color-text' as any]: theme.colorText || '#1a1a1a',
    ['--color-card' as any]: theme.colorCard || '#ffffff',
  };
  if (theme.fontFamily) {
    themeStyle.fontFamily = theme.fontFamily;
  }

  return (
    <>
      {/* Dev-only banner to indicate this is a local preview */}
      <div className="bg-yellow-400 text-black text-center py-1 px-4 text-xs font-bold uppercase tracking-widest">
        🛠 Local Dev Preview — {tenant.name} ({subdomain}.michaelfreddesigns.com)
      </div>

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
            console.warn(`[SiteFallback] No renderer found for block type: ${section.type}`);
            return null;
          }
          return (
            <div key={section.id}>
              {Renderer({ ...(section.props || {}), tenantId: tenant.id })}
            </div>
          );
        })}

        {sections.length === 0 && (
          <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">No Content Yet</h1>
              <p className="text-gray-500 text-lg mb-2">
                Tenant: <strong>{tenant.name}</strong>
              </p>
              <p className="text-gray-400 text-sm">
                Publish content from the dashboard to see it here.
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export async function generateMetadata({ params }: SiteFallbackPageProps) {
  const resolvedParams = await params;
  const { subdomain } = resolvedParams;
  const tenant = await getTenantBySubdomain(subdomain);

  return {
    title: tenant ? `${tenant.name} — Local Preview` : 'Site Not Found',
    description: tenant ? `Local development preview for ${tenant.name}` : '',
  };
}
