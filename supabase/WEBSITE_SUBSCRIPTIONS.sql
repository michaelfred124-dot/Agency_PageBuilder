-- ============================================================================
-- WEBSITE SUBSCRIPTIONS  (one-shot, safe to re-run)
--
-- A paying customer of the website-as-a-service plans, plus the intake answers
-- they submit after checkout. This is the whole order pipeline:
--
--   pending_payment -> active -> intake_complete -> building -> live
--
-- Paste into the Supabase SQL Editor (Dashboard -> SQL Editor -> New query).
-- ============================================================================

CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS website_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Stripe
  stripe_session_id TEXT UNIQUE NOT NULL,
  stripe_subscription_id TEXT,
  stripe_customer_id TEXT,

  -- Who
  customer_email TEXT,
  customer_name TEXT,

  -- What they bought (priced server-side from src/lib/plans.ts)
  plan_id TEXT NOT NULL,
  plan_name TEXT NOT NULL,
  monthly_cents INTEGER NOT NULL,

  -- Pipeline
  status TEXT NOT NULL DEFAULT 'pending_payment',
  -- pending_payment | active | intake_complete | building | live | cancelled

  -- Questionnaire answers, filled in after payment on /welcome
  intake JSONB,
  intake_completed_at TIMESTAMP WITH TIME ZONE,

  -- Set once the designer provisions their tenant site
  tenant_id UUID,
  internal_notes TEXT DEFAULT '',

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_web_subs_status ON website_subscriptions(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_web_subs_email ON website_subscriptions(customer_email);

ALTER TABLE website_subscriptions ENABLE ROW LEVEL SECURITY;

-- No policies on purpose. Checkout, the Stripe webhook, the intake form, and the
-- admin board all run server-side with the service-role key. Nothing in a
-- browser reads or writes this table directly, so customer records and Stripe
-- IDs are never exposed.

DROP TRIGGER IF EXISTS trg_web_subs_updated ON website_subscriptions;
CREATE TRIGGER trg_web_subs_updated BEFORE UPDATE ON website_subscriptions
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================================================
-- Done. Verify with:  select count(*) from website_subscriptions;  (returns 0)
-- ============================================================================
