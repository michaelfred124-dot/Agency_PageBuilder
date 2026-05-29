import { NextRequest, NextResponse } from 'next/server';
import { createTenant, getTenantBySubdomain, upsertPageData } from '@/lib/supabase';

/**
 * API Route: POST /api/publish
 *
 * Publishes a site's layout to Supabase. Called from the dashboard
 * when the user clicks "Publish" in the editor.
 *
 * Body:
 * {
 *   subdomain: string,      // e.g. "acme"
 *   siteName: string,        // e.g. "Acme Corp"
 *   pageSlug: string,        // e.g. "index"
 *   canvasJson: any[],       // The sections array from the builder
 *   themeJson?: any          // Optional theme overrides
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { subdomain, siteName, pageSlug = 'index', canvasJson, themeJson, ownerId } = body;

    if (!subdomain || !siteName || !canvasJson) {
      return NextResponse.json(
        { error: 'Missing required fields: subdomain, siteName, canvasJson' },
        { status: 400 }
      );
    }

    // Sanitize subdomain
    const cleanSubdomain = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (!cleanSubdomain) {
      return NextResponse.json(
        { error: 'Invalid subdomain. Use only lowercase letters, numbers, and hyphens.' },
        { status: 400 }
      );
    }

    // 1. Check if tenant exists, create if not
    let tenant = await getTenantBySubdomain(cleanSubdomain);
    if (!tenant) {
      tenant = await createTenant(siteName, cleanSubdomain, undefined, ownerId);
      if (!tenant) {
        return NextResponse.json(
          { error: 'Failed to create tenant. The subdomain may already be taken.' },
          { status: 409 }
        );
      }
    }

    // 2. Upsert the page data
    const pageData = await upsertPageData(tenant.id, pageSlug, canvasJson, themeJson);
    if (!pageData) {
      return NextResponse.json(
        { error: 'Failed to save page data to Supabase.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      tenant: {
        id: tenant.id,
        name: tenant.name,
        subdomain: tenant.subdomain,
        custom_domain: tenant.custom_domain,
      },
      page: {
        id: pageData.id,
        page_slug: pageData.page_slug,
        updated_at: pageData.updated_at,
      },
      liveUrl: `${cleanSubdomain}.michaelfreddesigns.com`,
      devUrl: `/site/${cleanSubdomain}`,
    });
  } catch (error: any) {
    console.error('[API /publish] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
