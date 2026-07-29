import { NextRequest, NextResponse } from 'next/server';
import { advanceOne, isProvisioningConfigured } from '@/lib/wordpress/provision';

/**
 * GET /api/provision/run  — the WordPress provisioning worker.
 *
 * Called on a schedule by Vercel Cron (see vercel.json). Each invocation
 * advances up to MAX_STEPS orders by one step each, then returns. Nothing here
 * blocks on a clone finishing; slow work is picked up by the next tick.
 *
 * Protected by CRON_SECRET so the endpoint can't be hammered to burn host API
 * quota. Vercel Cron sends it as `Authorization: Bearer <CRON_SECRET>`.
 */

// Give the worker room to chain a few steps, but stay well inside Vercel's
// function limits — this is a scheduled worker, not a request path.
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

const MAX_STEPS = 5;
const TIME_BUDGET_MS = 45_000;

function authorised(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  // With no secret configured, only allow this in development — an unprotected
  // worker in production would let anyone drain the host API rate limit.
  if (!secret) return process.env.NODE_ENV !== 'production';

  const header = request.headers.get('authorization') || '';
  return header === `Bearer ${secret}`;
}

export async function GET(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!isProvisioningConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'WordPress provisioning is not configured. Set CLOUDWAYS_EMAIL, CLOUDWAYS_API_KEY, CLOUDWAYS_SERVER_ID, CLOUDWAYS_MASTER_APP_ID, WP_MASTER_ADMIN_USER and WP_MASTER_APP_PASSWORD.',
      },
      { status: 503 },
    );
  }

  const startedAt = Date.now();
  const steps: unknown[] = [];

  for (let i = 0; i < MAX_STEPS; i++) {
    if (Date.now() - startedAt > TIME_BUDGET_MS) break;

    const outcome = await advanceOne();
    steps.push(outcome);

    // Queue is empty — stop early rather than burning the budget on no-ops.
    if (outcome.result === 'idle') break;
  }

  return NextResponse.json({ ok: true, steps, elapsedMs: Date.now() - startedAt });
}
