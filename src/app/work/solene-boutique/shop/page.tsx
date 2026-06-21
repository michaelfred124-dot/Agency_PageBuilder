'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Package, RotateCcw } from 'lucide-react';

const BASE = '/work/solene-boutique';

const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Workspace', 'Gifts'];

const products = [
  { name: 'Handthrown Ceramic Mug', maker: 'Kiln Studio', price: '$42', photo: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80', category: 'Kitchen' },
  { name: 'Linen Throw Blanket', maker: 'Thread & Loom', price: '$128', photo: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600&q=80', category: 'Living Room' },
  { name: 'Beeswax Taper Candles Set', maker: 'Pinery Co.', price: '$24', photo: 'https://images.unsplash.com/photo-1602607863001-e5da79a9e1e4?w=600&q=80', category: 'Living Room' },
  { name: 'Walnut Serving Board', maker: 'Pacific Grain', price: '$88', photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', category: 'Kitchen' },
  { name: 'Pressed Wildflower Print', maker: 'Meadow Press', price: '$65', photo: 'https://images.unsplash.com/photo-1490750967868-88df5691cc53?w=600&q=80', category: 'Living Room' },
  { name: 'Cotton Market Bag', maker: 'Coastal Fiber', price: '$38', photo: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', category: 'Gifts' },
  { name: 'Hand-poured Soy Candle', maker: 'Wick & Wax', price: '$34', photo: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80', category: 'Gifts' },
  { name: 'Rattan Bread Basket', maker: 'Woven Works', price: '$55', photo: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80', category: 'Kitchen' },
  { name: 'Organic Cotton Napkins (Set of 4)', maker: 'Simple Thread', price: '$48', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', category: 'Kitchen' },
  { name: 'Copper Measuring Spoons', maker: 'Forge Goods', price: '$32', photo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', category: 'Kitchen' },
  { name: 'Seagrass Storage Basket', maker: 'Harbor Weave', price: '$72', photo: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', category: 'Living Room' },
  { name: 'Letterpress Journal', maker: 'Press Room', price: '$28', photo: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80', category: 'Workspace' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.25em] uppercase text-[#9B9189] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            350+ Handpicked Products
          </p>
          <h1
            className="text-5xl md:text-7xl italic text-[#18181B]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Collection
          </h1>
        </div>
      </section>

      {/* Shipping banner */}
      <div className="bg-[#18181B] py-3 text-center">
        <p className="text-xs tracking-[0.15em] text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
          <span className="text-[#C9A84C]"><Package size={12} className="inline mr-1 mb-0.5" />Free shipping on all orders over $75</span>
          <span className="mx-3 text-[#9B9189]/40">·</span>
          <span><RotateCcw size={12} className="inline mr-1 mb-0.5" />Easy 30-day returns</span>
        </p>
      </div>

      {/* Filter tabs */}
      <section className="bg-[#FDFAF6] border-b border-[#9B9189]/20 sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-none px-6 py-4 text-xs tracking-[0.15em] uppercase border-b-2 transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-[#18181B] text-[#18181B] font-medium'
                    : 'border-transparent text-[#9B9189] hover:text-[#18181B]'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-[#9B9189] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            {filtered.length} products
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((product) => (
              <div key={product.name} className="group">
                <div className="aspect-square overflow-hidden bg-[#F8F4EE] relative mb-3">
                  <Image
                    src={product.photo}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="px-5 py-2 bg-[#18181B] text-[#FDFAF6] text-xs tracking-[0.1em] uppercase hover:bg-[#C9A84C] hover:text-[#18181B] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
                <p className="text-[9px] tracking-[0.15em] uppercase text-[#9B9189] mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                  {product.maker}
                </p>
                <p className="text-sm text-[#18181B] leading-snug mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  {product.name}
                </p>
                <p className="text-xs text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
