import dns from 'dns/promises';

/**
 * Shared domain availability + pricing lookup, used by both the domain
 * search endpoint (/api/domains?search=) and the checkout endpoint
 * (/api/checkout/domain) so the price a client is quoted in search is the
 * exact price they're charged at checkout — never trust a client-supplied
 * price for a real money charge.
 */

export const TLD_DEFAULTS: Record<string, number> = {
  '.com': 14.99, '.co': 29.99, '.net': 13.99, '.org': 11.99,
  '.io': 49.99, '.biz': 12.99, '.info': 9.99, '.us': 8.99,
};

const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

/** NXDOMAIN (no NS records) → available. Anything else → assume taken (no false positives). */
async function checkDnsAvailability(fullDomain: string): Promise<boolean> {
  try {
    await dns.resolveNs(fullDomain);
    return false;
  } catch (err: any) {
    return err.code === 'ENOTFOUND';
  }
}

/** Authoritative availability + price for one fully-qualified domain (e.g. "acme.com"). */
export async function getDomainPricing(fullDomain: string): Promise<{ available: boolean; price: number }> {
  const ext = '.' + fullDomain.split('.').slice(1).join('.');
  let available = true;
  let price = TLD_DEFAULTS[ext] ?? 19.99;

  if (VERCEL_AUTH_TOKEN) {
    try {
      const [statusRes, priceRes] = await Promise.all([
        fetch(`https://api.vercel.com/v4/domains/status?name=${fullDomain}${VERCEL_TEAM_ID ? `&teamId=${VERCEL_TEAM_ID}` : ''}`, {
          headers: { Authorization: `Bearer ${VERCEL_AUTH_TOKEN}` }
        }),
        fetch(`https://api.vercel.com/v4/domains/price?name=${fullDomain}${VERCEL_TEAM_ID ? `&teamId=${VERCEL_TEAM_ID}` : ''}`, {
          headers: { Authorization: `Bearer ${VERCEL_AUTH_TOKEN}` }
        }),
      ]);
      if (statusRes.ok) {
        const d = await statusRes.json();
        available = d.available ?? true;
      }
      if (priceRes.ok) {
        const d = await priceRes.json();
        price = d.price || price;
      }
    } catch {
      available = await checkDnsAvailability(fullDomain);
    }
  } else {
    available = await checkDnsAvailability(fullDomain);
  }

  return { available, price };
}
