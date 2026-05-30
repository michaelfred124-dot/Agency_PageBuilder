import React from 'react';
import { 
  Menu, X, Zap, Shield, Droplets, Users, Calendar, Leaf, Check,
  Home, Building2, Search, Star, Phone, Mail, MapPin, Clock,
  ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Sparkles, AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import EditableText from '@/components/EditableText';

function VikingShieldIcon(props: any) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M12 8v8"></path>
      <path d="M8 12h8"></path>
    </svg>
  );
}

export function VoltVikingsHeader(props: any) {
  return (
    <header className="bg-[#12002B] text-white py-4 px-6 md:px-12 flex items-center justify-between border-b-[4px] border-[#00A896] relative z-50">
      <div className="flex items-center gap-2">
         <Zap className="w-8 h-8 text-[#FF6B00] animate-pulse" />
         <div>
           <div className="font-black text-xl leading-none tracking-tight flex items-center gap-1 text-[#00F2FE]">
             {props.businessName || "VOLT VIKINGS"}
           </div>
           <div className="text-[9px] tracking-[0.25em] text-[#FF6B00] font-bold mt-0.5">{props.tagline || "LEGENDARY ELECTRICAL CONTRACTORS"}</div>
         </div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest">
         {(props.navLinks || []).map((link: any, i: number) => (
           <Link key={i} href="#" className={`${i === 0 ? 'text-[#00F2FE] border-b-2 border-[#00F2FE] pb-1' : 'hover:text-[#00F2FE] transition-colors'} uppercase`}>{link}</Link>
         ))}
      </nav>

      <div className="hidden lg:flex items-center gap-6">
         <a href={`tel:${props.phone || '(520) 555-0199'}`} className="flex items-center gap-2 text-sm font-black hover:text-[#00F2FE] transition-colors text-white">
           <Phone className="w-4 h-4 text-[#FF6B00]" /> {props.phone || "(520) 555-0199"}
         </a>
         <button className="bg-[#FF6B00] hover:bg-[#ff8533] text-white font-black py-2.5 px-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all text-xs uppercase tracking-wider">
           {props.ctaText || "BOOK ONLINE"}
         </button>
      </div>

      <button className="lg:hidden text-white">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
}

export function VoltVikingsHero({ 
  badge, 
  title, 
  subtitle, 
  ctaText, 
  ctaLink = '#', 
  secondaryCtaText, 
  secondaryCtaLink = '#', 
  bgImage, 
  isEditable, 
  onPropChange 
}: any) {
  return (
    <section className="relative pt-24 pb-44 px-6 md:px-12 bg-[#12002B] overflow-hidden border-b-[4px] border-black">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop"}
          alt="Volt Vikings Hero Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12002B] via-[#12002B]/90 to-transparent"></div>
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00A896]/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
         <div className="max-w-3xl text-left">
           <div className="inline-block bg-[#3C0E70] text-[#00F2FE] border-2 border-[#00A896] font-extrabold text-[10px] tracking-widest uppercase mb-6 px-4.5 py-1.5 rounded-full shadow-[3px_3px_0px_#000]">
             <EditableText 
               value={badge} 
               onChange={(val) => onPropChange?.('badge', val)} 
               isEditable={!!isEditable} 
               placeholder="Badge Text" 
             />
           </div>
           
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight uppercase break-words w-full">
             <EditableText 
               value={title} 
               onChange={(val) => onPropChange?.('title', val)} 
               isEditable={!!isEditable} 
               placeholder="Hero Title" 
               multiline={true}
             />
           </h1>
           
           <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl font-medium leading-relaxed break-words">
             <EditableText 
               value={subtitle} 
               onChange={(val) => onPropChange?.('subtitle', val)} 
               isEditable={!!isEditable} 
               placeholder="Hero Subtitle" 
               multiline={true}
             />
           </p>

           <div className="flex flex-col sm:flex-row gap-4">
             {isEditable ? (
               <div className="inline-block">
                 <EditableText 
                   value={ctaText} 
                   onChange={(val) => onPropChange?.('ctaText', val)} 
                   isEditable={!!isEditable} 
                   className="bg-[#FF6B00] hover:bg-[#ff8533] text-white font-black py-4 px-8 rounded-xl border-2 border-black shadow-[6px_6px_0px_#000] inline-block text-center uppercase tracking-wider text-xs cursor-pointer"
                   placeholder="CTA Button Text"
                 />
               </div>
             ) : (
               <a href={ctaLink} className="bg-[#FF6B00] hover:bg-[#ff8533] text-white font-black py-4 px-8 rounded-xl border-2 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center uppercase tracking-wider text-xs">
                 {ctaText}
               </a>
             )}
             
             {isEditable ? (
               <div className="inline-block">
                 <EditableText 
                   value={secondaryCtaText} 
                   onChange={(val) => onPropChange?.('secondaryCtaText', val)} 
                   isEditable={!!isEditable} 
                   className="bg-transparent hover:bg-white/5 text-white font-black py-4 px-8 rounded-xl border-2 border-[#00A896] hover:border-[#00F2FE] inline-block text-center uppercase tracking-wider text-xs cursor-pointer"
                   placeholder="Secondary CTA Text"
                 />
               </div>
             ) : (
               <a href={secondaryCtaLink} className="bg-transparent hover:bg-white/5 text-white font-black py-4 px-8 rounded-xl border-2 border-[#00A896] hover:border-[#00F2FE] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center uppercase tracking-wider text-xs">
                 {secondaryCtaText}
               </a>
             )}
           </div>
         </div>

         {/* Trust badge with Viking aesthetic */}
         <div className="bg-[#1E0044]/90 backdrop-blur-sm border-[4px] border-black rounded-2xl p-8 shadow-[8px_8px_0px_#000] text-center w-full max-w-sm shrink-0 border-t-[#FF6B00]/40">
           <div className="flex justify-center gap-1 mb-3">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FF6B00] text-[#FF6B00]" />)}
           </div>
           <div className="text-2xl font-black text-white uppercase tracking-tighter mb-1">5.0 Star Service</div>
           <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-6">Based on 250+ Google Reviews</p>
           
           <div className="h-px bg-white/10 w-full mb-6"></div>
           
           <ul className="text-left space-y-3.5 text-xs text-white/90 font-bold tracking-wide uppercase">
             <li className="flex items-center gap-3">
               <ShieldCheck className="w-5 h-5 text-[#00F2FE] shrink-0" />
               <span>Licensed, Bonded & Insured</span>
             </li>
             <li className="flex items-center gap-3">
               <ShieldCheck className="w-5 h-5 text-[#00F2FE] shrink-0" />
               <span>Local Tucson Technicians</span>
             </li>
             <li className="flex items-center gap-3">
               <ShieldCheck className="w-5 h-5 text-[#00F2FE] shrink-0" />
               <span>VoltGuard™ Home Safety Audits</span>
             </li>
           </ul>
         </div>
      </div>
    </section>
  );
}

export function VoltVikingsStats(props: any) {
  const ICON_MAP: Record<string, any> = {
    ShieldCheck, Zap, Users, Sparkles, VikingShieldIcon
  };

  return (
    <section className="bg-black py-16 px-6 md:px-12 relative z-20 -mt-16 border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(props.stats || []).map((stat: any, i: number) => {
            const IconItem = ICON_MAP[stat.icon] || ShieldCheck;
            return (
              <div 
                key={i} 
                className="bg-[#1E0044] border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_#00A896] hover:shadow-[6px_6px_0px_#FF6B00] transition-all duration-300 flex items-center gap-4 text-white"
              >
                <div className="w-12 h-12 rounded-xl bg-black border-2 border-[#00A896] flex items-center justify-center shrink-0">
                  <IconItem className="w-6 h-6 text-[#00F2FE]" />
                </div>
                <div>
                  <div className="text-2xl font-black tracking-tight text-[#FF6B00]">{stat.value}</div>
                  <div className="text-[10px] font-extrabold text-white/70 uppercase tracking-widest mt-0.5 whitespace-pre-wrap">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function VoltVikingsServices({ title, subtitle, services, isEditable, onPropChange }: any) {
  const ICON_MAP: Record<string, any> = {
    Home, Building2, Zap, ShieldCheck
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1E0044] text-white border-b-[4px] border-black">
       <div className="max-w-7xl mx-auto flex flex-col items-center">
         <span className="text-[#FF6B00] font-black text-xs tracking-[0.2em] uppercase mb-4 text-center">WHAT WE EXCEL AT</span>
         <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-tighter w-full">
           <EditableText 
             value={title} 
             onChange={(val) => onPropChange?.('title', val)} 
             isEditable={!!isEditable} 
             placeholder="Section Title" 
           />
         </h2>
         <p className="text-sm md:text-base font-bold text-white/60 text-center mb-16 max-w-xl uppercase tracking-wider">
           <EditableText 
             value={subtitle} 
             onChange={(val) => onPropChange?.('subtitle', val)} 
             isEditable={!!isEditable} 
             placeholder="Section Subtitle" 
           />
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
           {(services || []).map((service: any, i: number) => {
             const IconComponent = ICON_MAP[service.icon] || Zap;
             return (
               <div 
                 key={i} 
                 className="bg-[#12002B] rounded-2xl overflow-hidden flex flex-col border-[4px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[6px_6px_0px_#00A896] hover:-translate-y-1 transition-all duration-300 group"
               >
                 <div className="h-44 relative overflow-hidden bg-black/40 border-b-2 border-black">
                   <img 
                     src={service.img || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                     referrerPolicy="no-referrer" 
                   />
                   <div className="absolute inset-0 bg-[#12002B]/20"></div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col relative pt-10">
                   <div className="absolute -top-7 left-6 w-14 h-14 bg-black border-2 border-[#FF6B00] rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-[#00F2FE]" />
                   </div>
                   <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{service.title}</h3>
                   <p className="text-white/60 font-semibold mb-6 flex-1 leading-relaxed text-xs">{service.desc}</p>
                   <Link href="#" className="flex items-center gap-1.5 text-[#00F2FE] hover:text-white font-extrabold text-xs tracking-wider uppercase group/link w-fit transition-colors">
                     LEARN MORE <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" strokeWidth={3} />
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

export function VoltVikingsProcess({ title, steps, isEditable, onPropChange }: any) {
  const ICON_MAP: Record<string, any> = {
    Search, Calendar, CheckCircle2, TrendingUp, Sparkles, Shield
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-black text-white border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
          <span className="text-[#00F2FE] font-black text-xs tracking-[0.2em] uppercase mb-4">OUR VIKING JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-black leading-[1.05] mb-8 uppercase tracking-tighter max-w-sm">
            <EditableText 
              value={title} 
              onChange={(val) => onPropChange?.('title', val)} 
              isEditable={!!isEditable} 
              placeholder="Process Title" 
              multiline={true}
            />
          </h2>
          <button className="bg-[#FF6B00] hover:bg-[#ff8533] text-white font-black py-3.5 px-7 rounded-xl border-2 border-black shadow-[4px_4px_0px_#00A896] hover:shadow-[4px_4px_0px_#FF6B00] transition-all text-xs uppercase tracking-wider cursor-pointer">
             GET STARTED TODAY
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col md:flex-row justify-between w-full relative gap-8">
          {(steps || []).map((step: any, i: number) => {
            const IconComponent = ICON_MAP[step.icon] || Search;
            return (
              <div 
                key={i} 
                className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 bg-[#12002B] border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000] hover:border-[#FF6B00] transition-colors"
              >
                <div className="w-16 h-16 rounded-full border-[3px] border-[#00A896] bg-black flex items-center justify-center mb-4.5 shadow-sm">
                  <IconComponent className={`w-7 h-7 ${i % 2 === 0 ? 'text-[#FF6B00]' : 'text-[#00F2FE]'}`} strokeWidth={2} />
                </div>
                <div className="font-black text-white text-md mb-2 uppercase tracking-tight">{i + 1}. {step.title}</div>
                <p className="text-white/60 text-xs font-semibold leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export function VoltVikingsTestimonials({ title, reviews, isEditable, onPropChange }: any) {
  return (
    <section className="py-24 px-6 md:px-12 relative bg-[#1E0044] text-white border-b-[4px] border-black">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-[#00F2FE] font-black text-xs tracking-[0.2em] uppercase mb-4 text-center">LEGENDARY PROOF</span>
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter w-full">
          <EditableText 
            value={title} 
            onChange={(val) => onPropChange?.('title', val)} 
            isEditable={!!isEditable} 
            placeholder="Testimonials Title" 
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {(reviews || []).map((review: any, i: number) => (
            <div 
              key={i} 
              className="bg-[#12002B] border-[3px] border-black rounded-2xl p-8 flex flex-col justify-between relative group shadow-[6px_6px_0px_#000] hover:border-[#00F2FE] transition-colors"
            >
              <div className="absolute top-6 right-6 text-[#FF6B00] text-7xl font-serif leading-none select-none opacity-20">”</div>
              <div className="space-y-4">
                <div className="flex text-[#FF6B00] gap-0.5">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]" />)}
                </div>
                <p className="text-white/95 font-semibold text-xs leading-relaxed italic relative z-10">
                  "{review.quote}"
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-4">
                <img 
                  src={review.img || "https://randomuser.me/api/portraits/men/32.jpg"} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#00A896]" 
                  referrerPolicy="no-referrer" 
                />
                <div>
                  <div className="text-white font-bold text-xs uppercase tracking-wide">{review.name}</div>
                  <div className="text-[#FF6B00] text-[10px] font-extrabold uppercase tracking-widest mt-0.5">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VoltVikingsMap({ title, desc, mapIframeUrl, isEditable, onPropChange }: any) {
  return (
    <section className="py-20 px-6 md:px-12 bg-black text-white border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <span className="text-[#FF6B00] font-black text-xs tracking-[0.2em] uppercase">OUR SERVICE CORRIDOR</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter w-full">
            <EditableText 
              value={title} 
              onChange={(val) => onPropChange?.('title', val)} 
              isEditable={!!isEditable} 
              placeholder="Map Title" 
              multiline={true}
            />
          </h2>
          <p className="text-white/70 font-semibold leading-relaxed text-xs break-words">
            <EditableText 
              value={desc} 
              onChange={(val) => onPropChange?.('desc', val)} 
              isEditable={!!isEditable} 
              placeholder="Map Description" 
              multiline={true}
            />
          </p>
          
          <div className="bg-[#12002B] border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000] border-l-[#FF6B00]">
            <h4 className="text-sm font-black text-[#00F2FE] mb-2 uppercase">Phoenix & Tucson Combined Office</h4>
            <p className="text-white/60 text-xs font-semibold leading-relaxed">
              We deploy rapid response electrician crews throughout Tucson, Oro Valley, Marana, Sahuarita, Chandler, Mesa, and Tempe.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 border-[4px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_#00A896] bg-gray-900 aspect-video">
          <iframe 
            className="w-full h-full" 
            title="Volt Vikings Service Area Map" 
            style={{ border: "none" }}
            src={mapIframeUrl || "https://snazzymaps.com/embed/717236"}
          />
        </div>

      </div>
    </section>
  );
}

export function VoltVikingsCTA({ title, subtitle, buttonText, isEditable, onPropChange }: any) {
  return (
    <section className="px-6 md:px-12 py-16 bg-[#12002B]">
       <div className="max-w-6xl mx-auto bg-[#3C0E70] rounded-3xl overflow-hidden relative p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border-[4px] border-black shadow-[8px_8px_0px_#000]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070')] bg-cover bg-center"></div>
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
              <EditableText 
                value={title} 
                onChange={(val) => onPropChange?.('title', val)} 
                isEditable={!!isEditable} 
                placeholder="CTA Title" 
                multiline={true}
              />
            </h2>
            
            <p className="text-white/80 font-bold uppercase tracking-widest text-xs">
              <EditableText 
                value={subtitle} 
                onChange={(val) => onPropChange?.('subtitle', val)} 
                isEditable={!!isEditable} 
                placeholder="CTA Subtitle" 
              />
            </p>
          </div>

          <div className="relative z-10 shrink-0">
             {isEditable ? (
               <div className="inline-block">
                 <EditableText 
                   value={buttonText} 
                   onChange={(val) => onPropChange?.('buttonText', val)} 
                   isEditable={!!isEditable} 
                   className="bg-[#FF6B00] hover:bg-[#ff8533] text-white font-black py-4.5 px-9 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] inline-block text-center uppercase tracking-wider text-xs cursor-pointer"
                   placeholder="CTA Button Text"
                 />
               </div>
             ) : (
               <button className="bg-[#FF6B00] hover:bg-[#ff8533] text-white font-black py-4.5 px-9 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all text-xs uppercase tracking-wider">
                 {buttonText}
               </button>
             )}
          </div>
       </div>
    </section>
  );
}

export function VoltVikingsFooter(props: any) {
  return (
    <footer className="bg-black text-white/70 pt-20 pb-8 px-6 md:px-12 border-t-[4px] border-[#00A896]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
             <Zap className="w-8 h-8 text-[#FF6B00] animate-pulse" />
             <div>
               <div className="font-black text-xl leading-none tracking-tight text-[#00F2FE]">{props.businessName || "VOLT VIKINGS"}</div>
               <div className="text-[9px] tracking-[0.25em] text-[#FF6B00] font-bold mt-0.5">{props.tagline || "LEGENDARY ELECTRICAL CONTRACTORS"}</div>
             </div>
          </div>
          <p className="text-xs font-semibold leading-relaxed">
            {props.description || "Tucson's premier local electrical contractor service. Providing residential, commercial, and specialty services with legendary safety standards."}
          </p>
          <div className="text-[10px] font-black text-white/50 uppercase tracking-widest">
            {props.licensing || "AZ ROC #341258 | Licensed, Bonded & Insured"}
          </div>
        </div>

        <div>
          <h4 className="text-[#00F2FE] font-black mb-6 tracking-wider uppercase text-xs">QUICK NAV</h4>
          <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-wider">
            <li><Link href="#" className="hover:text-[#FF6B00] transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-[#FF6B00] transition-colors">Services</Link></li>
            <li><Link href="#" className="hover:text-[#FF6B00] transition-colors">Viking Journey</Link></li>
            <li><Link href="#" className="hover:text-[#FF6B00] transition-colors">Testimonials</Link></li>
            <li><Link href="#" className="hover:text-[#FF6B00] transition-colors">Map Corridor</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#00F2FE] font-black mb-6 tracking-wider uppercase text-xs">SERVICES</h4>
          <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-white/50">
            <li>Residential Electrician</li>
            <li>Commercial Contracting</li>
            <li>Panel Upgrades (200A)</li>
            <li>EV Level-2 Fast Chargers</li>
            <li>VoltGuard™ Home Safety Audits</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#00F2FE] font-black mb-6 tracking-wider uppercase text-xs">CORRIDOR CONTACT</h4>
          <ul className="flex flex-col gap-4 text-xs font-semibold">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <a href={`tel:${props.phone}`} className="hover:text-white transition-colors">{props.phone || "(520) 555-0199"}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <a href={`mailto:${props.email}`} className="hover:text-white transition-colors">{props.email || "dispatch@voltvikings.com"}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span>{props.address || "Tucson - Phoenix Area, AZ"}</span>
            </li>
            <li className="flex items-start gap-3 mt-1">
              <Clock className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
              <span className="whitespace-pre-wrap text-[10px] text-white/50 font-bold uppercase">{props.hours || "Mon - Sat: 7AM - 7PM\nSun: Emergency Only"}</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/40">
        <p>© {new Date().getFullYear()} {props.businessName || "Volt Vikings"}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export const VV_SCHEMAS = {
  VVHeader: {
    description: "Volt Vikings Header",
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'ctaText', label: 'CTA Text', type: 'text' },
      { name: 'navLinks', label: 'Nav Links', type: 'array', arrayFields: [
        { name: 'text', label: 'Text', type: 'text' }
      ]}
    ],
    defaultProps: {
      businessName: "VOLT VIKINGS",
      tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
      phone: "(520) 555-0199",
      ctaText: "BOOK ONLINE",
      navLinks: ["HOME", "SERVICES", "JOURNEY", "REVIEWS", "CORRIDOR"]
    }
  },
  VVHero: {
    description: "Volt Vikings High-Impact Hero",
    fields: [
      { name: 'badge', label: 'Badge text', type: 'text' },
      { name: 'title', label: 'Title text', type: 'textarea' },
      { name: 'subtitle', label: 'Subtitle text', type: 'textarea' },
      { name: 'ctaText', label: 'Primary Button Text', type: 'text' },
      { name: 'secondaryCtaText', label: 'Secondary Button Text', type: 'text' },
      { name: 'bgImage', label: 'Background Image URL', type: 'text' }
    ],
    defaultProps: {
      badge: "Tucson's Rated #1 Electrician",
      title: "Legendary Electrical Services for Tucson & Phoenix",
      subtitle: "Licensed, bonded, and insured team of expert electricians delivering VoltGuard™ safety audits and maximum power reliability.",
      ctaText: "GET A FAST QUOTE",
      secondaryCtaText: "VOLTGUARD™ AUDIT",
      bgImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop"
    }
  },
  VVStats: {
    description: "Volt Vikings Metric Stat Cards",
    fields: [
      { name: 'stats', label: 'Stats', type: 'array', arrayFields: [
        { name: 'value', label: 'Value', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'icon', label: 'Icon (ShieldCheck, Zap, Users, Sparkles, VikingShieldIcon)', type: 'text' }
      ]}
    ],
    defaultProps: {
      stats: [
        { value: "2,500+", label: "Projects\nCompleted", icon: "VikingShieldIcon" },
        { value: "5.0 Rating", label: "250+ Google\nReviews", icon: "Users" },
        { value: "VoltGuard™", label: "Home Safety\nTechnology", icon: "Zap" },
        { value: "Level-2 EV", label: "Fast Charger\nSpecialist", icon: "ShieldCheck" }
      ]
    }
  },
  VVServices: {
    description: "Volt Vikings Services Grid",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'services', label: 'Services', type: 'array', arrayFields: [
        { name: 'title', label: 'Service Title', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
        { name: 'img', label: 'Image URL', type: 'text' },
        { name: 'icon', label: 'Icon (Home, Building2, Zap, ShieldCheck)', type: 'text' }
      ]}
    ],
    defaultProps: {
      title: "Tucson's Trusted Electrical Team",
      subtitle: "Explore our residential, commercial, and specialty electrical contracting services.",
      services: [
        { title: "Residential Electrician", icon: "Home", desc: "Lighting upgrades, panel replacements, troubleshooting, safety checks, and complete rewires.", img: "https://images.unsplash.com/photo-1558223190-184852c035be?q=80&w=800" },
        { title: "Commercial Contracting", icon: "Building2", desc: "High-voltage layout, tenant improvements, structural wiring, lighting systems, and service panels.", img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=800" },
        { title: "Smart Panel Upgrades", icon: "Zap", desc: "Transition your home's breaker panel to 200A. Maximize current safety and smart home compatibility.", img: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800" },
        { title: "EV Charger Installation", icon: "ShieldCheck", desc: "Expert wall connector level-2 charging box setups for Tesla, Rivian, and all modern electric vehicles.", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800" }
      ]
    }
  },
  VVProcess: {
    description: "Volt Vikings 3-Step Process",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'steps', label: 'Steps', type: 'array', arrayFields: [
        { name: 'title', label: 'Step Title', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'icon', label: 'Icon (Search, Calendar, CheckCircle2, TrendingUp, Sparkles, Shield)', type: 'text' }
      ]}
    ],
    defaultProps: {
      title: "Getting world class electrical services has never been easier",
      steps: [
        { title: "Get A Fast Quote", desc: "It’s never been easier. Just click the button and send us details of your project. We respond promptly.", icon: "Search" },
        { title: "Set A Schedule", desc: "Get work done at a time that suits you with fast and easy scheduling. We arrive right on time.", icon: "Calendar" },
        { title: "Sit Back & Relax", desc: "Our licensed, highly trained electricians handle everything safely. Get a legendary customer experience.", icon: "Shield" }
      ]
    }
  },
  VVTestimonials: {
    description: "Volt Vikings Customer Testimonials",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'role', label: 'Role', type: 'text' },
        { name: 'quote', label: 'Quote', type: 'textarea' },
        { name: 'img', label: 'Avatar URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      title: "Legendary Service, Proven by Tucson Neighbors",
      reviews: [
        { name: "Carmine C.", role: "Retired Electrician", quote: "As a retired Electrician, I called Volt Vikings who I used previously on some HOAs I managed. They let you know when they will arrive, work extremely clean, and know their code inside and out. Excellent service and reasonable pricing.", img: "https://randomuser.me/api/portraits/men/44.jpg" },
        { name: "Glen T.", role: "Commercial Owner", quote: "I own a 29,000 sq ft commercial building and several apartments. For the past 5 years I have been calling Volt Vikings for all my electrical needs, from new equipment installs to complex troubleshooting. Qualified, competent crews every single time.", img: "https://randomuser.me/api/portraits/men/32.jpg" }
      ]
    }
  },
  VVMap: {
    description: "Volt Vikings Map Details",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'desc', label: 'Description', type: 'textarea' },
      { name: 'mapIframeUrl', label: 'Snazzy Maps Embed URL', type: 'text' }
    ],
    defaultProps: {
      title: "Legendary Electrical Services Throughout Tucson & Phoenix Area",
      desc: "No matter where you are, we've got your electrical needs covered. We provide rapid-response services across the region, giving everyone access to our highly experienced team. If you need electricians in Tucson, Mesa, Chandler, Tempe, or Phoenix, we are here for you!",
      mapIframeUrl: "https://snazzymaps.com/embed/717236"
    }
  },
  VVCTA: {
    description: "Volt Vikings Urgent CTA Section",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' }
    ],
    defaultProps: {
      title: "Power Issues or Fast Project Upgrades?",
      subtitle: "Get a free online quote estimate or schedule an onsite consultation in seconds.",
      buttonText: "REQUEST ESTIMATE NOW"
    }
  },
  VVFooter: {
    description: "Volt Vikings Footer",
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'licensing', label: 'Licensing Text', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'address', label: 'Address', type: 'text' }
    ],
    defaultProps: {
      businessName: "VOLT VIKINGS",
      tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
      description: "Tucson's premier local electrical contractor service. Providing residential, commercial, and specialty services with legendary safety standards.",
      licensing: "AZ ROC #341258 | Licensed, Bonded & Insured",
      phone: "(520) 555-0199",
      email: "dispatch@voltvikings.com",
      address: "Tucson - Phoenix Area, AZ"
    }
  }
};

export const VV_RENDERERS = {
  VVHeader: (props: any) => <VoltVikingsHeader {...props} />,
  VVHero: (props: any) => <VoltVikingsHero {...props} />,
  VVStats: (props: any) => <VoltVikingsStats {...props} />,
  VVServices: (props: any) => <VoltVikingsServices {...props} />,
  VVProcess: (props: any) => <VoltVikingsProcess {...props} />,
  VVTestimonials: (props: any) => <VoltVikingsTestimonials {...props} />,
  VVMap: (props: any) => <VoltVikingsMap {...props} />,
  VVCTA: (props: any) => <VoltVikingsCTA {...props} />,
  VVFooter: (props: any) => <VoltVikingsFooter {...props} />
};
