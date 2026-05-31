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
    <section id="home" className="min-h-screen flex flex-col justify-start items-center px-6 relative overflow-hidden bg-[#F7F8FA] pt-36 lg:pt-40 pb-20 border-b border-zinc-200/50">
      
      {/* Background radial soft glows backing the dashboard mockup */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#DCD7FC]/40 via-[#F5D8F0]/30 to-transparent rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto w-full z-10 flex flex-col items-center text-center">
        
        {/* Centered Main Headers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl flex flex-col items-center"
        >
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] font-semibold text-zinc-950 tracking-tight">
            Bespoke websites.<br />
            Simplified growth.
          </h1>
          
          <p className="text-base md:text-lg text-zinc-650 leading-relaxed font-normal max-w-2xl">
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
          <form onSubmit={handleSubmit} className="w-full sm:flex-1 flex bg-[#ECEEF2] border border-zinc-250 p-1 rounded-full shadow-inner">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="flex-1 px-4 py-2 text-sm text-zinc-800 placeholder-zinc-500 bg-transparent outline-none font-medium"
            />
            <button 
              type="submit"
              className="bg-[#4353FF] hover:bg-[#3442DD] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer shrink-0"
            >
              Get Started
            </button>
          </form>

          {/* Explore Demo button */}
          <Link href="/work" className="w-full sm:w-auto shrink-0">
            <button className="w-full sm:w-auto px-6 py-3.5 bg-[#ECEEF2] border border-zinc-250 hover:bg-zinc-200 text-zinc-850 text-xs font-semibold rounded-full transition-all cursor-pointer">
              Explore Demo
            </button>
          </Link>
        </motion.div>

        {/* High-Fidelity Light-Theme Client Dashboard Mockup (Centered below) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-[940px] mt-16 relative flex justify-center"
        >
          {/* Simulated Browser Frame Mockup */}
          <div className="w-full bg-white border border-zinc-200 rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
            
            {/* Mockup Header tab-bar */}
            <div className="bg-[#F4F5F7] border-b border-zinc-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase ml-4 hidden sm:inline">Workspace Portal</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Site Status: Live</span>
              </div>
            </div>

            {/* Mockup content canvas */}
            <div className="p-6 md:p-8 bg-white grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
              
              {/* Left pane: Main Analytics Summary */}
              <div className="md:col-span-8 p-5 bg-[#F9FAFB] border border-zinc-200/60 rounded-xl space-y-4">
                <div className="flex justify-between items-center text-[10px] text-zinc-450 font-bold uppercase tracking-wider">
                  <span>Weekly Visits</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">+12%</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-zinc-950 tracking-tight">1,482</span>
                  <span className="text-xs text-zinc-400 font-medium">Unique Visitors</span>
                </div>
                {/* SVG Graph line representation */}
                <div className="w-full h-24 pt-2">
                  <svg viewBox="0 0 100 20" className="w-full h-full text-[#4353FF]" preserveAspectRatio="none">
                    <path 
                      d="M0 16 Q15 6, 30 11 T60 4 T85 9 T100 2" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M0 16 Q15 6, 30 11 T60 4 T85 9 T100 2 L100 20 L0 20 Z" 
                      fill="url(#gradient-chart)" 
                      opacity="0.06"
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
                <div className="p-4 bg-[#F9FAFB] border border-zinc-200/60 rounded-xl space-y-1.5">
                  <span className="text-[9px] text-zinc-450 font-bold uppercase tracking-wider block">Domain Connection</span>
                  <div className="text-xs font-bold text-zinc-900 truncate">greenscape.mfd.com</div>
                  <div className="text-[9px] text-zinc-400 font-semibold flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" /> Connected
                  </div>
                </div>

                {/* Submissions Inbox Card */}
                <div className="p-4 bg-[#F9FAFB] border border-zinc-200/60 rounded-xl space-y-1.5">
                  <span className="text-[9px] text-zinc-450 font-bold uppercase tracking-wider block">Leads Inbox</span>
                  <div className="text-xl font-extrabold text-zinc-900">3 Unread</div>
                  <div className="text-[9px] text-zinc-400 font-semibold">Latest lead: 2m ago</div>
                </div>
              </div>

              {/* Bottom Checklist strip */}
              <div className="md:col-span-12 p-4 bg-[#F9FAFB] border border-zinc-200/60 rounded-xl">
                <span className="text-[9px] text-zinc-450 font-bold uppercase tracking-wider block mb-3">Linked Service Widgets</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center text-xs font-medium text-zinc-700 gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-blue-600" /></span>
                    Google Maps Pin Connected
                  </div>
                  <div className="flex items-center text-xs font-medium text-zinc-700 gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-blue-600" /></span>
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


