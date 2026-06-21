import { Cormorant_Garamond, Raleway } from 'next/font/google';
import ERNav from '@/components/templates/er/Nav';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const BASE = '/work/ember-and-rye';
const DARK = '#100A05';
const EMBER = '#C2410C';
const CREAM = '#F5EDD8';
const GOLD = '#B8860B';

export const metadata = { title: 'Ember & Rye — Wood-Fired Steakhouse · Chicago' };

export default function EmberAndRyeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} ${raleway.variable} min-h-screen`} style={{ backgroundColor: DARK }}>
      <ERNav />
      <main>{children}</main>

      <footer style={{ backgroundColor: '#0A0603', borderTop: '1px solid rgba(194,65,12,0.2)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="text-3xl mb-2"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: CREAM }}
            >
              Ember & Rye
            </div>
            <p
              className="text-sm mb-2"
              style={{ color: EMBER, fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
            >
              WOOD-FIRED STEAKHOUSE · EST. 2016
            </p>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(245,237,216,0.5)', fontFamily: 'var(--font-body)' }}
            >
              1200°F. 28-day aged prime cuts. River North, Chicago.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border transition-colors hover:border-[#C2410C]"
                  style={{ borderColor: 'rgba(245,237,216,0.2)', color: 'rgba(245,237,216,0.5)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.35em] mb-5"
              style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
            >
              Navigate
            </div>
            <ul className="space-y-3">
              {['Menu', 'About', 'Reviews', 'Contact'].map(l => (
                <li key={l}>
                  <Link
                    href={`${BASE}/${l.toLowerCase()}`}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(245,237,216,0.55)', fontFamily: 'var(--font-body)' }}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.35em] mb-5"
              style={{ color: EMBER, fontFamily: 'var(--font-body)' }}
            >
              Find Us
            </div>
            <address
              className="not-italic space-y-2 text-sm"
              style={{ color: 'rgba(245,237,216,0.55)', fontFamily: 'var(--font-body)' }}
            >
              <p>445 N Clark Street<br />Chicago, IL 60654</p>
              <p>(312) 555-0193</p>
              <p>reservations@emberandrye.com</p>
              <p className="pt-1">
                Tue–Thu: 5pm–10pm<br />
                Fri–Sat: 5pm–11pm<br />
                Sun: 5pm–9pm
              </p>
            </address>
          </div>
        </div>

        <div
          className="border-t max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"
          style={{ borderColor: 'rgba(194,65,12,0.15)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(245,237,216,0.3)', fontFamily: 'var(--font-body)' }}
          >
            &copy; 2026 Ember & Rye. All rights reserved.
          </p>
          <p
            className="text-xs hidden md:block"
            style={{ color: GOLD, fontFamily: 'var(--font-body)' }}
          >
            James Beard Nominated · Chicago, IL
          </p>
        </div>
      </footer>
    </div>
  );
}
