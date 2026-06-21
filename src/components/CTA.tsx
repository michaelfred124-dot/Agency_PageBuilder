"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { COLORS } from '@/constants';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 lg:py-36 px-6 border-y border-white/10 relative overflow-hidden bg-[#0B0B0B]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(255,127,17,0.1),rgba(212,175,55,0.05),transparent)] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-cta" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />
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
            Ready to <br/><span className="luxury-gradient-text">Level Up?</span>
          </h2>
          <p className="text-base lg:text-lg font-normal text-white/70 max-w-xl mx-auto leading-relaxed">
            Join the agency revolution. Get high-end design without the endless overhead.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/pricing" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF7F11] to-[#D4AF37] hover:opacity-90 text-white text-sm font-bold rounded-full shadow-lg shadow-orange-500/15 transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                See Pricing
                <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
              </motion.button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-[#121212] text-white hover:bg-white/5 border border-white/10 text-sm font-bold rounded-full shadow-lg transition-all inline-flex items-center justify-center cursor-pointer"
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
