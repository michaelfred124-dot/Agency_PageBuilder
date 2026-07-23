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
    <section className="py-20 lg:py-32 bg-[#080B12] text-white px-4 lg:px-6 relative overflow-hidden">
      
      {/* Alternating Violet & Sky Blue Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-purple-600/20 via-sky-500/20 to-indigo-500/20 blur-[170px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="mb-16 lg:mb-24 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-sky-950/70 px-3.5 py-1.5 rounded-full border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Wall of Love
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-4 leading-none">
            Client <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Praise</span>
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
              className="p-8 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-[#1E293B]/85 backdrop-blur-xl rounded-3xl border border-sky-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:bg-slate-800/95 hover:border-sky-300/60 hover:shadow-[0_20px_45px_rgba(56,189,248,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <Quote className="w-6 h-6 text-sky-300" />
                <p className="text-slate-200 text-sm font-normal leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-sky-400/20">
                <div className="font-bold text-sm text-white group-hover:text-sky-200 transition-colors">{t.author}</div>
                <div className="text-xs text-sky-300 font-semibold mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
