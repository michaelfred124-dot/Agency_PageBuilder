-- ============================================================
-- Phase 3: Dashboard & Media Migration Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Update Tenants Table for Dashboard Data
ALTER TABLE tenants 
ADD COLUMN IF NOT EXISTS owner_id UUID REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Draft',
ADD COLUMN IF NOT EXISTS template_key TEXT,
ADD COLUMN IF NOT EXISTS preview_url TEXT,
ADD COLUMN IF NOT EXISTS image TEXT;

-- 2. Create Media Table
CREATE TABLE IF NOT EXISTS site_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  owner_id UUID REFERENCES auth.users(id),
  url TEXT NOT NULL,
  type TEXT DEFAULT 'image',
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Global Settings Table
CREATE TABLE IF NOT EXISTS global_settings (
  tenant_id UUID PRIMARY KEY REFERENCES tenants(id) ON DELETE CASCADE,
  owner_id UUID REFERENCES auth.users(id),
  business_name TEXT,
  support_email TEXT,
  seo_description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE site_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE global_settings ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies for site_media
-- Public read access for media (needed to render sites)
CREATE POLICY "Public read access on site_media" ON site_media
  FOR SELECT USING (true);

-- Authenticated users can insert/update/delete their own media
CREATE POLICY "Users can manage their own media" ON site_media
  FOR ALL USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- 6. RLS Policies for global_settings
-- Public read access for global settings
CREATE POLICY "Public read access on global_settings" ON global_settings
  FOR SELECT USING (true);

-- Authenticated users can manage their own settings
CREATE POLICY "Users can manage their own settings" ON global_settings
  FOR ALL USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- 7. Update Tenants RLS for owners
CREATE POLICY "Users can manage their own tenants" ON tenants
  FOR ALL USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- 8. Auto-update timestamp for global_settings
CREATE TRIGGER update_global_settings_updated_at
  BEFORE UPDATE ON global_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
