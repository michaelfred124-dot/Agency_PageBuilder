# Michaelfred Designs — Agent & Contributor Guide

This repo is a **WaaS SaaS platform**: a Next.js + Stripe + WordPress provisioning system that automatically builds and delivers client websites.

## What This Codebase Does

1. **Sales funnel** (`/pricing` → Stripe checkout → `/welcome` intake)
2. **Order management** (`/admin/orders` kanban board)
3. **Automatic provisioning** (clone master Divi site on Cloudways per customer)
4. **Portfolio showcase** (static hand-coded `/work` sites, not part of the product)

## Key Systems

### 1. Subscription & Payment Flow
- `src/lib/plans.ts` — pricing source of truth (3/5/10-page tiers + add-ons)
- `src/app/pricing/page.tsx` — renders plans, CTAs call checkout
- `src/app/api/checkout/plan/route.ts` — server-side pricing, Stripe session, DB insert
- `src/app/api/webhooks/stripe/route.ts` — payment confirmation, activate order

### 2. Intake Questionnaire
- `src/app/welcome/page.tsx` — 14-field form after payment
- `src/app/api/intake/route.ts` — saves questionnaire, renames WordPress site if ready

### 3. WordPress Provisioning
- `src/lib/wordpress/` — state machine + host adapters
  - `provider.ts` — host-agnostic interface
  - `cloudways.ts` — Cloudways clone adapter
  - `wpRest.ts` — WordPress REST API helpers
  - `provision.ts` — resumable state machine (queued → cloning → configuring → ready)
- `src/app/api/provision/run/route.ts` — cron worker (every 2 min)
- `src/app/api/admin/provision/route.ts` — manual retry endpoint

### 4. Orders Dashboard
- `src/app/admin/orders/page.tsx` — kanban board over 6 order statuses
- `src/app/api/admin/orders/route.ts` — fetch/update orders and notes

### 5. Email
- `src/lib/email.ts` — transactional email helpers (Resend API)
  - `welcomeSubscriberEmail()` — post-payment intake link
  - `wordpressReadyEmail()` — credentials after provisioning
  - `notifyIntakeCompleteEmail()` — admin alert
  - `notifyProvisioningFailedEmail()` — admin alert on hard failure

## Common Tasks & Where to Look

| Task | Files |
|---|---|
| Change subscription prices | `src/lib/plans.ts` |
| Adjust intake form fields | `src/app/welcome/page.tsx`, `src/app/api/intake/route.ts` |
| Add a new order status | `src/app/admin/orders/page.tsx` (STAGES constant + state machine) |
| Debug provisioning state | `src/lib/wordpress/provision.ts` + run `/api/provision/run` manually |
| Add a second hosting provider | Write a new adapter in `src/lib/wordpress/[newhost].ts`, implement the `WordPressHost` interface |
| Update WordPress credential email | `src/lib/email.ts` → `wordpressReadyEmail()` |
| Check for stale references | Grep for deleted components: `SiteEditor`, `ClientSiteEditor`, `PublishWizardModal`, `tenants`, `/preview`, `/site`, `BentoCanvas`, `draftService` |
| Update admin alerts | `src/lib/email.ts` → `notifyIntakeCompleteEmail()`, `notifyProvisioningFailedEmail()` |
| Change provisioning retry count | `src/lib/wordpress/provision.ts` → `MAX_ATTEMPTS` |
| Test provisioning locally | Set env vars, create a test order in the DB with `wp_status='queued'`, call `/api/provision/run?Authorization=Bearer {CRON_SECRET}` manually |

## Database Schema

**Main table:** `website_subscriptions`

- `status`: pending_payment → active → intake_complete → building → live → cancelled
- `wp_status`: queued → cloning → configuring → ready (or failed)
- All WordPress columns (`wp_*`) are NULL until `wp_status` reaches 'ready'
- `intake` (JSONB): customer answers from `/api/intake`, only populated after they complete the form

## Deleted Components (Don't Re-Add)

These are the page builder and related infrastructure, deleted 2026-07-28:
- `src/components/SiteEditor.tsx`, `BentoCanvas.tsx`, `AdminSiteEditorClient.tsx`, etc.
- `src/lib/blocks/` contains only **portfolio block families** (for `/work` showcase); it's not part of the WaaS product
- `src/app/tenants/`, `src/app/site/`, `src/app/preview/`, `src/app/admin/editor/`
- `/api/site`, `/api/admin/sites` routes
- `draftService.ts`, `undoRedoStore.ts`
- Bento cluster (`BentoPreviewRenderer`, `bentoStore`, etc.)

**Why they're gone:** The WaaS model uses WordPress (Divi) as the client editor, not an in-app page builder. The portfolio still uses the block system for showcase sites, but that's separate from the product.

## Environment & Secrets

**Critical:** These must be set in Vercel for production (and `.env.local` for dev):
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `CLOUDWAYS_EMAIL`, `CLOUDWAYS_API_KEY`, `CLOUDWAYS_SERVER_ID`, `CLOUDWAYS_MASTER_APP_ID`
- `WP_MASTER_ADMIN_USER`, `WP_MASTER_APP_PASSWORD`
- `RESEND_API_KEY`
- `CRON_SECRET`

Never commit secrets. Never log passwords (they're sensitive customer data).

## Testing

1. **Checkout flow:** Use Stripe test card `4242 4242 4242 4242`, $30/$50/$100 amounts
2. **Provisioning:** After checkout, watch `/admin/orders` → site should progress through statuses
3. **Manual cron:** Call `/api/provision/run?Authorization=Bearer {CRON_SECRET}` to trigger a step (no auth check in dev, so `?Authorization=dummy` works)
4. **State machine:** Edit a row in `website_subscriptions` to `wp_status='queued'` to replay provisioning for an order

## Architecture Notes

- **No multi-tenancy in WordPress:** Each customer gets their own cloned site on Cloudways. They log in to their WordPress dashboard directly, not through this app.
- **Idempotent provisioning:** Every step of the state machine can be retried safely. If a Cloudways API call times out, the next cron tick resumes.
- **Stripe webhook is not a bottleneck:** We upsert immediately, but defer cloning to cron so Stripe never times out. This is why `wp_status` defaults to 'queued'.
- **Email is best-effort:** All email sends have `.catch(() => {})` so a mail failure can't fail the webhook or the provisioning step.
- **Host abstraction:** The `WordPressHost` interface allows swapping Cloudways for GridPane, RunCloud, or Hetzner + custom scripts without touching the state machine.

## Deployment

- **Cron:** `vercel.json` registers `/api/provision/run` to run every 2 minutes. Hobby plan may not run it; upgrade to Pro or use the manual button.
- **Env:** Add all secrets to Vercel's Project Settings → Environment Variables.
- **Webhook:** Configure Stripe webhook to post to `/api/webhooks/stripe` and subscribe to `checkout.session.completed`.
- **Database:** Both migration files must be run before the first order.

## Future: Multi-Host Support

To add a new host (e.g., GridPane), create `src/lib/wordpress/gridpane.ts`:

```typescript
export class GridpaneHost implements WordPressHost {
  readonly name = 'gridpane';
  async cloneMaster(label: string): Promise<CloneHandle> { ... }
  async getOperation(operationId: string): Promise<OperationStatus> { ... }
  async findApp(opts: { ... }): Promise<HostedApp | null> { ... }
}
```

Then pass it to `advanceOne(new GridpaneHost())` when ready. The rest of the pipeline is unchanged.
