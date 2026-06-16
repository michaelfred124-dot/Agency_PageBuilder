"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/meridian-properties';
const SLATE = '#2E3A47';
const FOREST = '#2D6A4F';

const displayFont = { fontFamily: 'var(--font-display)', fontWeight: 800 } as const;
const semiBold = { fontFamily: 'var(--font-display)', fontWeight: 600 } as const;

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function MPNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/[0.07]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[68px]">
          <Link href={BASE} className="flex items-center gap-2.5 group">
            <Home className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" style={{ color: FOREST }} />
            <span className="leading-none">
              <span className="block text-[13px] tracking-[0.18em] uppercase" style={{ ...displayFont, color: SLATE }}>Meridian Properties</span>
              <span className="block text-[8px] uppercase tracking-[0.35em] text-black/30 mt-0.5" style={semiBold}>Portland Metro Real Estate</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 py-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ ...semiBold, color: active ? SLATE : 'rgba(0,0,0,0.42)' }}
                >
                  {label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 ease-out"
                    style={{ backgroundColor: FOREST, width: active ? '100%' : '0%' }}
                  />
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ease-out" style={{ backgroundColor: FOREST }} />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`${BASE}/contact`}
              className="hidden sm:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] px-6 py-3 text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: FOREST, ...semiBold }}
            >
              Schedule Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              className="lg:hidden text-black/50 hover:text-black transition-colors p-1"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[68px] z-50 flex flex-col px-8 py-10 gap-1 bg-white">
          {LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 border-b border-black/[0.06] text-3xl transition-colors"
                style={{ ...displayFont, color: active ? FOREST : SLATE }}
              >
                {label}
                {active && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: FOREST }} />}
              </Link>
            );
          })}
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 text-center text-[11px] uppercase tracking-[0.2em] px-6 py-4 text-white"
            style={{ backgroundColor: FOREST, ...semiBold }}
          >
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}
