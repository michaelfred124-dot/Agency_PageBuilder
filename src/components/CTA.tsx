"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { COLORS } from '@/constants';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 lg:py-40 px-4 lg:px-6 border-y-[6px] lg:border-y-8 border-black relative overflow-hidden" style={{ backgroundColor: COLORS.blue }}>
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="black" strokeWidth="4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-black uppercase tracking-tighter text-black leading-[0.85] mb-12 drop-shadow-[5px_5px_0px_rgba(255,255,255,1)] lg:drop-shadow-[15px_15px_0px_rgba(255,255,255,1)]">
            Ready to <br/>Level Up?
          </h2>
          <p className="text-xl lg:text-3xl font-bold text-black/80 max-w-3xl mx-auto mb-16 leading-relaxed">
            Join the agency revolution. Get high-end design without the endless overhead.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8">
            <Link href="/pricing">
              <motion.button 
                whileHover={{ scale: 1.05, translateY: -5, boxShadow: `12px 12px 0px rgba(255,255,255,1)` }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-5 lg:px-12 lg:py-6 bg-black text-white text-lg lg:text-2xl font-black uppercase tracking-[0.2em] rounded-3xl lg:rounded-[32px] shadow-[8px_8px_0px_rgba(255,255,255,1)] transition-all inline-flex items-center justify-center gap-4 lg:gap-6 group"
              >
                See Pricing
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center group-hover:translate-x-2 transition-transform shrink-0">
                  <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 text-black" strokeWidth={4} />
                </div>
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, translateY: -5, boxShadow: `12px 12px 0px rgba(0,0,0,1)` }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-5 lg:px-12 lg:py-6 bg-white border-[6px] lg:border-8 border-black text-black text-lg lg:text-2xl font-black uppercase tracking-[0.2em] rounded-3xl lg:rounded-[32px] shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all inline-flex items-center justify-center gap-4 lg:gap-6 group"
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
