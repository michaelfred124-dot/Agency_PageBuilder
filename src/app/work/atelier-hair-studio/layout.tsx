import React from 'react';
import Link from 'next/link';
import { Scissors, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import AHNav from '@/components/templates/ah/Nav';

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';

export default function AtelierLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <AHNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: CHARCOAL }} className="text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Scissors className="w-4 h-4" style={{ color: ROSE }} />
                <span className="font-serif italic text-xl tracking-wider">Atelier</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-5">Luxury hair artistry in Austin, TX. Where sustainable beauty meets expert craft.</p>
              <div className="flex gap-4">
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/45">
                {['Haircuts', 'Color & Highlights', 'Keratin Treatments', 'Bridal Hair', 'Extensions', 'Scalp Treatments'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Hours</h4>
              <div className="space-y-2 text-[11px] text-white/45">
                <div className="flex justify-between"><span>Tue–Sat</span><span>9am–7pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>10am–4pm</span></div>
                <div className="flex justify-between"><span>Monday</span><span className="text-white/25">Closed</span></div>
              </div>
              <div className="mt-5 text-xs font-bold" style={{ color: ROSE }}>By Appointment · Walk-ins Welcome</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Visit Us</h4>
              <div className="space-y-4 text-[11px] text-white/45">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ROSE }} /><span>1204 South Congress Ave<br />Austin, TX 78704</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: ROSE }} /><span>(512) 555-0318</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: ROSE }} /><span>hello@atelierhair.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Atelier Hair Studio · Austin, TX · Where Hair Becomes Art</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Book Your Appointment</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
