import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import SSNav from '@/components/templates/ss/Nav';

const BASE = '/work/stylish-store';

export default function StylishStoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-800 antialiased selection:bg-slate-900 selection:text-white relative overflow-hidden">
      {/* Navigation */}
      <SSNav />
      
      {/* Main Content */}
      <main className="relative z-10">{children}</main>
      
      {/* Footer */}
      <footer className="bg-white pt-24 pb-16 px-6 md:px-12 border-t border-slate-100 relative overflow-hidden text-left">
        {/* Giant Watermark Text Background */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 select-none pointer-events-none text-slate-100 text-[10vw] font-black uppercase tracking-[0.1em] leading-none whitespace-nowrap opacity-75 z-0 font-sans">
          FASHION STORE
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20 text-xs font-medium text-slate-500">
            
            {/* Column 1: Info */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-[10px] uppercase tracking-widest text-slate-900">
                Info
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Our Blog</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Column 2: About */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-[10px] uppercase tracking-widest text-slate-900">
                About Us
              </h4>
              <ul className="space-y-2.5">
                <li><Link href={`${BASE}/about`} className="hover:text-slate-900 transition-colors">Our Story</Link></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Job Opportunities</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Wholesale</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Affiliates</a></li>
              </ul>
            </div>

            {/* Column 3: Women Clothing */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-[10px] uppercase tracking-widest text-slate-900">
                Women Clothing
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Intimates</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Shoes</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Beauty + Wellness</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Swim</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Activewear</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Sale</a></li>
              </ul>
            </div>

            {/* Column 4: Jeans */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-[10px] uppercase tracking-widest text-slate-900">
                Jeans
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Shop All Jeans</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">New Jeans</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Flare Jeans</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">High-Rise Jeans</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Skinny Jeans</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Wide-Leg Jeans</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Boyfriend Jeans</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Straight-Leg Jeans</a></li>
              </ul>
            </div>

            {/* Column 5: Men Shoes */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-[10px] uppercase tracking-widest text-slate-900">
                Men Shoes
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Heels + Wedges</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Sandals</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Slippers</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Socks + Tights</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Top Rated</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Sale</a></li>
              </ul>
            </div>

            {/* Column 6: Men Clothing */}
            <div className="space-y-4">
              <h4 className="font-sans font-black text-[10px] uppercase tracking-widest text-slate-900">
                Men Clothing
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-slate-900 transition-colors">T-Shirts</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Shirts</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Shorts</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Jeans</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Trousers</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Clothing Sets</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Ethnic Wear</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Sweaters & Outerwear</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} Stylish Store. Designed for premium web showcases.
            </p>
            <div className="flex items-center gap-6">
              <Link href={`${BASE}/contact`} className="hover:text-slate-900 transition-colors">
                Contact Sales
              </Link>
              <span>·</span>
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
