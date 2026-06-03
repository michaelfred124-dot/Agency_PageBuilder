import React from 'react';
import { getSupabaseServerClient } from '@/lib/supabase';
import ClientList from '@/components/admin/ClientList';

// Ensure this page is dynamically rendered so it always fetches the latest data
export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const supabase = getSupabaseServerClient();
  
  // Fetch all necessary tables in parallel bypassing RLS via service role client
  const [tenantsRes, submissionsRes, settingsRes] = await Promise.all([
    supabase.from('tenants').select('*').order('created_at', { ascending: false }),
    supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
    supabase.from('global_settings').select('*')
  ]);

  const tenants = tenantsRes.data || [];
  const submissions = submissionsRes.data || [];
  const settings = settingsRes.data || [];

  // Map and aggregate submissions and settings by tenant_id
  const clients = tenants.map(tenant => {
    const tenantSubmissions = submissions.filter(s => s.tenant_id === tenant.id);
    const tenantSettings = settings.find(s => s.tenant_id === tenant.id) || null;
    return {
      ...tenant,
      submissions: tenantSubmissions,
      settings: tenantSettings,
      plan_tier: tenant.plan_tier || 'DIY', // Graceful fallback if database column is missing
      notes: tenant.notes || ''            // Graceful fallback if database column is missing
    };
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Agency CRM Portal</h1>
        <p className="text-gray-400">Overview of all active agency clients, subscriptions, platform settings, and live website leads.</p>
      </div>

      <ClientList initialClients={clients as any} />
    </div>
  );
}
