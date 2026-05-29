"use client";
import Link from 'next/link';
import { PROJECTS } from '@/constants';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CaseStudies from '@/components/CaseStudies';

export default function WorkPage() {
  const router = useRouter();

  // Filter out any projects that don't have a real link
  const validProjects = PROJECTS.filter(p => p.link && p.link.startsWith('/'));

  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#F1EDE1]">
      <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 text-center items-center mb-16 lg:mb-24">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Portfolio</span>
          <h2 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase tracking-tighter text-black leading-[0.8] w-full text-center">
            Our Work
          </h2>
          <p className="text-xl font-medium text-black/60 max-w-2xl mt-6">
            Click any preview to launch the full experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {validProjects.map((project, i) => (
            <Link 
              key={project.title}
              href={project.link}
              className="group flex flex-col cursor-pointer"
            >
              {/* Iframe wrapper - scales it down */}
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-[24px] border-[4px] border-black shadow-[6px_6px_0px_rgba(34,34,34,1)] mb-6 bg-white 
                           transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_rgba(34,34,34,1)]"
              >
                 {/* Iframe scaled down to simulate a 4x larger desktop viewport */}
                 <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left transition-transform duration-700 ease-out" style={{ transform: 'scale(0.25)' }}>
                    <iframe src={project.link} className="w-full h-full pointer-events-none" frameBorder="0" scrolling="no" />
                 </div>
                 
                 {/* Overlay to show hover state */}
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowUpRight className="w-8 h-8 text-black" />
                    </div>
                 </div>
              </div>
              <div className="px-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-black text-white text-[10px] font-bold uppercase rounded-md tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-1 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-black/60 font-medium text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <CaseStudies />
    </div>
  );
}
