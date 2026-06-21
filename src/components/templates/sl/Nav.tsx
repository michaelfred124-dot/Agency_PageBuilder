"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/sterling-law-group';
const NAVY = '#0A0A0A';
const GOLD = '#C9A84C';

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
      <nav className="sticky top-0 z-50 border-b border-white/10" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <Link href={BASE} className="flex items-center gap-3">
            <Scale className="w-6 h-6" style={{ color: GOLD }} />
            <div className="text-left leading-none">
              <div className="text-white font-bold tracking-widest text-xs uppercase">Sterling Law Group</div>
              <div className="text-white/40 text-[8px] uppercase tracking-[0.3em] mt-1 font-mono">Nashville, TN</div>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-300">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`transition-colors relative py-1 ${pathname === href ? 'text-[#C9A84C] font-bold border-b border-[#C9A84C]' : 'hover:text-white'}`}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-mono font-bold uppercase tracking-widest px-5 py-3 transition-all border border-[#C9A84C]/50 hover:border-[#C9A84C]"
              style={{ backgroundColor: GOLD, color: '#0A0A0A' }}>
              Free Consultation
            </Link>
            <button className="lg:hidden text-white/60 hover:text-white p-1" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 top-20 z-50 flex flex-col p-10 gap-7" style={{ backgroundColor: NAVY }}>
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-2xl font-serif italic text-white hover:text-[#C9A84C] transition-colors text-left">{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-6 text-center text-[10px] font-mono font-bold uppercase tracking-widest px-6 py-4 text-[#0A0A0A]"
            style={{ backgroundColor: GOLD }}>Free Consultation</Link>
        </div>
      )}
    </>
  );
}
