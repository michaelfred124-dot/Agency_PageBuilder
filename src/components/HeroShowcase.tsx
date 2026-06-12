"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Grid, ExternalLink, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  color?: string;
}

interface HeroShowcaseProps {
  projects: Project[];
  onClose: () => void;
}

export default function HeroShowcase({ projects, onClose }: HeroShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronize active slide index on scroll
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      if (clientHeight > 0) {
        const index = Math.round(scrollTop / clientHeight);
        if (index !== activeIndex && index >= 0 && index < projects.length) {
          setActiveIndex(index);
        }
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (containerRef.current && index >= 0 && index < projects.length) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) {
      scrollToSlide(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const activeProject = projects[activeIndex];

  return (
    <div className="fixed inset-0 bg-[#0c0c0c] z-[100] w-screen h-screen overflow-hidden flex flex-col font-sans select-none">
      {/* Background dark grid filter for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.08)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-10" />

      {/* Floating Header */}
      <header className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-50 pointer-events-auto">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-white font-black uppercase tracking-[0.3em] text-sm md:text-lg transition-colors group-hover:text-[#00B1FF]">
              Michaelfred Designs
            </span>
          </Link>
          <span className="hidden sm:inline-block px-2.5 py-0.5 bg-white/10 text-white/70 border border-white/10 text-[9px] uppercase tracking-widest font-black rounded-md">
            Hero Showcase Mode
          </span>
        </div>
        <button
          onClick={onClose}
          className="px-6 py-2.5 bg-white text-black font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-[#00B1FF] hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_4px_14px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_20px_rgba(0,177,255,0.4)] hover:-translate-y-0.5 active:translate-y-0"
        >
          <Grid className="w-4 h-4" /> Back to Grid
        </button>
      </header>

      {/* Scroll Snapping Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, i) => (
          <section
            key={project.title}
            className="w-full h-screen min-h-screen relative snap-start overflow-hidden flex flex-col justify-between"
          >
            {/* Live website preview inside iframe */}
            <div className="absolute inset-0 w-full h-full z-0 bg-neutral-900">
              <iframe
                src={project.link}
                className="w-full h-full border-0 pointer-events-none"
                scrolling="no"
                title={project.title}
              />
            </div>

            {/* Immersive gradient shade for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none z-10" />
          </section>
        ))}
      </div>

      {/* Floating Info Overlay (Absolute on Screen, Animates on Index Change) */}
      <div className="absolute bottom-10 left-6 md:left-12 right-24 z-40 text-white pointer-events-none">
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#00B1FF]">
                  Project {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white/10 text-white/80 text-[9px] font-black uppercase tracking-wider rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
                {activeProject.title}
              </h2>
              <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed mb-6">
                {activeProject.description}
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href={activeProject.link}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-extrabold uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-[#00B1FF] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_4px_20px_rgba(0,177,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore Live Experience <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Dot Indicators */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40 pointer-events-auto">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`group relative flex items-center justify-center w-6 h-6 rounded-full cursor-pointer`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-[#00B1FF] scale-125 shadow-[0_0_8px_#00B1FF]'
                  : 'bg-white/30 group-hover:bg-white group-hover:scale-110'
              }`}
            />
            {/* Hover Tooltip showing project name */}
            <span className="absolute right-8 px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {projects[index].title}
            </span>
          </button>
        ))}
      </div>

      {/* Prev / Next Slide Floating Controls */}
      <div className="absolute right-6 md:right-12 bottom-10 flex flex-col gap-2 z-40 pointer-events-auto">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-350 cursor-pointer ${
            activeIndex === 0
              ? 'opacity-30 cursor-not-allowed bg-transparent'
              : 'bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white shadow-md'
          }`}
          aria-label="Previous Project"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          disabled={activeIndex === projects.length - 1}
          className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-350 cursor-pointer ${
            activeIndex === projects.length - 1
              ? 'opacity-30 cursor-not-allowed bg-transparent'
              : 'bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white shadow-md'
          }`}
          aria-label="Next Project"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
