"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ShieldCheck, Zap, Layers, Plus, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';
import { PLANS, ADDONS, formatCents } from '@/lib/plans';

// Presentation only — pricing itself lives in src/lib/plans.ts so the page and
// the checkout API can never disagree about what a plan costs.
const CARD_STYLES: Record<string, string> = {
  '3-page': 'from-white via-slate-50 to-white border-slate-200',
  '5-page': 'from-sky-50 via-teal-50/30 to-white border-teal-300 shadow-[0_20px_50px_rgba(45,212,191,0.15)]',
  '10-page': 'from-white via-slate-50 to-white border-slate-200',
};


export default function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState('');

  // Send only the plan id — the server prices it from src/lib/plans.ts so a
  // tampered request can't buy a 10-page site for a dollar.
  const handleGetStarted = async (planId: string) => {
    setError('');
    setLoadingPlan(planId);
    try {
      const res = await fetch('/api/checkout/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || 'Could not start checkout.');
      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || 'Could not start checkout.');
      setLoadingPlan(null);
    }
  };

  return (
    <div className="pt-28 lg:pt-36 bg-[#FAF9FF] text-slate-900 min-h-screen relative overflow-hidden font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-Left Deep Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[520px] h-[520px] text-[#6528D9] opacity-85 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>

        {/* Top-Right Vibrant Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-20 w-[480px] h-[480px] text-[#FF7700] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <div className="absolute top-[28%] left-[7%] w-14 h-14 border-4 border-[#FFB703] rounded-full opacity-75 animate-float-slow hidden md:block" />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <svg className="absolute top-[18%] right-[12%] w-10 h-10 text-[#FF7700] opacity-75 animate-float-reverse hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <polygon points="50,10 90,85 10,85" />
        </svg>

        {/* Bottom Dot Matrix Grid */}
        <div className="absolute bottom-[8%] right-[4%] w-44 h-36 dot-grid-purple opacity-60 hidden md:block" />
        <div className="absolute bottom-[12%] left-[4%] w-36 h-36 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <section className="py-16 px-4 lg:px-6 relative z-10">
        <div className="max-w-[1340px] mx-auto">

          {/* Header (Reference Style) */}
          <div className="flex flex-col space-y-3 mb-14 lg:mb-16 text-center items-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm">
              PRICING <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight max-w-3xl">
              We Have Several Tariffs for Our Clients
            </h1>

            <p className="max-w-xl text-slate-600 text-sm md:text-base font-medium mt-2 leading-relaxed">
              Choose the perfect page count for your business. Includes continuous maintenance, updates, and zero lock-in.
            </p>
          </div>

          {/* Pricing Grid (Reference Card Style) */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {PLANS.map((plan, i) => {
              const isFeatured = plan.popular;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className={`p-8 lg:p-10 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between group ${
                    isFeatured 
                      ? 'bg-purple-vibrant text-white border-[#7C3AED] shadow-2xl scale-105 z-20' 
                      : 'bg-white text-slate-900 border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 z-10'
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-[#FF7700] text-white shadow-lg">
                      MOST POPULAR TIER
                    </div>
                  )}

                  <div>
                    <div className="text-center mb-6">
                      <h3 className={`text-xl font-black uppercase tracking-wider ${isFeatured ? 'text-white' : 'text-[#FF5500]'}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-xs mt-1 font-medium ${isFeatured ? 'text-purple-200' : 'text-slate-500'}`}>
                        For growing local businesses ({plan.pagesCount} Pages)
                      </p>
                    </div>

                    <div className="flex items-baseline justify-center gap-1 my-6 pb-6 border-b border-slate-200/20">
                      <span className={`text-5xl font-black tracking-tight ${isFeatured ? 'text-[#FFB703]' : 'text-[#FF5500]'}`}>
                        {formatCents(plan.monthlyCents)}
                      </span>
                      <span className={`text-xs font-bold ${isFeatured ? 'text-purple-200' : 'text-slate-500'}`}>
                        / Per Month
                      </span>
                    </div>

                    <ul className="space-y-3.5 mb-8 text-xs font-semibold">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 ${isFeatured ? 'text-[#FFB703]' : 'text-emerald-500'}`} strokeWidth={3} />
                          <span className={isFeatured ? 'text-purple-100' : 'text-slate-700'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleGetStarted(plan.id)}
                    disabled={loadingPlan !== null}
                    className="w-full btn-orange-pill py-4 text-xs font-black uppercase tracking-widest rounded-full cursor-pointer shadow-md disabled:opacity-60"
                  >
                    {loadingPlan === plan.id ? 'Redirecting…' : 'Try 1 week for free'}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {error && (
            <p className="max-w-md mx-auto mt-8 text-sm text-center text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          {/* Automatic Tier Upgrade Rule Callout */}
          <div className="max-w-4xl mx-auto mt-14 p-6 lg:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                Automatic Tier Upgrade Rule (Best Price Guarantee)
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-1 font-medium">
                Add extra pages anytime for <strong className="text-teal-600">+$10/mo per page</strong>. Whenever your total page count reaches <strong>5 pages</strong> ($50/mo) or <strong>10 pages</strong> ($100/mo), your subscription automatically shifts to that tier so you always get the lowest rate per page without overpaying!
              </p>
            </div>
          </div>

          {/* Add-On Services Section */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200 mb-3 shadow-sm">
                <Plus className="w-3.5 h-3.5 text-teal-600" /> Optional Add-Ons
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                Customize Your <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Website Package</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ADDONS.map((addon, i) => (
                <div
                  key={addon.name}
                  className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-sky-200 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-extrabold text-slate-900">{addon.name}</h4>
                      <span className="font-extrabold text-white bg-slate-900 px-3 py-1 rounded-full text-xs shadow-sm">
                        {addon.price}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {addon.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Own Your Site Callout */}
          <div className="max-w-4xl mx-auto mt-16 p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <h4 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4">
              Own Your Site
            </h4>
            <p className="text-slate-600 font-normal text-base leading-relaxed">
              We don't hold your website hostage. Your site is built on WordPress, the platform that
              powers over 40% of the web, so it's yours to take. After 1 year of continuous payments,
              stay with our managed hosting and support, or export the whole site and move it to any
              WordPress host you like. No proprietary lock-in, ever.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
