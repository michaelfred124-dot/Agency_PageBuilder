"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 px-6 relative overflow-hidden bg-[#F8FAFC] text-slate-900">
      
      {/* Floating Animated Gradient Glow Shapes in Background (Low Opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-sky-100/50 via-teal-100/35 to-emerald-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(186,230,253,0.3)]"
        />
        <motion.div 
          animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] w-[480px] h-[480px] bg-gradient-to-br from-indigo-100/45 via-sky-100/35 to-teal-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(167,243,208,0.3)]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col items-center bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50 border border-sky-200/80 p-10 md:p-16 rounded-[36px] shadow-xl relative overflow-hidden group text-slate-900"
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 opacity-90" />

          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-sky-200 shadow-sm relative z-10">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-extrabold text-sky-700">Ready to Transform Your Website?</span>
          </div>

          <h2 className="text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold text-slate-950 tracking-tight leading-[1.05] max-w-4xl relative z-10">
            Build a Website That <br />
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Drives Real Growth.</span>
          </h2>
          
          <p className="text-base lg:text-lg font-medium text-slate-600 max-w-xl mx-auto leading-relaxed relative z-10">
            Join design-forward local businesses leveraging our Next.js agency platform. High-performance custom sites delivered without traditional agency hassle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md relative z-10">
            <Link href="/work" className="w-full sm:w-auto flex-1">
              <button 
                className="w-full px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white text-xs uppercase tracking-widest font-extrabold rounded-full shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Templates</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto flex-1">
              <button 
                className="w-full px-8 py-4 bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 text-xs uppercase tracking-widest font-extrabold rounded-full shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-sky-600" />
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
