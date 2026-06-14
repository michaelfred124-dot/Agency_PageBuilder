import React from 'react';
import Link from 'next/link';
import { Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';
import RLNav from '@/components/templates/rl/Nav';

const BASE = '/work/ridge-line-auto';
const CHARCOAL = '#1C1C1C';
const RED = '#C0392B';

export default function RidgeLineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <RLNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: CHARCOAL }} className="text-white pt-14 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-7" style={{ backgroundColor: RED }} />
                <span className="font-black tracking-widest text-sm uppercase">Ridge Line Auto</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-4">ASE Certified auto repair and maintenance for all makes and models. Honest work, fair prices, done right the first time.</p>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>24-Month/24,000-Mile Warranty</p>
            </div>
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-5">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-black uppercase tracking-widest text-white/45">
                {['Oil & Fluids', 'Brake Service', 'Engine Repair', 'Tires & Alignment', 'AC & Heating', 'Diagnostics'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-5">Hours</h4>
              <div className="space-y-2 text-[11px] text-white/45 font-bold uppercase tracking-widest">
                <div className="flex justify-between"><span>Mon–Fri</span><span>7am–6pm</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>8am–4pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-white/25">Closed</span></div>
              </div>
              <div className="mt-5 text-xs font-black uppercase" style={{ color: RED }}>Same-Day Service Available</div>
            </div>
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-5">Find Us</h4>
              <div className="space-y-4 text-[11px] text-white/45">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: RED }} /><span>2214 Industrial Blvd<br />Denver, CO 80211</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: RED }} /><span>(303) 555-0247</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: RED }} /><span>service@ridgeline-auto.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Ridge Line Auto Service · Denver, CO · ASE Certified</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Book an Appointment</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
