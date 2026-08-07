"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 px-6 relative overflow-hidden bg-[#FAF9FF] text-slate-900 font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Right Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] -right-24 w-[500px] h-[500px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Left Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[5%] -left-24 w-[480px] h-[480px] text-[#FF7700] opacity-75 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[25%] left-[8%] w-12 h-12 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Purple Outline Circle */}
        <motion.div
          animate={{ y: [0, 16, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[8%] w-10 h-10 border-4 border-[#6528D9] rounded-full opacity-70 hidden lg:block"
        />

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[20%] left-[4%] w-36 h-40 dot-grid-orange opacity-50 hidden md:block" />
        <div className="absolute bottom-[20%] right-[4%] w-40 h-44 dot-grid-purple opacity-50 hidden md:block" />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col items-center bg-white/95 border border-slate-200/90 p-10 md:p-16 rounded-[36px] shadow-2xl relative overflow-hidden group text-slate-900"
        >
          {/* Top Accent Line in Orange Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#6528D9] via-[#FF5500] to-[#FF8800]" />

          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm relative z-10">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FF5500]">Ready to Transform Your Website?</span>
          </div>

          <h2 className="text-[clamp(2.5rem,6.5vw,5rem)] font-black text-slate-950 tracking-tight leading-[1.05] max-w-4xl relative z-10">
            Build a Website That <br />
            <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Drives Real Growth.</span>
          </h2>
          
          <p className="text-base lg:text-lg font-medium text-slate-600 max-w-xl mx-auto leading-relaxed relative z-10">
            Join design-forward local businesses leveraging our Next.js agency platform. High-performance custom sites delivered without traditional agency hassle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md relative z-10">
            <Link href="/pricing" className="w-full sm:w-auto flex-1">
              <button 
                className="w-full btn-orange-pill px-9 py-4 text-white text-xs font-black uppercase tracking-widest rounded-full cursor-pointer shadow-xl flex items-center justify-center gap-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto flex-1">
              <button 
                className="w-full px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-50 text-xs uppercase tracking-widest font-extrabold rounded-full shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#FF5500]" />
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
