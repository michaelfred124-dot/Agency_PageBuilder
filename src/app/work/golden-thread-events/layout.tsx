import React from 'react';
import Link from 'next/link';
import { Flower2, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import GTNav from '@/components/templates/gt/Nav';

const BASE = '/work/golden-thread-events';
const DARK = '#2C1F1F';
const GOLD = '#C49A3C';
const SAGE = '#6B8F6B';

export default function GoldenThreadLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <GTNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: DARK }} className="text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Flower2 className="w-4 h-4" style={{ color: GOLD }} />
                <span className="font-serif italic text-xl tracking-wider">The Golden Thread</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-5">Luxury wedding planning and event design. Charleston, SC. Serving the Southeast.</p>
              <div className="flex gap-4">
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/45">
                {['Full Planning', 'Day-Of Coordination', 'Design & Styling', 'Elopements', 'Corporate Events'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Planning Info</h4>
              <div className="space-y-3 text-[11px] text-white/45">
                <div>Consultations by appointment</div>
                <div>Serving the Southeast &amp; destination</div>
                <div>Booking 2026 &amp; 2027 weddings</div>
              </div>
              <div className="mt-5 text-xs font-bold" style={{ color: GOLD }}>200+ Weddings Planned</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Say Hello</h4>
              <div className="space-y-4 text-[11px] text-white/45">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} /><span>842 Magnolia Lane<br />Charleston, SC 29401</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} /><span>(843) 555-0217</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} /><span>hello@goldenthreadevents.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 The Golden Thread Events · Charleston, SC · Every Detail, Perfected</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Begin Your Journey</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
