'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Search, Globe, ShoppingCart, CheckCircle2, XCircle, Loader2, Trash2,
  ArrowRight, RefreshCw, AlertCircle, ChevronDown, ChevronUp, BadgeCheck,
  Copy, Check, Plus, Server,
} from 'lucide-react';

interface DomainResult {
  domain: string;
  available: boolean;
  price: string;
  priceNum: number;
  extension: string;
}

interface CartItem {
  domain: string;
  price: string;
  priceNum: number;
}

interface PortfolioDomain {
  id: string;
  domain: string;
  status: 'Verified' | 'Unverified';
  expiration: number | null;
  connectedSite?: { name: string } | null;
}

interface DnsRecord {
  id: string;
  type: string;
  name: string;
  value: string;
  ttl: number;
  priority?: number;
}

interface ConnectInstructions {
  domain: string;
  tenantId: string;
}

interface DomainManagerProps {
  mySites: any[];
  user?: any;
}

const TABS = [
  { key: 'search', label: 'Search & Register' },
  { key: 'portfolio', label: 'My Portfolio' },
  { key: 'dns', label: 'DNS Manager' },
  { key: 'connect', label: 'Connect Domain' },
] as const;

type Tab = typeof TABS[number]['key'];

const DNS_TYPE_COLORS: Record<string, string> = {
  A:     'bg-blue-50 text-blue-700 border-blue-200',
  CNAME: 'bg-purple-50 text-purple-700 border-purple-200',
  MX:    'bg-orange-50 text-orange-700 border-orange-200',
  TXT:   'bg-emerald-50 text-emerald-700 border-emerald-200',
  AAAA:  'bg-indigo-50 text-indigo-700 border-indigo-200',
  SRV:   'bg-slate-50 text-slate-700 border-slate-200',
};

const SUGGESTIONS = (base: string) =>
  [`get${base}`, `${base}hq`, `${base}app`, `the${base}`, `${base}online`].map(s => `${s}.com`);

function StatusBadge({ ok, labels }: { ok: boolean; labels: [string, string] }) {
  return (
    <span className={`rounded-full text-[10px] font-bold px-2.5 py-1 border ${
      ok ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'
    }`}>
      {ok ? labels[0] : labels[1]}
    </span>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button onClick={copy} className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

export default function DomainManager({ mySites }: DomainManagerProps) {
  const [activeTab, setActiveTab] = useState<Tab>('search');

  // Search tab
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DomainResult[]>([]);
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'done'>('idle');
  const [showAllResults, setShowAllResults] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Cart
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [buyingSlug, setBuyingSlug] = useState<string | null>(null);

  // Portfolio tab
  const [portfolio, setPortfolio] = useState<PortfolioDomain[]>([]);
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [portfolioError, setPortfolioError] = useState('');

  // DNS tab
  const [selectedDnsDomain, setSelectedDnsDomain] = useState('');
  const [activeDnsTab, setActiveDnsTab] = useState('');
  const [dnsRecords, setDnsRecords] = useState<DnsRecord[]>([]);
  const [dnsLoading, setDnsLoading] = useState(false);
  const [newRecord, setNewRecord] = useState({ type: 'A', name: '', value: '', ttl: 3600, priority: '' });
  const [dnsActionMsg, setDnsActionMsg] = useState('');

  // Connect tab
  const [connectDomain, setConnectDomain] = useState('');
  const [connectSiteId, setConnectSiteId] = useState('');
  const [connectStatus, setConnectStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [connectError, setConnectError] = useState('');
  const [connectInstructions, setConnectInstructions] = useState<ConnectInstructions | null>(null);
  const [verifyStatus, setVerifyStatus] = useState<'idle' | 'loading' | 'verified' | 'pending'>('idle');

  const ownedDomains = new Set<string>(
    mySites.flatMap((s: any) =>
      [s.url, s.customDomain].filter(Boolean).map((d: string) =>
        d.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '')
      )
    )
  );

  const isOwned = (domain: string) => ownedDomains.has(domain.toLowerCase());
  const inCart = (domain: string) => cart.some(c => c.domain === domain);
  const cartTotal = cart.reduce((sum, c) => sum + c.priceNum, 0);
  const activeTenantId = mySites.find((s: any) => s.tenantId)?.tenantId ?? '';
  const sitesWithTenant = mySites.filter((s: any) => s.tenantId);

  const comResult = results.find(r => r.extension === '.com');
  const otherResults = results.filter(r => r.extension !== '.com');
  const visibleOthers = showAllResults ? otherResults : otherResults.slice(0, 4);
  const baseName = results[0]?.domain.split('.')[0] ?? '';

  const handleSearch = useCallback(async () => {
    const q = query.trim();
    if (!q) return;
    setSearchStatus('searching');
    setResults([]);
    setError('');
    setShowAllResults(false);
    try {
      const res = await fetch(`/api/domains?search=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(res.ok && data.results ? data.results : []);
    } catch {
      setError('Search failed. Please check your connection and try again.');
    } finally {
      setSearchStatus('done');
    }
  }, [query]);

  const addToCart = useCallback((r: DomainResult) => {
    if (inCart(r.domain)) return;
    setCart(prev => [...prev, { domain: r.domain, price: r.price, priceNum: r.priceNum }]);
    setCartOpen(true);
  }, [cart]);

  const removeFromCart = useCallback((domain: string) => {
    setCart(prev => prev.filter(c => c.domain !== domain));
  }, []);

  const handleCheckout = useCallback(async (domain: string) => {
    if (!activeTenantId) {
      setError('Publish your site first to enable domain purchases.');
      return;
    }
    setBuyingSlug(domain);
    setError('');
    try {
      const res = await fetch('/api/checkout/domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: activeTenantId, domain }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setError(data.error || 'Checkout failed. Please try again.');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setBuyingSlug(null);
    }
  }, [activeTenantId]);

  const fetchPortfolio = useCallback(async () => {
    setPortfolioLoading(true);
    setPortfolioError('');
    try {
      const res = await fetch('/api/domains/portfolio');
      const data = await res.json();
      setPortfolio(res.ok ? (data.domains ?? data ?? []) : []);
    } catch {
      setPortfolioError('Failed to load portfolio.');
    } finally {
      setPortfolioLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === 'portfolio') fetchPortfolio();
  }, [activeTab, fetchPortfolio]);

  const fetchDns = useCallback(async (domain: string) => {
    if (!domain) return;
    setDnsLoading(true);
    setDnsRecords([]);
    try {
      const res = await fetch(`/api/domains/dns?domain=${encodeURIComponent(domain)}`);
      const data = await res.json();
      setDnsRecords(res.ok ? (data.records ?? []) : []);
    } catch {
      setDnsRecords([]);
    } finally {
      setDnsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === 'dns' && activeDnsTab) {
      setSelectedDnsDomain(activeDnsTab);
      fetchDns(activeDnsTab);
    }
  }, [activeTab, activeDnsTab, fetchDns]);

  const handleDomainSelect = useCallback((domain: string) => {
    setSelectedDnsDomain(domain);
    fetchDns(domain);
  }, [fetchDns]);

  const showDnsActionMsg = (msg: string) => {
    setDnsActionMsg(msg);
    setTimeout(() => setDnsActionMsg(''), 3000);
  };

  const handleAddDnsRecord = useCallback(async () => {
    if (!newRecord.value || !selectedDnsDomain) return;
    try {
      const body: any = {
        domain: selectedDnsDomain,
        tenantId: activeTenantId,
        type: newRecord.type,
        name: newRecord.name || '@',
        value: newRecord.value,
        ttl: newRecord.ttl,
      };
      if (newRecord.type === 'MX' && newRecord.priority) body.priority = Number(newRecord.priority);
      const res = await fetch('/api/domains/dns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setNewRecord({ type: 'A', name: '', value: '', ttl: 3600, priority: '' });
        fetchDns(selectedDnsDomain);
        showDnsActionMsg('Record added successfully.');
      } else {
        showDnsActionMsg('Failed to add record.');
      }
    } catch {
      showDnsActionMsg('Network error.');
    }
  }, [newRecord, selectedDnsDomain, activeTenantId, fetchDns]);

  const handleDeleteDnsRecord = useCallback(async (recordId: string) => {
    if (!selectedDnsDomain) return;
    try {
      const res = await fetch('/api/domains/dns', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: selectedDnsDomain, tenantId: activeTenantId, recordId }),
      });
      if (res.ok) {
        setDnsRecords(prev => prev.filter(r => r.id !== recordId));
        showDnsActionMsg('Record deleted.');
      } else {
        showDnsActionMsg('Failed to delete record.');
      }
    } catch {
      showDnsActionMsg('Network error.');
    }
  }, [selectedDnsDomain, activeTenantId]);

  const applyVercelTemplate = useCallback(async () => {
    if (!selectedDnsDomain) return;
    const records = [
      { type: 'A', name: '@', value: '76.76.21.21', ttl: 3600 },
      { type: 'CNAME', name: 'www', value: 'cname.vercel-dns.com', ttl: 3600 },
    ];
    for (const r of records) {
      await fetch('/api/domains/dns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: selectedDnsDomain, tenantId: activeTenantId, ...r }),
      });
    }
    fetchDns(selectedDnsDomain);
    showDnsActionMsg('Vercel records added.');
  }, [selectedDnsDomain, activeTenantId, fetchDns]);

  const handleConnectDomain = useCallback(async () => {
    if (!connectDomain || !connectSiteId) return;
    setConnectStatus('loading');
    setConnectError('');
    try {
      const site = sitesWithTenant.find((s: any) => s.id === connectSiteId);
      const tenantId = site?.tenantId ?? activeTenantId;
      const res = await fetch('/api/domains', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId, domain: connectDomain.toLowerCase(), isPurchase: false }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to connect domain.');
      setConnectStatus('success');
      setConnectInstructions({ domain: connectDomain.toLowerCase(), tenantId });
    } catch (e: any) {
      setConnectStatus('error');
      setConnectError(e.message);
    }
  }, [connectDomain, connectSiteId, sitesWithTenant, activeTenantId]);

  const handleVerifyDns = useCallback(async () => {
    if (!connectInstructions) return;
    setVerifyStatus('loading');
    try {
      const res = await fetch(
        `/api/domains?domain=${connectInstructions.domain}&tenantId=${connectInstructions.tenantId}`
      );
      const data = await res.json();
      const isVerified = data.status?.toLowerCase().includes('valid') || data.verified === true;
      setVerifyStatus(isVerified ? 'verified' : 'pending');
    } catch {
      setVerifyStatus('pending');
    }
  }, [connectInstructions]);

  const switchToDns = useCallback((domain: string) => {
    setActiveDnsTab(domain);
    setActiveTab('dns');
  }, []);

  // ─── Render helpers ───────────────────────────────────────────────────────

  function renderDomainRow(r: DomainResult) {
    const owned = isOwned(r.domain);
    return (
      <div key={r.domain} className={`flex items-center justify-between px-5 py-3.5 gap-4 ${owned ? 'bg-indigo-50/50' : ''}`}>
        <div className="flex items-center gap-3 min-w-0">
          {owned
            ? <BadgeCheck className="w-4 h-4 text-indigo-500 shrink-0" />
            : r.available
              ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              : <XCircle className="w-4 h-4 text-slate-300 shrink-0" />}
          <span className={`text-sm font-bold truncate ${owned ? 'text-indigo-700' : r.available ? 'text-slate-900' : 'text-slate-400 line-through'}`}>
            {r.domain}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {owned ? (
            <span className="text-xs font-bold text-indigo-600 flex items-center gap-1"><BadgeCheck className="w-3.5 h-3.5" /> Already Yours</span>
          ) : r.available ? (
            <>
              <span className="text-sm font-bold text-slate-700 hidden sm:block">{r.price}</span>
              {inCart(r.domain)
                ? <button onClick={() => removeFromCart(r.domain)} className="px-3 py-1.5 border border-indigo-300 text-indigo-600 text-xs font-bold rounded-lg flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Added</button>
                : <button onClick={() => addToCart(r)} className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"><ShoppingCart className="w-3.5 h-3.5" /> Add</button>}
            </>
          ) : (
            <span className="text-xs text-slate-400 font-semibold">Taken</span>
          )}
        </div>
      </div>
    );
  }

  function renderSkeletonRows(n: number) {
    return Array.from({ length: n }).map((_, i) => (
      <div key={i} className="flex items-center gap-4 px-6 py-4 animate-pulse">
        <div className="w-4 h-4 rounded-full bg-slate-200 shrink-0" />
        <div className="flex-1 h-3 bg-slate-200 rounded" />
        <div className="w-16 h-6 bg-slate-200 rounded-full" />
        <div className="w-20 h-6 bg-slate-100 rounded-lg" />
      </div>
    ));
  }

  function renderDnsTypeBadge(type: string) {
    return (
      <span className={`rounded-full text-[10px] font-bold px-2.5 py-1 border ${DNS_TYPE_COLORS[type] ?? 'bg-slate-50 text-slate-700 border-slate-200'}`}>
        {type}
      </span>
    );
  }

  // ─── Tab: Search ──────────────────────────────────────────────────────────
  function renderSearch() {
    const comOwned = comResult ? isOwned(comResult.domain) : false;
    return (
      <div className="space-y-6">
        <div className="rounded-2xl p-8 md:p-10 text-center" style={{ background: 'linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4338ca 100%)' }}>
          <p className="text-indigo-300 text-xs font-bold uppercase tracking-[0.3em] mb-3">Domain Name Search</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">Find the perfect domain</h2>
          <p className="text-indigo-300 text-sm mb-8">Your brand starts with a great name.</p>
          <div className="flex max-w-xl mx-auto shadow-2xl">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="yourbusinessname"
              className="flex-1 px-5 py-4 text-slate-900 text-base font-medium bg-white rounded-l-xl focus:outline-none placeholder:text-slate-400 min-w-0"
            />
            <button
              onClick={handleSearch}
              disabled={searchStatus === 'searching' || !query.trim()}
              className="px-7 py-4 bg-indigo-500 hover:bg-indigo-400 disabled:bg-slate-500 text-white font-black text-sm rounded-r-xl transition-colors flex items-center gap-2 shrink-0"
            >
              {searchStatus === 'searching' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['.com','.co','.net','.org','.io','.biz','.info','.us'].map(ext => (
              <span key={ext} className="px-2.5 py-1 rounded-full bg-white/10 text-white/70 text-[11px] font-semibold">{ext}</span>
            ))}
          </div>
        </div>

        {error && (
          <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />{error}
          </div>
        )}

        {searchStatus === 'done' && results.length > 0 && (
          <div className="space-y-4">
            {comResult && (
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {comOwned ? 'Your Domain' : comResult.available ? 'Top Pick' : '.com Result'}
                </p>
                <div className={`rounded-2xl border-2 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm ${
                  comOwned ? 'bg-indigo-50 border-indigo-300' : comResult.available ? 'bg-white border-indigo-200' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-4 min-w-0">
                    {comOwned
                      ? <BadgeCheck className="w-7 h-7 text-indigo-500 shrink-0" />
                      : comResult.available
                        ? <CheckCircle2 className="w-7 h-7 text-emerald-500 shrink-0" />
                        : <XCircle className="w-7 h-7 text-red-400 shrink-0" />}
                    <div className="min-w-0">
                      <span className={`text-xl font-black block truncate ${comOwned ? 'text-indigo-700' : comResult.available ? 'text-slate-900' : 'text-slate-400 line-through'}`}>
                        {comResult.domain}
                      </span>
                      <p className={`text-sm font-semibold mt-0.5 ${comOwned ? 'text-indigo-600' : comResult.available ? 'text-emerald-600' : 'text-red-500'}`}>
                        {comOwned ? 'Already yours' : comResult.available ? 'Available!' : 'Already taken'}
                      </p>
                    </div>
                  </div>
                  {comOwned ? (
                    <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl border border-indigo-200">
                      <BadgeCheck className="w-4 h-4" /><span className="text-xs font-bold">Active</span>
                    </div>
                  ) : comResult.available ? (
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <p className="text-lg font-black text-slate-900">{comResult.price}</p>
                        <p className="text-[10px] text-slate-400">per year</p>
                      </div>
                      {inCart(comResult.domain)
                        ? <button onClick={() => removeFromCart(comResult.domain)} className="px-5 py-2.5 border-2 border-indigo-300 text-indigo-600 text-sm font-bold rounded-xl flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> In Cart</button>
                        : <button onClick={() => addToCart(comResult)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2"><ShoppingCart className="w-4 h-4" /> Add to Cart</button>}
                    </div>
                  ) : (
                    <div className="shrink-0">
                      <p className="text-xs text-slate-500 font-medium mb-1">Try these instead:</p>
                      <div className="flex flex-wrap gap-1">
                        {SUGGESTIONS(baseName).slice(0, 3).map(s => (
                          <button key={s} onClick={() => { setQuery(s); inputRef.current?.focus(); }}
                            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-700 transition-colors border border-slate-200">
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {otherResults.length > 0 && (
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Other Extensions</p>
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden divide-y divide-slate-100">
                  {visibleOthers.map(renderDomainRow)}
                  {otherResults.length > 4 && (
                    <button onClick={() => setShowAllResults(v => !v)}
                      className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors">
                      {showAllResults
                        ? <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
                        : <><ChevronDown className="w-3.5 h-3.5" /> Show {otherResults.length - 4} more</>}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {searchStatus === 'done' && results.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="font-bold text-slate-700">No results found</p>
            <p className="text-slate-400 text-sm mt-1">Try a shorter or different name.</p>
          </div>
        )}
      </div>
    );
  }

  // ─── Tab: Portfolio ───────────────────────────────────────────────────────
  function renderPortfolio() {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <p className="text-sm font-bold text-slate-900">Registered Domains</p>
          <button onClick={fetchPortfolio} className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
        {portfolioLoading ? (
          <div className="divide-y divide-slate-100">{renderSkeletonRows(4)}</div>
        ) : portfolioError ? (
          <div className="p-10 text-center text-sm text-red-600 font-medium">{portfolioError}</div>
        ) : portfolio.length === 0 ? (
          <div className="p-12 text-center">
            <Globe className="w-12 h-12 text-slate-200 mx-auto mb-4" strokeWidth={1} />
            <p className="font-bold text-slate-700 mb-1">No domains registered yet</p>
            <p className="text-slate-400 text-sm mb-5">Search for an available domain to get started.</p>
            <button onClick={() => setActiveTab('search')}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors">
              Search Domains
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {portfolio.map(d => (
              <div key={d.id} className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{d.domain}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Expires: {d.expiration ? new Date(d.expiration).toLocaleDateString() : 'Never'}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-wrap shrink-0">
                  <StatusBadge ok={d.status === 'Verified'} labels={['Verified', 'Unverified']} />
                  {d.connectedSite ? (
                    <span className="text-xs font-semibold text-slate-600">{d.connectedSite.name}</span>
                  ) : (
                    <span className="text-xs text-slate-400">—</span>
                  )}
                  <button onClick={() => switchToDns(d.domain)}
                    className="px-3 py-1.5 text-xs font-bold text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" /> Manage DNS
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ─── Tab: DNS Manager ─────────────────────────────────────────────────────
  function renderDns() {
    return (
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Domain</label>
          <div className="flex gap-3">
            <input
              list="dns-domain-list"
              value={selectedDnsDomain}
              onChange={e => setSelectedDnsDomain(e.target.value)}
              placeholder="e.g. yourdomain.com"
              className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <datalist id="dns-domain-list">
              {portfolio.map(d => <option key={d.id} value={d.domain} />)}
            </datalist>
            <button onClick={() => handleDomainSelect(selectedDnsDomain)} disabled={!selectedDnsDomain}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white text-sm font-bold rounded-xl transition-colors">
              Load
            </button>
          </div>
        </div>

        {dnsActionMsg && (
          <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-700 font-semibold">
            <Check className="w-4 h-4" />{dnsActionMsg}
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <p className="text-sm font-bold text-slate-900">DNS Records</p>
            <div className="flex gap-2">
              <button onClick={applyVercelTemplate} className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Point to Vercel
              </button>
              <button onClick={() => handleAddDnsRecord()} className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Add www redirect
              </button>
            </div>
          </div>

          {dnsLoading ? (
            <div className="divide-y divide-slate-100">{renderSkeletonRows(3)}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                    {['Type','Name','Value','TTL',''].map((h, i) => (
                      <th key={i} className={`px-4 py-3 ${i === 4 ? 'text-right' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {dnsRecords.length === 0 ? (
                    <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">No records found. Select a domain above.</td></tr>
                  ) : dnsRecords.map(r => (
                    <tr key={r.id} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3">{renderDnsTypeBadge(r.type)}</td>
                      <td className="px-4 py-3 font-mono text-slate-700">{r.name}</td>
                      <td className="px-4 py-3 font-mono text-slate-600 max-w-[200px] truncate">
                        {r.priority ? `[${r.priority}] ` : ''}{r.value}
                      </td>
                      <td className="px-4 py-3 text-slate-400">{r.ttl}s</td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={() => handleDeleteDnsRecord(r.id)} className="p-1.5 text-slate-300 hover:text-red-500 transition-colors rounded">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="px-6 py-5 border-t border-slate-100 space-y-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Add DNS Record</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-[10px] text-slate-400 font-bold mb-1">Type</label>
                <select value={newRecord.type} onChange={e => setNewRecord(r => ({ ...r, type: e.target.value }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  {['A','AAAA','CNAME','MX','TXT','SRV'].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-slate-400 font-bold mb-1">Name</label>
                <input value={newRecord.name} onChange={e => setNewRecord(r => ({ ...r, name: e.target.value }))}
                  placeholder="@ or subdomain"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              </div>
              <div className={newRecord.type === 'MX' ? '' : 'sm:col-span-2'}>
                <label className="block text-[10px] text-slate-400 font-bold mb-1">Value</label>
                <input value={newRecord.value} onChange={e => setNewRecord(r => ({ ...r, value: e.target.value }))}
                  placeholder="IP address or hostname"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              </div>
              {newRecord.type === 'MX' && (
                <div>
                  <label className="block text-[10px] text-slate-400 font-bold mb-1">Priority</label>
                  <input type="number" value={newRecord.priority} onChange={e => setNewRecord(r => ({ ...r, priority: e.target.value }))}
                    placeholder="10"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                </div>
              )}
            </div>
            <div className="flex items-end gap-4">
              <div>
                <label className="block text-[10px] text-slate-400 font-bold mb-1">TTL</label>
                <select value={newRecord.ttl} onChange={e => setNewRecord(r => ({ ...r, ttl: Number(e.target.value) }))}
                  className="border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <option value={300}>5 min</option>
                  <option value={3600}>1 hr</option>
                  <option value={86400}>24 hr</option>
                </select>
              </div>
              <button onClick={handleAddDnsRecord} disabled={!newRecord.value || !selectedDnsDomain}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5">
                <Plus className="w-3.5 h-3.5" /> Add Record
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Tab: Connect ─────────────────────────────────────────────────────────
  function renderConnect() {
    return (
      <div className="space-y-6 max-w-xl">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4">
          <div>
            <p className="text-sm font-bold text-slate-900 mb-0.5">Connect an External Domain</p>
            <p className="text-xs text-slate-400">Point a domain you already own to one of your client sites.</p>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Domain Name</label>
            <input value={connectDomain} onChange={e => setConnectDomain(e.target.value)} placeholder="clientbusiness.com"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Connect to Site</label>
            <select value={connectSiteId} onChange={e => setConnectSiteId(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300">
              <option value="">Select a site…</option>
              {sitesWithTenant.map((s: any) => (
                <option key={s.id} value={s.id}>{s.name || s.url || s.id}</option>
              ))}
            </select>
          </div>
          {connectError && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />{connectError}
            </div>
          )}
          <button onClick={handleConnectDomain} disabled={!connectDomain || !connectSiteId || connectStatus === 'loading'}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2">
            {connectStatus === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
            Connect Domain
          </button>
        </div>

        {connectStatus === 'success' && connectInstructions && (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <p className="text-sm font-bold text-slate-900">Domain connected! Configure DNS</p>
            </div>
            <p className="text-xs text-slate-500">Add these records at your domain registrar to complete setup:</p>
            {[
              { type: 'A', name: '@', value: '76.76.21.21' },
              { type: 'CNAME', name: 'www', value: 'cname.vercel-dns.com' },
            ].map(rec => (
              <div key={rec.type} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 gap-3">
                <div className="flex items-center gap-3">
                  {renderDnsTypeBadge(rec.type)}
                  <span className="font-mono text-xs text-slate-700">{rec.name}</span>
                  <span className="text-slate-300">→</span>
                  <span className="font-mono text-xs text-slate-700">{rec.value}</span>
                </div>
                <CopyButton value={rec.value} />
              </div>
            ))}
            <button onClick={handleVerifyDns} disabled={verifyStatus === 'loading'}
              className="w-full py-2.5 border border-indigo-200 text-indigo-600 font-bold text-sm rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
              {verifyStatus === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
              Verify DNS
            </button>
            {verifyStatus === 'verified' && (
              <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> DNS Verified — your domain is live!
              </div>
            )}
            {verifyStatus === 'pending' && (
              <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-700 font-semibold">
                <AlertCircle className="w-4 h-4" /> DNS propagation pending — check again in a few minutes.
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-0">
      <div className="flex gap-1 border-b border-slate-200 mb-8 overflow-x-auto">
        {TABS.map(t => (
          <button key={t.key} onClick={() => setActiveTab(t.key)}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
              activeTab === t.key ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'search'    && renderSearch()}
      {activeTab === 'portfolio' && renderPortfolio()}
      {activeTab === 'dns'       && renderDns()}
      {activeTab === 'connect'   && renderConnect()}

      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 w-80 shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
          <button onClick={() => setCartOpen(v => !v)}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-indigo-600 text-white">
            <div className="flex items-center gap-2.5">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-bold">Cart ({cart.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black">${cartTotal.toFixed(2)}/yr</span>
              {cartOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </div>
          </button>
          {cartOpen && (
            <div className="bg-white">
              <div className="divide-y divide-slate-100 max-h-52 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.domain} className="flex items-center justify-between px-5 py-3 gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">{item.domain}</p>
                      <p className="text-[10px] text-slate-400">{item.price}/yr</p>
                    </div>
                    <button onClick={() => removeFromCart(item.domain)} className="text-slate-300 hover:text-red-500 transition-colors shrink-0">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-slate-100 space-y-2">
                {error && <p className="text-[11px] text-red-600 font-medium">{error}</p>}
                {cart.map(item => (
                  <button key={item.domain} onClick={() => handleCheckout(item.domain)} disabled={buyingSlug === item.domain}
                    className="w-full flex items-center justify-between px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white text-xs font-bold rounded-xl transition-colors">
                    <span className="truncate mr-2">{item.domain}</span>
                    {buyingSlug === item.domain
                      ? <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
                      : <><span>{item.price}</span><ArrowRight className="w-3.5 h-3.5 ml-1 shrink-0" /></>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
