import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import RLNav from '@/components/templates/rl/Nav';
import { Oswald, Roboto } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const BASE = '/work/ridge-line-auto';
const BG = '#0D0D0D';
const FOOTER_BG = '#070707';
const RED = '#E5242A';

export default function RidgeLineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans text-gray-100 selection:bg-red-500 selection:text-white" style={{ backgroundColor: BG }}>
      <RLNav />
      <main className="bg-[#0D0D0D]">{children}</main>
      <footer style={{ backgroundColor: FOOTER_BG }} className="text-white pt-24 pb-12 px-6 md:px-12 border-t border-[#E5242A]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="p-8 border border-white/5 bg-[#121212] rounded-tl-3xl rounded-br-3xl flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-7" style={{ backgroundColor: RED }} />
                  <span className="font-black tracking-widest text-sm uppercase">Ridge Line Auto</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed mb-4">
                  Nashville's premier performance tuning and auto repair shop since 2002. Family owned. ASE certified technicians.
                </p>
              </div>
              <p className="text-[10px] font-mono font-black uppercase tracking-widest" style={{ color: RED }}>
                24-Month/24,000-Mile Warranty
              </p>
            </div>
            
            <div className="p-8 border border-white/5 bg-[#121212] rounded-tr-3xl rounded-bl-3xl">
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#E5242A] mb-6">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-wider text-white/50">
                {['Engine & Performance', 'Brake Systems', 'Suspension Tuning', 'Auto Detailing', 'Diagnostic & Electrical', 'Transmission Service'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white hover:translate-x-1 transition-all duration-300 block">{s}</Link>
                ))}
              </div>
            </div>
            
            <div className="p-8 border border-white/5 bg-[#121212] rounded-tl-3xl rounded-br-3xl">
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#E5242A] mb-6">Shop Hours</h4>
              <div className="space-y-3.5 text-[11px] text-white/50 font-bold uppercase tracking-wider">
                <div className="flex justify-between"><span>Mon–Fri</span><span className="font-mono text-white">7:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-mono text-white">8:00 AM – 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-white/25">Closed</span></div>
              </div>
              <div className="mt-6 text-[10px] font-mono font-black uppercase tracking-wider" style={{ color: RED }}>
                Same-Day Services Available
              </div>
            </div>
            
            <div className="p-8 border border-white/5 bg-[#121212] rounded-tr-3xl rounded-bl-3xl">
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#E5242A] mb-6">Find Our Shop</h4>
              <div className="space-y-4 text-[11px] text-white/50 font-medium">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
                  <span className="leading-relaxed">4820 Nolensville Pike<br />Nashville, TN 37211</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: RED }} />
                  <a href="tel:6155550174" className="hover:text-white transition-colors">(615) 555-0174</a>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: RED }} />
                  <a href="mailto:service@ridgelineauto.com" className="hover:text-white transition-colors">service@ridgelineauto.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <p>© 2026 Ridge Line Auto · Nashville, TN · ASE Certified</p>
            <Link href={`${BASE}/contact`} className="hover:text-[#E5242A] transition-colors">Book an Appointment &rarr;</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
