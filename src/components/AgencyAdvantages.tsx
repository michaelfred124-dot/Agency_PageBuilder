"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { RefreshCcw, HandCoins, Users, Rocket, ArrowRight } from 'lucide-react';

import ParallaxSectionBg from '@/components/ParallaxSectionBg';

export default function AgencyAdvantages() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 px-4 lg:px-6 relative overflow-hidden">
      
      {/* Floating Animated Gradient Glow Shapes in Background (Low Opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-[450px] h-[450px] bg-gradient-to-tr from-indigo-100/50 via-sky-100/35 to-teal-100/30 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[5%] w-[480px] h-[480px] bg-gradient-to-br from-teal-100/45 via-emerald-100/35 to-sky-100/30 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16 lg:mb-20 text-center items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-sky-700 bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            The Agency Advantage
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-none max-w-3xl">
            Why Companies Choose <br />
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">mfd.agency</span>
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
            className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-slate-900"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300 shadow-sm">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-sky-700 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  100% Flexible
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight mb-3 group-hover:text-sky-600 transition-colors">
                Pause or Cancel Anytime
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg font-medium">
                No long-term contracts. Don't have enough work for the month? Simply pause your subscription and resume whenever your brand needs fresh design iterations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-sky-700 group-hover:text-slate-950 transition-colors">
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
            className="md:col-span-5 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-slate-900"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300 shadow-sm">
                  <HandCoins className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Predictable Cost
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-3 group-hover:text-teal-600 transition-colors">
                Flat Monthly Rate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Pay the same fixed fee every month with zero hidden charges or surprise invoices.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-teal-700 group-hover:text-slate-950 transition-colors">
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
            className="md:col-span-5 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-slate-900"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Top Tier Talent
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-3 group-hover:text-emerald-600 transition-colors">
                Senior Talent Only
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                No junior handoffs. Every line of code and UI pixel is handled directly by experienced agency founders.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-slate-950 transition-colors">
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
            className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-slate-900"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                  Fast Turnaround
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight mb-3 group-hover:text-indigo-600 transition-colors">
                Lightning Fast Delivery
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg font-medium">
                Get layout revisions delivered within 48 hours on average. Continuous deployment pipelines mean your updates go live instantly.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-indigo-700 group-hover:text-slate-950 transition-colors">
              <span>Rapid Deployment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
