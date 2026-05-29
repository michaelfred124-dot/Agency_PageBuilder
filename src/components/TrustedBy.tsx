"use client";
import { motion } from 'motion/react';
import { COLORS } from '@/constants';

const LOGOS = [
  "Acme Corp", "Global Tech", "Stark Ind.", "Wayne Ent.", "Cyberdyne", "Umbrella", "Initech", "Soylent", "Massive Dynamic"
];

export default function TrustedBy() {
  return (
    <div className="py-6 lg:py-8 border-y-[6px] lg:border-y-8 border-black bg-white overflow-hidden relative flex whitespace-nowrap" style={{ backgroundColor: COLORS.yellow }}>
      <motion.div
         className="flex gap-12 lg:gap-24 px-6 items-center w-max"
         animate={{ x: ["0%", "-50%"] }}
         transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
          <span 
            key={i} 
            className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-black/80"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
