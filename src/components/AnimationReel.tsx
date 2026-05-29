"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Link from 'next/link';
import { COLORS } from '@/constants';

const MotionLink = motion.create(Link);

export default function AnimationReel() {
  return (
    <section id="animation" className="py-20 lg:py-32 bg-black px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col space-y-4 mb-12 lg:mb-20">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-white/40">Portfolio</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            Animation<br />Reel 2025
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video max-w-5xl mx-auto rounded-[32px] lg:rounded-[48px] overflow-hidden border-[8px] lg:border-[12px] border-white/10 shadow-[20px_20px_0px_rgba(255,255,255,0.05)]"
        >
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1045913069?h=7b2f6ff5cb"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-white/60 text-lg lg:text-xl font-medium max-w-2xl italic">
            "A showcase of character performance, physical mechanics, and visual storytelling."
          </p>
          <MotionLink 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl shadow-[8px_8px_0px_rgba(255,255,255,0.2)]"
          >
            Hire Me
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
