import React from 'react';
import Link from 'next/link';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { Cinzel, EB_Garamond } from 'next/font/google';
import SLNav from '@/components/templates/sl/Nav';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-display', display: 'swap' });
const ebGaramond = EB_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-body', display: 'swap' });

const BASE = '/work/sterling-law-group';
const BG = '#0A0A0A';
const GOLD = '#C9A84C';
const BORDER = 'rgba(201,168,76,0.15)';

export default function SterlingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-[#0A0A0A] text-gray-200">
      <SLNav />
      <main>{children}</main>
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16 text-left">
            <div className="md:col-span-2 space-y-5">
              <div className="flex items-center gap-2.5">
                <Scale className="w-5 h-5" style={{ color: GOLD }} />
                <span className="font-bold tracking-widest text-sm uppercase" style={{ fontFamily: 'var(--font-display)' }}>Sterling Law Group</span>
              </div>
              <p className="text-white/50 text-xs leading-relaxed max-w-sm font-light">
                Experienced legal representation for high-stakes business litigation, corporate law, and wealth preservation throughout Colorado. Free strategy consultations.
              </p>
              <div className="h-px w-12" style={{ backgroundColor: GOLD }} />
              <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-mono">
                Licensed in Colorado · Member Colorado Bar Association
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/30 mb-6">Practice Areas</h4>
              <div className="flex flex-col gap-3.5 text-[10px] font-mono uppercase tracking-widest text-white/50">
                {['Business Litigation', 'Corporate Law', 'Mergers & Acquisitions', 'Estate Planning', 'Trust Administration'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/30 mb-6">Contact</h4>
              <div className="space-y-4 text-xs text-white/50">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span className="font-light">150 Fourth Ave North, Suite 1500<br />Nashville, TN 37219</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  <span className="font-light">(615) 555-0190</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  <span className="font-light">info@sterlinglawco.com</span>
                </div>
              </div>
              <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-[#C9A84C] font-bold">
                <div>Mon–Fri: 8:00 AM – 6:00 PM</div>
                <div className="mt-1">Saturday: 9:00 AM – 1:00 PM</div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] font-mono uppercase tracking-widest text-white/20">
              © {new Date().getFullYear()} Sterling Law Group · All Rights Reserved
            </p>
            <Link href={`${BASE}/contact`} className="text-[9px] font-mono text-white/20 hover:text-white uppercase tracking-widest transition-colors">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
