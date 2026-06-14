"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';

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
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href={BASE} className="flex items-center gap-2.5">
            <Scale className="w-5 h-5" style={{ color: GOLD }} />
            <div>
              <div className="text-white font-bold tracking-widest text-xs uppercase">Sterling Law Group</div>
              <div className="text-white/40 text-[8px] uppercase tracking-[0.3em]">Colorado Springs, CO</div>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${pathname === href ? 'text-white border-b border-white pb-0.5' : 'text-white/50 hover:text-white'}`}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-all"
              style={{ backgroundColor: GOLD, color: '#fff' }}>
              Free Consultation
            </Link>
            <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 flex flex-col p-10 gap-7" style={{ backgroundColor: NAVY }}>
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-2xl font-serif italic text-white hover:text-white/60 transition-colors">{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest px-6 py-3 text-white"
            style={{ backgroundColor: GOLD }}>Free Consultation</Link>
        </div>
      )}
    </>
  );
}
