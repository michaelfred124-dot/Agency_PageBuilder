"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PROJECTS as FALLBACK_PROJECTS } from '@/constants';
import { ArrowUpRight, Grid, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CaseStudies from '@/components/CaseStudies';
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
      {/* Iframe wrapper - scales it down */}
      <div 
        className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sky-400/30 bg-slate-900/90 shadow-2xl mb-6 flex flex-col
                   transition-all duration-500 group-hover:-translate-y-2 group-hover:border-sky-300/60 group-hover:shadow-[0_20px_45px_rgba(56,189,248,0.25)]"
      >
        {/* Browser Top Controls Bar */}
        <div className="bg-slate-950/90 px-3.5 py-2 border-b border-sky-400/20 flex items-center justify-between z-20 shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-rose-500/80" />
            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[9px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-white/10 truncate max-w-[150px]">
            {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.michaelfreddesigns.com
          </div>
        </div>

        <div className="relative flex-1 w-full overflow-hidden bg-slate-950 min-h-[260px]">
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
          
          {/* Overlay to show hover state */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-30">
             <div className="w-14 h-14 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full flex items-center justify-center text-slate-950 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
               <ArrowUpRight className="w-7 h-7" strokeWidth={3} />
             </div>
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-sky-950/80 border border-sky-400/40 text-sky-300 text-[10px] font-extrabold uppercase rounded-full tracking-widest">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight text-white mb-1 group-hover:text-sky-200 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-300 font-normal text-sm line-clamp-2 leading-relaxed">
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get('view');
      if (mode === 'showcase') {
        setViewMode('showcase');
      }
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

  const validProjects = projects.filter(p => p.link && p.link !== '#');

  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#080B12] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-red-600/35 via-orange-600/30 to-rose-700/25 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col space-y-4 text-center items-center mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-sky-950/80 px-4 py-2 rounded-full border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            Portfolio Directory
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none w-full text-center">
            Featured <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-base md:text-lg font-normal text-slate-300 max-w-2xl mt-4">
            Click any preview card to launch the full live interactive website experience.
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-full border border-sky-400/30 mt-8 backdrop-blur-xl shadow-xl">
            <button
              onClick={() => toggleViewMode('grid')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" /> Grid View
            </button>
            <button
              onClick={() => toggleViewMode('showcase')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                viewMode === 'showcase'
                  ? 'bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Hero Showcase (100vh)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {validProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Conditionally render full screen showcase overlay */}
      {viewMode === 'showcase' && (
        <HeroShowcase projects={validProjects} onClose={() => toggleViewMode('grid')} />
      )}
    </div>
  );
}
