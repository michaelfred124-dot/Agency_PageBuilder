-- ============================================================
-- 011: CRM Schema (client pipeline, activity log, tasks, onboarding intake)
--
-- Keyed by auth.users.id (not tenants.id) — pipeline stage and relationship
-- data must exist BEFORE a tenant does: a DIY/DFY signup with no site
-- provisioned yet is exactly the highest-value moment for a lead pipeline
-- to track. A client who later owns multiple tenants also has ONE
-- relationship, not one per site.
--
-- RLS is enabled but no policies are added — every access path goes
-- through the service-role client behind the app-layer checkAdminAuth()
-- gate (src/utils/adminAuth.ts), matching the rest of this codebase's real
-- admin write paths (see 009_ecommerce_schema.sql for the same pattern
-- applied to store_products/store_orders... actually those DO have public
-- read policies; CRM tables have no legitimate public/client access at all,
-- so no policies is correct here, not an oversight).
-- ============================================================

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
