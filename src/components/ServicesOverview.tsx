"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import ParallaxSectionBg from '@/components/ParallaxSectionBg';
import { 
  Zap, 
  Globe, 
  ShoppingBag, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Cpu,
  BarChart3,
  Lock,
  MousePointerClick
} from 'lucide-react';

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState<'speed' | 'domain' | 'seo' | 'widgets'>('speed');

  const capabilities = [
    {
      id: 'speed',
      title: 'Headless Next.js Performance',
      badge: '99/100 Lighthouse',
      icon: Zap,
      desc: 'Sub-100ms page loads powered by serverless Next.js architecture. Zero bloat, instant mobile rendering.',
      detail: 'Our sites achieve top Core Web Vitals out of the box, outranking bloated template builders.',
      statLabel: 'Avg. Load Time',
      statVal: '72ms',
    },
    {
      id: 'domain',
      title: 'Instant Custom Domain Engine',
      badge: 'Auto SSL Security',
      icon: Globe,
      desc: 'Link your custom domain or launch on a free agency subdomain instantly with automated SSL certificates.',
      detail: 'Complete DNS automation handles domain linking, subdomains, and SSL renewal seamlessly.',
      statLabel: 'Deployment Time',
      statVal: '< 2 Mins',
    },
    {
      id: 'seo',
      title: 'Built-In Local Search Authority',
      badge: 'Google #1 Ranking',
      icon: Search,
      desc: 'Schema.org structured data, semantic HTML5 hierarchy, and instant sitemap submission built into every site.',
      detail: 'Engineered specifically for local service businesses to capture high-intent Google searches.',
      statLabel: 'SEO Score',
      statVal: '100 / 100',
    },
    {
      id: 'widgets',
      title: 'Shopify & Local Widgets',
      badge: '1-Click Integrations',
      icon: ShoppingBag,
      desc: 'Embed Shopify buy boxes, Calendly scheduling, Google Maps, and Mailchimp forms with zero code hassle.',
      detail: 'Plug directly into your existing business tools without hiring backend developers.',
      statLabel: 'Integrations',
      statVal: '25+ Pre-built',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#080B12] text-white px-4 lg:px-6 relative overflow-hidden">
      
      {/* Full-Section Real Photographic Background with Parallax */}
      <ParallaxSectionBg 
        src="/services_nature_bg.jpg" 
        alt="Starry Mountain Lake Background"
        opacity={0.80}
        overlayGradient="from-[#080B12] via-[#080B12]/65 to-[#080B12]"
      />

      {/* Smooth Dark Top Transition Overlay to merge out of Hero section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#080B12] via-[#080B12]/90 to-transparent pointer-events-none z-10" />

      {/* Centered Sapphire Blue & Cyan Ambient Glow (no edge clipping) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[600px] bg-gradient-to-r from-sky-500/20 via-blue-600/18 to-cyan-400/15 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        {/* Dynamic Non-Clunky Header */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-sky-950/80 px-4 py-2 rounded-full border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            Platform Capabilities
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none max-w-3xl">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Scale Locally</span>
          </h2>

          <p className="max-w-2xl text-slate-200 text-base md:text-lg font-normal mt-4 leading-relaxed">
            High-performance custom sites engineered for speed, conversion, and local search authority without the traditional agency hassle.
          </p>

          {/* Floating Metric Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-teal-400" /> Sub-100ms Speed
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Automated SSL Security
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 shadow-sm">
              <BarChart3 className="w-3.5 h-3.5 text-sky-400" /> #1 Local SEO Authority
            </span>
          </div>
        </div>

        {/* Interactive Capability Selector Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex bg-white/10 p-1.5 rounded-full border border-white/25 backdrop-blur-xl shadow-xl">
            {capabilities.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'bg-white text-slate-950 shadow-md scale-105' 
                      : 'text-white/70 hover:text-white hover:bg-white/15'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-white/70'}`} />
                  <span>{tab.title.split(' ')[0]} {tab.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Selected Feature Banner (Lg Col 7) */}
          <div className="lg:col-span-7 bg-white/10 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col justify-between group">
            {/* Top Accent Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            {capabilities.filter(c => c.id === activeTab).map(cap => {
              const CapIcon = cap.icon;
              return (
                <AnimatePresence mode="wait" key={cap.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-between space-y-6"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center text-white shadow-md">
                          <CapIcon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-xs font-extrabold text-white uppercase tracking-widest bg-white/15 px-3.5 py-1.5 rounded-full border border-white/30 shadow-sm">
                          {cap.badge}
                        </span>
                      </div>

                      <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-slate-200 text-base leading-relaxed mb-4">
                        {cap.desc}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-teal-400 pl-4 italic">
                        {cap.detail}
                      </p>
                    </div>

                    {/* Interactive Live Interactive Preview Box */}
                    <div className="p-5 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-between shadow-inner backdrop-blur-md">
                      <div>
                        <div className="text-xs text-white/60 font-medium">{cap.statLabel}</div>
                        <div className="text-2xl font-black text-white">{cap.statVal}</div>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-extrabold text-white bg-white/15 px-3.5 py-2 rounded-xl border border-white/25">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Active System Standard</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>

          {/* Right Bento Grid Cards (Lg Col 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Bento Card 1: 99/100 Core Web Vitals */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/25 shadow-xl hover:bg-white/15 hover:border-white/40 transition-all group cursor-pointer relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-white/15 px-2.5 py-1 rounded-full border border-white/25">
                  Core Web Vitals
                </span>
              </div>
              <h4 className="text-lg font-extrabold text-white mb-1 group-hover:text-white/90 transition-colors">
                Lightning Fast Load Times
              </h4>
              <p className="text-white/70 text-xs leading-relaxed mb-3">
                Built on Next.js serverless edge nodes for near-instant response times nationwide.
              </p>
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden border border-white/20">
                <div className="bg-white h-full w-[99%] rounded-full" />
              </div>
            </div>

            {/* Bento Card 2: Automated Custom Domains */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/25 shadow-xl hover:bg-white/15 hover:border-white/40 transition-all group cursor-pointer relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-white/15 px-2.5 py-1 rounded-full border border-white/25">
                  SSL Secured
                </span>
              </div>
              <h4 className="text-lg font-extrabold text-white mb-1 group-hover:text-white/90 transition-colors">
                Automated DNS & SSL
              </h4>
              <p className="text-white/70 text-xs leading-relaxed mb-3">
                Plug in your domain name and launch live with free SSL encryption certificates.
              </p>
              <div className="flex items-center justify-between text-[11px] font-bold text-white bg-white/10 px-3 py-2 rounded-xl border border-white/20">
                <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-400" /> yourbrand.com</span>
                <span className="text-emerald-400 font-extrabold">Active</span>
              </div>
            </div>

          </div>

        </div>

        {/* CTA Bar */}
        <div className="mt-16 flex justify-center">
          <Link href="/work">
            <button className="px-8 py-4 bg-white hover:bg-white/90 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
              Explore All Work & Templates
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
