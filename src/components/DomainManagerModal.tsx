"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X as CloseIcon, 
  Globe, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Search, 
  ShoppingCart, 
  Sparkles, 
  Check, 
  Plus, 
  Trash2, 
  RefreshCw, 
  Shield, 
  ArrowRightLeft, 
  FileText,
  Save,
  HelpCircle
} from 'lucide-react';
import { getSupabaseBrowserClient } from '@/lib/supabase';

interface DnsRecord {
  id: string;
  type: string;
  name: string;
  value: string;
  ttl: number;
  priority?: number;
}

interface DomainInfo {
  registered_through_us: boolean;
  auto_renew: boolean;
  expires_at: string | null;
  registered_at: string | null;
  dns_records: DnsRecord[];
  transfer_status?: 'pending_transfer' | 'completed' | 'failed' | null;
  transfer_auth_code?: string;
  transfer_requested_at?: string;
}

interface DomainManagerModalProps {
  site: any;
  onClose: () => void;
  onDomainUpdated: (siteId: string, newDomain: string | null) => void;
  inline?: boolean;
  onContinue?: () => void;
}

export default function DomainManagerModal({ site, onClose, onDomainUpdated, inline, onContinue }: DomainManagerModalProps) {
  const [domainInput, setDomainInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentDomain, setCurrentDomain] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  // Mode Selection: 'connect' or 'buy'
  const [purchaseTab, setPurchaseTab] = useState<'connect' | 'buy'>('connect');
  
  // Dashboard Management Mode Tabs: 'overview' | 'dns' | 'transfer'
  const [activeMgmtTab, setActiveMgmtTab] = useState<'overview' | 'dns' | 'transfer'>('overview');

  // Domain search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'available' | 'unavailable'>('idle');
  const [searchResults, setSearchResults] = useState<{ domain: string; price: string; extension: string }[]>([]);
  const [selectedBuyDomain, setSelectedBuyDomain] = useState<string | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<'none' | 'billing' | 'loading' | 'completed'>('none');

  // Domain Info & DNS Records State
  const [domainInfo, setDomainInfo] = useState<DomainInfo>({
    registered_through_us: false,
    auto_renew: true,
    expires_at: null,
    registered_at: null,
    dns_records: []
  });

  // DNS Record Form State
  const [newDnsType, setNewDnsType] = useState('A');
  const [newDnsName, setNewDnsName] = useState('@');
  const [newDnsValue, setNewDnsValue] = useState('');
  const [newDnsTtl, setNewDnsTtl] = useState(3600);
  const [newDnsPriority, setNewDnsPriority] = useState('');
  const [dnsStatusMessage, setDnsStatusMessage] = useState('');
  const [isUpdatingDns, setIsUpdatingDns] = useState(false);

  // Domain Transfer Form State
  const [transferAuthCode, setTransferAuthCode] = useState('');
  const [transferRequestStatus, setTransferRequestStatus] = useState<'none' | 'submitting' | 'submitted'>('none');

  // Domain Transfer-Out Form State
  const [eppCode, setEppCode] = useState<string | null>(null);
  const [isFetchingEpp, setIsFetchingEpp] = useState(false);

  useEffect(() => {
    const fetchDomain = async () => {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase.from('tenants').select('custom_domain').eq('id', site.tenantId).single();
      if (data?.custom_domain) {
        setCurrentDomain(data.custom_domain);
        fetchDomainMetadata(data.custom_domain);
      }
    };

    if (site.tenantId) {
      fetchDomain();
    } else {
      setErrorMessage("Site hasn't been published yet. Please publish the site to get a tenant ID before managing domains.");
    }
  }, [site]);

  const fetchDomainMetadata = async (domain: string) => {
    try {
      const res = await fetch(`/api/domains?domain=${domain}&tenantId=${site.tenantId}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setVerificationStatus(data.status);
        if (data.domainInfo) {
          setDomainInfo(data.domainInfo);
        }
      }
    } catch (error) {
      console.error('Failed to fetch domain metadata:', error);
    }
  };

  const handleSearchDomain = async () => {
    if (!searchQuery) return;
    setSearchStatus('searching');
    setSearchResults([]);
    
    try {
      const res = await fetch(`/api/domains?search=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setSearchResults(data.results || []);
        setSearchStatus(data.results && data.results.length > 0 ? 'available' : 'unavailable');
      } else {
        throw new Error(data.error || 'Failed to search domains');
      }
    } catch (err: any) {
      console.error(err);
      alert(`Domain search failed: font-bold: ${err.message}`);
      setSearchStatus('idle');
    }
  };

  const handleBuyDomain = async () => {
    if (!selectedBuyDomain) return;
    setCheckoutStep('loading');
    
    try {
      const res = await fetch('/api/checkout/domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          tenantId: site.tenantId, 
          domain: selectedBuyDomain
        })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setCheckoutStep('none');
      alert(`Domain checkout failed: ${err.message}`);
    }
  };

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
      fetchDomainMetadata(domainInput.toLowerCase());
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
      setDomainInfo({
        registered_through_us: false,
        auto_renew: true,
        expires_at: null,
        registered_at: null,
        dns_records: []
      });
      setStatus('idle');
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const handleToggleAutoRenew = async () => {
    const updatedInfo = {
      ...domainInfo,
      auto_renew: !domainInfo.auto_renew
    };
    
    setDomainInfo(updatedInfo);

    try {
      await fetch('/api/domains', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: site.tenantId, domainInfo: updatedInfo })
      });
    } catch (e) {
      console.error('Failed to save auto-renew update:', e);
    }
  };

  const handleAddDnsRecord = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDnsValue) return;

    setIsUpdatingDns(true);
    setDnsStatusMessage('');

    const newRecord: DnsRecord = {
      id: `dns_${Date.now()}`,
      type: newDnsType,
      name: newDnsName,
      value: newDnsValue,
      ttl: Number(newDnsTtl),
      ...(newDnsType === 'MX' && newDnsPriority ? { priority: Number(newDnsPriority) } : {})
    };

    const updatedInfo = {
      ...domainInfo,
      dns_records: [...(domainInfo.dns_records || []), newRecord]
    };

    try {
      const res = await fetch('/api/domains', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: site.tenantId, domainInfo: updatedInfo })
      });

      if (res.ok) {
        setDomainInfo(updatedInfo);
        setNewDnsValue('');
        setNewDnsName('@');
        setDnsStatusMessage('DNS record added successfully!');
        setTimeout(() => setDnsStatusMessage(''), 3000);
      } else {
        throw new Error('Failed to save DNS record');
      }
    } catch (error: any) {
      setDnsStatusMessage(`Error: ${error.message}`);
    } finally {
      setIsUpdatingDns(false);
    }
  };

  const handleDeleteDnsRecord = async (recordId: string) => {
    if (!window.confirm('Delete this DNS record?')) return;

    setIsUpdatingDns(true);
    const updatedInfo = {
      ...domainInfo,
      dns_records: domainInfo.dns_records.filter(r => r.id !== recordId)
    };

    try {
      const res = await fetch('/api/domains', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: site.tenantId, domainInfo: updatedInfo })
      });

      if (res.ok) {
        setDomainInfo(updatedInfo);
        setDnsStatusMessage('DNS record deleted.');
        setTimeout(() => setDnsStatusMessage(''), 3000);
      } else {
        throw new Error('Failed to delete DNS record');
      }
    } catch (error: any) {
      setDnsStatusMessage(`Error: ${error.message}`);
    } finally {
      setIsUpdatingDns(false);
    }
  };

  const handleRequestTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transferAuthCode) return;
    setTransferRequestStatus('submitting');
    
    const updatedInfo = {
      ...domainInfo,
      transfer_status: 'pending_transfer' as const,
      transfer_auth_code: transferAuthCode,
      transfer_requested_at: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/domains', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: site.tenantId, domainInfo: updatedInfo })
      });

      if (res.ok) {
        setDomainInfo(updatedInfo);
        setTransferRequestStatus('submitted');
      } else {
        throw new Error('Failed to update transfer information');
      }
    } catch (err: any) {
      console.error(err);
      alert(`Transfer request failed: ${err.message}`);
      setTransferRequestStatus('none');
    }
  };

  const handleGetEppCode = async () => {
    setIsFetchingEpp(true);
    setEppCode(null);
    try {
      const res = await fetch(`/api/domains?domain=${currentDomain}&tenantId=${site.tenantId}&action=auth-code`);
      const data = await res.json();
      if (res.ok && data.success) {
        setEppCode(data.authCode);
      } else {
        throw new Error(data.error || 'Failed to retrieve EPP code.');
      }
    } catch (err: any) {
      alert(`Could not retrieve transfer code: ${err.message}`);
    } finally {
      setIsFetchingEpp(false);
    }
  };

  const content = (
    <div 
      className={`bg-[#F8F5F2] ${inline ? '' : 'border-[4px] border-black rounded-2xl shadow-[16px_16px_0px_rgba(0,0,0,1)]'} p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-6 pb-4 border-b-[4px] border-black/10">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-2">
            <Globe className="w-8 h-8 text-indigo-600" /> Connect Domain
          </h2>
          <p className="font-bold text-black/40 uppercase tracking-widest text-[10px] mt-1">Configure and manage custom URLs for {site.name}</p>
        </div>
        {!inline && (
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors border border-transparent hover:border-black">
            <CloseIcon className="w-6 h-6" />
          </button>
        )}
      </div>

        {/* ================= IF DOMAIN IS NOT CONNECTED / REGISTERED ================= */}
        {!currentDomain && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3 bg-slate-200/60 p-1.5 rounded-xl border border-black/10">
              <button 
                onClick={() => { setPurchaseTab('connect'); setCheckoutStep('none'); }}
                className={`py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${purchaseTab === 'connect' ? 'bg-black text-white shadow-sm' : 'text-slate-500 hover:text-black'}`}
              >
                🔗 Connect Existing
              </button>
              <button 
                onClick={() => { setPurchaseTab('buy'); setCheckoutStep('none'); }}
                className={`py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${purchaseTab === 'buy' ? 'bg-black text-white shadow-sm' : 'text-slate-500 hover:text-black'}`}
              >
                🛍️ Buy New Domain
              </button>
            </div>

            {purchaseTab === 'connect' ? (
              <div className="bg-white border-2 border-black p-6 rounded-xl space-y-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Point your domain registrar DNS to our hosting</p>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="e.g. mybusinessname.com"
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    disabled={!site.tenantId || status === 'loading'}
                    className="flex-1 border-2 border-black rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-indigo-500 outline-none"
                  />
                  <button 
                    onClick={handleAddDomain}
                    disabled={!site.tenantId || !domainInput || status === 'loading'}
                    className="bg-black text-white px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:-translate-y-0.5 transition-all flex items-center justify-center min-w-[100px]"
                  >
                    {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Connect'}
                  </button>
                </div>
                {errorMessage && <p className="text-rose-500 font-bold text-xs">{errorMessage}</p>}
                
                <div className="bg-slate-50 border border-black/10 p-4 rounded-xl space-y-2">
                  <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-indigo-500" /> Need DNS Setup Assistance?</p>
                  <p className="text-[10px] text-slate-500 leading-normal">If you want us to handle the DNS migration or map a domain you already own, we will do it for you free of charge.</p>
                  <button 
                    onClick={() => { alert("Support ticket generated. An agency representative will email you shortly."); onClose(); }}
                    className="text-[10px] text-indigo-600 font-black uppercase tracking-wider hover:underline"
                  >
                    Ask team to configure domain →
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white border-2 border-black p-6 rounded-xl space-y-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                {checkoutStep === 'none' && (
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Search Domain Name Availability</p>
                    <div className="flex gap-4">
                      <div className="relative flex-1">
                        <input 
                          type="text" 
                          placeholder="e.g. coffeehousebrand"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && handleSearchDomain()}
                          className="w-full border-2 border-black rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold focus:border-indigo-500 outline-none"
                        />
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      </div>
                      <button 
                        onClick={handleSearchDomain}
                        disabled={searchStatus === 'searching' || !searchQuery}
                        className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:-translate-y-0.5 transition-all flex items-center justify-center min-w-[100px]"
                      >
                        {searchStatus === 'searching' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Search'}
                      </button>
                    </div>

                    {searchStatus === 'available' && (
                      <div className="space-y-2.5 pt-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Available Extension Options</p>
                        <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                          {searchResults.map(result => (
                            <div key={result.domain} className="flex items-center justify-between p-3">
                              <div>
                                <span className="text-xs font-bold text-slate-800">{result.domain}</span>
                                <span className="bg-emerald-100 text-emerald-800 text-[8px] font-bold px-2 py-0.5 rounded ml-2 uppercase">Available</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-slate-600">{result.price}</span>
                                <button 
                                  onClick={() => { setSelectedBuyDomain(result.domain); setCheckoutStep('billing'); }}
                                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                                >
                                  Buy Now
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {searchStatus === 'unavailable' && (
                      <div className="p-4 bg-amber-50 border-2 border-black rounded-xl text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        <AlertCircle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                        <p className="text-xs font-bold text-slate-800">Domain is Unavailable</p>
                        <p className="text-[10px] text-slate-500 mt-1">This domain is registered or contains invalid characters. Please try another search query.</p>
                      </div>
                    )}
                  </div>
                )}

                {checkoutStep === 'billing' && selectedBuyDomain && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-800">Complete Domain Registration</h4>
                      <p className="text-[11px] text-slate-500">You are registering <span className="font-extrabold text-indigo-600">{selectedBuyDomain}</span> for $12.00/year.</p>
                    </div>

                    <div className="bg-slate-50 border-2 border-black p-4 rounded-xl space-y-3">
                      <div className="space-y-1">
                        <label className="text-[9px] text-slate-400 font-bold uppercase">Payment Card details</label>
                        <div className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-400 flex items-center justify-between">
                          <span>•••• •••• •••• 4242</span>
                          <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded font-black text-slate-500">VISA</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <button onClick={() => setCheckoutStep('none')} className="text-xs font-bold text-slate-400 hover:text-black">Cancel</button>
                      <button 
                        onClick={handleBuyDomain}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:-translate-y-0.5 transition-all shadow-md"
                      >
                        Confirm & Pay $12.00
                      </button>
                    </div>
                  </div>
                )}

                {checkoutStep === 'loading' && (
                  <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
                    <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                    <p className="text-xs font-bold text-slate-800">Processing domain registration order...</p>
                  </div>
                )}

                {checkoutStep === 'completed' && (
                  <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-sm animate-bounce">
                      <Check className="w-6 h-6" strokeWidth={3} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-sm">Domain registered successfully!</h4>
                      <p className="text-slate-400 text-xs">Your custom URL is configured. DNS propagation is active.</p>
                    </div>
                    <button onClick={onClose} className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-xs font-bold">Done</button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ================= IF DOMAIN IS CONNECTED / REGISTERED ================= */}
        {currentDomain && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-white border-2 border-black p-4 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-black/40">Mapped Custom Domain</p>
                <p className="font-extrabold text-indigo-600 text-lg mt-0.5">{currentDomain}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${verificationStatus === 'Valid Configuration' ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-amber-100 text-amber-700 border border-amber-300'}`}>
                  {verificationStatus || 'Checking...'}
                </span>
                <button 
                  onClick={handleRemoveDomain}
                  disabled={status === 'loading'}
                  className="text-xs font-black uppercase tracking-widest text-rose-500 hover:text-rose-700 transition-colors"
                >
                  Disconnect
                </button>
              </div>
            </div>

            {/* Navigation Tabs for Domain Dashboard */}
            <div className="flex gap-2 border-b border-black/10 pb-1">
              <button 
                onClick={() => setActiveMgmtTab('overview')}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${activeMgmtTab === 'overview' ? 'border-black text-black' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                📊 Overview
              </button>
              {domainInfo.registered_through_us && (
                <button 
                  onClick={() => setActiveMgmtTab('dns')}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${activeMgmtTab === 'dns' ? 'border-black text-black' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  ⚙️ DNS Settings
                </button>
              )}
              <button 
                onClick={() => setActiveMgmtTab('transfer')}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${activeMgmtTab === 'transfer' ? 'border-black text-black' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                🔄 Domain Transfer
              </button>
            </div>

            {/* TAB CONTENT: OVERVIEW */}
            {activeMgmtTab === 'overview' && (
              <div className="bg-white border-2 border-black p-6 rounded-xl space-y-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                {domainInfo.registered_through_us ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-3 rounded-lg border border-black/5">
                        <p className="text-[8px] font-black uppercase text-slate-400">Registration Provider</p>
                        <p className="font-bold text-xs text-slate-700">Michaelfred Designs (Managed)</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-black/5">
                        <p className="text-[8px] font-black uppercase text-slate-400">Expiration Date</p>
                        <p className="font-bold text-xs text-slate-700">
                          {domainInfo.expires_at ? new Date(domainInfo.expires_at).toLocaleDateString() : 'N/A'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-xs font-bold text-slate-800">Auto-Renewal Settings</p>
                        <p className="text-[10px] text-slate-500">Automatically extend subscription 30 days before expiration.</p>
                      </div>
                      <button 
                        onClick={handleToggleAutoRenew}
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${domainInfo.auto_renew ? 'bg-indigo-600' : 'bg-slate-200'}`}
                      >
                        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${domainInfo.auto_renew ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-xl space-y-3">
                      <h4 className="font-bold text-xs text-amber-800 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" /> DNS Configuration Status
                      </h4>
                      <p className="text-[11px] text-amber-700 leading-relaxed">
                        To point your external domain to your website, log into your domain registrar (GoDaddy, Namecheap, Google Domains) and enter the DNS values below:
                      </p>
                      
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-2 bg-white border border-amber-200 p-3 rounded text-[11px] font-mono text-center">
                          <div><span className="block text-[8px] font-sans font-bold uppercase text-slate-400">Type</span>CNAME</div>
                          <div><span className="block text-[8px] font-sans font-bold uppercase text-slate-400">Name</span>www</div>
                          <div><span className="block text-[8px] font-sans font-bold uppercase text-slate-400">Value</span>cname.vercel-dns.com</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 bg-white border border-amber-200 p-3 rounded text-[11px] font-mono text-center">
                          <div><span className="block text-[8px] font-sans font-bold uppercase text-slate-400">Type</span>A</div>
                          <div><span className="block text-[8px] font-sans font-bold uppercase text-slate-400">Name</span>@</div>
                          <div><span className="block text-[8px] font-sans font-bold uppercase text-slate-400">Value</span>76.76.21.21</div>
                        </div>
                      </div>

                      <button 
                        onClick={() => fetchDomainMetadata(currentDomain)}
                        className="w-full bg-amber-100 text-amber-800 py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-amber-200 transition-colors border border-amber-300"
                      >
                        Verify DNS Configuration
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: DNS RECORDS (Only for domains purchased through us) */}
            {activeMgmtTab === 'dns' && domainInfo.registered_through_us && (
              <div className="bg-white border-2 border-black p-6 rounded-xl space-y-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Zone File DNS Records</h4>
                  <p className="text-[10px] text-slate-500">Configure DNS routing records to connect subdomains, email hosts, or verify external service properties.</p>
                </div>

                {dnsStatusMessage && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-3 py-2 rounded-lg font-semibold flex items-center gap-1.5 animate-fadeIn">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> {dnsStatusMessage}
                  </div>
                )}

                {/* DNS Table */}
                <div className="border border-slate-200 rounded-xl overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[9px] font-black tracking-wider">
                        <th className="p-3">Type</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Value</th>
                        <th className="p-3">TTL</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {domainInfo.dns_records && domainInfo.dns_records.length > 0 ? (
                        domainInfo.dns_records.map(record => (
                          <tr key={record.id} className="hover:bg-slate-50/50">
                            <td className="p-3 font-bold text-indigo-600">{record.type}</td>
                            <td className="p-3 font-mono">{record.name}</td>
                            <td className="p-3 font-mono break-all max-w-[200px]">
                              {record.priority ? `[${record.priority}] ` : ''}{record.value}
                            </td>
                            <td className="p-3 text-slate-400">{record.ttl}s</td>
                            <td className="p-3 text-right">
                              <button 
                                onClick={() => handleDeleteDnsRecord(record.id)}
                                disabled={isUpdatingDns}
                                className="text-slate-400 hover:text-rose-500 p-1 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="p-4 text-center text-slate-400">No custom DNS records added yet.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Add DNS Record Form */}
                <form onSubmit={handleAddDnsRecord} className="border-t border-black/10 pt-4 space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Add DNS Record</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-[8px] font-black uppercase text-slate-400 mb-1">Type</label>
                      <select 
                        value={newDnsType} 
                        onChange={(e) => setNewDnsType(e.target.value)}
                        className="w-full border-2 border-black rounded-lg p-2 text-xs font-semibold"
                      >
                        <option value="A">A (IPv4 Address)</option>
                        <option value="AAAA">AAAA (IPv6 Address)</option>
                        <option value="CNAME">CNAME (Alias)</option>
                        <option value="MX">MX (Mail Server)</option>
                        <option value="TXT">TXT (Text verification)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[8px] font-black uppercase text-slate-400 mb-1">Host Name</label>
                      <input 
                        type="text" 
                        value={newDnsName} 
                        onChange={(e) => setNewDnsName(e.target.value)}
                        placeholder="@ or subdomain"
                        className="w-full border-2 border-black rounded-lg p-2 text-xs font-semibold"
                        required
                      />
                    </div>
                    <div className={newDnsType === 'MX' ? 'col-span-1' : 'col-span-2'}>
                      <label className="block text-[8px] font-black uppercase text-slate-400 mb-1">Value / Target</label>
                      <input 
                        type="text" 
                        value={newDnsValue} 
                        onChange={(e) => setNewDnsValue(e.target.value)}
                        placeholder="IP Address or Target Host"
                        className="w-full border-2 border-black rounded-lg p-2 text-xs font-semibold"
                        required
                      />
                    </div>
                    {newDnsType === 'MX' && (
                      <div>
                        <label className="block text-[8px] font-black uppercase text-slate-400 mb-1">Priority</label>
                        <input 
                          type="number" 
                          value={newDnsPriority} 
                          onChange={(e) => setNewDnsPriority(e.target.value)}
                          placeholder="10"
                          className="w-full border-2 border-black rounded-lg p-2 text-xs font-semibold"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <label className="block text-[8px] font-black uppercase text-slate-400 mb-1">TTL (Seconds)</label>
                      <select 
                        value={newDnsTtl} 
                        onChange={(e) => setNewDnsTtl(Number(e.target.value))}
                        className="border border-slate-300 rounded p-1 text-xs"
                      >
                        <option value={600}>10 minutes</option>
                        <option value={3600}>1 hour</option>
                        <option value={14400}>4 hours</option>
                        <option value={86400}>24 hours</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isUpdatingDns}
                      className="bg-black text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider hover:opacity-85 transition-opacity flex items-center gap-1.5 shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    >
                      {isUpdatingDns ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-4 h-4" />} Add Record
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB CONTENT: TRANSFER */}
            {activeMgmtTab === 'transfer' && (
              <div className="bg-white border-2 border-black p-6 rounded-xl space-y-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Transfer Domain to Us</h4>
                  <p className="text-[10px] text-slate-500">Transfer your domain name management to our platform. We will handle renewals and lock in pricing at $12.00/yr.</p>
                </div>

                {transferRequestStatus === 'submitted' || domainInfo.transfer_status === 'pending_transfer' ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-800">Transfer Request Submitted!</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Our operations team is initiating the transfer link with your current registrar using the provided EPP code. We will email details to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleRequestTransfer} className="space-y-4">
                    <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-lg text-[10px] text-indigo-700 space-y-1.5 leading-relaxed">
                      <p className="font-bold flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Transfer Requirements:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Ensure the domain is unlocked at your current registrar.</li>
                        <li>Disable privacy protection features temporarily.</li>
                        <li>Obtain the Transfer Authorization / EPP Code.</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400">Transfer Authorization Code (EPP)</label>
                      <input 
                        type="text" 
                        value={transferAuthCode}
                        onChange={(e) => setTransferAuthCode(e.target.value)}
                        placeholder="Paste auth code here"
                        className="w-full border-2 border-black rounded-lg p-2 text-xs font-semibold outline-none focus:border-indigo-500"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={transferRequestStatus === 'submitting'}
                      className="w-full bg-black text-white py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:opacity-85 transition-opacity flex items-center justify-center gap-2"
                    >
                      {transferRequestStatus === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRightLeft className="w-4 h-4" />} Request Domain Transfer
                    </button>
                  </form>
                )}

                {/* Transfer Out Section (Only show if domain was registered through us) */}
                {domainInfo?.registered_through_us && (
                  <div className="border-t border-black/10 pt-6 mt-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight flex items-center gap-1.5">
                        <ArrowRightLeft className="w-4 h-4 text-rose-500" /> Transfer Domain Out (Move Away)
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1">
                        To transfer your domain management to another registrar (like GoDaddy or Namecheap), lock in settings and generate the Transfer Authorization (EPP) code.
                      </p>
                    </div>

                    {eppCode ? (
                      <div className="bg-slate-50 border-2 border-black p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] animate-fadeIn">
                        <div className="flex-1">
                          <span className="block text-[8px] font-black uppercase text-slate-400">Authorization Code (EPP)</span>
                          <span className="select-all font-mono font-extrabold text-sm text-indigo-600 break-all">{eppCode}</span>
                        </div>
                        <button 
                          onClick={() => { 
                            navigator.clipboard.writeText(eppCode); 
                            alert('EPP code copied to clipboard!'); 
                          }}
                          className="bg-black hover:bg-zinc-800 text-white text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                          Copy Code
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={handleGetEppCode}
                        disabled={isFetchingEpp}
                        className="w-full bg-white border-2 border-black hover:bg-slate-50 text-black text-xs font-black uppercase tracking-widest py-2.5 rounded-xl transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isFetchingEpp ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-slate-500" /> Generating Transfer Code...
                          </>
                        ) : (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} /> Generate Transfer EPP Code
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {inline && (
          <div className="mt-8 pt-6 border-t-[4px] border-black/10 flex justify-end">
            <button 
              onClick={onContinue}
              className="bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              Continue to Publish →
            </button>
          </div>
        )}
      </div>
  );

  if (inline) {
    return content;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {content}
    </motion.div>
  );
}
