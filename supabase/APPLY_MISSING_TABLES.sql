-- ============================================================================
-- APPLY MISSING TABLES  (one-shot, safe to re-run)
--
-- The Supabase project was missing the tables from migrations 004, 009, 010,
-- and 011, which breaks: contact-form leads, the native store (Stripe Connect),
-- the CRM pipeline, and onboarding intake.
--
-- This file consolidates those four migrations. It is idempotent
-- (CREATE ... IF NOT EXISTS + DROP POLICY/TRIGGER IF EXISTS), so running it more
-- than once is harmless. Paste the whole thing into the Supabase SQL Editor
-- (Dashboard → SQL Editor → New query → Run).
-- ============================================================================

-- Shared helper used by the updated_at triggers below.
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

-- ---------------------------------------------------------------------------
-- 004: Contact submissions (leads)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public inserts on contact_submissions" ON contact_submissions;
CREATE POLICY "Allow public inserts on contact_submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow owners to manage contact_submissions" ON contact_submissions;
CREATE POLICY "Allow owners to manage contact_submissions" ON contact_submissions
  FOR ALL USING (
    tenant_id IN (SELECT id FROM tenants WHERE owner_id = auth.uid())
  ) WITH CHECK (
    tenant_id IN (SELECT id FROM tenants WHERE owner_id = auth.uid())
  );

CREATE INDEX IF NOT EXISTS idx_contact_submissions_tenant_id ON contact_submissions(tenant_id);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- ---------------------------------------------------------------------------
-- 009: Native ecommerce (Stripe Connect)
-- ---------------------------------------------------------------------------
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS stripe_account_id TEXT;
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS store_settings JSONB DEFAULT '{}'::jsonb;

CREATE TABLE IF NOT EXISTS store_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  currency TEXT NOT NULL DEFAULT 'usd',
  images JSONB DEFAULT '[]'::jsonb,
  active BOOLEAN DEFAULT true,
  inventory INTEGER,
  sku TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_store_products_tenant ON store_products(tenant_id);
CREATE INDEX IF NOT EXISTS idx_store_products_active ON store_products(tenant_id, active);

CREATE TABLE IF NOT EXISTS store_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  stripe_session_id TEXT UNIQUE,
  stripe_payment_intent TEXT,
  customer_email TEXT,
  customer_name TEXT,
  amount_total_cents INTEGER,
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'pending',
  line_items JSONB DEFAULT '[]'::jsonb,
  shipping JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_store_orders_tenant ON store_orders(tenant_id, created_at DESC);

ALTER TABLE store_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read active products" ON store_products;
CREATE POLICY "Public read active products" ON store_products
  FOR SELECT USING (active = true);

DROP POLICY IF EXISTS "Owners read own orders" ON store_orders;
CREATE POLICY "Owners read own orders" ON store_orders
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM tenants t WHERE t.id = store_orders.tenant_id AND t.owner_id = auth.uid())
  );

DROP TRIGGER IF EXISTS trg_store_products_updated ON store_products;
CREATE TRIGGER trg_store_products_updated BEFORE UPDATE ON store_products
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_store_orders_updated ON store_orders;
CREATE TRIGGER trg_store_orders_updated BEFORE UPDATE ON store_orders
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ---------------------------------------------------------------------------
-- 010: Agency settings (agency-wide config; single row by convention)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS agency_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  master_domain TEXT DEFAULT 'michaelfreddesigns.com',
  global_tracking_script TEXT DEFAULT '',
  default_seo_description TEXT DEFAULT 'We build premium websites.',
  diy_monthly_price_cents INTEGER NOT NULL DEFAULT 2000,
  dfy_monthly_price_cents INTEGER NOT NULL DEFAULT 15000,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
INSERT INTO agency_settings (master_domain)
SELECT 'michaelfreddesigns.com'
WHERE NOT EXISTS (SELECT 1 FROM agency_settings);

ALTER TABLE agency_settings ENABLE ROW LEVEL SECURITY;

DROP TRIGGER IF EXISTS trg_agency_settings_updated ON agency_settings;
CREATE TRIGGER trg_agency_settings_updated BEFORE UPDATE ON agency_settings
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ---------------------------------------------------------------------------
-- 011: CRM (client pipeline, activity, tasks) + onboarding intake
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS client_profiles (
  user_id UUID PRIMARY KEY,
  pipeline_stage TEXT NOT NULL DEFAULT 'lead',
  lead_source TEXT,
  tags TEXT[] DEFAULT '{}',
  assigned_to UUID,
  next_follow_up_at TIMESTAMP WITH TIME ZONE,
  estimated_mrr_cents INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS client_activity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  tenant_id UUID REFERENCES tenants(id) ON DELETE SET NULL,
  author_id UUID,
  type TEXT NOT NULL DEFAULT 'note',
  body TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_client_activity_user ON client_activity(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS client_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  tenant_id UUID REFERENCES tenants(id) ON DELETE SET NULL,
  assigned_to UUID,
  title TEXT NOT NULL,
  due_at TIMESTAMP WITH TIME ZONE,
  status TEXT NOT NULL DEFAULT 'open',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_client_tasks_user ON client_tasks(user_id, status);

CREATE TABLE IF NOT EXISTS onboarding_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  plan_tier TEXT NOT NULL,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'new',
  converted_tenant_id UUID REFERENCES tenants(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_onboarding_submissions_user ON onboarding_submissions(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_onboarding_submissions_status ON onboarding_submissions(status);

ALTER TABLE client_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding_submissions ENABLE ROW LEVEL SECURITY;

DROP TRIGGER IF EXISTS trg_client_profiles_updated ON client_profiles;
CREATE TRIGGER trg_client_profiles_updated BEFORE UPDATE ON client_profiles
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_client_tasks_updated ON client_tasks;
CREATE TRIGGER trg_client_tasks_updated BEFORE UPDATE ON client_tasks
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================================================
-- Done. Verify with:  select count(*) from store_orders;  (should return 0)
-- ============================================================================
