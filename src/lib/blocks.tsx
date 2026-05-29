import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { NW_SCHEMAS, NW_RENDERERS } from './blocks/northwood';
import { GS_SCHEMAS, GS_RENDERERS } from './blocks/greenscape';
import { LW_SCHEMAS, LW_RENDERERS } from './blocks/lauren';
import { EC_SCHEMAS, EC_RENDERERS } from './blocks/ecommerce';
import { BS_SCHEMAS, BS_RENDERERS } from './blocks/brighter-solar';

export type ComponentType = 'Hero' | 'Feature' | 'ProjectGrid' | 'Gallery' | 'TestimonialList' | 'Banner' | 'GSHero' | 'NWHero' | 'LWHero' | 'NWEthos' | 'NWMenu' | 'NWFindUs' | 'NWOrderAhead' | 'NWCommunity' | 'NWFooter' | 'GSServices' | 'GSAbout' | 'GSProjects' | 'GSCta' | 'GSFooter' | 'LWAbout' | 'LWServices' | 'LWPortfolio' | 'LWTestimonials' | 'LWCta' | 'LWFooter' | 'ProductGrid' | 'PricingTable' | 'BSHeader' | 'BSHero' | 'BSStats' | 'BSServices' | 'BSSteps' | 'BSTestimonials' | 'BSPricing' | 'BSCTA' | 'BSFooter';

export interface SectionOverrides {
  paddingTop?: string;
  paddingBottom?: string;
  textAlign?: 'left' | 'center' | 'right';
  borderWidth?: string;
  borderColor?: string;
  shadowSize?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: string;
  buttonLink?: string;
  buttonText?: string;
  customClass?: string;
}

export interface SectionData {
  id: string;
  type: ComponentType;
  props: any;
  styleOverrides?: SectionOverrides;
}

export const COMPONENT_SCHEMAS: Record<string, any> = {
  ...NW_SCHEMAS,
  ...GS_SCHEMAS,
  ...LW_SCHEMAS,
  ...EC_SCHEMAS,
  ...BS_SCHEMAS,
  Hero: {
    description: "Large hero block with a call to action.",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' },
      { name: 'theme', label: 'Theme (light/dark/sand/emerald)', type: 'text' }
    ],
    defaultProps: {
      title: "Build the Future",
      subtitle: "We create digital experiences that matter.",
      buttonText: "Get Started",
      theme: "light"
    }
  },
  GSHero: {
    description: "Greenscape Hero with ratings and badges.",
    fields: [
      { name: 'title', label: 'Title', type: 'textarea' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'bgImage', label: 'Background Image', type: 'text' },
    ],
    defaultProps: {
      title: "Beautiful landscapes.\nBuilt for your life.",
      subtitle: "Expert landscaping services that enhance your property and add lasting value. Rooted in quality since 2012.",
      bgImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80"
    }
  },
  NWHero: {
    description: "Northwood Coffee Hero",
    fields: [
      { name: 'title', label: 'Title', type: 'textarea' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'bgImage', label: 'Background Image', type: 'text' },
    ],
    defaultProps: {
      title: "Local coffee.\nMade for your mornings.",
      subtitle: "Handcrafted drinks, fresh bites, and good vibes in the heart of our community.",
      bgImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
    }
  },
  LWHero: {
    description: "Lauren Wilson Photography Hero",
    fields: [
      { name: 'title', label: 'Title', type: 'textarea' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'bgImage', label: 'Background Image', type: 'text' },
    ],
    defaultProps: {
      title: "Timeless Imagery.\nAuthentic Stories.",
      subtitle: "Natural light photographer specializing in portraits, couples, weddings, and landscapes based in Colorado.",
      bgImage: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop"
    }
  },
  Feature: {
    description: "A text block for highlighting values or stories.",
    fields: [
      { name: 'title', label: 'Heading', type: 'text' },
      { name: 'text', label: 'Paragraph', type: 'textarea' },
      { name: 'theme', label: 'Theme (light/dark/sand/emerald)', type: 'text' }
    ],
    defaultProps: {
      title: "Innovative Design",
      text: "We focus on clean, minimal, and brutalist aesthetics that stand out.",
      theme: "light"
    }
  },
  ProjectGrid: {
    description: "A grid of images and titles.",
    fields: [
      { name: 'projects', label: 'Projects', type: 'array', arrayFields: [
        { name: 'title', label: 'Project Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'text' },
        { name: 'image', label: 'Image URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      projects: [
        { title: "Project Alpha", description: "Design & Dev", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
        { title: "Project Beta", description: "Minimal Branding", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop" },
      ]
    }
  },
  Gallery: {
    description: "A masonry or flex grid of images.",
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'images', label: 'Image URLs', type: 'array', arrayFields: [
        { name: 'url', label: 'Image URL', type: 'text' }
      ]},
    ],
    defaultProps: {
      title: "Our Work",
      images: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
        { url: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=600&auto=format&fit=crop" },
        { url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=600&auto=format&fit=crop" },
      ]
    }
  },
  TestimonialList: {
    description: "A list of quotes from customers.",
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [
        { name: 'quote', label: 'Quote', type: 'textarea' },
        { name: 'author', label: 'Author', type: 'text' },
      ]}
    ],
    defaultProps: {
      title: "What people say",
      testimonials: [
        { quote: "This is the best service I have ever used. Highly recommend to everyone.", author: "Jane Doe" },
        { quote: "Absolutely fantastic attention to detail and design.", author: "John Smith" }
      ]
    }
  },
  Banner: {
    description: "A small call to action banner or stat bar.",
    fields: [
      { name: 'text', label: 'Text', type: 'text' },
      { name: 'subtext', label: 'Subtext', type: 'text' },
      { name: 'theme', label: 'Theme (light/dark/sand/emerald)', type: 'text' }
    ],
    defaultProps: {
      text: "Join 10,000+ Happy Customers",
      subtext: "Rated 5 stars on every platform",
      theme: "dark"
    }
  }
};

const getThemeClasses = (theme: string) => {
  switch (theme) {
    case 'dark': return { bg: 'bg-[#1A1A1A] text-white', text: 'text-white', muted: 'text-white/60', border: 'border-white/20', buttonText: 'text-black', buttonBg: 'bg-white hover:bg-white/90' };
    case 'sand': return { bg: 'bg-[#F4F1EA] text-[#2C2C2C]', text: 'text-[#2C2C2C]', muted: 'text-[#2C2C2C]/50', border: 'border-[#2C2C2C]/20', buttonText: 'text-white', buttonBg: 'bg-[#8B5E3C] hover:bg-[#A67B5B]' };
    case 'emerald': return { bg: 'bg-[#4C6B36] text-white', text: 'text-white', muted: 'text-white/70', border: 'border-white/20', buttonText: 'text-[#4C6B36]', buttonBg: 'bg-white hover:bg-white/90' };
    case 'light':
    default: return { bg: 'bg-[#F8F5F2] text-black', text: 'text-black', muted: 'text-black/40', border: 'border-black', buttonText: 'text-white', buttonBg: 'bg-black hover:bg-black/80' };
  }
};

export const Renderers: Record<string, (props: any) => React.ReactNode> = {
  ...NW_RENDERERS,
  ...GS_RENDERERS,
  ...LW_RENDERERS,
  ...EC_RENDERERS,
  ...BS_RENDERERS,
  Hero: ({ title, subtitle, buttonText, theme }) => {
    const t = getThemeClasses(theme);
    return (
      <section className={`py-16 @lg:py-24 ${t.bg} border-b-[4px] ${t.border} px-6 @lg:px-10`}>
        <div className="max-w-4xl mx-auto @lg:mx-0">
          <h1 className="text-5xl @lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none break-words">{title}</h1>
          <p className={`text-lg @lg:text-xl font-bold uppercase tracking-widest mb-10 max-w-2xl break-words ${t.muted}`}>{subtitle}</p>
          {buttonText && (
            <button className={`${t.buttonBg} ${t.buttonText} px-8 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all pointer-events-none`}>
              {buttonText}
            </button>
          )}
        </div>
      </section>
    );
  },
  GSHero: ({ title, subtitle, bgImage }) => (
    <section className="relative min-h-[85vh] @lg:min-h-[90vh] py-32 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={(bgImage) || undefined} 
          className="w-full h-full object-cover" 
          alt="Background" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12 relative z-10 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
             <span className="bg-[#7BA05C] text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Top Rated</span>
             <span className="bg-[#1A1A1A] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">SEO Optimized</span>
          </div>
          <h1 className="text-4xl @sm:text-5xl @md:text-7xl @lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight whitespace-pre-line">
            {title}
          </h1>
          <p className="text-xl @md:text-2xl font-light mb-10 text-white/90 max-w-2xl leading-relaxed whitespace-pre-line">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-3 @md:gap-4">
            <button className="bg-[#7BA05C] text-black px-6 @md:px-10 py-3 @md:py-4 font-bold uppercase tracking-widest hover:bg-[#8CB16E] transition-all text-xs @md:text-sm rounded-md shadow-xl pointer-events-none">
              Get a Free Quote
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-3">
             <div className="flex -space-x-2">
               {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-[#4C6B36] flex items-center justify-center overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}` || undefined} alt="User" referrerPolicy="no-referrer" />
                  </div>
               ))}
             </div>
             <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">4.9 Stars on Google</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  ),
  NWHero: ({ title, subtitle, bgImage }) => (
    <section className="relative min-h-[80vh] py-32 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={(bgImage) || undefined} 
            alt="Coffee Hero" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 @md:px-12 relative z-10 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
               <span className="bg-[#D4AF37] text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">New Release</span>
            </div>
            <h1 className="text-4xl @sm:text-4xl @sm:text-5xl @md:text-7xl @lg:text-8xl font-bold leading-[1.1] mb-6 whitespace-pre-line">
              {title}
            </h1>
            <p className="text-xl @md:text-2xl font-light mb-10 text-white/80 whitespace-pre-line">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-3 @md:gap-4">
              <button className="bg-[#8B5E3C] text-white px-6 @md:px-10 py-3 @md:py-4 font-bold uppercase tracking-widest hover:bg-[#A67B5B] transition-all text-xs @md:text-sm pointer-events-none">
                Order Now
              </button>
              <button className="border-2 border-white text-white px-6 @md:px-10 py-3 @md:py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-xs @md:text-sm pointer-events-none">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>
  ),
  LWHero: ({ title, subtitle, bgImage }) => (
    <section className="relative min-h-[85vh] py-32 flex items-center overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <img 
          src={(bgImage) || undefined} 
          className="w-full h-full object-cover" 
          alt="Photography Hero" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12 relative z-10 text-white">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
             <span className="bg-[#E0E0E0] text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">New Template</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4 block text-white/70">Capturing Real Moments</span>
          <h1 className="text-4xl @sm:text-4xl @sm:text-5xl @md:text-7xl @lg:text-8xl font-serif italic leading-[1.1] mb-8 whitespace-pre-line">
            {title}
          </h1>
          <p className="text-lg @md:text-xl font-light mb-10 text-white/80 max-w-lg leading-relaxed whitespace-pre-line">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-3 @md:gap-4">
            <button className="bg-white text-black px-6 @md:px-10 py-3 @md:py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-all text-xs @md:text-[11px] flex items-center gap-3 pointer-events-none">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  ),
  Feature: ({ title, text, theme }) => {
     const t = getThemeClasses(theme);
     return (
      <div className={`p-8 @lg:p-12 ${t.bg} border-[4px] ${t.border} rounded-3xl m-4 @lg:m-8`}>
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 break-words">{title}</h2>
        <p className={`font-bold leading-relaxed break-words ${t.muted}`}>{text}</p>
      </div>
    );
  },
  ProjectGrid: ({ projects }) => (
    <div className="grid grid-cols-1 @md:grid-cols-2 gap-8 p-6 @lg:p-10 bg-white">
      {projects?.map((p: any, i: number) => (
        <div key={i} className="border-[4px] border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          <img src={(p.image) || undefined} alt={p.title} className="w-full aspect-video object-cover border-b-[4px] border-black" referrerPolicy="no-referrer" />
          <div className="p-6">
            <h3 className="text-xl font-black uppercase tracking-tighter">{p.title}</h3>
            <p className="text-black/40 text-xs font-bold uppercase tracking-widest mt-1">{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  ),
  Gallery: ({ title, images }) => (
    <div className="p-6 @lg:p-10 bg-white">
      <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 break-words text-center">{title}</h2>
      <div className="grid grid-cols-2 @md:grid-cols-3 gap-4">
        {images?.map((img: any, i: number) => (
           <div key={i} className="aspect-square border-[2px] border-black rounded-lg overflow-hidden shadow-sm">
             <img src={(img.url) || undefined} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
           </div>
        ))}
      </div>
    </div>
  ),
  TestimonialList: ({ title, testimonials }) => (
    <div className="p-6 @lg:p-10 bg-[#F4F1EA]">
      <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 break-words text-center">{title}</h2>
      <div className="grid @md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials?.map((t: any, i: number) => (
          <div key={i} className="bg-white p-8 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div className="flex gap-1 mb-4 text-[#D4AF37]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-lg font-medium italic mb-4">"{t.quote}"</p>
            <p className="font-black uppercase tracking-widest text-xs">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  ),
  Banner: ({ text, subtext, theme }) => {
    const t = getThemeClasses(theme);
    return (
      <div className={`py-8 px-6 ${t.bg} border-b-[4px] ${t.border} text-center flex flex-col justify-center items-center`}>
         <h3 className="text-2xl @lg:text-3xl font-black uppercase tracking-tighter mb-2">{text}</h3>
         <p className={`font-bold uppercase tracking-widest text-sm ${t.muted}`}>{subtext}</p>
      </div>
    );
  }
};
