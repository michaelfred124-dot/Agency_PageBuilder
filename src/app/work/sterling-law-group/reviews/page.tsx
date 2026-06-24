import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Quote, Scale } from 'lucide-react';

const BASE = '/work/sterling-law-group';
const REVIEWS = [{"name":"Rachel M.","rating":5,"source":"Google Review","text":"When our partnership dispute threatened to halt operations, James Sterling moved with incredible speed. They filed a counter-motion and resolved the issue, recovering full damages. Exceptional trial lawyers.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"David K.","rating":5,"source":"Google Review","text":"David Park guided us through a complex board restructuring. His corporate counsel was practical, strategic, and kept us fully compliant with state securities regulations.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Tina R.","rating":5,"source":"Google Review","text":"David Park and his M&A team advised us on our asset acquisition. They uncovered a hidden valuation issue during due diligence that saved us millions. We won't close another deal without them.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Marcus A.","rating":5,"source":"Google Review","text":"Sterling helped us negotiate a partnership buyout that was heading to litigation. Their commercial attorneys are sharp, practical, and highly strategic.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Linda T.","rating":5,"source":"Google Review","text":"After putting off estate planning for years, Catherine designed a comprehensive family trust. Her command of tax law and business succession is superb. Real peace of mind.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Jason H.","rating":5,"source":"Google Review","text":"We faced a probate litigation challenge to our family trust. Catherine Abrams defended our interests aggressively in court. We prevailed on every count.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""}];
const GALLERY = ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80"];

export default function SterlingLawGroupReviews() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
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
                  alt={`Sterling Law Group Gallery ${i + 1}`}
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
                  <div className="flex text-yellow-400">
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
                    <div className="text-[10px] text-yellow-400 bg-slate-900 px-2 py-0.5 rounded-full inline-block font-mono tracking-wider mt-1">{r.dog || r.source}</div>
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
          className="bg-yellow-400 text-slate-950 hover:bg-yellow-500 inline-flex items-center gap-2 px-8 py-4 font-sans font-black uppercase text-xs tracking-widest rounded-xl shadow-lg"
        >
          Book Your Appointment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}