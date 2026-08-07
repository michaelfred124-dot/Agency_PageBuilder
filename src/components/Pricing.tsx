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
    <section className="py-20 lg:py-32 bg-[#FAF9FF] text-slate-900 px-4 lg:px-6 relative overflow-hidden z-10 font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-28 w-[520px] h-[520px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] -right-24 w-[480px] h-[480px] text-[#FF7700] opacity-75 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[28%] left-[7%] w-14 h-14 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <motion.svg
          animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[22%] right-[7%] w-12 h-12 text-[#FF7700] opacity-75 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        >
          <polygon points="50,10 90,85 10,85" />
        </motion.svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[18%] right-[4%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[18%] left-[4%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm">
            PRICING & PLANS →
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight mt-4">
            Simple Page-Based <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-base md:text-lg font-medium mt-4">
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
              className={`p-8 lg:p-10 rounded-3xl relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular 
                  ? 'bg-purple-vibrant border-2 border-[#7C3AED] text-white shadow-2xl scale-[1.03]' 
                  : 'bg-white border border-slate-200/80 text-slate-900 shadow-md hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-xs text-white bg-[#FF5500] shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className={`text-xl font-black mb-2 ${plan.popular ? 'text-white' : 'text-slate-950'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs font-medium mb-6 ${plan.popular ? 'text-purple-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl lg:text-5xl font-black ${plan.popular ? 'text-[#FFB703]' : 'text-slate-950'}`}>{plan.price}</span>
                  <span className={`text-xs font-bold ${plan.popular ? 'text-purple-200' : 'text-slate-500'}`}>/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs font-medium">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-white/20 text-white' : 'bg-orange-100 text-[#FF5500]'}`}>
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className={plan.popular ? 'text-purple-50' : 'text-slate-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/pricing" className="w-full">
                <button className={`w-full py-3.5 rounded-full text-xs font-black uppercase tracking-widest cursor-pointer transition-all ${
                  plan.popular 
                    ? 'btn-orange-pill shadow-xl' 
                    : 'bg-slate-950 hover:bg-slate-800 text-white shadow-md'
                }`}>
                  Get Started
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
