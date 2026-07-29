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
    <section id="services" className="py-24 lg:py-32 bg-[#F8FAFC] text-slate-900 px-4 lg:px-6 relative overflow-hidden">
      
      {/* Floating Animated Gradient Glow Shapes in Background (Low Opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-sky-100/50 via-teal-100/35 to-emerald-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(167,243,208,0.3)]"
        />
        <motion.div 
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[15%] left-[5%] w-[480px] h-[480px] bg-gradient-to-tr from-indigo-100/45 via-sky-100/35 to-teal-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(186,230,253,0.3)]"
        />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        {/* Dynamic Header */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-sky-700 bg-white px-4 py-2 rounded-full border border-sky-200 shadow-sm mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
            Platform Capabilities
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-none max-w-3xl">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Scale Locally</span>
          </h2>

          <p className="max-w-2xl text-slate-600 text-base md:text-lg font-medium mt-4 leading-relaxed">
            High-performance custom sites engineered for speed, conversion, and local search authority without traditional agency hassle.
          </p>

          {/* Floating Metric Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
              <BarChart3 className="w-3.5 h-3.5 text-sky-600" /> #1 Local SEO Authority
            </span>
          </div>
        </div>

        {/* Interactive Capability Selector Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-inner">
            {capabilities.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'bg-white text-slate-950 shadow-md scale-105 border border-slate-200/60' 
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-sky-600' : 'text-slate-500'}`} />
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
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 opacity-90" />

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
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-sm">
                          <CapIcon className="w-7 h-7 text-sky-600" />
                        </div>
                        <span className="text-xs font-extrabold text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
                          {cap.badge}
                        </span>
                      </div>

                      <h3 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed mb-4 font-medium">
                        {cap.desc}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-sky-400 pl-4 italic">
                        {cap.detail}
                      </p>
                    </div>

                    {/* Interactive Live Interactive Preview Box */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-inner">
                      <div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{cap.statLabel}</div>
                        <div className="text-2xl font-black text-slate-950">{cap.statVal}</div>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden text-slate-900">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-sky-700 uppercase tracking-widest bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                  Core Web Vitals
                </span>
              </div>
              <h4 className="text-lg font-extrabold text-slate-950 mb-1 group-hover:text-sky-600 transition-colors">
                Lightning Fast Load Times
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-3 font-medium">
                Built on Next.js serverless edge nodes for near-instant response times nationwide.
              </p>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                <div className="bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 h-full w-[99%] rounded-full" />
              </div>
            </div>

            {/* Bento Card 2: Automated Custom Domains */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden text-slate-900">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  SSL Secured
                </span>
              </div>
              <h4 className="text-lg font-extrabold text-slate-950 mb-1 group-hover:text-teal-600 transition-colors">
                Automated DNS & SSL
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-3 font-medium">
                Plug in your domain name and launch live with free SSL encryption certificates.
              </p>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-600" /> yourbrand.com</span>
                <span className="text-emerald-600 font-extrabold">Active</span>
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
