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
    <section id="process" className="py-20 lg:py-32 bg-[#FAF9FF] text-slate-900 px-4 lg:px-6 relative overflow-hidden font-sans">
      
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-28 w-[520px] h-[520px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] -right-24 w-[480px] h-[480px] text-[#FF7700] opacity-75 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[25%] left-[6%] w-14 h-14 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <motion.svg
          animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[22%] right-[7%] w-12 h-12 text-[#FF7700] opacity-75 hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        >
          <polygon points="50,10 90,85 10,85" />
        </motion.svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[15%] right-[4%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[18%] left-[3%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="flex flex-col mb-16 lg:mb-24 text-center items-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm mb-4">
            THE PROCESS →
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-none max-w-4xl">
            How We <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed font-medium mt-4">
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
                  className="w-full lg:w-1/2 relative aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group"
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Step Badge in Orange */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-[#FF5500] text-white flex items-center justify-center font-black text-lg shadow-lg">
                    {step.num}
                  </div>
                </motion.div>

                {/* Content Card in Deep Purple */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-full lg:w-1/2 p-8 lg:p-10 bg-purple-vibrant rounded-3xl text-white border border-[#7C3AED] shadow-2xl relative overflow-hidden"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-[#FFB703] mb-2 block">
                    Step {step.num}
                  </span>
                  
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-purple-100 text-sm md:text-base leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

        {/* Action Button (Orange Pill Gradient CTA) */}
        <div className="mt-20 flex justify-center">
          <Link href="/pricing">
            <button className="btn-orange-pill px-9 py-4 text-white font-black text-xs uppercase tracking-widest rounded-full cursor-pointer shadow-xl">
              View Pricing & Plans
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
