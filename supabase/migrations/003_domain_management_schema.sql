-- ============================================================
-- Phase 4: Domain Purchase and DNS Management Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Add domain_info column to tenants table to store auto-renew, expiry, and custom DNS records
ALTER TABLE tenants 
ADD COLUMN IF NOT EXISTS domain_info JSONB DEFAULT '{
  "registered_through_us": false,
  "auto_renew": true,
  "expires_at": null,
  "registered_at": null,
  "dns_records": []
}'::jsonb;
