"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Check, Info, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ParallaxSectionBg from '@/components/ParallaxSectionBg';

export default function WhyUs() {
  const [isDiyModalOpen, setIsDiyModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9FF] text-slate-900 px-4 lg:px-6 relative overflow-hidden z-10 font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-28 w-[500px] h-[500px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[8%] -right-24 w-[480px] h-[480px] text-[#FF7700] opacity-75 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[6%] w-14 h-14 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Purple Outline Circle */}
        <motion.div
          animate={{ y: [0, 16, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[7%] w-10 h-10 border-4 border-[#6528D9] rounded-full opacity-70 hidden lg:block"
        />

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[18%] right-[4%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[18%] left-[4%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 px-4 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm">
            MODEL COMPARISON →
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight mt-4">
            The <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Real Cost</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto mt-4 leading-relaxed">
            How our website-as-a-service model stacks up against traditional agencies and DIY tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto auto-rows-auto">
          
          {/* DIY Builders Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-md flex flex-col relative group hover:shadow-xl transition-all duration-300 cursor-pointer text-slate-900"
          >
            <div className="h-44 overflow-hidden border-b border-slate-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1200" 
                alt="Frustrated building website" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10">
                 <span className="text-[10px] border border-slate-200 rounded-full px-3 py-1 bg-white text-slate-800 tracking-wider uppercase font-black shadow-sm">
                   DIY Template Tools
                 </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-black text-slate-950">
                  DIY Builders
                </h3>
                <p className="text-slate-600 text-sm font-medium mt-1">Cheap upfront, but you pay heavily with your own time.</p>
              </div>

              <ul className="space-y-4 relative z-10 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 border border-rose-200 mt-0.5">
                    <X className="w-3 h-3 text-rose-600" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">You do all design and debugging</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 border border-rose-200 mt-0.5">
                    <X className="w-3 h-3 text-rose-600" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">Generic cookie-cutter templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 border border-rose-200 mt-0.5">
                    <X className="w-3 h-3 text-rose-600" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">You don't own the underlying code</span>
                </li>
              </ul>
              
              <button 
                onClick={() => setIsDiyModalOpen(true)}
                className="mt-auto flex items-center gap-2 justify-center w-full py-3 px-4 border border-slate-200 text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-full font-black uppercase tracking-wider text-xs transition-colors cursor-pointer"
              >
                <Info className="w-4 h-4 text-slate-800" />
                <span>Why not for local brands?</span>
              </button>
            </div>
          </motion.div>

          {/* Our Model Card (Deep Vibrant Purple) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 bg-purple-vibrant border border-[#7C3AED] rounded-3xl p-8 lg:p-12 text-white shadow-2xl flex flex-col relative z-20 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full pointer-events-none -mr-20 -mt-20 border border-white/10" />

            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 relative z-10">
              <div>
                <div className="inline-block px-4 py-1.5 bg-[#FF5500] text-white rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-md">
                  Our Subscription Model
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Websites Have <br />Never Been Simpler
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-5xl font-black tracking-tight text-[#FFB703]">$30 <span className="text-xl text-purple-200 font-bold">/mo</span></div>
                <div className="text-purple-200 font-black uppercase tracking-wider text-xs mt-1">Starting Page Plan</div>
              </div>
            </div>

            <div className="flex-grow grid sm:grid-cols-2 gap-8 items-center relative z-10">
              {/* Left Column: Positives List */}
              <ul className="space-y-3.5">
                {[
                  "100% Custom Next.js Design & Dev",
                  "3, 5, or 10 Full-Width Pages",
                  "Automated Domain & SSL Sync",
                  "Unlimited Edits & Updates",
                  "Built-in Local SEO & Schema",
                  "You Own the Codebase",
                  "Pause or Cancel Anytime"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 border border-emerald-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 text-emerald-300" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-sm text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Right Column: Visual Mockup */}
              <div className="flex justify-center sm:justify-end">
                <div className="w-full max-w-[340px] aspect-[4/3] bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl relative">
                  <img 
                    src="/positives_preview.png" 
                    alt="Web speed and growth performance positives illustration" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-purple-500/40 relative z-10 flex justify-center text-center">
              <Link 
                href="/pricing" 
                className="btn-orange-pill inline-flex items-center gap-2 px-9 py-4 text-white font-black text-xs uppercase tracking-widest rounded-full cursor-pointer shadow-xl"
              >
                <span>Compare Transparent Plans</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>

      <AnimatePresence>
        {isDiyModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDiyModalOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto text-slate-900"
            >
              <button 
                onClick={() => setIsDiyModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 border border-slate-200 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" strokeWidth={3} />
              </button>

              <div className="mb-8 pr-12">
                <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-950 leading-tight">
                  Why DIY Builders Fall Short <br/><span className="text-rose-600">for Local Businesses</span>
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
                    <X className="w-5 h-5 text-rose-600" strokeWidth={3} />
                    You Don't Own Your Digital Asset
                  </h4>
                  <p className="text-slate-600 text-sm font-medium">
                    When you build on proprietary template builders, you are renting. You cannot export your custom code to another server.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
                    <X className="w-5 h-5 text-rose-600" strokeWidth={3} />
                    Poor Core Web Vitals & SEO
                  </h4>
                  <p className="text-slate-600 text-sm font-medium">
                    Drag-and-drop builders inject hidden code bloat, dragging down site speed—a critical ranking metric for Google.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

