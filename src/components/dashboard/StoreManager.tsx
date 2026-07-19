"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag, Plus, Pencil, Trash2, Loader2, X, Upload,
  CreditCard, CheckCircle2, AlertCircle, ExternalLink, Package, Receipt
} from 'lucide-react';

/**
 * StoreManager — the client-facing native store admin.
 *
 * Three panels: Stripe Connect status, product catalog CRUD (with image
 * upload through /api/upload), and recent orders with fulfillment status.
 * Everything is scoped to one tenant and calls the owner-auth /api/store/*.
 */

interface StoreManagerProps {
  tenantId: string;
  tenantName?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  currency: string;
  images: string[];
  active: boolean;
  inventory: number | null;
}

interface Order {
  id: string;
  customer_email: string | null;
  customer_name: string | null;
  amount_total_cents: number | null;
  currency: string;
  status: string;
  line_items: any[];
  created_at: string;
}

function money(cents: number | null, currency = 'usd') {
  if (cents === null || cents === undefined) return '—';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency.toUpperCase() }).format(cents / 100);
}

const EMPTY_FORM = { name: '', description: '', price: '', inventory: '', images: [] as string[], active: true };

export default function StoreManager({ tenantId, tenantName }: StoreManagerProps) {
  // Stripe Connect state
  const [connect, setConnect] = useState<{ connected: boolean; chargesEnabled: boolean } | null>(null);
  const [connectLoading, setConnectLoading] = useState(false);

  // Products state
  const [products, setProducts] = useState<Product[] | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Orders state
  const [orders, setOrders] = useState<Order[] | null>(null);

  // Shipping settings state
  const [shipCollect, setShipCollect] = useState(true);
  const [shipFlat, setShipFlat] = useState('');
  const [shipFreeThreshold, setShipFreeThreshold] = useState('');
  const [shipSaving, setShipSaving] = useState(false);
  const [shipSaved, setShipSaved] = useState(false);

  const loadAll = useCallback(async () => {
    const [connectRes, productsRes, ordersRes, settingsRes] = await Promise.all([
      fetch(`/api/store/connect?tenantId=${tenantId}`).then(r => r.json()).catch(() => null),
      fetch(`/api/store/products?tenantId=${tenantId}`).then(r => r.json()).catch(() => null),
      fetch(`/api/store/orders?tenantId=${tenantId}`).then(r => r.json()).catch(() => null),
      fetch(`/api/store/settings?tenantId=${tenantId}`).then(r => r.json()).catch(() => null)
    ]);
    setConnect(connectRes && !connectRes.error ? connectRes : { connected: false, chargesEnabled: false });
    setProducts(productsRes?.products || []);
    setOrders(ordersRes?.orders || []);
    const settings = settingsRes?.settings || {};
    setShipCollect(settings.collectShipping !== false);
    setShipFlat(settings.shippingFlatCents != null ? (settings.shippingFlatCents / 100).toString() : '');
    setShipFreeThreshold(settings.shippingFreeThresholdCents != null ? (settings.shippingFreeThresholdCents / 100).toString() : '');
  }, [tenantId]);

  useEffect(() => { loadAll(); }, [loadAll]);

  const startStripeOnboarding = async () => {
    setConnectLoading(true);
    try {
      const res = await fetch('/api/store/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId })
      });
      const json = await res.json();
      if (json.url) {
        window.location.href = json.url;
        return;
      }
      alert(json.error || 'Could not start Stripe onboarding.');
    } catch {
      alert('Network error starting Stripe onboarding.');
    } finally {
      setConnectLoading(false);
    }
  };

  const saveShippingSettings = async () => {
    setShipSaving(true);
    setShipSaved(false);
    try {
      await fetch('/api/store/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId,
          collectShipping: shipCollect,
          shippingFlatCents: shipFlat.trim() === '' ? 0 : Math.round(Number(shipFlat) * 100),
          shippingFreeThresholdCents: shipFreeThreshold.trim() === '' ? null : Math.round(Number(shipFreeThreshold) * 100),
        }),
      });
      setShipSaved(true);
      setTimeout(() => setShipSaved(false), 2000);
    } finally {
      setShipSaving(false);
    }
  };

  const openCreate = () => {
    setEditingId(null);
    setForm({ ...EMPTY_FORM });
    setFormError(null);
    setShowForm(true);
  };

  const openEdit = (p: Product) => {
    setEditingId(p.id);
    setForm({
      name: p.name,
      description: p.description || '',
      price: (p.price_cents / 100).toFixed(2),
      inventory: p.inventory === null ? '' : String(p.inventory),
      images: p.images || [],
      active: p.active
    });
    setFormError(null);
    setShowForm(true);
  };

  const uploadImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg,image/png,image/webp,image/gif';
    input.multiple = true;
    input.onchange = async (e: any) => {
      const files: File[] = Array.from(e.target.files || []);
      if (files.length === 0) return;
      setUploading(true);
      try {
        for (const file of files) {
          const fd = new FormData();
          fd.append('file', file);
          fd.append('tenantId', tenantId);
          const res = await fetch('/api/upload', { method: 'POST', body: fd });
          const json = await res.json();
          if (!res.ok) throw new Error(json.error || 'Upload failed.');
          setForm(f => ({ ...f, images: [...f.images, json.url] }));
        }
      } catch (err: any) {
        setFormError(err?.message || 'Image upload failed.');
      } finally {
        setUploading(false);
      }
    };
    input.click();
  };

  const removeImage = (url: string) => {
    setForm(f => ({ ...f, images: f.images.filter(i => i !== url) }));
  };

  const saveProduct = async () => {
    const priceNum = Math.round(parseFloat(form.price) * 100);
    if (!form.name.trim()) { setFormError('Product name is required.'); return; }
    if (!Number.isFinite(priceNum) || priceNum < 0) { setFormError('Enter a valid price (e.g. 49.99).'); return; }

    setSaving(true);
    setFormError(null);
    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price_cents: priceNum,
      inventory: form.inventory.trim() === '' ? null : Math.max(0, Math.round(Number(form.inventory))),
      images: form.images,
      active: form.active
    };
    try {
      const res = await fetch('/api/store/products', {
        method: editingId ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingId
          ? { tenantId, id: editingId, updates: payload }
          : { tenantId, product: payload })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Save failed.');
      setProducts(prev => {
        const list = prev || [];
        return editingId
          ? list.map(p => (p.id === editingId ? json.product : p))
          : [json.product, ...list];
      });
      setShowForm(false);
    } catch (err: any) {
      setFormError(err?.message || 'Save failed.');
    } finally {
      setSaving(false);
    }
  };

  const deleteProduct = async (p: Product) => {
    if (!confirm(`Delete "${p.name}"? This cannot be undone.`)) return;
    setProducts(prev => (prev || []).filter(x => x.id !== p.id));
    await fetch(`/api/store/products?tenantId=${tenantId}&id=${p.id}`, { method: 'DELETE' }).catch(() => {});
  };

  const toggleActive = async (p: Product) => {
    setProducts(prev => (prev || []).map(x => (x.id === p.id ? { ...x, active: !p.active } : x)));
    await fetch('/api/store/products', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tenantId, id: p.id, updates: { active: !p.active } })
    }).catch(() => {});
  };

  const setOrderStatus = async (order: Order, status: string) => {
    setOrders(prev => (prev || []).map(o => (o.id === order.id ? { ...o, status } : o)));
    await fetch('/api/store/orders', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tenantId, id: order.id, status })
    }).catch(() => {});
  };

  const paidOrders = (orders || []).filter(o => o.status !== 'pending' && o.status !== 'canceled');
  const revenueCents = paidOrders.reduce((acc, o) => acc + (o.amount_total_cents || 0), 0);

  return (
    <div className="space-y-6">
      {/* Header + revenue strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-600" /> Store{tenantName ? ` — ${tenantName}` : ''}
          </h2>
          <p className="text-sm text-slate-500 mt-1">Sell products directly on your website with Stripe checkout.</p>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm">
            <span className="text-slate-400 text-xs font-semibold block">Orders</span>
            <span className="font-extrabold text-slate-900">{paidOrders.length}</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm">
            <span className="text-slate-400 text-xs font-semibold block">Revenue</span>
            <span className="font-extrabold text-emerald-600">{money(revenueCents)}</span>
          </div>
        </div>
      </div>

      {/* Stripe Connect card */}
      <div className={`rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
        connect?.chargesEnabled ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'
      }`}>
        <div className="flex items-start gap-3">
          {connect?.chargesEnabled
            ? <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
            : <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />}
          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              {connect === null ? 'Checking payment setup…'
                : connect.chargesEnabled ? 'Payments active — you can accept orders'
                : connect.connected ? 'Almost there — finish your Stripe setup'
                : 'Connect Stripe to start selling'}
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-md">
              {connect?.chargesEnabled
                ? 'Payouts go straight to your bank account via Stripe.'
                : 'Stripe handles cards, payouts, and receipts. Setup takes about 5 minutes and requires your business + bank details.'}
            </p>
          </div>
        </div>
        {!connect?.chargesEnabled && (
          <button
            onClick={startStripeOnboarding}
            disabled={connectLoading || connect === null}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
          >
            {connectLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
            {connect?.connected ? 'Finish Setup' : 'Connect Stripe'}
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </button>
        )}
      </div>

      {/* Shipping */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-4">
        <h3 className="font-bold text-slate-900 text-sm">Shipping</h3>
        <label className="flex items-center gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox" checked={shipCollect}
            onChange={(e) => setShipCollect(e.target.checked)}
            className="w-4 h-4 accent-indigo-600"
          />
          <span className="text-sm font-semibold text-slate-700">Collect a shipping address at checkout</span>
        </label>
        {shipCollect && (
          <div className="grid grid-cols-2 gap-3 pl-6">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Flat Rate ($)</label>
              <input
                type="text" inputMode="decimal" value={shipFlat}
                onChange={(e) => setShipFlat(e.target.value)}
                placeholder="0.00 (free)"
                className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Free Shipping Over ($)</label>
              <input
                type="text" inputMode="decimal" value={shipFreeThreshold}
                onChange={(e) => setShipFreeThreshold(e.target.value)}
                placeholder="No minimum"
                className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        )}
        <div className="flex items-center gap-3">
          <button
            onClick={saveShippingSettings}
            disabled={shipSaving}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center gap-2"
          >
            {shipSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            Save Shipping
          </button>
          {shipSaved && <span className="text-emerald-600 text-xs font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Saved</span>}
        </div>
      </div>

      {/* Products */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Package className="w-4 h-4 text-slate-400" /> Products
            <span className="bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 rounded-full">{products?.length ?? '…'}</span>
          </h3>
          <button
            onClick={openCreate}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Product
          </button>
        </div>

        {products === null ? (
          <div className="py-12 flex justify-center"><Loader2 className="w-5 h-5 text-slate-300 animate-spin" /></div>
        ) : products.length === 0 ? (
          <div className="py-12 text-center px-6">
            <ShoppingBag className="w-8 h-8 text-slate-200 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-700">No products yet</p>
            <p className="text-xs text-slate-400 mt-1">Add your first product — it appears instantly in your site's Shop section.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {products.map(p => (
              <div key={p.id} className="px-5 py-3.5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden shrink-0">
                  {p.images?.[0]
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={p.images[0]} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    : <div className="w-full h-full flex items-center justify-center text-slate-300"><Package className="w-5 h-5" /></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-slate-900 truncate">{p.name}</p>
                  <p className="text-xs text-slate-400">
                    {money(p.price_cents, p.currency)}
                    {p.inventory !== null && <> · {p.inventory} in stock</>}
                  </p>
                </div>
                <button
                  onClick={() => toggleActive(p)}
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                    p.active ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {p.active ? 'Live' : 'Hidden'}
                </button>
                <button onClick={() => openEdit(p)} className="p-2 text-slate-400 hover:text-indigo-600 rounded-lg transition-colors" title="Edit">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => deleteProduct(p)} className="p-2 text-slate-400 hover:text-red-500 rounded-lg transition-colors" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Orders */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Receipt className="w-4 h-4 text-slate-400" /> Recent Orders
          </h3>
        </div>
        {orders === null ? (
          <div className="py-12 flex justify-center"><Loader2 className="w-5 h-5 text-slate-300 animate-spin" /></div>
        ) : orders.filter(o => o.status !== 'pending').length === 0 ? (
          <div className="py-10 text-center text-xs text-slate-400">No orders yet — they'll appear here as soon as a customer checks out.</div>
        ) : (
          <div className="divide-y divide-slate-100">
            {orders.filter(o => o.status !== 'pending').map(o => (
              <div key={o.id} className="px-5 py-3.5 flex items-center gap-4 text-sm">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 truncate">{o.customer_name || o.customer_email || 'Customer'}</p>
                  <p className="text-xs text-slate-400">
                    {new Date(o.created_at).toLocaleDateString()} · {(o.line_items || []).map((i: any) => `${i.qty}× ${i.name}`).join(', ')}
                  </p>
                </div>
                <span className="font-bold text-slate-900">{money(o.amount_total_cents, o.currency)}</span>
                <select
                  value={o.status}
                  onChange={(e) => setOrderStatus(o, e.target.value)}
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1.5 rounded-lg border focus:outline-none ${
                    o.status === 'paid' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                    o.status === 'fulfilled' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
                    'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <option value="paid">Paid</option>
                  <option value="fulfilled">Fulfilled</option>
                  <option value="refunded">Refunded</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product form modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] flex items-center justify-center p-4"
            onClick={() => !saving && setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 16, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 16, opacity: 0 }}
              transition={{ type: 'spring', damping: 24, stiffness: 240 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white">
                <h3 className="text-lg font-extrabold text-slate-900">{editingId ? 'Edit Product' : 'Add Product'}</h3>
                <button onClick={() => !saving && setShowForm(false)} className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Photos</label>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {form.images.map((url) => (
                      <div key={url} className="relative w-20 h-20 rounded-xl overflow-hidden group shrink-0 border border-slate-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={url} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <button
                          onClick={() => removeImage(url)}
                          className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={uploadImage}
                      disabled={uploading}
                      className="w-20 h-20 rounded-xl border-2 border-dashed border-slate-300 hover:border-indigo-400 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 transition-colors"
                      title="Upload product photos"
                    >
                      {uploading ? <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" /> : <Upload className="w-5 h-5 text-slate-400" />}
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 space-y-3">
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Product Name</label>
                      <input
                        type="text" value={form.name}
                        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Handmade Candle"
                        className="w-full mt-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Price ($)</label>
                        <input
                          type="text" inputMode="decimal" value={form.price}
                          onChange={(e) => setForm(f => ({ ...f, price: e.target.value }))}
                          placeholder="49.99"
                          className="w-full mt-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stock</label>
                        <input
                          type="text" inputMode="numeric" value={form.inventory}
                          onChange={(e) => setForm(f => ({ ...f, inventory: e.target.value }))}
                          placeholder="Unlimited"
                          className="w-full mt-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))}
                    rows={3}
                    placeholder="Short description shown on the product card and at checkout."
                    className="w-full mt-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm resize-y focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox" checked={form.active}
                    onChange={(e) => setForm(f => ({ ...f, active: e.target.checked }))}
                    className="w-4 h-4 accent-indigo-600"
                  />
                  <span className="text-sm font-semibold text-slate-700">Visible in store</span>
                </label>

                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{formError}</div>
                )}
              </div>

              <div className="px-6 py-4 border-t border-slate-200 flex justify-end gap-3 bg-slate-50">
                <button onClick={() => setShowForm(false)} disabled={saving} className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-xl">
                  Cancel
                </button>
                <button
                  onClick={saveProduct}
                  disabled={saving}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl flex items-center gap-2 shadow-sm"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingId ? 'Save Changes' : 'Add Product'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
