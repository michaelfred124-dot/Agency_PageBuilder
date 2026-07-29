"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Plus } from 'lucide-react';
import Link from 'next/link';

const PRICING_PLANS = [
  {
    name: "3-Page Website",
    price: "$30",
    pagesCount: 3,
    description: "Essential website for local service businesses.",
    features: [
      "3 Complete Full-Width Pages",
      "Home, Services & Contact",
      "1-Click Custom Domain & SSL",
      "Sub-100ms Next.js Speed",
      "Standard Email Support"
    ],
    popular: false
  },
  {
    name: "5-Page Website",
    price: "$50",
    pagesCount: 5,
    description: "Complete showcase for growing companies.",
    features: [
      "5 Complete Full-Width Pages",
      "Home, Services, About, Reviews, Contact",
      "Google Maps & Calendly Widgets",
      "Automated SEO & Schema Authority",
      "Priority 48h Design Edits"
    ],
    popular: true
  },
  {
    name: "10-Page Website",
    price: "$75",
    pagesCount: 10,
    description: "Maximum authority & dedicated page depth.",
    features: [
      "10 Complete Full-Width Pages",
      "Dedicated Individual Service Pages",
      "Custom Lead & Estimate Builders",
      "Advanced Local SEO & Schema.org",
      "Shopify & Mailchimp Integrations",
      "Priority 24h Edits + Dedicated Team"
    ],
    popular: false
  }
];

const ADDONS = [
  { name: "Extra Page Add-on", price: "+$10/mo", description: "Add individual custom layout pages to any plan. Auto-shifts to 5-page or 10-page tier when thresholds are reached!" },
  { name: "Blog Engine Setup", price: "Counts as 1 Page", description: "Adds a dynamic Blog Hub (/blog) & Article Layout. Individual blog posts do NOT consume page quota!" },
  { name: "Managed Blog Article Writing", price: "+$30/mo", description: "2 SEO-optimized local service blog articles written & published for you each month." },
  { name: "Local SEO & Schema Booster", price: "+$25/mo", description: "Schema.org local business markup & monthly search ranking sync." },
  { name: "Priority 24h Rapid Turnaround", price: "+$15/mo", description: "Same-day priority queue for design requests and revisions." }
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-32 bg-[#080B12] text-white px-4 lg:px-6 relative overflow-hidden z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-sky-500/20 via-teal-400/20 to-emerald-500/20 blur-[170px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/25 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-4">
            Simple Page-Based <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="max-w-2xl text-slate-200 text-base md:text-lg font-normal mt-4">
            Flat monthly rates based on page count. Upgrade or add extra pages anytime with automatic tier savings!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 lg:p-10 border border-white/25 rounded-3xl bg-white/10 backdrop-blur-2xl relative flex flex-col justify-between hover:bg-white/15 hover:border-white/40 shadow-2xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 border border-white/40 rounded-full font-extrabold uppercase tracking-widest text-xs text-slate-950 bg-white shadow-md">
                  Most Popular
                </div>
              )}

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-extrabold text-white">
                    {plan.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-teal-300 border border-white/25 text-[10px] font-bold uppercase">
                    {plan.pagesCount} Pages
                  </span>
                </div>
                <p className="text-slate-300 font-medium text-xs mb-6">{plan.description}</p>
                
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  <span className="text-slate-400 font-bold text-xs">/month</span>
                </div>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-teal-300" strokeWidth={3} />
                      </div>
                      <span className="font-semibold text-xs text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={`/pricing`}>
                <button className="w-full py-3.5 border border-white/25 rounded-full font-bold uppercase tracking-wider text-xs transition-all text-slate-950 bg-white hover:bg-slate-100 shadow-md cursor-pointer">
                  Get Started
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Automatic Tier Upgrade Rule Callout */}
        <div className="max-w-4xl mx-auto mt-14 p-6 lg:p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/25 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-teal-300 shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-extrabold text-white flex items-center gap-2">
              Automatic Tier Upgrade Rule (Best Price Guarantee)
            </h4>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-1 font-medium">
              Add extra pages anytime for <strong className="text-teal-300">+$10/mo per page</strong>. Whenever your total page count reaches <strong>5 pages</strong> ($50/mo) or <strong>10 pages</strong> ($75/mo), your subscription automatically shifts to that tier so you always get the lowest rate per page!
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-sky-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/25 mb-3">
              <Plus className="w-3.5 h-3.5 text-teal-400" /> Add-On Services
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Optional Package <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Add-Ons</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ADDONS.map((addon) => (
              <div
                key={addon.name}
                className="p-6 border border-white/25 rounded-2xl bg-white/10 backdrop-blur-2xl hover:bg-white/15 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-extrabold text-white">{addon.name}</h4>
                  <span className="font-extrabold text-slate-950 bg-white border border-white/25 rounded-full px-3 py-0.5 text-xs shadow-sm">
                    {addon.price}
                  </span>
                </div>
                <p className="text-slate-300 font-medium text-xs leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
