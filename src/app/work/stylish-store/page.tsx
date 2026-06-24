"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Heart, Star } from 'lucide-react';

const BASE = '/work/stylish-store';

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Air Dunk Retro Blue',
    price: 99,
    img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Air Dunk Pastel Pink',
    price: 119,
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Flyknit Red Racer',
    price: 129,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop',
    tag: 'Trending'
  },
  {
    id: 4,
    name: 'Air Force Classic White',
    price: 89,
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop',
    tag: ''
  },
  {
    id: 5,
    name: 'Gel-Lyte Modern Trainer',
    price: 139,
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop',
    tag: 'Exclusive'
  }
];

const LATEST_PRODUCTS = [
  {
    id: 6,
    name: 'Cortez Classic Blue',
    price: 80,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Pegasus Trail Zoom',
    price: 130,
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Metcon Training Pro',
    price: 140,
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Court Vision Low',
    price: 75,
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Zoom Fly Vaporfly',
    price: 250,
    img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop',
  }
];

export default function StylishStoreHome() {
  const [activeDot, setActiveDot] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Grid Hero Section */}
      <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Hero Left Card: Women Shoes */}
          <div className="lg:col-span-7 bg-[#F3F7FA] rounded-[32px] overflow-hidden p-8 sm:p-12 relative flex flex-col justify-between min-h-[480px] sm:min-h-[580px] group border border-slate-100 shadow-sm">
            <div className="relative z-10 max-w-sm space-y-4 text-left">
              <h2 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-slate-900 leading-none">
                Stylish shoes for Women
              </h2>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                Spring & Summer Collection
              </p>
              <div>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            
            {/* Absolute background shoe */}
            <div className="absolute right-0 bottom-0 w-[80%] h-[80%] sm:w-[65%] sm:h-[65%] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none">
              <Image 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=700&auto=format&fit=crop"
                alt="Women Dunk Sneakers"
                fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Hero Right Column Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Right Card Top: Sports Wear */}
            <div className="bg-slate-950 rounded-[32px] overflow-hidden p-8 sm:p-10 relative flex flex-col justify-between h-[230px] sm:h-[278px] group text-white border border-slate-900 shadow-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#1e293b_0%,transparent_60%)] opacity-40 pointer-events-none" />
              <div className="relative z-10 space-y-3 text-left">
                <h3 className="text-3xl font-sans font-black tracking-tight text-white leading-none">
                  Sports Wear
                </h3>
                <div>
                  <Link
                    href={`${BASE}/services`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white pb-1 border-b-2 border-white hover:text-sky-400 hover:border-sky-400 transition-colors"
                  >
                    Shop Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Absolute background sports shoe */}
              <div className="absolute right-0 bottom-0 w-[55%] h-[90%] transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-105 pointer-events-none">
                <Image 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop"
                  alt="Red Flyknit Runner"
                  fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right Card Bottom: Fashion Shoes */}
            <div className="bg-[#FAF9F5] rounded-[32px] overflow-hidden p-8 sm:p-10 relative flex flex-col justify-between h-[230px] sm:h-[278px] group border border-slate-100 shadow-sm">
              <div className="relative z-10 space-y-3 text-left">
                <h3 className="text-3xl font-sans font-black tracking-tight text-slate-900 leading-none">
                  Fashion Shoes
                </h3>
                <div>
                  <Link
                    href={`${BASE}/services`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
                  >
                    Shop Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Absolute background lifestyle trainer */}
              <div className="absolute right-0 bottom-0 w-[60%] h-[90%] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none">
                <Image 
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop"
                  alt="Lifestyle Blue Dunk Sneaker"
                  fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveDot(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeDot === idx ? 'w-8 bg-slate-900' : 'w-2.5 bg-slate-200 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. Newsletter Discount Promo Banner */}
      <section className="py-6 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-[0.03] select-none pointer-events-none font-sans font-black text-[120px] uppercase leading-none tracking-wider text-right flex items-center justify-end pr-10">
            10%
          </div>

          <div className="space-y-2 text-center md:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight text-slate-900">
              10% OFF Discount Coupons
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">
              Subscribe to get 10% OFF on all your purchases.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto max-w-md">
            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl shadow-sm text-center">
                Check your inbox! 10% Coupon code is sent.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 text-xs font-medium bg-white shrink w-full md:w-[220px]"
                  required
                />
                <button 
                  type="submit"
                  className="bg-slate-950 text-white hover:bg-slate-800 font-sans font-black uppercase text-[10px] tracking-widest px-6 py-3.5 rounded-xl shadow transition-all duration-300 shrink-0"
                >
                  EMAIL ME
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Featured Products Slider/Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full text-left">
        <div className="flex justify-between items-end mb-10 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Handpicked Items
            </h3>
            <h2 className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-slate-900 uppercase">
              Featured Products
            </h2>
          </div>
          <Link
            href={`${BASE}/services`}
            className="text-[10px] font-black uppercase tracking-widest text-slate-900 pb-0.5 border-b border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Horizontal scroll grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {FEATURED_PRODUCTS.map((prod) => (
            <div key={prod.id} className="group relative flex flex-col text-left">
              {/* Image box */}
              <div className="aspect-[4/5] bg-[#F9FAFB] rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative mb-4">
                {prod.tag && (
                  <span className="absolute top-3 left-3 bg-slate-950 text-white text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full z-10">
                    {prod.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Heart className="w-4 h-4" />
                </button>
                <Image 
                  src={prod.img}
                  alt={prod.name}
                  fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 20vw" referrerPolicy="no-referrer"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                  <button className="bg-white hover:bg-slate-50 text-slate-900 text-[9px] font-black uppercase tracking-widest py-2 px-4 rounded-xl shadow-md flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <h4 className="font-sans font-black text-sm text-slate-900 leading-tight truncate group-hover:text-blue-600 transition-colors">
                {prod.name}
              </h4>
              <p className="text-slate-400 text-xs mt-1 font-bold">
                Running shoes for men
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-sans font-black text-slate-950 text-sm">
                  ${prod.price}
                </span>
                <div className="flex items-center gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-[10px] text-slate-500 font-black">4.9</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dual Collection Banners */}
      <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Dual Card: Minimal Collection */}
          <div className="bg-[#EBF1FA] rounded-[32px] aspect-[16/10] overflow-hidden p-8 sm:p-12 relative flex flex-col justify-between group border border-slate-100 shadow-sm">
            <div className="relative z-10 max-w-xs space-y-3 text-left">
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-tight">
                Minimal Collection
              </h3>
              <div>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Absolute background white shoe */}
            <div className="absolute right-0 bottom-0 w-[55%] h-[90%] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none">
              <Image 
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop"
                alt="Minimal White Shoes Collection"
                fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Dual Card: Sneakers */}
          <div className="bg-[#FAF4EE] rounded-[32px] aspect-[16/10] overflow-hidden p-8 sm:p-12 relative flex flex-col justify-between group border border-slate-100 shadow-sm">
            <div className="relative z-10 max-w-xs space-y-3 text-left">
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-tight">
                Sneakers
              </h3>
              <div>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-900 pb-1 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Absolute background white running shoe */}
            <div className="absolute right-0 bottom-0 w-[55%] h-[90%] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none">
              <Image 
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop"
                alt="Sneakers Sports Collection"
                fill className="object-contain object-bottom-right" referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Latest Products Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full text-left">
        <div className="flex justify-between items-end mb-10 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Fresh Arrivals
            </h3>
            <h2 className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-slate-900 uppercase">
              Latest Products
            </h2>
          </div>
          <Link
            href={`${BASE}/services`}
            className="text-[10px] font-black uppercase tracking-widest text-slate-900 pb-0.5 border-b border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            View all
          </Link>
        </div>

        {/* 5 column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {LATEST_PRODUCTS.map((prod) => (
            <div key={prod.id} className="group relative flex flex-col text-left">
              {/* Image box */}
              <div className="aspect-[4/5] bg-[#F9FAFB] rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative mb-4">
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Heart className="w-4 h-4" />
                </button>
                <Image 
                  src={prod.img}
                  alt={prod.name}
                  fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 20vw" referrerPolicy="no-referrer"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                  <button className="bg-white hover:bg-slate-50 text-slate-900 text-[9px] font-black uppercase tracking-widest py-2 px-4 rounded-xl shadow-md flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <h4 className="font-sans font-black text-sm text-slate-900 leading-tight truncate group-hover:text-blue-600 transition-colors">
                {prod.name}
              </h4>
              <p className="text-slate-400 text-xs mt-1 font-bold">
                Running shoes for men
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-sans font-black text-slate-950 text-sm">
                  ${prod.price}
                </span>
                <div className="flex items-center gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-[10px] text-slate-500 font-black">4.8</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
