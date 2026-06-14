"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench, Menu, X } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';

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
      <nav className="sticky top-0 z-50" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href={BASE} className="flex items-center gap-2.5">
            <div className="w-1 h-8" style={{ backgroundColor: RED }} />
            <div>
              <div className="text-white font-black tracking-widest text-xs uppercase">Ridge Line Auto</div>
              <div className="text-white/30 text-[8px] uppercase tracking-[0.3em]">Denver, CO · (303) 555-0247</div>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`text-[10px] font-black uppercase tracking-widest transition-colors ${pathname === href ? 'text-white' : 'text-white/45 hover:text-white'}`}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-black uppercase tracking-widest px-5 py-2.5 text-white transition-all"
              style={{ backgroundColor: RED }}>
              Book Service
            </Link>
            <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 flex flex-col p-10 gap-7" style={{ backgroundColor: CHARCOAL }}>
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-white hover:text-white/50 transition-colors">{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-4 text-center text-[10px] font-black uppercase tracking-widest px-6 py-3 text-white"
            style={{ backgroundColor: RED }}>Book Service</Link>
        </div>
      )}
    </>
  );
}
