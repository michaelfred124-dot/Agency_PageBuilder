"use client";
import { motion } from 'motion/react';
import { COLORS } from '@/constants';

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
    <section className="py-20 lg:py-32 bg-white px-4 lg:px-6 border-t-[6px] lg:border-t-8 border-black relative overflow-hidden">
      <AnimatedSquiggles />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16 lg:mb-24 text-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Wall of Love</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black mt-4 leading-[0.9]">
            Client <span style={{ color: COLORS.purple }}>Praise</span>
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
              whileHover={{ y: -8, x: -8, boxShadow: `18px 18px 0px ${COLORS.black}` }}
              className="p-8 lg:p-10 border-[6px] border-black rounded-[24px] lg:rounded-[32px] bg-white relative flex flex-col justify-between transition-all duration-300 group"
              style={{ boxShadow: `10px 10px 0px ${COLORS.black}` }}
            >
              <div>
                <div 
                  className="text-6xl font-black mb-4 absolute -top-8 left-8 px-2 bg-white border-[6px] border-black rounded-full w-16 h-16 flex items-center justify-center leading-none z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: t.color }}
                >
                  <span className="mt-8">"</span>
                </div>
                <p className="text-xl lg:text-2xl font-bold leading-relaxed mb-8 mt-4 uppercase tracking-tighter text-black">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 border-t-[6px] border-black/10 pt-6">
                <div 
                  className="w-12 h-12 rounded-full border-4 border-black flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                />
                <div>
                  <div className="font-black uppercase tracking-widest text-sm">{t.author}</div>
                  <div className="text-black/50 font-bold uppercase text-xs tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
