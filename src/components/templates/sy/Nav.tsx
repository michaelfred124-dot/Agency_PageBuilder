"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function SYNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href={BASE} className="flex items-end gap-2 group">
            <Sun className="w-5 h-5 mb-1 transition-transform duration-500 group-hover:rotate-90" style={{ color: ROSE }} strokeWidth={1.75} />
            <span
              className="italic text-2xl leading-none tracking-wide"
              style={{ fontFamily: 'var(--font-display)', color: DARK }}
            >
              Solstice
            </span>
            <span
              className="text-[8px] font-bold uppercase tracking-[0.3em] text-black/30 mb-1 hidden sm:inline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Yoga &amp; Wellness
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 py-1"
                  style={{ color: active ? DARK : DARK + '70', fontFamily: 'var(--font-body)' }}
                >
                  <span className="hover:opacity-100 transition-opacity">{label}</span>
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                    style={{
                      backgroundColor: SAGE,
                      width: active ? '100%' : '0%',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`${BASE}/contact`}
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] px-6 py-3 text-white rounded-full transition-all duration-300 hover:gap-2.5 hover:shadow-lg"
              style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)' }}
            >
              Reserve a Mat <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="lg:hidden text-black/60 hover:text-black transition-colors p-1"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-50 flex flex-col p-10 gap-2 bg-[#FDF8F3]">
          {LINKS.map(({ label, href }, i) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 border-b transition-opacity hover:opacity-60"
                style={{ borderColor: DARK + '14' }}
              >
                <span
                  className="text-3xl italic"
                  style={{ fontFamily: 'var(--font-display)', color: active ? SAGE : DARK }}
                >
                  {label}
                </span>
                <span className="text-[10px] font-bold tracking-widest" style={{ color: DARK + '30', fontFamily: 'var(--font-body)' }}>
                  0{i + 1}
                </span>
              </Link>
            );
          })}
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] px-6 py-4 text-white rounded-full"
            style={{ backgroundColor: SAGE, fontFamily: 'var(--font-body)' }}
          >
            Reserve a Mat <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}
