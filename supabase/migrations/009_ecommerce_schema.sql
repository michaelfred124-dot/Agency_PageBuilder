-- ============================================================
-- 009: Native Ecommerce (Stripe Connect) Schema
-- Per-tenant product catalogs, orders, and Stripe Connect fields
-- ============================================================

-- 1. Stripe Connect fields on tenants
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS stripe_account_id TEXT;
ALTER TABLE tenants ADD COLUMN IF NOT EXISTS store_settings JSONB DEFAULT '{}'::jsonb;

-- 2. Products
CREATE TABLE IF NOT EXISTS store_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  currency TEXT NOT NULL DEFAULT 'usd',
  images JSONB DEFAULT '[]'::jsonb,          -- array of image URLs
  active BOOLEAN DEFAULT true,
  inventory INTEGER,                          -- null = untracked/unlimited
  sku TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_store_products_tenant ON store_products(tenant_id);
CREATE INDEX IF NOT EXISTS idx_store_products_active ON store_products(tenant_id, active);

-- 3. Orders
CREATE TABLE IF NOT EXISTS store_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  stripe_session_id TEXT UNIQUE,
  stripe_payment_intent TEXT,
  customer_email TEXT,
  customer_name TEXT,
  amount_total_cents INTEGER,
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'pending',              -- pending | paid | fulfilled | refunded | canceled
  line_items JSONB DEFAULT '[]'::jsonb,       -- [{product_id, name, qty, unit_price_cents}]
  shipping JSONB,                             -- address snapshot from Stripe
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_store_orders_tenant ON store_orders(tenant_id, created_at DESC);

-- 4. RLS — all writes go through service-role API routes; public may read active products
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

-- updated_at triggers
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_store_products_updated ON store_products;
CREATE TRIGGER trg_store_products_updated BEFORE UPDATE ON store_products
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_store_orders_updated ON store_orders;
CREATE TRIGGER trg_store_orders_updated BEFORE UPDATE ON store_orders
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
