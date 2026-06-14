import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import LaurenNav from '@/components/templates/lauren/LaurenNav';

const BASE = '/work/lauren-wilson-photo';

export default function LaurenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-[#333333] selection:bg-[#1A1A1A] selection:text-white">
      <LaurenNav />
      <main>{children}</main>

      <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-14 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-7">
                <div className="flex items-center font-serif italic">
                  <span className="text-2xl font-bold">L</span>
                  <div className="w-px h-5 bg-white/20 mx-1" />
                  <span className="text-2xl font-bold">W</span>
                </div>
                <div className="flex flex-col leading-none ml-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Lauren Wilson</span>
                  <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-white/40">Photography</span>
                </div>
              </div>
              <p className="text-white/35 text-[11px] leading-relaxed mb-7 max-w-xs">
                Natural light photographer capturing authentic moments and unforgettable memories. Based in Colorado.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="text-white/30 hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-[0.25em] text-[9px] mb-7 text-white/25">Navigate</h4>
              <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50">
                <Link href={BASE} className="hover:text-white transition-colors">Home</Link>
                <Link href={`${BASE}/portfolio`} className="hover:text-white transition-colors">Portfolio</Link>
                <Link href={`${BASE}/about`} className="hover:text-white transition-colors">About</Link>
                <Link href={`${BASE}/services`} className="hover:text-white transition-colors">Services</Link>
                <Link href={`${BASE}/contact`} className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-[0.25em] text-[9px] mb-7 text-white/25">Portfolio</h4>
              <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50">
                <Link href={`${BASE}/portfolio`} className="hover:text-white transition-colors">Portraits</Link>
                <Link href={`${BASE}/portfolio`} className="hover:text-white transition-colors">Weddings</Link>
                <Link href={`${BASE}/portfolio`} className="hover:text-white transition-colors">Couples</Link>
                <Link href={`${BASE}/portfolio`} className="hover:text-white transition-colors">Landscapes</Link>
                <Link href={`${BASE}/portfolio`} className="hover:text-white transition-colors">Brands</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-[0.25em] text-[9px] mb-7 text-white/25">Contact</h4>
              <div className="space-y-5 text-[10px] font-bold uppercase tracking-widest text-white/50">
                <div className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 text-white/25 shrink-0 mt-0.5" />
                  <span>Colorado, USA</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-3.5 h-3.5 text-white/25 shrink-0 mt-0.5" />
                  <span>(303) 555-1234</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-3.5 h-3.5 text-white/25 shrink-0 mt-0.5" />
                  <span>hello@laurenwilsonphoto.com</span>
                </div>
                <Link
                  href={`${BASE}/contact`}
                  className="inline-block border border-white/20 px-5 py-2.5 hover:bg-white hover:text-[#1A1A1A] transition-all mt-2"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] font-medium uppercase tracking-widest text-white/20">
              © 2026 Lauren Wilson Photography · All Rights Reserved.
            </p>
            <Link href="#" className="text-[9px] font-medium uppercase tracking-widest text-white/20 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
