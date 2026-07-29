import Image from 'next/image';
import React, { useState } from 'react';
import { Utensils, Coffee, Flame, Sparkles, Award, Star, CheckCircle, Clock } from 'lucide-react';

export { MENU_SCHEMAS } from './menu.schemas';

export const MENU_RENDERERS = {
  ClassicMenu: ({ tagline, title, subtitle, col1Title, col1Items, col2Title, col2Items }: any) => (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-slate-900 relative overflow-hidden font-sans border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Classic Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-amber-600/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-700">{tagline}</span>
            <span className="h-px w-8 bg-amber-600/40" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
          {subtitle && <p className="text-slate-600 text-sm lg:text-base font-normal leading-relaxed">{subtitle}</p>}
        </div>

        {/* 2-Column Menu Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 1 */}
          <div className="space-y-8">
            <div className="border-b-2 border-amber-600/30 pb-3">
              <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center justify-between">
                <span>{col1Title}</span>
                <Utensils className="w-5 h-5 text-amber-600/50" />
              </h3>
            </div>
            <div className="space-y-6">
              {col1Items?.map((item: any, idx: number) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 font-serif font-bold text-lg text-slate-950">
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="text-[9px] font-sans uppercase font-bold tracking-widest bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200/60">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="flex-1 border-b border-dotted border-slate-300 mx-2" />
                    <span className="font-serif font-bold text-amber-800 text-lg">{item.price}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <div className="border-b-2 border-amber-600/30 pb-3">
              <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center justify-between">
                <span>{col2Title}</span>
                <Flame className="w-5 h-5 text-amber-600/50" />
              </h3>
            </div>
            <div className="space-y-6">
              {col2Items?.map((item: any, idx: number) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 font-serif font-bold text-lg text-slate-950">
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="text-[9px] font-sans uppercase font-bold tracking-widest bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200/60">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="flex-1 border-b border-dotted border-slate-300 mx-2" />
                    <span className="font-serif font-bold text-amber-800 text-lg">{item.price}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  ),

  ModernCardMenu: ({ tagline, title, subtitle, items }: any) => {
    const categories = Array.from(new Set((items || []).map((i: any) => i.category || 'All')));
    const [activeTab, setActiveTab] = useState<string>('All');

    const filteredItems = activeTab === 'All' 
      ? (items || [])
      : (items || []).filter((i: any) => i.category === activeTab);

    return (
      <section className="py-20 lg:py-28 bg-white text-slate-900 font-sans border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                {tagline}
              </span>
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-950">{title}</h2>
              {subtitle && <p className="text-slate-500 text-sm lg:text-base mt-2 max-w-xl font-medium">{subtitle}</p>}
            </div>

            {/* Category Filter Tabs */}
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
                <button
                  onClick={() => setActiveTab('All')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'All'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Items
                </button>
                {categories.map((cat: any) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === cat
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems?.map((item: any, idx: number) => (
              <div key={idx} className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img 
                    src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">{item.name}</h3>
                      <span className="font-extrabold text-indigo-600 text-lg shrink-0">{item.price}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>{item.category}</span>
                    <span className="text-indigo-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Order Now →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  },

  CozyBoardMenu: ({ tagline, title, note, sec1Title, sec1Items, sec2Title, sec2Items, sec3Title, sec3Items }: any) => (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] text-stone-900 font-sans border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Rustic Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-800 bg-amber-100/70 border border-amber-200 px-4 py-1.5 rounded-full mb-4">
            <Coffee className="w-3.5 h-3.5 text-amber-700" />
            {tagline}
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-black text-stone-900 tracking-tight mb-3">{title}</h2>
          {note && <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-3.5 py-1 rounded-lg border border-amber-200/50"><Clock className="w-3.5 h-3.5 text-amber-600" /> {note}</div>}
        </div>

        {/* 3-Column Board */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Section 1 */}
          <div className="bg-amber-50/50 border border-amber-200/60 rounded-3xl p-6 lg:p-8 space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-amber-200 pb-3 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-amber-700" />
              {sec1Title}
            </h3>
            <div className="space-y-5">
              {sec1Items?.map((item: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between font-bold text-sm text-stone-900">
                    <span>{item.name}</span>
                    <span className="text-amber-900 font-extrabold ml-2">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-500 font-normal leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-amber-50/50 border border-amber-200/60 rounded-3xl p-6 lg:p-8 space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-amber-200 pb-3 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-amber-700" />
              {sec2Title}
            </h3>
            <div className="space-y-5">
              {sec2Items?.map((item: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between font-bold text-sm text-stone-900">
                    <span>{item.name}</span>
                    <span className="text-amber-900 font-extrabold ml-2">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-500 font-normal leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-amber-50/50 border border-amber-200/60 rounded-3xl p-6 lg:p-8 space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-amber-200 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-700" />
              {sec3Title}
            </h3>
            <div className="space-y-5">
              {sec3Items?.map((item: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between font-bold text-sm text-stone-900">
                    <span>{item.name}</span>
                    <span className="text-amber-900 font-extrabold ml-2">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-500 font-normal leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  ),

  EditorialSteakhouseMenu: ({ tagline, title, subtitle, col1Title, col1Items, col2Title, col2Items }: any) => (
    <section className="py-24 lg:py-32 bg-zinc-950 text-white font-sans relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Dark Luxury Gold Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-extrabold tracking-[0.3em] text-[#C9A84C] bg-amber-950/60 border border-[#C9A84C]/30 px-4 py-1.5 rounded-full inline-block mb-4 shadow-[0_0_15px_rgba(201,168,76,0.2)]">
            {tagline}
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif font-extrabold text-white tracking-tight mb-4">{title}</h2>
          {subtitle && <p className="text-zinc-400 text-sm lg:text-base font-light leading-relaxed">{subtitle}</p>}
        </div>

        {/* 2-Column Steakhouse Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Column 1 */}
          <div className="space-y-8">
            <div className="border-b border-[#C9A84C]/40 pb-3 flex items-center justify-between">
              <h3 className="text-2xl font-serif font-bold text-[#C9A84C] tracking-wide">{col1Title}</h3>
              <Star className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <div className="space-y-8">
              {col1Items?.map((item: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-serif font-bold text-lg text-white tracking-wide">{item.name}</span>
                    <span className="font-serif font-bold text-[#C9A84C] text-lg">{item.price}</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <div className="border-b border-[#C9A84C]/40 pb-3 flex items-center justify-between">
              <h3 className="text-2xl font-serif font-bold text-[#C9A84C] tracking-wide">{col2Title}</h3>
              <Flame className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <div className="space-y-8">
              {col2Items?.map((item: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-serif font-bold text-lg text-white tracking-wide">{item.name}</span>
                    <span className="font-serif font-bold text-[#C9A84C] text-lg">{item.price}</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
};
