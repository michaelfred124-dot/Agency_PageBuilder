"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { COLORS } from '@/constants';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import ParallaxSectionBg from '@/components/ParallaxSectionBg';

const FALLBACK_SITES = [
  {
    title: 'Paws & Pamper',
    category: 'Pet Grooming & Care',
    image: '/screenshots/paws-pamper.jpg',
    tags: ['Custom Next.js', 'Service Booking'],
    color: '#38BDF8',
    link: '/work/paws-and-pamper'
  },
  {
    title: 'Sterling Law Group',
    category: 'Luxury Legal Practice',
    image: '/screenshots/sterling-law.jpg',
    tags: ['Cinematic Hero', 'Trust Strip'],
    color: '#C9A84C',
    link: '/work/sterling-law-group'
  },
  {
    title: 'Greenscape Landscaping',
    category: 'Commercial Landscaping',
    image: '/screenshots/greenscape-landscaping.jpg',
    tags: ['Local SEO', 'Estimate Builder'],
    color: '#34D399',
    link: '/work/greenscape-landscaping'
  },
  {
    title: 'Maison Boutique',
    category: 'Luxury Fashion & Retail',
    image: '/screenshots/maison-boutique.jpg',
    tags: ['Shopify Sync', 'E-Commerce'],
    color: '#F472B6',
    link: '/work/maison-boutique'
  },
  {
    title: 'Iron Edge Fitness',
    category: 'Gym & Athletic Studio',
    image: '/screenshots/iron-edge-fitness.jpg',
    tags: ['Class Scheduler', 'Membership'],
    color: '#FB923C',
    link: '/work/iron-edge-fitness'
  },
  {
    title: 'Brighter Solar',
    category: 'Clean Energy Provider',
    image: '/screenshots/brighter-solar.jpg',
    tags: ['Savings Calculator', 'Lead Form'],
    color: '#FACC15',
    link: '/work/brighter-solar'
  },
  {
    title: 'Clarity Dental Studio',
    category: 'Modern Dental Practice',
    image: '/screenshots/clarity-dental.jpg',
    tags: ['Patient Portal', 'Appointments'],
    color: '#2DD4BF',
    link: '/work/clarity-dental'
  },
  {
    title: 'Lauren Wilson Portfolio',
    category: 'Creative Director',
    image: '/screenshots/lauren-wilson.jpg',
    tags: ['Editorial', 'Showcase Grid'],
    color: '#A855F7',
    link: '/work/lauren-wilson-photo'
  }
];

export default function FeaturedSites() {
  const router = useRouter();
  const [sites, setSites] = useState<any[]>(FALLBACK_SITES);

  useEffect(() => {
    const fetchSites = async () => {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });
        
      if (!error && data && data.length > 0) {
        // Map DB portfolio items to the expected format
        const mappedSites = data.map(p => ({
          title: p.title,
          category: p.category || 'Featured Work',
          image: p.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
          tags: ['Portfolio'],
          color: COLORS.blue,
          link: p.slug ? `/work/${p.slug}` : undefined
        }));
        setSites(mappedSites);
      }
    };
    fetchSites();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#080B12] text-white relative overflow-hidden">
      
      {/* Full-Section Real Photographic Background with Parallax */}
      <ParallaxSectionBg 
        src="/portfolio_nature_bg.jpg" 
        alt="Alpine Mountain Dusk Background"
        opacity={0.88}
        overlayGradient="from-[#080B12] via-red-950/45 to-[#080B12]"
      />

      {/* Brighter Crimson Red & Warm Orange Ambient Glows (matching user reference screenshot) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-red-600/40 via-orange-600/35 to-rose-700/30 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Giant Stacked Watermark Background Typography (matching user reference screenshot) */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 text-center w-full">
        <div className="text-[16vw] font-black text-white/[0.11] tracking-tighter uppercase leading-[0.8] block drop-shadow-2xl font-sans">
          FEATURED <br /> WORK
        </div>
      </div>

      {/* Infinite Autoplay Loop Wrapper (circling on top of background) */}
      <div className="w-full overflow-hidden py-12 relative flex items-center justify-center z-10 mask-marquee">
        {/* Subtle diagonal tilt for design flair */}
        <div className="w-full flex items-center rotate-[-2.5deg] origin-center scale-[1.02] overflow-visible">
          <div className="mercury-marquee flex gap-8 lg:gap-10 px-6">
            {/* Render double length to ensure seamless infinite looping */}
            {[...sites, ...sites].map((site, i) => (
              <div 
                key={i} 
                onClick={() => site.link && router.push(site.link)}
                className="group relative w-[290px] md:w-[380px] h-[370px] bg-white/10 backdrop-blur-2xl border border-white/25 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-3 hover:bg-white/15 hover:border-white/40 hover:shadow-[0_25px_60px_rgba(255,255,255,0.15)] cursor-pointer shrink-0 flex flex-col"
              >
                {/* Browser Chrome Header Bar - White Glassmorphism */}
                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 border-b border-white/15 flex items-center justify-between z-20 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10px] font-mono text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/25 truncate max-w-[170px]">
                    {site.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.michaelfreddesigns.com
                  </div>
                </div>

                {/* Website Window Container: High-Res Screenshot with object-top alignment */}
                <div className="relative w-full h-[250px] overflow-hidden bg-slate-950">
                  <img 
                    src={site.image} 
                    alt={site.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/20 to-transparent pointer-events-none z-10" />
                </div>
                
                {/* Bottom Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex justify-between items-end z-20">
                  <div className="text-left">
                    <span 
                      className="px-3 py-1 text-[9px] font-extrabold uppercase rounded-full tracking-wider mb-2 inline-block text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-sm"
                    >
                      {site.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                      {site.title}
                    </h3>
                  </div>
                  {site.link && (
                    <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-md shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Header Block (below the carousel) */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-16 lg:mt-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-sky-950/70 px-3.5 py-1.5 rounded-full border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Portfolio
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-4 leading-none">
          Featured <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="max-w-xl text-slate-200 text-sm md:text-base font-normal mt-4 leading-relaxed">
          Explore some of our recent custom website designs and dynamic application interfaces, built headlessly for speed, design parity, and local search authority.
        </p>

        {/* Action Button - Centered Below Title & Text */}
        <div className="mt-10 flex justify-center">
          <Link href="/work">
            <button className="px-8 py-4 bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 text-slate-950 rounded-full font-extrabold uppercase tracking-widest text-xs transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
              View All Projects
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
}
