import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BASE = '/work/lauren-wilson-photo';

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', cat: 'Weddings', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop', cat: 'Portraits', size: 'wide' },
  { url: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop', cat: 'Couples', size: 'wide' },
  { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop', cat: 'Couples', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', cat: 'Landscapes', size: 'wide' },
  { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop', cat: 'Landscapes', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop', cat: 'Weddings', size: 'wide' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop', cat: 'Landscapes', size: 'wide' },
  { url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop', cat: 'Portraits', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop', cat: 'Weddings', size: 'wide' },
  { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', cat: 'Portraits', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop', cat: 'Weddings', size: 'wide' },
];

const CATS = ['All', 'Portraits', 'Weddings', 'Couples', 'Landscapes'];

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1A1A1A] text-white py-28 px-6 md:px-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 block mb-5">My Work</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Selected Work</h1>
        <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed">
          A curated collection of portraits, weddings, couples, and landscapes captured across Colorado and beyond.
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-black/5 sticky top-[61px] z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-8 overflow-x-auto py-4">
          {CATS.map((cat, i) => (
            <button
              key={cat}
              className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap pb-1 transition-colors ${i === 0 ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]' : 'text-[#1A1A1A]/35 hover:text-[#1A1A1A]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {IMAGES.map((img, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden">
                <div className={`relative overflow-hidden ${img.size === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={img.url}
                    alt={img.cat}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold uppercase tracking-[0.3em] border border-white/40 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.cat}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F5F2] py-20 text-center px-6">
        <span className="text-[#1A1A1A]/35 font-bold uppercase tracking-widest text-[10px] block mb-5">Ready to Create?</span>
        <h2 className="text-3xl md:text-5xl font-serif italic text-[#1A1A1A] mb-8">Let's make something beautiful together.</h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-10 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
        >
          Book Your Session <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
