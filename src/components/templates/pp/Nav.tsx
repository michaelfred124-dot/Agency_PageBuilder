"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const FOREST = '#134E4A';

const headingFont = { fontFamily: 'var(--font-display)', fontWeight: 800 } as const;
const subheadFont = { fontFamily: 'var(--font-display)', fontWeight: 700 } as const;
const semiBold = { fontFamily: 'var(--font-display)', fontWeight: 600 } as const;

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function PPNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-3">
          <Link href={BASE} className="flex items-center gap-2.5 group">
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: TEAL + '18' }}
            >
              <Heart className="w-4 h-4 fill-current" style={{ color: TEAL }} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm tracking-wide" style={{ ...headingFont, color: FOREST }}>Paws &amp; Pamper</span>
              <span className="text-[8px] uppercase tracking-[0.4em] mt-0.5" style={{ ...semiBold, color: TEAL }}>Pet Spa</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className="relative text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 rounded-sm"
                  style={{ ...semiBold, color: active ? TEAL : '#6B7280' }}
                >
                  <span className="hover:text-[#134E4A] transition-colors duration-200" style={{ color: active ? TEAL : undefined }}>{label}</span>
                  <span
                    className="absolute -bottom-1.5 left-0 h-0.5 rounded-full transition-all duration-300"
                    style={{ backgroundColor: TEAL, width: active ? '100%' : '0%' }}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`${BASE}/contact`}
              className="hidden sm:inline-flex items-center gap-2 text-white text-[10px] uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2"
              style={{ backgroundColor: TEAL, ...semiBold }}
            >
              Book Grooming <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              style={{ color: FOREST }}
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
        <div className="lg:hidden fixed inset-0 top-[4.5rem] z-50 flex flex-col p-8 gap-2 bg-white">
          {LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                className="flex items-center justify-between py-4 border-b border-teal-50 text-3xl transition-colors duration-200 focus:outline-none"
                style={{ ...headingFont, color: active ? TEAL : FOREST }}
              >
                {label}
                <ArrowRight className="w-5 h-5" style={{ color: active ? TEAL : '#CBD5E1' }} />
              </Link>
            );
          })}
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 text-center text-white text-[11px] uppercase tracking-widest px-6 py-4 rounded-full transition-shadow duration-300 hover:shadow-lg"
            style={{ backgroundColor: TEAL, ...semiBold }}
          >
            Book Grooming <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}
