-- WordPress + Divi auto-provisioning
--
-- Every paying subscriber gets a WordPress site cloned from a master Divi
-- install. Cloning takes minutes, so provisioning cannot happen inline in the
-- Stripe webhook -- it runs as a resumable state machine advanced by cron:
--
--   queued -> cloning -> configuring -> ready
--                    \-> failed (retryable)
--
-- Each cron tick advances one site by one step and returns, so no single
-- request ever waits on the host's clone operation.

alter table public.website_subscriptions
  -- Where the site is in the provisioning pipeline.
  add column if not exists wp_status text not null default 'queued',

  -- Host identifiers. wp_operation_id is the async job we poll while cloning.
  add column if not exists wp_server_id text,
  add column if not exists wp_app_id text,
  add column if not exists wp_operation_id text,

  -- Unique label given to the cloned app. Doubles as the lookup key for hosts
  -- that don't return the new app id until after the clone finishes.
  add column if not exists wp_app_label text,

  -- The finished site.
  add column if not exists wp_url text,
  add column if not exists wp_admin_url text,
  add column if not exists wp_admin_user text,

  -- Stored so the owner can re-send credentials if the welcome email is lost.
  -- Safe only because this table has RLS enabled with ZERO policies: it is
  -- unreachable except through the service-role key behind an admin check.
  -- If you would rather not hold these, drop this column and use WordPress's
  -- own password-reset flow instead.
  add column if not exists wp_admin_password text,

  -- Failure diagnostics + retry accounting.
  add column if not exists wp_error text,
  add column if not exists wp_attempts integer not null default 0,
  add column if not exists wp_last_attempt_at timestamptz,
  add column if not exists wp_provisioned_at timestamptz;

-- Guard against typos putting a row into a state the runner cannot advance.
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'website_subscriptions_wp_status_check'
  ) then
    alter table public.website_subscriptions
      add constraint website_subscriptions_wp_status_check
      check (wp_status in ('queued','cloning','configuring','ready','failed','skipped'));
  end if;
end $$;

-- The cron runner's hot query: "find the next site needing work, oldest first."
create index if not exists website_subscriptions_wp_status_idx
  on public.website_subscriptions (wp_status, wp_last_attempt_at nulls first)
  where wp_status in ('queued','cloning','configuring');
