"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Layers, Cpu, CheckCircle2, BarChart3, Zap, Globe, Lock } from 'lucide-react';
import Link from 'next/link';

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState<'seo' | 'booking' | 'estimate' | 'integrations'>('seo');

  const capabilities = [
    {
      id: 'seo',
      title: 'Local SEO & Speed',
      icon: Search,
      badge: 'Authority Standard',
      desc: 'Sub-100ms load times nationwide built directly on Next.js edge nodes, optimized for Google Local Packs.',
      detail: 'Rank #1 in your zip code with automated schema markup, dynamic sitemaps, and Core Web Vitals score of 99+.',
      statLabel: 'Avg Speed Score',
      statVal: '99/100 Mobile',
    },
    {
      id: 'booking',
      title: 'Booking & Scheduling',
      icon: Calendar,
      badge: 'Client Capture',
      desc: 'Seamless appointment scheduling embedded right into your website so clients book services 24/7.',
      detail: 'Sync directly with Google Calendar, Outlook, and iCal with SMS reminder notifications.',
      statLabel: 'Lead Conversion',
      statVal: '+3.4x Higher',
    },
    {
      id: 'estimate',
      title: 'Quote & Lead Builder',
      icon: Layers,
      badge: 'Instant Pricing',
      desc: 'Interactive service estimators allowing homeowners and business clients to compute quotes live.',
      detail: 'Capture high-intent leads with custom multi-step forms sent directly to your phone and inbox.',
      statLabel: 'Lead Volume',
      statVal: '2x Quote Rate',
    },
    {
      id: 'integrations',
      title: 'Business App Sync',
      icon: Cpu,
      badge: 'Ecosystem',
      desc: 'Embed Shopify buy boxes, Calendly scheduling, Google Maps, and Mailchimp forms with zero code hassle.',
      detail: 'Plug directly into your existing business tools without hiring backend developers.',
      statLabel: 'Integrations',
      statVal: '25+ Pre-built',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAF9FF] text-slate-900 px-4 lg:px-6 relative overflow-hidden font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Organic Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] -left-28 w-[520px] h-[520px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Organic Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[6%] -right-24 w-[490px] h-[490px] text-[#FF7700] opacity-75 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[28%] left-[5%] w-14 h-14 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <motion.svg
          animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[22%] right-[8%] w-12 h-12 text-[#FF7700] opacity-75 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        >
          <polygon points="50,10 90,85 10,85" />
        </motion.svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[18%] right-[4%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[20%] left-[3%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        {/* Dynamic Header */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm mb-4">
            PLATFORM CAPABILITIES →
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-none max-w-3xl">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Scale Locally</span>
          </h2>

          <p className="max-w-2xl text-slate-600 text-base md:text-lg font-medium mt-4 leading-relaxed">
            High-performance custom sites engineered for speed, conversion, and local search authority without traditional agency hassle.
          </p>

          {/* Floating Metric Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-black text-slate-900 flex items-center gap-1.5 shadow-sm">
              <BarChart3 className="w-3.5 h-3.5 text-[#FF5500]" /> #1 Local SEO Authority
            </span>
          </div>
        </div>

        {/* Interactive Capability Selector Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex bg-white p-2 rounded-full border border-slate-200 shadow-md">
            {capabilities.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'btn-orange-pill shadow-md scale-105' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.title.split(' ')[0]} {tab.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Selected Feature Banner (Lg Col 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md relative overflow-hidden flex flex-col justify-between group text-slate-900">
            {/* Top Accent Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] opacity-90" />

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
                        <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6528D9] shadow-sm">
                          <CapIcon className="w-7 h-7 text-[#6528D9]" />
                        </div>
                        <span className="text-xs font-black text-[#FF5500] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200">
                          {cap.badge}
                        </span>
                      </div>

                      <h3 className="text-3xl font-black text-slate-950 tracking-tight mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed mb-4 font-medium">
                        {cap.desc}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-[#6528D9] pl-4 italic">
                        {cap.detail}
                      </p>
                    </div>

                    {/* Interactive Live Interactive Preview Box */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-inner">
                      <div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{cap.statLabel}</div>
                        <div className="text-2xl font-black text-slate-950">{cap.statVal}</div>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-black text-[#6528D9] bg-purple-50 px-3.5 py-2 rounded-xl border border-purple-200">
                        <CheckCircle2 className="w-4 h-4 text-[#6528D9]" />
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
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden text-slate-900">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF5500]">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-[#FF5500] uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                  Core Web Vitals
                </span>
              </div>
              <h4 className="text-lg font-black text-slate-950 mb-1 group-hover:text-[#FF5500] transition-colors">
                Lightning Fast Load Times
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-3 font-medium">
                Built on Next.js serverless edge nodes for near-instant response times nationwide.
              </p>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                <div className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] h-full w-[99%] rounded-full" />
              </div>
            </div>

            {/* Bento Card 2: Automated Custom Domains */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden text-slate-900">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6528D9]">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-[#6528D9] uppercase tracking-widest bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  SSL Secured
                </span>
              </div>
              <h4 className="text-lg font-black text-slate-950 mb-1 group-hover:text-[#6528D9] transition-colors">
                Automated DNS & SSL
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-3 font-medium">
                Plug in your domain name and launch live with free SSL encryption certificates.
              </p>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-[#6528D9]" /> yourbrand.com</span>
                <span className="text-[#6528D9] font-extrabold">Active</span>
              </div>
            </div>

          </div>

        </div>

        {/* CTA Bar */}
        <div className="mt-16 flex justify-center">
          <Link href="/work">
            <button className="px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
              Explore All Work & Templates
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
