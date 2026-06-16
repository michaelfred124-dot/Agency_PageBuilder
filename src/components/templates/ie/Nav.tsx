"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function IENav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/5" style={{ backgroundColor: BLACK }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href={BASE} className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center w-8 h-8" style={{ backgroundColor: ORANGE }}>
              <Dumbbell className="w-4 h-4" style={{ color: BLACK }} />
            </span>
            <span className="flex items-baseline gap-1.5">
              <span className="text-white text-lg uppercase leading-none" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '0.04em' }}>Iron Edge</span>
              <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Fitness</span>
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: isActive ? '#fff' : 'rgba(255,255,255,0.4)' }}
                >
                  <span className="hover:text-white transition-colors">{label}</span>
                  <span
                    className="absolute -bottom-1.5 left-0 h-0.5 transition-all duration-300"
                    style={{ backgroundColor: ORANGE, width: isActive ? '100%' : '0%' }}
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`${BASE}/contact`}
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE, color: BLACK, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Start Today <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button aria-label="Toggle menu" className="lg:hidden text-white/60 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 flex flex-col p-10 gap-1" style={{ backgroundColor: BLACK }}>
          {LINKS.map(({ label, href }, i) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-3 text-4xl uppercase transition-colors"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: isActive ? ORANGE : '#fff' }}
              >
                <span className="text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 700 }}>0{i + 1}</span>
                {label}
              </Link>
            );
          })}
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] px-6 py-4"
            style={{ backgroundColor: ORANGE, color: BLACK, fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Start Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}
