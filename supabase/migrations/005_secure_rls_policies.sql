-- ============================================================
-- Security and Compliance Hardening: Secure RLS Policies
-- ============================================================

-- 1. Drop overly-permissive write policies that allowed anonymous writes
DROP POLICY IF EXISTS "Service role write access" ON sites_data;
DROP POLICY IF EXISTS "Service role write tenants" ON tenants;

-- 2. Create owner-based management policies for sites_data
-- Only authenticated owners can insert, update, or delete site layouts
CREATE POLICY "Users can manage their own sites_data" ON sites_data
  FOR ALL
  TO authenticated
  USING (
    tenant_id IN (
      SELECT id FROM tenants WHERE owner_id = auth.uid()
    )
  )
  WITH CHECK (
    tenant_id IN (
      SELECT id FROM tenants WHERE owner_id = auth.uid()
    )
  );
