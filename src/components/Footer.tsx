"use client";
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 bg-white text-slate-900 px-6 border-t border-slate-200/80 relative z-10">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <div className="flex items-center gap-2.5">
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-950 font-extrabold text-sm bg-gradient-to-tr from-sky-300 via-teal-300 to-emerald-300 shadow-sm"
              >
                ✦
              </div>
              <span className="font-extrabold text-slate-900 text-lg tracking-tight select-none">ACTULUS<span className="text-teal-600">.</span></span>
            </div>
            <p className="text-slate-600 font-normal text-sm max-w-sm leading-relaxed">
              Crafting high-performance Next.js websites and headless digital interfaces that accelerate local business growth.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-sky-600">Navigation</h4>
            <div className="flex flex-col space-y-2.5">
              {NAV_LINKS.map(link => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-teal-600">Socials</h4>
            <div className="flex flex-col space-y-2.5">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">LinkedIn</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Twitter // X</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium text-[11px]">
            © 2026 ACTULUS / mfd.agency. All rights reserved.
          </p>
          <p className="text-slate-500 font-medium text-[11px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            Built with React, Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}


