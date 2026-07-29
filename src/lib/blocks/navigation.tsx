import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, Menu, X, ArrowRight, Sparkles, Shield, ChevronDown } from 'lucide-react';

export { NAV_SCHEMAS } from './navigation.schemas';

/**
 * Smart Hook that observes container width and overflow.
 * If container width < 1024px OR if navigation links don't fit on one line, returns true (collapsed into hamburger menu).
 */
function useNavCollapse(containerRef: React.RefObject<HTMLDivElement | null>, navRef: React.RefObject<HTMLElement | null>, links: any[]) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const checkCollapse = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;

      // Collapse if container width is < 1024px
      let shouldCollapse = width < 1024;

      // Also check if nav items overflow horizontally when on larger screens
      if (!shouldCollapse && navRef.current) {
        if (navRef.current.scrollWidth > navRef.current.clientWidth + 10) {
          shouldCollapse = true;
        }
      }

      setIsCollapsed(shouldCollapse);
    };

    checkCollapse();
    const observer = new ResizeObserver(checkCollapse);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerRef, navRef, links]);

  return isCollapsed;
}

export const NAV_RENDERERS = {
  FloatingPillNav: (props: any) => {
    const { phone, buttonText, buttonLink, links } = props;
    const brand = props.brandName || props.logoText || props.businessName || 'BRAND NAME';
    const [mobileOpen, setMobileOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const isCollapsed = useNavCollapse(containerRef, navRef, links);

    return (
      <header ref={containerRef} className="sticky top-0 z-50 px-4 py-2 max-w-6xl mx-auto font-sans w-full">
        <div className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between transition-all">
          
          <Link href="#" className="flex items-center gap-2 font-black tracking-tight text-slate-900 text-lg shrink-0">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white text-xs font-black shadow-sm">
              ⚡
            </span>
            <span>{brand}</span>
          </Link>

          {!isCollapsed ? (
            <>
              <nav ref={navRef} className="flex items-center gap-6 overflow-hidden">
                {links?.map((link: any, idx: number) => (
                  <a key={idx} href={link.href || link.url || '#'} className="text-xs font-bold text-slate-600 hover:text-slate-950 transition-colors uppercase tracking-wider whitespace-nowrap">
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3 shrink-0">
                {phone && (
                  <a href={`tel:${phone}`} className="text-xs font-extrabold text-slate-700 hover:text-indigo-600 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                    <Phone className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{phone}</span>
                  </a>
                )}
                {buttonText && (
                  <a 
                    href={buttonLink || "#"}
                    className="bg-slate-950 hover:bg-slate-800 text-white text-xs font-extrabold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition-all whitespace-nowrap"
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            </>
          ) : (
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="p-2 text-slate-700 hover:text-slate-950 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>

        {isCollapsed && mobileOpen && (
          <div className="mt-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {links?.map((link: any, idx: number) => (
                <a key={idx} href={link.href || link.url || '#'} onClick={() => setMobileOpen(false)} className="text-sm font-bold text-slate-700 hover:text-indigo-600 py-1.5 border-b border-slate-50 last:border-0">
                  {link.label}
                </a>
              ))}
            </nav>
            {buttonText && (
              <a 
                href={buttonLink || "#"}
                className="w-full bg-slate-950 text-white text-xs font-extrabold py-3.5 rounded-xl text-center shadow-md active:scale-98 transition-transform"
              >
                {buttonText}
              </a>
            )}
          </div>
        )}
      </header>
    );
  },

  CorporateTopNav: (props: any) => {
    const { topNotice, email, phone, tagline, ctaText, ctaLink, links } = props;
    const brand = props.brandName || props.logoText || props.businessName || 'BRAND NAME';
    const [mobileOpen, setMobileOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const isCollapsed = useNavCollapse(containerRef, navRef, links);

    return (
      <header ref={containerRef} className="w-full font-sans sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="bg-slate-950 text-slate-300 py-2 px-6 text-xs font-medium border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
            <span className="font-semibold text-slate-200">{topNotice || '⚡ Welcome to our brand portal'}</span>
            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400">
              {email && <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-sky-400" /> {email}</span>}
              {phone && <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {phone}</span>}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="shrink-0">
            <Link href="#" className="font-extrabold text-xl text-slate-950 tracking-tight block leading-none">
              {brand}
            </Link>
            {tagline && <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mt-1">{tagline}</span>}
          </div>

          {!isCollapsed ? (
            <>
              <nav ref={navRef} className="flex items-center gap-8 overflow-hidden">
                {links?.map((link: any, idx: number) => (
                  <a key={idx} href={link.href || link.url || '#'} className="text-xs font-extrabold text-slate-700 hover:text-indigo-600 transition-colors uppercase tracking-wider whitespace-nowrap">
                    {link.label}
                  </a>
                ))}
              </nav>

              {ctaText && (
                <div className="flex items-center gap-4 shrink-0">
                  <a 
                    href={ctaLink || "#"}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 whitespace-nowrap"
                  >
                    {ctaText}
                  </a>
                </div>
              )}
            </>
          ) : (
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>

        {isCollapsed && mobileOpen && (
          <div className="bg-slate-50 border-t border-slate-200 p-6 space-y-4">
            <nav className="flex flex-col gap-3">
              {links?.map((link: any, idx: number) => (
                <a key={idx} href={link.href || link.url || '#'} onClick={() => setMobileOpen(false)} className="text-sm font-bold text-slate-800 py-2 border-b border-slate-200/60 last:border-0">
                  {link.label}
                </a>
              ))}
            </nav>
            {ctaText && (
              <a href={ctaLink || "#"} className="block w-full bg-indigo-600 text-white text-xs font-extrabold py-3.5 rounded-xl text-center shadow-md">
                {ctaText}
              </a>
            )}
          </div>
        )}
      </header>
    );
  },

  LuxuryCenteredNav: (props: any) => {
    const { tagline, ctaText, ctaLink, links } = props;
    const brand = props.brandName || props.logoText || props.businessName || 'BRAND NAME';
    const [mobileOpen, setMobileOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const isCollapsed = useNavCollapse(containerRef, navRef, links);

    return (
      <header ref={containerRef} className="w-full bg-[#FAF8F5] border-b border-stone-200 py-6 px-6 font-serif sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="w-full flex items-center justify-between relative mb-3">
            <div className="text-center mx-auto">
              <Link href="#" className="text-2xl lg:text-3xl font-bold tracking-widest text-stone-900 uppercase">
                {brand}
              </Link>
              {tagline && <span className="block text-[9px] font-sans font-bold tracking-[0.3em] text-stone-400 uppercase mt-1">{tagline}</span>}
            </div>

            {isCollapsed && (
              <button onClick={() => setMobileOpen(!mobileOpen)} className="absolute right-0 p-2 text-stone-800">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>

          {!isCollapsed && (
            <div className="w-full pt-4 border-t border-stone-200/80 flex items-center justify-between font-sans">
              <nav ref={navRef} className="flex items-center justify-center gap-8 mx-auto overflow-hidden">
                {links?.map((link: any, idx: number) => (
                  <a key={idx} href={link.href || link.url || '#'} className="text-xs font-bold text-stone-600 hover:text-stone-950 uppercase tracking-widest transition-colors whitespace-nowrap">
                    {link.label}
                  </a>
                ))}
              </nav>

              {ctaText && (
                <a 
                  href={ctaLink || "#"} 
                  className="inline-block text-xs font-bold uppercase tracking-widest text-amber-900 border border-amber-900/30 px-4 py-2 rounded hover:bg-amber-900 hover:text-white transition-all whitespace-nowrap"
                >
                  {ctaText}
                </a>
              )}
            </div>
          )}

          {isCollapsed && mobileOpen && (
            <div className="w-full pt-4 space-y-3 text-center font-sans border-t border-stone-200 mt-3">
              {links?.map((link: any, idx: number) => (
                <a key={idx} href={link.href || link.url || '#'} onClick={() => setMobileOpen(false)} className="block text-xs font-bold text-stone-800 py-2 uppercase tracking-widest border-b border-stone-100">
                  {link.label}
                </a>
              ))}
              {ctaText && (
                <a href={ctaLink || "#"} className="block w-full bg-stone-900 text-white font-bold text-xs uppercase tracking-widest py-3 rounded mt-2">
                  {ctaText}
                </a>
              )}
            </div>
          )}

        </div>
      </header>
    );
  },

  BrutalistNav: (props: any) => {
    const { statusText, ctaText, ctaLink, links } = props;
    const brand = props.brandName || props.logoText || props.businessName || 'BRAND NAME';
    const [mobileOpen, setMobileOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const isCollapsed = useNavCollapse(containerRef, navRef, links);

    return (
      <header ref={containerRef} className="w-full bg-yellow-300 border-b-4 border-black p-4 lg:p-6 font-sans sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-4 shrink-0">
            <Link href="#" className="font-black text-xl lg:text-2xl text-black tracking-tighter uppercase bg-white border-2 border-black px-3 py-1 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              {brand}
            </Link>
            {statusText && (
              <span className="hidden sm:inline-block bg-white text-black font-extrabold text-[10px] uppercase tracking-wider border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                {statusText}
              </span>
            )}
          </div>

          {!isCollapsed ? (
            <>
              <nav ref={navRef} className="flex items-center gap-6 overflow-hidden">
                {links?.map((link: any, idx: number) => (
                  <a key={idx} href={link.href || link.url || '#'} className="text-xs font-black text-black hover:underline uppercase tracking-wider whitespace-nowrap">
                    {link.label}
                  </a>
                ))}
              </nav>

              {ctaText && (
                <div className="shrink-0">
                  <a 
                    href={ctaLink || "#"} 
                    className="bg-black text-white font-black text-xs uppercase tracking-wider px-5 py-3 border-2 border-black shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block whitespace-nowrap"
                  >
                    {ctaText}
                  </a>
                </div>
              )}
            </>
          ) : (
            <button onClick={() => setMobileOpen(!mobileOpen)} className="bg-white p-2 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>

        {isCollapsed && mobileOpen && (
          <div className="mt-4 bg-white border-2 border-black p-5 space-y-3 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {links?.map((link: any, idx: number) => (
              <a key={idx} href={link.href || link.url || '#'} onClick={() => setMobileOpen(false)} className="block text-xs font-black text-black uppercase py-1.5 border-b border-gray-100 last:border-0">
                {link.label}
              </a>
            ))}
            {ctaText && (
              <a href={ctaLink || "#"} className="block w-full bg-black text-white text-center font-black text-xs py-3.5 uppercase border-2 border-black mt-2">
                {ctaText}
              </a>
            )}
          </div>
        )}
      </header>
    );
  }
};
