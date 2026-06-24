import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ChevronDown, Phone, Check, Award, CheckCircle, CheckCircle2, Heart } from 'lucide-react';

const BASE = '/work/golden-thread-events';

const PARTNERS = ["BRIDES MAGAZINE","WIPA ASSOCIATION","NASHVILLE BRIDAL CO","THE KNOT BEST OF"];
const SERVICES = [];
const REVIEWS = [{"name":"Emily & James W.","rating":5,"source":"Google Review","text":"We handed Sophia the reins on our wedding and it was the best decision we ever made. Every detail was considered, every vendor was perfectly chosen, and the day itself was completely stress-free. We got to be present for every moment. Absolutely perfect.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Natalie R.","rating":5,"source":"Google Review","text":"I had a vision but needed help executing it. Sophia stepped in and immediately understood my aesthetic. The coordination on the day was seamless and she thought of details I never would have. Worth every penny.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Claire & Dan M.","rating":5,"source":"Google Review","text":"The florals Sophia created for our wedding were beyond anything we could have imagined. The ceremony arch was breathtaking. She listened to every request and then elevated it into something truly extraordinary.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""},{"name":"Priya & Raj S.","rating":5,"source":"Google Review","text":"We wanted a blend of South Asian and Western traditions. Sophia embraced it completely, researched both, and created something authentic and beautiful. Our families were in tears — the good kind. Flawless execution.","avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop","dog":""}];
const FAQS = [{"q":"How many events do you take per year?","a":"We take no more than 25 events per year. This is entirely intentional. We are a boutique studio, not a volume operation. Every event receives our complete focus, energy, and creativity."},{"q":"How far in advance should we reach out?","a":"For full planning, we recommend reaching out 12 to 18 months before your date. Partial planning 8 to 12 months. Day-of coordination can sometimes be booked 4 to 6 months out, depending on availability."},{"q":"Do you travel for destination events?","a":"Yes. We have planned events in Asheville, New Orleans, Nashville, and several Caribbean destinations. Travel fees apply outside the Nashville metro area. We love destination work and bring the same level of care wherever we go."},{"q":"Can we bring our own vendors?","a":"Absolutely. We have a curated preferred vendor list we trust completely. We can also work with vendors you have already secured. We ask to review contracts and conduct an intro meeting to ensure alignment."},{"q":"What is your design philosophy?","a":"We believe in intentional, layered design. Details that feel personal, not trendy. We do not replicate events. Your design is built from scratch based on your story, your tastes, and what feels authentic to you."}];

const STEPS = [{"phase":"12 Months Out","title":"Vision & Budget","desc":"We sit down, define your vision, establish your budget, and begin securing the right venue and vendors before they book up."},{"phase":"9 Months Out","title":"Venue & Vendors","desc":"Venue contract signed, photography, catering, entertainment, and florals confirmed. Your full vendor team is locked in."},{"phase":"6 Months Out","title":"Design & Details","desc":"Aesthetic direction, floor plans, stationery design, menu tasting, and every detail refined until it feels exactly right."},{"phase":"3 Months Out","title":"Final Selections","desc":"Final guest list, seating arrangements, ceremony order, and every vendor receives a detailed production brief."},{"phase":"1 Month Out","title":"Confirmation Calls","desc":"We personally confirm every vendor, review timelines, and conduct a final walkthrough of your venue."},{"phase":"Your Day","title":"Your Moment","desc":"You arrive. We handle everything. The result of 12 months of meticulous planning comes together perfectly."}];
const PROMISES = [{"title":"Boutique Intentionality","desc":"We limit ourselves to 20 weddings per year. Not for exclusivity — for quality. Your event deserves our full attention, and we protect that capacity fiercely."},{"title":"Listening First","desc":"Before we suggest a single flower or venue, we listen. We ask about your story, your values, your fears, your vision. Then we build from there."},{"title":"Sustainable Choices","desc":"We partner with local, seasonal florists and vendors who share our commitment to environmental responsibility. Beautiful events should not cost the earth."},{"title":"Calm Presence","desc":"Weddings are emotional. We bring a steady, experienced hand so you can be fully present in every moment — not managing logistics."}];
const LISTINGS = [];
const PRODUCTS = [];
const TECH = [];
const ACHIEVEMENTS = [];
const BREEDS = [];

export default function GoldenThreadEventsHome() {
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
                dangerouslySetInnerHTML={{ __html: `Every event,<br />a masterpiece.` }} />
            
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
              From intimate gatherings to grand galas, we craft experiences that live on in memory.
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
                href="tel:6155550988"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/70 transition-all text-sm font-bold"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call (615) 555-0988</span>
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
                alt="Golden Thread Events Hero Showcase"
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
              href="tel:6155550988"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all font-bold text-sm"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>(615) 555-0988</span>
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
                Wedding Planning & Floral Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 leading-none">
                The Golden Thread Process.
              </h2>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Sophia Hartwell combines a background in interior design with an obsessive love of flowers and a calm, reassuring presence that makes couples feel completely at ease.
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
          <h2 className="font-sans font-black text-3xl md:text-5xl leading-tight text-white">Your perfect event awaits.</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">We take only 20 weddings per year. Let us make yours one of them. Contact us today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`${BASE}/contact`} className="bg-amber-400 text-slate-950 hover:bg-amber-500 font-sans font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all">
              Book Your Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a href="tel:6155550988" className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-slate-800 hover:bg-slate-900/60 transition-all font-bold text-sm text-white">
              <Phone className="w-5 h-5 text-amber-400" /> (615) 555-0431
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}