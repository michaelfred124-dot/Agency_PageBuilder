"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { COLORS } from '@/constants';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import { motion } from 'framer-motion';

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
    title: 'Precise Building Services',
    category: 'Construction & Engineering',
    image: '/screenshots/precise-building.jpg',
    tags: ['Custom Next.js', 'Construction'],
    color: '#FFC219',
    link: '/work/precise-building-services'
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
  const [selectedTab, setSelectedTab] = useState<string>('All');

  const TABS = [
    'All',
    'Local Services',
    'E-Commerce',
    'Legal & Professional',
    'Fitness & Wellness',
    'Creative & Studio'
  ];

  useEffect(() => {
    const fetchSites = async () => {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });
        
      if (!error && data && data.length > 0) {
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

  const filteredSites = sites.filter(site => {
    if (selectedTab === 'All') return true;
    const cat = (site.category || '').toLowerCase();
    const tab = selectedTab.toLowerCase();
    if (tab.includes('services') && (cat.includes('grooming') || cat.includes('landscaping') || cat.includes('clean') || cat.includes('service') || cat.includes('detailing'))) return true;
    if (tab.includes('commerce') && (cat.includes('fashion') || cat.includes('retail') || cat.includes('store') || cat.includes('coffee') || cat.includes('e-commerce'))) return true;
    if (tab.includes('legal') && (cat.includes('legal') || cat.includes('law') || cat.includes('energy') || cat.includes('solar') || cat.includes('professional'))) return true;
    if (tab.includes('fitness') && (cat.includes('fitness') || cat.includes('gym') || cat.includes('dental') || cat.includes('health') || cat.includes('wellness') || cat.includes('salon'))) return true;
    if (tab.includes('creative') && (cat.includes('creative') || cat.includes('photo') || cat.includes('director') || cat.includes('events') || cat.includes('wedding'))) return true;
    return cat.includes(tab);
  });

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9FF] text-slate-900 relative overflow-hidden font-sans">
      
      {/* Floating Organic Shapes & Geometry in Background (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Side Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] -left-28 w-[500px] h-[500px] text-[#6528D9] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>
        
        {/* Right Side Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[6%] -right-24 w-[480px] h-[480px] text-[#FF7700] opacity-75 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[25%] left-[8%] w-12 h-12 border-4 border-[#FFB703] rounded-full opacity-80 hidden lg:block"
        />

        {/* Floating Geometry: Purple Outline Circle */}
        <motion.div
          animate={{ y: [0, 16, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-10 h-10 border-4 border-[#6528D9] rounded-full opacity-70 hidden lg:block"
        />

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[15%] right-[5%] w-36 h-40 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[15%] left-[4%] w-32 h-36 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      {/* Header Block */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center mb-10">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-black text-[#FF5500] bg-white px-5 py-1.5 rounded-full border border-orange-200/90 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
          FEATURED WORK SHOWCASE →
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 mt-4">
          Explore Production <br />
          <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Client Sites & Demos</span>
        </h2>
        
        <p className="max-w-2xl text-slate-600 text-sm md:text-base font-medium mt-3">
          Filter through our live portfolio of full-flowing website designs built for high conversion.
        </p>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full no-scrollbar py-2 px-3 bg-white/90 border border-slate-200/90 rounded-full shadow-sm backdrop-blur-md mt-6">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer ${
                selectedTab === tab
                  ? 'btn-orange-pill shadow-md'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Autoplay Loop Wrapper */}
      <div className="w-full overflow-hidden py-8 relative flex items-center justify-center z-10 mask-marquee">
        <div className="w-full flex items-center rotate-[-2.5deg] origin-center scale-[1.02] overflow-visible">
          <div className="mercury-marquee flex gap-8 lg:gap-10 px-6">
            {[...(filteredSites.length > 0 ? filteredSites : sites), ...(filteredSites.length > 0 ? filteredSites : sites)].map((site, i) => (
              <div 
                key={i} 
                onClick={() => site.link && router.push(site.link)}
                className="group relative w-[290px] md:w-[380px] h-[370px] bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-xl cursor-pointer shrink-0 flex flex-col text-slate-900"
              >
                {/* Browser Chrome Header Bar */}
                <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between z-20 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60 truncate max-w-[170px]">
                    {site.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.michaelfreddesigns.com
                  </div>
                </div>

                {/* Website Window Container */}
                <div className="relative w-full h-[220px] overflow-hidden bg-slate-100 border-b border-slate-200/80">
                  <img 
                    src={site.image} 
                    alt={site.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none z-10" />
                </div>
                
                {/* Bottom Card Content */}
                <div className="p-5 flex justify-between items-center z-20 bg-white">
                  <div className="text-left">
                    <span 
                      className="px-2.5 py-0.5 text-[10px] font-black uppercase rounded-full tracking-wider mb-1 inline-block text-[#6528D9] bg-purple-50 border border-purple-200/80"
                    >
                      {site.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-950 group-hover:text-[#FF5500] transition-colors">
                      {site.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-[#FF5500] group-hover:text-white group-hover:border-[#FF5500] transition-all shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-10">
        <Link href={`/work?category=${encodeURIComponent(selectedTab)}`}>
          <button className="btn-orange-pill px-9 py-4 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-xl flex items-center gap-2 transition-all cursor-pointer">
            <span>Explore All {filteredSites.length} Sites in {selectedTab}</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
        </Link>
      </div>
    </section>
  );
}
