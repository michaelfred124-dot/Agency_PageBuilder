"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Shop', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Visit Us', href: `${BASE}/contact` },
];

export default function MBNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-black/5" style={{ backgroundColor: SAND }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href={BASE} className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" style={{ color: ESPRESSO }} />
            <span className="font-serif italic text-lg tracking-wider" style={{ color: ESPRESSO }}>Maison</span>
            <span className="text-[8px] font-bold uppercase tracking-widest text-black/30 ml-1">Boutique</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${pathname === href ? 'border-b pb-0.5' : 'text-black/40 hover:text-black'}`}
                style={{ color: pathname === href ? ESPRESSO : undefined, borderColor: SAGE }}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 text-white"
              style={{ backgroundColor: ESPRESSO }}>
              Shop Now
            </Link>
            <button className="lg:hidden text-black/50 hover:text-black" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 flex flex-col p-10 gap-7" style={{ backgroundColor: SAND }}>
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-2xl font-serif italic hover:opacity-60 transition-opacity" style={{ color: ESPRESSO }}>{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest px-6 py-3 text-white"
            style={{ backgroundColor: ESPRESSO }}>Shop Now</Link>
        </div>
      )}
    </>
  );
}
