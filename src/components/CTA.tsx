"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

import ParallaxSectionBg from '@/components/ParallaxSectionBg';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 px-6 relative overflow-hidden bg-[#080B12] text-white">
      
      {/* Full-Section Real Photographic Background with Parallax */}
      <ParallaxSectionBg 
        src="/cta_nature_bg.jpg" 
        alt="Twilight Horizon Sky Background"
        opacity={0.82}
        overlayGradient="from-[#080B12] via-transparent to-[#080B12]"
      />

      {/* Alternating Multicolored Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-sky-400/25 via-teal-400/20 to-emerald-400/20 blur-[170px] rounded-full pointer-events-none z-0" />

      {/* Giant Stacked Watermark Background Typography */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 text-center w-full">
        <div className="text-[16vw] font-black text-white/[0.07] tracking-tighter uppercase leading-[0.8] block drop-shadow-2xl font-sans">
          SCALE <br /> LOCALLY
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col items-center bg-white/10 border border-white/25 p-10 md:p-16 rounded-[36px] backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-75" />

          {/* Internal Glow Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20 z-0" />

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 shadow-[0_0_15px_rgba(255,255,255,0.1)] relative z-10">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold text-white">Ready to Transform Your Website?</span>
          </div>

          <h2 className="text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold text-white tracking-tight leading-[1.05] max-w-4xl relative z-10">
            Build a Website That <br />
            <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Drives Real Growth.</span>
          </h2>
          
          <p className="text-base lg:text-lg font-normal text-white/70 max-w-xl mx-auto leading-relaxed relative z-10">
            Join design-forward businesses leveraging our Next.js agency platform. High-performance custom sites delivered without the traditional agency hassle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md relative z-10">
            <Link href="/work" className="w-full sm:w-auto flex-1">
              <button 
                className="w-full px-8 py-4 bg-white hover:bg-white/90 text-slate-950 text-xs uppercase tracking-widest font-extrabold rounded-full shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Templates</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto flex-1">
              <button 
                className="w-full px-8 py-4 bg-white/10 border border-white/25 text-white hover:bg-white/20 text-xs uppercase tracking-widest font-bold rounded-full shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-md"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
