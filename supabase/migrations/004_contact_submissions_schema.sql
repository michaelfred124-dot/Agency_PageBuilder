-- ============================================================
-- Phase 4: Contact Submissions (Leads) Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Create Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread', -- 'unread', 'read', 'archived'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies for contact_submissions
-- Public insert access: anyone visiting published sites can submit contact forms
CREATE POLICY "Allow public inserts on contact_submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Authenticated site owners can read/update/delete their own site submissions
CREATE POLICY "Allow owners to manage contact_submissions" ON contact_submissions
  FOR ALL USING (
    tenant_id IN (
      SELECT id FROM tenants WHERE owner_id = auth.uid()
    )
  ) WITH CHECK (
    tenant_id IN (
      SELECT id FROM tenants WHERE owner_id = auth.uid()
    )
  );

-- 4. Create Performance Indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_tenant_id ON contact_submissions(tenant_id);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
