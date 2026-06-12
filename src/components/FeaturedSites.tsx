"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { COLORS } from '@/constants';
import { getSupabaseBrowserClient } from '@/lib/supabase';

const FALLBACK_SITES = [
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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-zinc-200/50">
      
      {/* Huge subtle background text behind carousel */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 text-center w-full hidden md:block">
        <span className="text-[14vw] font-black text-zinc-100/60 tracking-tighter uppercase leading-none block">
          Featured Work
        </span>
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
                className="group relative w-[320px] md:w-[460px] aspect-[16/10] bg-zinc-900 border-2 border-zinc-950 rounded-3xl overflow-hidden shadow-[4px_4px_0px_rgba(9,9,11,1)] hover:shadow-[8px_8px_0px_rgba(9,9,11,1)] transition-all duration-500 hover:-translate-y-2 cursor-pointer shrink-0"
              >
                <img 
                  src={site.image} 
                  alt={site.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-left">
                    <span 
                      className="px-3 py-1 text-[9px] font-bold uppercase rounded-full tracking-wider mb-2 inline-block text-zinc-950 shadow-[1.5px_1.5px_0px_rgba(9,9,11,1)] border border-zinc-950"
                      style={{ backgroundColor: site.color }}
                    >
                      {site.category}
                    </span>
                    <h3 className="text-xl md:text-3xl font-extrabold uppercase tracking-tight text-white leading-none drop-shadow-md">
                      {site.title}
                    </h3>
                  </div>
                  {site.link && (
                    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-[2px_2px_0px_rgba(9,9,11,1)] border-2 border-zinc-950">
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-950" strokeWidth={2.5} />
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
        <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-zinc-400">Portfolio</span>
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 mt-4 leading-none">
          Featured Work
        </h2>
        <p className="max-w-xl text-zinc-650 text-sm md:text-base font-normal mt-4 leading-relaxed">
          Explore some of our recent custom website designs and dynamic application interfaces, built headlessly for speed, design parity, and local search authority.
        </p>

        {/* Action Button - Centered Below Title & Text */}
        <div className="mt-12 flex justify-center">
          <Link href="/work">
            <button className="px-8 py-3.5 bg-white text-zinc-950 border-2 border-zinc-950 rounded-full font-semibold uppercase tracking-widest text-xs shadow-[3px_3px_0px_rgba(9,9,11,1)] hover:shadow-[5px_5px_0px_rgba(9,9,11,1)] hover:bg-zinc-50 active:translate-y-0.5 transition-all cursor-pointer">
              View All Projects
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
}
