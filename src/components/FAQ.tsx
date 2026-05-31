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
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-zinc-400">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 mt-4">
            Common <span style={{ color: COLORS.green }}>Questions</span>
          </h2>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -2, x: -2, boxShadow: `6px 6px 0px rgba(9,9,11,1)` }}
              transition={{ duration: 0.2 }}
              className="border-2 border-zinc-950 rounded-2xl overflow-hidden bg-white shadow-[4px_4px_0px_rgba(9,9,11,1)] transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 lg:p-8 flex justify-between items-center text-left cursor-pointer"
              >
                <h3 className="text-lg lg:text-2xl font-extrabold tracking-tight pr-8 text-zinc-950">
                  {faq.question}
                </h3>
                <div 
                  className="w-8 h-8 flex-shrink-0 rounded-full border-2 border-zinc-950 flex items-center justify-center transition-transform duration-300 shadow-[1.5px_1.5px_0px_rgba(9,9,11,1)]"
                  style={{ 
                    backgroundColor: openIndex === index ? COLORS.pink : 'transparent',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  {openIndex === index ? <Minus className="w-4 h-4 text-zinc-950" strokeWidth={2.5} /> : <Plus className="w-4 h-4 text-zinc-950" strokeWidth={2.5} />}
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
                    <div className="p-6 lg:p-8 pt-0 text-sm lg:text-base font-normal text-zinc-650 leading-relaxed border-t-2 border-zinc-950 mt-4">
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
