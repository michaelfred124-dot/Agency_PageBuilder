import dns from 'dns/promises';

/**
 * Shared domain availability + pricing lookup, used by both the domain
 * search endpoint (/api/domains?search=) and the checkout endpoint
 * (/api/checkout/domain) so the price a client is quoted in search is the
 * exact price they're charged at checkout — never trust a client-supplied
 * price for a real money charge.
 *
 * Uses Vercel's Domains Registrar API (the /v4/domains/status + /price
 * endpoints were sunsetted Nov 9, 2025):
 *   GET /v1/registrar/domains/{domain}/availability -> { available }
 *   GET /v1/registrar/domains/{domain}/price        -> { purchasePrice, renewalPrice, ... }
 */

// Fallback prices only — real prices come from the registrar API below.
export const TLD_DEFAULTS: Record<string, number> = {
  '.com': 11.25, '.co': 24.99, '.net': 12.99, '.org': 10.99,
  '.io': 44.99, '.biz': 12.99, '.info': 9.99, '.us': 8.99,
  '.dev': 14.99, '.app': 14.99, '.ai': 69.99, '.xyz': 11.99,
};

const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

const teamQS = VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : '';

function registrarHeaders() {
  return { Authorization: `Bearer ${VERCEL_AUTH_TOKEN}` };
}

/** Coerce the registrar price (number | numeric string) into a positive number, or null. */
function coercePrice(raw: unknown): number | null {
  const n = typeof raw === 'string' ? parseFloat(raw) : typeof raw === 'number' ? raw : NaN;
  return Number.isFinite(n) && n > 0 ? n : null;
}

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
  const fallbackPrice = TLD_DEFAULTS[ext] ?? 19.99;

  if (VERCEL_AUTH_TOKEN) {
    try {
      const [availRes, priceRes] = await Promise.all([
        fetch(`https://api.vercel.com/v1/registrar/domains/${encodeURIComponent(fullDomain)}/availability${teamQS}`, {
          headers: registrarHeaders(),
        }),
        fetch(`https://api.vercel.com/v1/registrar/domains/${encodeURIComponent(fullDomain)}/price${teamQS}`, {
          headers: registrarHeaders(),
        }),
      ]);

      // Availability is authoritative when the registrar answers. If it doesn't
      // (unsupported TLD, rate limit, outage), fall through to the DNS check —
      // we must never default an unknown domain to "available" and let someone
      // pay for a name that's actually taken.
      if (availRes.ok) {
        const a = await availRes.json();
        let price = fallbackPrice;
        if (priceRes.ok) {
          const p = await priceRes.json();
          // purchasePrice is null for taken domains; renewalPrice is the yearly figure.
          price = coercePrice(p.purchasePrice) ?? coercePrice(p.renewalPrice) ?? fallbackPrice;
        }
        return { available: !!a.available, price };
      }
    } catch {
      // network error — fall through to DNS
    }
  }

  const available = await checkDnsAvailability(fullDomain);
  return { available, price: fallbackPrice };
}

export interface RegistrarContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;       // E.164, e.g. +14155550123
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;     // ISO 3166-1 alpha-2, e.g. US
}

export interface BuyDomainResult {
  ok: boolean;
  orderId?: string;
  error?: string;
  code?: string;
}

/**
 * Purchase a domain through the Vercel Registrar. Re-fetches the live price so
 * `expectedPrice` matches (the registrar 400s on a mismatch) and passes the
 * registrant contact info the new API requires.
 */
export async function buyDomainViaRegistrar(
  fullDomain: string,
  contact: RegistrarContact,
  years = 1,
): Promise<BuyDomainResult> {
  if (!VERCEL_AUTH_TOKEN) {
    return { ok: false, error: 'Registrar not configured' };
  }

  // Fetch the live price so expectedPrice is exact.
  let expectedPrice = TLD_DEFAULTS['.' + fullDomain.split('.').slice(1).join('.')] ?? 19.99;
  try {
    const priceRes = await fetch(
      `https://api.vercel.com/v1/registrar/domains/${encodeURIComponent(fullDomain)}/price?years=${years}${VERCEL_TEAM_ID ? `&teamId=${VERCEL_TEAM_ID}` : ''}`,
      { headers: registrarHeaders() },
    );
    if (priceRes.ok) {
      const p = await priceRes.json();
      expectedPrice = coercePrice(p.purchasePrice) ?? coercePrice(p.renewalPrice) ?? expectedPrice;
    }
  } catch {
    // use fallback
  }

  try {
    const buyRes = await fetch(
      `https://api.vercel.com/v1/registrar/domains/${encodeURIComponent(fullDomain)}/buy${teamQS}`,
      {
        method: 'POST',
        headers: { ...registrarHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify({
          autoRenew: true,
          years,
          expectedPrice,
          contactInformation: {
            firstName: contact.firstName,
            lastName: contact.lastName,
            email: contact.email,
            phone: contact.phone,
            address1: contact.address1,
            ...(contact.address2 ? { address2: contact.address2 } : {}),
            city: contact.city,
            state: contact.state,
            zip: contact.zip,
            country: contact.country,
          },
        }),
      },
    );

    const data = await buyRes.json().catch(() => ({}));
    if (!buyRes.ok) {
      return { ok: false, error: data?.error?.message || data?.message || 'Purchase failed', code: data?.error?.code || data?.code };
    }
    return { ok: true, orderId: data.orderId };
  } catch (err: any) {
    return { ok: false, error: err.message };
  }
}
