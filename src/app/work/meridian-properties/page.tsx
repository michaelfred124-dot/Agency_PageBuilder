import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ChevronDown, Phone, Check, Award, CheckCircle, CheckCircle2, Building2 } from 'lucide-react';

const BASE = '/work/meridian-properties';

const PARTNERS = ["LEADERS COUNCIL","GUILD OF LUXURY","TENNESSEE REALTORS","ZILLOW PREMIER"];
const SERVICES = [];
const REVIEWS = [{"name":"Robert & Claire S.","rating":5,"source":"Google Review","text":"Catherine Harlow secured $140,000 above our listing valuation with multiple offers in hand. Her contract negotiation and absolute focus on details saved us from a complex contingency dispute. Elite-tier representation.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Thomas W.","rating":5,"source":"Google Review","text":"Meridian Properties sourced an off-market Belle Meade estate that never hit the MLS. Their network in Middle Tennessee is completely unmatched.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Marcus & Evelyn K.","rating":5,"source":"Google Review","text":"Isabelle's architectural staging recommendations transformed our property. We received 4 cash offers in the first weekend of listing, closing with zero repair contingencies. Her process is phenomenal.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Dr. Julian H.","rating":5,"source":"Google Review","text":"James helped us structure a complex 1031 Exchange into three luxury multi-family properties. His cash flow projections and market absorption models were precise down to the dollar.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""}];
const FAQS = [{"q":"How does Meridian Properties differ from other Nashville brokerages?","a":"We are a boutique firm by design. Every client partners directly with a senior advisor. We cap our client roster so your transaction receives maximum priority."},{"q":"What neighborhoods do you specialize in?","a":"We specialize in Belle Meade, Green Hills, Brentwood, Franklin, 12South, East Nashville, and luxury suburban estates in Williamson County."},{"q":"How do you calculate property valuations?","a":"We run custom comparative analyses factoring in room-by-room finishes, micro-market absorption rates, and off-market variables. It is a true broker estimate, not an automated system algorithm."}];

const STEPS = [];
const PROMISES = [];
const LISTINGS = [{"img":"https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop","price":"$1,400,000","address":"4812 Chickering Lane","neighborhood":"Belle Meade","beds":4,"baths":4,"sqft":"4,820","tag":"Just Listed"},{"img":"https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop","price":"$875,000","address":"2219 Greybar Lane","neighborhood":"Green Hills","beds":3,"baths":3,"sqft":"2,940","tag":"Active"},{"img":"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop","price":"$2,100,000","address":"1105 Governors Ridge","neighborhood":"Brentwood","beds":5,"baths":5,"sqft":"6,100","tag":"Coming Soon"},{"img":"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop","price":"$3,450,000","address":"812 Jackson Boulevard","neighborhood":"Belle Meade","beds":6,"baths":7,"sqft":"7,800","tag":"Premium Estate"}];
const PRODUCTS = [];
const TECH = [];
const ACHIEVEMENTS = [];
const BREEDS = [];

export default function MeridianPropertiesHome() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-950 text-white py-20 lg:py-28 px-6 md:px-12 relative overflow-hidden border-b border-slate-900">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-black uppercase tracking-widest text-amber-400">
              <CheckCircle className="w-3.5 h-3.5" /> 5.0 Star Rated on Google Reviews
            </div>
            
            <h1 className="font-sans font-black text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.05] text-white"
                dangerouslySetInnerHTML={{ __html: `Discover your<br />extraordinary<br /><span class="text-[#B8A27A] italic font-light">home.</span>` }} />
            
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
              Boutique luxury real estate brokerage. $1.4B in transactions negotiated across Nashville's most coveted communities.
            </p>
            
            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link 
                href={`${BASE}/contact`}
                className="bg-amber-400 text-slate-950 hover:bg-amber-500 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="tel:6155550144"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/70 transition-all text-sm font-bold"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call (615) 555-0144</span>
              </a>
            </div>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-400">
                ⭐ <span className="text-white font-bold">5.0 Rating</span> | Certified Industry Specialists
              </p>
            </div>
          </div>
          
          {/* Right Column Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-amber-400 rounded-3xl rotate-3 opacity-10 blur-xl pointer-events-none" />
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80"
                alt="Meridian Properties Hero Showcase"
                fill className="object-cover" referrerPolicy="no-referrer" priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO BAR SECTION */}
      <section className="bg-slate-50 py-10 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Trusted Partners & Products
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-400 font-bold text-sm">
            {PARTNERS.map((p, i) => (
              <span key={i} className="hover:text-slate-600 transition-colors uppercase tracking-wider text-xs md:text-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Our Professional Solutions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Services We Provide
            </h3>
            <p className="text-slate-500 font-medium text-sm sm:text-base">
              Explore our core catalog designed for high performance, visual quality, and complete comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-[400px]"
              >
                {/* Photo Background */}
                <Image 
                  src={item.img}
                  alt={item.name}
                  fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85" />
                
                {/* Card Content (Anchored bottom) */}
                <div className="relative mt-auto p-6 space-y-4 text-left z-10 text-white">
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest text-amber-400 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                    Premium Service
                  </span>
                  
                  <h4 className="font-sans font-black text-xl leading-none text-white">{item.name}</h4>
                  
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                  
                  <Link 
                    href={`${BASE}/services`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACCENT CTA BANNER */}
      <section className="bg-sky-600 py-16 px-6 md:px-12 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 text-left">
          
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-sans font-black tracking-tight leading-tight">
              Ready to experience a professional transformation?
            </h3>
            <p className="text-sky-100 text-sm font-medium leading-relaxed">
              Contact us today to schedule your consultation and get a free estimate. Zero obligation, total transparency.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link 
              href={`${BASE}/contact`}
              className="bg-amber-400 text-slate-950 hover:bg-amber-500 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg text-center"
            >
              Get Free Estimate
            </Link>
            <a 
              href="tel:6155550144"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all font-bold text-sm"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>(615) 555-0144</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column Bullet List */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                Boutique Luxury Real Estate
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
                Luxury Representation
              </h2>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              By intentionally capping our client list and agent roster, we ensure every transaction benefits directly from the principal broker's negotiation strategy and legal expertise.
            </p>
            
            <div className="space-y-4">
              {PROMISES.length > 0 ? (
                PROMISES.map((item: any, idx: number) => {
                  const title = typeof item === 'string' ? item : (item.title || item.label || '');
                  const desc = typeof item === 'string' ? '' : (item.desc || '');
                  return (
                    <div key={idx} className="flex gap-4 items-start text-left">
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-700">{title}</span>
                        {desc && <p className="text-xs text-slate-500 mt-1 font-medium">{desc}</p>}
                      </div>
                    </div>
                  );
                })
              ) : (
                [
                  'Licensed & Insured Professional Experts',
                  'Transparent & Guaranteed Pricing Upfront',
                  'Environmentally Friendly & Natural Products',
                  'Written Guarantee on Workmanship',
                  '24/7 Support and Care'
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-amber-400 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{text}</span>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Right Column Image Block */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-slate-900 rounded-[36px] -rotate-2 opacity-5 blur-sm pointer-events-none" />
            <div className="relative aspect-[4/3] rounded-[36px] overflow-hidden border border-slate-200 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80"
                alt="Why Choose Us"
                fill className="object-cover" referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5.1 CUSTOM GRID LAYOUTS (LISTINGS / PRODUCTS / TECH / ACHIEVEMENTS / BREEDS) */}
      {LISTINGS.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Available Units</span>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">Featured Properties</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LISTINGS.map((item: any, idx: number) => (
                <div key={idx} className="group relative rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-[420px]">
                  <Image src={item.photo || item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85" />
                  <div className="relative mt-auto p-6 space-y-4 text-left z-10 text-white">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest text-amber-400 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{item.price}</span>
                    <h4 className="font-sans font-black text-xl leading-none text-white">{item.title}</h4>
                    <div className="text-xs text-slate-300 font-medium">{item.beds} · {item.baths} · {item.sqft || item.size || ''}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {PRODUCTS.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Selected Pieces</span>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">Featured Products</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((item: any, idx: number) => (
                <div key={idx} className="group relative rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-[420px]">
                  <Image src={item.img || item.photo} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85" />
                  <div className="relative mt-auto p-6 space-y-4 text-left z-10 text-white">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest text-amber-400 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{item.tag || 'New'}</span>
                    <h4 className="font-sans font-black text-xl leading-none text-white">{item.name}</h4>
                    <div className="text-xs text-slate-300 font-bold">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {TECH.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-200/85">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Advanced Care</span>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">Cutting-Edge Technology</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TECH.map((item: any, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 p-8 rounded-3xl text-left">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 mb-6"><CheckCircle2 className="w-5 h-5" /></div>
                  <h4 className="font-sans font-black text-lg text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {ACHIEVEMENTS.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-200/85">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Ridge Line Standard</span>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">Achievements & Vows</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ACHIEVEMENTS.map((item: any, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 p-8 rounded-3xl text-left">
                  <h4 className="font-sans font-black text-lg text-slate-900 mb-2">{item.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {BREEDS.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-200/85">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Every Breed Welcome</span>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">Breeds We Grooms</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BREEDS.map((item: any, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 p-8 rounded-3xl text-left">
                  <h4 className="font-sans font-black text-lg text-slate-900 mb-2">{item.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5.2 PROCESS/STEPS SECTION */}
      {STEPS.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                Our Blueprint Process
              </span>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
                How We Deliver Results
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {STEPS.map((step: any, idx: number) => {
                const stepNum = step.step || step.n || `0${idx + 1}`;
                return (
                  <div key={idx} className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl text-left flex flex-col justify-between min-h-[220px]">
                    <div className="text-4xl font-sans font-black text-slate-200 mb-4">{stepNum}</div>
                    <div>
                      <h4 className="font-sans font-black text-lg text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. TESTIMONIALS SECTION */}
      <section className="bg-slate-950 text-white py-24 px-6 md:px-12 relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1e293b_0%,transparent_50%)] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
                Verified Guest Stories
              </h2>
              <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white leading-none">
                What Our Clients Say
              </h3>
            </div>
            <Link 
              href={`${BASE}/reviews`}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 hover:underline shrink-0"
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((r, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between text-left h-[260px]"
              >
                <div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs italic font-medium leading-relaxed line-clamp-5 text-left">
                    "{r.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 mt-auto">
                  <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-slate-800 relative bg-slate-800">
                    <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-bold text-xs text-white">{r.name}</div>
                    <div className="text-[9px] text-amber-400 font-mono tracking-wider mt-0.5">{r.dog || r.source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Questions Answered
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details 
                key={idx} 
                className="group bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-left">
                  <span className="font-bold text-slate-900 text-sm">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-5 text-xs text-slate-500 leading-relaxed font-medium text-left border-t border-slate-200/30 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="py-20 px-6 bg-slate-950 text-white text-center border-t border-slate-900">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight text-white">Your next chapter starts here.</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">Direct principal brokerage guidance. Contact our luxury advisors for private representation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`${BASE}/contact`} className="bg-amber-400 text-slate-950 hover:bg-amber-500 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all">
              Book Your Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a href="tel:6155550144" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-slate-800 hover:bg-slate-900/60 transition-all font-bold text-sm text-white">
              <Phone className="w-5 h-5 text-amber-400" /> (615) 555-0431
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}