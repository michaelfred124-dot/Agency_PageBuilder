"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/ridge-line-auto';
const BG = '#0D0D0D';
const RED = '#E5242A';
const MUTED = 'rgba(255,255,255,0.45)';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function RLNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#E5242A]/20" style={{ backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <Link href={BASE} className="flex items-center gap-3">
            <div className="w-1.5 h-8" style={{ backgroundColor: RED }} />
            <div className="text-left leading-none">
              <div className="text-white font-black tracking-widest text-sm uppercase">Ridge Line Auto</div>
              <div className="text-white/30 text-[8px] uppercase tracking-[0.3em] mt-1 font-mono">Nashville, TN · (615) 555-0174</div>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.2em]">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`transition-colors relative py-1.5 ${pathname === href ? 'text-[#E5242A] font-black border-b border-[#E5242A]' : 'text-white/60 hover:text-white'}`}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-mono font-black uppercase tracking-widest px-6 py-3 transition-all border border-[#E5242A]/50 hover:border-[#E5242A] text-white"
              style={{ backgroundColor: RED }}>
              Book Service
            </Link>
            <button className="lg:hidden text-white/60 hover:text-white p-1" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden fixed inset-0 top-20 z-50 flex flex-col p-10 gap-7" style={{ backgroundColor: BG }}>
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-white hover:text-[#E5242A] transition-colors text-left">{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-6 text-center text-[10px] font-mono font-black uppercase tracking-widest px-6 py-4 text-white"
            style={{ backgroundColor: RED }}>Book Service</Link>
        </div>
      )}
    </>
  );
}

