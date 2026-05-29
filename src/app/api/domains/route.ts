import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';

// Vercel API credentials
const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

/**
 * POST /api/domains
 * Adds a custom domain to the Vercel project and links it to a tenant.
 */
export async function POST(request: NextRequest) {
  try {
    const { tenantId, domain } = await request.json();

    if (!tenantId || !domain) {
      return NextResponse.json({ error: 'Missing tenantId or domain' }, { status: 400 });
    }

    if (!VERCEL_AUTH_TOKEN || !VERCEL_PROJECT_ID) {
      return NextResponse.json({ error: 'Vercel API credentials not configured' }, { status: 500 });
    }

    // 1. Add domain to Vercel
    const url = `https://api.vercel.com/v10/projects/${VERCEL_PROJECT_ID}/domains${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
    const vercelRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: domain }),
    });

    const vercelData = await vercelRes.json();

    if (!vercelRes.ok) {
      return NextResponse.json({ error: vercelData.error?.message || 'Failed to add domain to Vercel' }, { status: vercelRes.status });
    }

    // 2. Update Supabase
    const supabase = getSupabaseServerClient();
    const { error: dbError } = await supabase
      .from('tenants')
      .update({ custom_domain: domain })
      .eq('id', tenantId);

    if (dbError) {
      throw new Error(`Supabase error: ${dbError.message}`);
    }

    return NextResponse.json({ success: true, domain: vercelData });
  } catch (error: any) {
    console.error('[API /domains POST]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * GET /api/domains?domain=xxx
 * Checks the verification status of a domain on Vercel.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');

    if (!domain) {
      return NextResponse.json({ error: 'Missing domain' }, { status: 400 });
    }

    if (!VERCEL_AUTH_TOKEN || !VERCEL_PROJECT_ID) {
      return NextResponse.json({ error: 'Vercel API credentials not configured' }, { status: 500 });
    }

    const url = `https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/domains/${domain}${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
    const vercelRes = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
      },
    });

    const vercelData = await vercelRes.json();

    if (!vercelRes.ok) {
      return NextResponse.json({ error: vercelData.error?.message || 'Failed to get domain from Vercel' }, { status: vercelRes.status });
    }

    // Domain is verified if verified property is true
    return NextResponse.json({ 
      success: true, 
      verified: vercelData.verified,
      status: vercelData.verified ? 'Valid Configuration' : 'Invalid Configuration'
    });
  } catch (error: any) {
    console.error('[API /domains GET]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * DELETE /api/domains
 * Removes a custom domain from Vercel and clears it from the tenant.
 */
export async function DELETE(request: NextRequest) {
  try {
    const { tenantId, domain } = await request.json();

    if (!tenantId || !domain) {
      return NextResponse.json({ error: 'Missing tenantId or domain' }, { status: 400 });
    }

    if (!VERCEL_AUTH_TOKEN || !VERCEL_PROJECT_ID) {
      return NextResponse.json({ error: 'Vercel API credentials not configured' }, { status: 500 });
    }

    // 1. Remove from Vercel
    const url = `https://api.vercel.com/v9/projects/${VERCEL_PROJECT_ID}/domains/${domain}${VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''}`;
    const vercelRes = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${VERCEL_AUTH_TOKEN}`,
      },
    });

    if (!vercelRes.ok) {
      const vercelData = await vercelRes.json();
      return NextResponse.json({ error: vercelData.error?.message || 'Failed to remove domain from Vercel' }, { status: vercelRes.status });
    }

    // 2. Remove from Supabase
    const supabase = getSupabaseServerClient();
    const { error: dbError } = await supabase
      .from('tenants')
      .update({ custom_domain: null })
      .eq('id', tenantId);

    if (dbError) {
      throw new Error(`Supabase error: ${dbError.message}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[API /domains DELETE]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
