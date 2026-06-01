import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function main() {
  console.log("=== DB QUERY START ===");
  const { data: tenant, error: tenantErr } = await supabase
    .from('tenants')
    .select('*')
    .or('subdomain.eq.webtoads,custom_domain.eq.webtoads.com')
    .single();

  if (tenantErr) {
    console.error("Error finding tenant webtoads:", tenantErr);
    process.exit(1);
  }

  console.log("Tenant info:", tenant);

  const { data: siteData, error: siteErr } = await supabase
    .from('sites_data')
    .select('*')
    .eq('tenant_id', tenant.id)
    .eq('page_slug', 'index')
    .single();

  if (siteErr) {
    console.error("Error finding site index page data:", siteErr);
    process.exit(1);
  }

  console.log("Site Page Data:");
  console.log("Canvas JSON structure:", JSON.stringify(siteData.canvas_json, null, 2));
  console.log("=== DB QUERY END ===");
  process.exit(0);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
