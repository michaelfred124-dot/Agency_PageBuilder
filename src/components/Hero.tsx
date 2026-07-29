"use client";
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, CheckCircle2, Shield, Zap, Layers, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ParallaxSectionBg from '@/components/ParallaxSectionBg';

const TEAM_AVATARS = [
  { name: "Alex", role: "Design Lead", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200", quote: "Awesome! Let's jump in 🚀", pos: "top-4 left-4 sm:left-12" },
  { name: "Jordan", role: "Frontend Eng", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200", quote: "Looks great 👍", pos: "top-8 right-4 sm:right-12" },
  { name: "Elena", role: "Client Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200", quote: "Site is live! ✨", pos: "bottom-12 left-8" },
  { name: "Marcus", role: "DevOps", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200", quote: "100% Core Vitals ⚡", pos: "bottom-16 right-8" }
];

const PORTFOLIO_SITES = [
  {
    title: "Sterling Law Group",
    category: "Legal & Corporate",
    image: "/screenshots/sterling-law.jpg",
    link: "/work/sterling-law-group"
  },
  {
    title: "Greenscape Landscaping",
    category: "Outdoor Contractor",
    image: "/screenshots/greenscape-landscaping.jpg",
    link: "/work/greenscape-landscaping"
  },
  {
    title: "Paws & Pamper",
    category: "Pet Care & Services",
    image: "/screenshots/paws-pamper.jpg",
    link: "/work/paws-and-pamper"
  },
  {
    title: "Maison Boutique",
    category: "Luxury Fashion & Retail",
    image: "/screenshots/maison-boutique.jpg",
    link: "/work/maison-boutique"
  }
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#F8FAFC] text-slate-900 overflow-hidden">
      
      {/* Floating Animated Gradient Glow Shapes in Background (Low Opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[10%] w-[550px] h-[550px] bg-gradient-to-r from-sky-100/60 via-blue-100/40 to-teal-100/35 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(186,230,253,0.3)]"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/50 via-sky-100/40 to-emerald-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(167,243,208,0.3)]"
        />
      </div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Avatar Quote Badges */}
        <div className="hidden lg:block">
          {TEAM_AVATARS.map((avatar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
              className={`absolute ${avatar.pos} z-20 flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer text-slate-900`}
            >
              <div className="w-7 h-7 rounded-full overflow-hidden relative border border-slate-200">
                <Image src={avatar.img} alt={avatar.name} fill className="object-cover" />
              </div>
              <span className="text-xs font-semibold text-slate-700">{avatar.quote}</span>
            </motion.div>
          ))}
        </div>

        {/* Glassmorphic Pill Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full border border-sky-200/80 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
            Website Builder for Local Businesses
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.75rem,6.5vw,5.75rem)] font-extrabold text-slate-950 tracking-tight leading-[1.03] max-w-4xl"
        >
          High-Performance Sites for <br />
          <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Local Business Growth.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-base md:text-lg max-w-xl font-medium mt-6 leading-relaxed"
        >
          Deploy bespoke Next.js websites engineered for local search authority, instant sub-100ms loading speed, and effortless lead capture.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/work">
            <button className="px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm rounded-full shadow-xl flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer">
              <span>Explore Custom Sites</span>
              <ArrowRight className="w-4 h-4 ml-1 text-white" />
            </button>
          </Link>

          <Link href="/pricing">
            <button className="px-7 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-full shadow-sm flex items-center gap-2 transition-all cursor-pointer">
              <Play className="w-3.5 h-3.5 fill-slate-800" />
              <span>See Transparent Plans</span>
            </button>
          </Link>
        </motion.div>

        {/* WORKSPACE PORTAL DASHBOARD MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-[1050px] mt-14 relative flex justify-center"
        >
          {/* Simulated Browser Frame Mockup */}
          <div className="w-full bg-white border border-slate-200 rounded-3xl p-2 sm:p-3 shadow-2xl overflow-hidden">
            
            {/* Mockup Header tab-bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Site Status: Live</span>
              </div>
            </div>

            {/* Mockup content canvas */}
            <div className="p-6 md:p-8 bg-[#F8FAFC] rounded-b-2xl grid grid-cols-1 md:grid-cols-12 gap-6 text-left border-t border-slate-200/80">
              
              {/* Left pane: Main Analytics Summary */}
              <div className="md:col-span-8 p-6 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm">
                <div className="flex justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                  <span>Weekly Traffic & Conversions</span>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">+24% vs last week</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-slate-950 tracking-tight">2,482</span>
                  <span className="text-xs text-sky-600 font-semibold">Unique Local Visitors</span>
                </div>
                {/* SVG Graph line representation */}
                <div className="w-full h-28 pt-2">
                  <svg viewBox="0 0 100 25" className="w-full h-full text-sky-500" preserveAspectRatio="none">
                    <path 
                      d="M0 20 C15 18, 25 14, 40 13 C55 12, 65 5, 75 6 C85 7, 90 14, 95 12 C97 11, 99 6, 100 4" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M0 20 C15 18, 25 14, 40 13 C55 12, 65 5, 75 6 C85 7, 90 14, 95 12 C97 11, 99 6, 100 4 L100 25 L0 25 Z" 
                      fill="url(#gradient-chart-hero)" 
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="gradient-chart-hero" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Right pane: Side Widgets */}
              <div className="md:col-span-4 flex flex-col gap-4">
                
                {/* Subdomain Card */}
                <div className="p-4 bg-white border border-slate-200/80 rounded-2xl space-y-1.5 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Custom Domain</span>
                  <div className="text-sm font-bold text-slate-900 truncate">greenscape.mfd.com</div>
                  <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> SSL Active & Connected
                  </div>
                </div>

                {/* Submissions Inbox Card */}
                <div className="p-4 bg-white border border-slate-200/80 rounded-2xl space-y-1.5 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Leads Inbox</span>
                  <div className="text-2xl font-extrabold text-slate-950">5 New Leads</div>
                  <div className="text-[10px] text-sky-600 font-semibold">Latest inquiry: 2 mins ago</div>
                </div>
              </div>

              {/* Bottom Checklist strip */}
              <div className="md:col-span-12 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3">Integrated Business Modules</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center text-xs font-semibold text-slate-700 gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-200"><CheckCircle2 className="w-3.5 h-3.5" /></span>
                    Google Maps Pin & Reviews
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-700 gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-200"><CheckCircle2 className="w-3.5 h-3.5" /></span>
                    Calendly Meeting Scheduler
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-700 gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-200"><CheckCircle2 className="w-3.5 h-3.5" /></span>
                    Stripe Client Invoicing
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left w-full max-w-[1100px]">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mb-4 shadow-sm">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900 mb-1">Sub-100ms Performance</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Serverless Next.js architecture delivers instant page loads out-of-the-box for top Google Lighthouse scores.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mb-4 shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900 mb-1">Automated SSL & Domain Sync</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Link your custom business domain in 1-click with automated SSL security certificates and DNS configuration.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mb-4 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900 mb-1">Built-In Local SEO Authority</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Schema.org structured data, semantic HTML5 hierarchy, and instant sitemap submission engineered for local search.
            </p>
          </div>
        </div>

        {/* INSTANT PORTFOLIO GRID WITH PASTEL ACCENTS */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full mt-24 text-left"
        >
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600 block mb-1">
                Instant Portfolio
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                Live Client Websites Built with Next.js
              </h3>
            </div>
            <Link href="/work" className="text-xs font-bold text-sky-600 hover:text-teal-600 flex items-center gap-1 transition-colors">
              View All Work ({PORTFOLIO_SITES.length}+) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_SITES.map((site, index) => (
              <Link href={site.link} key={index} className="group">
                <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 hover:border-sky-300/40 transition-all duration-500 group-hover:-translate-y-2 flex flex-col h-full overflow-hidden">
                  
                  {/* Card Image Container */}
                  <div className="relative w-full aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden mb-4 border border-slate-200">
                    <Image
                      src={site.image}
                      alt={site.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold text-xs rounded-full shadow-lg flex items-center gap-1.5">
                        View Live Site <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Info Row */}
                  <div className="px-2 pb-2 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-600 block mb-0.5">
                        {site.category}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {site.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}




