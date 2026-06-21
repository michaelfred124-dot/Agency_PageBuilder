import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';

// Vercel API credentials
const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

/**
 * GET /api/domains?domain=xxx&tenantId=yyy&search=zzz
 * - If 'search' is provided: Queries Vercel Registrar for real-time availability and prices.
 * - Otherwise: Checks domain verification status and retrieves local DB metadata.
 */
export async function GET(request: NextRequest) {
  try {
    // Authenticate user
    const supabaseClient = await createClient();
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: Please log in first.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get('search');
    const domain = searchParams.get('domain');
    const tenantId = searchParams.get('tenantId');
    const action = searchParams.get('action');

    // 1. Handle Domain Availability Search
    if (searchQuery) {
      const query = searchQuery.trim().toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9-]/g, '');
      const hasExtension = /\.[a-z]{2,}$/i.test(searchQuery.trim());
      const baseDomain = hasExtension ? searchQuery.trim().split('.')[0].toLowerCase() : query;

      // Default prices per TLD when Vercel API is not available
      const TLD_DEFAULTS: Record<string, number> = {
        '.com': 14.99, '.co': 29.99, '.net': 13.99, '.org': 11.99,
        '.io': 49.99, '.biz': 12.99, '.info': 9.99, '.us': 8.99,
      };
      const extensions = Object.keys(TLD_DEFAULTS);
      const results = [];

      // Real DNS availability check via Cloudflare DoH (no API key required)
      const checkDnsAvailability = async (fullDomain: string): Promise<boolean> => {
        try {
          const res = await fetch(
            `https://cloudflare-dns.com/dns-query?name=${fullDomain}&type=NS`,
            {
              headers: { Accept: 'application/dns-json' },
              signal: AbortSignal.timeout(4000),
            }
          );
          if (!res.ok) return true; // assume available if lookup fails
          const data = await res.json();
          // Status 3 = NXDOMAIN → domain not in DNS = available to register
          // Status 0 = NOERROR → domain has records = registered/taken
          return data.Status === 3;
        } catch {
          return true; // assume available if timeout/network error
        }
      };

      // Fire all checks in parallel
      const checks = extensions.map(async (ext) => {
        const fullDomain = `${baseDomain}${ext}`;
        let available = true;
        let price = TLD_DEFAULTS[ext];

        if (VERCEL_AUTH_TOKEN) {
          // Use Vercel Registrar API for availability + pricing
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
              price = d.price || TLD_DEFAULTS[ext];
            }
          } catch {
            // Fall back to DNS check
            available = await checkDnsAvailability(fullDomain);
          }
        } else {
          // No Vercel token — use real DNS lookup instead of random simulation
          available = await checkDnsAvailability(fullDomain);
        }

        return { domain: fullDomain, available, price: `$${price.toFixed(2)}/yr`, priceNum: price, extension: ext };
      });

      const settled = await Promise.all(checks);
      // Sort: available first, then .com/.co/.net/.org before the rest
      const priority = ['.com', '.co', '.net', '.org', '.io', '.biz', '.info', '.us'];
      settled.sort((a, b) => {
        if (a.available !== b.available) return a.available ? -1 : 1;
        return priority.indexOf(a.extension) - priority.indexOf(b.extension);
      });
      results.push(...settled);

      return NextResponse.json({ success: true, results });
    }

    // 2. Handle EPP Auth Code Retrieval for Transfer Out
    if (action === 'auth-code' && domain && tenantId) {
      // Verify tenant ownership
      const supabase = getSupabaseServerClient();
      const { data: tenant, error: tenantError } = await supabase
        .from('tenants')
        .select('owner_id')
        .eq('id', tenantId)
        .single();

      if (tenantError || !tenant || tenant.owner_id !== user.id) {
        return NextResponse.json({ error: 'Forbidden: You do not own this site.' }, { status: 403 });
      }

      // Sanitize domain
      let cleanDomain = domain.trim().toLowerCase();
      cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');

      if (!VERCEL_AUTH_TOKEN) {
        return NextResponse.json({ success: true, authCode: 'sandbox_epp_code_12345' });
      }

      // Fetch EPP Transfer Code from Vercel
      const authCodeRes = await fetch(
        `https://api.vercel.com/v4/domains/${cleanDomain}/auth-code${
          VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''
        }`,
        {
          headers: { Authorization: `Bearer ${VERCEL_AUTH_TOKEN}` }
        }
      );

      if (authCodeRes.ok) {
        const data = await authCodeRes.json();
        return NextResponse.json({ success: true, authCode: data.authCode });
      } else {
        const errData = await authCodeRes.json();
        return NextResponse.json(
          { error: errData.error?.message || 'Failed to fetch domain transfer code.' },
          { status: 400 }
        );
      }
    }

    // 3. Handle metadata & verification retrieval
    if (!domain || !tenantId) {
      return NextResponse.json({ error: 'Missing domain or tenantId' }, { status: 400 });
    }

    // Verify tenant ownership
    const supabase = getSupabaseServerClient();
    const { data: tenant, error: tenantError } = await supabase
      .from('tenants')
      .select('owner_id, domain_info')
      .eq('id', tenantId)
      .single();

    if (tenantError || !tenant || tenant.owner_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden: You do not own this site.' }, { status: 403 });
    }

    // Sanitize domain: strip http://, https://, www., and trailing slashes
    let cleanDomain = domain.trim().toLowerCase();
    cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');

    const dbDomainInfo = tenant.domain_info;

    let verified = false;
    let status = 'Pending Configuration';

    if (VERCEL_AUTH_TOKEN && VERCEL_PROJECT_ID) {
      try {
        const url = `https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/domains/${cleanDomain}${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
        const vercelRes = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
          },
        });

        if (vercelRes.ok) {
          const vercelData = await vercelRes.json();
          verified = vercelData.verified;
          status = vercelData.verified ? 'Valid Configuration' : 'Invalid Configuration';
        } else {
          const errData = await vercelRes.json();
          console.error('Vercel GET domain metadata failed:', errData);
        }
      } catch (err) {
        console.error('Vercel API error, using fallback:', err);
      }
    } else {
      verified = dbDomainInfo?.registered_through_us || false;
      status = verified ? 'Valid Configuration' : 'Invalid Configuration';
    }

    return NextResponse.json({ 
      success: true, 
      verified,
      status,
      domainInfo: dbDomainInfo || {
        registered_through_us: false,
        auto_renew: true,
        expires_at: null,
        registered_at: null,
        dns_records: []
      }
    });
  } catch (error: any) {
    console.error('[API /domains GET]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * POST /api/domains
 * Connects an existing domain or purchases a brand new one using Vercel Registrar.
 */
export async function POST(request: NextRequest) {
  try {
    // Authenticate user
    const supabaseClient = await createClient();
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: Please log in first.' }, { status: 401 });
    }

    const { tenantId, domain, isPurchase } = await request.json();

    if (!tenantId || !domain) {
      return NextResponse.json({ error: 'Missing tenantId or domain' }, { status: 400 });
    }

    // Verify tenant ownership
    const supabase = getSupabaseServerClient();
    const { data: tenant, error: tenantError } = await supabase
      .from('tenants')
      .select('owner_id')
      .eq('id', tenantId)
      .single();

    if (tenantError || !tenant || tenant.owner_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden: You do not own this site.' }, { status: 403 });
    }

    // Sanitize domain: strip http://, https://, www., and trailing slashes
    let cleanDomain = domain.trim().toLowerCase();
    cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');

    // 1. Purchase domain via Vercel Registrar (If isPurchase is true and auth is set)
    if (isPurchase && VERCEL_AUTH_TOKEN) {
      try {
        const buyUrl = `https://api.vercel.com/v4/domains/buy${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
        const buyRes = await fetch(buyUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: cleanDomain,
            renew: true
          })
        });

        const buyData = await buyRes.json();
        if (!buyRes.ok) {
          return NextResponse.json({ 
            error: buyData.error?.message || 'Vercel registrar rejected the purchase. Ensure your Vercel team has a valid billing card configured.' 
          }, { status: 400 });
        }
      } catch (err: any) {
        return NextResponse.json({ error: `Vercel registrar connection failed: ${err.message}` }, { status: 500 });
      }
    }

    // 2. Link domain to Vercel Project
    let vercelLinked = false;
    if (VERCEL_AUTH_TOKEN && VERCEL_PROJECT_ID) {
      try {
        const url = `https://api.vercel.com/v10/projects/${VERCEL_PROJECT_ID}/domains${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
        const vercelRes = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: cleanDomain }),
        });
        if (vercelRes.ok) {
          vercelLinked = true;
        } else {
          const errData = await vercelRes.json();
          console.error('Vercel POST domain link failed:', errData);
        }
      } catch (e) {
        console.error('Failed to link domain to Vercel project:', e);
      }
    } else {
      vercelLinked = true; // Fallback in sandbox mode
    }

    // 3. Initialize domain metadata
    const registeredAt = new Date().toISOString();
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    const defaultDnsRecords = [
      { id: 'dns_1', type: 'A', name: '@', value: '76.76.21.21', ttl: 3600 },
      { id: 'dns_2', type: 'CNAME', name: 'www', value: 'cname.vercel-dns.com', ttl: 3600 }
    ];

    const domainInfo = {
      registered_through_us: !!isPurchase,
      auto_renew: true,
      registered_at: isPurchase ? registeredAt : null,
      expires_at: isPurchase ? expiresAt.toISOString() : null,
      dns_records: isPurchase ? defaultDnsRecords : []
    };

    // 4. Update tenant settings in Supabase
    const { error: dbError } = await supabase
      .from('tenants')
      .update({ 
        custom_domain: cleanDomain,
        domain_info: domainInfo
      })
      .eq('id', tenantId);

    if (dbError) {
      const { error: fallbackError } = await supabase
        .from('tenants')
        .update({ custom_domain: cleanDomain })
        .eq('id', tenantId);
      
      if (fallbackError) {
        throw new Error(`Supabase error: ${fallbackError.message}`);
      }
    }

    return NextResponse.json({ 
      success: true, 
      domain: cleanDomain,
      domainInfo
    });
  } catch (error: any) {
    console.error('[API /domains POST]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * PUT /api/domains
 * Updates domain options, DNS records, or auto-renew properties.
 */
export async function PUT(request: NextRequest) {
  try {
    // Authenticate user
    const supabaseClient = await createClient();
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: Please log in first.' }, { status: 401 });
    }

    const { tenantId, domainInfo } = await request.json();

    if (!tenantId || !domainInfo) {
      return NextResponse.json({ error: 'Missing tenantId or domainInfo' }, { status: 400 });
    }

    // Verify tenant ownership
    const supabase = getSupabaseServerClient();
    const { data: tenant, error: tenantError } = await supabase
      .from('tenants')
      .select('owner_id')
      .eq('id', tenantId)
      .single();

    if (tenantError || !tenant || tenant.owner_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden: You do not own this site.' }, { status: 403 });
    }
    const { error: dbError } = await supabase
      .from('tenants')
      .update({ domain_info: domainInfo })
      .eq('id', tenantId);

    if (dbError) {
      throw new Error(`Supabase error: ${dbError.message}`);
    }

    return NextResponse.json({ success: true, domainInfo });
  } catch (error: any) {
    console.error('[API /domains PUT]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * DELETE /api/domains
 * Removes a custom domain from Vercel and clears it from the tenant.
 */
export async function DELETE(request: NextRequest) {
  try {
    // Authenticate user
    const supabaseClient = await createClient();
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: Please log in first.' }, { status: 401 });
    }

    const { tenantId, domain } = await request.json();

    if (!tenantId || !domain) {
      return NextResponse.json({ error: 'Missing tenantId or domain' }, { status: 400 });
    }

    // Verify tenant ownership
    const supabase = getSupabaseServerClient();
    const { data: tenant, error: tenantError } = await supabase
      .from('tenants')
      .select('owner_id')
      .eq('id', tenantId)
      .single();

    if (tenantError || !tenant || tenant.owner_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden: You do not own this site.' }, { status: 403 });
    }

    // Sanitize domain: strip http://, https://, www., and trailing slashes
    let cleanDomain = domain.trim().toLowerCase();
    cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');

    // Try Vercel removal
    if (VERCEL_AUTH_TOKEN && VERCEL_PROJECT_ID) {
      try {
        const url = `https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/domains/${cleanDomain}${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
        await fetch(url, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
          },
        });
      } catch (err) {
        console.error('Vercel API delete error:', err);
      }
    }

    // Clear tenant settings in Supabase
    const { error: dbError } = await supabase
      .from('tenants')
      .update({ 
        custom_domain: null,
        domain_info: {
          registered_through_us: false,
          auto_renew: true,
          expires_at: null,
          registered_at: null,
          dns_records: []
        }
      })
      .eq('id', tenantId);

    if (dbError) {
      const { error: fallbackError } = await supabase
        .from('tenants')
        .update({ custom_domain: null })
        .eq('id', tenantId);
      
      if (fallbackError) {
        throw new Error(`Supabase error: ${fallbackError.message}`);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[API /domains DELETE]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
