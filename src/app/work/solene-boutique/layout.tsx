import { Playfair_Display, DM_Sans } from 'next/font/google';
import SENav from '@/components/templates/se/Nav';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const BASE = '/work/solene-boutique';

export default function SoleneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${dmSans.variable} min-h-screen bg-[#FDFAF6]`}>
      <SENav />
      <main>{children}</main>
      <footer className="bg-[#18181B] text-[#FDFAF6]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#9B9189] mb-1" style={{ fontFamily: 'var(--font-body)' }}>Portland · Est. 2019</p>
            <h2 className="text-3xl italic text-[#FDFAF6] mb-3" style={{ fontFamily: 'var(--font-display)' }}>Solène</h2>
            <p className="text-[#9B9189] text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Objects that outlast trends.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-[#9B9189] hover:text-[#C9A84C] transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-[#9B9189] hover:text-[#C9A84C] transition-colors"><Facebook size={20} /></a>
              <a href="#" aria-label="Pinterest" className="text-[#9B9189] hover:text-[#C9A84C] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Col 2: Shop */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>Shop</h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Living Room', 'Kitchen', 'Bedroom', 'Gifts', 'Sale'].map((item) => (
                <li key={item}>
                  <Link href={`${BASE}/shop`} className="text-sm text-[#FDFAF6]/70 hover:text-[#FDFAF6] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Info */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>Information</h3>
            <ul className="space-y-3">
              {[
                { label: 'About', href: `${BASE}/about` },
                { label: 'Our Makers', href: `${BASE}/about` },
                { label: 'Sustainability', href: `${BASE}/about` },
                { label: 'Care Guides', href: `${BASE}/about` },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-[#FDFAF6]/70 hover:text-[#FDFAF6] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase text-[#9B9189] mb-6" style={{ fontFamily: 'var(--font-body)' }}>Visit Us</h3>
            <address className="not-italic space-y-3 text-sm text-[#FDFAF6]/70" style={{ fontFamily: 'var(--font-body)' }}>
              <p>2847 NW 23rd Ave<br />Portland, OR 97210</p>
              <p><a href="tel:+15033210987" className="hover:text-[#FDFAF6] transition-colors">(503) 321-0987</a></p>
              <p><a href="mailto:hello@solene.shop" className="hover:text-[#FDFAF6] transition-colors">hello@solene.shop</a></p>
              <p>Mon–Sat: 10am – 7pm<br />Sun: 11am – 5pm</p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#FDFAF6]/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-xs text-[#9B9189]" style={{ fontFamily: 'var(--font-body)' }}>
              © {new Date().getFullYear()} Solène Boutique. All rights reserved.
            </p>
            <p className="text-xs text-[#C9A84C]" style={{ fontFamily: 'var(--font-body)' }}>
              Free shipping on orders $75+
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
