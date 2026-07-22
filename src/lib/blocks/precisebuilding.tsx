"use client";
import React, { useState } from "react";
import { 
  Menu, X, Phone, Mail, MapPin, Star, Check, ArrowRight, ShieldCheck, 
  Settings, Award, Sparkles, ChevronRight, ChevronLeft 
} from "lucide-react";

// Brand colors
export const PB_BLUE = "#1D6EB5";
export const PB_YELLOW = "#FFCA00";
export const PB_DARK = "#0B1A30";
export const PB_LIGHT = "#F8FAFC";

// Reveal Animation placeholder
export const Reveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

// 1. PBHeader Component
export const PBHeader = ({ 
  businessName = "Precise Building Services", 
  phone = "202.827.2214", 
  ctaText = "Schedule Now",
  onNavigate
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", page: "home" },
    { label: "Services", page: "services" },
    { label: "Commercial", page: "services" },
    { label: "Service Areas", page: "home" },
    { label: "About Us", page: "home" },
    { label: "Careers", page: "careers" },
    { label: "Contact Us", page: "contact" }
  ];

  const handleLinkClick = (page: string) => {
    if (onNavigate) onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 rounded-none">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleLinkClick("home")} 
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div 
            className="w-10 h-10 flex items-center justify-center font-black text-xl text-white rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] border-2 border-black"
            style={{ backgroundColor: PB_BLUE }}
          >
            P
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-tighter text-slate-900 uppercase leading-none">
              {businessName.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase leading-none mt-1">
              {businessName.split(" ").slice(2).join(" ") || "ELECTRICAL DIVISION"}
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-600 uppercase tracking-wider">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.page)}
              className="hover:text-slate-900 transition-colors cursor-pointer border-b-2 border-transparent hover:border-black/10 py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Contact/CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={`tel:${phone}`} 
            className="flex items-center gap-2 text-xs font-black text-slate-900 tracking-wider"
          >
            <div className="w-8 h-8 rounded-none border-2 border-black flex items-center justify-center" style={{ backgroundColor: PB_YELLOW }}>
              <Phone className="w-4 h-4 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">Call day or night</span>
              <span className="text-sm font-black mt-0.5">{phone}</span>
            </div>
          </a>
          <button 
            onClick={() => handleLinkClick("contact")}
            className="px-5 py-3 border-2 border-black font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all rounded-none cursor-pointer"
            style={{ backgroundColor: PB_YELLOW, boxShadow: "3px 3px 0px rgba(0,0,0,1)" }}
          >
            {ctaText}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-slate-700 hover:text-black border-2 border-black rounded-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white p-6 space-y-4">
          <nav className="flex flex-col gap-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page)}
                className="text-left py-2 hover:text-black transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
            <a 
              href={`tel:${phone}`} 
              className="flex items-center gap-3 text-xs font-black text-slate-950"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>{phone} (Call Day or Night)</span>
            </a>
            <button 
              onClick={() => handleLinkClick("contact")}
              className="w-full py-3.5 border-2 border-black font-black text-xs uppercase tracking-widest text-center rounded-none"
              style={{ backgroundColor: PB_YELLOW }}
            >
              {ctaText}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// 2. PBHero Component
export const PBHero = ({
  title = "Residential & Commercial Electrical Repair & Service",
  subtitle = "Licensed Electricians Serving Washington DC and Surrounding Areas",
  ctaText = "Request Service",
  image = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070",
  onNavigate
}: any) => {
  return (
    <section className="w-full min-h-[580px] relative flex items-center justify-start bg-slate-950 text-white py-20 px-6 rounded-none overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <img 
          src={image} 
          alt="Electrician Work Van" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Logo Crosshair Symbol */}
          <div className="flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 border border-white/10 rounded-none">
            <span className="w-2.5 h-2.5 bg-yellow-400 animate-pulse rounded-none" />
            <span className="text-[10px] font-black tracking-widest uppercase text-yellow-400">Licensed • Bonded • Insured</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-black font-display tracking-tight leading-[1.05] mb-6 max-w-3xl">
            {title}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl font-medium mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => onNavigate?.("contact")}
              className="px-8 py-4 border-2 border-black font-black text-xs uppercase tracking-widest text-black hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 rounded-none cursor-pointer"
              style={{ backgroundColor: PB_YELLOW, boxShadow: "4px 4px 0px rgba(0,0,0,1)" }}
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </button>
          </div>
        </div>

        {/* Google Guaranteed badge on Hero bottom right */}
        <div className="lg:col-span-4 flex justify-start lg:justify-end self-end">
          <div className="bg-white text-slate-900 p-5 border-3 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-none flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-none flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="block text-xs font-black text-slate-900 tracking-tight uppercase leading-none">Google Guaranteed</span>
              <span className="text-[10px] text-slate-500 font-extrabold leading-none mt-1 block">5.0 Star Rated Local Electricians</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. PBTrustStrip Component
export const PBTrustStrip = () => {
  const logos = [
    { name: "thirdweb", icon: "💎" },
    { name: "Fluid", icon: "💧" },
    { name: "paraform", icon: "⧉" },
    { name: "dotwork", icon: "⚫" },
    { name: "Heineken", icon: "★" },
    { name: "Electrada", icon: "⚡" },
    { name: "Mercor", icon: "◆" }
  ];

  return (
    <section className="w-full bg-slate-50 border-y border-slate-200/60 py-8 px-6 text-center rounded-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5 font-display block">
          Trusted by 30,000+ local residential & commercial customers
        </span>
        <div className="flex flex-wrap gap-x-12 gap-y-6 items-center justify-center opacity-65">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 text-slate-800 font-black text-sm uppercase tracking-widest select-none">
              <span className="text-lg">{logo.icon}</span>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. PBServicesGrid Component
export const PBServicesGrid = ({ onNavigate }: any) => {
  const cards = [
    {
      id: "trouble",
      num: "01",
      title: "Electrical Troubleshooting",
      desc: "Diagnostics, flickering lights, circuit breaker tripping, wiring errors resolved.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600",
      cta: "Get a Free Estimate"
    },
    {
      id: "safety",
      num: "02",
      title: "Electrical Safety",
      desc: "Panel inspections, GFCI outlet installations, code violation corrections.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600",
      cta: "Schedule Inspection"
    },
    {
      id: "upgrades",
      num: "03",
      title: "Electrical Upgrades",
      desc: "Smart home integrations, 200A panel upgrades, EV charger installations.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600",
      cta: "Learn Upgrades"
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-white text-center rounded-none">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 font-display">YOUR TRUSTED LOCAL ELECTRICIAN</span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-display mb-14 uppercase">
          Electrical Repair & Install Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="flex flex-col bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden shrink-0 border-b-2 border-black bg-slate-100">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-75" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 w-9 h-9 border-2 border-black bg-white flex items-center justify-center font-black text-xs">
                  {card.num}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">{card.desc}</p>
                </div>
                <div>
                  <button 
                    onClick={() => onNavigate?.("contact")}
                    className="w-full py-3.5 border-2 border-black font-black text-[10px] uppercase tracking-widest text-center transition-colors rounded-none hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-1.5"
                    style={{ backgroundColor: PB_YELLOW }}
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                  </button>
                  
                  {card.id === "trouble" && (
                    <div className="mt-3 relative">
                      <select 
                        onChange={(e) => onNavigate?.(e.target.value)}
                        className="w-full bg-slate-900 border-2 border-black text-white text-[10px] font-black uppercase tracking-widest py-3 px-4 rounded-none focus:outline-none appearance-none cursor-pointer text-center"
                      >
                        <option value="">Other Electrical Services</option>
                        <option value="services">Commercial Services</option>
                        <option value="services">Residential Rewiring</option>
                        <option value="services">Emergency Assistance</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white text-[8px]">▼</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. PBBlueBanner Component
export const PBBlueBanner = ({ onNavigate }: any) => {
  return (
    <section 
      className="w-full text-white py-16 px-6 text-center relative overflow-hidden rounded-none border-y-2 border-black"
      style={{ backgroundColor: PB_BLUE }}
    >
      {/* Visual highlights */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-20 blur-[100px] bg-white pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full opacity-25 blur-[100px] bg-white pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight uppercase mb-4">
          Do It <span className="italic text-yellow-300">Right</span> The First Time
        </h2>
        <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-10 max-w-md">
          Emergency dispatch or scheduled appointments available 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <button 
            onClick={() => onNavigate?.("contact")}
            className="w-full sm:w-auto px-8 py-4 border-2 border-black font-black text-xs uppercase tracking-widest text-slate-950 hover:scale-[1.02] transition-transform rounded-none cursor-pointer"
            style={{ backgroundColor: PB_YELLOW, boxShadow: "3px 3px 0px rgba(0,0,0,1)" }}
          >
            Schedule Service Now
          </button>
          <a 
            href="tel:202.827.2214"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white font-black text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-colors rounded-none text-center"
          >
            Call Us: 202.827.2214
          </a>
        </div>
      </div>
    </section>
  );
};

// 6. PBWhyChooseUs Component
export const PBWhyChooseUs = ({ onNavigate, image }: any) => {
  const points = [
    {
      title: "We're local.",
      desc: "Based right in Washington DC. Our service vans are stocked and ready to respond immediately to local calls."
    },
    {
      title: "We're licensed and certified.",
      desc: "All technicians are master electricians or highly certified. We strictly follow NEC safety standards."
    },
    {
      title: "We're dependable.",
      desc: "We guarantee clear pricing and lifetime warranty on our craftsmanship. No surprise fees, ever."
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-left rounded-none border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Area */}
        <div className="lg:col-span-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-3 font-display">PRECISE & CONCISE ELECTRICAL SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-display mb-8 uppercase">
            Why Choose Us
          </h2>

          <div className="space-y-6 mb-10">
            {points.map((pt, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div 
                  className="w-6 h-6 border-2 border-black flex items-center justify-center shrink-0 mt-0.5 rounded-none"
                  style={{ backgroundColor: PB_YELLOW }}
                >
                  <Check className="w-3.5 h-3.5 text-black stroke-[3px]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 mb-1">{pt.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onNavigate?.("contact")}
            className="px-6 py-3.5 border-2 border-black font-black text-[10px] uppercase tracking-widest text-slate-950 hover:bg-slate-50 transition-colors rounded-none cursor-pointer flex items-center gap-2"
            style={{ backgroundColor: PB_YELLOW, boxShadow: "3px 3px 0px rgba(0,0,0,1)" }}
          >
            <span>Request Service</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
          </button>
        </div>

        {/* Image Area */}
        <div className="lg:col-span-6">
          <div className="border-3 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden bg-slate-100 aspect-[4/3] w-full">
            <img 
              src={image || "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
              alt="Custom kitchen with designer pendant lighting"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// 7. PBNoPower Component
export const PBNoPower = ({ onNavigate, image }: any) => {
  return (
    <section className="w-full py-20 px-6 bg-white text-left rounded-none border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Image Area */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="border-3 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden bg-slate-100 aspect-[4/3] w-full">
            <img 
              src={image || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
              alt="Electrician working on electrical circuit box panel"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-3 font-display">ANY SIZE ELECTRICAL JOB — BIG OR SMALL</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-display mb-6 uppercase">
            No Power? No Problem.
          </h2>
          <p className="text-slate-500 font-semibold leading-relaxed text-xs mb-8">
            Let's face it. We need power for everything these days. When you're offline, you're disconnected from everyone and everything. Precise Building Services understands this is a high-level emergency worthy of urgent, rapid response. 
            <br /><br />
            If you've lost power, we should be your first call. We'll troubleshoot the breaker board, identify lines, and get you safely plugged back in fast.
          </p>

          <button 
            onClick={() => onNavigate?.("contact")}
            className="px-6 py-3.5 border-2 border-black font-black text-[10px] uppercase tracking-widest text-slate-950 hover:bg-slate-50 transition-colors rounded-none cursor-pointer flex items-center gap-2"
            style={{ backgroundColor: PB_YELLOW, boxShadow: "3px 3px 0px rgba(0,0,0,1)" }}
          >
            <span>Request Service</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
          </button>
        </div>

      </div>
    </section>
  );
};

// 8. PBGoToElectrician Component
export const PBGoToElectrician = ({ onNavigate, image }: any) => {
  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-left rounded-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Area */}
        <div className="lg:col-span-6">
          <div className="flex gap-3 mb-4 text-[10px] font-black text-indigo-600 uppercase font-display">
            <span>Precise</span>
            <span>/</span>
            <span>Residential</span>
            <span>/</span>
            <span>Commercial</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-display mb-6 uppercase leading-tight">
            Precise Building Services — Your Go-To Electrician
          </h2>
          <p className="text-slate-500 font-semibold leading-relaxed text-xs mb-8">
            When you're looking for a Washington DC electrician who is trustworthy and knowledgeable, you can't find a better squad than Precise Building Services. We pride ourselves on being the hometown crew, providing excellent service to our neighbors and local businesses.
            <br /><br />
            We're here to handle everything: from panel code upgrades to smart home installations and wiring inspections. Our emergency team is available 24/7.
          </p>

          <a 
            href="tel:202.827.2214"
            className="inline-block px-6 py-3.5 border-2 border-black bg-white text-slate-950 font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-colors rounded-none text-center"
            style={{ boxShadow: "3px 3px 0px rgba(0,0,0,1)" }}
          >
            Call Us: 202.827.2214
          </a>
        </div>

        {/* Image Area */}
        <div className="lg:col-span-6">
          <div className="border-3 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden bg-slate-100 aspect-[4/3] w-full">
            <img 
              src={image || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
              alt="Modern home exterior illuminated at night"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// 9. PBReviews Component
export const PBReviews = () => {
  const reviews = [
    {
      id: 1,
      author: "Santino Min",
      text: "Luis and his team were very professional and made the installation seamless. I appreciate their honesty and timing. I will definitely work with them again. THANK YOU for such amazing work!",
      rating: 5
    },
    {
      id: 2,
      author: "Richard",
      text: "Precise Building Services installed our ChargePoint station perfectly. When the contractor accidentally pulled out, they came back and fixed it for free. Their electricians were skilled and professional.",
      rating: 5
    },
    {
      id: 3,
      author: "Adriene Wolmer",
      text: "Luis and Jose were excellent! Super professional and courteous. From scheduling with Tamara, getting our estimate, their arrival and installation, all was perfect! These guys are great, don't hesitate to schedule.",
      rating: 5
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      className="w-full py-20 px-6 text-center text-white rounded-none relative overflow-hidden"
      style={{ backgroundColor: PB_BLUE }}
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-yellow-300 block mb-3 font-display">OUR CLIENTS BRIGHTEN OUR DAY!</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight font-display mb-12 uppercase">
          Thank You Washington DC Area
        </h2>

        {/* Carousel Slide */}
        <div className="w-full min-h-[220px] flex items-center justify-center mb-8">
          <div className="bg-white text-slate-900 p-8 border-3 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-none text-left w-full max-w-2xl relative">
            <div className="flex justify-between items-center mb-4">
              <span className="font-extrabold text-sm">{reviews[activeIdx].author}</span>
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(reviews[activeIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4 italic">
              "{reviews[activeIdx].text}"
            </p>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <span>Google verified reviewer</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-600">Verified Client</span>
            </div>
            {/* Google G Logo Badge */}
            <div className="absolute right-6 bottom-6 w-5 h-5 bg-slate-100 rounded-none flex items-center justify-center font-bold text-[10px] text-blue-500 border border-slate-200">
              G
            </div>
          </div>
        </div>

        {/* Nav Controls */}
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 border-2 border-white hover:bg-white/10 flex items-center justify-center text-white rounded-none transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 border-2 border-white hover:bg-white/10 flex items-center justify-center text-white rounded-none transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// 10. PBFooter Component
export const PBFooter = ({ onNavigate }: any) => {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 py-16 px-6 text-left rounded-none border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
        
        {/* Column 1: Links */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6 font-display">HELPFUL LINKS</h4>
          <div className="flex flex-col gap-3 text-xs font-bold text-slate-400">
            <button onClick={() => onNavigate?.("home")} className="text-left hover:text-white transition-colors cursor-pointer">About Us</button>
            <button onClick={() => onNavigate?.("services")} className="text-left hover:text-white transition-colors cursor-pointer">Services</button>
            <button onClick={() => onNavigate?.("services")} className="text-left hover:text-white transition-colors cursor-pointer">Our Services</button>
            <button onClick={() => onNavigate?.("services")} className="text-left hover:text-white transition-colors cursor-pointer">Upgrades</button>
            <button onClick={() => onNavigate?.("careers")} className="text-left hover:text-white transition-colors cursor-pointer">Careers</button>
            <button onClick={() => onNavigate?.("contact")} className="text-left hover:text-white transition-colors cursor-pointer">Contact Us</button>
          </div>
        </div>

        {/* Column 2: Service Area */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6 font-display">SERVICE AREA</h4>
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            Washington, DC • Silver Spring, MD • Takoma Park, MD • Bethesda, MD • Rockville, MD • Hyattsville, MD and surrounding areas.
          </p>
        </div>

        {/* Column 3: Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6 font-display">CONTACT US</h4>
          <div className="space-y-4 text-xs font-semibold text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span>7558 Baltimore Ave Suite 220<br />College Park, MD 20740</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-slate-500 shrink-0" />
              <a href="tel:202.827.2214" className="hover:text-white transition-colors">202.827.2214</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <a href="mailto:services@precisebuildingservices.com" className="hover:text-white transition-colors">services@precisebuildingservices.com</a>
            </div>
          </div>
        </div>

        {/* Column 4: Certifications */}
        <div className="lg:col-span-3 flex flex-col items-start justify-start">
          <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6 font-display">CERTIFICATION</h4>
          <div className="bg-slate-900/60 p-4 border border-white/10 rounded-none flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-950 flex items-center justify-center font-bold text-sm text-red-500 border border-white/10 shrink-0">
              T
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase tracking-tight text-white leading-none">Tesla Certified</span>
              <span className="text-[9px] text-slate-400 font-extrabold block leading-none mt-1">Wall Connector Installation</span>
            </div>
          </div>
        </div>

      </div>

      {/* Under Footer */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-slate-900 border border-white/10 flex items-center justify-center font-black text-xs text-white">P</div>
          <span>PRECISE BUILDING SERVICES &copy; 2026</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// PRECISE BLOCK RENDERERS
export const PB_RENDERERS: Record<string, React.FC<any>> = {
  PBHeader: (props: any) => <PBHeader {...props} />,
  PBHero: (props: any) => <PBHero {...props} />,
  PBTrustStrip: (props: any) => <PBTrustStrip {...props} />,
  PBServicesGrid: (props: any) => <PBServicesGrid {...props} />,
  PBBlueBanner: (props: any) => <PBBlueBanner {...props} />,
  PBWhyChooseUs: (props: any) => <PBWhyChooseUs {...props} />,
  PBNoPower: (props: any) => <PBNoPower {...props} />,
  PBGoToElectrician: (props: any) => <PBGoToElectrician {...props} />,
  PBReviews: (props: any) => <PBReviews {...props} />,
  PBFooter: (props: any) => <PBFooter {...props} />
};

// PRECISE BLOCK SCHEMAS FOR PAGE BUILDER
export const PB_SCHEMAS: Record<string, any> = {
  PBHeader: {
    description: "Electrician top menu navigation bar.",
    fields: [
      { name: "businessName", label: "Business Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "text" },
      { name: "ctaText", label: "Button Label", type: "text" }
    ],
    defaultProps: {
      businessName: "Precise Building Services",
      phone: "202.827.2214",
      ctaText: "Schedule Now"
    }
  },
  PBHero: {
    description: "Stark service-van backdropped hero block.",
    fields: [
      { name: "title", label: "Headline Title", type: "text" },
      { name: "subtitle", label: "Subheading description", type: "text" },
      { name: "ctaText", label: "CTA Button Label", type: "text" },
      { name: "image", label: "Background image", type: "image" }
    ],
    defaultProps: {
      title: "Residential & Commercial Electrical Repair & Service",
      subtitle: "Licensed Electricians Serving Washington DC and Surrounding Areas",
      ctaText: "Request Service",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070"
    }
  },
  PBTrustStrip: {
    description: "Trust badge list for client logos.",
    fields: [],
    defaultProps: {}
  },
  PBServicesGrid: {
    description: "Three-card grid showing local electrical services.",
    fields: [],
    defaultProps: {}
  },
  PBBlueBanner: {
    description: "Solid blue call-to-action banner.",
    fields: [],
    defaultProps: {}
  },
  PBWhyChooseUs: {
    description: "Split feature list detailing local benefits.",
    fields: [{ name: 'image', label: 'Photo', type: 'image' }],
    defaultProps: { image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  },
  PBNoPower: {
    description: "Split copy and image detailing emergency support.",
    fields: [{ name: 'image', label: 'Photo', type: 'image' }],
    defaultProps: { image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  },
  PBGoToElectrician: {
    description: "Hometown builder copy split with lit house exterior.",
    fields: [{ name: 'image', label: 'Photo', type: 'image' }],
    defaultProps: { image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  },
  PBReviews: {
    description: "Google rating reviews carousel block.",
    fields: [],
    defaultProps: {}
  },
  PBFooter: {
    description: "Local business contact, links, and certification footer.",
    fields: [],
    defaultProps: {}
  }
};
