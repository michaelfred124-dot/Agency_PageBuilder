"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { PROJECTS as FALLBACK_PROJECTS } from '@/constants';
import { ArrowUpRight, Grid, Eye, Search, Sparkles, Filter } from 'lucide-react';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import HeroShowcase from '@/components/HeroShowcase';

interface ProjectCardProps {
  project: any;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600';

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.link}
      className="group flex flex-col cursor-pointer"
    >
      {/* Card Preview Container */}
      <div
        className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm mb-5 flex flex-col
                   transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#6528D9] group-hover:shadow-2xl group-hover:shadow-purple-200/60"
      >
        {/* Browser Top Controls Bar */}
        <div className="bg-slate-900 px-3.5 py-2.5 border-b border-slate-800 flex items-center justify-between z-20 shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60 truncate max-w-[170px]">
            {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.michaelfreddesigns.com
          </div>
        </div>

        {/* Screenshot preview */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={project.image || FALLBACK_IMAGE}
            alt={project.title}
            fill
            className="object-contain object-center bg-slate-100 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Overlay Hover Icon */}
          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-30">
             <div className="w-14 h-14 bg-gradient-to-r from-[#6528D9] via-[#FF5500] to-[#FF8800] rounded-full flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl font-black">
               <ArrowUpRight className="w-7 h-7 text-white" strokeWidth={3} />
             </div>
          </div>
        </div>
      </div>

      <div className="px-2 space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags?.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-purple-50 border border-purple-200/80 text-[#6528D9] text-[10px] font-black uppercase rounded-full tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-black tracking-tight text-slate-900 group-hover:text-[#FF5500] transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-600 font-medium text-xs line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  const [projects, setProjects] = useState<any[]>(FALLBACK_PROJECTS);
  const [viewMode, setViewMode] = useState<'grid' | 'showcase'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const CATEGORIES = [
    'All',
    'Local Services',
    'E-Commerce & Retail',
    'Professional & Legal',
    'Health & Wellness',
    'Events & Creative'
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get('view');
      if (mode === 'showcase') {
        setViewMode('showcase');
      }
      const cat = params.get('category');
      if (cat) setSelectedCategory(cat);
    }
  }, []);

  const toggleViewMode = (mode: 'grid' | 'showcase') => {
    setViewMode(mode);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('view', mode);
      window.history.pushState({}, '', url.toString());
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });
        
      if (!error && data && data.length > 0) {
        const mappedProjects = data.map(p => ({
          title: p.title,
          description: p.description || '',
          tags: [p.category || 'Portfolio'],
          link: p.project_url || (p.slug ? `/work/${p.slug}` : '#'),
          image: p.image_url || p.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600'
        }));
        setProjects(mappedProjects);
      }
    };
    fetchProjects();
  }, []);

  // Filter projects by category and search query
  const filteredProjects = projects.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.tags?.some((t: string) => {
      const tagLower = t.toLowerCase();
      const catLower = selectedCategory.toLowerCase();
      if (catLower.includes('local') && (tagLower.includes('local') || tagLower.includes('service') || tagLower.includes('cleaning') || tagLower.includes('auto') || tagLower.includes('contractor') || tagLower.includes('landscaping') || tagLower.includes('pet'))) return true;
      if (catLower.includes('e-commerce') && (tagLower.includes('fashion') || tagLower.includes('boutique') || tagLower.includes('shop') || tagLower.includes('retail') || tagLower.includes('commerce') || tagLower.includes('coffee'))) return true;
      if (catLower.includes('professional') && (tagLower.includes('law') || tagLower.includes('legal') || tagLower.includes('professional') || tagLower.includes('estate') || tagLower.includes('energy') || tagLower.includes('solar'))) return true;
      if (catLower.includes('health') && (tagLower.includes('health') || tagLower.includes('dental') || tagLower.includes('fitness') || tagLower.includes('yoga') || tagLower.includes('wellness') || tagLower.includes('salon') || tagLower.includes('beauty'))) return true;
      if (catLower.includes('events') && (tagLower.includes('photo') || tagLower.includes('wedding') || tagLower.includes('event') || tagLower.includes('portfolio') || tagLower.includes('creative'))) return true;
      return tagLower.includes(catLower);
    });

    const matchesSearch = !searchQuery.trim() || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags?.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch && p.link && p.link !== '#';
  });

  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#FAF9FF] text-slate-900 relative overflow-hidden font-sans">
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-Left Deep Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[520px] h-[520px] text-[#6528D9] opacity-85 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>

        {/* Top-Right Vibrant Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-20 w-[480px] h-[480px] text-[#FF7700] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <div className="absolute top-[28%] left-[7%] w-14 h-14 border-4 border-[#FFB703] rounded-full opacity-75 animate-float-slow hidden md:block" />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <svg className="absolute top-[18%] right-[12%] w-10 h-10 text-[#FF7700] opacity-75 animate-float-reverse hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <polygon points="50,10 90,85 10,85" />
        </svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[18%] right-[4%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute top-[22%] left-[3%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col space-y-4 text-center items-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-white px-5 py-2 rounded-full border border-orange-200/90 shadow-sm">
            CLIENT SHOWCASE & INTERACTIVE DEMOS →
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-none text-center">
            Featured <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-sm md:text-base font-medium text-slate-600 max-w-2xl text-center">
            Browse custom site builds across industries. Click any card to launch the live interactive website experience.
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-slate-200 mt-4 shadow-sm">
            <button
              onClick={() => toggleViewMode('grid')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                viewMode === 'grid'
                  ? 'btn-orange-pill shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" /> Grid View
            </button>
            <button
              onClick={() => toggleViewMode('showcase')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                viewMode === 'showcase'
                  ? 'btn-orange-pill shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Full Showcase (100vh)
            </button>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white/90 p-4 rounded-3xl border border-slate-200/90 shadow-sm backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full no-scrollbar py-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'btn-orange-pill shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by industry or keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#6528D9] focus:bg-white"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12 shadow-sm">
            <Filter className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <h4 className="font-extrabold text-slate-900 text-base">No Sites Found</h4>
            <p className="text-xs text-slate-500 mt-1">Try selecting another category tab or clear your search term.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white font-extrabold text-xs rounded-xl hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

      </section>

      {/* Conditionally render full screen showcase overlay */}
      {viewMode === 'showcase' && (
        <HeroShowcase projects={filteredProjects} onClose={() => toggleViewMode('grid')} />
      )}
    </div>
  );
}
