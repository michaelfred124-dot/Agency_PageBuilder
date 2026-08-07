"use client";
import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, Home, Wrench, ClipboardCheck, CheckCircle2, ShieldCheck, 
  Award, Scale, Users, MapPin, Phone, Mail, Clock, ArrowRight, 
  ChevronRight, ChevronLeft, Star, ExternalLink, Filter, Send, X,
  Maximize2, Eye, Layers, Compass, Check, Hammer
} from "lucide-react";

// Apex Construction Brand Tokens
export const APEX_NAVY = "#0B1528";
export const APEX_NAVY_LIGHT = "#152238";
export const APEX_NAVY_DARK = "#060D1A";
export const APEX_GOLD = "#E58B00";
export const APEX_GOLD_HOVER = "#D97706";
export const APEX_GOLD_LIGHT = "#FEF3C7";
export const APEX_GRAY = "#64748B";
export const APEX_LIGHT_BG = "#F8FAFC";

// Backward compatibility tokens
export const PB_BLUE = APEX_NAVY;
export const PB_YELLOW = APEX_GOLD;
export const PB_DARK = APEX_NAVY_DARK;
export const PB_LIGHT = APEX_LIGHT_BG;

// Stylized 'A' Logo representing building roof & steel structure
export const ApexLogo: React.FC<{ size?: "sm" | "md" | "lg"; light?: boolean; onClick?: () => void }> = ({ 
  size = "md", 
  light = false,
  onClick 
}) => {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  return (
    <div 
      onClick={onClick} 
      className={`inline-flex items-center gap-3 select-none ${onClick ? "cursor-pointer group" : ""}`}
    >
      <div 
        className="relative flex items-center justify-center rounded transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-md"
        >
          {/* Outer triangle 'A' frame */}
          <polygon 
            points="50,10 90,88 10,88" 
            fill={light ? "#FFFFFF" : APEX_NAVY} 
            stroke={APEX_GOLD} 
            strokeWidth="5" 
          />
          {/* Inner roof truss & skyscraper lines */}
          <line x1="50" y1="18" x2="50" y2="88" stroke={APEX_GOLD} strokeWidth="4" />
          <line x1="32" y1="52" x2="68" y2="52" stroke={APEX_GOLD} strokeWidth="4" />
          <line x1="24" y1="68" x2="76" y2="68" stroke={APEX_GOLD} strokeWidth="4" />
          <line x1="16" y1="84" x2="84" y2="84" stroke={APEX_GOLD} strokeWidth="3" />
          {/* Glowing peak tip */}
          <polygon points="50,10 58,28 42,28" fill={APEX_GOLD} />
        </svg>
      </div>
      <div className="flex flex-col">
        <span 
          className={`font-black tracking-wider uppercase leading-none font-display ${
            size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base"
          } ${light ? "text-white" : "text-[#0B1528]"}`}
        >
          APEX
        </span>
        <span 
          className={`font-bold tracking-[0.25em] text-[9px] uppercase leading-tight ${
            light ? "text-[#E58B00]" : "text-[#E58B00]"
          }`}
        >
          CONSTRUCTION
        </span>
      </div>
    </div>
  );
};

// Common Page Header
export const ApexHeader: React.FC<{ 
  currentPage?: string; 
  onNavigate?: (page: string) => void;
  onOpenQuote?: () => void;
  compact?: boolean;
}> = ({ 
  currentPage = "home", 
  onNavigate, 
  onOpenQuote,
  compact = false 
}) => {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "services", label: "SERVICES" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <header className={`w-full bg-white border-b border-slate-200 sticky top-0 z-30 transition-all ${compact ? "py-2 px-4" : "py-3.5 px-6"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <ApexLogo size={compact ? "sm" : "md"} onClick={() => onNavigate?.("home")} />

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-all cursor-pointer rounded ${
                  isActive 
                    ? "text-[#E58B00] bg-amber-50/80 font-black border-b-2 border-[#E58B00]" 
                    : "text-slate-700 hover:text-[#E58B00] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenQuote ? onOpenQuote() : onNavigate?.("contact")}
            className="px-4 py-2 bg-[#E58B00] hover:bg-[#D97706] text-white font-extrabold text-xs tracking-wider uppercase rounded shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};

// Common Page Footer
export const ApexFooter: React.FC<{ 
  onNavigate?: (page: string) => void;
  compact?: boolean;
}> = ({ 
  onNavigate,
  compact = false 
}) => {
  return (
    <footer className="w-full bg-[#0B1528] text-white border-t border-slate-800">
      <div className={`max-w-7xl mx-auto ${compact ? "p-6" : "px-6 py-12"} grid grid-cols-1 md:grid-cols-4 gap-8`}>
        {/* Col 1: Brand & Bio */}
        <div className="space-y-4">
          <ApexLogo light size="md" onClick={() => onNavigate?.("home")} />
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            Commercial & residential construction leaders delivering master engineering, turnkey management, and superior architectural craftsmanship.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {["linkedin", "twitter", "facebook", "instagram"].map((social) => (
              <div 
                key={social}
                className="w-7 h-7 rounded bg-slate-800 hover:bg-[#E58B00] text-slate-300 hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
              >
                {social[0].toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#E58B00] mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {["Home", "Services", "Portfolio", "About Us", "Contact"].map((label) => {
              const id = label.toLowerCase().replace(" us", "");
              return (
                <li key={label}>
                  <button 
                    onClick={() => onNavigate?.(id)} 
                    className="hover:text-[#E58B00] transition-colors cursor-pointer text-left"
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#E58B00] mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>Commercial Construction</li>
            <li>Residential Custom Builds</li>
            <li>Renovations & Additions</li>
            <li>Civil Project Management</li>
            <li>Structural Engineering</li>
          </ul>
        </div>

        {/* Col 4: Contact Summary */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#E58B00] mb-4">
            Contact Apex
          </h4>
          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#E58B00] shrink-0 mt-0.5" />
              <span>100 Apex Way, Suite 500<br />Metro City, NY 10001</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E58B00] shrink-0" />
              <span>(555) 321-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#E58B00] shrink-0" />
              <span>contact@apexconstruction.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800/80 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-medium">
          <span>&copy; {new Date().getFullYear()} APEX CONSTRUCTION CORP. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Licensing & Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// PAGE 1: HOME PAGE (Label: 1/5)
// ==========================================
export const ApexHomePage: React.FC<{ 
  onNavigate?: (page: string) => void;
  onOpenQuote?: () => void;
}> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[460px] md:min-h-[520px] bg-[#0B1528] flex items-center overflow-hidden">
        {/* Background Image with Deep Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18015f6?q=80&w=2070&auto=format&fit=crop"
            alt="Modern multi-story office building construction"
            fill
            className="object-cover opacity-35 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/95 via-[#0B1528]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-left">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-[#E58B00]/40 rounded text-[#E58B00] text-[11px] font-black tracking-widest uppercase">
              <span>MASTER BUILDERS & GENERAL CONTRACTORS</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase font-display leading-[1.05]">
              BUILDING YOUR <span className="text-[#E58B00]">FUTURE.</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl font-normal">
              Apex Construction delivers master-level commercial, residential, and industrial builds. With over two decades of structural excellence, our seasoned engineers and site managers ensure zero-defect project delivery on time and within budget.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote ? onOpenQuote() : onNavigate?.("contact")}
                className="px-6 py-3.5 bg-[#E58B00] hover:bg-[#D97706] text-white font-extrabold text-xs uppercase tracking-widest rounded shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate?.("portfolio")}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer"
              >
                VIEW PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 1: Our Expertise */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00] block mb-2">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1528] tracking-tight uppercase font-display mb-3">
            Our Expertise
          </h2>
          <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto mb-12">
            Expert construction services for commercial and residential developments executed with engineering precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Commercial */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 rounded-lg bg-amber-50 border border-amber-200 text-[#E58B00] flex items-center justify-center mb-6 group-hover:bg-[#E58B00] group-hover:text-white transition-colors">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#0B1528] uppercase font-display mb-2">
                Commercial
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Full-scale commercial project management and construction, from high-rise office towers to corporate retail centers.
              </p>
              <button 
                onClick={() => onNavigate?.("services")}
                className="text-xs font-bold text-[#E58B00] flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Residential */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 rounded-lg bg-amber-50 border border-amber-200 text-[#E58B00] flex items-center justify-center mb-6 group-hover:bg-[#E58B00] group-hover:text-white transition-colors">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#0B1528] uppercase font-display mb-2">
                Residential
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Custom home builds, structural additions, and multi-family developments tailored to luxury living and durability.
              </p>
              <button 
                onClick={() => onNavigate?.("services")}
                className="text-xs font-bold text-[#E58B00] flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Remodeling */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 rounded-lg bg-amber-50 border border-amber-200 text-[#E58B00] flex items-center justify-center mb-6 group-hover:bg-[#E58B00] group-hover:text-white transition-colors">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#0B1528] uppercase font-display mb-2">
                Remodeling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                High-end residential and commercial renovations, structural reconfigurations, and architectural modernizations.
              </p>
              <button 
                onClick={() => onNavigate?.("services")}
                className="text-xs font-bold text-[#E58B00] flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Featured Projects */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00] block mb-2">
                OUR WORK
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1528] tracking-tight uppercase font-display">
                Featured Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate?.("portfolio")}
              className="text-xs font-bold text-[#E58B00] hover:text-[#D97706] flex items-center gap-1 cursor-pointer"
            >
              <span>Explore full portfolio ({12}+ projects)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid of 4 project thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "City Center Complex",
                category: "Commercial High-Rise",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Residential Build",
                category: "Custom Estate",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Office Renovation",
                category: "Interior Modernization",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Hospital Expansion",
                category: "Institutional",
                img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
              },
            ].map((p, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigate?.("portfolio")}
                className="group relative h-64 rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/90 via-[#0B1528]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#E58B00] font-black block mb-1">
                    {p.category}
                  </span>
                  <h4 className="text-base font-black font-display uppercase tracking-tight">
                    {p.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section 3: Client Testimonials */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00] block mb-2">
            TRUST & REPUTATION
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1528] tracking-tight uppercase font-display mb-12">
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                quote: "Apex Construction transformed our corporate campus vision into reality with unmatched precision, speed, and strict safety compliance. They handled complex engineering with ease.",
                name: "Sammy J. Burns",
                title: "CEO, Burns Holdings Corp.",
              },
              {
                quote: "Their residential design-build team exceeded every expectation on our multi-acre custom estate. Master builders who treat every detail with genuine dedication.",
                name: "Elena Rostova",
                title: "Principal Developer, Apex Estates",
              },
              {
                quote: "Delivered on-time, on-budget, and zero compromises on architectural integrity. Apex has been our exclusive commercial general contractor for 4 consecutive developments.",
                name: "David K. Vance",
                title: "Director of Facilities, Metro Plaza",
              },
            ].map((t, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#E58B00] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-black text-[#0B1528] uppercase block">
                    {t.name}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium block">
                    {t.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// PAGE 2: SERVICES PAGE (Label: 2/5)
// ==========================================
export const ApexServicesPage: React.FC<{ 
  onNavigate?: (page: string) => void;
  onOpenQuote?: () => void;
}> = ({ onNavigate, onOpenQuote }) => {
  const services = [
    {
      title: "COMMERCIAL CONSTRUCTION",
      icon: Building2,
      desc: "Comprehensive general contracting, civil engineering, and construction management for corporate headquarters, high-rise developments, and retail facilities.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      bullets: [
        "High-rise development",
        "Interior buildouts",
        "Office park construction",
        "Sustainable design",
        "Construction management"
      ]
    },
    {
      title: "RESIDENTIAL BUILD",
      icon: Home,
      desc: "Custom architectural homes, structural additions, and multi-family residential communities built with heirloom-grade craftsmanship and modern energy efficiency.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      bullets: [
        "Custom homes",
        "Multi-family projects",
        "Home design-build",
        "Ground-up construction",
        "Structural work"
      ]
    },
    {
      title: "RENOVATIONS & ADDITIONS",
      icon: Wrench,
      desc: "Transformative structural renovations, luxury kitchen and bath reconfigurations, exterior extensions, and complete tenant improvement buildouts.",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
      bullets: [
        "Home remodeling",
        "Additions & extensions",
        "Kitchen & bath updates",
        "Structural modifications",
        "Interior design-build"
      ]
    },
    {
      title: "PROJECT MANAGEMENT",
      icon: ClipboardCheck,
      desc: "End-to-end owner representation, pre-construction feasibility analysis, logistical site planning, contractor supervision, and rigorous quality assurance.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      bullets: [
        "Concept to Completion",
        "Site planning & logistics",
        "Budget management",
        "Contractor coordination",
        "Quality assurance"
      ]
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Header Banner */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00]">
            WHAT WE DO
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0B1528] tracking-tight uppercase font-display">
            OUR SERVICES.
          </h1>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Apex Construction provides end-to-end commercial and residential building services, executing every phase from architectural planning through final handover.
          </p>
        </div>
      </section>

      {/* Service Grid - 4 distinct panels */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded bg-[#0B1528] text-[#E58B00] flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-[#0B1528] uppercase font-display mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {s.desc}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2">
                      {s.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#E58B00] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenQuote ? onOpenQuote() : onNavigate?.("contact")}
                      className="text-xs font-bold text-[#E58B00] hover:text-[#D97706] flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                    >
                      <span>Request Quote for {s.title.split(" ")[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// ==========================================
// PAGE 3: PORTFOLIO PAGE (Label: 3/5)
// ==========================================
export const ApexPortfolioPage: React.FC<{ 
  onNavigate?: (page: string) => void;
  onOpenQuote?: () => void;
}> = ({ onNavigate, onOpenQuote }) => {
  const [filter, setFilter] = useState<"All" | "Commercial" | "Residential" | "Institutional">("All");

  const projects = [
    { name: "City Center Complex", category: "Commercial", desc: "45-story commercial skyscraper featuring sustainable glass facade and LEED Gold certification.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
    { name: "Luxury Villa", category: "Residential", desc: "Custom 8,500 sq ft contemporary residential estate with infinity pool and seismic framing.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
    { name: "Hospital Expansion", category: "Institutional", desc: "Critical care medical wing addition with strict bio-safety and specialized MEP infrastructure.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
    { name: "Office Renovation", category: "Commercial", desc: "Turnkey open-concept tech office modernization covering three full corporate floor plates.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
    { name: "Apex Tower", category: "Commercial", desc: "Flagship metropolitan mixed-use corporate tower with subterranean multi-tier parking.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" },
    { name: "Residential Community", category: "Residential", desc: "Master-planned residential development featuring 36 bespoke multi-family architectural homes.", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop" },
    { name: "Retail Plaza", category: "Commercial", desc: "High-traffic modern shopping promenade with structural steel framing and dynamic glass canopies.", img: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=800&auto=format&fit=crop" },
    { name: "Corporate Campus", category: "Commercial", desc: "Multi-building commercial tech campus surrounded by native landscaped water features.", img: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop" },
    { name: "High-End Remodel", category: "Residential", desc: "Complete structural interior renovation of a historic brownstone with bespoke millwork.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
    { name: "New Build Home", category: "Residential", desc: "Ground-up energy-positive family residence utilizing insulated concrete formwork.", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop" },
    { name: "Renovated Space", category: "Commercial", desc: "Industrial warehouse conversion into modern creative studio and collaborative spaces.", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" },
    { name: "Multi-Use Complex", category: "Institutional", desc: "University innovation center housing laboratories, lecture amphitheaters, and incubators.", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop" },
  ];

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Header Banner */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00]">
            SHOWCASE OF EXCELLENCE
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0B1528] tracking-tight uppercase font-display">
            OUR PORTFOLIO.
          </h1>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore 12 landmark commercial, residential, and institutional projects built to the highest engineering standards across the region.
          </p>

          {/* Interactive Filters */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {(["All", "Commercial", "Residential", "Institutional"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#0B1528] text-white shadow-sm border border-[#0B1528]"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid: 12 detailed thumbnails */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0B1528]/90 text-[#E58B00] text-[10px] font-black uppercase tracking-wider rounded">
                  {p.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#0B1528] uppercase font-display mb-2">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E58B00]">
                  <span>Apex Verified Build</span>
                  <span className="text-slate-400 font-normal">Completed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ==========================================
// PAGE 4: ABOUT US PAGE (Label: 4/5)
// ==========================================
export const ApexAboutPage: React.FC<{ 
  onNavigate?: (page: string) => void;
  onOpenQuote?: () => void;
}> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Header Banner */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00]">
            WHO WE ARE
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0B1528] tracking-tight uppercase font-display">
            ABOUT APEX CONSTRUCTION.
          </h1>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Pioneering the standards of modern construction with passion, integrity, and uncompromising architectural precision since 2016.
          </p>
        </div>
      </section>

      {/* Header Photo: Full-width construction crew */}
      <section className="w-full relative h-[380px] md:h-[460px] overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Diverse team of construction professionals posing in safety gear"
          fill
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 max-w-7xl mx-auto text-white">
          <span className="px-3 py-1 bg-[#E58B00] text-white text-[10px] font-black uppercase tracking-widest rounded mb-2 inline-block">
            OUR ON-SITE LEADERSHIP
          </span>
          <h3 className="text-2xl md:text-3xl font-black uppercase font-display">
            Dedicated Engineers, Craftsmen & Site Supervisors
          </h3>
        </div>
      </section>

      {/* Content Section 1: Mission & Values */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00] block mb-2">
            GUIDING PRINCIPLES
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1528] tracking-tight uppercase font-display mb-12">
            Our Mission & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Quality */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-[#E58B00] flex items-center justify-center mb-5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0B1528] uppercase font-display mb-2">
                Quality
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commitment to superior craftsmanship and rigorous execution in every detail, using premium grade materials and certified structural methods.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-[#E58B00] flex items-center justify-center mb-5">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0B1528] uppercase font-display mb-2">
                Integrity
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conducting business with total transparency and honesty in all partnerships, clear open-book estimates, and strict ethical accountability.
              </p>
            </div>

            {/* Safety */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-[#E58B00] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0B1528] uppercase font-display mb-2">
                Safety
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uncompromising priority on safe work environments for our team, subcontractors, and clients with continuous OSHA training and zero-incident protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Our History Timeline */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00] block mb-2">
              GROWTH & MILESTONES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1528] tracking-tight uppercase font-display">
              Our History
            </h2>
          </div>

          <div className="relative border-l-2 border-[#E58B00]/40 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {[
              {
                year: "Established 2016",
                title: "Foundation & Local Commercial Framing",
                desc: "Founded in New York with a focus on commercial framing, tenant buildouts, and residential framing precision."
              },
              {
                year: "Milestone 2019",
                title: "Expansion into Civil & High-Rise Engineering",
                desc: "Secured our first multi-story downtown office complex and grew to over 40 full-time tradesmen and certified site managers."
              },
              {
                year: "Milestone 2022",
                title: "150+ Turnkey Projects Completed",
                desc: "Achieved the Regional Safety Excellence Award and surpassed 150 completed commercial and luxury residential builds."
              },
              {
                year: "Today",
                title: "Industry Leader in Sustainable Construction",
                desc: "Managing over $120M in active developments with a dedicated team of architects, engineers, and project superintendents."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {/* Dot Marker */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#E58B00] border-4 border-white shadow" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00] block">
                  {item.year}
                </span>
                <h4 className="text-base font-black text-[#0B1528] uppercase font-display mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section 3: Meet the Leadership */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00] block mb-2">
            EXECUTIVE TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1528] tracking-tight uppercase font-display mb-12">
            Meet the Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Vance",
                title: "President / CEO",
                bio: "25+ years in civil engineering and structural development overseeing marquee metropolitan infrastructure.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Sarah Jenkins",
                title: "Vice President of Operations",
                bio: "Oversees site logistics, contractor scheduling, safety compliance, and procurement across all active job sites.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Daniel Radnovich",
                title: "Chief Financial Officer (CFO)",
                bio: "Specializes in project capitalization, risk management, and budget optimization for multi-million dollar builds.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
              }
            ].map((leader, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#E58B00]">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-base font-black text-[#0B1528] uppercase font-display">
                  {leader.name}
                </h4>
                <span className="text-xs font-bold text-[#E58B00] block mb-2">
                  {leader.title}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// PAGE 5: CONTACT PAGE (Label: 5/5)
// ==========================================
export const ApexContactPage: React.FC<{ 
  onNavigate?: (page: string) => void;
}> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Header Banner */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#E58B00]">
            START YOUR PROJECT
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0B1528] tracking-tight uppercase font-display">
            GET IN TOUCH.
          </h1>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a commercial tender, custom residential build, or structural renovation in mind? Connect directly with our estimators today.
          </p>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Map Visualization Container */}
          <div className="relative rounded-lg overflow-hidden border border-slate-300 shadow-md bg-[#0F1E36] min-h-[580px] flex items-center justify-center">
            {/* Blueprint Grid / Map graphics */}
            <div className="absolute inset-0 bg-[#0B1528] opacity-90 overflow-hidden">
              <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E58B00" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Custom Map Pin Center */}
            <div className="hidden lg:flex absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10 animate-bounce">
              <div className="px-3 py-1.5 bg-[#0B1528] border border-[#E58B00] rounded text-white text-[11px] font-black shadow-xl mb-1">
                APEX HEADQUARTERS
              </div>
              <div className="w-8 h-8 rounded-full bg-[#E58B00] text-white flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 fill-current" />
              </div>
            </div>

            {/* Overlay Contact Box (Form + Info) */}
            <div className="relative z-20 w-full max-w-5xl mx-4 my-8 bg-white rounded-lg border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
              {/* Form (Col 1-7) */}
              <div className="md:col-span-7 p-8 md:p-10">
                <h3 className="text-2xl font-black text-[#0B1528] uppercase font-display mb-2">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your project details and an Apex construction estimator will respond within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-6 bg-amber-50 border border-amber-200 rounded text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#E58B00] mx-auto" />
                    <h4 className="text-sm font-black text-[#0B1528] uppercase">Message Received!</h4>
                    <p className="text-xs text-slate-600">
                      Thank you for contacting Apex Construction. A project specialist will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Your Name
                      </label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#E58B00] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        required 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#E58B00] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Message / Project Scope
                      </label>
                      <textarea 
                        required 
                        rows={4}
                        placeholder="Describe your commercial build, residential construction, or remodeling needs..."
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#E58B00] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#E58B00] hover:bg-[#D97706] text-white font-extrabold text-xs uppercase tracking-widest rounded shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info (Col 8-12) */}
              <div className="md:col-span-5 bg-[#0B1528] p-8 md:p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#E58B00] uppercase font-display mb-6">
                    Contact info
                  </h3>
                  <div className="space-y-5 text-xs text-slate-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#E58B00] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Corporate Office:</span>
                        <span>100 Apex Way, Suite 500<br />Metro City, NY 10001</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#E58B00] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Phone:</span>
                        <span>(555) 321-4567</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#E58B00] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Email:</span>
                        <span>contact@apexconstruction.com</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#E58B00] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Office Hours:</span>
                        <span>Mon - Fri: 7:00 AM - 6:00 PM EST</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Licensed & Insured General Contractor
                  </span>
                  <span className="text-[9px] text-[#E58B00] font-black">
                    NYC DOB REG #8849201-B
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// QUOTE ESTIMATE MODAL
// ==========================================
export const ApexQuoteModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1528]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-lg border border-slate-200 shadow-2xl overflow-hidden p-6 md:p-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <ApexLogo size="sm" />
          <h3 className="text-xl font-black text-[#0B1528] uppercase font-display mt-2">
            Request a Free Quote
          </h3>
          <p className="text-xs text-slate-500">
            Tell us about your project and receive a complimentary scope estimate.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-amber-50 border border-amber-200 rounded text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#E58B00] mx-auto" />
            <h4 className="text-base font-black text-[#0B1528] uppercase">Estimate Request Sent!</h4>
            <p className="text-xs text-slate-600">
              An Apex senior estimator will review your specifications and contact you within 1 business day.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#0B1528] text-white text-xs font-bold uppercase tracking-wider rounded"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-700 mb-1">
                Full Name
              </label>
              <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#E58B00]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-700 mb-1">
                  Email
                </label>
                <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#E58B00]" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-700 mb-1">
                  Phone
                </label>
                <input required type="tel" placeholder="(555) 321-4567" className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#E58B00]" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase text-slate-700 mb-1">
                Project Type
              </label>
              <select required className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#E58B00]">
                <option value="commercial">Commercial Construction</option>
                <option value="residential">Custom Residential Build</option>
                <option value="remodel">Renovation / Addition</option>
                <option value="management">Project Management / Engineering</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase text-slate-700 mb-1">
                Estimated Budget / Scope
              </label>
              <textarea rows={2} placeholder="Approximate sq ft, timeline, or special requirements..." className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#E58B00] resize-none" />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#E58B00] hover:bg-[#D97706] text-white font-extrabold text-xs uppercase tracking-widest rounded shadow transition-all cursor-pointer"
            >
              Submit Quote Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// ==========================================
// PRECISE BUILDING BACKWARD COMPATIBILITY
// ==========================================
export const PBHeader = (props: any) => <ApexHeader {...props} />;
export const PBHero = (props: any) => <ApexHomePage {...props} />;
export const PBTrustStrip = () => null;
export const PBServicesGrid = (props: any) => <ApexServicesPage {...props} />;
export const PBBlueBanner = () => null;
export const PBWhyChooseUs = (props: any) => <ApexAboutPage {...props} />;
export const PBNoPower = () => null;
export const PBGoToElectrician = () => null;
export const PBReviews = () => null;
export const PBFooter = (props: any) => <ApexFooter {...props} />;

export const PB_RENDERERS: Record<string, React.FC<any>> = {
  PBHeader: (props: any) => <ApexHeader {...props} />,
  PBHero: (props: any) => <ApexHomePage {...props} />,
  PBTrustStrip: () => null,
  PBServicesGrid: (props: any) => <ApexServicesPage {...props} />,
  PBBlueBanner: () => null,
  PBWhyChooseUs: (props: any) => <ApexAboutPage {...props} />,
  PBNoPower: () => null,
  PBGoToElectrician: () => null,
  PBReviews: () => null,
  PBFooter: (props: any) => <ApexFooter {...props} />
};

export { PB_SCHEMAS } from './precisebuilding.schemas';
