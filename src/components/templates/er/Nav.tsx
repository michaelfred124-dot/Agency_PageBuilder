'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const BASE = '/work/ember-and-rye';
const DARK = '#100A05';
const EMBER = '#C2410C';
const CREAM = '#F5EDD8';

const LINKS = [
  { label: 'Menu', href: `${BASE}/menu` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function ERNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(16,10,5,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(194,65,12,0.2)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={BASE} className="flex flex-col leading-none">
            <span
              className="text-2xl tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              Ember & Rye
            </span>
            <span
              className="text-[8px] tracking-[0.4em] uppercase"
              style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
            >
              Chicago · River North
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] font-medium uppercase tracking-[0.25em] transition-colors"
                style={{
                  color: pathname === href ? EMBER : 'rgba(245,237,216,0.7)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Reservation CTA */}
          <div className="hidden md:block">
            <Link
              href={`${BASE}/contact`}
              className="px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] border transition-all hover:bg-[#C2410C] hover:border-[#C2410C]"
              style={{ color: CREAM, borderColor: 'rgba(245,237,216,0.3)', fontFamily: 'var(--font-body)' }}
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
            style={{ color: CREAM }}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ backgroundColor: DARK }}>
          <div className="flex items-center justify-between px-6 h-20">
            <span
              className="text-xl tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              Ember & Rye
            </span>
            <button onClick={() => setOpen(false)} className="p-2" style={{ color: 'rgba(245,237,216,0.6)' }} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            <Link
              href={BASE}
              onClick={() => setOpen(false)}
              className="text-4xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              Home
            </Link>
            {LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-4xl"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
              >
                {label}
              </Link>
            ))}
            <Link
              href={`${BASE}/contact`}
              onClick={() => setOpen(false)}
              className="mt-6 px-10 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] border"
              style={{ color: CREAM, borderColor: EMBER, fontFamily: 'var(--font-body)' }}
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
