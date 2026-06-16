import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BASE = '/work/lauren-wilson-photo';

const DARK = '#1A1A1A';
const WARM_SAND = '#F0EBE3';
const FOREST = '#3D5A4C';
const OFF_WHITE = '#FDFBF9';

// Rich gallery with varied sizes for asymmetric grid
const GALLERY = [
  // Portraits
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop', cat: 'Portraits', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', cat: 'Portraits', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop', cat: 'Portraits', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2064&auto=format&fit=crop', cat: 'Portraits', span: 'col-span-2 row-span-1' },
  // Couples
  { url: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop', cat: 'Couples', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop', cat: 'Couples', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop', cat: 'Couples', span: 'col-span-2 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?q=80&w=2069&auto=format&fit=crop', cat: 'Couples', span: 'col-span-1 row-span-1' },
  // Families
  { url: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop', cat: 'Families', span: 'col-span-2 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?q=80&w=2070&auto=format&fit=crop', cat: 'Families', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=2025&auto=format&fit=crop', cat: 'Families', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1484665754804-74b091211472?q=80&w=2070&auto=format&fit=crop', cat: 'Families', span: 'col-span-1 row-span-1' },
  // Landscapes
  { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', cat: 'Landscapes', span: 'col-span-2 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop', cat: 'Landscapes', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop', cat: 'Landscapes', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070&auto=format&fit=crop', cat: 'Landscapes', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2070&auto=format&fit=crop', cat: 'Landscapes', span: 'col-span-2 row-span-1' },
  // Mixed finale
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', cat: 'Couples', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop', cat: 'Couples', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop', cat: 'Couples', span: 'col-span-1 row-span-1' },
];

const CATS = ['Portraits', 'Couples', 'Families', 'Landscapes'];

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: OFF_WHITE }} className="py-20 px-6 md:px-16 border-b border-black/5">
        <div className="max-w-4xl">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-6"
            style={{ fontFamily: 'var(--font-body)', color: `${DARK}55` }}
          >
            My Work
          </span>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: FOREST }} />
          <h1
            className="text-6xl md:text-8xl leading-[0.9]"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
          >
            Selected Work
          </h1>
          <p
            className="mt-8 text-base max-w-md leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: `${DARK}60` }}
          >
            A curated collection of portraits, couples, families, and landscapes captured across Colorado and beyond.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <div style={{ backgroundColor: WARM_SAND }} className="py-5 px-6 md:px-12 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.4em] mr-4 shrink-0"
            style={{ fontFamily: 'var(--font-body)', color: `${DARK}40` }}
          >
            Browse By:
          </span>
          {CATS.map((cat) => (
            <span
              key={cat}
              className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap px-5 py-2 shrink-0"
              style={{ fontFamily: 'var(--font-body)', border: `1px solid ${DARK}20`, color: DARK }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Masonry columns gallery */}
      <section style={{ backgroundColor: DARK }} className="py-12 px-4 md:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
            {GALLERY.map((img, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden">
                <div
                  className={`relative overflow-hidden ${
                    i % 5 === 0 ? 'aspect-[3/4]' :
                    i % 5 === 1 ? 'aspect-[4/3]' :
                    i % 5 === 2 ? 'aspect-square' :
                    i % 5 === 3 ? 'aspect-[2/3]' :
                    'aspect-[16/9]'
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.cat}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-400 flex flex-col items-center justify-center">
                    <span
                      className="text-white text-[9px] font-bold uppercase tracking-[0.4em] border border-white/50 px-5 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {img.cat}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured showcase - large asymmetric grid */}
      <section style={{ backgroundColor: WARM_SAND }} className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-4"
              style={{ fontFamily: 'var(--font-body)', color: `${DARK}50` }}
            >
              Featured Work
            </span>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: DARK }}
            >
              A few favorites
            </h2>
          </div>

          {/* Asymmetric CSS grid layout */}
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridTemplateRows: 'repeat(4, 220px)',
            }}
          >
            {/* Large left anchor */}
            <div className="relative overflow-hidden group" style={{ gridColumn: '1 / 6', gridRow: '1 / 3' }}>
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                alt="Wedding"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6">
                <span
                  className="text-white text-[9px] font-bold uppercase tracking-[0.4em] bg-black/40 px-4 py-2 backdrop-blur-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Couples
                </span>
              </div>
            </div>
            {/* Top right */}
            <div className="relative overflow-hidden group" style={{ gridColumn: '6 / 10', gridRow: '1 / 2' }}>
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                alt="Portrait"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Top far right tall */}
            <div className="relative overflow-hidden group" style={{ gridColumn: '10 / 13', gridRow: '1 / 3' }}>
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
                alt="Landscape"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Middle right */}
            <div className="relative overflow-hidden group" style={{ gridColumn: '6 / 10', gridRow: '2 / 3' }}>
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop"
                alt="Portrait"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Bottom wide left */}
            <div className="relative overflow-hidden group" style={{ gridColumn: '1 / 7', gridRow: '3 / 5' }}>
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                alt="Landscape"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6">
                <span
                  className="text-white text-[9px] font-bold uppercase tracking-[0.4em] bg-black/40 px-4 py-2 backdrop-blur-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Landscapes
                </span>
              </div>
            </div>
            {/* Bottom mid */}
            <div className="relative overflow-hidden group" style={{ gridColumn: '7 / 10', gridRow: '3 / 4' }}>
              <Image
                src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop"
                alt="Couples"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Bottom right tall */}
            <div className="relative overflow-hidden group" style={{ gridColumn: '10 / 13', gridRow: '3 / 5' }}>
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
                alt="Portrait"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Bottom mid bottom */}
            <div className="relative overflow-hidden group" style={{ gridColumn: '7 / 10', gridRow: '4 / 5' }}>
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
                alt="Landscape"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: DARK }} className="py-24 text-center px-6">
        <span
          className="font-bold uppercase tracking-widest text-[10px] block mb-5"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.35)' }}
        >
          Ready to Create?
        </span>
        <h2
          className="text-3xl md:text-5xl mb-10"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff' }}
        >
          Let's make something beautiful together.
        </h2>
        <Link
          href={`${BASE}/contact`}
          className="inline-flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-widest text-[11px] hover:opacity-85 transition-opacity"
          style={{ fontFamily: 'var(--font-body)', backgroundColor: FOREST, color: '#fff' }}
        >
          Book Your Session <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
