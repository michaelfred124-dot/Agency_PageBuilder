import React from 'react';
import { getSupabaseServerClient } from '@/lib/supabase';
import UserClientList from '@/components/admin/UserClientList';

// Ensure this page is dynamically rendered so it always fetches the latest data
export const dynamic = 'force-dynamic';

export default async function AdminClientsPage() {
  const supabase = getSupabaseServerClient();

  // Fetch all necessary tables in parallel bypassing RLS via service role client
  const [
    tenantsRes, submissionsRes, settingsRes, usersRes,
    agencySettingsRes, profilesRes, activityRes, tasksRes, onboardingRes
  ] = await Promise.all([
    supabase.from('tenants').select('*').neq('status', 'Template').order('created_at', { ascending: false }),
    supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
    supabase.from('global_settings').select('*'),
    supabase.auth.admin.listUsers(),
    supabase.from('agency_settings').select('*').limit(1).single(),
    supabase.from('client_profiles').select('*'),
    supabase.from('client_activity').select('*').order('created_at', { ascending: false }),
    supabase.from('client_tasks').select('*').order('due_at', { ascending: true, nullsFirst: false }),
    supabase.from('onboarding_submissions').select('*').order('created_at', { ascending: false }),
  ]);

  const tenants = tenantsRes.data || [];
  const submissions = submissionsRes.data || [];
  const settings = settingsRes.data || [];
  const users = usersRes.data?.users || [];
  const agencySettings = agencySettingsRes.data;
  const profiles = profilesRes.data || [];
  const activity = activityRes.data || [];
  const tasks = tasksRes.data || [];
  const onboardingSubmissions = onboardingRes.data || [];

  const diyMonthly = (agencySettings?.diy_monthly_price_cents ?? 2000) / 100;
  const dfyMonthly = (agencySettings?.dfy_monthly_price_cents ?? 15000) / 100;

  // Group tenants and submissions by user
  const userClients = users.map(user => {
    // Find all tenants owned by this user
    const userTenants = tenants.filter(t => t.owner_id === user.id);

    // Aggregate submissions and settings for all user's tenants
    const userSubmissions = submissions.filter(s => userTenants.some(t => t.id === s.tenant_id));

    const profile = profiles.find(p => p.user_id === user.id) || null;

    // Total MRR: an admin-set override wins outright; otherwise sum each
    // tenant's plan price from agency_settings (replaces the old
    // hardcoded/duplicated $20/$150 guess).
    const total_mrr = profile?.estimated_mrr_cents != null
      ? profile.estimated_mrr_cents / 100
      : userTenants.reduce((acc, t) => acc + ((t.plan_tier || 'DIY') === 'DIY' ? diyMonthly : dfyMonthly), 0);

    return {
      id: user.id,
      email: user.email || 'No email',
      created_at: user.created_at,
      last_sign_in_at: user.last_sign_in_at,
      tenants: userTenants.map(t => ({
        ...t,
        settings: settings.find(s => s.tenant_id === t.id) || null,
        submissions: submissions.filter(s => s.tenant_id === t.id)
      })),
      submissions: userSubmissions,
      total_mrr,
      profile,
      activity: activity.filter(a => a.user_id === user.id),
      tasks: tasks.filter(t => t.user_id === user.id),
      onboardingSubmissions: onboardingSubmissions.filter(o => o.user_id === user.id),
    };
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Agency CRM</h1>
          <p className="text-slate-500">Overview of all active agency clients, subscriptions, platform settings, and live website leads.</p>
        </div>
      </div>

      <UserClientList initialClients={userClients as any} />
    </div>
  );
}
