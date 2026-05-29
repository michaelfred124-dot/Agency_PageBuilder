"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROJECTS } from '@/constants';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';

const HIGHLIGHTS: Project[] = [
  ...PROJECTS,
  {
    title: 'SaaS Dashboard',
    description: 'Clean, accessible dashboard interface for data analytics.',
    tags: ['Web Application', 'React'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Creative Agency Site',
    description: 'A bold, brutalist portfolio for a local agency.',
    tags: ['Web Design', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
  ...PROJECTS, // Duplicate for seamless infinite scroll effect
];

export default function Projects() {
  const router = useRouter();
  return (
    <section id="work" className="py-20 lg:py-32 bg-[#F1EDE1] overflow-hidden">
      <div className="w-full mb-12 lg:mb-20 px-4 lg:px-6">
        <div className="flex flex-col space-y-4 text-center items-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Portfolio</span>
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-black uppercase tracking-tighter text-black leading-[0.8] w-full text-center">
            Our Work
          </h2>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Infinite Sliding Track */}
        <motion.div 
          className="flex gap-6 lg:gap-12 px-6 lg:px-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {HIGHLIGHTS.map((project, i) => (
            <div 
              key={`${project.title}-${i}`}
              onClick={() => project.link && project.link.startsWith('/') && router.push(project.link)}
              className="group relative w-[300px] md:w-[450px] lg:w-[600px] flex-shrink-0 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] lg:rounded-[40px] border-[6px] lg:border-8 border-black shadow-[8px_8px_0px_rgba(34,34,34,1)] lg:shadow-[15px_15px_0px_rgba(34,34,34,1)] mb-6 bg-white">
                <img 
                  src={(project.image) || undefined} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase rounded-full tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter text-black truncate">
                  {project.title}
                </h3>
                <p className="text-black/60 font-medium text-sm lg:text-base truncate mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
