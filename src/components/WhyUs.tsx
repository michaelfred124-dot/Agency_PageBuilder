"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '@/constants';
import { X, Check, Info } from 'lucide-react';
import Link from 'next/link';

export default function WhyUs() {
  const [isDiyModalOpen, setIsDiyModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-32 bg-[#0B0B0B] px-4 lg:px-6 relative overflow-hidden border-t border-white/10 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
            The <span className="text-[#FF7F11]">Real</span> Cost
          </h2>
          <p className="text-base md:text-lg text-white/70 font-normal max-w-2xl mx-auto mt-4">
            How our website-as-a-service model stacks up against the usual suspects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto auto-rows-auto">
          {/* DIY Builders Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative group hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
          >
            <div className="h-48 overflow-hidden border-b border-white/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2676&auto=format&fit=crop" 
                alt="Frustrated building website" 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10">
                 <span className="text-[10px] border border-white/10 rounded-full px-3 py-1 bg-[#0B0B0B]/85 text-white tracking-widest uppercase font-bold shadow-lg">Wix / SqSpace</span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-6 relative z-10">
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">
                  DIY Builders
                </h3>
                <p className="text-white/50 text-sm font-normal mt-2">Cheap upfront, but you pay with your time.</p>
              </div>
              <ul className="space-y-4 relative z-10 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/30 mt-0.5">
                    <X className="w-3 h-3 text-red-500" strokeWidth={4} />
                  </div>
                  <span className="font-semibold text-white/80 text-sm">You do all the work & design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/30 mt-0.5">
                    <X className="w-3 h-3 text-red-500" strokeWidth={4} />
                  </div>
                  <span className="font-semibold text-white/80 text-sm">Cookie-cutter templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/30 mt-0.5">
                    <X className="w-3 h-3 text-red-500" strokeWidth={4} />
                  </div>
                  <span className="font-semibold text-white/80 text-sm">You don't actually own the code</span>
                </li>
              </ul>
              
              <button 
                onClick={() => setIsDiyModalOpen(true)}
                className="mt-auto flex items-center gap-2 justify-center w-full py-2.5 px-4 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full font-semibold uppercase tracking-wider text-xs transition-colors cursor-pointer"
              >
                <Info className="w-4 h-4" />
                Why not for businesses?
              </button>
            </div>
          </motion.div>

          {/* Our Model Card - Spans 2 rows and 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 lg:row-span-2 border border-[#D4AF37]/45 rounded-3xl p-8 lg:p-12 shadow-[0_0_50px_rgba(212,175,55,0.05)] flex flex-col relative z-20 overflow-hidden"
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.02)', 
              backgroundImage: `linear-gradient(to right, rgba(212, 175, 55, 0.1) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1.5px, transparent 1.5px)`,
              backgroundSize: '24px 24px'
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 relative z-10">
              <div>
                <div className="inline-block px-4 py-1.5 border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  Our Subscription
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
                  Websites <br className="hidden md:block" />never been easier
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-5xl font-black tracking-tight text-white">$50</div>
                <div className="text-white/70 font-bold uppercase tracking-wider text-xs">Upfront Cost</div>
              </div>
            </div>

            <div className="flex-grow grid sm:grid-cols-2 gap-8 items-center relative z-10">
              {/* Left Column: Positives List */}
              <ul className="space-y-3.5">
                {[
                  "100% Custom Design & Dev",
                  "Launch in 1-2 Weeks",
                  "Hosting & Security Included",
                  "Unlimited Edits & Updates",
                  "Technical SEO Built-in",
                  "You Own the Codebase",
                  "Cancel or Pause Anytime"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                      <Check className="w-4 h-4 text-[#D4AF37]" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-sm text-white">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Right Column: Visual Mockup for Positives */}
              <div className="flex justify-center sm:justify-end">
                <div className="w-full max-w-[340px] aspect-[4/3] bg-[#0B0B0B] border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <img 
                    src="/positives_preview.png" 
                    alt="Web speed and growth performance positives illustration" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 relative z-10 flex justify-center text-center">
              <Link 
                href="/pricing" 
                className="inline-block bg-gradient-to-r from-[#FF7F11] to-[#D4AF37] hover:opacity-90 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:-translate-y-0.5 transition-transform duration-300 shadow-lg shadow-orange-500/15"
              >
                View Plans & Get Started
              </Link>
            </div>
          </motion.div>

          {/* Traditional Agency Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative group hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
          >
            <div className="h-48 overflow-hidden border-b border-white/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
                alt="Traditional corporate agency" 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10">
                 <span className="text-[10px] border border-white/10 rounded-full px-3 py-1 bg-[#0B0B0B]/85 text-white tracking-widest uppercase font-bold shadow-lg">Traditional</span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-6 relative z-10">
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">
                  Agencies
                </h3>
                <p className="text-white/50 text-sm font-normal mt-2">Huge upfront costs and slow turnaround times.</p>
              </div>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/30 mt-0.5">
                    <X className="w-3 h-3 text-red-500" strokeWidth={4} />
                  </div>
                  <span className="font-semibold text-white/80 text-sm">$5k - $20k+ Upfront Cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/30 mt-0.5">
                    <X className="w-3 h-3 text-red-500" strokeWidth={4} />
                  </div>
                  <span className="font-semibold text-white/80 text-sm">Takes 2-4 Months to Launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/30 mt-0.5">
                    <X className="w-3 h-3 text-red-500" strokeWidth={4} />
                  </div>
                  <span className="font-semibold text-white/80 text-sm">Charge hourly for minor specific edits</span>
                </li>
              </ul>
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
              className="fixed inset-0 bg-[#0B0B0B]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto overflow-x-hidden text-white"
            >
              <button 
                onClick={() => setIsDiyModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 border border-white/10 rounded-full flex items-center justify-center bg-[#0B0B0B] hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" strokeWidth={3} />
              </button>

              <div className="mb-8 pr-12">
                <h3 className="text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
                  Why DIY Builders Fall Short <br/><span className="text-red-500">for Small Businesses</span>
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-2 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                    You Don't Own Your Asset
                  </h4>
                  <p className="text-white/60 text-sm font-normal">
                    When you build on Wix or Squarespace, you are renting. You cannot export your code to another host. If they raise their prices or delete your account, your entire website is gone.
                  </p>
                </div>

                <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-2 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                    Poor SEO & Performance
                  </h4>
                  <p className="text-white/60 text-sm font-normal">
                    DIY builders are notoriously slow. They inject bloat into your site's code to make their visual builders work, dragging down your loading speeds—a critical ranking factor for Google SEO.
                  </p>
                </div>

                <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-2 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                    The "Hidden" Cost of Your Time
                  </h4>
                  <p className="text-white/60 text-sm font-normal">
                    They say it's easy, but you'll spend weeks pushing pixels around just to make a button align correctly on mobile. Your time is better spent running your business, not fighting with templates.
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
