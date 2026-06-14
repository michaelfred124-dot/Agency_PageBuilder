"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench, Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';

const LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Reviews', href: `${BASE}/reviews` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function PHNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-white text-[10px] font-bold uppercase tracking-widest py-2 px-6 text-center hidden sm:flex items-center justify-center gap-6" style={{ backgroundColor: GREEN }}>
        <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> (555) 382-9100</span>
        <span className="text-white/30">·</span>
        <span>24/7 Emergency Service Available</span>
      </div>
      <nav className="sticky top-0 z-50 bg-white border-b border-black/8 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href={BASE} className="flex items-center gap-2">
            <Wrench className="w-4 h-4" style={{ color: GREEN }} />
            <div>
              <div className="font-bold tracking-wider text-xs uppercase" style={{ color: GREEN }}>Valley ProHome</div>
              <div className="text-[8px] uppercase tracking-widest text-black/30">Licensed · Bonded · Insured</div>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${pathname === href ? 'border-b-2 pb-0.5' : 'text-black/40 hover:text-black'}`}
                style={{ color: pathname === href ? GREEN : undefined, borderColor: GOLD }}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href={`${BASE}/contact`}
              className="hidden sm:block text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 text-white"
              style={{ backgroundColor: GREEN }}>
              Book Service Call
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
              className="text-2xl font-bold hover:opacity-60 transition-opacity" style={{ color: GREEN }}>{label}</Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest px-6 py-3 text-white"
            style={{ backgroundColor: GREEN }}>Book Service Call</Link>
        </div>
      )}
    </>
  );
}
