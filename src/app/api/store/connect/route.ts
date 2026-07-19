import { NextRequest, NextResponse } from 'next/server';
import { authorizeTenantOwner, getStripe } from '@/lib/storeApi';

/**
 * API Route: /api/store/connect
 *
 * Stripe Connect (Express) onboarding for a tenant's native store.
 *
 * POST { tenantId } → creates (or reuses) an Express account for the tenant
 *   and returns { url } — the Stripe-hosted onboarding link.
 * GET  ?tenantId=   → returns { connected, chargesEnabled, accountId }
 */

export async function POST(request: NextRequest) {
  try {
    const { tenantId } = await request.json();
    if (!tenantId) {
      return NextResponse.json({ error: 'Missing tenantId.' }, { status: 400 });
    }

    const auth = await authorizeTenantOwner(tenantId);
    if ('error' in auth) {
      return NextResponse.json({ error: auth.error }, { status: auth.status });
    }
    const { tenant, serviceClient, user } = auth;
    const stripe = getStripe();

    // Reuse existing account or create a new Express account
    let accountId: string = tenant.stripe_account_id;
    if (!accountId) {
      const account = await stripe.accounts.create({
        type: 'express',
        email: user.email || undefined,
        metadata: { tenant_id: tenantId },
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true }
        }
      });
      accountId = account.id;
      await serviceClient.from('tenants').update({ stripe_account_id: accountId }).eq('id', tenantId);
    }

    const origin = request.headers.get('origin') || `https://${request.headers.get('host')}`;
    const accountLink = await stripe.accountLinks.create({
      account: accountId,
      refresh_url: `${origin}/dashboard?store_connect=refresh&tenant=${tenantId}`,
      return_url: `${origin}/dashboard?store_connect=done&tenant=${tenantId}`,
      type: 'account_onboarding'
    });

    return NextResponse.json({ url: accountLink.url, accountId });
  } catch (error: any) {
    console.error('[Store Connect] error:', error);
    return NextResponse.json({ error: error.message || 'Failed to start Stripe onboarding.' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const tenantId = request.nextUrl.searchParams.get('tenantId') || '';
    const auth = await authorizeTenantOwner(tenantId);
    if ('error' in auth) {
      return NextResponse.json({ error: auth.error }, { status: auth.status });
    }
    const { tenant } = auth;

    if (!tenant.stripe_account_id) {
      return NextResponse.json({ connected: false, chargesEnabled: false, accountId: null });
    }

    const stripe = getStripe();
    const account = await stripe.accounts.retrieve(tenant.stripe_account_id);
    return NextResponse.json({
      connected: true,
      chargesEnabled: !!account.charges_enabled,
      detailsSubmitted: !!account.details_submitted,
      accountId: tenant.stripe_account_id
    });
  } catch (error: any) {
    console.error('[Store Connect] status error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch Stripe status.' }, { status: 500 });
  }
}
