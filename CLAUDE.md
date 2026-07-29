# Michaelfred Designs Agency — Code Guide

## Overview

This is a **WaaS (Websites as a Service) SaaS platform**: customers subscribe to page counts ($30–$100/mo), get WordPress + Divi sites automatically provisioned on Cloudways, and receive a client dashboard for text/image edits.

The only code-driven sites in the repo are **portfolio/showcase projects** in `/src/app/work/` — these use a Next.js block system and are NOT part of the product.

## Architecture: WaaS Subscription → WordPress Provisioning

```
/pricing
    ↓ Stripe subscription
/api/checkout/plan
    ↓ session → webhook
/api/webhooks/stripe (checkout.session.completed)
    ↓ create order row with wp_status='queued'
/api/provision/run (cron: every 2 min, or manual button)
    ↓ state machine: queued → cloning → configuring → ready
Cloudways API
    ↓ clone master Divi site
WordPress REST API
    ↓ create client admin account, set site title
/api/intake
    ↓ 14-field questionnaire after payment
/admin/orders
    ↓ kanban board: track 6 statuses, retry failed sites
```

## Subscription & Payment

**Files:**
- `src/lib/plans.ts` — **single source of truth** for pricing (3-page/$30, 5-page/$50, 10-page/$100, add-ons)
- `src/app/pricing/page.tsx` — renders from `PLANS`, CTAs call `/api/checkout/plan`
- `src/app/api/checkout/plan/route.ts` — prices server-side (never from request body), creates Stripe Checkout session, writes `website_subscriptions` row with `wp_status='queued'` and `status='pending_payment'`

**Security:** The server prices from `plans.ts` and ignores price data in the request, so clients cannot tamper.

## Stripe Webhook & Order Activation

**File:** `src/app/api/webhooks/stripe/route.ts`

On `checkout.session.completed`:
- Upserts `website_subscriptions` row (idempotent on `stripe_session_id`)
- Sets `status='active'` (payment confirmed)
- Sends welcome email with `/welcome?session_id=...` intake link
- `wp_status` stays `'queued'` — provisioning is not inline

## Intake Questionnaire

**File:** `src/app/api/intake/route.ts` + `src/app/welcome/page.tsx`

After payment, the customer fills a 14-field form:
- Business name, contact info, phone
- Industry, what they do, target customers
- Brand colors, logo, existing site, inspiration sites
- Domain name, social links, add-ons of interest, anything else

`POST /api/intake` saves to `website_subscriptions.intake` (JSONB), sets `status='intake_complete'`, and renames the WordPress site if provisioning is already done.

## Automatic WordPress Provisioning

**Files:**
- `src/lib/wordpress/provider.ts` — host-agnostic interface (cloning is abstraction over Cloudways/GridPane/RunCloud)
- `src/lib/wordpress/cloudways.ts` — Cloudways adapter
- `src/lib/wordpress/wpRest.ts` — WordPress REST calls (create admin, set title)
- `src/lib/wordpress/provision.ts` — resumable state machine
- `src/app/api/provision/run/route.ts` — cron endpoint (`/api/provision/run`, fired by Vercel every 2 min)
- `src/app/api/admin/provision/route.ts` — manual retry button for `/admin/orders`

**How it works:**

1. **Queued** — order created, waiting to clone
2. **Cloning** — API call to Cloudways to clone the master Divi site (takes ~1–3 min); polling the operation
3. **Configuring** — clone finished, liveness check (newly cloned WP can 502 briefly), create client admin account via WordPress REST, set site title, send credentials email
4. **Ready** — site is live, client has login, admin is notified of intake

**Why not inline?** Cloning takes minutes. A Stripe webhook can't block that long without timing out and causing retries on a successful payment. Instead, the webhook marks the order paid, and a cron task drives the state machine one step per tick.

**Idempotency:** Every step is safe to retry. If a tick crashes mid-step, the next tick picks up where it left off.

**Failure handling:** After 10 retries, the order moves to `status='failed'` and admin gets an email.

## Orders Dashboard

**File:** `src/app/admin/orders/page.tsx` + `src/app/api/admin/orders/route.ts`

Kanban board over 6 statuses:
- `pending_payment` — checkout started, not completed (abandoned checkout follow-up)
- `active` — paid, awaiting intake
- `intake_complete` — questionnaire done, ready to build
- `building` — in progress
- `live` — deployed
- `cancelled` — terminated

Each card shows:
- Customer name (from intake.businessName or email)
- Plan name + MRR
- WordPress site URL + admin login (if provisioned)
- Intake answers in a detail drawer
- Status dropdown
- Notes (saved on blur)
- Retry button (for failed provisioning)

**MRR total** in the header (sum of `active`, `intake_complete`, `building`, `live` orders).

## Environment Variables

```bash
# Stripe
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Cloudways provisioning
CLOUDWAYS_EMAIL=you@example.com
CLOUDWAYS_API_KEY=...
CLOUDWAYS_SERVER_ID=...          # run: npm run cloudways:ids
CLOUDWAYS_MASTER_APP_ID=...      # (same command)

# WordPress master site
WP_MASTER_ADMIN_USER=admin
WP_MASTER_APP_PASSWORD=...       # Application Password from Users → Profile

# Transactional email
RESEND_API_KEY=re_...
EMAIL_FROM_ADDRESS=Michaelfred Designs <notifications@michaelfreddesigns.com>

# Cron security
CRON_SECRET=...                  # any long random string; sent by Vercel Cron in Authorization header

# Public/admin URLs
NEXT_PUBLIC_SITE_URL=https://www.michaelfreddesigns.com
ADMIN_EMAILS=you@example.com     # comma-separated; for admin alerts
```

## Portfolio (Legacy Block System)

**Files:**
- `src/lib/blocks/` — 27 block families (brighter-solar, easydoesit, voltvikings, etc.), each with `.tsx` component and `.schemas.ts` metadata
- `src/lib/templates.ts` — catalog of 27 TEMPLATES (section arrays) and TEMPLATE_PAGES (multi-page layouts)
- `src/lib/templateCatalog.ts` — metadata (name, screenshot URL) for dashboard preview
- `src/app/work/[site-name]/` — ~17 showcase sites, most rendering via `<TemplatePageRenderer templateKey="..." />`

**Why it survives:** The portfolio is your proof of work. It's static, hand-coded, deployed with the app. Clients never interact with it.

**Why it's kept separate:** The block system was designed for a page builder that we deleted. The portfolio is the only artifact from that era still in use. It's safe to leave as-is because:
1. Changes to it don't affect the product
2. Removing it would blank your showcase
3. It's not deployed to clients

If you later rebuild the showcase in WordPress, you can delete `src/lib/blocks/` and `src/lib/templates.ts` entirely.

## Database

**Table:** `website_subscriptions` (Supabase)

Columns:
- `id` (UUID)
- `stripe_session_id` (UNIQUE, UNIQUE)
- `stripe_subscription_id` (Stripe sub ID after activation)
- `stripe_customer_id` (Stripe customer ID)
- `customer_email`, `customer_name` (from Stripe checkout)
- `plan_id`, `plan_name`, `monthly_cents` (from `src/lib/plans.ts`)
- `status` (pending_payment | active | intake_complete | building | live | cancelled)
- `intake` (JSONB, 14 fields from form)
- `intake_completed_at` (when /api/intake succeeded)
- `tenant_id` (legacy, unused — WordPress doesn't use tenants)
- `internal_notes` (admin can edit)
- **WordPress provisioning columns:**
  - `wp_status` (queued | cloning | configuring | ready | failed | skipped)
  - `wp_server_id`, `wp_app_id`, `wp_app_label` (Cloudways IDs)
  - `wp_operation_id` (clone job ID while polling)
  - `wp_url`, `wp_admin_url` (public site + login after ready)
  - `wp_admin_user`, `wp_admin_password` (client's login, for the email)
  - `wp_error` (last error message if failed)
  - `wp_attempts`, `wp_last_attempt_at` (retry accounting)
  - `wp_provisioned_at` (timestamp when state reached 'ready')

**RLS:** enabled with **zero policies** (all access via service-role key behind admin auth check).

## Deprecated (Deleted)

- `SiteEditor.tsx` — drag-drop page builder component
- `ClientSiteEditor.tsx` — client text/image editor (replaced by WordPress dashboard)
- `/app/tenants` — multi-tenant rendering (clients don't visit this; they go to their WordPress site)
- `/app/site` — local dev rendering
- `/app/preview` — draft preview
- `/app/admin/editor` — admin site builder
- `/api/site` — tenant site API
- `/api/admin/sites` — admin sites API
- `draftService.ts`, `undoRedoStore.ts` — editor state management
- Bento cluster — `BentoCanvas`, `BentoPreviewRenderer`, `bentoStore`, etc.

None of these are used by the product anymore.

## Vercel Configuration

**File:** `vercel.json`

Registers a cron job that calls `/api/provision/run` every 2 minutes. On the Hobby plan this may not fire at all; upgrade to Pro or use the manual button in `/admin/orders`.

## Getting Started

1. Run `supabase/WEBSITE_SUBSCRIPTIONS.sql` + `supabase/WORDPRESS_PROVISIONING.sql` in the SQL Editor.
2. Set all env vars (above).
3. Build a master Divi site on Cloudways (your 5-page template).
4. Run `npm run cloudways:ids` to find your server and app IDs.
5. Test with Stripe test card in `/pricing`.
6. Watch `/admin/orders` as the provisioning state machine runs.
