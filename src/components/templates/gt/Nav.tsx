"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flower2, Menu, X } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/golden-thread-events';
const DARK = '#2C1F1F';
const GOLD = '#C49A3C';
const SAGE = '#6B8F6B';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function GTNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href={BASE} className="flex items-center gap-2">
            <Flower2 className="w-4 h-4" style={{ color: GOLD }} />
            <span className="font-serif italic text-lg tracking-wider" style={{ color: DARK }}>The Golden Thread</span>
            <span className="text-[8px] font-bold uppercase tracking-widest text-black/25 ml-1">Events</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${pathname === href ? 'border-b pb-0.5' : 'text-black/40 hover:text-black'}`}
                style={{ color: pathname === href ? DARK : undefined, borderColor: GOLD }}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 text-white"
              style={{ backgroundColor: SAGE }}>
              Begin Your Journey
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
              className="text-2xl font-serif italic hover:opacity-60 transition-opacity" style={{ color: DARK }}>{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest px-6 py-3 text-white"
            style={{ backgroundColor: SAGE }}>Begin Your Journey</Link>
        </div>
      )}
    </>
  );
}
