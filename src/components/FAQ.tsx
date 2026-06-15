"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { COLORS } from '@/constants';

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

import AnimatedSquiggles from './AnimatedSquiggles';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-[#0B0B0B] px-4 lg:px-6 relative overflow-hidden">
      <AnimatedSquiggles />
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-[#D4AF37]">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-4">
            Common <span className="text-[#FF7F11]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 lg:p-8 flex justify-between items-center text-left cursor-pointer"
              >
                <h3 className="text-lg lg:text-2xl font-extrabold tracking-tight pr-8 text-white">
                  {faq.question}
                </h3>
                <div 
                  className="w-8 h-8 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: openIndex === index ? '#D4AF37' : 'transparent',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    boxShadow: openIndex === index ? '0 0 15px rgba(212,175,55,0.3)' : 'none'
                  }}
                >
                  {openIndex === index ? <Minus className="w-4 h-4 text-[#0B0B0B]" strokeWidth={2.5} /> : <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />}
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
                    <div className="p-6 lg:p-8 pt-0 text-sm lg:text-base font-normal text-white/70 leading-relaxed border-t border-white/10 mt-4">
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
