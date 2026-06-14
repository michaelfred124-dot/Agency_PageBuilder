import React from 'react';
import Link from 'next/link';
import { Smile, Phone, Mail, MapPin } from 'lucide-react';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import CDNav from '@/components/templates/cd/Nav';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const BASE = '/work/clarity-dental';
const NAVY = '#0C2340';
const SKY = '#0284C7';

export default function ClarityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${dmSerif.variable} ${dmSans.variable} min-h-screen bg-white`}>
      <CDNav />
      <main style={{ fontFamily: 'var(--font-body)' }}>{children}</main>
      <footer style={{ backgroundColor: NAVY, fontFamily: 'var(--font-body)' }} className="text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Smile className="w-5 h-5" style={{ color: SKY }} />
                <span className="font-bold tracking-widest text-sm uppercase">Clarity Dental Studio</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-4">Comprehensive family and cosmetic dentistry. Accepting new patients. Most insurance plans accepted.</p>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: SKY }}>New Patients Welcome</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/45">
                {['General Dentistry', 'Teeth Whitening', 'Dental Implants', 'Invisalign', 'Emergency Care'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Office Hours</h4>
              <div className="space-y-2 text-[11px] text-white/45">
                <div className="flex justify-between"><span>Mon–Thu</span><span>8am–5pm</span></div>
                <div className="flex justify-between"><span>Friday</span><span>8am–2pm</span></div>
                <div className="flex justify-between"><span>Sat</span><span>9am–1pm</span></div>
              </div>
              <div className="mt-5 text-xs font-bold" style={{ color: SKY }}>Emergency appointments available</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Visit Us</h4>
              <div className="space-y-4 text-[11px] text-white/45">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: SKY }} /><span>525 Medical Center Blvd<br />Denver, CO 80220</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: SKY }} /><span>(720) 555-0183</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: SKY }} /><span>hello@claritydental.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Clarity Dental Studio · Denver, CO · Your Smile Matters</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Book an Appointment</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
