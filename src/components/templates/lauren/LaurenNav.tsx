"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/lauren-wilson-photo';

const DARK = '#1A1A1A';
const FOREST = '#3D5A4C';

const NAV_LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Portfolio', href: `${BASE}/portfolio` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function LaurenNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="text-white py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-[60] border-b border-white/5"
        style={{ backgroundColor: DARK }}
      >
        {/* Wordmark */}
        <Link href={BASE} className="flex items-center gap-2 group" aria-label="Lauren Wilson Photography — home">
          <div
            className="flex items-center"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic' }}
          >
            <span className="text-2xl">L</span>
            <div className="w-px h-5 bg-white/20 mx-1.5" />
            <span className="text-2xl">W</span>
          </div>
          <div className="flex flex-col leading-none ml-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-body)' }}>
              Lauren Wilson
            </span>
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-white/40 mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
              Photography
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative text-[11px] font-semibold uppercase tracking-[0.2em] pb-1 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
                style={{
                  color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {label}
                <span
                  className="absolute left-0 -bottom-0.5 h-px transition-all duration-300"
                  style={{
                    width: isActive ? '100%' : '0%',
                    backgroundColor: FOREST,
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:gap-3"
            style={{ backgroundColor: FOREST, fontFamily: 'var(--font-body)' }}
          >
            Book a Session <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[61px] z-50 flex flex-col px-8 pt-12 pb-10"
          style={{ backgroundColor: DARK }}
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.4em] mb-8"
            style={{ color: FOREST, fontFamily: 'var(--font-body)' }}
          >
            Menu
          </span>
          <div className="flex flex-col gap-7">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-3xl italic transition-colors"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: isActive ? FOREST : '#FFFFFF',
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            className="mt-12 inline-flex items-center justify-center gap-2 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
            style={{ backgroundColor: FOREST, fontFamily: 'var(--font-body)' }}
          >
            Book a Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}
