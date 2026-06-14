import React from 'react';
import Link from 'next/link';
import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';
import SCNav from '@/components/templates/sc/Nav';

const BASE = '/work/spotless-home-co';
const TEAL = '#0694A2';
const DARK = '#134E4A';

export default function SpotlessLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <SCNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: DARK }} className="text-white pt-14 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="font-black tracking-widest text-sm uppercase">Spotless Home Co.</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-4">Fully insured, background-checked home cleaning. Metro Denver area. Family-owned since 2017.</p>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-400">Fully Insured · Background Checked</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/45">
                {['Standard Cleaning', 'Deep Cleaning', 'Move-In/Out', 'Airbnb Turnover', 'Eco-Friendly', 'One-Time Service'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Service Area</h4>
              <div className="space-y-2 text-[11px] text-white/45">
                {['Denver', 'Aurora', 'Lakewood', 'Arvada', 'Englewood', 'Littleton'].map(city => (
                  <div key={city}>{city}, CO</div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Contact</h4>
              <div className="space-y-4 text-[11px] text-white/45">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-teal-400" /><span>Serving Metro Denver, CO</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0 text-teal-400" /><span>(720) 555-0391</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0 text-teal-400" /><span>book@spotlesshomeco.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Spotless Home Co. · Denver Metro · Satisfaction Guaranteed</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Get a Free Quote</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
