"use client";
import { motion } from 'motion/react';
import { Activity, Globe, MessageSquare, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Hero() {
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      window.location.href = `/login?email=${encodeURIComponent(emailInput)}`;
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-start items-center px-6 relative overflow-hidden bg-[#0B0B0B] pt-36 lg:pt-40 pb-24 border-b border-white/10">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      {/* Background radial soft glows backing the dashboard mockup - Gold/Orange premium aurora mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(255,127,17,0.12),rgba(212,175,55,0.05),transparent)] rounded-full blur-[120px] pointer-events-none z-0 animate-pulse duration-[8s]" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),rgba(255,127,17,0.05),transparent)] rounded-full blur-[120px] pointer-events-none z-0 animate-pulse duration-[10s]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(255,127,17,0.08),rgba(212,175,55,0.08),transparent)] rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto w-full z-10 flex flex-col items-center text-center">
        
        {/* Centered Main Headers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl flex flex-col items-center"
        >
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] font-bold text-white tracking-tight">
            Bespoke websites.<br />
            <span className="luxury-gradient-text">Simplified growth.</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/70 leading-relaxed font-normal max-w-2xl">
            Launch a custom Next.js site in 10 minutes that transforms how your business operates. Edit inline, manage custom subdomains, and gather customer leads under a single dashboard workspace.
          </p>
        </motion.div>

        {/* Email Pill Capture Bar + Explore Demo (Centered Row) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-xl"
        >
          {/* Email Capture Pill */}
          <form onSubmit={handleSubmit} className="w-full sm:flex-1 flex bg-white/[0.04] border border-white/10 p-1.5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] focus-within:border-[#FF7F11]/50 transition-colors">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="flex-1 px-4 py-2 text-sm text-white placeholder-white/45 bg-transparent outline-none font-medium"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-[#FF7F11] to-[#D4AF37] hover:opacity-90 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer shrink-0"
            >
              Get Started
            </button>
          </form>

          {/* Explore Demo button */}
          <Link href="/work" className="w-full sm:w-auto shrink-0">
            <button className="w-full sm:w-auto px-6 py-3.5 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white text-xs font-bold rounded-full transition-all cursor-pointer">
              Explore Demo
            </button>
          </Link>
        </motion.div>

        {/* High-Fidelity Dark-Theme Client Dashboard Mockup (Centered below) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-[940px] mt-16 relative flex justify-center"
        >
          {/* Simulated Browser Frame Mockup */}
          <div className="w-full bg-[#121212] border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* Mockup Header tab-bar */}
            <div className="bg-[#181818] border-b border-white/10 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="text-[10px] text-white/40 font-semibold tracking-wider uppercase ml-4 hidden sm:inline">Workspace Portal</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Site Status: Live</span>
              </div>
            </div>

            {/* Mockup content canvas */}
            <div className="p-6 md:p-8 bg-[#121212] grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
              
              {/* Left pane: Main Analytics Summary */}
              <div className="md:col-span-8 p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-4">
                <div className="flex justify-between items-center text-[10px] text-white/40 font-bold uppercase tracking-wider">
                  <span>Weekly Visits</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">+12%</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white tracking-tight">1,482</span>
                  <span className="text-xs text-white/50 font-medium">Unique Visitors</span>
                </div>
                {/* SVG Graph line representation */}
                <div className="w-full h-24 pt-2">
                  <svg viewBox="0 0 100 20" className="w-full h-full text-[#FF7F11]" preserveAspectRatio="none">
                    <path 
                      d="M0 15 C15 15, 25 12, 40 12 C55 12, 60 4, 75 4 C85 4, 90 16, 95 16 C97 16, 99 10, 100 6" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M0 15 C15 15, 25 12, 40 12 C55 12, 60 4, 75 4 C85 4, 90 16, 95 16 C97 16, 99 10, 100 6 L100 20 L0 20 Z" 
                      fill="url(#gradient-chart)" 
                      opacity="0.08"
                    />
                    <defs>
                      <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
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
                <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1.5">
                  <span className="text-[9px] text-white/40 font-bold uppercase tracking-wider block">Domain Connection</span>
                  <div className="text-xs font-bold text-white truncate">greenscape.mfd.com</div>
                  <div className="text-[9px] text-white/50 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Connected
                  </div>
                </div>

                {/* Submissions Inbox Card */}
                <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1.5">
                  <span className="text-[9px] text-white/40 font-bold uppercase tracking-wider block">Leads Inbox</span>
                  <div className="text-xl font-extrabold text-white">3 Unread</div>
                  <div className="text-[9px] text-white/50 font-semibold">Latest lead: 2m ago</div>
                </div>
              </div>

              {/* Bottom Checklist strip */}
              <div className="md:col-span-12 p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                <span className="text-[9px] text-white/40 font-bold uppercase tracking-wider block mb-3">Linked Service Widgets</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center text-xs font-medium text-white/80 gap-2">
                    <span className="w-4 h-4 rounded-full bg-orange-500/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-[#FF7F11]" /></span>
                    Google Maps Pin Connected
                  </div>
                  <div className="flex items-center text-xs font-medium text-white/80 gap-2">
                    <span className="w-4 h-4 rounded-full bg-orange-500/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-[#FF7F11]" /></span>
                    Calendly Meeting Scheduler Connected
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}


