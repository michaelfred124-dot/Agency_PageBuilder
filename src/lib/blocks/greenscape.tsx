import Image from 'next/image';
import React from "react";
import Link from 'next/link';
import {
  Leaf,
  Trees,
  Shovel,
  Droplets,
  Trash2,
  CheckCircle2,
  ShieldCheck,
  User,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Menu,
  X
} from "lucide-react";
import { motion } from "motion/react";

export const GS_SCHEMAS = {
  GSServices: {
    description: "Greenscape Services Grid",
    fields: [
      {
        name: "services",
        label: "Services",
        type: "array",
        arrayFields: [
          { name: "title", label: "Title", type: "text" },
          { name: "desc", label: "Description", type: "text" },
          {
            name: "iconName",
            label: "Icon (Shovel/Trees/Leaf/Droplets/ShieldCheck/Trash2)",
            type: "text",
          },
        ],
      },
    ],
    defaultProps: {
      services: [
        {
          iconName: "Shovel",
          title: "Lawn Care",
          desc: "Expert maintenance for every season.",
        },
        {
          iconName: "Trees",
          title: "Landscape Design",
          desc: "Custom designs tailored to you.",
        },
        {
          iconName: "Leaf",
          title: "Garden & Planting",
          desc: "Beautiful plants and expert care.",
        },
        {
          iconName: "Droplets",
          title: "Hardscaping",
          desc: "Patios, walkways, and walls.",
        },
        {
          iconName: "ShieldCheck",
          title: "Irrigation",
          desc: "Efficient water-saving systems.",
        },
        {
          iconName: "Trash2",
          title: "Cleanup",
          desc: "Yard cleanup and debris removal.",
        },
      ],
    },
  },
  GSAbout: {
    description: "Greenscape About & Stats",
    fields: [
      { name: "title", label: "Title", type: "textarea" },
      { name: "desc", label: "Description", type: "textarea" },
      { name: "image", label: "Image URL", type: "text" },
    ],
    defaultProps: {
      title: "Rooted in our community. \nCommitted to excellence.",
      desc: "Greenscape Landscaping is a locally owned and operated business serving Sunnyvale and surrounding areas. We take pride in our work, our reliability, and the relationships we build with our clients.",
      image:
        "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80",
    },
  },
  GSProjects: {
    description: "Greenscape Projects Gallery",
    fields: [
      { name: "title", label: "Title", type: "text" },
      {
        name: "projects",
        label: "Projects",
        type: "array",
        arrayFields: [
          { name: "title", label: "Title", type: "text" },
          { name: "loc", label: "Location", type: "text" },
          { name: "img", label: "Image", type: "text" },
        ],
      },
    ],
    defaultProps: {
      title: "Projects we're proud of",
      projects: [
        {
          title: "Backyard Retreat",
          loc: "Sunnyvale, CA",
          img: "https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Modern Front Yard",
          loc: "Mountain View, CA",
          img: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Elegant Pathway",
          loc: "Cupertino, CA",
          img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Drought-Tolerant",
          loc: "Santa Clara, CA",
          img: "https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  },
  GSCta: {
    description: "Greenscape CTA",
    fields: [
      { name: "title", label: "Title", type: "textarea" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
    ],
    defaultProps: {
      title: "Let's build something \nbeautiful together.",
      subtitle:
        "Contact us today for your free quote and start your transition to a more beautiful life outdoors.",
    },
  },
  GSFooter: {
    description: "Greenscape Footer",
    fields: [{ name: "text", label: "Footer Text", type: "textarea" }],
    defaultProps: {
      text: "© 2026 Greenscape Landscaping. Licensed & Insured. Serving the Bay Area.",
    },
  },
  GSHeader: {
    description: "Greenscape Header & Navigation",
    fields: [
      { name: "businessName", label: "Business Name", type: "text" },
      { name: "tagline", label: "Tagline", type: "text" },
      { name: "phone", label: "Phone Number", type: "text" },
      { name: "address", label: "Address/Service Area", type: "text" },
      { name: "hours", label: "Hours of Operation", type: "text" },
      { name: "ctaText", label: "CTA Button Text", type: "text" }
    ],
    defaultProps: {
      businessName: "Greenscape",
      tagline: "Landscaping",
      phone: "(408) 123-4567",
      address: "Proudly serving Sunnyvale and surrounding areas",
      hours: "Mon - Sat: 7AM - 6PM",
      ctaText: "Get a Free Quote"
    }
  },
  GSContact: {
    description: "Greenscape Contact Page Details & Form",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      { name: "phone", label: "Phone Number", type: "text" },
      { name: "email", label: "Email Address", type: "text" },
      { name: "address", label: "Street Address", type: "textarea" }
    ],
    defaultProps: {
      title: "Get In Touch",
      subtitle: "Ready to start your outdoor transformation? Let us know how we can help.",
      phone: "(408) 123-4567",
      email: "info@greenscape.com",
      address: "123 Greenway Dr, Sunnyvale, CA 94086"
    }
  }
};

const getIcon = (name: string, className: string) => {
  switch (name) {
    case "Shovel":
      return <Shovel className={className} />;
    case "Trees":
      return <Trees className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    case "Droplets":
      return <Droplets className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Trash2":
      return <Trash2 className={className} />;
    default:
      return <Leaf className={className} />;
  }
};

export const GS_RENDERERS = {
  GSServices: ({ services }: any) => (
    <section className="py-12 @md:py-20 bg-white border-y border-black/10">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-6 gap-8">
          {services?.map((service: any, i: number) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#F7F6F2] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#4C6B36]">
                {getIcon(
                  service.iconName,
                  "w-7 h-7 text-[#4C6B36] group-hover:text-white transition-colors",
                )}
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest mb-2 px-2">
                {service.title}
              </h3>
              <p className="text-[10px] text-[#333333]/50 leading-tight @md:px-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  GSAbout: ({ title, desc, image }: any) => (
    <section className="py-16 @md:py-24 bg-[#F7F6F2]">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="grid @lg:grid-cols-2 gap-10 @md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <Image                 src={(image) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
                className="w-full h-full object-cover"
                alt="Garden design"
                referrerPolicy="no-referrer"
              fill />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-[#1A1A1A] p-8 @md:p-12 rounded-2xl hidden @md:flex flex-col justify-center text-white">
              <Leaf className="w-12 h-12 text-[#7BA05C] mb-6" />
              <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none mb-4">
                Ready to transform your outdoors?
              </h4>
              <p className="text-white/50 text-sm mb-8">
                Get a free, no-obligation quote today.
              </p>
            </div>
          </div>
          <div>
            <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block mb-4">
              About Greenscape
            </span>
            <h2 className="text-5xl @lg:text-7xl font-bold mb-8 uppercase tracking-tighter leading-none whitespace-pre-line">
              {title}
            </h2>
            <p className="text-lg text-[#333333]/70 mb-10 leading-relaxed max-w-xl whitespace-pre-line">
              {desc}
            </p>
            <div className="grid grid-cols-1 @sm:grid-cols-3 gap-8 mb-12 py-8 border-y border-[#333333]/10">
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#4C6B36]" />
                  <span className="text-4xl font-black tracking-tighter">
                    10+
                  </span>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#333333]/40">
                  Years of Experience
                </p>
              </div>
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <User className="w-5 h-5 text-[#4C6B36]" />
                  <span className="text-4xl font-black tracking-tighter">
                    500+
                  </span>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#333333]/40">
                  Happy Customers
                </p>
              </div>
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4C6B36]" />
                  <span className="text-4xl font-black tracking-tighter">
                    100%
                  </span>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#333333]/40">
                  Satisfaction
                </p>
              </div>
            </div>
            <button className="bg-[#1A1A1A] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-[#4C6B36] transition-all text-xs rounded-md shadow-xl flex items-center gap-3">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  ),
  GSProjects: ({ title, projects }: any) => (
    <section className="py-16 @md:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block mb-4">
              Our Work
            </span>
            <h2 className="text-3xl @sm:text-4xl @md:text-5xl @lg:text-6xl font-black uppercase tracking-tighter leading-none">
              {title}
            </h2>
          </div>
        </div>
        <div className="grid @md:grid-cols-2 @lg:grid-cols-4 gap-6">
          {projects?.map((p: any, i: number) => (
            <div
              key={i}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image                 src={(p.img) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                alt={p.title}
                referrerPolicy="no-referrer"
              fill />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h4 className="text-xl font-bold uppercase tracking-tighter mb-1">
                  {p.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <MapPin className="w-3 h-3 text-[#7BA05C]" /> {p.loc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  GSCta: ({ title, subtitle }: any) => (
    <section className="py-16 @md:py-24 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12 relative z-10 text-center text-white">
        <Leaf className="w-16 h-16 text-[#7BA05C] mx-auto mb-8 animate-pulse" />
        <h2 className="text-4xl @sm:text-5xl @md:text-7xl @lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 whitespace-pre-line">
          {title}
        </h2>
        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto whitespace-pre-line">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-xl font-bold">
          <div className="flex flex-col gap-2">
            <span className="text-[#3D552B] text-xs uppercase tracking-widest">
              Call Us
            </span>
            <span>(408) 123-4567</span>
          </div>
          <div className="w-px h-16 bg-white/10 hidden @md:block" />
          <div className="flex flex-col gap-2">
            <span className="text-[#3D552B] text-xs uppercase tracking-widest">
              Schedule Online
            </span>
            <span>Fast & Easy</span>
          </div>
          <div className="w-px h-16 bg-white/10 hidden @md:block" />
          <div className="flex flex-col gap-2">
            <span className="text-[#3D552B] text-xs uppercase tracking-widest">
              Send a Message
            </span>
            <span>We'll reply soon!</span>
          </div>
        </div>
        <button className="mt-16 bg-[#7BA05C] text-black px-12 py-6 font-black uppercase tracking-[0.2em] hover:bg-white transition-all text-sm rounded-md flex items-center gap-4 mx-auto pointer-events-none">
          Get a Free Quote <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  ),
  GSHeader: ({ businessName, tagline, phone, address, hours, ctaText }: any) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return (
      <header className="w-full flex flex-col shrink-0">
        {/* Top Bar */}
        <div className="bg-[#1A1A1A] text-white py-2 px-6 md:px-12 text-[10px] md:text-xs font-medium flex justify-between items-center border-b border-white/10 uppercase tracking-widest">
          <div className="flex items-center gap-2">
             <MapPin className="w-3 h-3 text-[#7BA05C]" />
             {address}
          </div>
          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-2">
               <Clock className="w-3 h-3 text-[#7BA05C]" />
               {hours}
             </div>
             <div className="flex items-center gap-2">
               <Phone className="w-3 h-3 text-[#7BA05C]" />
               {phone}
             </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-white py-5 px-6 md:px-12 flex justify-between items-center relative z-50 border-b border-[#F7F6F2]">
          <div className="flex items-center gap-2">
            <div className="bg-[#4C6B36] p-1.5 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase">{businessName}</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#4C6B36] uppercase">{tagline}</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
            <Link href="#" className="hover:text-[#4C6B36] transition-colors border-b-2 border-transparent pb-1">Home</Link>
            <Link href="#" className="hover:text-[#4C6B36] transition-colors border-b-2 border-transparent pb-1">Services</Link>
            <Link href="#" className="hover:text-[#4C6B36] transition-colors border-b-2 border-transparent pb-1">About</Link>
            <Link href="#" className="hover:text-[#4C6B36] transition-colors border-b-2 border-transparent pb-1">Projects</Link>
            <Link href="#" className="hover:text-[#4C6B36] transition-colors border-b-2 border-transparent pb-1">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-[#4C6B36] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#3D552B] transition-all flex items-center gap-2 rounded-md">
              {ctaText} <ArrowRight className="w-4 h-4" />
            </button>
            <button className="lg:hidden text-zinc-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-lg p-6 flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-zinc-900 z-50">
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          )}
        </nav>
      </header>
    );
  },
  GSContact: ({ title, subtitle, phone, email, address }: any) => {
    const [formState, setFormState] = React.useState({ name: '', email: '', phone: '', service: 'lawn-care', message: '' });
    const [submitted, setSubmitted] = React.useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
    };

    return (
      <section className="py-16 @md:py-24 bg-[#F7F6F2]">
        <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
          <div className="grid @lg:grid-cols-12 gap-12 @md:gap-16 items-start">
            
            {/* Contact details */}
            <div className="@lg:col-span-5 space-y-8 text-left">
              <div>
                <span className="text-[#4C6B36] font-black uppercase tracking-widest text-xs block mb-4">Contact Us</span>
                <h2 className="text-4xl @sm:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                  {title}
                </h2>
                <p className="text-base text-[#333333]/70 leading-relaxed">
                  {subtitle}
                </p>
              </div>

              <div className="space-y-6 bg-white p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Call or Text</h4>
                    <p className="font-bold text-zinc-900 text-sm mt-0.5">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Email Us</h4>
                    <p className="font-bold text-zinc-900 text-sm mt-0.5">{email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] border-2 border-black flex items-center justify-center text-[#4C6B36] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-[#333333]/40">Address</h4>
                    <p className="font-bold text-zinc-900 text-sm mt-0.5 whitespace-pre-line">{address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="@lg:col-span-7 w-full bg-white p-8 @md:p-12 rounded-2xl border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)]">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-[#4C6B36] text-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 mb-2">Message Sent!</h3>
                  <p className="text-zinc-500 text-sm max-w-sm mx-auto">Thank you for reaching out. A landscaping specialist will contact you shortly to schedule your free estimate.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-900 mb-6 pb-4 border-b-2 border-zinc-100 text-left">Free Estimate Request</h3>
                  
                  <div className="grid grid-cols-1 @md:grid-cols-2 gap-6">
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="bg-[#F7F6F2] border-2 border-black px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg focus:outline-none focus:bg-white focus:border-[#4C6B36] transition-colors" 
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="bg-[#F7F6F2] border-2 border-black px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg focus:outline-none focus:bg-white focus:border-[#4C6B36] transition-colors" 
                        placeholder="e.g. (408) 555-0199"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 @md:grid-cols-2 gap-6">
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="bg-[#F7F6F2] border-2 border-black px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg focus:outline-none focus:bg-white focus:border-[#4C6B36] transition-colors" 
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Service Needed</label>
                      <select 
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="bg-[#F7F6F2] border-2 border-black px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg focus:outline-none focus:bg-white focus:border-[#4C6B36] transition-colors appearance-none"
                      >
                        <option value="lawn-care">Lawn Care & Maintenance</option>
                        <option value="design">Landscape Design</option>
                        <option value="hardscaping">Hardscaping & Patios</option>
                        <option value="irrigation">Irrigation Systems</option>
                        <option value="cleanup">Yard Cleanups</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Message details</label>
                    <textarea 
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-[#F7F6F2] border-2 border-black px-4 py-3 text-xs font-semibold rounded-lg focus:outline-none focus:bg-white focus:border-[#4C6B36] transition-colors" 
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#4C6B36] hover:bg-[#3D552B] text-white py-4 text-xs font-black uppercase tracking-[0.2em] rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 active:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
                  >
                    Submit Estimate Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    );
  },
  GSFooter: ({ text }: any) => (
    <footer className="py-12 bg-[#1A1A1A] border-t border-white/5 text-center text-white/40 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-2 mb-6 text-white/50">
          <Leaf className="w-5 h-5 text-[#7BA05C]" />
          <span className="font-black uppercase tracking-widest text-lg text-white">
            Greenscape
          </span>
        </div>
        <p className="text-xs uppercase tracking-wider mb-8">{text}</p>
        <div className="flex justify-center gap-6 text-xs uppercase font-bold tracking-widest text-[#333333]/30">
          <Link href="#" className="hover:text-[#7BA05C] transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-[#7BA05C] transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-[#7BA05C] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  ),
};
