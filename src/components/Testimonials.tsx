"use client";
import { motion } from 'motion/react';
import { COLORS } from '@/constants';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Working with them was a game-changer. They completely revitalized our web presence in just weeks.",
    author: "Sarah Jenkins",
    role: "CEO at Nexus Tech",
    color: COLORS.green
  },
  {
    quote: "The subscription model is genius. We get top-tier agency quality without the massive retainer fees and delays.",
    author: "Marcus Rivera",
    role: "Founder at Lumina",
    color: COLORS.pink
  },
  {
    quote: "Consistently blown away by the quality and speed. Our conversions are up 40% since the redesign.",
    author: "Elena Rossi",
    role: "Director at Zenith",
    color: COLORS.yellow
  },
  {
    quote: "Their iterative process allowed us to see results quickly and refine to perfection without hassle.",
    author: "David Chen",
    role: "CMO at Aura Commerce",
    color: COLORS.blue
  },
  {
    quote: "Unmatched attention to detail and a seamless workflow. They feel like an extension of our in-house team.",
    author: "Amira Patel",
    role: "Product Lead at Synth",
    color: COLORS.purple
  },
  {
    quote: "Fast, reliable, and incredibly talented. They delivered exactly what we needed to scale our platform.",
    author: "Jason Wong",
    role: "VP Engineering at Vibe",
    color: COLORS.green
  }
];

import AnimatedSquiggles from './AnimatedSquiggles';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-[#0B0B0B] px-4 lg:px-6 border-t border-white/10 relative overflow-hidden">
      <AnimatedSquiggles />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16 lg:mb-24 text-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-[#D4AF37]">Wall of Love</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-4 leading-none">
            Client <span className="text-[#FF7F11]">Praise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="p-8 lg:p-10 luxury-card rounded-3xl relative flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div 
                  className="w-10 h-10 border border-[#D4AF37]/20 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center absolute -top-5 left-8 z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] text-[#D4AF37]"
                >
                  <Quote className="w-4 h-4 fill-current" />
                </div>
                <p className="text-base lg:text-lg font-medium leading-relaxed mb-8 mt-4 text-white">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div 
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 flex-shrink-0 flex items-center justify-center text-[#D4AF37] font-bold text-xs"
                >
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-extrabold uppercase tracking-wider text-xs text-white">{t.author}</div>
                  <div className="text-white/50 font-bold uppercase text-[10px] tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
