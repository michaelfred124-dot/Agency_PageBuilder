import React from 'react';
import Link from 'next/link';
import { Home, Phone, Mail, MapPin } from 'lucide-react';
import MPNav from '@/components/templates/mp/Nav';
import { Libre_Franklin } from 'next/font/google';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const BASE = '/work/meridian-properties';
const SLATE = '#2E3A47';
const FOREST = '#2D6A4F';

export default function MeridianLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${libreFranklin.variable} min-h-screen bg-white`}>
      <MPNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: SLATE }} className="text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Home className="w-4 h-4" style={{ color: FOREST }} />
                <span className="font-bold tracking-widest text-sm uppercase" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Meridian Properties</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Your trusted Portland metro real estate partner. Buyers, sellers, and investors since 2011.</p>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 600 }}>Zillow Premier Agent · 4.9 Stars</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/45" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                {['Buy a Home', 'Sell Your Home', 'Investment Properties', 'Relocation Services', 'Market Reports'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Office Hours</h4>
              <div className="space-y-2 text-[11px] text-white/45" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
                <div className="flex justify-between"><span>Mon–Fri</span><span>8am–6pm</span></div>
                <div className="flex justify-between"><span>Sat–Sun</span><span>10am–5pm</span></div>
              </div>
              <div className="mt-5 text-xs font-bold" style={{ color: FOREST, fontFamily: 'var(--font-display)', fontWeight: 600 }}>Agents available by appointment</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Portland Office</h4>
              <div className="space-y-4 text-[11px] text-white/45" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: FOREST }} /><span>1420 NW Lovejoy St, Suite 210<br />Portland, OR 97209</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} /><span>(503) 555-0182</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: FOREST }} /><span>hello@meridianproperties.co</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>© 2026 Meridian Properties · Portland, OR · Equal Housing Opportunity</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>Schedule a Consultation</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
