"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { COLORS } from '@/constants';

const SITES = [
  {
    title: 'Northwood Coffee',
    category: 'Featured Template',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Next.js', 'Premium'],
    color: COLORS.orange,
    link: '/work/northwood-coffee'
  },
  {
    title: 'Greenscape Landscaping',
    category: 'Featured Template',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'SEO', 'Mobile First'],
    color: COLORS.green,
    link: '/work/greenscape-landscaping'
  },
  {
    title: 'Lauren Wilson Photo',
    category: 'Featured Template',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    tags: ['Minimalist', 'Next.js', 'Creative'],
    color: COLORS.purple,
    link: '/work/lauren-wilson-photo'
  },
  {
    title: 'Brighter Solar Cleaning',
    category: 'Featured Template',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80',
    tags: ['Services', 'Next.js', 'Local Business'],
    color: COLORS.blue,
    link: '/work/brighter-solar'
  },
  {
    title: 'Nexus Fintech',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Dashboard', 'UI/UX'],
    color: COLORS.green
  },
  {
    title: 'Lumina Studio',
    category: 'Agency Portfolio',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Next.js', 'Framer Motion', 'Branding'],
    color: COLORS.purple
  },
  {
    title: 'Aura Commerce',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['Shopify', 'Tailwind', 'Conversion'],
    color: COLORS.blue
  },
  {
    title: 'Zenith Health',
    category: 'Marketing Site',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop',
    tags: ['Webflow', 'SEO', 'Design'],
    color: COLORS.pink
  }
];

const CAROUSEL_SITES = [...SITES, ...SITES, ...SITES, ...SITES];

import AnimatedSquiggles from './AnimatedSquiggles';

export default function FeaturedSites() {
  const router = useRouter();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Mapping the scroll progress to a horizontal shift along the rotated axis
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <AnimatedSquiggles />
        
        {/* Header / Intro absolute on top of the carousel */}
        <div className="absolute top-6 lg:top-12 left-4 lg:left-12 z-20 flex flex-col md:flex-row justify-between items-start md:items-end w-[calc(100%-2rem)] lg:w-[calc(100%-6rem)] pointer-events-none">
          <div className="flex flex-col space-y-4">
            <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-zinc-400">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 leading-none">
              Featured <span style={{ color: COLORS.blue }}>Work</span>
            </h2>
          </div>
          <Link 
            href="/work"
            className="group mt-8 md:mt-0 flex items-center gap-4 text-zinc-900 hover:text-[#00B1FF] transition-colors pointer-events-auto"
          >
            <span className="font-bold uppercase tracking-widest text-sm lg:text-base">View All Work</span>
            <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </Link>
        </div>

        {/* Diagonal Carousel Wrapper */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[100vw] h-[100vh] flex items-center justify-center overflow-visible pointer-events-none">
          <div className="w-full flex items-center rotate-[-8deg] origin-center scale-[1.1] md:scale-[1.05]">
            <motion.div 
              style={{ x }} 
              className="flex gap-4 md:gap-8 lg:gap-10 w-max px-[30vw] md:px-[50vw] pointer-events-auto"
            >
              {CAROUSEL_SITES.map((site, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0.3, scale: 0.85, filter: 'grayscale(100%) brightness(0.4)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'grayscale(0%) brightness(1)' }}
                  viewport={{ margin: "0px -15% 0px -15%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onClick={() => site.link && router.push(site.link)}
                  className="group relative w-[80vw] md:w-[60vw] lg:w-[50vw] aspect-[16/10] bg-zinc-900 rounded-[24px] lg:rounded-[40px] overflow-hidden transition-all duration-500 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-3 cursor-pointer"
                >
                  <img 
                    src={(site.image) || undefined} 
                    alt={site.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 lg:bottom-10 lg:left-10 right-4 lg:right-10 flex flex-col md:flex-row justify-between items-start md:items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div>
                      <span 
                        className="px-4 py-2 text-[10px] lg:text-xs font-bold uppercase rounded-full tracking-widest mb-4 inline-block text-black"
                        style={{ backgroundColor: site.color }}
                      >
                        {site.category}
                      </span>
                      <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white leading-none drop-shadow-lg">
                        {site.title}
                      </h3>
                    </div>
                    <div className="mt-4 md:mt-0 w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                      <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 text-black" strokeWidth={4} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
