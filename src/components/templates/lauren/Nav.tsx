"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, Phone, Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/lauren-wilson-photo';

const LINKS = [
  { label: 'Home',     href: BASE },
  { label: 'Services', href: `${BASE}/services` },
  { label: 'About Us', href: `${BASE}/about` },
  { label: 'Portfolio',  href: `${BASE}/portfolio` },
  { label: 'Contact',  href: `${BASE}/contact` },
];

export default function LAURENNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href={BASE} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md">
              <Camera className="w-5 h-5 text-stone-400" />
            </div>
            <div className="leading-none text-left">
              <span className="font-sans font-black text-lg tracking-wider text-slate-900">LAUREN WILSON PHOTO</span>
              <div className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500 mt-1">Natural Light Photography</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ label, href }) => {
              const active = pathname === href || (href !== BASE && pathname?.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs font-bold uppercase tracking-widest pb-1 transition-all hover:text-slate-900 ${active ? 'text-slate-900 border-b-2 border-slate-900 font-black' : 'text-slate-500'}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a href="tel:3035550922" className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors">
              <Phone className="w-4 h-4 text-slate-900" />
              <span>Call Us</span>
            </a>
            <Link
              href={`${BASE}/contact`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-6 py-3 bg-slate-900 text-white rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-stone-400" />
              Book Appointment
            </Link>
            <button className="lg:hidden p-2 text-slate-500 hover:text-slate-800" onClick={() => setOpen(!open)}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[76px] z-50 bg-white flex flex-col px-8 py-10 gap-6 animate-fade-in shadow-xl h-[calc(100vh-76px)]">
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-xl font-black uppercase tracking-widest text-slate-900 hover:opacity-60 transition-opacity">
              {label}
            </Link>
          ))}
          <div className="w-full h-px bg-slate-100 my-4" />
          <a href="tel:3035550922" className="flex items-center gap-3 text-lg font-bold text-slate-900">
            <Phone className="w-5 h-5 text-slate-900" />
            <span>(303) 555-0922</span>
          </a>
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)}
            className="text-center text-xs font-black uppercase tracking-wider px-6 py-4 bg-slate-900 text-white rounded-xl shadow-md">
            Book Appointment
          </Link>
        </div>
      )}
    </>
  );
}