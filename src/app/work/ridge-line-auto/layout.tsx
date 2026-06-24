import React from 'react';
import Link from 'next/link';
import { Wrench, Phone, Mail, MapPin, Award, CheckCircle } from 'lucide-react';
import RLNav from '@/components/templates/rl/Nav';
import { Oswald, Roboto } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const BASE = '/work/ridge-line-auto';

export default function RidgeLineAutoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 antialiased selection:bg-red-500 selection:text-slate-900">
      {/* Navigation */}
      <RLNav />
      
      {/* Main Content */}
      <main className="overflow-hidden bg-white">{children}</main>
      
      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 md:px-12 border-t border-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand & Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Wrench className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-black text-lg tracking-wider text-white leading-none">RIDGE LINE AUTO</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500 mt-1">Professional Car Care</span>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                Experience the ultimate in professional care and world-class service. Sourced locally, built to exceed expectations, and dedicated to your complete satisfaction.
              </p>
              
              <div className="space-y-3.5 text-sm text-slate-300 text-left">
                <div className="flex gap-3 items-start text-left">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: '825 Fesslers Ln<br />Nashville<br />TN 37210' }} />
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <a href="tel:6155550288" className="hover:text-red-500 transition-colors font-bold text-white">(615) 555-0288</a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-red-500 shrink-0" />
                  <a href="mailto:hello@ridgelineauto.com" className="hover:text-red-500 transition-colors text-white">hello@ridgelineauto.com</a>
                </div>
              </div>
            </div>

            {/* Column 2: Helpful Links */}
            <div className="text-left">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-l-2 border-red-500 pl-3">
                Explore Links
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-300">
                <Link href={BASE} className="hover:text-red-500 transition-colors">Home</Link>
                <Link href={`${BASE}/services`} className="hover:text-red-500 transition-colors">Services</Link>
                <Link href={`${BASE}/about`} className="hover:text-red-500 transition-colors">About Us</Link>
                <Link href={`${BASE}/reviews`} className="hover:text-red-500 transition-colors">Reviews</Link>
                <Link href={`${BASE}/contact`} className="hover:text-red-500 transition-colors">Contact</Link>
                <Link href={`${BASE}/contact`} className="hover:text-red-500 transition-colors">Book Online</Link>
              </div>
            </div>

            {/* Column 3: Business Hours */}
            <div className="text-left">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-l-2 border-red-500 pl-3">
                Office Hours
              </h4>
              <div className="space-y-3 text-sm text-slate-300 text-left">
                <div className="flex justify-between items-center py-1 border-b border-slate-900">
                  <span className="font-medium text-slate-400">Monday – Friday</span>
                  <span className="font-bold text-white">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-900">
                  <span className="font-medium text-slate-400">Saturday</span>
                  <span className="font-bold text-white">9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-900">
                  <span className="font-medium text-slate-400">Sunday</span>
                  <span className="font-bold text-red-500">Closed</span>
                </div>
                <p className="text-xs text-red-500/80 italic mt-4 font-semibold text-left">
                  * 24/7 Dispatch and emergency services available for active clients.
                </p>
              </div>
            </div>

            {/* Column 4: Certifications & Trust Badge */}
            <div className="text-left space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-l-2 border-red-500 pl-3 text-left">
                Accreditation
              </h4>
              
              <div className="flex flex-col gap-4">
                {/* Badge 1 */}
                <div className="flex items-center gap-3 bg-white/5 p-3 border border-white/10 rounded-xl">
                  <Award className="w-8 h-8 text-red-500 shrink-0" />
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-white">ASE Certified Masters</div>
                    <div className="text-[10px] text-slate-400 font-medium">Advanced Diagnostic Mechanics</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-center gap-3 bg-white/5 p-3 border border-white/10 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-red-500 shrink-0" />
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-white">NAPA AutoCare Partner</div>
                    <div className="text-[10px] text-slate-400 font-medium">National Warranty Protection</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Socials */}
          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
            <p className="uppercase tracking-wider">
              © {new Date().getFullYear()} Ridge Line Auto Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href={`${BASE}/contact`} className="hover:text-red-500 transition-colors uppercase tracking-widest font-bold text-white">
                Book a Session
              </Link>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}