'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const BASE = '/work/solene-boutique';
const MIDNIGHT = '#18181B';
const GOLD = '#C9A84C';
const CREAM = '#F8F4EE';

const LINKS = [
  { label: 'Shop', href: `${BASE}/shop` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function SENav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(253,250,246,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(24,24,27,0.08)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={BASE} className="flex flex-col leading-none">
            <span
              className="text-xl tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: MIDNIGHT }}
            >
              Solène
            </span>
            <span
              className="text-[9px] tracking-[0.35em] uppercase"
              style={{ color: '#9B9189', fontFamily: 'var(--font-body)' }}
            >
              Portland · Est. 2019
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] font-medium uppercase tracking-[0.2em] transition-colors"
                style={{
                  color: pathname === href ? GOLD : MIDNIGHT,
                  fontFamily: 'var(--font-body)',
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={`${BASE}/shop`}
              className="flex items-center gap-2 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: MIDNIGHT, fontFamily: 'var(--font-body)' }}
            >
              <ShoppingBag className="w-3.5 h-3.5" /> Shop Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
            style={{ color: MIDNIGHT }}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ backgroundColor: MIDNIGHT }}
        >
          <div className="flex items-center justify-between px-6 h-16">
            <span
              className="text-xl text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
            >
              Solène
            </span>
            <button onClick={() => setOpen(false)} className="p-2 text-white/60 hover:text-white" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            <Link
              href={BASE}
              onClick={() => setOpen(false)}
              className="text-3xl text-white"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
            >
              Home
            </Link>
            {LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-3xl text-white"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                {label}
              </Link>
            ))}
            <Link
              href={`${BASE}/shop`}
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white border border-white/30"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
