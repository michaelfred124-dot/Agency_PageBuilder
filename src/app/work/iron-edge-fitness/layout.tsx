import React from 'react';
import Link from 'next/link';
import { Dumbbell, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Barlow_Condensed, Barlow } from 'next/font/google';
import IENav from '@/components/templates/ie/Nav';

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400','600','700','800','900'], variable: '--font-display', display: 'swap' });
const barlow = Barlow({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-body', display: 'swap' });

const BASE = '/work/iron-edge-fitness';
const BLACK = '#0A0A0A';
const ORANGE = '#F97316';

export default function IronEdgeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${barlowCondensed.variable} ${barlow.variable} min-h-screen bg-white text-gray-800`} style={{ fontFamily: 'var(--font-body)' }}>
      <IENav />
      <main>{children}</main>
      <footer style={{ backgroundColor: BLACK }} className="text-white pt-14 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Dumbbell className="w-5 h-5" style={{ color: ORANGE }} />
                <span className="font-black tracking-wider text-sm uppercase" style={{ fontFamily: 'var(--font-display)' }}>Iron Edge Fitness</span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>Elite personal training. Real results. No excuses. Portland, OR.</p>
              <div className="flex gap-4">
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 mb-5" style={{ fontFamily: 'var(--font-display)' }}>Training</h4>
              <div className="flex flex-col gap-3 text-[11px] font-black uppercase tracking-widest text-white/40" style={{ fontFamily: 'var(--font-display)' }}>
                {['1-on-1 Training', 'Group Sessions', 'Online Coaching', 'Nutrition Plans', 'Transformation Programs'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 mb-5" style={{ fontFamily: 'var(--font-display)' }}>Hours</h4>
              <div className="space-y-2 text-[11px] text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                <div className="flex justify-between"><span>Mon–Fri</span><span>5am–9pm</span></div>
                <div className="flex justify-between"><span>Sat</span><span>6am–7pm</span></div>
                <div className="flex justify-between"><span>Sun</span><span>7am–5pm</span></div>
              </div>
              <div className="mt-5 text-xs font-black uppercase" style={{ color: ORANGE, fontFamily: 'var(--font-display)' }}>Free Trial Session Available</div>
            </div>
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 mb-5" style={{ fontFamily: 'var(--font-display)' }}>Find Us</h4>
              <div className="space-y-4 text-[11px] text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ORANGE }} /><span>418 NW Davis St<br />Portland, OR 97209</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} /><span>(503) 555-0291</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} /><span>train@ironedgefitness.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/15 uppercase tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>© 2026 Iron Edge Fitness · Portland, OR · Built Different</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors" style={{ fontFamily: 'var(--font-display)' }}>Start Your Journey</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
