"use client";
import { motion } from 'motion/react';
import { COLORS } from '@/constants';
import Link from 'next/link';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Subscribe & Request',
    description: 'Choose a plan and gain immediate access to your dedicated project board. Invite your team and start adding as many design and development requests as you need.',
    color: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop'
  },
  {
    num: '02',
    title: 'Design & Iterate',
    description: 'We pick up your first request and get to work. You\'ll receive initial design concepts within an average of 48 hours. We revise and refine until you are 100% satisfied.',
    color: '#2DD4BF',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop'
  },
  {
    num: '03',
    title: 'Develop & Deploy',
    description: 'Once approved, our team builds your request using modern tech stacks (React, Next.js, Tailwind). We ensure it is lightning fast, accessible, and perfectly responsive.',
    color: '#34D399',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    num: '04',
    title: 'Manage & Scale',
    description: 'Launch your website with total peace of mind. We handle hosting, continuous performance monitoring, updates, and maintenance so you can focus on growing your business.',
    color: '#60A5FA',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-[#080B12] text-white px-4 lg:px-6 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-sky-500/20 via-teal-400/18 to-emerald-400/15 rounded-full pointer-events-none z-0 border border-white/50 shadow-[0_0_50px_rgba(186,230,253,0.3)]" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="flex flex-col mb-16 lg:mb-24 text-center items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-white bg-white/10 px-3.5 py-1.5 rounded-full border border-white/25 shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none max-w-4xl">
            How We <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed font-normal mt-4">
            We offer an alternative to unpredictable freelancers and expensive traditional agencies. Pay a flat monthly fee and get unlimited design and development requests delivered sequentially.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-24">
          <div className="flex flex-col space-y-16 lg:space-y-24">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className={`relative flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/2 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/25 shadow-[0_15px_35px_rgba(0,0,0,0.5)] group"
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/30 to-transparent" />
                  
                  {/* Step Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-xl flex items-center justify-center font-black text-lg text-white shadow-lg">
                    {step.num}
                  </div>
                </motion.div>

                {/* Content Glass Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-full lg:w-1/2 p-8 lg:p-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/25 shadow-[0_15px_35px_rgba(0,0,0,0.4)] relative overflow-hidden"
                >
                  {/* Top Light Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                  <span className="text-xs font-extrabold uppercase tracking-widest text-white/80 mb-2 block">
                    Step {step.num}
                  </span>
                  
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-20 flex justify-center">
          <Link href="/pricing">
            <button className="px-8 py-4 bg-white hover:bg-white/90 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105 cursor-pointer">
              View Pricing & Plans
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
