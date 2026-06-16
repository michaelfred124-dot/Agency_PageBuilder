"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scissors, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const WARM_WHITE = '#FAF7F4';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function AHNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ backgroundColor: 'rgba(250,247,244,0.85)', borderColor: CHARCOAL + '12', fontFamily: 'var(--font-body)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href={BASE} className="flex items-center gap-2.5 group">
            <Scissors className="w-4 h-4 transition-transform duration-500 group-hover:-rotate-12" style={{ color: ROSE }} />
            <span
              className="text-2xl tracking-wide leading-none"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, color: CHARCOAL }}
            >
              Atelier
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] ml-1 mt-1.5" style={{ color: CHARCOAL, opacity: 0.3 }}>
              Hair Studio
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative text-[10px] font-bold uppercase tracking-[0.2em] py-1 transition-opacity hover:opacity-100"
                  style={{ color: CHARCOAL, opacity: active ? 1 : 0.55 }}
                >
                  {label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                    style={{ backgroundColor: ROSE, width: active ? '100%' : '0%' }}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`${BASE}/contact`}
              className="hidden sm:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: CHARCOAL }}
            >
              Book Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              className="lg:hidden transition-opacity hover:opacity-60"
              style={{ color: CHARCOAL }}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] z-50 flex flex-col px-10 pt-14 gap-1"
          style={{ backgroundColor: WARM_WHITE, fontFamily: 'var(--font-body)' }}
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.45em] mb-6" style={{ color: ROSE }}>Menu</p>
          {LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-4xl py-3 transition-opacity hover:opacity-60 border-b"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CHARCOAL, borderColor: CHARCOAL + '10', opacity: active ? 1 : 0.7 }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-4 text-white"
            style={{ backgroundColor: ROSE }}
          >
            Book a Consultation <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </>
  );
}
