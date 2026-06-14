import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getSupabaseServerClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2026-05-27.dahlia' as any,
  });

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    let event: Stripe.Event;

    if (webhookSecret && signature) {
      try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
      } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
      }
    } else {
      // If no webhook secret is set (e.g. in local dev without CLI), just parse the body.
      // This is less secure but allows testing without the CLI if necessary.
      event = JSON.parse(body);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      if (session.metadata?.type === 'domain_purchase') {
        const tenantId = session.metadata.tenantId;
        const domain = session.metadata.domain;
        
        console.log(`Processing domain purchase for tenant ${tenantId}, domain: ${domain}`);
        
        await fulfillDomainPurchase(tenantId, domain);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

async function fulfillDomainPurchase(tenantId: string, domain: string) {
  const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;
  const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
  const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;
  
  let cleanDomain = domain.trim().toLowerCase();
  cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');

  const supabase = getSupabaseServerClient();

  // 1. Purchase via Vercel Registrar
  if (VERCEL_AUTH_TOKEN) {
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

      if (!buyRes.ok) {
        const errData = await buyRes.json();
        console.error('Vercel registrar rejected the purchase:', errData);
        // We log the error but still proceed to link the domain in case they already own it, 
        // or we need to manually retry later. The customer paid, so we must deliver or refund.
      }
    } catch (err: any) {
      console.error(`Vercel registrar connection failed: ${err.message}`);
    }
  }

  // 2. Link domain to Vercel Project
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
      if (!vercelRes.ok) {
        const errData = await vercelRes.json();
        console.error('Vercel POST domain link failed:', errData);
      }
    } catch (e) {
      console.error('Failed to link domain to Vercel project:', e);
    }
  }

  // 3. Update Supabase
  const registeredAt = new Date().toISOString();
  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  const defaultDnsRecords = [
    { id: 'dns_1', type: 'A', name: '@', value: '76.76.21.21', ttl: 3600 },
    { id: 'dns_2', type: 'CNAME', name: 'www', value: 'cname.vercel-dns.com', ttl: 3600 }
  ];

  const domainInfo = {
    registered_through_us: true,
    auto_renew: true,
    registered_at: registeredAt,
    expires_at: expiresAt.toISOString(),
    dns_records: defaultDnsRecords
  };

  const { error: dbError } = await supabase
    .from('tenants')
    .update({ 
      custom_domain: cleanDomain,
      domain_info: domainInfo
    })
    .eq('id', tenantId);

  if (dbError) {
    console.error(`Supabase error updating tenant with domain: ${dbError.message}`);
  }
}
