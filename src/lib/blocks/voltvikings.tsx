import React from 'react';
import { 
  Menu, X, Zap, Shield, Droplets, Users, Calendar, Leaf, Check,
  Home, Building2, Search, Star, Phone, Mail, MapPin, Clock,
  ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Sparkles, AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import EditableText from '@/components/EditableText';

/** Normalize a nav/footer link that may be a legacy string or a {label, href} object.
 *  Keeps old client data (string arrays) rendering while new data supports editable links. */
function navItem(l: any): { label: string; href: string } {
  if (l && typeof l === 'object') return { label: l.label ?? '', href: l.href ?? '#' };
  return { label: typeof l === 'string' ? l : '', href: '#' };
}

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
    <header className="bg-[#12002B] text-white py-4 px-6 @md:px-12 flex items-center justify-between border-b-[4px] border-[#00A896] relative z-50">
      <div className="flex items-center gap-2">
         <Zap className="w-8 h-8 text-[#FF6B00] animate-pulse" />
         <div>
           <div className="font-black text-xl leading-none tracking-tight flex items-center gap-1 text-[#00F2FE]">
             {props.businessName || "VOLT VIKINGS"}
           </div>
           <div className="text-[9px] tracking-[0.25em] text-[#FF6B00] font-bold mt-0.5">{props.tagline || "LEGENDARY ELECTRICAL CONTRACTORS"}</div>
         </div>
      </div>
      
      <nav className="hidden @lg:flex items-center gap-8 text-xs font-bold tracking-widest">
         {(props.navLinks || []).map((link: any, i: number) => {
           const it = navItem(link);
           return (
             <Link key={i} href={it.href} className={`${i === 0 ? 'text-[#00F2FE] border-b-2 border-[#00F2FE] pb-1' : 'hover:text-[#00F2FE] transition-colors'} uppercase`}>{it.label}</Link>
           );
         })}
      </nav>

      <div className="hidden @lg:flex items-center gap-6">
         <a href={`tel:${props.phone || '(520) 555-0199'}`} className="flex items-center gap-2 text-sm font-black hover:text-[#00F2FE] transition-colors text-white">
           <Phone className="w-4 h-4 text-[#FF6B00]" /> {props.phone || "(520) 555-0199"}
         </a>
         <a href={props.ctaLink || '#'} className="inline-block bg-[#FF6B00] hover:bg-[#ff8533] text-white font-black py-2.5 px-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all text-xs uppercase tracking-wider">
           {props.ctaText || "BOOK ONLINE"}
         </a>
      </div>

      <button className="@lg:hidden text-white">
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
    <section className="relative pt-24 pb-44 px-6 @md:px-12 bg-[#12002B] overflow-hidden border-b-[4px] border-black">
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col @lg:flex-row items-center justify-between gap-12">
         <div className="max-w-3xl text-left">
           <div className="inline-block bg-[#3C0E70] text-[#00F2FE] border-2 border-[#00A896] font-extrabold text-[10px] tracking-widest uppercase mb-6 px-4.5 py-1.5 rounded-full shadow-[3px_3px_0px_#000]">
             <EditableText 
               value={badge} 
               onChange={(val) => onPropChange?.('badge', val)} 
               isEditable={!!isEditable} 
               placeholder="Badge Text" 
             />
           </div>
           
           <h1 className="text-4xl @md:text-6xl @lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight uppercase break-words w-full">
             <EditableText 
               value={title} 
               onChange={(val) => onPropChange?.('title', val)} 
               isEditable={!!isEditable} 
               placeholder="Hero Title" 
               multiline={true}
             />
           </h1>
           
           <p className="text-base @md:text-lg text-white/80 mb-10 max-w-xl font-medium leading-relaxed break-words">
             <EditableText 
               value={subtitle} 
               onChange={(val) => onPropChange?.('subtitle', val)} 
               isEditable={!!isEditable} 
               placeholder="Hero Subtitle" 
               multiline={true}
             />
           </p>

           <div className="flex flex-col @sm:flex-row gap-4">
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
    <section className="bg-black py-16 px-6 @md:px-12 relative z-20 -mt-16 border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4 gap-8">
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
    <section className="py-24 px-6 @md:px-12 bg-[#1E0044] text-white border-b-[4px] border-black">
       <div className="max-w-7xl mx-auto flex flex-col items-center">
         <span className="text-[#FF6B00] font-black text-xs tracking-[0.2em] uppercase mb-4 text-center">WHAT WE EXCEL AT</span>
         <h2 className="text-4xl @md:text-5xl font-black text-center mb-4 uppercase tracking-tighter w-full">
           <EditableText 
             value={title} 
             onChange={(val) => onPropChange?.('title', val)} 
             isEditable={!!isEditable} 
             placeholder="Section Title" 
           />
         </h2>
         <p className="text-sm @md:text-base font-bold text-white/60 text-center mb-16 max-w-xl uppercase tracking-wider">
           <EditableText 
             value={subtitle} 
             onChange={(val) => onPropChange?.('subtitle', val)} 
             isEditable={!!isEditable} 
             placeholder="Section Subtitle" 
           />
         </p>

         <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4 gap-8 w-full">
           {(services || []).map((service: any, i: number) => {
             const IconComponent = ICON_MAP[service.icon] || Zap;
             return (
               <div 
                 key={i} 
                 className="bg-[#12002B] rounded-2xl overflow-hidden flex flex-col border-[4px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[6px_6px_0px_#00A896] hover:-translate-y-1 transition-all duration-300 group"
               >
                 <div className="h-44 relative overflow-hidden bg-black/40 border-b-2 border-black">
                   <img 
                     src={service.img || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"} 
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
                   <Link href={service.link || "#"} className="flex items-center gap-1.5 text-[#00F2FE] hover:text-white font-extrabold text-xs tracking-wider uppercase group/link w-fit transition-colors">
                     {service.linkText || "LEARN MORE"} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" strokeWidth={3} />
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
    <section className="py-24 px-6 @md:px-12 bg-black text-white border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col @lg:flex-row gap-16 items-center">
        
        <div className="@lg:w-1/3 flex flex-col items-center @lg:items-start text-center @lg:text-left shrink-0">
          <span className="text-[#00F2FE] font-black text-xs tracking-[0.2em] uppercase mb-4">OUR VIKING JOURNEY</span>
          <h2 className="text-4xl @md:text-5xl font-black leading-[1.05] mb-8 uppercase tracking-tighter max-w-sm">
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

        <div className="@lg:w-2/3 flex flex-col @md:flex-row justify-between w-full relative gap-8">
          {(steps || []).map((step: any, i: number) => {
            const IconComponent = ICON_MAP[step.icon] || Search;
            return (
              <div 
                key={i} 
                className="flex flex-col items-center text-center relative z-10 w-full @md:w-1/3 bg-[#12002B] border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000] hover:border-[#FF6B00] transition-colors"
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
    <section className="py-24 px-6 @md:px-12 relative bg-[#1E0044] text-white border-b-[4px] border-black">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-[#00F2FE] font-black text-xs tracking-[0.2em] uppercase mb-4 text-center">LEGENDARY PROOF</span>
        <h2 className="text-4xl @md:text-5xl font-black text-center mb-16 uppercase tracking-tighter w-full">
          <EditableText 
            value={title} 
            onChange={(val) => onPropChange?.('title', val)} 
            isEditable={!!isEditable} 
            placeholder="Testimonials Title" 
          />
        </h2>

        <div className="grid grid-cols-1 @md:grid-cols-2 gap-8 w-full">
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
    <section className="py-20 px-6 @md:px-12 bg-black text-white border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col @lg:flex-row gap-12 items-center">
        
        <div className="w-full @lg:w-1/2 space-y-6 text-left">
          <span className="text-[#FF6B00] font-black text-xs tracking-[0.2em] uppercase">OUR SERVICE CORRIDOR</span>
          <h2 className="text-4xl @md:text-5xl font-black uppercase tracking-tighter w-full">
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

        <div className="w-full @lg:w-1/2 border-[4px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_#00A896] bg-gray-900 aspect-video">
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
    <section className="px-6 @md:px-12 py-16 bg-[#12002B]">
       <div className="max-w-6xl mx-auto bg-[#3C0E70] rounded-3xl overflow-hidden relative p-10 @md:p-16 flex flex-col @lg:flex-row items-center justify-between gap-12 border-[4px] border-black shadow-[8px_8px_0px_#000]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070')] bg-cover bg-center"></div>
          
          <div className="relative z-10 max-w-2xl text-center @lg:text-left space-y-4">
            <h2 className="text-4xl @md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
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
    <footer className="bg-black text-white/70 pt-20 pb-8 px-6 @md:px-12 border-t-[4px] border-[#00A896]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4 gap-12 mb-16">
        
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
          <h4 className="text-[#00F2FE] font-black mb-6 tracking-wider uppercase text-xs">{props.navHeading || "QUICK NAV"}</h4>
          <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-wider">
            {(props.footerNav || [
              { label: "Home", href: "#" },
              { label: "Services", href: "#" },
              { label: "Viking Journey", href: "#" },
              { label: "Testimonials", href: "#" },
              { label: "Map Corridor", href: "#" },
            ]).map((l: any, i: number) => {
              const it = navItem(l);
              return <li key={i}><Link href={it.href} className="hover:text-[#FF6B00] transition-colors">{it.label}</Link></li>;
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-[#00F2FE] font-black mb-6 tracking-wider uppercase text-xs">{props.servicesHeading || "SERVICES"}</h4>
          <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-white/50">
            {(props.footerServices || [
              "Residential Electrician",
              "Commercial Contracting",
              "Panel Upgrades (200A)",
              "EV Level-2 Fast Chargers",
              "VoltGuard™ Home Safety Audits",
            ]).map((s: any, i: number) => <li key={i}>{typeof s === 'string' ? s : s?.label}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-[#00F2FE] font-black mb-6 tracking-wider uppercase text-xs">{props.contactHeading || "CORRIDOR CONTACT"}</h4>
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

      <div className="max-w-7xl mx-auto flex flex-col @md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/40">
        <p>© {new Date().getFullYear()} {props.businessName || "Volt Vikings"}. All rights reserved.</p>
        <div className="flex gap-6">
          {(props.legalLinks || [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ]).map((l: any, i: number) => {
            const it = navItem(l);
            return <Link key={i} href={it.href} className="hover:text-white transition-colors">{it.label}</Link>;
          })}
        </div>
      </div>
    </footer>
  );
}

export { VV_SCHEMAS } from './voltvikings.schemas';

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
