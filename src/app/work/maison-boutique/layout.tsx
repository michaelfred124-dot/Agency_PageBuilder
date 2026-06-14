import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import MBNav from '@/components/templates/mb/Nav';

const BASE = '/work/maison-boutique';
const ESPRESSO = '#2C1A0E';
const SAGE = '#7D9B76';
const SAND = '#F2EAD9';

export default function MaisonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans text-gray-800" style={{ backgroundColor: SAND }}>
      <MBNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: ESPRESSO }} className="text-white pt-14 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <ShoppingBag className="w-4 h-4" style={{ color: SAND }} />
                <span className="font-serif italic text-xl tracking-wider">Maison</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-5">Curated women's fashion. Nashville, TN. New arrivals every Thursday. Thoughtfully selected, sustainably sourced.</p>
              <div className="flex gap-4">
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Shop</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/45">
                {['New Arrivals', 'Dresses', 'Tops & Blouses', 'Outerwear', 'Accessories', 'Sale'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Store Hours</h4>
              <div className="space-y-2 text-[11px] text-white/45 font-bold">
                <div className="flex justify-between"><span>Mon–Sat</span><span>10am–7pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>11am–5pm</span></div>
              </div>
              <div className="mt-5 text-xs font-bold" style={{ color: SAGE }}>Free shipping on orders $75+</div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mb-5">Visit Us</h4>
              <div className="space-y-4 text-[11px] text-white/45">
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: SAGE }} /><span>512 12th Ave South<br />Nashville, TN 37203</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0" style={{ color: SAGE }} /><span>(615) 555-0284</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0" style={{ color: SAGE }} /><span>hello@maisonboutique.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Maison Boutique · Nashville, TN · Dressed for Your Story</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Visit the Store</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
