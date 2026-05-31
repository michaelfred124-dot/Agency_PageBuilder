"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { COLORS } from '@/constants';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 lg:py-36 px-6 border-y-2 border-zinc-950 relative overflow-hidden bg-[#4353FF]">
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-cta" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase tracking-tight text-white leading-none">
            Ready to <br/>Level Up?
          </h2>
          <p className="text-base lg:text-lg font-normal text-white/90 max-w-xl mx-auto leading-relaxed">
            Join the agency revolution. Get high-end design without the endless overhead.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/pricing" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-950 hover:bg-zinc-50 border-2 border-zinc-950 text-sm font-semibold rounded-full shadow-[4px_4px_0px_rgba(9,9,11,1)] transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                See Pricing
                <ArrowRight className="w-4 h-4 text-zinc-950" strokeWidth={2.5} />
              </motion.button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-zinc-950 text-white hover:bg-zinc-900 border-2 border-zinc-950 text-sm font-semibold rounded-full shadow-[4px_4px_0px_rgba(255,255,255,1)] transition-all inline-flex items-center justify-center cursor-pointer"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
