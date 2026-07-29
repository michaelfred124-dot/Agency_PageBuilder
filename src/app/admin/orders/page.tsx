"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { Loader2, X, Mail, Inbox, DollarSign, Globe, RefreshCw, Eye, EyeOff, Play } from 'lucide-react';

/**
 * Paying subscribers and their build status.
 *
 * `pending_payment` rows are checkouts that were started but never completed —
 * shown deliberately, because an abandoned checkout is worth a follow-up email.
 */

const STAGES = [
  { key: 'pending_payment', label: 'Abandoned checkout', accent: 'bg-slate-300' },
  { key: 'active', label: 'Paid — awaiting intake', accent: 'bg-sky-500' },
  { key: 'intake_complete', label: 'Ready to build', accent: 'bg-amber-500' },
  { key: 'building', label: 'Building', accent: 'bg-violet-500' },
  { key: 'live', label: 'Live', accent: 'bg-emerald-500' },
  { key: 'cancelled', label: 'Cancelled', accent: 'bg-rose-400' },
];

interface Order {
  id: string; stripe_session_id: string; customer_email: string | null; customer_name: string | null;
  plan_id: string; plan_name: string; monthly_cents: number; status: string;
  intake: Record<string, any> | null; intake_completed_at: string | null;
  internal_notes: string | null; created_at: string;
  // WordPress provisioning
  wp_status: string | null; wp_url: string | null; wp_admin_url: string | null;
  wp_admin_user: string | null; wp_admin_password: string | null;
  wp_error: string | null; wp_attempts: number | null; wp_provisioned_at: string | null;
}

/** Provisioning states, mirrored from src/lib/wordpress/provision.ts. */
const WP_STATUS: Record<string, { label: string; className: string }> = {
  queued:      { label: 'Queued',       className: 'bg-slate-100 text-slate-600 border-slate-200' },
  cloning:     { label: 'Cloning…',     className: 'bg-sky-50 text-sky-700 border-sky-200' },
  configuring: { label: 'Configuring…', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  ready:       { label: 'Site ready',   className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  failed:      { label: 'Failed',       className: 'bg-rose-50 text-rose-700 border-rose-200' },
  skipped:     { label: 'Skipped',      className: 'bg-slate-100 text-slate-500 border-slate-200' },
};

const money = (cents: number) => `$${(cents / 100).toFixed(0)}`;

const PRETTY: Record<string, string> = {
  businessName: 'Business name', contactName: 'Contact', phone: 'Phone', address: 'Address / service area',
  industry: 'Industry', whatYouDo: 'What they do', services: 'Services', targetCustomer: 'Customers',
  brandColors: 'Brand colours', logoUrl: 'Logo', existingWebsite: 'Existing site',
  sitesYouLike: 'Sites they like', domainName: 'Domain', socialLinks: 'Socials',
  addonsWanted: 'Add-ons wanted', anythingElse: 'Anything else',
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Order | null>(null);
  const [provisioning, setProvisioning] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const refresh = async () => {
    const res = await fetch('/api/admin/orders');
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Could not load orders.');
    setOrders(data.orders);
    // Keep the open drawer in sync with the row we just refetched.
    setSelected(prev => (prev ? data.orders.find((o: Order) => o.id === prev.id) || prev : prev));
  };

  useEffect(() => {
    refresh()
      .catch((e: any) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  /**
   * Advance the provisioning queue by hand.
   *
   * With an orderId this also resets that order's failure state first, so the
   * button doubles as "retry this one". Without it, it just nudges the queue —
   * useful because Vercel Cron only fires daily on the Hobby plan.
   */
  const runProvision = async (orderId?: string) => {
    setProvisioning(true);
    setError('');
    try {
      const res = await fetch('/api/admin/provision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderId ? { orderId } : {}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Provisioning failed.');
      await refresh();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setProvisioning(false);
    }
  };

  const byStage = useMemo(() => {
    const map: Record<string, Order[]> = {};
    for (const s of STAGES) map[s.key] = [];
    for (const o of orders) (map[o.status] ||= []).push(o);
    return map;
  }, [orders]);

  const mrr = useMemo(
    () => orders.filter(o => ['active', 'intake_complete', 'building', 'live'].includes(o.status))
                .reduce((sum, o) => sum + (o.monthly_cents || 0), 0),
    [orders],
  );

  const patch = async (id: string, changes: Record<string, any>) => {
    try {
      const res = await fetch('/api/admin/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...changes }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Update failed.');
      setOrders(prev => prev.map(o => (o.id === id ? data.order : o)));
      setSelected(prev => (prev && prev.id === id ? data.order : prev));
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (loading) {
    return <div className="p-10 flex items-center gap-2 text-slate-500"><Loader2 className="w-4 h-4 animate-spin" /> Loading orders…</div>;
  }

  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Orders</h1>
          <p className="text-sm text-slate-500 mt-1">{orders.length} total</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => runProvision()}
            disabled={provisioning}
            title="Advance the WordPress provisioning queue by one step"
            className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 disabled:opacity-60 px-3.5 py-2 rounded-xl transition-all"
          >
            {provisioning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            Run provisioning
          </button>
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
            <DollarSign className="w-4 h-4" />
            {money(mrr)}/mo recurring
          </div>
        </div>
      </div>

      {error && <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>}

      {orders.length === 0 ? (
        <div className="border border-dashed border-slate-300 rounded-2xl p-12 text-center">
          <Inbox className="w-8 h-8 text-slate-300 mx-auto mb-3" />
          <p className="font-bold text-slate-700">No orders yet</p>
          <p className="text-sm text-slate-500 mt-1">
            Subscriptions started from <span className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">/pricing</span> land here.
          </p>
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {STAGES.map(stage => (
            <div key={stage.key} className="min-w-[250px] w-[250px] shrink-0">
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${stage.accent}`} />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">{stage.label}</h2>
                <span className="text-xs text-slate-400">{byStage[stage.key]?.length || 0}</span>
              </div>
              <div className="space-y-2">
                {(byStage[stage.key] || []).map(order => (
                  <button
                    key={order.id} onClick={() => setSelected(order)}
                    className="w-full text-left bg-white border border-slate-200 rounded-xl p-3.5 hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    <p className="font-bold text-sm text-slate-900 truncate">
                      {order.intake?.businessName || order.customer_name || order.customer_email || 'Unknown'}
                    </p>
                    <p className="text-xs text-slate-500 truncate">{order.plan_name}</p>
                    <div className="flex items-center justify-between gap-2 mt-1.5">
                      <p className="text-xs font-bold text-emerald-700">{money(order.monthly_cents)}/mo</p>
                      {order.status !== 'pending_payment' && order.wp_status && (
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                            WP_STATUS[order.wp_status]?.className || 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {WP_STATUS[order.wp_status]?.label || order.wp_status}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <>
          <div className="fixed inset-0 bg-slate-900/20 z-40" onClick={() => setSelected(null)} />
          <aside className="fixed right-0 top-0 h-full w-full max-w-md bg-white border-l border-slate-200 shadow-2xl z-50 flex flex-col">
            <div className="px-5 h-16 flex items-center justify-between border-b border-slate-200 shrink-0">
              <div className="min-w-0">
                <p className="font-extrabold text-slate-900 truncate">
                  {selected.intake?.businessName || selected.customer_name || 'Unknown'}
                </p>
                <p className="text-xs text-slate-500">
                  {selected.plan_name} · {money(selected.monthly_cents)}/mo
                </p>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {selected.customer_email && (
                <a href={`mailto:${selected.customer_email}`} className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-teal-600">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" /> <span className="truncate">{selected.customer_email}</span>
                </a>
              )}

              {selected.status !== 'pending_payment' && (
                <div className="border border-slate-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" /> WordPress site
                    </p>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        WP_STATUS[selected.wp_status || '']?.className || 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {WP_STATUS[selected.wp_status || '']?.label || selected.wp_status || 'unknown'}
                    </span>
                  </div>

                  {selected.wp_url ? (
                    <div className="space-y-2 text-xs">
                      <a
                        href={selected.wp_url} target="_blank" rel="noreferrer"
                        className="block text-teal-700 font-semibold hover:underline break-all"
                      >
                        {selected.wp_url}
                      </a>
                      {selected.wp_admin_url && (
                        <a
                          href={selected.wp_admin_url} target="_blank" rel="noreferrer"
                          className="block text-slate-600 hover:underline break-all"
                        >
                          {selected.wp_admin_url}
                        </a>
                      )}
                      {selected.wp_admin_user && (
                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 space-y-1">
                          <p className="font-mono text-slate-800 break-all">
                            <span className="text-slate-400">user </span>{selected.wp_admin_user}
                          </p>
                          {selected.wp_admin_password && (
                            <p className="font-mono text-slate-800 break-all flex items-center gap-2">
                              <span className="text-slate-400">pass </span>
                              {showPassword ? selected.wp_admin_password : '••••••••••'}
                              <button
                                onClick={() => setShowPassword(v => !v)}
                                className="text-slate-400 hover:text-slate-700 shrink-0"
                                title={showPassword ? 'Hide password' : 'Show password'}
                              >
                                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                              </button>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500">
                      {selected.wp_status === 'failed'
                        ? 'Provisioning failed — the customer has paid and has no site.'
                        : 'Not provisioned yet.'}
                    </p>
                  )}

                  {selected.wp_error && (
                    <p className="mt-3 text-[11px] text-rose-700 bg-rose-50 border border-rose-200 rounded-xl p-2.5 whitespace-pre-wrap break-words">
                      {selected.wp_error}
                    </p>
                  )}

                  {selected.wp_status !== 'ready' && (
                    <button
                      onClick={() => runProvision(selected.id)}
                      disabled={provisioning}
                      className="mt-3 w-full flex items-center justify-center gap-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 disabled:opacity-60 py-2.5 rounded-xl transition-all"
                    >
                      {provisioning
                        ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Working…</>
                        : <><RefreshCw className="w-3.5 h-3.5" /> {selected.wp_status === 'failed' ? 'Retry provisioning' : 'Advance now'}</>}
                    </button>
                  )}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Stage</label>
                <select
                  value={selected.status}
                  onChange={e => patch(selected.id, { status: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold focus:border-teal-400 focus:outline-none"
                >
                  {STAGES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                </select>
              </div>

              {selected.intake ? (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Intake answers</p>
                  <div className="space-y-3">
                    {Object.entries(selected.intake)
                      .filter(([, v]) => v && (Array.isArray(v) ? v.length : String(v).trim()))
                      .map(([k, v]) => (
                        <div key={k} className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{PRETTY[k] || k}</p>
                          <p className="text-xs text-slate-800 mt-1 whitespace-pre-wrap break-words">
                            {Array.isArray(v) ? v.join(', ') : String(v)}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-slate-500 bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                  Intake not completed yet.
                </p>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Notes</label>
                <textarea
                  defaultValue={selected.internal_notes || ''}
                  onBlur={e => {
                    if (e.target.value !== (selected.internal_notes || '')) {
                      patch(selected.id, { internalNotes: e.target.value });
                    }
                  }}
                  rows={5}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm resize-y focus:border-teal-400 focus:outline-none"
                  placeholder="Build notes, what you've sent them…"
                />
                <p className="text-[10px] text-slate-400 mt-1">Saves when you click away.</p>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
