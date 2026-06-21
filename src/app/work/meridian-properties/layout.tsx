import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import MPNav from '@/components/templates/mp/Nav';
import { Libre_Franklin } from 'next/font/google';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const BASE = '/work/meridian-properties';
const BG = '#FAF8F5';
const SLATE = '#1F242E';
const GOLD = '#B8A27A';

export default function MeridianLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans selection:bg-[#B8A27A]/30 selection:text-black" style={{ backgroundColor: BG, color: SLATE }}>
      <MPNav />
      <main className="bg-[#FAF8F5]">{children}</main>
      <footer className="pt-24 pb-12 px-6 md:px-12 border-t border-black/5 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="p-8 border border-white/85 bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-serif font-black tracking-widest text-sm uppercase" style={{ color: SLATE }}>Meridian</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8A27A]">PROPERTIES</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  Nashville's premier boutique real estate firm since 2008. Dedicated to Belle Meade, Green Hills, Brentwood, and luxury listings.
                </p>
              </div>
              <p className="text-[9px] font-mono uppercase tracking-widest text-[#B8A27A] font-bold">
                Licensed in Tennessee
              </p>
            </div>
            
            <div className="p-8 border border-white/85 bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)]">
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#B8A27A] mb-6">Property Types</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                {['Luxury Homes', 'Condos & Lofts', 'Investment Properties', 'New Construction', 'Land & Lots'].map(s => (
                  <Link key={s} href={`${BASE}/contact`} className="hover:text-black hover:translate-x-1 transition-all duration-300 block">{s}</Link>
                ))}
              </div>
            </div>
            
            <div className="p-8 border border-[#B8A27A]/15 bg-gradient-to-br from-white/90 to-[#B8A27A]/5 backdrop-blur-lg rounded-3xl shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] hover:border-[#B8A27A]/35 transition-all duration-500">
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#B8A27A] mb-6">Contact info</h4>
              <div className="space-y-4 text-[11px] text-gray-500 font-medium">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span className="leading-relaxed">3210 West End Ave, Suite 500<br />Nashville, TN 37203</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  <a href="tel:6155550265" className="hover:text-black transition-colors">(615) 555-0265</a>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  <a href="mailto:hello@meridianproperties.com" className="hover:text-black transition-colors">hello@meridianproperties.com</a>
                </div>
              </div>
            </div>

            <div className="p-8 border border-white/85 bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_20px_50px_-15px_rgba(31,36,46,0.05)] flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#B8A27A] mb-6">Socials</h4>
                <div className="flex gap-3">
                  {['IG', 'FB', 'LI', 'YT'].map((s) => (
                    <Link key={s} href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all">
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed mt-4">
                Equal Housing Opportunity
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            <p>© 2026 Meridian Properties LLC. All rights reserved.</p>
            <p className="text-[9px] text-gray-300">MLS info deemed reliable but not guaranteed.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
