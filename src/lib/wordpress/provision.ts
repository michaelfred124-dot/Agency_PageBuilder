import { getSupabaseServerClient } from '@/lib/supabase';
import { cloudways, isCloudwaysConfigured } from './cloudways';
import { WordPressHost, appLabelFor } from './provider';
import {
  createAdminUser,
  setSiteIdentity,
  isSiteResponding,
  generatePassword,
  usernameFromEmail,
  isWordPressConfigured,
} from './wpRest';
import { wordpressReadyEmail, notifyProvisioningFailedEmail } from '@/lib/email';

/**
 * Resumable WordPress provisioning.
 *
 *   queued -> cloning -> configuring -> ready
 *                    \-> failed
 *
 * Cloning a WordPress app takes minutes. A Stripe webhook that waited on it
 * would blow Stripe's timeout and get retried, so instead the webhook only
 * marks the order paid and this runs from cron: each tick advances ONE order
 * by ONE step and returns immediately.
 *
 * Every step is idempotent, because a crashed or timed-out tick will be
 * retried against a row that may be half-way through the step it died in.
 */

/** Orders only provision once payment has actually landed. */
const PAID_STATUSES = ['active', 'intake_complete', 'building', 'live'];
const WORKING_STATES = ['queued', 'cloning', 'configuring'];

/** Enough retries to ride out a host blip; low enough to stop a hard failure looping forever. */
const MAX_ATTEMPTS = 10;

export type ProvisionOutcome =
  | { result: 'idle'; reason: string }
  | { result: 'advanced'; orderId: string; from: string; to: string }
  | { result: 'error'; orderId: string; error: string; willRetry: boolean };

export function isProvisioningConfigured(): boolean {
  return isCloudwaysConfigured() && isWordPressConfigured();
}

interface OrderRow {
  id: string;
  customer_email: string | null;
  customer_name: string | null;
  plan_name: string;
  intake: Record<string, any> | null;
  wp_status: string;
  wp_server_id: string | null;
  wp_app_id: string | null;
  wp_app_label: string | null;
  wp_operation_id: string | null;
  wp_url: string | null;
  wp_admin_user: string | null;
  wp_admin_password: string | null;
  wp_attempts: number;
}

/** The business name to brand the site with, best-effort. */
function siteTitleFor(order: OrderRow): string {
  return (
    order.intake?.businessName?.trim() ||
    order.customer_name?.trim() ||
    'My Website'
  );
}

/**
 * Advance the next order needing provisioning by one step.
 *
 * Returns without doing anything when there is no work — cron calls this on a
 * fixed schedule, so "nothing to do" is the common case and must be cheap.
 */
export async function advanceOne(host: WordPressHost = cloudways): Promise<ProvisionOutcome> {
  if (!isProvisioningConfigured()) {
    return { result: 'idle', reason: 'WordPress provisioning is not configured (missing env).' };
  }

  const supabase = getSupabaseServerClient();

  const { data: rows, error } = await supabase
    .from('website_subscriptions')
    .select(
      'id, customer_email, customer_name, plan_name, intake, wp_status, wp_server_id, wp_app_id, wp_app_label, wp_operation_id, wp_url, wp_admin_user, wp_admin_password, wp_attempts',
    )
    .in('status', PAID_STATUSES)
    .in('wp_status', WORKING_STATES)
    .lt('wp_attempts', MAX_ATTEMPTS)
    .order('wp_last_attempt_at', { ascending: true, nullsFirst: true })
    .limit(1);

  if (error) return { result: 'idle', reason: `Query failed: ${error.message}` };
  if (!rows || rows.length === 0) return { result: 'idle', reason: 'Nothing to provision.' };

  const order = rows[0] as OrderRow;
  const from = order.wp_status;

  // Claim the row before doing slow work. If this tick dies, the bumped
  // attempt count and timestamp push the row to the back of the queue instead
  // of letting it monopolise every subsequent tick.
  await supabase
    .from('website_subscriptions')
    .update({ wp_attempts: (order.wp_attempts || 0) + 1, wp_last_attempt_at: new Date().toISOString() })
    .eq('id', order.id);

  try {
    const to = await runStep(order, host, supabase);
    return { result: 'advanced', orderId: order.id, from, to };
  } catch (err: any) {
    const message = String(err?.message || err).slice(0, 2000);
    const attempts = (order.wp_attempts || 0) + 1;
    const willRetry = attempts < MAX_ATTEMPTS;

    await supabase
      .from('website_subscriptions')
      .update({
        wp_error: message,
        ...(willRetry ? {} : { wp_status: 'failed' }),
      })
      .eq('id', order.id);

    console.error(`[provision] order ${order.id} step "${from}" failed:`, message);

    // Only shout once retries are exhausted — a transient host blip shouldn't
    // page the owner, but a paying customer with no site definitely should.
    if (!willRetry) {
      const adminEmail = process.env.ADMIN_EMAILS?.split(',')[0]?.trim();
      if (adminEmail) {
        notifyProvisioningFailedEmail({
          to: adminEmail,
          businessName: siteTitleFor(order),
          orderId: order.id,
          error: message,
        }).catch(() => {});
      }
    }

    return { result: 'error', orderId: order.id, error: message, willRetry };
  }
}

/** Execute exactly one transition. Returns the state landed in. */
async function runStep(order: OrderRow, host: WordPressHost, supabase: any): Promise<string> {
  switch (order.wp_status) {
    case 'queued': {
      const label = appLabelFor(order.intake?.businessName || order.customer_name, order.id);
      const handle = await host.cloneMaster(label);

      await supabase
        .from('website_subscriptions')
        .update({
          wp_status: 'cloning',
          wp_operation_id: handle.operationId,
          wp_server_id: handle.serverId,
          wp_app_id: handle.appId || null,
          wp_app_label: label,
          wp_error: null,
        })
        .eq('id', order.id);

      return 'cloning';
    }

    case 'cloning': {
      if (!order.wp_operation_id) throw new Error('In "cloning" with no operation id.');

      const op = await host.getOperation(order.wp_operation_id);
      if (!op.complete) return 'cloning'; // still working — try again next tick
      if (op.failed) throw new Error(`Clone failed on host: ${op.message || 'unknown reason'}`);

      const app = await host.findApp({
        serverId: order.wp_server_id || '',
        appId: order.wp_app_id || undefined,
        label: order.wp_app_label || undefined,
      });
      if (!app) throw new Error('Clone reported complete but the new app could not be found.');
      if (!app.url) throw new Error(`Clone ${app.appId} has no reachable URL yet.`);

      await supabase
        .from('website_subscriptions')
        .update({
          wp_status: 'configuring',
          wp_app_id: app.appId,
          wp_url: app.url,
          wp_admin_url: `${app.url}/wp-admin`,
          wp_error: null,
        })
        .eq('id', order.id);

      return 'configuring';
    }

    case 'configuring': {
      const siteUrl = order.wp_url;
      if (!siteUrl) throw new Error('In "configuring" with no site URL.');

      // A freshly cloned app can 502 for a minute while its web server warms up.
      // Treat that as "not ready yet" rather than a failure.
      if (!(await isSiteResponding(siteUrl))) return 'configuring';

      const email = order.customer_email;
      if (!email) throw new Error('Cannot create a WordPress admin without a customer email.');

      // Reuse the password across retries so the client is never emailed one
      // set of credentials and left with another.
      const username = usernameFromEmail(email);
      const password = order.wp_admin_password || generatePassword();

      await createAdminUser(siteUrl, {
        username,
        email,
        password,
        name: order.customer_name || undefined,
      });

      await setSiteIdentity(siteUrl, { title: siteTitleFor(order) });

      await supabase
        .from('website_subscriptions')
        .update({
          wp_status: 'ready',
          wp_admin_user: username,
          wp_admin_password: password,
          wp_provisioned_at: new Date().toISOString(),
          wp_error: null,
        })
        .eq('id', order.id);

      // Best-effort: the site exists and is recorded, so a mail failure must not
      // undo the provisioning or send the row back round the retry loop.
      wordpressReadyEmail({
        to: email,
        name: order.customer_name || undefined,
        siteUrl,
        adminUrl: `${siteUrl}/wp-admin`,
        username,
        password,
      }).catch(e => console.error(`[provision] credentials email failed for ${order.id}:`, e));

      return 'ready';
    }

    default:
      return order.wp_status;
  }
}

/** Put a failed order back in the queue. Used by the admin retry button. */
export async function requeue(orderId: string): Promise<void> {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from('website_subscriptions')
    .update({ wp_status: 'queued', wp_attempts: 0, wp_error: null, wp_last_attempt_at: null })
    .eq('id', orderId);
  if (error) throw new Error(error.message);
}
