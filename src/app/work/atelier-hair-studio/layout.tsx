import React from 'react';
import Link from 'next/link';
import { Scissors, Phone, Mail, MapPin, Instagram, ArrowRight } from 'lucide-react';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import AHNav from '@/components/templates/ah/Nav';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const BASE = '/work/atelier-hair-studio';
const CHARCOAL = '#1A1A1A';
const ROSE = '#B8778A';
const BLUSH = '#F2DCE2';

export default function AtelierLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} ${jost.variable} min-h-screen bg-white`}>
      <AHNav />
      <main style={{ fontFamily: 'var(--font-body)' }}>{children}</main>
      <footer style={{ backgroundColor: CHARCOAL, fontFamily: 'var(--font-body)' }} className="text-white pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="pb-14 mb-14 border-b border-white/10 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Scissors className="w-4 h-4" style={{ color: ROSE }} />
                <span className="text-3xl tracking-wide leading-none" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500 }}>Atelier</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/30 ml-1 mt-2">Hair Studio</span>
              </div>
              <p
                className="text-3xl md:text-4xl leading-tight max-w-lg"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.85)' }}
              >
                Where hair becomes art.
              </p>
            </div>
            <Link
              href={`${BASE}/contact`}
              className="inline-flex items-center justify-center gap-2 self-end lg:justify-self-end text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: ROSE, color: CHARCOAL }}
            >
              Book Your Appointment <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-14">
            <div>
              <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontWeight: 300 }}>Luxury hair artistry in Austin, TX. Where sustainable beauty meets expert craft.</p>
              <a href="#" className="inline-flex items-center justify-center w-9 h-9 border border-white/15 text-white/40 hover:text-white hover:border-white/40 transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white/45">
                {['Haircuts', 'Color & Highlights', 'Keratin Treatments', 'Bridal Hair', 'Extensions', 'Scalp Treatments'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors w-fit">{s}</Link>
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
            <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">© 2026 Atelier Hair Studio · Austin, TX · Where Hair Becomes Art</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-[0.2em] transition-colors">Book Your Appointment</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
