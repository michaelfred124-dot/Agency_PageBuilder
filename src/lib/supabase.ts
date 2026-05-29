import { createClient, SupabaseClient } from '@supabase/supabase-js';

// ---------------------------------------------------------------------------
// Environment Variables
// ---------------------------------------------------------------------------
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// ---------------------------------------------------------------------------
// Client Instances
// ---------------------------------------------------------------------------

// Custom cookie storage provider to sync authentication session with cookies
const cookieStorage = {
  getItem: (key: string) => {
    if (typeof document === 'undefined') return null;
    const name = key + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  },
  setItem: (key: string, value: string) => {
    if (typeof document === 'undefined') return;
    document.cookie = `${key}=${value}; path=/; max-age=31536000; SameSite=Lax; Secure`;
  },
  removeItem: (key: string) => {
    if (typeof document === 'undefined') return;
    document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax; Secure`;
  }
};

/**
 * Get the cookie name used by Supabase client based on the project URL.
 */
export function getSupabaseCookieName(): string {
  const match = SUPABASE_URL.match(/https:\/\/([a-z0-9]+)\.supabase\./i);
  const projectRef = match ? match[1] : 'auth-token';
  return `sb-${projectRef}-auth-token`;
}

/**
 * Browser / client-side Supabase client (uses the anon key).
 * Safe to use in "use client" components — respects RLS policies.
 */
let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient(): SupabaseClient {
  if (!browserClient) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.warn('[Supabase] Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
    }
    browserClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        storage: cookieStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce',
      }
    });
  }
  return browserClient;
}

/**
 * Server-side Supabase client (uses the service role key).
 * Bypasses RLS — use only in server components, API routes, and middleware.
 * Creates a new instance each call to avoid shared state across requests.
 */
export function getSupabaseServerClient(): SupabaseClient {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.warn('[Supabase] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY for server client');
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  custom_domain: string | null;
  created_at: string;
}

export interface SitePageData {
  id: string;
  tenant_id: string;
  page_slug: string;
  canvas_json: any;      // The section data array from the builder
  theme_json: any | null; // Optional theme overrides
  updated_at: string;
}

// ---------------------------------------------------------------------------
// Tenant Resolution Helpers
// ---------------------------------------------------------------------------

/**
 * Look up a tenant by its subdomain (e.g. "acme").
 */
export async function getTenantBySubdomain(subdomain: string): Promise<Tenant | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from('tenants')
    .select('*')
    .eq('subdomain', subdomain)
    .single();

  if (error || !data) return null;
  return data as Tenant;
}

/**
 * Look up a tenant by its custom domain (e.g. "acme.com").
 */
export async function getTenantByCustomDomain(domain: string): Promise<Tenant | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from('tenants')
    .select('*')
    .eq('custom_domain', domain)
    .single();

  if (error || !data) return null;
  return data as Tenant;
}

// ---------------------------------------------------------------------------
// Page Data Helpers
// ---------------------------------------------------------------------------

/**
 * Fetch the canvas_json for a specific page of a tenant's site.
 */
export async function getPageData(tenantId: string, pageSlug: string = 'index'): Promise<SitePageData | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from('sites_data')
    .select('*')
    .eq('tenant_id', tenantId)
    .eq('page_slug', pageSlug)
    .single();

  if (error || !data) return null;
  return data as SitePageData;
}

/**
 * Insert or update page data for a tenant. Uses upsert on the
 * (tenant_id, page_slug) unique constraint.
 */
export async function upsertPageData(
  tenantId: string,
  pageSlug: string,
  canvasJson: any,
  themeJson?: any
): Promise<SitePageData | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from('sites_data')
    .upsert(
      {
        tenant_id: tenantId,
        page_slug: pageSlug,
        canvas_json: canvasJson,
        theme_json: themeJson || null,
      },
      { onConflict: 'tenant_id,page_slug' }
    )
    .select()
    .single();

  if (error) {
    console.error('[Supabase] upsertPageData error:', error.message);
    return null;
  }
  return data as SitePageData;
}

// ---------------------------------------------------------------------------
// Tenant Management Helpers
// ---------------------------------------------------------------------------

/**
 * Create a new tenant record.
 */
export async function createTenant(
  name: string,
  subdomain: string,
  customDomain?: string,
  ownerId?: string
): Promise<Tenant | null> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from('tenants')
    .insert({
      name,
      subdomain: subdomain.toLowerCase().replace(/[^a-z0-9-]/g, ''),
      custom_domain: customDomain || null,
      owner_id: ownerId || null,
    })
    .select()
    .single();

  if (error) {
    console.error('[Supabase] createTenant error:', error.message);
    return null;
  }
  return data as Tenant;
}

/**
 * List all tenants (admin dashboard use).
 */
export async function listTenants(): Promise<Tenant[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from('tenants')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[Supabase] listTenants error:', error.message);
    return [];
  }
  return (data || []) as Tenant[];
}

/**
 * Check if a subdomain is available.
 */
export async function isSubdomainAvailable(subdomain: string): Promise<boolean> {
  const tenant = await getTenantBySubdomain(subdomain);
  return tenant === null;
}
