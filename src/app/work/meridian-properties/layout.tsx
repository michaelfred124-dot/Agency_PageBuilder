import React from 'react';
import Link from 'next/link';
import { Home, Phone, Mail, MapPin } from 'lucide-react';
import MPNav from '@/components/templates/mp/Nav';

const BASE = '/work/meridian-properties';
const SLATE = '#1E3A5F';
const FOREST = '#2D6A4F';

export default function MeridianLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <MPNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: SLATE }} className="text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Home className="w-4 h-4" style={{ color: FOREST }} />
                <span className="font-bold tracking-widest text-sm uppercase">Meridian Properties</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-5">Your trusted Denver metro real estate partner. Buyers, sellers, and investors since 2006.</p>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: FOREST }}>Zillow Premier Agent · 5 Stars</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/45">
                {['Buy a Home', 'Sell Your Home', 'Investment Properties', 'Relocation Services', 'Market Reports'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Office Hours</h4>
              <div className="space-y-2 text-[11px] text-white/45">
                <div className="flex justify-between"><span>Mon–Fri</span><span>8am–6pm</span></div>
                <div className="flex justify-between"><span>Sat–Sun</span><span>10am–5pm</span></div>
              </div>
              <div className="mt-5 text-xs font-bold" style={{ color: FOREST }}>Agents available by appointment</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Denver Office</h4>
              <div className="space-y-4 text-[11px] text-white/45">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: FOREST }} /><span>3300 Cherry Creek N Dr, Ste 200<br />Denver, CO 80209</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} /><span>(720) 555-0492</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} /><span>hello@meridianproperties.co</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Meridian Properties · Denver, CO · Equal Housing Opportunity</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Schedule a Consultation</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
