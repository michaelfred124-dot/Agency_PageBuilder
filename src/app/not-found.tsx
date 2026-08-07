import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF9FF] text-slate-900 font-sans flex items-center justify-center p-6 relative overflow-hidden">
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-Left Deep Purple Fluid Blob */}
        <svg
          className="absolute -top-24 -left-24 w-[520px] h-[520px] text-[#6528D9] opacity-85 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </svg>

        {/* Top-Right Vibrant Orange Fluid Blob */}
        <svg
          className="absolute -top-16 -right-20 w-[480px] h-[480px] text-[#FF7700] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <div className="absolute top-[28%] left-[7%] w-14 h-14 border-4 border-[#FFB703] rounded-full opacity-75 animate-float-slow hidden md:block" />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <svg className="absolute top-[18%] right-[12%] w-10 h-10 text-[#FF7700] opacity-75 animate-float-reverse hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <polygon points="50,10 90,85 10,85" />
        </svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[20%] right-[5%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[20%] left-[5%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-md w-full text-center space-y-8 relative z-10 bg-white p-10 md:p-12 rounded-[32px] border border-slate-200/90 shadow-2xl shadow-purple-100/40">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#FF5500] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200/80">
            ERROR 404
          </span>
          <h1 className="text-7xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-black text-slate-950 tracking-tight">Page Not Found</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            The page or website you are looking for does not exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center space-x-2 btn-orange-pill text-white px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl"
          >
            <MoveLeft className="w-4 h-4 text-white" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
