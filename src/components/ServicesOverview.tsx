"use client";
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES, COLORS } from '@/constants';
import Link from 'next/link';

import AnimatedSquiggles from './AnimatedSquiggles';

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white px-4 lg:px-6 relative overflow-hidden">
      <AnimatedSquiggles />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Services</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-[0.9]">
              What We <br />Offer
            </h2>
          </div>
          <p className="max-w-xl text-black/60 text-lg lg:text-xl leading-relaxed font-medium">
            We provide high-end, bespoke web design and development. No templates, no off-the-shelf solutions. Every pixel is crafted with intention to make you stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((skill, i) => {
            const Icon = (LucideIcons as any)[skill.icon];
            return (
              <motion.div 
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, x: -6, boxShadow: `14px 14px 0px ${COLORS.black}` }}
                className="p-8 lg:p-10 rounded-[24px] lg:rounded-[32px] border-4 lg:border-[6px] border-black transition-all duration-300 group scroll-mt-32"
                style={{ 
                  backgroundColor: COLORS.offWhite,
                  boxShadow: `8px 8px 0px ${COLORS.black}`,
                }}
              >
                <div 
                  className="mb-8 p-4 rounded-2xl w-fit border-[4px] border-black group-hover:scale-110 transition-transform shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] duration-300"
                  style={{ backgroundColor: skill.color }}
                >
                  {Icon && <Icon className="w-8 h-8 text-black" />}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-black">
                  {skill.title}
                </h3>
                <p className="text-black/70 font-medium leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Link href="/process">
            <motion.div
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="px-12 py-5 bg-black text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-[10px_10px_0px_rgba(34,34,34,0.2)] hover:shadow-[15px_15px_0px_rgba(34,34,34,0.3)] transition-all inline-block"
            >
              See Our Process
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
