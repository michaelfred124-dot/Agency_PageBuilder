import React from 'react';
import Link from 'next/link';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';
import SYNav from '@/components/templates/sy/Nav';

const BASE = '/work/solstice-yoga';
const DARK = '#2C2018';
const SAGE = '#7D9B76';
const ROSE = '#C4869A';

export default function SolsticeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <SYNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: DARK }} className="text-white pt-14 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Sun className="w-4 h-4" style={{ color: ROSE }} />
                <span className="font-serif italic text-xl tracking-wider">Solstice Yoga</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-4">All-levels yoga and wellness studio. Denver, CO. Community, movement, mindfulness.</p>
              <div className="text-xs font-bold" style={{ color: SAGE }}>All Are Welcome Here</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Classes</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/45">
                {['Hatha Yoga', 'Vinyasa Flow', 'Yin Yoga', 'Meditation', 'Breathwork', 'Sound Healing'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Studio Hours</h4>
              <div className="space-y-2 text-[11px] text-white/45 font-bold">
                <div className="flex justify-between"><span>Mon–Fri</span><span>6am–8pm</span></div>
                <div className="flex justify-between"><span>Sat</span><span>7am–6pm</span></div>
                <div className="flex justify-between"><span>Sun</span><span>8am–5pm</span></div>
              </div>
              <div className="mt-5 text-xs font-bold" style={{ color: ROSE }}>30+ Classes Per Week</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Visit Us</h4>
              <div className="space-y-4 text-[11px] text-white/45">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ROSE }} /><span>814 Solstice Lane<br />Denver, CO 80203</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: ROSE }} /><span>(720) 555-0142</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: ROSE }} /><span>hello@solsticeyoga.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Solstice Yoga & Wellness · Denver, CO · Find Your Flow</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Reserve Your Mat</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
