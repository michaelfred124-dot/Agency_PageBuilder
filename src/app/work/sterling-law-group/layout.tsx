import React from 'react';
import Link from 'next/link';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import SLNav from '@/components/templates/sl/Nav';

const BASE = '/work/sterling-law-group';
const NAVY = '#1E2D5A';
const GOLD = '#C49A3C';

export default function SterlingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <SLNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: NAVY }} className="text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <Scale className="w-5 h-5" style={{ color: GOLD }} />
                <span className="font-bold tracking-widest text-sm uppercase">Sterling Law Group</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-sm">Experienced legal representation for personal injury, family law, and business disputes throughout Colorado. Free consultations. No fees unless we win.</p>
              <div className="h-px w-12 mb-5" style={{ backgroundColor: GOLD }} />
              <p className="text-white/35 text-xs uppercase tracking-widest">Licensed in Colorado · Member Colorado Bar Association</p>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Practice Areas</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/50">
                {['Personal Injury', 'Family Law', 'Business Law', 'Criminal Defense', 'Estate Planning'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Contact</h4>
              <div className="space-y-4 text-[11px] text-white/50">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} /><span>847 Justice Way, Suite 400<br />Colorado Springs, CO 80903</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} /><span>(719) 555-0183</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} /><span>info@sterlinglawco.com</span></div>
              </div>
              <div className="mt-5 text-[10px] font-bold uppercase tracking-widest text-white/35">
                <div>Mon–Fri 8am–6pm</div>
                <div>Sat 9am–1pm</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Sterling Law Group · All Rights Reserved · Colorado Springs, CO</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Schedule Free Consultation</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
