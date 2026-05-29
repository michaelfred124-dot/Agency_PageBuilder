"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '@/constants';
import { X, Check, Info } from 'lucide-react';
import Link from 'next/link';

export default function WhyUs() {
  const [isDiyModalOpen, setIsDiyModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-32 bg-[#F1EDE1] px-4 lg:px-6 relative overflow-hidden border-t-[6px] lg:border-t-8 border-black z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">
            The <span style={{ color: COLORS.green }}>Real</span> Cost
          </h2>
          <p className="text-xl text-black/80 font-medium max-w-2xl mx-auto mt-4">
            How our website-as-a-service model stacks up against the usual suspects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto auto-rows-auto">
          {/* DIY Builders Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 bg-white border-[6px] border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_rgba(34,34,34,1)] flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="h-48 overflow-hidden border-b-[6px] border-black">
              <img 
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2676&auto=format&fit=crop" 
                alt="Frustrated building website" 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10">
                 <span className="text-[10px] border-[3px] border-black rounded-full px-3 py-1 bg-white text-black tracking-widest uppercase font-black">Wix / SqSpace</span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-black">
                  DIY Builders
                </h3>
                <p className="text-black/60 font-medium mt-2">Cheap upfront, but you pay with your time.</p>
              </div>
              <ul className="space-y-4 relative z-10 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 border-2 border-red-500">
                    <X className="w-4 h-4 text-red-600" strokeWidth={4} />
                  </div>
                  <span className="font-bold text-black/80">You do all the work & design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 border-2 border-red-500">
                    <X className="w-4 h-4 text-red-600" strokeWidth={4} />
                  </div>
                  <span className="font-bold text-black/80">Cookie-cutter templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 border-2 border-red-500">
                    <X className="w-4 h-4 text-red-600" strokeWidth={4} />
                  </div>
                  <span className="font-bold text-black/80">You don't actually own the code</span>
                </li>
              </ul>
              
              <button 
                onClick={() => setIsDiyModalOpen(true)}
                className="mt-auto flex items-center gap-2 justify-center w-full py-3 px-4 border-[3px] border-black rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-[#F1EDE1] transition-colors"
              >
                <Info className="w-5 h-5" />
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
            className="lg:col-span-2 lg:row-span-2 border-[8px] border-black rounded-[32px] p-8 lg:p-12 shadow-[16px_16px_0px_rgba(34,34,34,1)] flex flex-col relative z-20 overflow-hidden"
            style={{ backgroundColor: COLORS.green }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 relative z-10">
              <div>
                <div className="inline-block px-4 py-1.5 border-[3px] border-black rounded-full bg-white text-black text-sm font-black uppercase tracking-widest mb-4">
                  Our Subscription
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
                  Websites <br className="hidden md:block" />never been easier
                </h3>
              </div>
              <div className="text-right">
                <div className="text-5xl font-black tracking-tighter text-black">$50</div>
                <div className="text-black/80 font-bold uppercase tracking-widest text-sm">Upfront Cost</div>
              </div>
            </div>

            <div className="flex-grow grid sm:grid-cols-2 gap-6 relative z-10">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-black" strokeWidth={4} />
                  </div>
                  <span className="font-black text-lg text-black">100% Custom Design & Dev</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-black" strokeWidth={4} />
                  </div>
                  <span className="font-black text-lg text-black">Launch in 1-2 Weeks</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-black" strokeWidth={4} />
                  </div>
                  <span className="font-black text-lg text-black">Hosting & Security Included</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-black" strokeWidth={4} />
                  </div>
                  <span className="font-black text-lg text-black">Unlimited Edits & Updates</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-black" strokeWidth={4} />
                  </div>
                  <span className="font-black text-lg text-black">Technical SEO Built-in</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-black" strokeWidth={4} />
                  </div>
                  <span className="font-black text-lg text-black">You Own the Codebase</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-[3px] border-black flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-black" strokeWidth={4} />
                  </div>
                  <span className="font-black text-lg text-black">Cancel or Pause Anytime</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t-[4px] border-black/10 relative z-10 flex justify-center text-center">
              <Link 
                href="/pricing" 
                className="inline-block bg-black text-white px-6 md:px-8 py-4 md:py-5 border-[4px] border-black rounded-full font-black uppercase tracking-widest text-base md:text-lg hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_rgba(255,255,255,1)]"
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
            className="col-span-1 bg-white border-[6px] border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_rgba(34,34,34,1)] flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="h-48 overflow-hidden border-b-[6px] border-black">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
                alt="Traditional corporate agency" 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10">
                 <span className="text-[10px] border-[3px] border-black rounded-full px-3 py-1 bg-white text-black tracking-widest uppercase font-black">Traditional</span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-black">
                  Agencies
                </h3>
                <p className="text-black/60 font-medium mt-2">Huge upfront costs and slow turnaround times.</p>
              </div>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 border-2 border-red-500">
                    <X className="w-4 h-4 text-red-600" strokeWidth={4} />
                  </div>
                  <span className="font-bold text-black/80">$5k - $20k+ Upfront Cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 border-2 border-red-500">
                    <X className="w-4 h-4 text-red-600" strokeWidth={4} />
                  </div>
                  <span className="font-bold text-black/80">Takes 2-4 Months to Launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 border-2 border-red-500">
                    <X className="w-4 h-4 text-red-600" strokeWidth={4} />
                  </div>
                  <span className="font-bold text-black/80">Charge hourly for minor specific edits</span>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl bg-[#F1EDE1] border-[6px] border-black rounded-[32px] p-8 shadow-[16px_16px_0px_rgba(34,34,34,1)] flex flex-col max-h-[90vh] overflow-y-auto overflow-x-hidden"
            >
              <button 
                onClick={() => setIsDiyModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 border-4 border-black rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={3} />
              </button>

              <div className="mb-8 pr-12">
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black leading-tight">
                  Why DIY Builders Fall Short <br/><span className="text-red-500">for Small Businesses</span>
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_rgba(34,34,34,1)]">
                  <h4 className="text-xl font-black uppercase tracking-tight text-black mb-2 flex items-center gap-2">
                    <X className="w-6 h-6 text-red-500" strokeWidth={4} />
                    You Don't Own Your Asset
                  </h4>
                  <p className="text-black/70 font-medium">
                    When you build on Wix or Squarespace, you are renting. You cannot export your code to another host. If they raise their prices or delete your account, your entire website is gone.
                  </p>
                </div>

                <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_rgba(34,34,34,1)]">
                  <h4 className="text-xl font-black uppercase tracking-tight text-black mb-2 flex items-center gap-2">
                    <X className="w-6 h-6 text-red-500" strokeWidth={4} />
                    Poor SEO & Performance
                  </h4>
                  <p className="text-black/70 font-medium">
                    DIY builders are notoriously slow. They inject bloat into your site's code to make their visual builders work, dragging down your loading speeds—a critical ranking factor for Google SEO.
                  </p>
                </div>

                <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_rgba(34,34,34,1)]">
                  <h4 className="text-xl font-black uppercase tracking-tight text-black mb-2 flex items-center gap-2">
                    <X className="w-6 h-6 text-red-500" strokeWidth={4} />
                    The "Hidden" Cost of Your Time
                  </h4>
                  <p className="text-black/70 font-medium">
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
