import React from 'react';
import Link from 'next/link';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import PPNav from '@/components/templates/pp/Nav';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const BASE = '/work/paws-and-pamper';
const TEAL = '#0D9488';
const FOREST = '#134E4A';

export default function PawsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${nunito.variable} min-h-screen`}>
      <PPNav />
      <main>{children}</main>
      <footer style={{ backgroundColor: TEAL }} className="text-white pt-14 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Heart className="w-4 h-4 fill-current text-white" />
                <span className="font-bold tracking-widest text-sm uppercase" style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>Paws & Pamper</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>Luxury pet grooming with love. Seattle, WA. All breeds welcome, every dog treated like family.</p>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50 mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Services</h4>
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-widest text-white/70" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                {['Full Grooming', 'Bath & Brush', 'Nail Trim', 'De-Shedding', 'Puppy First Groom'].map(s => (
                  <Link key={s} href={`${BASE}/services`} className="hover:text-white transition-colors">{s}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50 mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Hours</h4>
              <div className="space-y-2 text-[11px] text-white/70 font-bold" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                <div className="flex justify-between"><span>Mon–Fri</span><span>8am–6pm</span></div>
                <div className="flex justify-between"><span>Sat</span><span>8am–5pm</span></div>
                <div className="flex justify-between"><span>Sun</span><span>10am–4pm</span></div>
              </div>
            </div>
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50 mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Find Us</h4>
              <div className="space-y-4 text-[11px] text-white/70" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
                <div className="flex gap-3"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-white" /><span>714 Queen Anne Ave N<br />Seattle, WA 98109</span></div>
                <div className="flex gap-3"><Phone className="w-3.5 h-3.5 shrink-0 text-white" /><span>(206) 555-0374</span></div>
                <div className="flex gap-3"><Mail className="w-3.5 h-3.5 shrink-0 text-white" /><span>hello@pawsandpamper.com</span></div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] text-white/50 uppercase tracking-widest" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>© 2026 Paws & Pamper Pet Spa · Seattle, WA · Tail-wagging results guaranteed</p>
            <Link href={`${BASE}/contact`} className="text-[9px] text-white/50 hover:text-white uppercase tracking-widest transition-colors" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Book a Grooming</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
