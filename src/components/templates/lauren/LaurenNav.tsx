"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/lauren-wilson-photo';

const NAV_LINKS = [
  { label: 'Home', href: BASE },
  { label: 'Portfolio', href: `${BASE}/portfolio` },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'Contact', href: `${BASE}/contact` },
];

export default function LaurenNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#1A1A1A] text-white py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-[60] border-b border-white/5">
        <Link href={BASE} className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-serif italic">
            <span className="text-2xl font-bold tracking-wider">L</span>
            <div className="w-px h-5 bg-white/20 mx-0.5" />
            <span className="text-2xl font-bold tracking-wider">W</span>
          </div>
          <div className="flex flex-col leading-none ml-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Lauren Wilson</span>
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-white/40">Photography</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors pb-0.5 ${isActive ? 'text-white border-b border-white' : 'text-white/50 hover:text-white'}`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`${BASE}/contact`}
            className="hidden sm:block border border-white/30 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all"
          >
            Book a Session
          </Link>
          <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[61px] bg-[#1A1A1A] z-50 flex flex-col p-10 gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-2xl font-serif italic text-white hover:text-white/60 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            className="mt-4 border border-white/30 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-center hover:bg-white hover:text-[#1A1A1A] transition-all"
          >
            Book a Session
          </Link>
        </div>
      )}
    </>
  );
}
