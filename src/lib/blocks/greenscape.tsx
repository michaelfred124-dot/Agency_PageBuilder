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
        "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?auto=format&fit=crop&w=1200&q=80",
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
        <div className="flex justify-center gap-6 text-xs uppercase font-bold tracking-widest text-white/30">
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
