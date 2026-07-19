"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Loader2, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Native Store blocks (Stripe Connect).
 *
 * StoreProducts renders the tenant's LIVE product catalog from
 * /api/store/products/public and checks out through /api/store/checkout,
 * which creates a Stripe Checkout Session on the tenant's connected account.
 *
 * In the editor (no tenant / empty catalog) it shows demo products so the
 * designer can style the section before the client adds real inventory.
 */

interface StoreProduct {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  currency: string;
  images: string[];
  inventory: number | null;
}

const DEMO_PRODUCTS: StoreProduct[] = [
  { id: 'demo-1', name: 'Signature Product', description: 'Your first product will appear here once added in the dashboard.', price_cents: 4900, currency: 'usd', images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop'], inventory: null },
  { id: 'demo-2', name: 'Premium Bundle', description: 'Products are managed from the Store tab of the client dashboard.', price_cents: 8900, currency: 'usd', images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'], inventory: null },
  { id: 'demo-3', name: 'Essential Kit', description: 'Checkout is powered by Stripe on your own domain.', price_cents: 2900, currency: 'usd', images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop'], inventory: null }
];

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: (currency || 'usd').toUpperCase() }).format(cents / 100);
}

export interface StoreProductsProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  accentColor?: string;
  backgroundColor?: string;
  textColor?: string;
  tenantId?: string;
  isEditable?: boolean;
  onPropChange?: (path: string, value: any) => void;
}

export const StoreProducts: React.FC<StoreProductsProps> = ({
  title = 'Shop Our Products',
  subtitle = 'Secure checkout powered by Stripe',
  buttonText = 'Buy Now',
  accentColor = '#111111',
  backgroundColor = '#ffffff',
  textColor = '#111111',
  tenantId,
  isEditable = false
}) => {
  const [products, setProducts] = useState<StoreProduct[] | null>(null);
  const [qty, setQty] = useState<Record<string, number>>({});
  const [buyingId, setBuyingId] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!tenantId) { setProducts(null); return; }
    (async () => {
      try {
        const res = await fetch(`/api/store/products/public?tenantId=${tenantId}`);
        const json = await res.json();
        if (!cancelled) setProducts(Array.isArray(json.products) ? json.products : []);
      } catch {
        if (!cancelled) setProducts([]);
      }
    })();
    return () => { cancelled = true; };
  }, [tenantId]);

  const isDemo = !tenantId || (products !== null && products.length === 0);
  const list = isDemo ? DEMO_PRODUCTS : (products || []);
  const loading = !!tenantId && products === null;

  const setQuantity = (id: string, next: number) => {
    setQty(prev => ({ ...prev, [id]: Math.min(Math.max(next, 1), 99) }));
  };

  const handleBuy = async (product: StoreProduct) => {
    if (isEditable) return; // never start checkout from inside an editor
    if (isDemo || !tenantId) return;
    setBuyingId(product.id);
    setCheckoutError(null);
    try {
      const res = await fetch('/api/store/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId, items: [{ id: product.id, qty: qty[product.id] || 1 }] })
      });
      const json = await res.json();
      if (!res.ok || !json.url) throw new Error(json.error || 'Checkout failed.');
      window.location.href = json.url;
    } catch (err: any) {
      setCheckoutError(err?.message || 'Checkout failed. Please try again.');
      setBuyingId(null);
    }
  };

  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor, color: textColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-base opacity-70">{subtitle}</p>}
          {isDemo && isEditable && (
            <p className="mt-3 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
              Demo products — real inventory appears once added in the dashboard Store tab
            </p>
          )}
        </div>

        {checkoutError && (
          <div className="max-w-md mx-auto mb-8 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 text-center">
            {checkoutError}
          </div>
        )}

        {loading ? (
          <div className="py-16 flex justify-center">
            <Loader2 className="w-6 h-6 animate-spin opacity-40" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                qty={qty[product.id] || 1}
                accentColor={accentColor}
                buttonText={buttonText}
                buying={buyingId === product.id}
                onQtyChange={(next) => setQuantity(product.id, next)}
                onBuy={() => handleBuy(product)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: StoreProduct;
  qty: number;
  accentColor: string;
  buttonText: string;
  buying: boolean;
  onQtyChange: (next: number) => void;
  onBuy: () => void;
}

/** Product image gallery + buy controls, split out so gallery index state is scoped per product. */
const ProductCard: React.FC<ProductCardProps> = ({ product, qty, accentColor, buttonText, buying, onQtyChange, onBuy }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = product.images || [];
  const soldOut = product.inventory !== null && product.inventory <= 0;

  const goTo = (i: number) => setImgIndex((i + images.length) % images.length);

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-xl transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        {images[imgIndex] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[imgIndex]}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <ShoppingBag className="w-10 h-10" />
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => goTo(imgIndex - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => goTo(imgIndex + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`View image ${i + 1}`}
                  onClick={() => setImgIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-white w-3' : 'bg-white/60'}`}
                />
              ))}
            </div>
          </>
        )}

        {soldOut && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-gray-700 bg-white px-3 py-1.5 rounded-full shadow">Sold Out</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1 text-gray-900">
        <h3 className="font-bold text-lg leading-snug">{product.name}</h3>
        {product.description && (
          <p className="mt-1.5 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        )}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xl font-extrabold" style={{ color: accentColor }}>
            {formatPrice(product.price_cents, product.currency)}
          </span>
          <div className="flex items-center border border-gray-200 rounded-lg">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => onQtyChange(qty - 1)}
              className="px-2 py-1.5 text-gray-500 hover:text-gray-900"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-7 text-center text-sm font-bold">{qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => onQtyChange(qty + 1)}
              className="px-2 py-1.5 text-gray-500 hover:text-gray-900"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={onBuy}
          disabled={soldOut || buying}
          className="mt-4 w-full py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-40"
          style={{ backgroundColor: accentColor }}
        >
          {buying ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingBag className="w-4 h-4" />}
          {soldOut ? 'Sold Out' : buttonText}
        </button>
      </div>
    </div>
  );
};

export const ST_SCHEMAS = {
  StoreProducts: {
    description: 'Live product grid from the site\'s native store — real inventory, Stripe checkout.',
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { name: 'buttonText', label: 'Buy Button Text', type: 'text' },
      { name: 'accentColor', label: 'Accent Color (hex)', type: 'text' },
      { name: 'backgroundColor', label: 'Background Color (hex)', type: 'text' },
      { name: 'textColor', label: 'Text Color (hex)', type: 'text' }
    ],
    defaultProps: {
      title: 'Shop Our Products',
      subtitle: 'Secure checkout powered by Stripe',
      buttonText: 'Buy Now',
      accentColor: '#111111',
      backgroundColor: '#ffffff',
      textColor: '#111111'
    }
  }
};

export const ST_RENDERERS = {
  StoreProducts: (props: any) => <StoreProducts {...props} />
};
