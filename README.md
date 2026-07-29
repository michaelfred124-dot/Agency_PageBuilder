# Michaelfred Designs — WaaS Platform

A **SaaS platform for automated WordPress website delivery**. Customers subscribe to page counts, and WordPress + Divi sites are provisioned automatically on Cloudways.

## What It Does

```
Customer visits /pricing
  ↓
Subscribes via Stripe ($30–$100/mo)
  ↓
Fills 14-field intake questionnaire
  ↓
WordPress site is cloned & provisioned
  ↓
Client receives login credentials via email
  ↓
You track progress in /admin/orders
```

## Quick Start

**Prerequisites:**
- Node.js 18+
- Supabase project
- Stripe account + test keys
- Cloudways account + API keys
- Resend account (transactional email)

**Setup:**

1. Clone the repo
   ```bash
   git clone <repo-url>
   cd michaelfreddesigns-agency
   npm install
   ```

2. Create `.env.local`:
   ```bash
   # Database
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...

   # Payments
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...

   # WordPress provisioning
   CLOUDWAYS_EMAIL=you@example.com
   CLOUDWAYS_API_KEY=...
   CLOUDWAYS_SERVER_ID=...      # run: npm run cloudways:ids
   CLOUDWAYS_MASTER_APP_ID=...  # (same command)
   WP_MASTER_ADMIN_USER=admin
   WP_MASTER_APP_PASSWORD=...   # from WordPress → Users → Profile → Application Passwords

   # Email
   RESEND_API_KEY=re_...
   EMAIL_FROM_ADDRESS=Michaelfred Designs <notifications@michaelfreddesigns.com>

   # Security
   CRON_SECRET=very-long-random-string
   NEXT_PUBLIC_SITE_URL=https://www.michaelfreddesigns.com
   ADMIN_EMAILS=you@example.com
   ```

3. Run migrations in Supabase SQL Editor:
   ```sql
   -- Copy & run both in order:
   supabase/WEBSITE_SUBSCRIPTIONS.sql
   supabase/WORDPRESS_PROVISIONING.sql
   ```

4. Build your master Divi site on Cloudways (this is what gets cloned for each client)

5. Start the app:
   ```bash
   npm run dev
   ```

6. Open http://localhost:3000/pricing to test

## Key Files

- **Pricing & checkout:** `src/lib/plans.ts`, `src/app/pricing/page.tsx`, `src/app/api/checkout/plan/route.ts`
- **Provisioning:** `src/lib/wordpress/provision.ts`, `src/app/api/provision/run/route.ts`
- **Orders dashboard:** `src/app/admin/orders/page.tsx`
- **Email:** `src/lib/email.ts`
- **Intake form:** `src/app/welcome/page.tsx`, `src/app/api/intake/route.ts`

Full architecture docs in [CLAUDE.md](CLAUDE.md) and [AGENTS.md](AGENTS.md).

## Testing Checkout

Use Stripe test card: `4242 4242 4242 4242`

Watch `/admin/orders` to see the provisioning state machine:
- queued → cloning → configuring → ready

Retry manually with the "Run provisioning" button in the orders drawer.

## Deployment

1. Push to GitHub (branch will deploy to Vercel preview)
2. Add env vars to Vercel project settings
3. Set up Stripe webhook → `/api/webhooks/stripe` (subscribe to `checkout.session.completed`)
4. Upgrade from Hobby to Pro plan for reliable cron (currently `/api/provision/run` every 2 min)

## Architecture

- **Framework:** Next.js 15 with App Router
- **Database:** Supabase (PostgreSQL)
- **Payments:** Stripe Checkout
- **Hosting:** Cloudways (WordPress provisioning)
- **Email:** Resend API
- **Deployment:** Vercel

## Documentation

- [CLAUDE.md](CLAUDE.md) — Architecture & code reference
- [AGENTS.md](AGENTS.md) — Agent & contributor guide
