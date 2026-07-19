import Stripe from 'stripe';
import { getSupabaseServerClient } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';

/**
 * Shared server-side helpers for the native ecommerce (Stripe Connect) APIs.
 * Server routes only — never import from client components.
 */

export const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isAdminEmail(email: string | undefined): boolean {
  if (!email) return false;
  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || [];
  return adminEmails.includes(email);
}

export function getStripe(): Stripe {
  return new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2026-05-27.dahlia' as any,
  });
}

/** Platform fee in basis points (e.g. 300 = 3%). Defaults to 0. */
export function platformFeeBps(): number {
  const bps = parseInt(process.env.STORE_PLATFORM_FEE_BPS || '0', 10);
  return Number.isFinite(bps) && bps > 0 ? Math.min(bps, 3000) : 0;
}

type AuthResult =
  | { error: string; status: 401 | 403 | 404 }
  | { user: any; tenant: any; serviceClient: ReturnType<typeof getSupabaseServerClient> };

/** Verify the logged-in user owns the tenant (or is an admin). */
export async function authorizeTenantOwner(tenantId: string): Promise<AuthResult> {
  if (!UUID_RE.test(tenantId)) {
    return { error: 'Invalid tenant id.', status: 404 };
  }
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: 'Unauthorized: please log in.', status: 401 };
  }

  const serviceClient = getSupabaseServerClient();
  const { data: tenant } = await serviceClient
    .from('tenants')
    .select('*')
    .eq('id', tenantId)
    .single();

  if (!tenant) {
    return { error: 'Site not found.', status: 404 };
  }
  if (tenant.owner_id !== user.id && !isAdminEmail(user.email)) {
    return { error: 'Forbidden: you do not own this site.', status: 403 };
  }
  return { user, tenant, serviceClient };
}
