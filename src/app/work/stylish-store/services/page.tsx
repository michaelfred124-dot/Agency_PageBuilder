"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Heart, Star, Shield, HelpCircle, Check } from 'lucide-react';

const BASE = '/work/stylish-store';

const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Air Dunk Retro Blue',
    price: 99,
    category: 'women',
    img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop',
    tag: 'Best Seller',
    desc: 'Premium full-grain leather upper with light blue overlays and durable rubber cupsole.'
  },
  {
    id: 2,
    name: 'Air Dunk Pastel Pink',
    price: 119,
    category: 'women',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop',
    tag: 'New',
    desc: 'Soft pastel multi-tone colorway featuring premium suede overlays and padded foam collar.'
  },
  {
    id: 3,
    name: 'Flyknit Red Racer',
    price: 129,
    category: 'men',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop',
    tag: 'Trending',
    desc: 'Ultra-lightweight Flyknit breathable mesh upper with responsive zoom air cushioning.'
  },
  {
    id: 4,
    name: 'Air Force Classic White',
    price: 89,
    category: 'men',
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop',
    tag: '',
    desc: 'Classic leather sneaker in clean triple-white styling. Iconic look with comfort insert.'
  },
  {
    id: 5,
    name: 'Gel-Lyte Modern Trainer',
    price: 139,
    category: 'men',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop',
    tag: 'Exclusive',
    desc: 'Handcrafted premium athletic shoes with multi-texture paneling and dual-density foam midsoles.'
  },
  {
    id: 6,
    name: 'Cortez Classic Blue',
    price: 80,
    category: 'sale',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop',
    tag: '10% OFF',
    desc: 'Retro lifestyle running shoe with nylon mesh construction and soft blue accents.'
  },
  {
    id: 7,
    name: 'Pegasus Trail Zoom',
    price: 130,
    category: 'men',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop',
    tag: '',
    desc: 'Outdoor rugged trail-running shoes featuring water-resistant overlays and deep-lug tread.'
  },
  {
    id: 8,
    name: 'Metcon Training Pro',
    price: 140,
    category: 'trends',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop',
    tag: 'Popular',
    desc: 'Cross-training performance footwear with structured heel and grippy gum rubber sole.'
  }
];

const BUNDLES = [
  {
    name: 'Standard Care Package',
    price: '$120',
    desc: 'Includes 1 pair of Classic sneakers and an eco-friendly cedar shoe tree care kit.',
    features: [
      '1x Air Force Classic White or Air Dunk',
      '1x Premium Cedar Shoe Tree Insert',
      '1x Footwear Cleaner Brush Set',
      'Free Standard Shipping (2-3 Days)'
    ]
  },
  {
    name: 'Athletic Double Bundle',
    price: '$220',
    desc: 'Choose any two running or training sneakers and receive a custom canvas dust bag.',
    features: [
      '2x Performance Sneakers (Red Racer, Trail Zoom)',
      '2x Luxury Linen Dust Bags',
      '1x Dual Cleaner & Deodorizer Kit',
      'Free Express Shipping (Next Day)'
    ]
  }
];

export default function StylishStoreServices() {
  const [filter, setFilter] = useState('all');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleCart = (id: number) => {
    setCart(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = filter === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">
            Professional Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-none">
            Shop the Collection
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Explore our curated range of hand-finished sneakers, sport runners, and daily athletic footwear.
          </p>
        </div>
      </section>

      {/* Category Filter Controls */}
      <section className="py-12 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
          {['all', 'men', 'women', 'trends', 'sale'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border transition-all cursor-pointer ${
                filter === cat 
                  ? 'bg-slate-950 text-white border-slate-950 shadow-sm' 
                  : 'bg-white text-slate-600 border-slate-200/80 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((prod) => {
              const inWish = wishlist.includes(prod.id);
              const inCart = cart.includes(prod.id);
              return (
                <div key={prod.id} className="group relative flex flex-col text-left border border-slate-100 rounded-3xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                  {/* Image wrapper */}
                  <div className="aspect-[4/5] bg-slate-50 rounded-2xl overflow-hidden relative mb-4">
                    {prod.tag && (
                      <span className="absolute top-3 left-3 bg-slate-950 text-white text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full z-10">
                        {prod.tag}
                      </span>
                    )}
                    <button 
                      onClick={() => toggleWishlist(prod.id)}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm z-10 transition-colors ${
                        inWish ? 'text-red-500 bg-red-50 border-red-200' : 'text-slate-400 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${inWish ? 'fill-red-500' : ''}`} />
                    </button>
                    <Image 
                      src={prod.img}
                      alt={prod.name}
                      fill className="object-cover group-hover:scale-103 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw" referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-1 text-left flex-grow">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-sans font-black text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {prod.name}
                      </h4>
                      <span className="font-sans font-black text-slate-900 shrink-0">
                        ${prod.price}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      Category: {prod.category}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mt-2 font-medium">
                      {prod.desc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs text-slate-600 font-black">4.9</span>
                    </div>
                    
                    <button
                      onClick={() => toggleCart(prod.id)}
                      className={`text-[9px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-1.5 ${
                        inCart 
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                      {inCart ? 'In Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Structured Care Packages / Gift Cards */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-t border-b border-slate-100 text-left">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Complete Gift Guide
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Exclusive Value Bundles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BUNDLES.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-sans font-black text-xl text-slate-900 leading-tight">{pkg.name}</h4>
                      <p className="text-slate-500 text-xs mt-1.5 font-medium leading-relaxed">{pkg.desc}</p>
                    </div>
                    <span className="font-sans font-black text-3xl text-slate-900 shrink-0">{pkg.price}</span>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {pkg.features.map((feat, fidx) => (
                      <div key={fidx} className="flex gap-3 items-center">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="text-xs text-slate-700 font-bold uppercase tracking-wider">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button className="w-full bg-slate-900 text-white hover:bg-slate-800 font-sans font-black uppercase text-xs tracking-widest py-4 rounded-xl shadow flex items-center justify-center gap-2 group transition-all">
                    Order Package
                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Satisfaction Guarantee */}
      <section className="py-24 px-6 md:px-12 bg-white text-left">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
            <Image 
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop"
              alt="Handcrafting assembly"
              fill className="object-cover" referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-sans font-black tracking-tight text-slate-900 leading-tight">
              Our Footwear Guarantee
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              We stand behind our materials. If your sneakers suffer any stitching or sole defects within 1 year of purchase, return them to our Nashville studio and we will repair or replace them for free.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
