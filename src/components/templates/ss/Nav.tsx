"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, User, Search, Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

const BASE = '/work/stylish-store';

const LINKS = [
  { label: 'Home',        href: BASE },
  { label: 'Men',         href: `${BASE}/services?category=men` },
  { label: 'Women',       href: `${BASE}/services?category=women` },
  { label: 'Trends',      href: `${BASE}/services?category=trends` },
  { label: 'Collections', href: `${BASE}/about` },
  { label: 'Sale',        href: `${BASE}/services?category=sale` },
  { label: 'Reviews',     href: `${BASE}/reviews` },
  { label: 'Contact',     href: `${BASE}/contact` },
];

export default function SSNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href={BASE} className="flex flex-col text-left group">
            <span className="font-serif italic text-3xl text-slate-900 leading-none tracking-tight font-semibold group-hover:text-blue-600 transition-colors">
              Stylish
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 mt-1 leading-none">
              ONLINE STORE
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-7">
            {LINKS.map(({ label, href }) => {
              const active = pathname === href || (href !== BASE && pathname?.startsWith(href.split('?')[0]));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-[11px] font-black uppercase tracking-widest pb-1 transition-all hover:text-slate-900 border-b-2 ${
                    active ? 'text-slate-900 border-slate-900' : 'text-slate-500 border-transparent hover:border-slate-300'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5">
            <button className="text-slate-500 hover:text-slate-900 transition-colors p-1 hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-slate-500 hover:text-slate-900 transition-colors p-1 hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="text-slate-500 hover:text-slate-900 transition-colors p-1 hidden sm:block">
              <Heart className="w-5 h-5" />
            </button>
            <Link
              href={`${BASE}/services`}
              className="relative p-2 text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-slate-900 text-white text-[9px] font-black rounded-full flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="xl:hidden p-2 text-slate-500 hover:text-slate-800" onClick={() => setOpen(!open)}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden fixed inset-0 top-[80px] z-50 bg-white flex flex-col px-8 py-10 gap-5 animate-fade-in shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="text-lg font-black uppercase tracking-widest text-slate-900 hover:opacity-60 transition-opacity">
              {label}
            </Link>
          ))}
          <div className="w-full h-px bg-slate-100 my-4" />
          <div className="flex items-center gap-6 justify-center">
            <button className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
            <button className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
            <button className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900">
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
