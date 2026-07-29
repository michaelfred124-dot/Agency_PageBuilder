"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Layers, 
  CheckCircle2, 
  MousePointerClick, 
  Palette, 
  ShieldCheck,
  Zap,
  GripVertical
} from 'lucide-react';

const PRESETS = [
  {
    name: 'Clean Light',
    bgColor: '#ffffff',
    textColor: '#0f172a',
    accentColor: '#0284c7',
    buttonBg: '#0f172a',
    buttonText: '#ffffff',
  },
  {
    name: 'Warm Editorial',
    bgColor: '#FDFBF7',
    textColor: '#1c1917',
    accentColor: '#d97706',
    buttonBg: '#1c1917',
    buttonText: '#ffffff',
  },
  {
    name: 'Deep Luxury',
    bgColor: '#0f172a',
    textColor: '#f8fafc',
    accentColor: '#38bdf8',
    buttonBg: '#38bdf8',
    buttonText: '#0f172a',
  }
];

export default function BuilderFeatures() {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activePresetIndex, setActivePresetIndex] = useState(0);

  const features = [
    {
      title: 'Traditional Flowing Layouts',
      desc: 'Sections stack full-width edge-to-edge for a clean, continuous site flow matching top website builders.',
      icon: Layers
    },
    {
      title: 'Inline Content Editing',
      desc: 'Click on headlines, subtext, or button labels to make instant edits without touching code.',
      icon: MousePointerClick
    },
    {
      title: 'Curated Brand Presets',
      desc: 'Switch between light, warm, and luxury color palettes with a single click.',
      icon: Palette
    },
    {
      title: 'Built-in Local SEO & SSL',
      desc: 'Automatic SSL certificates and schema markup optimized for local Google search packs.',
      icon: ShieldCheck
    }
  ];

  const getDeviceWidth = () => {
    switch (activeDevice) {
      case 'tablet': return 'max-w-[640px]';
      case 'mobile': return 'max-w-[375px]';
      default: return 'w-full';
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] text-slate-900 px-4 lg:px-6 relative overflow-hidden">
      
      {/* Floating Animated Gradient Glow Shapes in Background (Low Opacity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] left-[4%] w-[500px] h-[500px] bg-gradient-to-tr from-sky-100/50 via-teal-100/35 to-emerald-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(186,230,253,0.3)]"
        />
        <motion.div 
          animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[4%] w-[480px] h-[480px] bg-gradient-to-br from-indigo-100/45 via-sky-100/35 to-teal-100/30 rounded-full pointer-events-none border border-white/50 shadow-[0_0_50px_rgba(167,243,208,0.3)]"
        />
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col space-y-3 mb-16 lg:mb-20 text-center items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-sky-700 bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Visual Page Builder
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none max-w-4xl text-slate-950">
            The Power of Next.js, <br />
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Engineered for Growth</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-base md:text-lg font-medium pt-2">
            No technical knowledge needed. Drag-and-drop continuous sections, edit text inline, adjust themes live, and manage domain connections in one workspace.
          </p>
        </div>

        {/* Feature Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Page Builder simulator */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-extrabold text-sky-700 tracking-wider uppercase ml-2 hidden sm:inline">LIVE BUILDER SIMULATOR</span>
              </div>
              
              {/* Viewport Selectors */}
              <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1 border border-slate-200">
                <button 
                  onClick={() => setActiveDevice('desktop')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'desktop' ? 'bg-white text-slate-950 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-950'}`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveDevice('tablet')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'tablet' ? 'bg-white text-slate-950 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-950'}`}
                  title="Tablet View"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveDevice('mobile')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'mobile' ? 'bg-white text-slate-950 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-950'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Interactive Workspace */}
            <div className="relative w-full flex justify-center items-start">
              
              <div className={`transition-all duration-500 ease-out ${getDeviceWidth()} w-full bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-2xl relative`}>
                
                {/* Canvas Bar */}
                <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Editing: {PRESETS[activePresetIndex].name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded">Auto-Saved</span>
                  </div>
                </div>

                {/* Floating Builder Element Toolbox Panel */}
                <div className="absolute top-12 left-4 z-20 hidden sm:flex flex-col gap-2 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 shadow-xl">
                  <div className="text-[9px] font-bold uppercase text-slate-400 px-1">Theme Style</div>
                  {PRESETS.map((preset, idx) => (
                    <button
                      key={preset.name}
                      onClick={() => setActivePresetIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold text-left transition-all cursor-pointer ${
                        activePresetIndex === idx 
                          ? 'bg-slate-950 text-white shadow-sm' 
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>

                {/* Live Section View inside Canvas */}
                <motion.div 
                  key={activePresetIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: PRESETS[activePresetIndex].bgColor }}
                  className="p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[360px] transition-colors duration-500"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 shadow-sm" style={{ backgroundColor: PRESETS[activePresetIndex].accentColor + '20', color: PRESETS[activePresetIndex].accentColor }}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dynamic Live Block</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" style={{ color: PRESETS[activePresetIndex].textColor }}>
                    Transform Your Business Web Presence
                  </h3>

                  <p className="text-xs sm:text-sm max-w-md font-medium leading-relaxed opacity-85 mb-6" style={{ color: PRESETS[activePresetIndex].textColor }}>
                    High performance custom layouts built directly in Next.js. Fast load times, built-in SEO authority, and zero setup hassle.
                  </p>

                  <div className="flex gap-3">
                    <button 
                      className="px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer"
                      style={{ backgroundColor: PRESETS[activePresetIndex].buttonBg, color: PRESETS[activePresetIndex].buttonText }}
                    >
                      Get Started Today
                    </button>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>

          {/* Right Column: Key visual feature benefit cards */}
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
                  className="p-6 bg-white rounded-2xl border border-slate-200/80 flex gap-5 items-start cursor-pointer hover:shadow-md transition-all relative overflow-hidden group text-slate-900 shadow-sm"
                >
                  <div className="p-3 border border-sky-100 bg-sky-50 rounded-xl shrink-0 text-sky-600 group-hover:bg-slate-950 group-hover:text-white transition-colors shadow-sm">
                    <IconComponent className="w-5 h-5" strokeWidth={2} />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-slate-950 flex items-center gap-2 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA bar inside features */}
        <div className="mt-20 rounded-[32px] p-8 md:p-12 text-center flex flex-col items-center bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50 border border-sky-200/80 relative overflow-hidden shadow-xl text-slate-900">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/40 rounded-full pointer-events-none -mr-20 -mt-20" />
          
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 max-w-2xl leading-none text-slate-950 relative z-10">
            Ready to build your local authority?
          </h3>
          <p className="text-sm md:text-base font-medium text-slate-600 mb-8 max-w-xl relative z-10">
            Choose a starting layout, plug in your brand information, and launch a fast, professional site in under 15 minutes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href="/dashboard"
              className="px-7 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              Start Building Free
            </a>
            <a 
              href="/pricing"
              className="px-7 py-3.5 border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 rounded-full font-semibold text-xs transition-all cursor-pointer shadow-sm"
            >
              Compare Plans
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
