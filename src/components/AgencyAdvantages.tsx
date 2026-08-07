"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { RefreshCcw, HandCoins, Users, Rocket, ArrowRight } from 'lucide-react';

import ParallaxSectionBg from '@/components/ParallaxSectionBg';

export default function AgencyAdvantages() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9FF] text-slate-900 px-4 lg:px-6 relative overflow-hidden font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-28 w-[500px] h-[500px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 6, 0], scale: [1, 1.05, 1] }}
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
          className="absolute top-[30%] left-[7%] w-12 h-12 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <motion.svg
          animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] right-[8%] w-10 h-10 text-[#FF7700] opacity-75 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        >
          <polygon points="50,10 90,85 10,85" />
        </motion.svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[20%] right-[3%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[18%] left-[3%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16 lg:mb-20 text-center items-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm">
            THE AGENCY ADVANTAGE <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-none max-w-3xl">
            Why Companies Choose <br />
            <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">mfd.agency</span>
          </h2>
          <p className="max-w-xl text-slate-600 text-base md:text-lg font-medium pt-2">
            Experience the speed and polish of a dedicated design agency without traditional overhead or long timeline delays.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Pause or Cancel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-slate-900"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6528D9] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6528D9] group-hover:bg-[#6528D9] group-hover:text-white transition-all duration-300 shadow-sm">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black text-[#6528D9] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  100% Flexible
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-black text-slate-950 tracking-tight mb-3 group-hover:text-[#6528D9] transition-colors">
                Pause or Cancel Anytime
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg font-medium">
                No long-term contracts. Don't have enough work for the month? Simply pause your subscription and resume whenever your brand needs fresh design iterations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#6528D9] group-hover:text-[#FF5500] transition-colors">
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
            className="md:col-span-5 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-slate-900"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF7700] to-[#FFB703] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-all duration-300 shadow-sm">
                  <HandCoins className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black text-[#FF5500] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  Predictable Cost
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-3 group-hover:text-[#FF5500] transition-colors">
                Flat Monthly Rate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Pay the same fixed fee every month with zero hidden charges or surprise invoices.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#FF5500] group-hover:text-[#6528D9] transition-colors">
              <span>Transparent Pricing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: Senior Designers Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-slate-900"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6528D9] to-[#FF5500] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6528D9] group-hover:bg-[#6528D9] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black text-[#6528D9] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  Top Tier Talent
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-3 group-hover:text-[#6528D9] transition-colors">
                Senior Talent Only
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                No junior handoffs. Every line of code and UI pixel is handled directly by experienced agency founders.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#6528D9] group-hover:text-[#FF5500] transition-colors">
              <span>Expert Craftsmanship</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 4: Lightning Speed Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-slate-900"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF7700] to-[#6528D9] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black text-[#FF5500] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  Fast Turnaround
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-black text-slate-950 tracking-tight mb-3 group-hover:text-[#FF5500] transition-colors">
                Lightning Fast Delivery
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg font-medium">
                Get layout revisions delivered within 48 hours on average. Continuous deployment pipelines mean your updates go live instantly.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#FF5500] group-hover:text-[#6528D9] transition-colors">
              <span>Rapid Deployment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
