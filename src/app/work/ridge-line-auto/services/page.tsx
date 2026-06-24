import Link from 'next/link';
import { Check, ArrowRight, Phone, Calendar, Wrench } from 'lucide-react';

const BASE = '/work/ridge-line-auto';
const SERVICES = [];
const PRICING = [];
const PACKAGES = [];

export default function RidgeLineAutoServices() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
            Our Professional Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-none"
              dangerouslySetInnerHTML={{ __html: `Precision Engineering` }} />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            ASE-certified mechanics. Dyno-tested upgrades. 24-month/24,000-mile warranty on all diagnostic and general mechanical work.
          </p>
        </div>
      </section>

      {/* Services Cards Listing */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Complete Menu
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Services We Offer
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl flex flex-col justify-between text-left min-h-[340px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white mb-6 shadow-md">
                    <Wrench className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="font-sans font-black text-xl text-slate-900 mb-3 text-left">{item.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium text-left">{item.desc}</p>
                </div>
                <div className="pt-6 border-t border-slate-200/30 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-slate-400">Starting Price</span>
                  <span className="text-lg font-black text-slate-900">{item.price || 'Custom Quote'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section if exists */}
      {PACKAGES.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Bundled Value</span>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">Service Packages</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PACKAGES.map((pkg: any, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl text-left flex flex-col justify-between min-h-[400px]">
                  <div>
                    {pkg.tag && <span className="inline-block text-[9px] font-black uppercase tracking-widest text-red-500 bg-slate-900 px-3 py-1 rounded-full mb-4">{pkg.tag}</span>}
                    <h4 className="font-sans font-black text-xl text-slate-900 mb-2">{pkg.name}</h4>
                    <p className="text-xs text-slate-500 font-medium mb-6">{pkg.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features && pkg.features.map((feat: string, i: number) => (
                        <li key={i} className="flex gap-2 items-center text-xs font-semibold text-slate-700">
                          <Check className="w-3.5 h-3.5 text-red-500 shrink-0 stroke-[3]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-slate-200/30 flex items-baseline gap-1 mt-auto">
                    <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                    {pkg.per && <span className="text-xs font-bold text-slate-400">/{pkg.per}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tables */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Simple Transparency
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Pricing Details
            </h3>
          </div>

          <div className="border border-slate-200/80 bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 text-[10px] font-black uppercase tracking-widest px-6 py-4 bg-slate-900 text-white text-left">
              <span>Service Name</span>
              <span className="text-right">Estimated Rate</span>
            </div>
            {PRICING.map((item, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-2 px-6 py-5 text-sm border-t border-slate-100 text-left ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
              >
                <span className="font-bold text-slate-800">{item.service}</span>
                <span className="text-right font-black text-slate-900">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-medium text-center">
            * Final costs may fluctuate based on exact project complexity, sizes, or assessments. Complete estimates provided prior to booking.
          </p>
        </div>
      </section>

      {/* Accent CTA Banner */}
      <section className="bg-sky-600 py-16 px-6 md:px-12 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 text-left">
          
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-sans font-black tracking-tight leading-tight">
              Ready to secure your appointment schedule?
            </h3>
            <p className="text-sky-100 text-sm font-medium leading-relaxed">
              Book online in under 60 seconds or contact our team directly for custom solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link 
              href={`${BASE}/contact`}
              className="bg-red-500 text-white hover:bg-red-600 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg text-center"
            >
              Book Session
            </Link>
            <a 
              href="tel:6155550288"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all font-bold text-sm"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>(615) 555-0288</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}