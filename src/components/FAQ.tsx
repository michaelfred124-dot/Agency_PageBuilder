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
    <section className="py-20 lg:py-32 bg-white px-4 lg:px-6 relative overflow-hidden">
      <AnimatedSquiggles />
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">FAQ</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black mt-4">
            Common <span style={{ color: COLORS.green }}>Questions</span>
          </h2>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -4, x: -4, boxShadow: `12px 12px 0px rgba(34,34,34,1)` }}
              transition={{ duration: 0.2 }}
              className="border-[4px] lg:border-[6px] border-black rounded-[24px] lg:rounded-[32px] overflow-hidden bg-white shadow-[8px_8px_0px_rgba(34,34,34,1)] transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 lg:p-8 flex justify-between items-center text-left"
              >
                <h3 className="text-xl lg:text-3xl font-black uppercase tracking-tighter pr-8 text-black">
                  {faq.question}
                </h3>
                <div 
                  className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 rounded-full border-4 border-black flex items-center justify-center transition-transform duration-300"
                  style={{ 
                    backgroundColor: openIndex === index ? COLORS.pink : 'transparent',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  {openIndex === index ? <Minus className="w-6 h-6 text-black" strokeWidth={4} /> : <Plus className="w-6 h-6 text-black" strokeWidth={4} />}
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
                    <div className="p-6 lg:p-8 pt-0 text-base lg:text-xl font-medium text-black/70 leading-relaxed border-t-[4px] lg:border-t-[6px] border-black mt-4">
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
