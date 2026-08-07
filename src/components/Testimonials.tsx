"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Working with them was a game-changer. They completely revitalized our web presence in just weeks.",
    author: "Sarah Jenkins",
    role: "CEO at Nexus Tech",
  },
  {
    quote: "The subscription model is genius. We get top-tier agency quality without the massive retainer fees and delays.",
    author: "Marcus Rivera",
    role: "Founder at Lumina",
  },
  {
    quote: "Consistently blown away by the quality and speed. Our conversions are up 40% since the redesign.",
    author: "Elena Rossi",
    role: "Director at Zenith",
  },
  {
    quote: "Their iterative process allowed us to see results quickly and refine to perfection without hassle.",
    author: "David Chen",
    role: "CMO at Aura Commerce",
  },
  {
    quote: "Unmatched attention to detail and a seamless workflow. They feel like an extension of our in-house team.",
    author: "Amira Patel",
    role: "Product Lead at Synth",
  },
  {
    quote: "Fast, reliable, and incredibly talented. They delivered exactly what we needed to scale our platform.",
    author: "Jason Wong",
    role: "VP Engineering at Vibe",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-[#FAF9FF] text-slate-900 px-4 lg:px-6 relative overflow-hidden font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] -left-28 w-[500px] h-[500px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[6%] -right-24 w-[480px] h-[480px] text-[#FF7700] opacity-75 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[28%] left-[7%] w-12 h-12 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <motion.svg
          animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[7%] w-10 h-10 text-[#FF7700] opacity-75 hidden lg:block"
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

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="mb-16 lg:mb-24 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm">
            TESTIMONIALS & REVIEWS →
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 mt-4 leading-none">
            Client <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Praise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden group text-slate-900"
            >
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#6528D9] via-[#FF5500] to-[#FF8800] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <Quote className="w-7 h-7 text-[#FF5500]" />
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="font-black text-sm text-slate-950 group-hover:text-[#6528D9] transition-colors">{t.author}</div>
                <div className="text-xs text-[#FF5500] font-black mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
