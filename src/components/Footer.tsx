"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { COLORS, NAV_LINKS } from '@/constants';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="py-20 bg-[#0B0B0B] text-white px-6 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-xs bg-gradient-to-br from-[#FF7F11] to-[#D4AF37] shadow-[0_0_15px_rgba(255,127,17,0.2)]"
              >
                M
              </div>
              <span className="font-extrabold text-white text-sm tracking-tight">michaelfred<span className="text-[#D4AF37]">.</span></span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              michaelfred. agency
            </h3>
            <p className="text-white/60 font-normal text-sm max-w-sm leading-relaxed">
              Crafting high-performance Next.js websites and headless digital interfaces that accelerate business growth.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37]">Navigation</h4>
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map(link => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-white/60 hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37]">Socials</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium text-white/60 hover:text-[#D4AF37] transition-colors">LinkedIn</a>
              <a href="#" className="text-sm font-medium text-white/60 hover:text-[#D4AF37] transition-colors">Twitter // X</a>
              <a href="#" className="text-sm font-medium text-white/60 hover:text-[#D4AF37] transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 font-medium text-[11px]">
            © 2026 Michael Frederick Portfolio. All rights reserved.
          </p>
          <p className="text-white/40 font-medium text-[11px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Built with React, Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

