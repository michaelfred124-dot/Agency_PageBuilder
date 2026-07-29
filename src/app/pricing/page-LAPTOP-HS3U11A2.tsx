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
    <div className="pt-24 lg:pt-32 bg-[#F8FAFC] text-slate-900 min-h-screen relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-sky-200/40 via-teal-200/40 to-emerald-200/40 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      <section className="py-20 px-4 lg:px-6 relative z-10">
        <div className="max-w-[1340px] mx-auto">
          
          {/* Header */}
          <div className="flex flex-col space-y-4 mb-16 lg:mb-20 text-center items-center">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-700 bg-sky-50 px-4 py-2 rounded-full border border-sky-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
              Transparent Page Pricing
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-none max-w-3xl">
              Simple Page-Based <br />
              <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Subscription Plans</span>
            </h1>

            <p className="max-w-2xl text-slate-600 text-base md:text-lg font-normal mt-4 leading-relaxed">
              Transparent monthly rates based on page count. Add extra pages or add-on services anytime with automatic tier savings!
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`p-8 lg:p-10 rounded-3xl border bg-white ${CARD_STYLES[plan.id] || ''} shadow-sm relative flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest rounded-full bg-slate-900 text-white shadow-md border border-slate-800">
                    Most Popular
                  </div>
                )}

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {plan.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-[10px] font-bold uppercase">
                      {plan.pagesCount} Pages
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{formatCents(plan.monthlyCents)}</span>
                    <span className="text-sm font-bold text-slate-500">/mo</span>
                  </div>

                  <ul className="space-y-4 mb-8 text-slate-700 text-sm">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 font-medium">
                        <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                          <Check className="w-3.5 h-3.5 text-teal-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleGetStarted(plan.id)}
                  disabled={loadingPlan !== null}
                  className={`w-full py-4 text-xs font-extrabold uppercase tracking-widest rounded-full transition-all cursor-pointer shadow-sm hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 ${
                    plan.popular
                      ? 'bg-slate-950 text-white hover:bg-slate-800'
                      : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {loadingPlan === plan.id ? 'Redirecting…' : `Get the ${plan.pagesCount}-page site`}
                </button>
              </motion.div>
            ))}
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

          {/* Own Your Code Callout */}
          <div className="max-w-4xl mx-auto mt-16 p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            
            <h4 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4">
              Own Your Code
            </h4>
            <p className="text-slate-600 font-normal text-base leading-relaxed">
              We don't hold your website hostage. After 1 year of continuous payments, you have the option to stay with our managed services for ongoing support and hosting, or export your code entirely to host anywhere you please.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

