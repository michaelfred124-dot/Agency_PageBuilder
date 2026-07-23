"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  GripVertical, 
  ShoppingBag, 
  Globe, 
  Sparkles, 
  Calendar, 
  MapPin, 
  MousePointerClick
} from 'lucide-react';

import ParallaxSectionBg from '@/components/ParallaxSectionBg';

export default function BuilderFeatures() {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [simulatedHeading, setSimulatedHeading] = useState('Build local customer trust');
  const [isEditingHeading, setIsEditingHeading] = useState(false);
  const [simulatedTheme, setSimulatedTheme] = useState<'light' | 'sand' | 'dark'>('dark');

  // Features description lists
  const features = [
    {
      icon: Globe,
      title: "1-Click Custom Domains",
      desc: "Deploy instantly to your-business.michaelfreddesigns.com or link your own custom domain in seconds with automated SSL security certificates.",
    },
    {
      icon: ShoppingBag,
      title: "Shopify Buy Integrations",
      desc: "Sync your store product catalogs. Drag buy boxes directly onto pages to process Shopify checkout orders without building custom stores.",
    },
    {
      icon: Sparkles,
      title: "Local Business Widgets",
      desc: "Embed high-conversion widgets in one click: Google Maps locations, Calendly meeting calendars, Mailchimp email collections, and Instagram feeds.",
    },
  ];

  const getSimulatedThemeBg = () => {
    switch (simulatedTheme) {
      case 'light': return 'bg-white text-slate-900 border-stone-200';
      case 'sand': return 'bg-[#F4F1EA] text-[#2C2C2C] border-stone-300';
      case 'dark':
      default: return 'bg-[#0D111A] text-white border-white/10';
    }
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#080B12] text-white px-6 relative overflow-hidden">
      
      {/* Full-Section Real Photographic Background with Parallax */}
      <ParallaxSectionBg 
        src="/features_nature_bg.jpg" 
        alt="Misty Pine Forest Background"
        opacity={0.82}
        overlayGradient="from-[#080B12] via-transparent to-[#080B12]"
      />

      {/* Alternating Mint Green & Teal Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-teal-400/25 via-emerald-500/20 to-cyan-500/20 blur-[170px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col space-y-3 mb-16 lg:mb-20 text-center items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-sky-950/70 px-3.5 py-1.5 rounded-full border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Visual Page Builder
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none max-w-4xl text-white">
            The Power of Next.js, <br />
            <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Engineered for Growth</span>
          </h2>
          <p className="max-w-2xl text-slate-200 text-base md:text-lg font-normal pt-2">
            No technical knowledge needed. Drag-and-drop continuous sections, edit text inline, adjust themes live, and manage domain connections in one workspace.
          </p>
        </div>

        {/* Feature Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Page Builder simulator */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gradient-to-r from-slate-800/90 via-slate-900/90 to-[#1E293B]/90 border border-sky-400/30 rounded-2xl shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-bold text-sky-300 tracking-wider uppercase ml-2 hidden sm:inline">LIVE BUILDER SIMULATOR</span>
              </div>
              
              {/* Viewport Selectors */}
              <div className="flex items-center gap-1 bg-slate-900/80 rounded-lg p-1 border border-sky-400/20">
                <button 
                  onClick={() => setActiveDevice('desktop')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'desktop' ? 'bg-gradient-to-r from-sky-400 to-teal-400 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white'}`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveDevice('tablet')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'tablet' ? 'bg-gradient-to-r from-sky-400 to-teal-400 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white'}`}
                  title="Tablet View"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveDevice('mobile')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'mobile' ? 'bg-gradient-to-r from-sky-400 to-teal-400 text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Interactive Workspace */}
            <div className="relative w-full flex justify-center items-start">
              
              {/* Floating Layout Elements Panel */}
              <div className="absolute -left-4 top-20 z-20 w-38 hidden xl:flex flex-col gap-2 p-3 bg-slate-900/95 backdrop-blur-xl border border-sky-400/30 rounded-xl shadow-2xl select-none">
                <div className="text-[9px] font-bold uppercase text-sky-300 tracking-wider">Blocks</div>
                <div className="flex items-center gap-2 p-1.5 bg-slate-800/80 border border-sky-400/20 rounded text-[10px] font-medium text-white">
                  <GripVertical className="w-3 h-3 text-sky-400 shrink-0" />
                  Hero Section
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-slate-800/80 border border-sky-400/20 rounded text-[10px] font-medium text-white">
                  <GripVertical className="w-3 h-3 text-teal-400 shrink-0" />
                  Services Grid
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-slate-800/40 border border-white/5 rounded text-[10px] font-medium text-white/40">
                  <GripVertical className="w-3 h-3 text-white/20 shrink-0" />
                  Calendly Block
                </div>
              </div>

              {/* Floating Styling Inspector Panel */}
              <div className="absolute -right-4 top-32 z-20 w-44 hidden xl:flex flex-col gap-3 p-3 bg-slate-900/95 backdrop-blur-xl border border-sky-400/30 rounded-xl shadow-2xl select-none">
                <div className="text-[9px] font-bold uppercase text-teal-300 tracking-wider">Canvas Theme</div>
                <div className="flex gap-1.5">
                  <button 
                    onClick={() => setSimulatedTheme('light')}
                    className={`w-6 h-6 rounded-full bg-stone-100 border-2 transition-all cursor-pointer ${simulatedTheme === 'light' ? 'border-sky-400 scale-110' : 'border-stone-400'}`}
                    title="Light theme"
                  />
                  <button 
                    onClick={() => setSimulatedTheme('sand')}
                    className={`w-6 h-6 rounded-full bg-[#F4F1EA] border-2 transition-all cursor-pointer ${simulatedTheme === 'sand' ? 'border-teal-400 scale-110' : 'border-stone-400'}`}
                    title="Sand theme"
                  />
                  <button 
                    onClick={() => setSimulatedTheme('dark')}
                    className={`w-6 h-6 rounded-full bg-zinc-900 border-2 transition-all cursor-pointer ${simulatedTheme === 'dark' ? 'border-emerald-400 scale-110' : 'border-stone-400'}`}
                    title="Dark theme"
                  />
                </div>
                <div className="border-t border-sky-400/20 pt-2">
                  <div className="text-[9px] font-bold uppercase text-slate-400 tracking-wider mb-1">Padding</div>
                  <div className="bg-slate-800/80 p-1 text-[10px] font-semibold text-center border border-sky-400/20 rounded text-sky-200">
                    Py-24 (Large)
                  </div>
                </div>
              </div>

              {/* Simulated Device Frame Container */}
              <motion.div 
                animate={{ 
                  width: activeDevice === 'desktop' ? '100%' : activeDevice === 'tablet' ? '70%' : '45%',
                  minHeight: activeDevice === 'mobile' ? '460px' : '380px'
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 120 }}
                className="w-full bg-[#0D111A] border border-sky-400/30 rounded-2xl overflow-hidden shadow-2xl relative transition-all"
              >
                
                {/* Active Inner Viewport */}
                <div className={`p-8 lg:p-12 h-full flex flex-col justify-between transition-colors duration-500 ${getSimulatedThemeBg()}`}>
                  
                  {/* Top Bar / Header preview */}
                  <div className="flex justify-between items-center pb-6 border-b border-white/10">
                    <span className="font-extrabold text-sm uppercase tracking-wider text-teal-300">🌿 Greenscape</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 border border-teal-400/40 rounded-full text-teal-300">Menu</span>
                  </div>

                  {/* Main content body */}
                  <div className="py-10 flex flex-col items-center text-center space-y-6">
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 text-[8px] bg-teal-500 text-slate-950 font-extrabold rounded-full uppercase tracking-wider">SEO Ranked</span>
                      <span className="px-2 py-0.5 text-[8px] bg-sky-400 text-slate-950 font-extrabold rounded-full uppercase tracking-wider">Auto-SSL</span>
                    </div>

                    {/* Inline Text Editable Field representation */}
                    <div className="relative group/text inline-block max-w-full">
                      {isEditingHeading ? (
                        <input
                          type="text"
                          value={simulatedHeading}
                          onChange={(e) => setSimulatedHeading(e.target.value)}
                          onBlur={() => setIsEditingHeading(false)}
                          onKeyDown={(e) => { if (e.key === 'Enter') setIsEditingHeading(false); }}
                          autoFocus
                          className="bg-white border border-sky-400 text-slate-950 px-2.5 py-1 font-bold text-lg md:text-2xl uppercase tracking-tight text-center rounded-lg focus:outline-none w-full"
                        />
                      ) : (
                        <h3 
                          onClick={() => setIsEditingHeading(true)}
                          className="text-lg md:text-2xl font-bold uppercase tracking-tight leading-none cursor-pointer border border-transparent hover:border-sky-400/40 hover:bg-white/10 px-2 py-1 rounded transition-colors inline-flex items-center gap-2 select-none"
                        >
                          {simulatedHeading}
                          <MousePointerClick className="w-4 h-4 text-sky-300 opacity-0 group-hover/text:opacity-100 transition-opacity" />
                        </h3>
                      )}
                    </div>

                    <p className="text-xs md:text-sm opacity-85 max-w-md">
                      Drag-and-drop sections. Edit any text line directly inline inside your browser. Preview responsiveness instantaneously.
                    </p>

                    {/* Button with styling options */}
                    <button className="px-6 py-2 bg-gradient-to-r from-sky-400 to-teal-400 text-slate-950 font-extrabold text-xs rounded-full flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer shadow-md">
                      Book Service
                    </button>
                  </div>

                  {/* Footer widgets preview area */}
                  <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-[10px] font-semibold opacity-70">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-sky-400" />
                      Denver, Colorado
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                      Appointments Open
                    </div>
                  </div>

                </div>

              </motion.div>

            </div>

            {/* Mobile helpful text */}
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-sky-400/30 text-xs font-semibold text-slate-200 md:hidden justify-center text-center">
              <span>💡</span> Tap elements inside the workspace preview to edit!
            </div>
            
          </div>

          {/* Right Column: Key visual feature benefit cards - Standout Glass Blocks */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4, y: -2 }}
                  className="p-6 bg-gradient-to-br from-slate-800/85 via-slate-900/90 to-[#1E293B]/85 backdrop-blur-xl rounded-2xl border border-sky-400/30 flex gap-5 items-start cursor-pointer hover:bg-slate-800/95 hover:border-sky-300/60 shadow-xl hover:shadow-[0_15px_35px_rgba(56,189,248,0.2)] transition-all relative overflow-hidden group"
                >
                  <div className="p-3 border border-sky-300/40 bg-gradient-to-br from-sky-400/20 via-teal-400/15 to-blue-500/20 rounded-xl shrink-0 text-sky-200 group-hover:from-sky-400 group-hover:to-teal-400 group-hover:text-slate-950 transition-colors shadow-sm">
                    <IconComponent className="w-5 h-5" strokeWidth={2} />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-white flex items-center gap-2 group-hover:text-sky-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA bar inside features - Elevated Glass Box */}
        <div className="mt-20 rounded-[32px] p-8 md:p-12 text-center flex flex-col items-center bg-gradient-to-br from-[#0F172A]/90 via-[#1E293B]/85 to-[#0B0F17]/95 border border-teal-400/30 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 max-w-2xl leading-none text-white relative z-10">
            Ready to build your local authority?
          </h3>
          <p className="text-sm md:text-base font-normal text-slate-200 mb-8 max-w-xl relative z-10">
            Choose a starting layout, plug in your brand information, and launch a fast, professional site in under 15 minutes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href="/dashboard"
              className="px-7 py-3.5 bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Start Building Free
            </a>
            <a 
              href="/pricing"
              className="px-7 py-3.5 border border-sky-400/30 text-white bg-slate-900/60 hover:bg-slate-800/80 rounded-full font-semibold text-xs transition-all cursor-pointer backdrop-blur-md"
            >
              Compare Plans
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}



