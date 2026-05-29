"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X as CloseIcon, Globe, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { getSupabaseBrowserClient } from '@/lib/supabase';

interface DomainManagerModalProps {
  site: any;
  onClose: () => void;
  onDomainUpdated: (siteId: string, newDomain: string | null) => void;
}

export default function DomainManagerModal({ site, onClose, onDomainUpdated }: DomainManagerModalProps) {
  const [domainInput, setDomainInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentDomain, setCurrentDomain] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  useEffect(() => {
    // Fetch current custom domain from Supabase if we don't have it in the site object
    const fetchDomain = async () => {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase.from('tenants').select('custom_domain').eq('id', site.tenantId).single();
      if (data?.custom_domain) {
        setCurrentDomain(data.custom_domain);
        checkVerification(data.custom_domain);
      }
    };
    if (site.tenantId) {
      fetchDomain();
    } else {
      setErrorMessage("Site hasn't been published yet. Please publish the site to get a tenant ID before managing domains.");
    }
  }, [site]);

  const handleAddDomain = async () => {
    if (!domainInput) return;
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/domains', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: site.tenantId, domain: domainInput.toLowerCase() })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setCurrentDomain(domainInput.toLowerCase());
      onDomainUpdated(site.id, domainInput.toLowerCase());
      setStatus('success');
      checkVerification(domainInput.toLowerCase());
      setDomainInput('');
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const handleRemoveDomain = async () => {
    if (!currentDomain || !window.confirm(`Are you sure you want to remove ${currentDomain}?`)) return;
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/domains', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: site.tenantId, domain: currentDomain })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setCurrentDomain(null);
      setVerificationStatus(null);
      onDomainUpdated(site.id, null);
      setStatus('idle');
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const checkVerification = async (domainToCheck: string) => {
    try {
      const res = await fetch(`/api/domains?domain=${domainToCheck}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setVerificationStatus(data.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#F8F5F2] border-[4px] border-black rounded-2xl p-8 max-w-2xl w-full shadow-[16px_16px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8 pb-6 border-b-[4px] border-black/10">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Domain Management</h2>
            <p className="font-bold text-black/40 uppercase tracking-widest text-xs mt-2">Map a custom domain to {site.name}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-8">
          {/* Default Subdomain */}
          <div className="bg-white border-2 border-black p-6 rounded-xl">
             <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-2">Default Subdomain</p>
             <div className="flex items-center gap-3">
               <Globe className="w-5 h-5 text-black/40" />
               <p className="font-bold">{site.subdomain ? `${site.subdomain}.michaelfreddesigns.com` : 'Not published yet'}</p>
             </div>
          </div>

          {/* Custom Domain Section */}
          <div className="bg-white border-2 border-black p-6 rounded-xl">
             <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4">Custom Domain</p>
             
             {currentDomain ? (
               <div className="space-y-6">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <Globe className="w-5 h-5 text-blue-500" />
                     <p className="font-bold text-lg">{currentDomain}</p>
                   </div>
                   <div className="flex items-center gap-3">
                      <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${verificationStatus === 'Valid Configuration' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {verificationStatus || 'Checking...'}
                      </span>
                      <button 
                        onClick={handleRemoveDomain}
                        disabled={status === 'loading'}
                        className="text-xs font-black uppercase tracking-widest text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                   </div>
                 </div>

                 {verificationStatus !== 'Valid Configuration' && (
                   <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                      <h4 className="font-bold text-sm text-yellow-800 mb-2 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> DNS Configuration Required</h4>
                      <p className="text-xs text-yellow-700 mb-4">Please add the following record to your domain registrar's DNS settings. It may take up to 24 hours to propagate.</p>
                      
                      <div className="grid grid-cols-3 gap-2 bg-white border border-yellow-200 p-3 rounded text-sm font-mono text-center">
                        <div><span className="block text-[9px] font-sans font-bold uppercase text-gray-400 mb-1">Type</span>CNAME</div>
                        <div><span className="block text-[9px] font-sans font-bold uppercase text-gray-400 mb-1">Name</span>www</div>
                        <div><span className="block text-[9px] font-sans font-bold uppercase text-gray-400 mb-1">Value</span>cname.vercel-dns.com</div>
                      </div>
                      <div className="mt-2 text-center text-xs text-yellow-700 font-bold uppercase">OR</div>
                      <div className="grid grid-cols-3 gap-2 bg-white border border-yellow-200 p-3 rounded text-sm font-mono text-center mt-2">
                        <div><span className="block text-[9px] font-sans font-bold uppercase text-gray-400 mb-1">Type</span>A</div>
                        <div><span className="block text-[9px] font-sans font-bold uppercase text-gray-400 mb-1">Name</span>@</div>
                        <div><span className="block text-[9px] font-sans font-bold uppercase text-gray-400 mb-1">Value</span>76.76.21.21</div>
                      </div>
                      
                      <button 
                        onClick={() => checkVerification(currentDomain)}
                        className="mt-4 w-full bg-yellow-100 text-yellow-800 py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-yellow-200 transition-colors"
                      >
                        Refresh Verification
                      </button>
                   </div>
                 )}
               </div>
             ) : (
               <div className="space-y-4">
                 <div className="flex gap-4">
                   <input 
                     type="text" 
                     placeholder="e.g. www.mybakery.com"
                     value={domainInput}
                     onChange={(e) => setDomainInput(e.target.value)}
                     disabled={!site.tenantId || status === 'loading'}
                     className="flex-1 border-[3px] border-black rounded-xl px-4 py-3 font-medium focus:shadow-[4px_4px_0px_rgba(0,0,0,1)] outline-none disabled:opacity-50"
                   />
                   <button 
                     onClick={handleAddDomain}
                     disabled={!site.tenantId || !domainInput || status === 'loading'}
                     className="bg-black text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:-translate-y-1 active:translate-y-0 transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                   >
                     {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Add Domain'}
                   </button>
                 </div>
                 {errorMessage && <p className="text-red-500 font-bold text-sm">{errorMessage}</p>}
               </div>
             )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
