"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { X, Monitor, Tablet, Smartphone } from 'lucide-react';

export default function PreviewWrapper({ 
  children, 
  title, 
  onExit,
  theme,
  pages = [],
  activePageSlug = '/',
  onPageChange
}: { 
  children: React.ReactNode; 
  title: string; 
  onExit?: () => void;
  theme?: { fontFamily?: string; buttonRoundedness?: string; pageBackground?: string };
  pages?: { name: string; slug: string }[];
  activePageSlug?: string;
  onPageChange?: (slug: string) => void;
}) {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.clientWidth || window.innerWidth;
      const availableWidth = parentWidth - (window.innerWidth < 1024 ? 32 : 64);
      
      let targetWidth = 1200;
      if (viewport === 'tablet') targetWidth = 768;
      if (viewport === 'mobile') targetWidth = 375;

      setScale(availableWidth < targetWidth ? availableWidth / targetWidth : 1);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [viewport]);

  useEffect(() => {
    const updateHeight = () => {
      if (innerRef.current && wrapperRef.current) {
        const scaledHeight = innerRef.current.scrollHeight * scale;
        wrapperRef.current.style.height = `${scaledHeight + 16}px`;
      }
    };
    
    updateHeight();
    const timeoutIds = [10, 100, 300, 1000].map(delay => setTimeout(updateHeight, delay));
    
    if (innerRef.current) {
      const observer = new ResizeObserver(updateHeight);
      observer.observe(innerRef.current);
      return () => {
        observer.disconnect();
        timeoutIds.forEach(clearTimeout);
      };
    }
  }, [scale, viewport, children]);

  return (
    <div className="fixed inset-0 flex flex-col bg-[#F8F5F2] font-sans overflow-hidden">
      {/* Dynamic style tag for preview canvas overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        #preview-canvas button, #preview-canvas .btn {
          border-radius: ${
            theme?.buttonRoundedness === 'sharp' ? '0px !important' :
            theme?.buttonRoundedness === 'rounded-xl' ? '12px !important' :
            theme?.buttonRoundedness === 'rounded-full' ? '9999px !important' :
            '12px !important'
          };
        }
        #preview-canvas {
          font-family: ${
            theme?.fontFamily === 'Space Grotesk' ? '"Space Grotesk", sans-serif !important' :
            theme?.fontFamily === 'Serif' ? 'Georgia, serif !important' :
            theme?.fontFamily === 'Mono' ? 'monospace !important' :
            '"Space Grotesk", sans-serif !important'
          };
        }
      `}} />

      <header className="px-6 py-4 bg-black text-white flex items-center justify-between z-50 shrink-0 gap-4">
         <div className="flex items-center gap-4 shrink-0">
           <span className="font-black uppercase tracking-widest text-[10px] hidden sm:block">Preview Mode</span>
           <span className="text-white/40 hidden sm:block">•</span>
           <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
         </div>

         {pages && pages.length > 1 && onPageChange && (
           <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-lg overflow-x-auto max-w-[50%] no-scrollbar">
             {pages.map((p) => (
               <button
                 key={p.slug}
                 onClick={() => onPageChange(p.slug)}
                 className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${activePageSlug === p.slug ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/20'}`}
               >
                 {p.name}
               </button>
             ))}
           </div>
         )}
         
         <div className="flex items-center gap-2 bg-white/10 p-1 rounded-lg shrink-0">
           <button 
             onClick={() => setViewport('desktop')}
             className={`p-1.5 rounded transition-colors ${viewport === 'desktop' ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/20'}`}
             title="Desktop View"
           >
             <Monitor className="w-4 h-4" />
           </button>
           <button 
             onClick={() => setViewport('tablet')}
             className={`p-1.5 rounded transition-colors ${viewport === 'tablet' ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/20'}`}
             title="Tablet View"
           >
             <Tablet className="w-4 h-4" />
           </button>
           <button 
             onClick={() => setViewport('mobile')}
             className={`p-1.5 rounded transition-colors ${viewport === 'mobile' ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/20'}`}
             title="Mobile View"
           >
             <Smartphone className="w-4 h-4" />
           </button>
         </div>

         {onExit ? (
           <button 
             onClick={onExit}
             className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
           >
             <span className="font-black uppercase tracking-widest text-[10px]">Exit</span>
             <X className="w-4 h-4" />
           </button>
         ) : (
           <Link 
             href="/dashboard"
             className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
           >
             <span className="font-black uppercase tracking-widest text-[10px]">Exit</span>
             <X className="w-4 h-4" />
           </Link>
         )}
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 p-4 lg:p-8 flex items-start justify-center w-full" ref={containerRef}>
          <div 
             ref={wrapperRef}
             className="relative shrink-0 transition-all duration-300 flex justify-center"
             style={{ 
               width: (viewport === 'desktop' ? 1200 : viewport === 'tablet' ? 768 : 375) * scale,
             }}
          >
             <div 
               ref={innerRef}
               id="preview-canvas"
               className="@container border-[4px] border-black shadow-[16px_16px_0px_rgba(0,0,0,0.1)] flex flex-col transition-all duration-300 ease-in-out origin-top-left shrink-0 absolute top-0 left-0"
               style={{
                 width: viewport === 'desktop' ? '1200px' : viewport === 'tablet' ? '768px' : '375px',
                 maxWidth: 'none',
                 minHeight: '100%',
                 transform: `scale(${scale})`,
                 backgroundColor: theme?.pageBackground || '#ffffff',
                 ['--color-primary' as any]: (theme as any)?.colorPrimary || '#3b82f6',
                 ['--color-secondary' as any]: (theme as any)?.colorSecondary || '#10b981',
                 ['--color-accent' as any]: (theme as any)?.colorAccent || '#f59e0b',
                 ['--color-text' as any]: (theme as any)?.colorText || '#1a1a1a',
                 ['--color-card' as any]: (theme as any)?.colorCard || '#ffffff',
               }}
             >
                <div className="w-full h-8 bg-black/5 border-b-[4px] border-black flex items-center px-4 gap-2 shrink-0 bg-white">
                   <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black" />
                   <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
                </div>
                <div className="w-full h-full bg-white pointer-events-auto">
                  {children}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
