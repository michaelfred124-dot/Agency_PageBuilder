import { NextRequest, NextResponse } from 'next/server';
import { checkAdminAuth } from '@/utils/adminAuth';
import { advanceOne, requeue, isProvisioningConfigured } from '@/lib/wordpress/provision';

/**
 * POST /api/admin/provision
 *
 * Manual controls for the WordPress provisioner:
 *   { orderId }  — reset a failed order and immediately advance it
 *   { }          — advance whatever is next in the queue
 *
 * Cron drives this normally (see vercel.json). This endpoint exists so the
 * pipeline is operable without waiting for the next tick — and because Vercel's
 * Hobby plan only runs crons once a day, which is far too slow to be the only
 * way a paying customer's site gets built.
 */

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  if (!(await checkAdminAuth())) {
    return NextResponse.json({ error: 'Unauthorized: Access Denied.' }, { status: 401 });
  }

  if (!isProvisioningConfigured()) {
    return NextResponse.json(
      {
        error:
          'WordPress provisioning is not configured. Set CLOUDWAYS_EMAIL, CLOUDWAYS_API_KEY, CLOUDWAYS_SERVER_ID, CLOUDWAYS_MASTER_APP_ID, WP_MASTER_ADMIN_USER and WP_MASTER_APP_PASSWORD.',
      },
      { status: 503 },
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const orderId = typeof body?.orderId === 'string' ? body.orderId : null;

    if (orderId) await requeue(orderId);

    // Run one step now so the button gives immediate feedback rather than
    // silently deferring everything to the next cron tick.
    const outcome = await advanceOne();
    return NextResponse.json({ success: true, outcome });
  } catch (error: any) {
    console.error('[admin/provision] error:', error);
    return NextResponse.json({ error: error?.message || 'Provisioning failed.' }, { status: 500 });
  }
}
