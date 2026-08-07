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
    <section className="py-20 lg:py-32 bg-[#FAF9FF] text-slate-900 px-4 lg:px-6 relative overflow-hidden font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-28 w-[500px] h-[500px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
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
          className="absolute top-[28%] right-[7%] w-12 h-12 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <motion.svg
          animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[7%] w-10 h-10 text-[#FF7700] opacity-75 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        >
          <polygon points="50,10 90,85 10,85" />
        </motion.svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[15%] right-[4%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[15%] left-[4%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm">
            FREQUENTLY ASKED QUESTIONS →
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 mt-4 leading-none">
            Common <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`border rounded-3xl overflow-hidden bg-white transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#6528D9] shadow-xl ring-2 ring-[#6528D9]/10' 
                  : 'border-slate-200/80 shadow-sm hover:shadow-md'
              } text-slate-900`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 lg:p-8 flex justify-between items-center text-left cursor-pointer transition-colors"
              >
                <h3 className={`text-lg lg:text-xl font-black tracking-tight pr-8 transition-colors ${openIndex === index ? 'text-[#6528D9]' : 'text-slate-950'}`}>
                  {faq.question}
                </h3>
                <div 
                  className={`w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                    openIndex === index 
                      ? 'bg-[#FF5500] text-white' 
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {openIndex === index ? <Minus className="w-4 h-4 text-white" strokeWidth={3} /> : <Plus className="w-4 h-4 text-slate-900" strokeWidth={3} />}
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
