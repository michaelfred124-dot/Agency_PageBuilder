"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PROJECTS as FALLBACK_PROJECTS } from '@/constants';
import { ArrowUpRight, Grid, Eye, Search, Sparkles, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import HeroShowcase from '@/components/HeroShowcase';

interface ProjectCardProps {
  project: any;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={project.link}
      className="group flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Preview Container */}
      <div 
        className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm mb-5 flex flex-col
                   transition-all duration-500 group-hover:-translate-y-2 group-hover:border-sky-400 group-hover:shadow-2xl group-hover:shadow-sky-100/60"
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

        <div className="relative flex-1 w-full overflow-hidden bg-slate-100 min-h-[260px]">
          {isHovered && project.link ? (
            <div className="w-[1440px] h-[960px] origin-top-left pointer-events-none" style={{ transform: 'scale(0.25)' }}>
              <iframe 
                src={project.link} 
                className="w-[1440px] h-[960px] border-0 select-none" 
                tabIndex={-1} 
                loading="lazy" 
              />
            </div>
          ) : (
            <img 
              src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600'} 
              alt={project.title} 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer"
            />
          )}
          
          {/* Overlay Hover Icon */}
          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-30 backdrop-blur-[2px]">
             <div className="w-14 h-14 bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 rounded-full flex items-center justify-center text-slate-950 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl font-black">
               <ArrowUpRight className="w-7 h-7" strokeWidth={3} />
             </div>
          </div>
        </div>
      </div>

      <div className="px-2 space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags?.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-sky-50 border border-sky-200/80 text-sky-700 text-[10px] font-extrabold uppercase rounded-full tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
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
  const router = useRouter();
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
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#F8FAFC] text-slate-900 relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-sky-200/40 via-teal-200/40 to-emerald-200/40 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col space-y-4 text-center items-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-extrabold text-sky-700 bg-sky-50 px-4 py-2 rounded-full border border-sky-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Client Showcase & Interactive Demos
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-none text-center">
            Featured <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Work</span>
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
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" /> Grid View
            </button>
            <button
              onClick={() => toggleViewMode('showcase')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                viewMode === 'showcase'
                  ? 'bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Full Showcase (100vh)
            </button>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white/80 p-4 rounded-3xl border border-slate-200/80 shadow-sm backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full no-scrollbar py-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
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
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
