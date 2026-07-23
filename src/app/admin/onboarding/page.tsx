"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building, User, Globe, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { getSupabaseBrowserClient } from '@/lib/supabase';

export default function AdminOnboardingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    businessName: '',
    clientName: '',
    clientEmail: '',
    subdomain: '',
    planTier: 'DIY'
  });

  const generateSubdomain = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .substring(0, 20);
  };

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      businessName: val,
      subdomain: prev.subdomain === generateSubdomain(prev.businessName) ? generateSubdomain(val) : prev.subdomain
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const supabase = getSupabaseBrowserClient();
      
      // Basic validation
      if (!formData.businessName || !formData.subdomain) {
        throw new Error("Business name and subdomain are required.");
      }

      // Check if subdomain is taken
      const { data: existing } = await supabase
        .from('tenants')
        .select('id')
        .eq('subdomain', formData.subdomain)
        .single();
        
      if (existing) {
        throw new Error("That subdomain is already in use.");
      }

      // Create shell tenant
      const { data, error: insertError } = await supabase
        .from('tenants')
        .insert([{
          name: formData.businessName,
          subdomain: formData.subdomain,
          plan_tier: formData.planTier,
          status: 'Development', // Start in dev mode
          owner_email: formData.clientEmail || null,
        }])
        .select()
        .single();

      if (insertError) throw insertError;

      setSuccess(true);
      setTimeout(() => {
        router.push('/admin/clients');
        router.refresh();
      }, 2000);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to create client.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">New Client Onboarding</h1>
        <p className="text-slate-500 mt-2">Quickly provision a new tenant workspace and subdomain.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {success ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Tenant Created!</h2>
            <p className="text-slate-500">Redirecting to clients list...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-100 pb-2">Business Details</h3>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Building className="w-4 h-4 text-slate-400" /> Business Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Acme Contracting"
                  value={formData.businessName}
                  onChange={handleBusinessNameChange}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                    <User className="w-4 h-4 text-slate-400" /> Client Name (Optional)
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    value={formData.clientName}
                    onChange={e => setFormData({...formData, clientName: e.target.value})}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                    <User className="w-4 h-4 text-slate-400" /> Client Email (Optional)
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.clientEmail}
                    onChange={e => setFormData({...formData, clientEmail: e.target.value})}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-100 pb-2">Technical Setup</h3>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Globe className="w-4 h-4 text-slate-400" /> Subdomain
                </label>
                <div className="flex">
                  <input 
                    type="text" 
                    required
                    value={formData.subdomain}
                    onChange={e => setFormData({...formData, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')})}
                    className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-l-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-mono text-sm"
                  />
                  <div className="bg-slate-100 border border-l-0 border-slate-200 px-4 flex items-center justify-center rounded-r-xl text-slate-500 text-sm font-mono">
                    .michaelfreddesigns.com
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">This is the temporary URL before a custom domain is connected.</p>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  Plan Tier
                </label>
                <div className="flex gap-4">
                  <label className={`flex-1 border rounded-xl p-4 cursor-pointer transition-all ${formData.planTier === 'DIY' ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600' : 'border-slate-200 hover:border-slate-300 bg-white'}`}>
                    <input 
                      type="radio" 
                      name="plan" 
                      value="DIY" 
                      checked={formData.planTier === 'DIY'}
                      onChange={() => setFormData({...formData, planTier: 'DIY'})}
                      className="sr-only" 
                    />
                    <div className="font-bold text-slate-900">DIY Template</div>
                    <div className="text-xs text-slate-500 mt-1">Client builds it themselves</div>
                  </label>
                  
                  <label className={`flex-1 border rounded-xl p-4 cursor-pointer transition-all ${formData.planTier === 'DFY' ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600' : 'border-slate-200 hover:border-slate-300 bg-white'}`}>
                    <input 
                      type="radio" 
                      name="plan" 
                      value="DFY" 
                      checked={formData.planTier === 'DFY'}
                      onChange={() => setFormData({...formData, planTier: 'DFY'})}
                      className="sr-only" 
                    />
                    <div className="font-bold text-slate-900">DFY Custom</div>
                    <div className="text-xs text-slate-500 mt-1">Agency builds it for them</div>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Provisioning Tenant...</>
                ) : (
                  <>Create Client Tenant <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </div>
            
          </form>
        )}
      </div>
    </div>
  );
}
