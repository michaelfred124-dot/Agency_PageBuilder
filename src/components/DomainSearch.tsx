'use client';
import { useState, useRef } from 'react';
import {
  Search, Globe, ShoppingCart, CheckCircle2, XCircle, Loader2,
  Trash2, ArrowRight, ShieldCheck, Zap, RefreshCw,
  AlertCircle, ExternalLink, ChevronDown, ChevronUp, Tag, BadgeCheck,
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

interface DomainSearchProps {
  mySites: any[];
  onBuy?: (domain: string) => Promise<void>;
}

const TLD_BADGES: Record<string, { label: string; color: string }> = {
  '.com': { label: 'Most Popular', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  '.co':  { label: 'Startup Fav', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  '.io':  { label: 'Tech & Dev',  color: 'bg-cyan-50  text-cyan-700  border-cyan-200'  },
  '.net': { label: 'Networking',  color: 'bg-blue-50  text-blue-700  border-blue-200'  },
};

const SUGGESTIONS = (base: string) => [
  `get${base}`, `${base}hq`, `${base}app`, `the${base}`, `${base}online`,
].map(s => `${s}.com`);

export default function DomainSearch({ mySites, onBuy }: DomainSearchProps) {
  const [tab, setTab] = useState<'search' | 'mydomains'>('search');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DomainResult[]>([]);
  const [status, setStatus] = useState<'idle' | 'searching' | 'done'>('idle');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [buyingSlug, setBuyingSlug] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [showAllResults, setShowAllResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const baseName = results[0]?.domain.split('.')[0] ?? '';
  const comResult = results.find(r => r.extension === '.com');
  const otherResults = results.filter(r => r.extension !== '.com');
  const visibleOthers = showAllResults ? otherResults : otherResults.slice(0, 4);

  const inCart = (domain: string) => cart.some(c => c.domain === domain);
  const cartTotal = cart.reduce((sum, c) => sum + c.priceNum, 0);

  const handleSearch = async () => {
    const q = query.trim();
    if (!q) return;
    setStatus('searching');
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
      setStatus('done');
    }
  };

  const addToCart = (r: DomainResult) => {
    if (inCart(r.domain)) return;
    setCart(prev => [...prev, { domain: r.domain, price: r.price, priceNum: r.priceNum }]);
    setCartOpen(true);
  };

  const removeFromCart = (domain: string) => {
    setCart(prev => prev.filter(c => c.domain !== domain));
  };

  const handleCheckout = async (domain: string, priceNum: number) => {
    if (onBuy) { await onBuy(domain); return; }

    const siteWithTenant = mySites.find((s: any) => s.tenantId);
    if (!siteWithTenant) {
      setError('To complete your purchase, go to My Sites and publish your site first. Then return here to buy your domain.');
      return;
    }
    setBuyingSlug(domain);
    setError('');
    try {
      const res = await fetch('/api/checkout/domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: siteWithTenant.tenantId, domain }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setError(data.error || 'Checkout failed. Please try again.');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setBuyingSlug(null);
    }
  };

  const connectedDomains = mySites.filter((s: any) => s.url && s.url.includes('.'));

  // Build a set of domains the user already owns (url + customDomain fields, lowercased)
  const ownedDomains = new Set<string>(
    mySites.flatMap((s: any) => [
      s.url,
      s.customDomain,
    ].filter(Boolean).map((d: string) =>
      d.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '')
    ))
  );
  const isOwned = (domain: string) => ownedDomains.has(domain.toLowerCase());

  return (
    <div className="max-w-4xl mx-auto space-y-0">
      {/* Tabs */}
      <div className="flex gap-1 border-b border-slate-200 mb-8">
        {(['search', 'mydomains'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              tab === t
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            {t === 'search' ? 'Search Domains' : `My Domains${connectedDomains.length ? ` (${connectedDomains.length})` : ''}`}
          </button>
        ))}
      </div>

      {tab === 'search' && (
        <div className="space-y-6">
          {/* Hero search */}
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)' }}
          >
            <p className="text-indigo-300 text-xs font-bold uppercase tracking-[0.3em] mb-3">Domain Name Search</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
              Find the perfect domain
            </h2>
            <p className="text-indigo-300 text-sm mb-8">Your brand starts with a great name. Search to see what&rsquo;s available.</p>

            <div className="flex max-w-xl mx-auto gap-0 shadow-2xl">
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
                disabled={status === 'searching' || !query.trim()}
                className="px-7 py-4 bg-indigo-500 hover:bg-indigo-400 disabled:bg-slate-500 text-white font-black text-sm rounded-r-xl transition-colors flex items-center gap-2 shrink-0"
              >
                {status === 'searching'
                  ? <Loader2 className="w-5 h-5 animate-spin" />
                  : <Search className="w-5 h-5" />
                }
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {['.com', '.co', '.net', '.org', '.io', '.biz', '.info', '.us'].map(ext => (
                <span key={ext} className="px-2.5 py-1 rounded-full bg-white/10 text-white/70 text-[11px] font-semibold">
                  {ext}
                </span>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              {error}
            </div>
          )}

          {/* Results */}
          {status === 'done' && results.length > 0 && (
            <div className="space-y-4">
              {/* Featured .com result */}
              {comResult && (() => {
                const owned = isOwned(comResult.domain);
                return (
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      {owned ? '★ Your Domain' : comResult.available ? '✓ Top Pick' : '.com Result'}
                    </p>
                    <div className={`rounded-2xl border-2 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm ${
                      owned
                        ? 'bg-indigo-50 border-indigo-300'
                        : comResult.available
                          ? 'bg-white border-indigo-200'
                          : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-4 min-w-0">
                        {owned
                          ? <BadgeCheck className="w-7 h-7 text-indigo-500 shrink-0" />
                          : comResult.available
                            ? <CheckCircle2 className="w-7 h-7 text-emerald-500 shrink-0" />
                            : <XCircle className="w-7 h-7 text-red-400 shrink-0" />
                        }
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xl font-black truncate ${owned ? 'text-indigo-700' : comResult.available ? 'text-slate-900' : 'text-slate-400 line-through'}`}>
                              {comResult.domain}
                            </span>
                            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 shrink-0">
                              Most Popular
                            </span>
                          </div>
                          <p className={`text-sm font-semibold mt-0.5 ${owned ? 'text-indigo-600' : comResult.available ? 'text-emerald-600' : 'text-red-500'}`}>
                            {owned ? 'Already yours — connected to your site' : comResult.available ? 'Available!' : 'Already taken'}
                          </p>
                        </div>
                      </div>
                      {owned ? (
                        <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl border border-indigo-200">
                          <BadgeCheck className="w-4 h-4" />
                          <span className="text-xs font-bold">Active</span>
                        </div>
                      ) : comResult.available ? (
                        <div className="flex items-center gap-4 shrink-0">
                          <div className="text-right">
                            <p className="text-lg font-black text-slate-900">{comResult.price}</p>
                            <p className="text-[10px] text-slate-400">per year</p>
                          </div>
                          {inCart(comResult.domain) ? (
                            <button
                              onClick={() => removeFromCart(comResult.domain)}
                              className="px-5 py-2.5 border-2 border-indigo-300 text-indigo-600 text-sm font-bold rounded-xl flex items-center gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4" /> In Cart
                            </button>
                          ) : (
                            <button
                              onClick={() => addToCart(comResult)}
                              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2"
                            >
                              <ShoppingCart className="w-4 h-4" /> Add to Cart
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="shrink-0">
                          <p className="text-xs text-slate-500 font-medium">Try these instead:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {SUGGESTIONS(baseName).slice(0, 3).map(s => (
                              <button
                                key={s}
                                onClick={() => { setQuery(s); inputRef.current?.focus(); }}
                                className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-700 transition-colors border border-slate-200"
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Other TLDs */}
              {otherResults.length > 0 && (
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Other Extensions</p>
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden divide-y divide-slate-100">
                    {visibleOthers.map(r => {
                      const owned = isOwned(r.domain);
                      return (
                        <div key={r.domain} className={`flex items-center justify-between px-5 py-3.5 gap-4 ${owned ? 'bg-indigo-50/60' : ''}`}>
                          <div className="flex items-center gap-3 min-w-0">
                            {owned
                              ? <BadgeCheck className="w-4 h-4 text-indigo-500 shrink-0" />
                              : r.available
                                ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                : <XCircle className="w-4 h-4 text-slate-300 shrink-0" />
                            }
                            <span className={`text-sm font-bold truncate ${owned ? 'text-indigo-700' : r.available ? 'text-slate-900' : 'text-slate-400 line-through'}`}>
                              {r.domain}
                            </span>
                            {TLD_BADGES[r.extension] && !owned && (
                              <span className={`hidden sm:inline px-2 py-0.5 text-[9px] font-bold rounded-full border ${TLD_BADGES[r.extension].color}`}>
                                {TLD_BADGES[r.extension].label}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 shrink-0">
                            {owned ? (
                              <span className="text-xs font-bold text-indigo-600 flex items-center gap-1">
                                <BadgeCheck className="w-3.5 h-3.5" /> Already Yours
                              </span>
                            ) : r.available ? (
                              <>
                                <span className="text-sm font-bold text-slate-700 hidden sm:block">{r.price}</span>
                                {inCart(r.domain) ? (
                                  <button onClick={() => removeFromCart(r.domain)} className="px-3 py-1.5 border border-indigo-300 text-indigo-600 text-xs font-bold rounded-lg flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Added
                                  </button>
                                ) : (
                                  <button onClick={() => addToCart(r)} className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5">
                                    <ShoppingCart className="w-3.5 h-3.5" /> Add
                                  </button>
                                )}
                              </>
                            ) : (
                              <span className="text-xs text-slate-400 font-semibold">Taken</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    {otherResults.length > 4 && (
                      <button
                        onClick={() => setShowAllResults(v => !v)}
                        className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors"
                      >
                        {showAllResults ? <><ChevronUp className="w-3.5 h-3.5" /> Show less</> : <><ChevronDown className="w-3.5 h-3.5" /> Show {otherResults.length - 4} more extensions</>}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {status === 'done' && results.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
              <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="font-bold text-slate-700">No results found</p>
              <p className="text-slate-400 text-sm mt-1">Try a shorter or different name.</p>
            </div>
          )}

          {/* Why it matters info */}
          {status === 'idle' && (
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, title: 'Free HTTPS', desc: 'SSL certificate included automatically. Every domain is secure from day one.' },
                { icon: Zap,        title: 'Goes Live Fast', desc: 'DNS propagates within minutes. Your site is reachable almost immediately.' },
                { icon: RefreshCw,  title: 'Auto-Renewal',  desc: 'Never lose your name. Enable auto-renew and forget about expiry dates.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <Icon className="w-5 h-5 text-indigo-500 mb-3" strokeWidth={1.5} />
                  <p className="text-sm font-bold text-slate-800 mb-1">{title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'mydomains' && (
        <div className="space-y-4">
          {connectedDomains.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
              <Globe className="w-12 h-12 text-slate-200 mx-auto mb-4" strokeWidth={1} />
              <p className="font-bold text-slate-700 mb-1">No domains yet</p>
              <p className="text-slate-400 text-sm mb-5">Search for an available domain and add it to your site.</p>
              <button
                onClick={() => setTab('search')}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors"
              >
                Search Domains
              </button>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">Your Domains</p>
                  <p className="text-xs text-slate-400 mt-0.5">{connectedDomains.length} domain{connectedDomains.length !== 1 ? 's' : ''} connected</p>
                </div>
              </div>
              <div className="divide-y divide-slate-100">
                {connectedDomains.map((s: any) => (
                  <div key={s.id} className="px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4 text-indigo-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">{s.url}</p>
                        <p className="text-[11px] text-slate-400">{s.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${
                        s.status === 'Live'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        {s.status}
                      </span>
                      {s.url && (
                        <a
                          href={`https://${s.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TLD pricing reference */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              <p className="text-sm font-bold text-slate-900">Extension Pricing</p>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { ext: '.com',  price: '$14.99/yr', note: 'Most trusted & recognized' },
                { ext: '.co',   price: '$29.99/yr', note: 'Popular with startups' },
                { ext: '.io',   price: '$49.99/yr', note: 'Tech & developer favorite' },
                { ext: '.net',  price: '$13.99/yr', note: 'Great for networks & tech' },
                { ext: '.org',  price: '$11.99/yr', note: 'Nonprofits & communities' },
                { ext: '.biz',  price: '$12.99/yr', note: 'Business-focused' },
              ].map(row => (
                <div key={row.ext} className="px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-slate-800 w-12">{row.ext}</span>
                    <span className="text-xs text-slate-400">{row.note}</span>
                  </div>
                  <span className="text-sm font-bold text-indigo-700">{row.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Cart */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 w-80 shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
          {/* Cart header */}
          <button
            onClick={() => setCartOpen(v => !v)}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-indigo-600 text-white"
          >
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
                      <p className="text-[10px] text-slate-400">{item.price}</p>
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
                  <button
                    key={item.domain}
                    onClick={() => handleCheckout(item.domain, item.priceNum)}
                    disabled={buyingSlug === item.domain}
                    className="w-full flex items-center justify-between px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    <span className="truncate mr-2">{item.domain}</span>
                    {buyingSlug === item.domain
                      ? <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
                      : <><span>{item.price}</span> <ArrowRight className="w-3.5 h-3.5 ml-1 shrink-0" /></>
                    }
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
