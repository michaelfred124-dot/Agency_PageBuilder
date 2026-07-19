"use client";
import React, { useState, useEffect } from 'react';
import { Settings, Globe, Shield, Database, Save, Code, Loader2, CheckCircle2 } from 'lucide-react';

interface AgencySettings {
  id?: string;
  master_domain: string;
  global_tracking_script: string;
  default_seo_description: string;
  diy_monthly_price_cents: number;
  dfy_monthly_price_cents: number;
}

const DEFAULTS: AgencySettings = {
  master_domain: 'michaelfreddesigns.com',
  global_tracking_script: '',
  default_seo_description: 'We build premium websites.',
  diy_monthly_price_cents: 2000,
  dfy_monthly_price_cents: 15000,
};

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<AgencySettings>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/admin/settings');
        const json = await res.json();
        if (res.ok && json.settings) setSettings({ ...DEFAULTS, ...json.settings });
      } catch {
        // keep defaults on network failure
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    setError(null);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Save failed.');
      setSettings({ ...DEFAULTS, ...json.settings });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err: any) {
      setError(err?.message || 'Save failed.');
    } finally {
      setSaving(false);
    }
  };

  const set = <K extends keyof AgencySettings>(key: K, value: AgencySettings[K]) =>
    setSettings(prev => ({ ...prev, [key]: value }));

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-24 flex justify-center">
        <Loader2 className="w-6 h-6 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-24">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2 flex items-center gap-3">
          <Settings className="w-8 h-8 text-indigo-600" />
          Platform Settings
        </h1>
        <p className="text-slate-500">Configure global defaults, master domains, plan pricing, and system-wide tracking scripts.</p>
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
              value={settings.master_domain}
              onChange={(e) => set('master_domain', e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-400 mt-2">This is the root domain for all client subdomains (e.g. client.michaelfreddesigns.com).</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <Database className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-bold text-slate-900">Plan Pricing</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">DIY Plan — Monthly ($)</label>
            <input
              type="number"
              min={0}
              step={1}
              value={(settings.diy_monthly_price_cents / 100).toString()}
              onChange={(e) => set('diy_monthly_price_cents', Math.round(Number(e.target.value || 0) * 100))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">DFY Plan — Monthly ($)</label>
            <input
              type="number"
              min={0}
              step={1}
              value={(settings.dfy_monthly_price_cents / 100).toString()}
              onChange={(e) => set('dfy_monthly_price_cents', Math.round(Number(e.target.value || 0) * 100))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-3">Used to estimate MRR across the client list. Override per-client in that client's CRM profile if you've negotiated a different rate.</p>
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
              value={settings.global_tracking_script}
              onChange={(e) => set('global_tracking_script', e.target.value)}
              placeholder="<!-- Insert Google Analytics or Facebook Pixel here -->"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-400 mt-2">This script will be injected into the &lt;head&gt; of all client sites automatically.</p>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">Default Global SEO Meta Description</label>
            <textarea
              rows={2}
              value={settings.default_seo_description}
              onChange={(e) => set('default_seo_description', e.target.value)}
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
          <p className="text-sm text-slate-500 mb-4">API keys and secrets are managed via Vercel Environment Variables.</p>

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

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{error}</div>
      )}

      <div className="flex justify-end items-center gap-3 pt-4">
        {saved && (
          <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Saved
          </span>
        )}
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white px-8 py-3 rounded-xl text-sm font-bold tracking-wide flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Global Settings
        </button>
      </div>
    </div>
  );
}
