import Image from 'next/image';
import React from "react";
import Link from 'next/link';
import {
  Camera,
  Heart,
  Trees,
  User,
  Star,
  ArrowRight,
  Quote,
} from "lucide-react";
import { motion } from "motion/react";

export const LW_SCHEMAS = {
  LWAbout: {
    description: "Lauren Wilson About Section",
    fields: [
      { name: "title", label: "Title", type: "textarea" },
      { name: "desc", label: "Description", type: "textarea" },
      { name: "image", label: "Image URL", type: "text" },
    ],
    defaultProps: {
      title: "Hi, I'm Lauren.\nNice to meet you.",
      desc: "I'm a natural light photographer based in Colorado. I believe in capturing real moments and creating images that feel honest, emotive, and timeless. When I'm not behind the camera, you'll find me hiking, traveling, or drinking way too much coffee.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
  },
  LWServices: {
    description: "Lauren Wilson Services Section",
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
            label: "Icon (User/Star/Heart/Trees)",
            type: "text",
          },
        ],
      },
    ],
    defaultProps: {
      services: [
        {
          iconName: "User",
          title: "Portraits",
          desc: "Natural, authentic portraits that capture who you are.",
        },
        {
          iconName: "Star",
          title: "Weddings",
          desc: "Documenting your day with heart and intention.",
        },
        {
          iconName: "Heart",
          title: "Couples",
          desc: "Honest moments. Real connection. Beautiful light.",
        },
        {
          iconName: "Trees",
          title: "Landscapes",
          desc: "Scenic landscapes and travel imagery that inspires.",
        },
      ],
    },
  },
  LWPortfolio: {
    description: "Lauren Wilson Portfolio Gallery",
    fields: [
      {
        name: "images",
        label: "Images (need exactly 4)",
        type: "array",
        arrayFields: [
          { name: "url", label: "Image URL", type: "text" },
          { name: "title", label: "Title Overlay", type: "text" },
        ],
      },
    ],
    defaultProps: {
      images: [
        {
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
          title: "Weddings",
        },
        {
          url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop",
          title: "Portraits",
        },
        {
          url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
          title: "Couples",
        },
        {
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
          title: "Landscapes",
        },
      ],
    },
  },
  LWTestimonials: {
    description: "Lauren Wilson Testimonials",
    fields: [
      {
        name: "testimonials",
        label: "Testimonials",
        type: "array",
        arrayFields: [
          { name: "text", label: "Quote", type: "textarea" },
          { name: "author", label: "Author", type: "text" },
        ],
      },
    ],
    defaultProps: {
      testimonials: [
        {
          text: "Lauren made us feel so comfortable and captured our day perfectly. We'll cherish these photos forever.",
          author: "Jessica & Mark",
        },
        {
          text: "The photos are STUNNING. She has such a gift for capturing natural moments and beautiful light.",
          author: "Amy & Taylor",
        },
        {
          text: "Professional, kind, and insanely talented. We had the best experience and the results speak for themselves.",
          author: "Michael R.",
        },
      ],
    },
  },
  LWCta: {
    description: "Lauren Wilson Call to Action",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "image", label: "Background Image URL", type: "text" },
    ],
    defaultProps: {
      title: "Ready to book your session?",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    },
  },
  LWFooter: {
    description: "Lauren Wilson Footer",
    fields: [{ name: "text", label: "Footer Text", type: "textarea" }],
    defaultProps: {
      text: "© 2026 Lauren Wilson Photography",
    },
  },
};

const getIcon = (name: string, className: string) => {
  switch (name) {
    case "User":
      return <User className={className} strokeWidth={1.5} />;
    case "Star":
      return <Star className={className} strokeWidth={1.5} />;
    case "Heart":
      return <Heart className={className} strokeWidth={1.5} />;
    case "Trees":
      return <Trees className={className} strokeWidth={1.5} />;
    default:
      return <Camera className={className} strokeWidth={1.5} />;
  }
};

export const LW_RENDERERS = {
  LWAbout: ({ title, desc, image }: any) => (
    <section className="py-16 @md:py-24 bg-[#F8F5F2] text-[#1A1A1A]">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="grid @lg:grid-cols-2 gap-10 @md:gap-16 items-center">
          <div className="aspect-[4/5] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image               src={(image) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
              className="w-full h-full object-cover"
              alt="About"
              referrerPolicy="no-referrer"
            fill />
          </div>
          <div>
            <span className="text-[#1A1A1A]/40 font-bold uppercase tracking-widest text-[10px] block mb-4">
              About Me
            </span>
            <h2 className="text-4xl @sm:text-5xl @md:text-6xl font-serif italic mb-8 whitespace-pre-line">
              {title}
            </h2>
            <div className="w-12 h-px bg-[#1A1A1A] mb-8" />
            <p className="text-lg text-[#333333]/70 mb-8 leading-relaxed max-w-xl whitespace-pre-line">
              {desc}
            </p>
            <button className="bg-[#1A1A1A] text-white px-10 py-4 font-bold uppercase tracking-widest hover:opacity-90 transition-all text-[11px]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  ),
  LWServices: ({ services }: any) => (
    <section className="py-16 @md:py-24 bg-[#1A1A1A] text-white">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="text-center mb-20">
          <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl @md:text-6xl font-serif italic">
            Photography for Every Chapter
          </h2>
        </div>
        <div className="grid @md:grid-cols-4 gap-8 @md:gap-12 text-center">
          {services?.map((service: any, i: number) => (
            <div
              key={i}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white transition-colors duration-500">
                {getIcon(
                  service.iconName,
                  "w-6 h-6 text-white/50 group-hover:text-white transition-colors",
                )}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {service.title}
              </h3>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-[200px] mx-auto mb-6">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  LWPortfolio: ({ images }: any) => {
    // Ensure we have 4 images for the grid layout
    const imgs =
      images?.length >= 4
        ? images
        : Array(4)
            .fill({ url: "", title: "Portfolio" })
            .map((v, i) => images?.[i] || v);

    return (
      <section className="py-16 @md:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
          <div className="flex flex-col @md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#1A1A1A]/40 font-bold uppercase tracking-widest text-[10px] block mb-4">
                Portfolio
              </span>
              <h2 className="text-3xl @sm:text-4xl @md:text-5xl font-serif italic text-[#1A1A1A]">
                Selected Work
              </h2>
            </div>
            <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest border-b border-black/5 pb-2">
              <Link href="#"
                className="text-[#1A1A1A] border-b-2 border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors pb-2"
              >
                All
              </Link>
              <Link href="#"
                className="text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors pb-2"
              >
                Portraits
              </Link>
              <Link href="#"
                className="text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors pb-2"
              >
                Weddings
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 @md:grid-cols-3 gap-4">
            <div className="col-span-1 space-y-4">
              <div className="aspect-[4/3] overflow-hidden group relative">
                <Image                   src={(imgs?.[0]?.url) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Work"
                  referrerPolicy="no-referrer"
                fill />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2">
                    {imgs?.[0]?.title}
                  </span>
                </div>
              </div>
              <div className="aspect-[4/5] overflow-hidden group relative">
                <Image                   src={(imgs?.[1]?.url) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Work"
                  referrerPolicy="no-referrer"
                fill />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2">
                    {imgs?.[1]?.title}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="h-full min-h-[500px] overflow-hidden group relative">
                <Image                   src={(imgs?.[2]?.url) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Work"
                  referrerPolicy="no-referrer"
                fill />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2">
                    {imgs?.[2]?.title}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="aspect-[3/4] overflow-hidden group relative opacity-0 invisible hidden @md:block"></div>
              <div className="aspect-[4/3] overflow-hidden group relative">
                <Image                   src={(imgs?.[3]?.url) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Work"
                  referrerPolicy="no-referrer"
                fill />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2">
                    {imgs?.[3]?.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
  LWTestimonials: ({ testimonials }: any) => (
    <section className="py-16 @md:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="text-center mb-20">
          <span className="text-[#1A1A1A]/40 font-bold uppercase tracking-widest text-[10px] block mb-4">
            Kind Words
          </span>
          <h2 className="text-3xl @sm:text-4xl @md:text-5xl font-serif italic text-[#1A1A1A]">
            Client Love
          </h2>
        </div>

        <div className="grid @md:grid-cols-3 gap-8 @md:gap-12">
          {testimonials?.map((testimonial: any, i: number) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-6"
            >
              <Quote className="w-8 h-8 text-black/5 mb-6" />
              <p className="text-lg font-light italic mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="w-8 h-px bg-black/10 mb-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                — {testimonial.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  LWCta: ({ title, image }: any) => (
    <section className="relative py-20 @md:py-32 bg-[#1A1A1A] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image           src={(image) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
          className="w-full h-full object-cover"
          alt="Background"
          referrerPolicy="no-referrer"
        fill />
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12 relative z-10 text-center text-white">
        <span className="text-white/60 font-bold uppercase tracking-widest text-[10px] block mb-6">
          Let's create something beautiful
        </span>
        <h2 className="text-4xl @sm:text-4xl @sm:text-5xl @md:text-7xl font-serif italic mb-12">
          {title}
        </h2>
        <button className="bg-white text-black px-8 @md:px-12 py-4 @md:py-5 font-bold uppercase tracking-widest hover:bg-[#E0E0E0] transition-all text-[10px] @md:text-xs rounded-none pointer-events-none">
          Get In Touch
        </button>
      </div>
    </section>
  ),
  LWFooter: ({ text }: any) => (
    <footer className="bg-white py-12 border-t border-black/5">
      <div className="w-full max-w-7xl mx-auto px-6 text-center">
        <h4 className="font-serif italic text-2xl mb-4 text-[#1A1A1A]">
          Lauren Wilson
        </h4>
        <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-8">
          <Link href="#" className="hover:text-[#1A1A1A] transition-colors">
            Instagram
          </Link>
          <Link href="#" className="hover:text-[#1A1A1A] transition-colors">
            Pinterest
          </Link>
          <Link href="#" className="hover:text-[#1A1A1A] transition-colors">
            Email
          </Link>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/30">
          {text}
        </p>
      </div>
    </footer>
  ),
};
