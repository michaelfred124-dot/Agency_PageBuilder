"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  GripVertical, 
  ShoppingBag, 
  Database, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Mail, 
  Layers, 
  MousePointerClick,
  Check,
  Undo
} from 'lucide-react';
import { COLORS } from '@/constants';

export default function BuilderFeatures() {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [simulatedHeading, setSimulatedHeading] = useState('Build local customer trust');
  const [isEditingHeading, setIsEditingHeading] = useState(false);
  const [simulatedTheme, setSimulatedTheme] = useState<'light' | 'sand' | 'dark'>('sand');

  // Features description lists
  const features = [
    {
      icon: Globe,
      title: "1-Click Custom Domains",
      desc: "Deploy instantly to your-business.michaelfreddesigns.com or link your own custom domain in seconds with automated SSL security certificates.",
      color: COLORS.blue,
    },
    {
      icon: ShoppingBag,
      title: "Shopify Buy Integrations",
      desc: "Sync your store product catalogs. Drag buy boxes directly onto pages to process Shopify checkout orders without building custom stores.",
      color: COLORS.pink,
    },
    {
      icon: Sparkles,
      title: "Local Business Widgets",
      desc: "Embed high-conversion widgets in one click: Google Maps locations, Calendly meeting calendars, Mailchimp email collections, and Instagram feeds.",
      color: COLORS.yellow,
    },
  ];

  const getSimulatedThemeBg = () => {
    switch (simulatedTheme) {
      case 'dark': return 'bg-zinc-900 text-white border-zinc-700';
      case 'sand': return 'bg-[#F4F1EA] text-[#2C2C2C] border-[#2C2C2C]/20';
      case 'light':
      default: return 'bg-stone-50 text-black border-black/10';
    }
  };

  return (
    <section id="features" className="py-20 lg:py-32 bg-[#F7F8FA] text-zinc-900 px-6 relative overflow-hidden border-b border-zinc-200/50">
      {/* Decorative dot background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col space-y-4 mb-16 lg:mb-24 text-center items-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-zinc-400">Visual Platform</span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none max-w-4xl text-zinc-950">
            The power of a <span className="bg-gradient-to-r from-zinc-900 to-zinc-550 bg-clip-text text-transparent">Web App</span>,<br className="hidden md:block" /> engineered for <span style={{ color: COLORS.green }}>local growth</span>
          </h2>
          <p className="max-w-2xl text-zinc-600 text-base md:text-lg font-normal pt-2">
            No technical knowledge needed. Drag-and-drop layouts, edit text inline, manage SEO, and sync your favorite business tools in minutes.
          </p>
        </div>

        {/* Feature Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Page Builder simulator */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-zinc-200 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                <span className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase ml-2 hidden sm:inline">LIVE BUILDER SIMULATOR</span>
              </div>
              
              {/* Viewport Selectors */}
              <div className="flex items-center gap-1 bg-zinc-100/80 rounded-lg p-1 border border-zinc-200/50">
                <button 
                  onClick={() => setActiveDevice('desktop')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'desktop' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveDevice('tablet')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'tablet' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
                  title="Tablet View"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveDevice('mobile')}
                  className={`p-1.5 rounded transition-all cursor-pointer ${activeDevice === 'mobile' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-500 hover:text-zinc-900'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Interactive Workspace */}
            <div className="relative w-full flex justify-center items-start">
              
              {/* Floating Layout Elements Panel (Simulation) */}
              <div className="absolute -left-4 top-20 z-20 w-38 hidden xl:flex flex-col gap-2 p-3 bg-white border border-zinc-200 rounded-xl shadow-xl select-none">
                <div className="text-[9px] font-bold uppercase text-zinc-400 tracking-wider">Blocks</div>
                <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-zinc-200/60 rounded text-[10px] font-medium text-zinc-700">
                  <GripVertical className="w-3 h-3 text-zinc-300 shrink-0" />
                  Hero Section
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-zinc-200/60 rounded text-[10px] font-medium text-zinc-700">
                  <GripVertical className="w-3 h-3 text-zinc-300 shrink-0" />
                  Services Grid
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-zinc-200/60 rounded text-[10px] font-medium text-zinc-400 border-zinc-100">
                  <GripVertical className="w-3 h-3 text-zinc-200 shrink-0" />
                  Calendly Block
                </div>
              </div>

              {/* Floating Styling Inspector Panel (Simulation) */}
              <div className="absolute -right-4 top-32 z-20 w-44 hidden xl:flex flex-col gap-3 p-3 bg-white border border-zinc-200 rounded-xl shadow-xl select-none">
                <div className="text-[9px] font-bold uppercase text-zinc-400 tracking-wider">Canvas Theme</div>
                <div className="flex gap-1.5">
                  <button 
                    onClick={() => setSimulatedTheme('light')}
                    className={`w-6 h-6 rounded-full bg-stone-100 border-2 transition-all cursor-pointer ${simulatedTheme === 'light' ? 'border-blue-500 scale-110' : 'border-zinc-200'}`}
                    title="Light theme"
                  />
                  <button 
                    onClick={() => setSimulatedTheme('sand')}
                    className={`w-6 h-6 rounded-full bg-[#F4F1EA] border-2 transition-all cursor-pointer ${simulatedTheme === 'sand' ? 'border-blue-500 scale-110' : 'border-zinc-200'}`}
                    title="Sand theme"
                  />
                  <button 
                    onClick={() => setSimulatedTheme('dark')}
                    className={`w-6 h-6 rounded-full bg-zinc-900 border-2 transition-all cursor-pointer ${simulatedTheme === 'dark' ? 'border-blue-500 scale-110' : 'border-zinc-200'}`}
                    title="Dark theme"
                  />
                </div>
                <div className="border-t border-zinc-100 pt-2">
                  <div className="text-[9px] font-bold uppercase text-zinc-400 tracking-wider mb-1">Padding</div>
                  <div className="bg-zinc-50 p-1 text-[10px] font-semibold text-center border border-zinc-200 rounded text-zinc-650">
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
                className="w-full bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xl relative transition-all"
              >
                
                {/* Active Inner Viewport */}
                <div className={`p-8 lg:p-12 h-full flex flex-col justify-between transition-colors duration-500 ${getSimulatedThemeBg()}`}>
                  
                  {/* Top Bar / Header preview */}
                  <div className="flex justify-between items-center pb-6 border-b border-zinc-200/50">
                    <span className="font-extrabold text-sm uppercase tracking-wider">🌿 Greenscape</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 border border-zinc-250 rounded-full">Menu</span>
                  </div>

                  {/* Main content body */}
                  <div className="py-10 flex flex-col items-center text-center space-y-6">
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 text-[8px] bg-green-500 text-white font-bold rounded-full uppercase tracking-wider">SEO Ranked</span>
                      <span className="px-2 py-0.5 text-[8px] bg-blue-500 text-white font-bold rounded-full uppercase tracking-wider">Auto-SSL</span>
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
                          className="bg-white border border-blue-500 text-black px-2.5 py-1 font-bold text-lg md:text-2xl uppercase tracking-tight text-center rounded-lg focus:outline-none w-full"
                        />
                      ) : (
                        <h3 
                          onClick={() => setIsEditingHeading(true)}
                          className="text-lg md:text-2xl font-bold uppercase tracking-tight leading-none cursor-pointer border border-transparent hover:border-blue-500 hover:bg-blue-500/10 px-2 py-1 rounded transition-colors inline-flex items-center gap-2 select-none"
                        >
                          {simulatedHeading}
                          <MousePointerClick className="w-4 h-4 text-blue-500 opacity-0 group-hover/text:opacity-100 transition-opacity" />
                        </h3>
                      )}
                      
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shadow pointer-events-none opacity-0 group-hover/text:opacity-100 transition-opacity">
                        Double-click to Edit
                      </div>
                    </div>

                    <p className="text-xs md:text-sm opacity-85 max-w-md">
                      Drag-and-drop sections. Edit any text line directly inline inside your browser. Preview responsiveness instantaneously.
                    </p>

                    {/* Button with styling options */}
                    <button className="px-6 py-2 bg-zinc-950 hover:bg-zinc-850 text-white text-xs font-semibold rounded-full flex items-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer">
                      Book Service
                    </button>
                  </div>

                  {/* Footer widgets preview area */}
                  <div className="pt-6 border-t border-zinc-200/50 grid grid-cols-2 gap-4 text-[10px] font-semibold opacity-70">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      Denver, Colorado
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      Appointments Open
                    </div>
                  </div>

                </div>

              </motion.div>

            </div>

            {/* Mobile helpful text */}
            <div className="flex items-center gap-2 bg-zinc-100 p-3 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-500 md:hidden justify-center text-center">
              <span>💡</span> Tap elements inside the workspace preview to edit!
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
                  whileHover={{ x: 4, y: -1 }}
                  className="p-6 bg-white border border-zinc-200 rounded-2xl flex gap-5 items-start transition-all hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-xl scroll-mt-24"
                >
                  <div 
                    className="p-3 border-2 border-zinc-950 rounded-xl shrink-0 shadow-[2.5px_2.5px_0px_rgba(9,9,11,1)]"
                    style={{ backgroundColor: item.color }}
                  >
                    <IconComponent className="w-5 h-5 text-zinc-950" strokeWidth={2.5} />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-zinc-950 flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-650 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA bar inside features */}
        <div className="mt-20 border border-zinc-200 rounded-[32px] p-8 md:p-12 text-center flex flex-col items-center bg-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-4 max-w-2xl leading-none text-zinc-950">
            Ready to build your local authority?
          </h3>
          <p className="text-sm md:text-base font-normal text-zinc-600 mb-8 max-w-xl">
            Choose a starting layout, plug in your brand information, and launch a fast, professional site in under 15 minutes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/dashboard"
              className="px-6 py-3 bg-[#4353FF] hover:bg-[#3442DD] text-white rounded-full font-semibold text-xs transition-all shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Start Building Free
            </a>
            <a 
              href="/pricing"
              className="px-6 py-3 border border-zinc-200 text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-full font-semibold text-xs transition-all cursor-pointer"
            >
              Compare Plans
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}


