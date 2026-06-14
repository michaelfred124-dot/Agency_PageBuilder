"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const DARK = '#134E4A';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function SCNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href={BASE} className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: TEAL }} />
            <div>
              <span className="font-black tracking-wider text-xs uppercase" style={{ color: DARK }}>Spotless Home Co.</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-black/25 ml-2">Est. 2017</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${pathname === href ? 'border-b-2 pb-0.5' : 'text-black/40 hover:text-black'}`}
                style={{ color: pathname === href ? TEAL : undefined, borderColor: TEAL }}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 text-white"
              style={{ backgroundColor: TEAL }}>
              Get Free Quote
            </Link>
            <button className="lg:hidden text-black/50 hover:text-black" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 flex flex-col p-10 gap-7 bg-white">
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-2xl font-bold hover:opacity-60 transition-opacity" style={{ color: DARK }}>{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest px-6 py-3 text-white"
            style={{ backgroundColor: TEAL }}>Get Free Quote</Link>
        </div>
      )}
    </>
  );
}
