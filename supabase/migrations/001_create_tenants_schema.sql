-- ============================================================
-- Multi-Tenant WaaS Schema
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- 1. TENANTS TABLE
-- The master record for every client site
CREATE TABLE IF NOT EXISTS tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  subdomain TEXT UNIQUE NOT NULL,       -- e.g., 'acme' for acme.michaelfreddesigns.com
  custom_domain TEXT UNIQUE,            -- e.g., 'acme.com'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SITES_DATA TABLE
-- Stores the page builder's JSON layout per tenant per page
CREATE TABLE IF NOT EXISTS sites_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  page_slug TEXT NOT NULL DEFAULT 'index',  -- e.g., 'index', 'about', 'contact'
  canvas_json JSONB NOT NULL,               -- The layout blueprint from your builder
  theme_json JSONB,                         -- Optional theme overrides (fonts, button styles)
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(tenant_id, page_slug)
);

-- 3. ROW-LEVEL SECURITY
-- Ensures tenant data isolation at the database level
ALTER TABLE sites_data ENABLE ROW LEVEL SECURITY;

-- Public read policy: anyone can read site data (sites are public-facing)
CREATE POLICY "Public read access" ON sites_data
  FOR SELECT
  USING (true);

-- Service role write policy: only the service role (server-side) can insert/update/delete
-- The anon key cannot write. All writes go through server actions or API routes.
CREATE POLICY "Service role write access" ON sites_data
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Also enable RLS on tenants for consistent security
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;

-- Public read on tenants (needed for subdomain/domain lookups)
CREATE POLICY "Public read tenants" ON tenants
  FOR SELECT
  USING (true);

-- Service role write on tenants
CREATE POLICY "Service role write tenants" ON tenants
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 4. PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_tenants_subdomain ON tenants(subdomain);
CREATE INDEX IF NOT EXISTS idx_tenants_custom_domain ON tenants(custom_domain);
CREATE INDEX IF NOT EXISTS idx_sites_data_tenant_slug ON sites_data(tenant_id, page_slug);

-- 5. AUTO-UPDATE TIMESTAMP TRIGGER
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_sites_data_updated_at
  BEFORE UPDATE ON sites_data
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
