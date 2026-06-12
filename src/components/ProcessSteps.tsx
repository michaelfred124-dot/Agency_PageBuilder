"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { COLORS } from '@/constants';
import Link from 'next/link';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Subscribe & Request',
    description: 'Choose a plan and gain immediate access to your dedicated project board. Invite your team and start adding as many design and development requests as you need.',
    color: COLORS.green,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop'
  },
  {
    num: '02',
    title: 'Design & Iterate',
    description: 'We pick up your first request and get to work. You\'ll receive initial design concepts within an average of 48 hours. We revise and refine until you are 100% satisfied.',
    color: COLORS.blue,
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop'
  },
  {
    num: '03',
    title: 'Develop & Deploy',
    description: 'Once approved, our team builds your request using modern tech stacks (React, Next.js, Tailwind). We ensure it is lightning fast, accessible, and perfectly responsive.',
    color: COLORS.pink,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    num: '04',
    title: 'Manage & Scale',
    description: 'Your polished site goes live. Keep your subscription active to seamlessly request new pages, continuous updates, technical SEO improvements, and ongoing maintenance.',
    color: COLORS.purple,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    num: '05',
    title: 'Own Your Code',
    description: 'After 1 year of continuous service, the choice is yours. Keep your subscription for hands-off management, or export your entire codebase and take full ownership of your site.',
    color: COLORS.orange,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-transparent px-4 lg:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex flex-col mb-16 lg:mb-24 text-center items-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-zinc-400 mb-4">The Process</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 leading-none max-w-4xl">
            How We <br />Work
          </h2>
          <p className="max-w-2xl text-zinc-600 text-base md:text-lg leading-relaxed font-normal mt-6">
            We offer an alternative to unpredictable freelancers and expensive traditional agencies. Pay a flat monthly fee and get unlimited design and development requests delivered sequentially.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-24">
          {/* Swirly Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-16 -translate-x-1/2 z-0">
             <svg width="100%" height="100%">
              <defs>
                <pattern id="swirl" x="0" y="0" width="64" height="128" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 Q 64 32 32 64 T 32 128" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="64" height="100%" fill="url(#swirl)" />
             </svg>
          </div>

          <div className="flex flex-col space-y-16 lg:space-y-24">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className={`relative flex flex-col lg:flex-row items-center w-full gap-6 lg:gap-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot (Desktop Only) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-zinc-950 bg-white z-10 items-center justify-center shadow-[1.5px_1.5px_0px_rgba(9,9,11,1)]">
                  <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: step.color }} />
                </div>

                {/* Image and Number Wrapper */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex-1 w-full flex ${i % 2 !== 0 ? 'lg:justify-start lg:pl-16' : 'lg:justify-end lg:pr-16'} justify-center relative z-20 h-[300px] lg:h-[450px]`}
                >
                  <div className="relative w-full max-w-[500px] h-full rounded-3xl overflow-hidden border-2 border-zinc-950 shadow-[4px_4px_0px_rgba(9,9,11,1)] group">
                    <img 
                      src={(step.image) || undefined} 
                      alt={step.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span
                      className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 text-[70px] lg:text-[100px] font-black leading-[0.8] drop-shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] uppercase tracking-tighter z-10"
                      style={{ color: step.color, WebkitTextStroke: '1.5px #222' }}
                    >
                      {step.num}
                    </span>
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`flex-1 w-full z-20 flex ${i % 2 !== 0 ? 'lg:justify-end lg:pr-8' : 'lg:justify-start lg:pl-8'}`}
                >
                  <div 
                    className="p-8 lg:p-10 border-2 border-zinc-950 rounded-3xl bg-white w-full max-w-lg transition-transform hover:-translate-y-1 duration-300"
                    style={{
                      boxShadow: `4px 4px 0px rgba(9,9,11,1)`,
                    }}
                  >
                    <h3 className="text-xl lg:text-3xl font-extrabold uppercase tracking-tight mb-4 text-zinc-950 leading-none">
                      {step.title}
                    </h3>
                    <p className="text-zinc-650 font-normal text-sm lg:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-32 flex justify-center pb-20">
          <Link href="/pricing">
            <motion.div
              whileHover={{ scale: 1.03, translateY: -2 }}
              className="px-10 py-4 border-2 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white font-bold uppercase tracking-widest rounded-full shadow-[4px_4px_0px_rgba(9,9,11,1)] hover:shadow-[6px_6px_0px_rgba(9,9,11,1)] transition-all inline-block w-fit text-center text-sm cursor-pointer bg-white"
            >
              Get Started
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
