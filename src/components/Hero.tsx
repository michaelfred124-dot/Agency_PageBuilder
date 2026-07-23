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
    <section id="home" className="relative w-full overflow-hidden bg-[#080B12] text-white pt-28 md:pt-36 pb-24">
      
      {/* Full-Screen Real Photographic Forest & Sky Parallax Background */}
      <ParallaxSectionBg 
        src="/nature_hero_bg.jpg" 
        alt="Hero Forest Sky Background" 
        opacity={0.90} 
        overlayGradient="from-[#080B12]/40 via-transparent to-[#080B12]"
      />

      {/* Subtle Pastel Sky Blue & Mint Green Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-sky-500/20 via-blue-600/18 to-teal-400/15 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Bottom Dark Blend Layer to merge into Services section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080B12] via-[#080B12]/90 to-transparent pointer-events-none z-10" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Avatar Quote Badges */}
        <div className="hidden lg:block">
          {TEAM_AVATARS.map((avatar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
              className={`absolute ${avatar.pos} z-20 flex items-center gap-2.5 bg-white/[0.04] backdrop-blur-xl border border-sky-400/20 px-4 py-2 rounded-full shadow-2xl hover:border-emerald-400/40 transition-all cursor-pointer`}
            >
              <div className="w-7 h-7 rounded-full overflow-hidden relative border border-white/20">
                <Image src={avatar.img} alt={avatar.name} fill className="object-cover" />
              </div>
              <span className="text-xs font-semibold text-stone-200">{avatar.quote}</span>
            </motion.div>
          ))}
        </div>

        {/* Glassmorphic Pastel Blue/Green Pill Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-400/10 via-teal-400/10 to-emerald-400/10 backdrop-blur-xl px-4 py-2 rounded-full border border-sky-300/30 shadow-lg mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
            Next-Gen Agency Platform
          </span>
        </motion.div>

        {/* Main Title with Soft Pastel Blue to Mint Green Gradient */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.75rem,6.5vw,5.75rem)] font-extrabold text-white tracking-tight leading-[1.03] max-w-4xl"
        >
          Built Around How Your <br />
          <span className="bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            Team Actually Works.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-300/90 text-base md:text-lg max-w-xl font-normal mt-6 leading-relaxed"
        >
          Stop forcing your process into rigid templates. Our agency platform adapts to your team's real habits—deploy bespoke Next.js sites in days.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/work">
            <button className="px-8 py-4 bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 text-slate-950 font-extrabold text-sm rounded-full shadow-[0_0_25px_rgba(56,189,248,0.3)] flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer">
              <span>Start Free Trial</span>
              <span className="text-xs opacity-75 font-normal">14 days</span>
              <ArrowRight className="w-4 h-4 ml-1 text-slate-950" />
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-7 py-4 bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white text-sm font-medium rounded-full backdrop-blur-md flex items-center gap-2 transition-all cursor-pointer">
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Talk to sales team</span>
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
          <div className="w-full bg-[#0E131F]/90 border border-sky-400/20 rounded-3xl p-2 sm:p-3 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.6)] overflow-hidden">
            
            {/* Mockup Header tab-bar */}
            <div className="bg-[#111827] border-b border-white/10 px-4 py-3 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                <span className="text-[10px] text-teal-300/80 font-mono tracking-wider uppercase ml-4 hidden sm:inline">Workspace Portal • greenscape.mfd.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">Site Status: Live</span>
              </div>
            </div>

            {/* Mockup content canvas */}
            <div className="p-6 md:p-8 bg-[#0B0F17] rounded-b-2xl grid grid-cols-1 md:grid-cols-12 gap-6 text-left border-t border-white/5">
              
              {/* Left pane: Main Analytics Summary */}
              <div className="md:col-span-8 p-6 bg-white/[0.03] border border-white/10 rounded-2xl space-y-4">
                <div className="flex justify-between items-center text-xs text-stone-300 font-bold uppercase tracking-wider">
                  <span>Weekly Traffic & Conversions</span>
                  <span className="text-xs text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded-full">+24% vs last week</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-white tracking-tight">2,482</span>
                  <span className="text-xs text-teal-300 font-semibold">Unique Visitors</span>
                </div>
                {/* SVG Graph line representation */}
                <div className="w-full h-28 pt-2">
                  <svg viewBox="0 0 100 25" className="w-full h-full text-teal-400" preserveAspectRatio="none">
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
                <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl space-y-1.5">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Custom Domain</span>
                  <div className="text-sm font-bold text-white truncate">greenscape.mfd.com</div>
                  <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> SSL Active & Connected
                  </div>
                </div>

                {/* Submissions Inbox Card */}
                <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl space-y-1.5">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Leads Inbox</span>
                  <div className="text-2xl font-extrabold text-white">5 New Leads</div>
                  <div className="text-[10px] text-teal-300 font-semibold">Latest inquiry: 2 mins ago</div>
                </div>
              </div>

              {/* Bottom Checklist strip */}
              <div className="md:col-span-12 p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3">Integrated Business Modules</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center text-xs font-semibold text-white/90 gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></span>
                    Google Maps Pin & Reviews
                  </div>
                  <div className="flex items-center text-xs font-semibold text-white/90 gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></span>
                    Calendly Meeting Scheduler
                  </div>
                  <div className="flex items-center text-xs font-semibold text-white/90 gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></span>
                    Stripe Client Invoicing
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Feature Highlights Row with Lighter Standout Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left w-full max-w-[1100px]">
          <div className="p-6 bg-white/10 border border-white/25 rounded-2xl backdrop-blur-xl hover:bg-white/15 hover:border-white/40 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/30 text-white flex items-center justify-center mb-4 shadow-sm">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Learns from examples</h4>
            <p className="text-xs text-white/70 leading-relaxed font-normal">
              Upload 3-5 samples. Our AI builds your custom Next.js workflow automatically, like training a human.
            </p>
          </div>

          <div className="p-6 bg-white/10 border border-white/25 rounded-2xl backdrop-blur-xl hover:bg-white/15 hover:border-white/40 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/30 text-white flex items-center justify-center mb-4 shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Test before you trust</h4>
            <p className="text-xs text-white/70 leading-relaxed font-normal">
              AI you can trust for key processes. Unmatched accuracy through thorough data evaluation.
            </p>
          </div>

          <div className="p-6 bg-white/10 border border-white/25 rounded-2xl backdrop-blur-xl hover:bg-white/15 hover:border-white/40 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/30 text-white flex items-center justify-center mb-4 shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Deploy anywhere</h4>
            <p className="text-xs text-white/70 leading-relaxed font-normal">
              Your cloud, your rules. Simple 1-click deployment with built-in custom domain connections.
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
              <span className="text-xs font-bold uppercase tracking-widest text-teal-300 block mb-1">
                Instant Portfolio
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Live Client Websites Built with Next.js
              </h3>
            </div>
            <Link href="/work" className="text-xs font-bold text-sky-300 hover:text-teal-200 flex items-center gap-1 transition-colors">
              View All Work ({PORTFOLIO_SITES.length}+) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_SITES.map((site, index) => (
              <Link href={site.link} key={index} className="group">
                <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-4 border border-white/10 shadow-2xl hover:border-sky-300/40 hover:bg-white/[0.06] transition-all duration-500 group-hover:-translate-y-2 flex flex-col h-full overflow-hidden">
                  
                  {/* Card Image Container */}
                  <div className="relative w-full aspect-[16/10] bg-stone-900 rounded-2xl overflow-hidden mb-4 border border-white/10">
                    <Image
                      src={site.image}
                      alt={site.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-sky-400 to-emerald-400 text-slate-950 font-bold text-xs rounded-full shadow-xl flex items-center gap-1.5">
                        View Live Site <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Info Row */}
                  <div className="px-2 pb-2 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-300 block mb-0.5">
                        {site.category}
                      </span>
                      <h4 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                        {site.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
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




