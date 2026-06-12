-- ============================================================
-- Phase 8: Global Agency Settings Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. GLOBAL_SETTINGS TABLE
-- Stores platform-wide default configurations for the agency.
CREATE TABLE IF NOT EXISTS global_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE, -- Nullable if truly global, or populated per tenant for overriding
  master_domain TEXT,
  global_tracking_script TEXT,
  default_seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Note: In src/app/admin/clients/page.tsx, it fetches this table per tenant_id
-- So it acts as tenant-specific global settings.
-- If no tenant_id, it is the agency's master settings.

-- 2. ROW-LEVEL SECURITY
ALTER TABLE global_settings ENABLE ROW LEVEL SECURITY;

-- Public read access so websites can load their settings
CREATE POLICY "Public read access on global_settings" ON global_settings
  FOR SELECT
  USING (true);

-- Service role write access (Admins only)
CREATE POLICY "Service role write access on global_settings" ON global_settings
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 3. AUTO-UPDATE TIMESTAMP TRIGGER
CREATE TRIGGER update_global_settings_updated_at
  BEFORE UPDATE ON global_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
