import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Quote, Building2 } from 'lucide-react';

const BASE = '/work/meridian-properties';
const REVIEWS = [{"name":"Robert & Claire S.","rating":5,"source":"Google Review","text":"Catherine Harlow secured $140,000 above our listing valuation with multiple offers in hand. Her contract negotiation and absolute focus on details saved us from a complex contingency dispute. Elite-tier representation.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Thomas W.","rating":5,"source":"Google Review","text":"Meridian Properties sourced an off-market Belle Meade estate that never hit the MLS. Their network in Middle Tennessee is completely unmatched.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Marcus & Evelyn K.","rating":5,"source":"Google Review","text":"Isabelle's architectural staging recommendations transformed our property. We received 4 cash offers in the first weekend of listing, closing with zero repair contingencies. Her process is phenomenal.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Dr. Julian H.","rating":5,"source":"Google Review","text":"James helped us structure a complex 1031 Exchange into three luxury multi-family properties. His cash flow projections and market absorption models were precise down to the dollar.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Cynthia & David R.","rating":5,"source":"Google Review","text":"Moving from Chicago to Nashville, Isabelle made the remote relocation process effortless. Video walk-throughs, neighborhood analyses, and zoning investigations were all organized in digital reports. Outstanding communication.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Alden Developments","rating":5,"source":"Google Review","text":"James's investment modeling and underwriting analysis have been pristine. He operates like an institutional partner, not just a broker.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""}];
const GALLERY = ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80"];

export default function MeridianPropertiesReviews() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
            Verified Client Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-none">
            Stories From Our Community
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Read real stories from our highly satisfied customers and see some of our completed work portfolios.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Completed Portfolio
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              See Our Work
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <div 
                key={i} 
                className={`relative rounded-3xl overflow-hidden shadow-sm aspect-square border border-slate-100 group` }
              >
                <Image 
                  src={src}
                  alt={`Meridian Properties Gallery ${i + 1}`}
                  fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[9px] font-black uppercase tracking-widest bg-slate-950/80 px-4 py-2 rounded-full">
                    Completed Project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Cards List */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Verified Feedback
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Client Testimonials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((r, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/60 p-8 rounded-3xl flex flex-col justify-between text-left shadow-sm min-h-[300px]"
              >
                <div className="space-y-4 text-left">
                  <div className="flex text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 text-left" />
                  <p className="text-slate-600 text-sm italic font-medium leading-relaxed">
                    "{r.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-6 text-left">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 relative bg-slate-100">
                    <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-bold text-sm text-slate-900">{r.name}</div>
                    <div className="text-[10px] text-amber-400 bg-slate-900 px-2 py-0.5 rounded-full inline-block font-mono tracking-wider mt-1">{r.dog || r.source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 text-center bg-slate-950 text-white">
        <h2 className="text-2xl md:text-3xl font-sans font-black text-white mb-3">
          Join our growing community of happy clients.
        </h2>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
          Contact us today to schedule your service. 100% satisfaction guaranteed.
        </p>
        <Link
          href={`${BASE}/contact`}
          className="bg-amber-400 text-slate-950 hover:bg-amber-500 inline-flex items-center gap-2 px-8 py-4 font-sans font-black uppercase text-xs tracking-widest rounded-xl shadow-lg"
        >
          Book Your Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}