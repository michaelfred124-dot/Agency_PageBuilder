"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer: "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize."
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
  },
  {
    question: "How fast will I receive my designs?",
    answer: "On average, most requests are completed in just two days or less. However, more complex requests can take longer."
  },
  {
    question: "What if I don't like the design?",
    answer: "No worries! We'll continue to revise the design until you're 100% satisfied. We won't stop until it's perfect."
  }
];

import ParallaxSectionBg from '@/components/ParallaxSectionBg';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC] text-slate-900 px-4 lg:px-6 relative overflow-hidden">
      
      {/* Floating Animated Gradient Glow Shapes in Background (Low Opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-gradient-to-tr from-sky-100/50 via-teal-100/35 to-indigo-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(186,230,253,0.3)]"
        />
        <motion.div 
          animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] w-[480px] h-[480px] bg-gradient-to-br from-teal-100/40 via-emerald-100/35 to-sky-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(167,243,208,0.3)]"
        />
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-sky-700 bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mt-4">
            Common <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md text-slate-900"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 lg:p-8 flex justify-between items-center text-left cursor-pointer transition-colors"
              >
                <h3 className="text-lg lg:text-xl font-extrabold tracking-tight pr-8 text-slate-950">
                  {faq.question}
                </h3>
                <div 
                  className="w-8 h-8 flex-shrink-0 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 bg-slate-50 text-slate-700 shadow-sm"
                >
                  {openIndex === index ? <Minus className="w-4 h-4 text-slate-900" strokeWidth={2.5} /> : <Plus className="w-4 h-4 text-slate-900" strokeWidth={2.5} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 lg:p-8 pt-0 text-sm lg:text-base font-medium text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
