"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/meridian-properties';
const SLATE = '#1F242E';
const GOLD = '#B8A27A';

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
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <Link href={BASE} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#B8A27A] to-[#E5D5BC] flex items-center justify-center shadow-sm">
              <Home className="w-4 h-4 text-white" />
            </div>
            <div className="text-left leading-none">
              <div className="font-serif font-black tracking-widest text-xs uppercase" style={{ color: SLATE }}>Meridian</div>
              <div className="text-[8px] uppercase tracking-[0.25em] text-[#B8A27A] mt-1 font-mono">Nashville, TN · (615) 555-0265</div>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.2em]">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`transition-colors relative py-1.5 ${pathname === href ? 'text-[#B8A27A] font-black border-b border-[#B8A27A]' : 'text-gray-500 hover:text-black'}`}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-mono font-black uppercase tracking-widest px-6 py-3 transition-all border border-[#B8A27A]/50 hover:border-[#B8A27A] text-white"
              style={{ backgroundColor: GOLD }}>
              Book Valuation
            </Link>
            <button className="lg:hidden text-gray-500 hover:text-black p-1" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 top-20 z-50 flex flex-col p-10 gap-7 bg-white/95 backdrop-blur-xl">
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-2xl font-serif text-gray-800 hover:text-[#B8A27A] transition-colors text-left">{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-6 text-center text-[10px] font-mono font-black uppercase tracking-widest px-6 py-4 text-white"
            style={{ backgroundColor: GOLD }}>Book Valuation</Link>
        </div>
      )}
    </>
  );
}

