import React from 'react';
import Link from 'next/link';
import { Wrench, Phone, Mail, MapPin } from 'lucide-react';
import PHNav from '@/components/templates/ph/Nav';

const BASE = '/work/valley-prohome';
const GREEN = '#1B4332';
const GOLD = '#D4A853';

export default function ProHomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <PHNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: GREEN }} className="text-white pt-14 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Wrench className="w-4 h-4" style={{ color: GOLD }} />
                <span className="font-bold tracking-widest text-sm uppercase">Valley ProHome</span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-4">Licensed, bonded, and insured home services. Phoenix, AZ metro. Plumbing, electrical, HVAC and more since 2006.</p>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>24/7 Emergency Service</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35 mb-5">Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/55">
                {['Plumbing', 'Electrical', 'HVAC', 'Roofing', 'General Repairs', 'Home Inspections'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35 mb-5">Hours</h4>
              <div className="space-y-2 text-[11px] text-white/55 font-bold">
                <div className="flex justify-between"><span>Mon–Fri</span><span>7am–7pm</span></div>
                <div className="flex justify-between"><span>Sat</span><span>8am–5pm</span></div>
                <div className="flex justify-between"><span>Emergency</span><span>24/7</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35 mb-5">Contact</h4>
              <div className="space-y-4 text-[11px] text-white/55">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} /><span>Phoenix &amp; East Valley, AZ</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} /><span>(555) 382-9100</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} /><span>service@valleyprohome.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/30 uppercase tracking-widest">© 2026 Valley ProHome Services · Phoenix, AZ · Licensed · Bonded · Insured</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/30 hover:text-white uppercase tracking-widest transition-colors">Book a Service Call</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
