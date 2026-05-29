import React from 'react';
import Image from 'next/image';
import { 
  Menu, X, Zap, Shield, Droplets, Users, Calendar, Leaf, Check,
  Home, Building2, Search, Star, Phone, Mail, MapPin, Clock,
  ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

function SunIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  );
}

export function BrighterSolarHeader(props: any) {
  return (
    <header className="bg-[#0A1628] text-white py-4 px-6 md:px-12 flex items-center justify-between shadow-md relative z-50">
      <div className="flex items-center gap-2">
         <SunIcon className="w-8 h-8 text-[#fbbf24]" />
         <div>
           <div className="font-black text-xl leading-none tracking-tight">{props.businessName || "BRIGHTER"}</div>
           <div className="text-[9px] tracking-[0.25em] text-white/70 font-bold mt-0.5">{props.tagline || "SOLAR CLEANING"}</div>
         </div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide">
         {(props.navLinks || []).map((link: any, i: number) => (
           <Link key={i} href="#" className={`${i === 0 ? 'text-[#fbbf24] border-b-2 border-[#fbbf24] pb-1' : 'hover:text-[#fbbf24] transition-colors'} uppercase`}>{link}</Link>
         ))}
      </nav>

      <div className="hidden lg:block">
         <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0A1628] font-black py-3 px-6 rounded-full flex items-center gap-2 transition-transform hover:scale-105 text-sm uppercase tracking-wide">
           {props.ctaText || "GET A FREE QUOTE"} <ArrowRight className="w-4 h-4 text-[#0A1628]" strokeWidth={3} />
         </button>
      </div>

      <button className="lg:hidden text-white">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
}

export function BrighterSolarHero(props: any) {
  return (
    <section className="relative pt-20 pb-40 px-6 md:px-12 bg-[#0A1628] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={props.backgroundImage || "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80"}
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        fill />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
         <div className="max-w-3xl">
           <div className="text-[#fbbf24] font-extrabold text-sm tracking-widest uppercase mb-4">
             {props.subheading || "CLEAN PANELS. MAX POWER."}
           </div>
           <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 whitespace-pre-wrap">
             {props.headline || "MORE SUN.\nMORE POWER.\nMORE SAVINGS."}
           </h1>
           <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-medium leading-relaxed">
             {props.description || "Professional solar panel cleaning that removes dirt, dust & grime so your system performs at its best."}
           </p>

           <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-0">
             <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0A1628] font-black py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 uppercase tracking-wide">
               {props.primaryButton || "GET A FREE QUOTE"} <ArrowRight className="w-5 h-5 text-[#0A1628]" strokeWidth={3} />
             </button>
             <button className="bg-transparent hover:bg-white/10 text-white font-black py-4 px-8 rounded-full flex items-center justify-center gap-2 border-2 border-white transition-colors uppercase tracking-wide">
               {props.secondaryButton || "SEE OUR SERVICES"} <ArrowRight className="w-5 h-5" strokeWidth={3} />
             </button>
           </div>
         </div>

         {/* Rating Badge */}
         <div className="hidden lg:flex flex-col items-center bg-[#0F203C]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl relative mt-32">
           <div className="flex gap-1 mb-2">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />)}
             <span className="text-white font-black ml-2 text-xl">5.0</span>
           </div>
           <p className="text-center text-sm font-medium text-white/80">Based on 200+<br/>Happy Customers</p>
         </div>
      </div>

      {/* Feature Bar attached to Hero */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-6 md:px-12 z-20">
        <div className="max-w-6xl mx-auto bg-[#0F203C] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 justify-between shadow-2xl border border-white/5 border-t-blue-400/20 text-white">
          <div className="flex items-center md:items-start gap-4 flex-1">
             <div className="w-12 h-12 rounded-full border-2 border-[#4A90E2]/30 flex items-center justify-center flex-shrink-0">
               <Zap className="w-6 h-6 text-[#4A90E2]" />
             </div>
             <div>
               <h4 className="font-bold text-lg mb-1">{props.feature1Title || "Boost Efficiency"}</h4>
               <p className="text-sm text-white/70 font-medium">{props.feature1Desc || "Up to 25% more energy output"}</p>
             </div>
          </div>
          
          <div className="hidden md:block w-px bg-white/10 self-stretch"></div>
          
          <div className="flex items-center md:items-start gap-4 flex-1">
             <div className="w-12 h-12 rounded-full border-2 border-[#4A90E2]/30 flex items-center justify-center flex-shrink-0">
               <ShieldCheck className="w-6 h-6 text-[#4A90E2]" />
             </div>
             <div>
               <h4 className="font-bold text-lg mb-1">{props.feature2Title || "Protect Your System"}</h4>
               <p className="text-sm text-white/70 font-medium">{props.feature2Desc || "Remove harmful buildup & prevent damage"}</p>
             </div>
          </div>

          <div className="hidden md:block w-px bg-white/10 self-stretch"></div>

          <div className="flex items-center md:items-start gap-4 flex-1">
             <div className="w-12 h-12 rounded-full border-2 border-[#4A90E2]/30 flex items-center justify-center flex-shrink-0">
               <Droplets className="w-6 h-6 text-[#4A90E2]" />
             </div>
             <div>
               <h4 className="font-bold text-lg mb-1">{props.feature3Title || "Safe & Eco-Friendly"}</h4>
               <p className="text-sm text-white/70 font-medium">{props.feature3Desc || "Pure water technology, zero harsh chemicals"}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrighterSolarStats(props: any) {
  const ICON_MAP: Record<string, any> = {
    Users, Calendar, Shield, Leaf
  };
  return (
    <section className="pt-48 pb-20 px-6 md:px-12 bg-gray-50 border-b border-gray-200">
       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
         {(props.stats || []).map((stat: any, i: number) => {
           const IconItem = ICON_MAP[stat.icon] || Shield;
           return (
             <div key={i} className="flex items-center gap-6 pt-6 md:pt-0 md:px-4">
               <div className="w-16 h-16 text-[#0A1628] hidden lg:block"><IconItem className="w-full h-full stroke-1" /></div>
               <div>
                 <div className="text-3xl font-black text-[#0A1628] leading-tight">{stat.value}</div>
                 <div className="text-sm font-semibold text-gray-500 mt-1 whitespace-pre-wrap">{stat.label}</div>
               </div>
             </div>
           );
         })}
       </div>
    </section>
  );
}

export function BrighterSolarServices(props: any) {
  const ICON_MAP: Record<string, any> = {
    Home, Building2, Search, ShieldCheck
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0b172a]">
       <div className="max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-[#fbbf24] font-black text-sm tracking-widest uppercase mb-4 text-center">{props.subheading || "OUR SERVICES"}</div>
         <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">{props.heading || "Complete Solar Panel Cleaning Solutions"}</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
           {(props.services || []).map((service: any, i: number) => {
             const IconComponent = ICON_MAP[service.icon] || Home;
             return (
               <div key={i} className="bg-[#13284a] rounded-2xl overflow-hidden group flex flex-col border border-white/5">
                 <div className="h-48 relative overflow-hidden bg-black/40">
                   <Image src={(service.img) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" fill />
                   <div className="absolute inset-0 bg-[#0b172a]/20"></div>
                 </div>
                 <div className="p-8 flex-1 flex flex-col relative pt-12">
                   <div className="absolute -top-8 left-8 w-16 h-16 bg-[#0b172a] border-[4px] border-[#13284a] rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-[#4A90E2]" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                   <p className="text-white/70 font-medium mb-8 flex-1 leading-relaxed text-sm">{service.desc}</p>
                   <Link href="#" className="flex items-center gap-2 text-[#4A90E2] font-bold text-sm tracking-wider uppercase group/link w-fit">
                     LEARN MORE <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={3} />
                   </Link>
                 </div>
               </div>
             );
           })}
         </div>
       </div>
    </section>
  );
}

export function BrighterSolarHowItWorks(props: any) {
  const ICON_MAP: Record<string, any> = {
    Search, Droplets, Sparkles, TrendingUp
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="text-[#4A90E2] font-black text-sm tracking-widest uppercase mb-4">{props.subheading || "HOW IT WORKS"}</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] leading-[1.1] mb-8 whitespace-pre-wrap">
            {props.heading || "Clean Panels.\nBetter Results."}
          </h2>
          <button className="bg-[#0b172a] hover:bg-[#1a365d] text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105 tracking-wide w-fit cursor-pointer">
             OUR PROCESS <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col sm:flex-row justify-between w-full relative">
          <div className="hidden sm:block absolute top-12 left-1/4 right-1/4 h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>
          {(props.steps || []).map((step: any, i: number) => {
            const IconComponent = ICON_MAP[step.icon] || Search;
            return (
              <div key={i} className="flex flex-col items-center text-center relative z-10 w-full sm:w-1/4 px-2 mb-12 sm:mb-0">
                <div className="w-24 h-24 rounded-full border-[3px] border-gray-100 bg-white flex items-center justify-center mb-6 shadow-sm">
                  <IconComponent className={`w-10 h-10 ${i % 2 === 0 ? 'text-[#0b172a]' : 'text-[#fbbf24]'}`} strokeWidth={1.5} />
                </div>
                <div className="font-bold text-[#0A1628] text-lg mb-2">{i + 1}. {step.title}</div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export function BrighterSolarTestimonials(props: any) {
  return (
    <section className="py-24 px-6 md:px-12 relative bg-[#0b172a]">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1588602517551-78921e10222f?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay" />
      <div className="absolute inset-0 bg-[#0b172a]/90" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-[#fbbf24] font-black text-sm tracking-widest uppercase mb-4 text-center">{props.subheading || "WHAT OUR CUSTOMERS SAY"}</div>
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">{props.heading || "Real Reviews. Real Results."}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
          {(props.reviews || []).map((review: any, i: number) => (
            <div key={i} className="bg-transparent border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center relative group hover:bg-white/5 transition-colors">
              <div className="absolute top-6 left-6 text-white/5 text-6xl font-serif">"</div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />)}
              </div>
              <p className="text-white/90 font-medium leading-relaxed mb-8 relative z-10 italic">
                "{review.quote}"
              </p>
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <Image src={(review.img) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" referrerPolicy="no-referrer" width={48} height={48} />
                <div className="text-left">
                  <div className="text-white font-bold">{review.name}</div>
                  <div className="text-white/50 text-sm font-medium">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrighterSolarPricing(props: any) {
  const ICON_MAP: Record<string, any> = {
    Home, Building2, Search
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-[#007BFF] font-black text-sm tracking-widest uppercase mb-4 text-center">{props.subheading || "PRICING"}</div>
        <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] text-center mb-12">{props.heading || "Simple Pricing. Powerful Results."}</h2>

        <div className="flex items-center gap-4 mb-20 relative">
          <div className="bg-white border-2 border-gray-200 rounded-full p-1.5 flex items-center justify-between w-80 relative shadow-sm">
             <button className="flex-1 py-3 px-4 rounded-full text-sm font-bold transition-colors relative z-10 text-white">
               One Time Cleaning
             </button>
             <button className="flex-1 py-3 px-4 rounded-full text-sm font-bold transition-colors relative z-10 text-gray-600">
               Maintenance Plans
             </button>
             <div className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#0A1628] rounded-full transition-transform duration-300 ease-out z-0 translate-x-0"></div>
          </div>
          
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:block opacity-60">
             <svg className="w-24 h-12 text-gray-500" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10 25 C 30 10, 60 10, 90 25" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
             </svg>
             <span className="absolute -right-16 top-1/2 -translate-y-1/2 font-serif italic text-gray-500 font-medium">Save more</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-center">
          {(props.plans || []).map((plan: any, i: number) => {
            const IconComponent = ICON_MAP[plan.icon] || Home;
            const isPopular = plan.isPopular;
            return (
              <div key={i} className={`bg-white rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow relative ${isPopular ? 'border-4 border-[#0A1628] shadow-2xl transform md:-translate-y-4' : 'border border-gray-200'}`}>
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fbbf24] text-[#0A1628] font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    MOST POPULAR
                  </div>
                )}
                <div className={`flex items-center gap-4 ${isPopular ? 'mb-6 mt-4' : 'mb-6'}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  <div className={`font-bold tracking-wider text-sm uppercase ${isPopular ? 'text-[#0A1628]' : 'text-gray-500'}`}>{plan.title}</div>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-black text-[#0A1628]">${plan.price}</span>
                </div>
                <div className="text-gray-500 text-sm font-medium mb-8">Starting at</div>
                
                <ul className="flex flex-col gap-4 mb-8 flex-1">
                  {(plan.features || []).map((feature: string, j: number) => (
                    <li key={j} className="flex items-start gap-3 text-gray-700 font-medium text-sm">
                      <Check className="w-5 h-5 text-[#4A90E2] flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 font-bold rounded-xl transition-colors flex justify-center items-center gap-2 ${isPopular ? 'bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0A1628] uppercase' : 'text-[#4A90E2] border-2 border-[#4A90E2]/20 hover:bg-[#F0F7FF]'}`}>
                  BOOK NOW <ArrowRight className={`w-4 h-4 ${isPopular ? 'text-[#0A1628]' : ''}`} strokeWidth={3} />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex items-center gap-2 text-gray-600 font-semibold text-sm">
          <ShieldCheck className="w-5 h-5 text-[#007BFF]" />
          100% Satisfaction Guarantee — If you're not happy, we'll make it right.
        </div>
      </div>
    </section>
  );
}

export function BrighterSolarCTA(props: any) {
  return (
    <section className="px-6 md:px-12 py-12 bg-white">
       <div className="max-w-6xl mx-auto bg-[#0b172a] rounded-3xl overflow-hidden relative p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80')] mix-blend-screen bg-cover bg-center"></div>
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              {props.heading || "Dirty Panels Cost You Money.\nLet's Change That."}
            </h2>
            
            <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start text-white/90 font-medium">
              {(props.benefits || []).map((benefit: string, i: number) => (
                <li key={i} className="flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#fbbf24]" /> {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4 flex-shrink-0">
             <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0A1628] font-black py-5 px-10 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105 uppercase tracking-wide text-lg w-full sm:w-auto">
               {props.buttonText || "GET A FREE QUOTE"} <ArrowRight className="w-5 h-5 text-[#0A1628]" strokeWidth={3} />
             </button>
             <p className="text-white/60 text-sm font-medium">{props.subtext || "No obligation. Fast response."}</p>
          </div>
       </div>
    </section>
  );
}

export const BS_SCHEMAS = {
  BSHeader: {
    description: "Brighter Solar Header",
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'navLinks', label: 'Nav Links', type: 'array', arrayFields: [
        { name: 'text', label: 'Text', type: 'text' }
      ]}
    ],
    defaultProps: {
      businessName: "BRIGHTER",
      navLinks: ["HOME", "SERVICES", "ABOUT US", "REVIEWS", "PRICING", "CONTACT"]
    }
  },
  BSHero: {
    description: "Brighter Solar Hero Section",
    fields: [
      { name: 'headline', label: 'Headline', type: 'text' },
      { name: 'subheading', label: 'Subheading', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'backgroundImage', label: 'Background Image', type: 'text' }
    ],
    defaultProps: {
      headline: "MORE SUN.\nMORE POWER.\nMORE SAVINGS.",
      subheading: "CLEAN PANELS. MAX POWER.",
      description: "Professional solar panel cleaning that removes dirt, dust & grime so your system performs at its best.",
      backgroundImage: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80"
    }
  },
  BSStats: {
    description: "Brighter Solar Stats Bar",
    fields: [
      { name: 'stats', label: 'Stats', type: 'array', arrayFields: [
        { name: 'value', label: 'Value', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'icon', label: 'Icon', type: 'text' }
      ]}
    ],
    defaultProps: {
      stats: [
        { value: "500+", label: "Homes & Businesses\nServed", icon: "Users" },
        { value: "5+", label: "Years of Local\nExperience", icon: "Calendar" },
        { value: "100%", label: "Satisfaction\nGuaranteed", icon: "Shield" },
        { value: "Eco-Friendly", label: "Pure Water Technology\nSafe for Your System", icon: "Leaf" }
      ]
    }
  },
  BSServices: {
    description: "Brighter Solar Services Grid",
    fields: [
      { name: 'heading', label: 'Heading', type: 'text' },
      { name: 'services', label: 'Services', type: 'array', arrayFields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'img', label: 'Image URL', type: 'text' },
        { name: 'icon', label: 'Icon (Home, Building2, Search, ShieldCheck)', type: 'text' }
      ]}
    ],
    defaultProps: {
      heading: "Complete Solar Panel Cleaning Solutions",
      services: [
        { title: "Residential Cleaning", icon: "Home", desc: "Keep your home system running at peak performance with routine cleanings.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
        { title: "Commercial Cleaning", icon: "Building2", desc: "Maximize energy production and savings for your business with professional service.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
        { title: "Ground Mount Cleaning", icon: "Search", desc: "We safely clean all types of ground mounted solar installations.", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" },
        { title: "Bird Proofing", icon: "ShieldCheck", desc: "Protect your panels from birds and pests with our proofing solutions.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  },
  BSSteps: {
    description: "Brighter Solar How It Works",
    fields: [
      { name: 'heading', label: 'Heading', type: 'text' },
      { name: 'steps', label: 'Steps', type: 'array', arrayFields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'icon', label: 'Icon', type: 'text' }
      ]}
    ],
    defaultProps: {
      heading: "Clean Panels.\nBetter Results.",
      steps: [
        { title: "Inspect", desc: "We inspect your system to check buildup and performance.", icon: "Search" },
        { title: "Pure Clean", desc: "We use pure water technology to gently remove all dirt & grime.", icon: "Droplets" },
        { title: "Rinse", desc: "Spot-free rinse leaves your panels clean and streak-free.", icon: "Sparkles" },
        { title: "Maximize", desc: "Enjoy up to 25% more energy and lower electric bills.", icon: "TrendingUp" }
      ]
    }
  },
  BSTestimonials: {
    description: "Brighter Solar Testimonials",
    fields: [
      { name: 'heading', label: 'Heading', type: 'text' },
      { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'role', label: 'Role', type: 'text' },
        { name: 'quote', label: 'Quote', type: 'text' },
        { name: 'img', label: 'Avatar URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      heading: "Real Reviews. Real Results.",
      reviews: [
        { name: "Sarah M.", role: "Homeowner", quote: "My system is producing way more power after the cleaning. Super professional and easy to work with!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "David L.", role: "Business Owner", quote: "We schedule regular cleanings for all our buildings. The difference in output is incredible.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "James R.", role: "Homeowner", quote: "Great communication, on-time, and our panels have never looked better. Highly recommend!", img: "https://randomuser.me/api/portraits/men/67.jpg" }
      ]
    }
  },
  BSPricing: {
    description: "Brighter Solar Pricing Plans",
    fields: [
      { name: 'heading', label: 'Heading', type: 'text' },
      { name: 'plans', label: 'Plans', type: 'array', arrayFields: [
        { name: 'title', label: 'Plan Title', type: 'text' },
        { name: 'price', label: 'Starting Price', type: 'text' },
        { name: 'icon', label: 'Icon', type: 'text' },
        { name: 'features', label: 'Features (List manually in code for now)', type: 'text' }
      ]}
    ],
    defaultProps: {
      heading: "Simple Pricing. Powerful Results.",
      plans: [
        { title: "Residential", price: "99", icon: "Home", features: ["Up to 20 Solar Panels", "Pure Water Cleaning", "System Inspection", "Streak-Free Guarantee"] },
        { title: "Commercial", price: "299", icon: "Building2", isPopular: true, features: ["Up to 100 Solar Panels", "Pure Water Cleaning", "System Inspection", "Priority Scheduling"] },
        { title: "Ground Mount", price: "199", icon: "Search", features: ["Up to 50 Panels", "Pure Water Cleaning", "Undercarriage Cleaning", "System Inspection"] }
      ]
    }
  },
  BSCTA: {
    description: "Brighter Solar CTA block",
    fields: [
      { name: 'heading', label: 'Heading', type: 'textarea' },
      { name: 'buttonText', label: 'Button Text', type: 'text' }
    ],
    defaultProps: {
      heading: "Dirty Panels Cost You Money.\nLet's Change That.",
      buttonText: "GET A FREE QUOTE"
    }
  },
  BSFooter: {
    description: "Brighter Solar Footer",
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' }
    ],
    defaultProps: {
      businessName: "BRIGHTER"
    }
  }
};

export const BS_RENDERERS = {
  BSHeader: (props: any) => <BrighterSolarHeader {...props} />,
  BSHero: (props: any) => <BrighterSolarHero {...props} />,
  BSStats: (props: any) => <BrighterSolarStats {...props} />,
  BSServices: (props: any) => <BrighterSolarServices {...props} />,
  BSSteps: (props: any) => <BrighterSolarHowItWorks {...props} />,
  BSTestimonials: (props: any) => <BrighterSolarTestimonials {...props} />,
  BSPricing: (props: any) => <BrighterSolarPricing {...props} />,
  BSCTA: (props: any) => <BrighterSolarCTA {...props} />,
  BSFooter: (props: any) => <BrighterSolarFooter {...props} />
};

export function BrighterSolarFooter(props: any) {
  return (
    <footer className="bg-[#0b172a] text-white/70 pt-20 pb-8 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <div>
          <div className="flex items-center gap-2 mb-6">
             <SunIcon className="w-8 h-8 text-[#fbbf24]" />
             <div>
               <div className="font-black text-xl leading-none tracking-tight text-white">{props.businessName || "BRIGHTER"}</div>
               <div className="text-[9px] tracking-[0.25em] text-white/70 font-bold mt-0.5">{props.tagline || "SOLAR CLEANING"}</div>
             </div>
          </div>
          <p className="text-sm font-medium leading-relaxed mb-6">
            {props.description || "Professional solar panel cleaning services that help you get the most out of your investment."}
          </p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0b172a] transition-colors cursor-pointer border border-white/5">
               <span className="font-bold text-sm">f</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0b172a] transition-colors cursor-pointer border border-white/5">
               <span className="font-bold text-sm">in</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0b172a] transition-colors cursor-pointer border border-white/5">
               <span className="font-bold text-sm shrink-0">X</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0b172a] transition-colors cursor-pointer border border-white/5">
               <span className="font-bold text-sm">ig</span>
             </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">QUICK LINKS</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Reviews</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">SERVICES</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">Residential Cleaning</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Commercial Cleaning</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Ground Mount Cleaning</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Bird Proofing</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Maintenance Plans</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">CONTACT US</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <a href={`tel:${props.phone}`} className="hover:text-white transition-colors">{props.phone || "(555) 123-4567"}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href={`mailto:${props.email}`} className="hover:text-white transition-colors">{props.email || "info@brightersolar.com"}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{props.address || "Serving Your Local Area"}</span>
            </li>
            <li className="flex items-start gap-3 mt-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="whitespace-pre-wrap">{props.hours || "Mon - Sat: 7AM - 5PM\nSun: Closed"}</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs font-semibold tracking-wide">
        <p>© {new Date().getFullYear()} {props.businessName || "Brighter Solar Cleaning"}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
