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
    <section className="py-20 lg:py-32 bg-[#080B12] text-white px-4 lg:px-6 relative overflow-hidden">
      
      {/* Full-Section Real Photographic Background with Parallax */}
      <ParallaxSectionBg 
        src="/features_nature_bg.jpg" 
        alt="Misty Forest Background"
        opacity={0.82}
        overlayGradient="from-[#080B12] via-transparent to-[#080B12]"
      />

      {/* Alternating Cyan & Sapphire Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-cyan-400/25 via-sky-500/20 to-blue-600/20 blur-[170px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-sky-950/70 px-3.5 py-1.5 rounded-full border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-4">
            Common <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border border-sky-400/30 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-[#1E293B]/85 backdrop-blur-xl transition-all duration-300 shadow-xl hover:border-sky-300/60 hover:shadow-[0_15px_35px_rgba(56,189,248,0.18)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 lg:p-8 flex justify-between items-center text-left cursor-pointer hover:bg-slate-800/50 transition-colors"
              >
                <h3 className="text-lg lg:text-xl font-bold tracking-tight pr-8 text-white">
                  {faq.question}
                </h3>
                <div 
                  className="w-8 h-8 flex-shrink-0 rounded-full border border-sky-300/40 flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-sky-400/25 via-teal-400/20 to-blue-500/30 text-sky-200 shadow-sm"
                >
                  {openIndex === index ? <Minus className="w-4 h-4 text-sky-300" strokeWidth={2.5} /> : <Plus className="w-4 h-4 text-sky-300" strokeWidth={2.5} />}
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
                    <div className="p-6 lg:p-8 pt-0 text-sm lg:text-base font-normal text-slate-200 leading-relaxed border-t border-sky-400/20 mt-2">
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
