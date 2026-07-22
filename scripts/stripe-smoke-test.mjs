/**
 * Stripe smoke test — verifies the integration is configured and working.
 *
 *   node scripts/stripe-smoke-test.mjs            # read-only checks (safe)
 *   node scripts/stripe-smoke-test.mjs --checkout # also mint payable test URLs
 *
 * Reads STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET from .env.local. Nothing is
 * charged in test mode; complete a minted session with card 4242 4242 4242 4242.
 */
import fs from 'fs';
import Stripe from 'stripe';

const env = fs.readFileSync('.env.local', 'utf8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.*)$', 'm'))?.[1] || '').trim().replace(/^["']|["']$/g, '');
const key = get('STRIPE_SECRET_KEY');
const whsec = get('STRIPE_WEBHOOK_SECRET');
const BASE = get('NEXT_PUBLIC_SITE_URL') || 'https://www.michaelfreddesigns.com';
const withCheckout = process.argv.includes('--checkout');

if (!key) { console.error('❌ STRIPE_SECRET_KEY missing in .env.local'); process.exit(1); }
const stripe = new Stripe(key, { apiVersion: '2026-05-27.dahlia' });

console.log('Key mode:', key.startsWith('sk_test') ? 'TEST' : key.startsWith('sk_live') ? 'LIVE ⚠️' : '?');
console.log('Webhook secret:', whsec ? 'set' : 'MISSING');

try {
  const acct = await stripe.accounts.retrieve();
  console.log(`Account: ${acct.id} | charges_enabled=${acct.charges_enabled} details_submitted=${acct.details_submitted}`);

  const whs = await stripe.webhookEndpoints.list({ limit: 10 });
  console.log(`Webhook endpoints: ${whs.data.length ? whs.data.map(w => w.url).join(', ') : 'none (use Stripe CLI locally)'}`);

  // Signature verification round-trip
  if (whsec) {
    const payload = JSON.stringify({ id: 'evt', object: 'event', type: 'checkout.session.completed', data: { object: {} } });
    const header = stripe.webhooks.generateTestHeaderString({ payload, secret: whsec });
    stripe.webhooks.constructEvent(payload, header, whsec);
    console.log('Webhook signature verification: OK');
  }

  if (withCheckout) {
    const payment = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ quantity: 1, price_data: { currency: 'usd', unit_amount: 100, product_data: { name: 'TEST $1.00' } } }],
      success_url: `${BASE}/?test=success`, cancel_url: `${BASE}/?test=cancel`,
      metadata: { type: 'manual_test' },
    });
    console.log('\n💳 One-time test checkout:\n  ', payment.url);

    const sub = await stripe.checkout.sessions.create({
      mode: 'subscription', billing_address_collection: 'required', phone_number_collection: { enabled: true },
      line_items: [{ quantity: 1, price_data: { currency: 'usd', unit_amount: 1499, recurring: { interval: 'year' }, product_data: { name: 'TEST Domain $14.99/yr' } } }],
      success_url: `${BASE}/dashboard?domain_success=true`, cancel_url: `${BASE}/dashboard?domain_cancel=true`,
      metadata: { type: 'manual_test' },
    });
    console.log('\n🔁 Subscription test checkout:\n  ', sub.url);
    console.log('\nPay with 4242 4242 4242 4242, any future expiry, any CVC.');
  }

  console.log('\n✅ Stripe integration OK');
} catch (e) {
  console.error('\n❌ Stripe error:', e.type || '', e.message);
  process.exit(1);
}
