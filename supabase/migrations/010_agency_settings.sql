-- ============================================================
-- 010: Agency Settings (fixes the global_settings naming collision)
--
-- global_settings (002_dashboard_schema.sql) is PER-TENANT SEO settings,
-- keyed by tenant_id as its PRIMARY KEY, and is actively used by the client
-- dashboard's "SEO Global Settings" form — left untouched here.
--
-- 008_global_settings_schema.sql separately tried to CREATE TABLE IF NOT
-- EXISTS global_settings with an incompatible shape (nullable tenant_id,
-- master_domain/global_tracking_script/default_seo_description columns).
-- Since 002 already owns the name, 008's version never actually took effect
-- in a database where 002 ran first — admin/settings/page.tsx has been
-- reading/writing columns that don't exist on the real table.
--
-- Fix: give the agency-wide (not per-tenant) settings their own table name.
-- ============================================================

CREATE TABLE IF NOT EXISTS agency_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  master_domain TEXT DEFAULT 'michaelfreddesigns.com',
  global_tracking_script TEXT DEFAULT '',
  default_seo_description TEXT DEFAULT 'We build premium websites.',
  diy_monthly_price_cents INTEGER NOT NULL DEFAULT 2000,
  dfy_monthly_price_cents INTEGER NOT NULL DEFAULT 15000,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Single-row-by-convention: seed the one row admin/settings reads/writes.
INSERT INTO agency_settings (master_domain)
SELECT 'michaelfreddesigns.com'
WHERE NOT EXISTS (SELECT 1 FROM agency_settings);

ALTER TABLE agency_settings ENABLE ROW LEVEL SECURITY;
-- No policies: only ever accessed via the service-role client behind the
-- app-layer checkAdminAuth() gate (src/utils/adminAuth.ts), matching the
-- rest of this codebase's real admin write paths.

CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_agency_settings_updated ON agency_settings;
CREATE TRIGGER trg_agency_settings_updated BEFORE UPDATE ON agency_settings
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
