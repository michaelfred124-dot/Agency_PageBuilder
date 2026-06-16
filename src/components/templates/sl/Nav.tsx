"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';
const DARK = '#0F1A33';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function SLNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: NAVY, borderColor: 'rgba(196,154,60,0.18)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <Link href={BASE} className="flex items-center gap-3 group">
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-300"
              style={{ borderColor: GOLD + '55', backgroundColor: GOLD + '12' }}
            >
              <Scale className="w-4 h-4" style={{ color: GOLD }} strokeWidth={1.5} />
            </span>
            <div>
              <div
                className="text-white font-bold tracking-[0.2em] text-sm uppercase leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Sterling Law Group
              </div>
              <div
                className="text-[8px] uppercase tracking-[0.35em] mt-1"
                style={{ color: 'rgba(196,154,60,0.7)', fontFamily: 'var(--font-display)' }}
              >
                Colorado Springs · Est. 1999
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 py-1"
                  style={{
                    color: active ? '#fff' : 'rgba(255,255,255,0.5)',
                    fontFamily: 'var(--font-display)',
                  }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                    style={{
                      backgroundColor: GOLD,
                      width: active ? '100%' : '0%',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:7195550180"
              className="hidden md:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-display)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = GOLD)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)')}
            >
              <Phone className="w-3.5 h-3.5" /> (719) 555-0180
            </a>
            <Link
              href={`${BASE}/contact`}
              className="hidden sm:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300"
              style={{ backgroundColor: GOLD, color: DARK, fontFamily: 'var(--font-display)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Free Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="lg:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] z-50 flex flex-col px-10 py-12 gap-1"
          style={{ backgroundColor: NAVY }}
        >
          <div className="w-14 h-px mb-6" style={{ backgroundColor: GOLD }} />
          {LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-3xl transition-colors border-b border-white/5"
                style={{
                  color: active ? GOLD : '#fff',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-4"
            style={{ backgroundColor: GOLD, color: DARK, fontFamily: 'var(--font-display)' }}
          >
            Schedule Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:7195550180"
            className="mt-4 inline-flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-4 border"
            style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff', fontFamily: 'var(--font-display)' }}
          >
            <Phone className="w-4 h-4" /> (719) 555-0180
          </a>
        </div>
      )}
    </>
  );
}
