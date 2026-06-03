-- ============================================================
-- Phase 6: Admin CRM Features Migration
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Add plan_tier to tenants table if it does not exist
ALTER TABLE tenants 
ADD COLUMN IF NOT EXISTS plan_tier TEXT DEFAULT 'DIY';

-- 2. Add notes to tenants table if it does not exist
ALTER TABLE tenants 
ADD COLUMN IF NOT EXISTS notes TEXT DEFAULT '';

-- 3. Update existing tenants to default to 'DIY' if plan_tier is null
UPDATE tenants 
SET plan_tier = 'DIY' 
WHERE plan_tier IS NULL;
