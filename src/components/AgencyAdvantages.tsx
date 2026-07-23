"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { RefreshCcw, HandCoins, Users, Rocket, ArrowRight } from 'lucide-react';

import ParallaxSectionBg from '@/components/ParallaxSectionBg';

export default function AgencyAdvantages() {
  return (
    <section className="py-20 lg:py-28 bg-[#080B12] text-white px-4 lg:px-6 relative overflow-hidden">
      
      {/* Full-Section Real Photographic Background with Parallax */}
      <ParallaxSectionBg 
        src="/advantages_nature_bg.jpg" 
        alt="Aurora Borealis Sky Background"
        opacity={0.85}
        overlayGradient="from-[#080B12] via-transparent to-[#080B12]"
      />

      {/* Alternating Royal Blue & Indigo Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-indigo-500/25 via-blue-600/20 to-sky-400/20 blur-[170px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16 lg:mb-20 text-center items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-sky-950/70 px-3.5 py-1.5 rounded-full border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            The Agency Advantage
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none max-w-3xl">
            Why Companies Choose <br />
            <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">mfd.agency</span>
          </h2>
          <p className="max-w-xl text-slate-200 text-base md:text-lg font-normal pt-2">
            Experience the speed and polish of a dedicated design agency without the traditional overhead or long timeline delays.
          </p>
        </div>

        {/* Frosted Glass Dynamic Grid - Standout Glass Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Pause or Cancel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-[#1E293B]/85 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-sky-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:bg-slate-800/95 hover:border-sky-300/60 hover:shadow-[0_20px_45px_rgba(56,189,248,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/25 via-blue-500/20 to-slate-700/40 border border-sky-300/40 flex items-center justify-center text-sky-200 group-hover:from-sky-400 group-hover:to-teal-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-sky-300 uppercase tracking-widest bg-sky-950/70 px-3 py-1 rounded-full border border-sky-400/40">
                  100% Flexible
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-sky-200 transition-colors">
                Pause or Cancel Anytime
              </h3>
              <p className="text-slate-200 text-base leading-relaxed max-w-lg">
                No long-term contracts. Don't have enough work for the month? Simply pause your subscription and resume whenever your brand needs fresh design iterations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-sky-400/20 flex items-center gap-2 text-xs font-bold text-sky-300 group-hover:text-teal-200 transition-colors">
              <span>Flexible Subscription Model</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 2: Flat Monthly Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-[#1E293B]/85 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-teal-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:bg-slate-800/95 hover:border-teal-300/60 hover:shadow-[0_20px_45px_rgba(45,212,191,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400/25 via-emerald-500/20 to-slate-700/40 border border-teal-300/40 flex items-center justify-center text-teal-200 group-hover:from-teal-400 group-hover:to-emerald-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <HandCoins className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-teal-300 uppercase tracking-widest bg-teal-950/70 px-3 py-1 rounded-full border border-teal-400/40">
                  Predictable Cost
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3 group-hover:text-teal-200 transition-colors">
                Flat Monthly Rate
              </h3>
              <p className="text-slate-200 text-base leading-relaxed">
                No surprise hourly bills or endless scope negotiations. You pay the exact same predictable fee every month.
              </p>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-slate-800/80 border border-teal-400/30 flex items-center justify-between text-slate-100 font-bold text-sm">
              <span>Transparent Pricing</span>
              <span className="text-xs bg-gradient-to-r from-sky-400 to-teal-400 text-slate-950 px-3 py-1 rounded-full font-extrabold shadow-sm">$0 Hidden Fees</span>
            </div>
          </motion.div>

          {/* Card 3: Dedicated Senior Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-[#1E293B]/85 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-emerald-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:bg-slate-800/95 hover:border-emerald-300/60 hover:shadow-[0_20px_45px_rgba(52,211,153,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400/25 via-teal-500/20 to-slate-700/40 border border-emerald-300/40 flex items-center justify-center text-emerald-200 group-hover:from-emerald-400 group-hover:to-teal-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-emerald-300 uppercase tracking-widest bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-400/40">
                  Senior Engineers
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3 group-hover:text-emerald-200 transition-colors">
                Your Dedicated Team
              </h3>
              <p className="text-slate-200 text-base leading-relaxed">
                Stop playing roulette with unverified freelancers. Get design and Next.js development from a senior team aligned with your brand.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-400/20 flex items-center gap-2 text-xs font-bold text-emerald-300 group-hover:text-teal-200 transition-colors">
              <span>Seamless Brand Parity</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 4: 48h Turnaround */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-[#1E293B]/85 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-sky-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:bg-slate-800/95 hover:border-sky-300/60 hover:shadow-[0_20px_45px_rgba(56,189,248,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400/25 via-blue-500/20 to-slate-700/40 border border-sky-300/40 flex items-center justify-center text-sky-200 group-hover:from-sky-400 group-hover:to-teal-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-sky-300 uppercase tracking-widest bg-sky-950/70 px-3 py-1 rounded-full border border-sky-400/40">
                  48h Turnaround
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-sky-200 transition-colors">
                Lightning Fast Delivery
              </h3>
              <p className="text-slate-200 text-base leading-relaxed max-w-lg">
                Submit a request and get it back in an average of 48 hours. We iterate rapidly until you are 100% satisfied with the result.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-sky-400/20 flex items-center gap-2 text-xs font-bold text-sky-300 group-hover:text-teal-200 transition-colors">
              <span>Rapid Iteration Process</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
