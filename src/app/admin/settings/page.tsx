import React from 'react';
import { getSupabaseServerClient } from '@/lib/supabase';
import { Settings, Globe, Shield, Database, Save, Code } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminSettingsPage() {
  const supabase = getSupabaseServerClient();
  
  // Fetch global settings
  const { data: settingsData } = await supabase
    .from('global_settings')
    .select('*')
    .is('tenant_id', null)
    .single();

  const settings = settingsData || {
    master_domain: 'michaelfreddesigns.com',
    global_tracking_script: '',
    default_seo_description: 'We build premium websites.'
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-24">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2 flex items-center gap-3">
          <Settings className="w-8 h-8 text-indigo-600" />
          Platform Settings
        </h1>
        <p className="text-slate-500">Configure global defaults, master domains, and system-wide tracking scripts.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <Globe className="w-5 h-5 text-emerald-500" />
          <h2 className="text-lg font-bold text-slate-900">Domain Configuration</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Master Agency Domain</label>
            <input 
              type="text" 
              defaultValue={settings.master_domain}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-400 mt-2">This is the root domain for all client subdomains (e.g. client.michaelfreddesigns.com).</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <Code className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-bold text-slate-900">Global Scripts & SEO</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Global Analytics / Tracking Script (Head)</label>
            <textarea 
              rows={4}
              defaultValue={settings.global_tracking_script}
              placeholder="<!-- Insert Google Analytics or Facebook Pixel here -->"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-400 mt-2">This script will be injected into the &lt;head&gt; of all client sites automatically.</p>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Default Global SEO Meta Description</label>
            <textarea 
              rows={2}
              defaultValue={settings.default_seo_description}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <Shield className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold text-slate-900">Security & API Keys</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-slate-500 mb-4">API keys and secrets are managed via Vercel Environment Variables. The following connections are currently active:</p>
          
          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-indigo-600" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Supabase Connection</div>
                <div className="text-xs text-slate-500">Connected to Postgres Database</div>
              </div>
            </div>
            <span className="px-2 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded text-[10px] font-bold uppercase tracking-wider">Active</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl text-sm font-bold tracking-wide flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20">
          <Save className="w-4 h-4" />
          Save Global Settings
        </button>
      </div>

    </div>
  );
}
