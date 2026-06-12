import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  Briefcase, 
  Settings,
  TrendingUp,
  Globe,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { getSupabaseServerClient } from '@/lib/supabase';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const supabase = getSupabaseServerClient();

  // Fetch all necessary tables in parallel bypassing RLS via service role client
  const [
    usersRes, 
    tenantsRes, 
    templatesRes, 
    portfolioRes, 
    servicesRes,
    leadsRes
  ] = await Promise.all([
    supabase.auth.admin.listUsers(),
    supabase.from('tenants').select('*').neq('status', 'Template'),
    supabase.from('site_templates').select('id', { count: 'exact' }),
    supabase.from('portfolio_items').select('id', { count: 'exact' }),
    supabase.from('services').select('id', { count: 'exact' }),
    supabase.from('contact_submissions').select('id', { count: 'exact' })
  ]);

  const users = usersRes.data?.users || [];
  const tenants = tenantsRes.data || [];
  
  // Counts for CMS modules
  const templateCount = templatesRes.count || 0;
  const portfolioCount = portfolioRes.count || 0;
  const servicesCount = servicesRes.count || 0;
  const totalLeads = leadsRes.count || 0;

  // Calculate Analytics
  const totalUsers = users.length;
  const totalSites = tenants.length;
  const liveSites = tenants.filter(t => t.status === 'Live').length;
  const diySites = tenants.filter(t => t.plan_tier === 'DIY' || !t.plan_tier).length;
  const dfySites = tenants.filter(t => t.plan_tier === 'DFY').length;

  // Fetch Real MRR from Stripe
  let totalMRR: number | string = (diySites * 20) + (dfySites * 150);
  let isStripeConnected = false;

  if (process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2026-05-27.dahlia' as any });
      
      // Fetch all active subscriptions
      const subscriptions = await stripe.subscriptions.list({ status: 'active', limit: 100 });
      
      let stripeMRR = 0;
      for (const sub of subscriptions.data) {
        // Calculate monthly amount. Handle different intervals (month vs year)
        const price = sub.items.data[0]?.price;
        if (price && price.unit_amount) {
          let amount = price.unit_amount / 100;
          if (price.recurring?.interval === 'year') {
            amount = amount / 12; // convert annual to MRR
          }
          stripeMRR += amount * sub.quantity;
        }
      }
      
      totalMRR = Math.round(stripeMRR);
      isStripeConnected = true;
    } catch (error) {
      console.error("Stripe fetch error:", error);
      totalMRR = "Error";
    }
  }

  const cmsModules = [
    { name: 'Clients (CRM)', icon: Users, href: '/admin/clients', description: 'Manage active clients, users, and their sites.', count: totalUsers },
    { name: 'Templates', icon: LayoutDashboard, href: '/admin/templates', description: 'Manage site templates for new signups.', count: templateCount },
    { name: 'Portfolio', icon: ImageIcon, href: '/admin/portfolio', description: 'Manage your public portfolio showcase.', count: portfolioCount },
    { name: 'Services', icon: Briefcase, href: '/admin/services', description: 'Manage agency service and pricing tiers.', count: servicesCount },
    { name: 'Platform Settings', icon: Settings, href: '/admin/settings', description: 'Configure global agency settings.' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Platform Overview</h1>
        <p className="text-slate-500">Live analytics and quick access to your agency content management systems.</p>
      </div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total MRR */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <DollarSign className="w-6 h-6" />
            </div>
            {isStripeConnected ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> Stripe Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full" title="Missing STRIPE_SECRET_KEY in .env.local">
                <AlertCircle className="w-3 h-3" /> Estimated
              </span>
            )}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-500 mb-1">{isStripeConnected ? 'Monthly Revenue (MRR)' : 'Estimated MRR'}</h3>
            <div className="text-3xl font-extrabold text-slate-900">
              {typeof totalMRR === 'number' ? `$${totalMRR}` : totalMRR}
              <span className="text-sm font-medium text-slate-400">/mo</span>
            </div>
          </div>
        </div>

        {/* Total Users */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-500 mb-1">Registered Users</h3>
            <div className="text-3xl font-extrabold text-slate-900">{totalUsers}</div>
          </div>
        </div>

        {/* Sites by Tier */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Globe className="w-6 h-6" />
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-500 mb-1">Total Sites: {totalSites}</div>
              <div className="text-xs font-medium text-emerald-600">{liveSites} Live</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-500 mb-2">Sites by Tier</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">DIY</div>
                <div className="text-xl font-bold text-slate-900">{diySites}</div>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex-1">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">DFY</div>
                <div className="text-xl font-bold text-slate-900">{dfySites}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Leads Stored */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
              <FileText className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-500 mb-1">Total Leads Stored</h3>
            <div className="text-3xl font-extrabold text-slate-900">{totalLeads}</div>
            <p className="text-xs text-slate-400 mt-1">Across all client websites</p>
          </div>
        </div>

      </div>

      {/* CMS Modules Grid */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-6 mt-4">Content Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cmsModules.map((module) => {
            const Icon = module.icon;
            return (
              <Link 
                key={module.name} 
                href={module.href}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:bg-slate-50 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-all">
                  <Icon className="w-6 h-6 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">{module.name}</h2>
                <p className="text-slate-500 text-sm mb-4 flex-1">{module.description}</p>
                
                {module.count !== undefined && (
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {module.count} Records
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Manage &rarr;
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
