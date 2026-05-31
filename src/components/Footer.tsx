"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { COLORS, NAV_LINKS } from '@/constants';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="py-20 bg-[#F7F8FA] text-zinc-900 px-6 border-t border-zinc-200/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-xs bg-zinc-950"
              >
                M
              </div>
              <span className="font-extrabold text-zinc-950 text-sm tracking-tight">michaelfred.</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-900">
              michaelfred. agency
            </h3>
            <p className="text-zinc-600 font-normal text-sm max-w-sm leading-relaxed">
              Crafting high-performance Next.js websites and headless digital interfaces that accelerate business growth.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-400">Navigation</h4>
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map(link => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-400">Socials</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Twitter // X</a>
              <a href="#" className="text-sm font-medium text-zinc-650 hover:text-black transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 font-medium text-[11px]">
            © 2026 Michael Frederick Portfolio. All rights reserved.
          </p>
          <p className="text-zinc-450 font-medium text-[11px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Built with React, Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

