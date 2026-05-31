"use client";

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { NW_SCHEMAS, NW_RENDERERS } from './blocks/northwood';
import { GS_SCHEMAS, GS_RENDERERS } from './blocks/greenscape';
import { LW_SCHEMAS, LW_RENDERERS } from './blocks/lauren';
import { EC_SCHEMAS, EC_RENDERERS } from './blocks/ecommerce';
import { BS_SCHEMAS, BS_RENDERERS } from './blocks/brighter-solar';
import { RESTAURANT_SCHEMAS, RESTAURANT_RENDERERS } from './blocks/restaurant';
import { VV_SCHEMAS, VV_RENDERERS } from './blocks/voltvikings';
import EditableText from '@/components/EditableText';
import ContactForm from '@/components/ContactForm';

export type ComponentType = 'Hero' | 'Feature' | 'ProjectGrid' | 'Gallery' | 'TestimonialList' | 'Banner' | 'GSHero' | 'NWHero' | 'LWHero' | 'NWEthos' | 'NWMenu' | 'NWFindUs' | 'NWOrderAhead' | 'NWCommunity' | 'NWFooter' | 'GSServices' | 'GSAbout' | 'GSProjects' | 'GSCta' | 'GSFooter' | 'LWAbout' | 'LWServices' | 'LWPortfolio' | 'LWTestimonials' | 'LWCta' | 'LWFooter' | 'ProductGrid' | 'PricingTable' | 'BSHeader' | 'BSHero' | 'BSStats' | 'BSServices' | 'BSSteps' | 'BSTestimonials' | 'BSPricing' | 'BSCTA' | 'BSFooter' | 'CustomSection' | 'ShopifyProduct' | 'RHero' | 'RFeatures' | 'RMenuPreview' | 'RAtmosphere' | 'RChef' | 'RReviews' | 'RHoursInfo' | 'RCta' | 'RFooter' | 'ContactForm' | 'GoogleMap' | 'CalendlyEmbed' | 'MailchimpForm' | 'InstagramFeed' | 'VVHeader' | 'VVHero' | 'VVStats' | 'VVServices' | 'VVProcess' | 'VVTestimonials' | 'VVMap' | 'VVCTA' | 'VVFooter';

export interface SectionOverrides {
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
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
  ...RESTAURANT_SCHEMAS,
  ...VV_SCHEMAS,
  Hero: {
    description: "Large hero block with a call to action.",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' },
      { name: 'buttonLink', label: 'Button Link', type: 'text' },
      { name: 'buttonStyle', label: 'Button Style (filled/outlined/pill/brutalist/link)', type: 'text' },
      { name: 'theme', label: 'Theme (light/dark/sand/emerald/custom)', type: 'text' },
      { name: 'layoutPreset', label: 'Layout (standard/centered/split/box)', type: 'text' },
      { name: 'image', label: 'Hero Image (for split/box)', type: 'text' }
    ],
    defaultProps: {
      title: "Build the Future",
      subtitle: "We create digital experiences that matter.",
      buttonText: "Get Started",
      buttonLink: "#",
      buttonStyle: "filled",
      theme: "light",
      layoutPreset: "standard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600"
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
      { name: 'theme', label: 'Theme (light/dark/sand/emerald/custom)', type: 'text' },
      { name: 'layoutPreset', label: 'Layout Preset', type: 'text' }
    ],
    defaultProps: {
      title: "Innovative Design",
      text: "We focus on clean, minimal, and brutalist aesthetics that stand out.",
      theme: "light",
      layoutPreset: "standard"
    }
  },
  ProjectGrid: {
    description: "A grid of images and titles.",
    fields: [
      { name: 'projects', label: 'Projects', type: 'array', arrayFields: [
        { name: 'title', label: 'Project Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'text' },
        { name: 'image', label: 'Image URL', type: 'text' }
      ]},
      { name: 'collectionBinding', label: 'Bind to CMS Collection (e.g. Services)', type: 'text' }
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
      { name: 'collectionBinding', label: 'Bind to CMS Collection (e.g. Services)', type: 'text' }
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
      ]},
      { name: 'collectionBinding', label: 'Bind to CMS Collection (e.g. Testimonials)', type: 'text' },
      { name: 'layoutPreset', label: 'Layout Preset', type: 'text' }
    ],
    defaultProps: {
      title: "What people say",
      testimonials: [
        { quote: "This is the best service I have ever used. Highly recommend to everyone.", author: "Jane Doe" },
        { quote: "Absolutely fantastic attention to detail and design.", author: "John Smith" }
      ],
      layoutPreset: "grid"
    }
  },
  Banner: {
    description: "A small call to action banner or stat bar.",
    fields: [
      { name: 'text', label: 'Text', type: 'text' },
      { name: 'subtext', label: 'Subtext', type: 'text' },
      { name: 'theme', label: 'Theme (light/dark/sand/emerald/custom)', type: 'text' }
    ],
    defaultProps: {
      text: "Join 10,000+ Happy Customers",
      subtext: "Rated 5 stars on every platform",
      theme: "dark"
    }
  },
  CustomSection: {
    description: "A Wix/Elementor-style section with fully customizable grid columns and inline elements.",
    fields: [
      { name: 'columns', label: 'Columns Layout', type: 'array', arrayFields: [
        { name: 'width', label: 'Column Width', type: 'text' }
      ]}
    ],
    defaultProps: {
      columns: [
        {
          id: 'col-1',
          width: '50%',
          elements: [
            { id: 'el-1', type: 'Heading', props: { text: 'Custom Column One' } },
            { id: 'el-2', type: 'Paragraph', props: { text: 'Click any text on the screen to edit it directly inline. Use the right sidebar panel to edit background, borders, and shadows.' } },
            { id: 'el-3', type: 'Button', props: { text: 'Get Started', link: '#' } }
          ]
        },
        {
          id: 'col-2',
          width: '50%',
          elements: [
            { id: 'el-4', type: 'Image', props: { url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=600' } }
          ]
        }
      ]
    }
  },
  ShopifyProduct: {
    description: "Embed a live Shopify product buy button with checkout.",
    fields: [
      { name: 'productId', label: 'Shopify Product ID', type: 'text' },
      { name: 'storeDomain', label: 'Store Domain (e.g. my-shop.myshopify.com)', type: 'text' },
      { name: 'storefrontToken', label: 'Storefront Access Token', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' },
      { name: 'productTitle', label: 'Fallback Product Title', type: 'text' },
      { name: 'productPrice', label: 'Fallback Price (e.g. $29.99)', type: 'text' },
      { name: 'productImage', label: 'Fallback Product Image URL', type: 'text' },
    ],
    defaultProps: {
      productId: '',
      storeDomain: '',
      storefrontToken: '',
      buttonText: 'Buy Now',
      productTitle: 'My Product',
      productPrice: '$0.00',
      productImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    }
  },
  ContactForm: {
    description: "Interactive contact form with auto-notifications in client dashboard.",
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { name: 'namePlaceholder', label: 'Name Input Placeholder', type: 'text' },
      { name: 'emailPlaceholder', label: 'Email Input Placeholder', type: 'text' },
      { name: 'phonePlaceholder', label: 'Phone Input Placeholder', type: 'text' },
      { name: 'messagePlaceholder', label: 'Message Input Placeholder', type: 'text' },
      { name: 'buttonText', label: 'Submit Button Text', type: 'text' },
      { name: 'theme', label: 'Theme (light/dark/sand/emerald/custom)', type: 'text' }
    ],
    defaultProps: {
      title: "Get in Touch",
      subtitle: "Have a question or want to work together? Fill out the form below.",
      namePlaceholder: "Your full name",
      emailPlaceholder: "Your email address",
      phonePlaceholder: "Your phone number (optional)",
      messagePlaceholder: "How can we help you?",
      buttonText: "Send Message",
      theme: "light"
    }
  },
  GoogleMap: {
    description: "Embed a responsive Google Map address location.",
    fields: [
      { name: 'address', label: 'Map Address Query', type: 'text' },
      { name: 'zoom', label: 'Map Zoom Level (1-20)', type: 'text' }
    ],
    defaultProps: {
      address: "1600 Amphitheatre Pkwy, Mountain View, CA",
      zoom: "14"
    }
  },
  CalendlyEmbed: {
    description: "Embed an online booking scheduler iframe via Calendly link.",
    fields: [
      { name: 'url', label: 'Calendly Link URL', type: 'text' }
    ],
    defaultProps: {
      url: "https://calendly.com/acme"
    }
  },
  MailchimpForm: {
    description: "Newsletter subscription signup form capturing email captures.",
    fields: [
      { name: 'title', label: 'Form Title', type: 'text' },
      { name: 'subtitle', label: 'Form Subtitle', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' },
      { name: 'actionUrl', label: 'Mailchimp Form Action URL', type: 'text' }
    ],
    defaultProps: {
      title: "Subscribe to our Newsletter",
      subtitle: "Stay updated with the latest news, updates, and templates.",
      buttonText: "Subscribe",
      actionUrl: ""
    }
  },
  InstagramFeed: {
    description: "A beautiful mockup display layout grid representing an active Instagram post feed.",
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'handle', label: 'Instagram Handle', type: 'text' }
    ],
    defaultProps: {
      title: "Follow Us on Instagram",
      handle: "@michaelfreddesigns"
    }
  }
};

const getThemeClasses = (theme: string) => {
  switch (theme) {
    case 'custom':
      return {
        bg: 'bg-[var(--color-card)] text-[var(--color-text)]',
        text: 'text-[var(--color-text)]',
        muted: 'opacity-60 text-[var(--color-text)]',
        border: 'border-[var(--color-text)]/20',
        buttonText: 'text-[var(--color-card)]',
        buttonBg: 'bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]'
      };
    case 'dark': return { bg: 'bg-[#1A1A1A] text-white', text: 'text-white', muted: 'text-white/60', border: 'border-white/20', buttonText: 'text-black', buttonBg: 'bg-white hover:bg-white/90' };
    case 'sand': return { bg: 'bg-[#F4F1EA] text-[#2C2C2C]', text: 'text-[#2C2C2C]', muted: 'text-[#2C2C2C]/50', border: 'border-[#2C2C2C]/20', buttonText: 'text-white', buttonBg: 'bg-[#8B5E3C] hover:bg-[#A67B5B]' };
    case 'emerald': return { bg: 'bg-[#4C6B36] text-white', text: 'text-white', muted: 'text-white/70', border: 'border-white/20', buttonText: 'text-[#4C6B36]', buttonBg: 'bg-white hover:bg-white/90' };
    case 'light':
    default: return { bg: 'bg-[#F8F5F2] text-black', text: 'text-black', muted: 'text-black/40', border: 'border-black', buttonText: 'text-white', buttonBg: 'bg-black hover:bg-black/80' };
  }
};

export const getInlineButtonClasses = (styleName: string) => {
  switch (styleName) {
    case 'outlined':
      return 'border-2 border-[var(--color-primary,#000000)] text-[var(--color-primary,#000000)] bg-transparent hover:bg-[var(--color-primary,#000000)]/10 px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs inline-block text-center transition-all cursor-pointer';
    case 'pill':
      return 'bg-[var(--color-primary,#000000)] text-white hover:bg-[var(--color-secondary,#333333)] px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs inline-block text-center transition-all shadow-md cursor-pointer';
    case 'brutalist':
      return 'bg-[var(--color-accent,#f59e0b)] text-black border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs inline-block text-center transition-all cursor-pointer';
    case 'link':
      return 'text-[var(--color-primary,#000000)] underline hover:text-[var(--color-secondary,#333333)] font-bold text-xs inline-block bg-transparent px-1 py-1 transition-all cursor-pointer';
    case 'filled':
    default:
      return 'bg-[var(--color-primary,#000000)] text-white hover:bg-[var(--color-secondary,#333333)] px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs inline-block text-center transition-all shadow-md cursor-pointer';
  }
};

export const getHeroButtonClasses = (styleName: string, t: any) => {
  switch (styleName) {
    case 'outlined':
      return 'border-2 border-[var(--color-primary,#000000)] text-[var(--color-primary,#000000)] bg-transparent hover:bg-[var(--color-primary,#000000)]/10 px-8 py-5 rounded-xl font-black uppercase tracking-widest text-sm inline-block text-center transition-all cursor-pointer';
    case 'pill':
      return 'bg-[var(--color-primary,#000000)] text-white hover:bg-[var(--color-secondary,#333333)] px-8 py-5 rounded-full font-black uppercase tracking-widest text-sm inline-block text-center transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.3)] cursor-pointer';
    case 'brutalist':
      return 'bg-[var(--color-accent,#f59e0b)] text-black border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] px-8 py-5 rounded-xl font-black uppercase tracking-widest text-sm inline-block text-center transition-all cursor-pointer';
    case 'link':
      return 'text-[var(--color-primary,#000000)] underline hover:text-[var(--color-secondary,#333333)] font-black text-sm inline-block bg-transparent px-1 py-1 transition-all cursor-pointer';
    case 'filled':
    default:
      return `${t.buttonBg} ${t.buttonText} px-8 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-[6px_6px_0px_rgba(0,0,0,0.3)] inline-block text-center transition-all cursor-pointer`;
  }
};

export const Renderers: Record<string, (props: any) => React.ReactNode> = {
  ...NW_RENDERERS,
  ...GS_RENDERERS,
  ...LW_RENDERERS,
  ...EC_RENDERERS,
  ...BS_RENDERERS,
  ...RESTAURANT_RENDERERS,
  ...VV_RENDERERS,
  Hero: ({ title, subtitle, buttonText, buttonLink = '#', buttonStyle = 'filled', theme, layoutPreset = 'standard', image, isEditable, onPropChange }: any) => {
    const t = getThemeClasses(theme);
    const imgUrl = image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600';
    
    if (layoutPreset === 'centered') {
      return (
        <section className={`py-16 @lg:py-24 ${t.bg} border-b-[4px] ${t.border} px-6 @lg:px-10 text-center`}>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl @lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none break-words w-full">
              <EditableText 
                value={title} 
                onChange={(val) => onPropChange?.('title', val)} 
                isEditable={!!isEditable} 
                placeholder="Title" 
              />
            </h1>
            <p className={`text-lg @lg:text-xl font-bold uppercase tracking-widest mb-10 max-w-2xl break-words ${t.muted}`}>
              <EditableText 
                value={subtitle} 
                onChange={(val) => onPropChange?.('subtitle', val)} 
                isEditable={!!isEditable} 
                placeholder="Subtitle" 
                multiline={true} 
              />
            </p>
            {buttonText && (
              isEditable ? (
                <div className="inline-block">
                  <EditableText 
                    value={buttonText} 
                    onChange={(val) => onPropChange?.('buttonText', val)} 
                    isEditable={!!isEditable} 
                    className={getHeroButtonClasses(buttonStyle, t)}
                    placeholder="Button Text"
                  />
                </div>
              ) : (
                <a href={buttonLink} className={getHeroButtonClasses(buttonStyle, t)}>
                  {buttonText}
                </a>
              )
            )}
          </div>
        </section>
      );
    }

    if (layoutPreset === 'split') {
      return (
        <section className={`py-16 @lg:py-24 ${t.bg} border-b-[4px] ${t.border} px-6 @lg:px-10`}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 @md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl @lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-none break-words">
                <EditableText 
                  value={title} 
                  onChange={(val) => onPropChange?.('title', val)} 
                  isEditable={!!isEditable} 
                  placeholder="Title" 
                />
              </h1>
              <p className={`text-base @lg:text-lg font-bold uppercase tracking-widest mb-10 max-w-xl break-words ${t.muted}`}>
                <EditableText 
                  value={subtitle} 
                  onChange={(val) => onPropChange?.('subtitle', val)} 
                  isEditable={!!isEditable} 
                  placeholder="Subtitle" 
                  multiline={true} 
                />
              </p>
              {buttonText && (
                isEditable ? (
                  <div className="inline-block">
                    <EditableText 
                      value={buttonText} 
                      onChange={(val) => onPropChange?.('buttonText', val)} 
                      isEditable={!!isEditable} 
                      className={getHeroButtonClasses(buttonStyle, t)}
                      placeholder="Button Text"
                    />
                  </div>
                ) : (
                  <a href={buttonLink} className={getHeroButtonClasses(buttonStyle, t)}>
                    {buttonText}
                  </a>
                )
              )}
            </div>
            <div className="relative group/img aspect-video @md:aspect-square border-[4px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-gray-100 flex items-center justify-center">
              <img src={imgUrl} className="w-full h-full object-cover animate-fade-in" alt="Hero Illustration" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>
      );
    }

    if (layoutPreset === 'box') {
      return (
        <section className={`py-16 @lg:py-24 ${t.bg} border-b-[4px] ${t.border} px-6 @lg:px-10`}>
          <div className="max-w-3xl mx-auto bg-white border-[4px] border-black p-8 @lg:p-12 rounded-3xl shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center flex flex-col items-center">
            <h1 className="text-3xl @lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-none text-black break-words w-full">
              <EditableText 
                value={title} 
                onChange={(val) => onPropChange?.('title', val)} 
                isEditable={!!isEditable} 
                placeholder="Title" 
              />
            </h1>
            <p className="text-sm @lg:text-base font-bold uppercase tracking-widest mb-8 max-w-xl text-black/60 break-words">
              <EditableText 
                value={subtitle} 
                onChange={(val) => onPropChange?.('subtitle', val)} 
                isEditable={!!isEditable} 
                placeholder="Subtitle" 
                multiline={true} 
              />
            </p>
            {buttonText && (
              isEditable ? (
                <div className="inline-block">
                  <EditableText 
                    value={buttonText} 
                    onChange={(val) => onPropChange?.('buttonText', val)} 
                    isEditable={!!isEditable} 
                    className={getHeroButtonClasses(buttonStyle, t)}
                    placeholder="Button Text"
                  />
                </div>
              ) : (
                <a href={buttonLink} className={getHeroButtonClasses(buttonStyle, t)}>
                  {buttonText}
                </a>
              )
            )}
          </div>
        </section>
      );
    }

    return (
      <section className={`py-16 @lg:py-24 ${t.bg} border-b-[4px] ${t.border} px-6 @lg:px-10`}>
        <div className="max-w-4xl mx-auto @lg:mx-0">
          <h1 className="text-5xl @lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none break-words">
            <EditableText 
              value={title} 
              onChange={(val) => onPropChange?.('title', val)} 
              isEditable={!!isEditable} 
              placeholder="Title" 
            />
          </h1>
          <p className={`text-lg @lg:text-xl font-bold uppercase tracking-widest mb-10 max-w-2xl break-words ${t.muted}`}>
            <EditableText 
              value={subtitle} 
              onChange={(val) => onPropChange?.('subtitle', val)} 
              isEditable={!!isEditable} 
              placeholder="Subtitle" 
              multiline={true} 
            />
          </p>
          {buttonText && (
            isEditable ? (
              <div className="inline-block">
                <EditableText 
                  value={buttonText} 
                  onChange={(val) => onPropChange?.('buttonText', val)} 
                  isEditable={!!isEditable} 
                  className={getHeroButtonClasses(buttonStyle, t)}
                  placeholder="Button Text"
                />
              </div>
            ) : (
              <a href={buttonLink} className={getHeroButtonClasses(buttonStyle, t)}>
                {buttonText}
              </a>
            )
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
  Feature: ({ title, text, theme, layoutPreset = 'standard', isEditable, onPropChange }: any) => {
     const t = getThemeClasses(theme);
     
     if (layoutPreset === 'side-by-side') {
       return (
         <div className={`p-8 @lg:p-12 ${t.bg} border-[4px] ${t.border} rounded-3xl m-4 @lg:m-8`}>
           <div className="grid grid-cols-1 @md:grid-cols-3 gap-6 items-center">
             <div className="@md:col-span-1">
               <h2 className="text-3xl font-black uppercase tracking-tighter break-words">
                 <EditableText 
                   value={title} 
                   onChange={(val) => onPropChange?.('title', val)} 
                   isEditable={!!isEditable} 
                   placeholder="Heading" 
                 />
               </h2>
             </div>
             <div className="@md:col-span-2">
               <p className={`font-bold leading-relaxed break-words ${t.muted}`}>
                 <EditableText 
                   value={text} 
                   onChange={(val) => onPropChange?.('text', val)} 
                   isEditable={!!isEditable} 
                   placeholder="Paragraph text" 
                   multiline={true} 
                 />
               </p>
             </div>
           </div>
         </div>
       );
     }
     
     if (layoutPreset === 'accent-card') {
       return (
         <div className={`p-8 @lg:p-12 ${t.bg} border-[4px] border-l-[12px] border-l-[var(--color-primary)] ${t.border} rounded-r-3xl rounded-l-none m-4 @lg:m-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]`}>
           <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 break-words">
             <EditableText 
               value={title} 
               onChange={(val) => onPropChange?.('title', val)} 
               isEditable={!!isEditable} 
               placeholder="Heading" 
             />
           </h2>
           <p className={`font-bold leading-relaxed break-words ${t.muted}`}>
             <EditableText 
               value={text} 
               onChange={(val) => onPropChange?.('text', val)} 
               isEditable={!!isEditable} 
               placeholder="Paragraph text" 
               multiline={true} 
             />
           </p>
         </div>
       );
     }

     if (layoutPreset === 'minimal') {
       return (
         <div className="p-4 @lg:p-8 m-4 @lg:m-8 border-b-[2px] border-dashed border-black/20">
           <h2 className="text-2xl font-black uppercase tracking-tighter mb-3 text-black break-words">
             <EditableText 
               value={title} 
               onChange={(val) => onPropChange?.('title', val)} 
               isEditable={!!isEditable} 
               placeholder="Heading" 
             />
           </h2>
           <p className="font-bold leading-relaxed text-black/60 break-words">
             <EditableText 
               value={text} 
               onChange={(val) => onPropChange?.('text', val)} 
               isEditable={!!isEditable} 
               placeholder="Paragraph text" 
               multiline={true} 
             />
           </p>
         </div>
       );
     }

     return (
       <div className={`p-8 @lg:p-12 ${t.bg} border-[4px] ${t.border} rounded-3xl m-4 @lg:m-8`}>
         <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 break-words">
           <EditableText 
             value={title} 
             onChange={(val) => onPropChange?.('title', val)} 
             isEditable={!!isEditable} 
             placeholder="Heading" 
           />
         </h2>
         <p className={`font-bold leading-relaxed break-words ${t.muted}`}>
           <EditableText 
             value={text} 
             onChange={(val) => onPropChange?.('text', val)} 
             isEditable={!!isEditable} 
             placeholder="Paragraph text" 
             multiline={true} 
           />
         </p>
       </div>
     );
  },
  ProjectGrid: ({ projects, collectionBinding }: any) => {
    let displayProjects = projects;
    if (collectionBinding && typeof window !== 'undefined') {
      const collections = JSON.parse(localStorage.getItem('cms_collections') || '{}');
      const boundData = collections[collectionBinding]?.items || [];
      if (boundData.length > 0) {
        displayProjects = boundData.map((item: any) => ({
          title: item.title || item.name || '',
          description: item.description || item.subtitle || '',
          image: item.image || item.url || item.photo || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400'
        }));
      }
    }
    return (
      <div className="grid grid-cols-1 @md:grid-cols-2 gap-8 p-6 @lg:p-10 bg-white">
        {displayProjects?.map((p: any, i: number) => (
          <div key={i} className="border-[4px] border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <img src={(p.image) || undefined} alt={p.title} className="w-full aspect-video object-cover border-b-[4px] border-black" referrerPolicy="no-referrer" />
            <div className="p-6">
              <h3 className="text-xl font-black uppercase tracking-tighter">{p.title}</h3>
              <p className="text-black/40 text-xs font-bold uppercase tracking-widest mt-1">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  },
  Gallery: ({ title, images, collectionBinding }: any) => {
    let displayImages = images;
    if (collectionBinding && typeof window !== 'undefined') {
      const collections = JSON.parse(localStorage.getItem('cms_collections') || '{}');
      const boundData = collections[collectionBinding]?.items || [];
      if (boundData.length > 0) {
        displayImages = boundData.map((item: any) => ({
          url: item.image || item.url || item.photo || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400'
        }));
      }
    }
    return (
      <div className="p-6 @lg:p-10 bg-white">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 break-words text-center">{title}</h2>
        <div className="grid grid-cols-2 @md:grid-cols-3 gap-4">
          {displayImages?.map((img: any, i: number) => (
             <div key={i} className="aspect-square border-[2px] border-black rounded-lg overflow-hidden shadow-sm">
               <img src={(img.url) || undefined} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
          ))}
        </div>
      </div>
    );
  },
  TestimonialList: ({ title, testimonials, collectionBinding, layoutPreset = 'grid' }: any) => {
    let displayTestimonials = testimonials;
    if (collectionBinding && typeof window !== 'undefined') {
      const collections = JSON.parse(localStorage.getItem('cms_collections') || '{}');
      const boundData = collections[collectionBinding]?.items || [];
      if (boundData.length > 0) {
        displayTestimonials = boundData.map((item: any) => ({
          quote: item.quote || item.text || item.message || '',
          author: item.author || item.name || ''
        }));
      }
    }

    if (layoutPreset === 'list') {
      return (
        <div className="p-6 @lg:p-10 bg-[#F4F1EA]">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 break-words text-center">{title}</h2>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {displayTestimonials?.map((t: any, i: number) => (
              <div key={i} className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-start gap-4">
                <span className="text-4xl font-black text-[var(--color-primary)] opacity-40 leading-none select-none">“</span>
                <div className="flex-1">
                  <p className="text-lg font-bold italic mb-3">"{t.quote}"</p>
                  <p className="font-black uppercase tracking-widest text-xs text-black/60">— {t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (layoutPreset === 'minimal-rows') {
      return (
        <div className="p-6 @lg:p-10 bg-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 break-words text-center text-black">{title}</h2>
          <div className="divide-y divide-black max-w-3xl mx-auto">
            {displayTestimonials?.map((t: any, i: number) => (
              <div key={i} className="py-6 flex flex-col gap-2">
                <p className="text-lg font-semibold italic text-black/80">"{t.quote}"</p>
                <p className="font-black uppercase tracking-widest text-xs text-[var(--color-primary)]">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 @lg:p-10 bg-[#F4F1EA]">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 break-words text-center">{title}</h2>
        <div className="grid @md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayTestimonials?.map((t: any, i: number) => (
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
    );
  },
  Banner: ({ text, subtext, theme, isEditable, onPropChange }: any) => {
    const t = getThemeClasses(theme);
    return (
      <div className={`py-8 px-6 ${t.bg} border-b-[4px] ${t.border} text-center flex flex-col justify-center items-center`}>
         <h3 className="text-2xl @lg:text-3xl font-black uppercase tracking-tighter mb-2">
           <EditableText 
             value={text} 
             onChange={(val) => onPropChange?.('text', val)} 
             isEditable={!!isEditable} 
             placeholder="Banner Heading" 
           />
         </h3>
         <p className={`font-bold uppercase tracking-widest text-sm ${t.muted}`}>
           <EditableText 
             value={subtext} 
             onChange={(val) => onPropChange?.('subtext', val)} 
             isEditable={!!isEditable} 
             placeholder="Subtext" 
           />
         </p>
      </div>
    );
  },
  CustomSection: ({ columns = [], isEditable, onPropChange, selectedElementId, onSelectElement, onDeleteElement, onMoveElement, scale = 1 }: any) => {
    const handleDragStart = (e: React.DragEvent, cIdx: number, eIdx: number) => {
      e.stopPropagation();
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('application/json', JSON.stringify({ colIdx: cIdx, elIdx: eIdx }));
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e: React.DragEvent, destColIdx: number, destElIdx: number) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        const rawData = e.dataTransfer.getData('application/json');
        if (!rawData) return;
        const { colIdx: srcColIdx, elIdx: srcElIdx } = JSON.parse(rawData);
        
        if (srcColIdx === destColIdx && srcElIdx === destElIdx) return;
        
        const newCols = JSON.parse(JSON.stringify(columns));
        const elementToMove = newCols[srcColIdx].elements[srcElIdx];
        
        newCols[srcColIdx].elements.splice(srcElIdx, 1);
        newCols[destColIdx].elements.splice(destElIdx, 0, elementToMove);
        
        onPropChange?.('columns', newCols);
      } catch (err) {
        console.error("Drop element error:", err);
      }
    };

    const handleDropColumn = (e: React.DragEvent, destColIdx: number) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        const rawData = e.dataTransfer.getData('application/json');
        if (!rawData) return;
        const { colIdx: srcColIdx, elIdx: srcElIdx } = JSON.parse(rawData);
        
        const newCols = JSON.parse(JSON.stringify(columns));
        const elementToMove = newCols[srcColIdx].elements[srcElIdx];
        
        newCols[srcColIdx].elements.splice(srcElIdx, 1);
        newCols[destColIdx].elements.push(elementToMove);
        
        onPropChange?.('columns', newCols);
      } catch (err) {
        console.error("Drop column error:", err);
      }
    };

    const handleAddElementAt = (colIdx: number, targetIdx: number, parentContainerElIdx?: number) => {
      const elType = window.prompt("Choose element type (Heading, Paragraph, Button, Image, Divider, Spacer, Container):", "Heading");
      if (!elType) return;
      const cleanElType = elType.trim();
      if (!['Heading', 'Paragraph', 'Button', 'Image', 'Divider', 'Spacer', 'Container'].includes(cleanElType)) {
        alert("Invalid element type!");
        return;
      }
      
      const newCols = JSON.parse(JSON.stringify(columns));
      const newEl = {
        id: `el-${Date.now()}`,
        type: cleanElType,
        props: cleanElType === 'Heading' ? { text: 'New Heading Text' } :
               cleanElType === 'Paragraph' ? { text: 'New Paragraph Text goes here...' } :
               cleanElType === 'Button' ? { text: 'New Button', link: '#' } :
               cleanElType === 'Image' ? { url: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800' } :
               cleanElType === 'Spacer' ? { height: '24px' } :
               cleanElType === 'Container' ? { elements: [] } : {},
        styleOverrides: {
          color: '',
          fontSize: '',
          textAlign: 'left',
          marginTop: '0px',
          marginBottom: '12px'
        } as any
      };
      
      if (cleanElType === 'Container') {
        newEl.styleOverrides = {
          ...newEl.styleOverrides,
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
          backgroundColor: '#f9fafb', // Light gray so it's visible by default
          borderWidth: '1px',
          borderColor: '#e5e7eb',
          borderRadius: '8px'
        };
      }
      
      if (parentContainerElIdx !== undefined) {
        newCols[colIdx].elements[parentContainerElIdx].props.elements = newCols[colIdx].elements[parentContainerElIdx].props.elements || [];
        newCols[colIdx].elements[parentContainerElIdx].props.elements.splice(targetIdx, 0, newEl);
      } else {
        newCols[colIdx].elements.splice(targetIdx, 0, newEl);
      }
      
      onPropChange?.('columns', newCols);
    };

    return (
      <div className="flex flex-col md:flex-row gap-6 w-full p-4 relative">
        {columns.map((col: any, colIdx: number) => {
          const colStyle = { 
            width: col.width || '100%', 
            flexGrow: col.width ? 0 : 1, 
            flexShrink: 0, 
            flexBasis: col.width || 'auto' 
          };
          return (
            <div 
              key={col.id || colIdx} 
              style={colStyle} 
              onDragOver={handleDragOver}
              onDrop={(e) => handleDropColumn(e, colIdx)}
              className="flex flex-col gap-4 border-2 border-dashed border-transparent hover:border-black/15 p-4 rounded-xl relative transition-all"
            >
              {isEditable && colIdx < columns.length - 1 && (
                <div 
                  className="absolute right-[-15px] top-0 bottom-0 w-2.5 hover:bg-blue-500/50 cursor-col-resize z-30 flex items-center justify-center transition-all group/resize"
                  onMouseDown={(mouseDownEvent) => {
                    mouseDownEvent.preventDefault();
                    mouseDownEvent.stopPropagation();
                    const startX = mouseDownEvent.clientX;
                    const leftCol = col;
                    const rightCol = columns[colIdx + 1];
                    
                    const leftWidthVal = parseFloat(leftCol.width || '50%');
                    const rightWidthVal = parseFloat(rightCol.width || '50%');
                    const totalWidthVal = leftWidthVal + rightWidthVal;
                    
                    const parentEl = mouseDownEvent.currentTarget.parentElement?.parentElement;
                    if (!parentEl) return;
                    const parentWidth = parentEl.clientWidth || 1000;
                    
                    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
                      const deltaX = (mouseMoveEvent.clientX - startX) / (scale || 1);
                      const deltaPercent = (deltaX / parentWidth) * 100;
                      
                      let newLeftPercent = Math.max(10, Math.min(totalWidthVal - 10, leftWidthVal + deltaPercent));
                      let newRightPercent = totalWidthVal - newLeftPercent;
                      
                      const newCols = JSON.parse(JSON.stringify(columns));
                      newCols[colIdx].width = `${newLeftPercent.toFixed(1)}%`;
                      newCols[colIdx + 1].width = `${newRightPercent.toFixed(1)}%`;
                      
                      onPropChange?.('columns', newCols);
                    };
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                >
                  <div className="w-[3px] h-10 bg-gray-300 group-hover/resize:bg-blue-500 rounded transition-colors" />
                </div>
              )}

              {isEditable && (
                <div 
                  className="group/adder relative h-2 -my-1 flex items-center justify-center transition-all"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, colIdx, 0)}
                >
                  <div className="w-full h-[1px] bg-blue-500/0 group-hover/adder:bg-blue-500/30 transition-colors" />
                  <button
                    onClick={() => handleAddElementAt(colIdx, 0)}
                    className="absolute w-5 h-5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow opacity-0 group-hover/adder:opacity-100 transition-opacity scale-75 hover:scale-100 z-30 animate-in fade-in zoom-in-50 duration-75"
                    title="Insert element at top"
                  >
                    +
                  </button>
                </div>
              )}

              {(col.elements || []).map((el: any, elIdx: number) => {
                const isSelected = selectedElementId === el.id;
                
                const elementStyle: React.CSSProperties = {
                  color: el.styleOverrides?.color || undefined,
                  fontSize: el.styleOverrides?.fontSize || undefined,
                  textAlign: el.styleOverrides?.textAlign || undefined,
                  paddingTop: el.styleOverrides?.paddingTop || undefined,
                  paddingBottom: el.styleOverrides?.paddingBottom || undefined,
                  paddingLeft: el.styleOverrides?.paddingLeft || undefined,
                  paddingRight: el.styleOverrides?.paddingRight || undefined,
                  marginTop: el.styleOverrides?.marginTop || undefined,
                  marginBottom: el.styleOverrides?.marginBottom || undefined,
                  marginLeft: el.styleOverrides?.marginLeft || undefined,
                  marginRight: el.styleOverrides?.marginRight || undefined,
                  backgroundColor: el.styleOverrides?.backgroundColor || undefined,
                  borderRadius: el.styleOverrides?.borderRadius || undefined,
                  fontWeight: el.styleOverrides?.fontWeight || undefined,
                  borderWidth: el.styleOverrides?.borderWidth || undefined,
                  borderColor: el.styleOverrides?.borderColor || undefined,
                  borderStyle: el.styleOverrides?.borderWidth ? 'solid' : undefined,
                  boxShadow: el.styleOverrides?.shadowSize === 'sm' ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' :
                             el.styleOverrides?.shadowSize === 'md' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' :
                             el.styleOverrides?.shadowSize === 'lg' ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' :
                             el.styleOverrides?.shadowSize === 'xl' ? '8px 8px 0px rgba(0,0,0,1)' : undefined,
                };

                const handleUpdateElProp = (propName: string, val: any) => {
                  const newCols = JSON.parse(JSON.stringify(columns));
                  newCols[colIdx].elements[elIdx].props[propName] = val;
                  onPropChange?.('columns', newCols);
                };

                return (
                  <React.Fragment key={el.id}>
                    <div 
                      onClick={(e) => {
                        if (isEditable) {
                          e.stopPropagation();
                          onSelectElement?.(el.id, colIdx, elIdx);
                        }
                      }}
                      draggable={isEditable}
                      onDragStart={(e) => handleDragStart(e, colIdx, elIdx)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, colIdx, elIdx + 1)}
                      className={`relative group/el border-2 transition-all p-2 rounded-lg ${isEditable ? 'cursor-grab active:cursor-grabbing hover:border-blue-400/40 hover:bg-blue-50/5' : ''} 
                        ${isSelected ? 'border-blue-500 ring-2 ring-blue-100/50 bg-blue-50/5' : 'border-transparent'}`}
                    >
                      {isEditable && isSelected && (
                        <div className="absolute -top-3.5 left-2 bg-blue-500 text-white rounded px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider z-20 shadow-sm border border-white select-none pointer-events-none">
                          {el.type}
                        </div>
                      )}
                      <div style={elementStyle}>
                        {el.type === 'Heading' && (
                          <h3 className="text-3xl font-black uppercase tracking-tighter">
                            <EditableText 
                              value={el.props.text} 
                              onChange={(val) => handleUpdateElProp('text', val)} 
                              isEditable={!!isEditable}
                              autoFocus={isSelected}
                            />
                          </h3>
                        )}
                        {el.type === 'Paragraph' && (
                          <p className="text-sm text-black/75 leading-relaxed">
                            <EditableText 
                              value={el.props.text} 
                              onChange={(val) => handleUpdateElProp('text', val)} 
                              isEditable={!!isEditable}
                              multiline={true}
                              autoFocus={isSelected}
                            />
                          </p>
                        )}
                        {el.type === 'Button' && (
                          isEditable ? (
                            <div className="inline-block">
                              <EditableText 
                                value={el.props.text} 
                                onChange={(val) => handleUpdateElProp('text', val)} 
                                isEditable={!!isEditable}
                                className={getInlineButtonClasses(el.props.buttonStyle)}
                                autoFocus={isSelected}
                              />
                            </div>
                          ) : (
                            <a href={el.props.link || '#'} className={getInlineButtonClasses(el.props.buttonStyle)}>
                              {el.props.text}
                            </a>
                          )
                        )}
                        {el.type === 'Image' && (
                          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-black/10">
                            <img src={el.props.url} alt={el.props.alt || ''} className="w-full h-full object-cover" />
                          </div>
                        )}
                        {el.type === 'Divider' && <div className="border-t-2 border-black/10 my-2 w-full" />}
                        {el.type === 'Spacer' && <div style={{ height: el.props.height || '24px' }} />}
                        {el.type === 'Container' && (
                          <div className="flex flex-col min-h-[40px]">
                            {(el.props.elements || []).map((childEl: any, childIdx: number) => {
                              const isChildSelected = selectedElementId === childEl.id;
                              const childStyle: React.CSSProperties = {
                                color: childEl.styleOverrides?.color || undefined,
                                fontSize: childEl.styleOverrides?.fontSize || undefined,
                                textAlign: childEl.styleOverrides?.textAlign || undefined,
                                paddingTop: childEl.styleOverrides?.paddingTop || undefined,
                                paddingBottom: childEl.styleOverrides?.paddingBottom || undefined,
                                paddingLeft: childEl.styleOverrides?.paddingLeft || undefined,
                                paddingRight: childEl.styleOverrides?.paddingRight || undefined,
                                marginTop: childEl.styleOverrides?.marginTop || undefined,
                                marginBottom: childEl.styleOverrides?.marginBottom || undefined,
                                marginLeft: childEl.styleOverrides?.marginLeft || undefined,
                                marginRight: childEl.styleOverrides?.marginRight || undefined,
                                backgroundColor: childEl.styleOverrides?.backgroundColor || undefined,
                                borderRadius: childEl.styleOverrides?.borderRadius || undefined,
                                fontWeight: childEl.styleOverrides?.fontWeight || undefined,
                                borderWidth: childEl.styleOverrides?.borderWidth || undefined,
                                borderColor: childEl.styleOverrides?.borderColor || undefined,
                                borderStyle: childEl.styleOverrides?.borderWidth ? 'solid' : undefined,
                                boxShadow: childEl.styleOverrides?.shadowSize === 'sm' ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' :
                                           childEl.styleOverrides?.shadowSize === 'md' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' :
                                           childEl.styleOverrides?.shadowSize === 'lg' ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' :
                                           childEl.styleOverrides?.shadowSize === 'xl' ? '8px 8px 0px rgba(0,0,0,1)' : undefined,
                              };
                              
                              const handleUpdateChildProp = (propName: string, val: any) => {
                                const newCols = JSON.parse(JSON.stringify(columns));
                                newCols[colIdx].elements[elIdx].props.elements[childIdx].props[propName] = val;
                                onPropChange?.('columns', newCols);
                              };

                              return (
                                <div 
                                  key={childEl.id}
                                  onClick={(e) => {
                                    if (isEditable) {
                                      e.stopPropagation();
                                      // Note: we'd need a more robust selection mapping for deeply nested items in the inspector,
                                      // but for now we just allow standard selection.
                                      onSelectElement?.(childEl.id, colIdx, -1); 
                                    }
                                  }}
                                  className={`relative group/child border-2 transition-all p-2 rounded-lg ${isEditable ? 'hover:border-purple-400/40 hover:bg-purple-50/5' : ''} 
                                    ${isChildSelected ? 'border-purple-500 ring-2 ring-purple-100/50 bg-purple-50/5' : 'border-transparent'}`}
                                >
                                  {isEditable && isChildSelected && (
                                    <div className="absolute -top-3.5 left-2 bg-purple-500 text-white rounded px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider z-20 shadow-sm border border-white select-none pointer-events-none">
                                      {childEl.type}
                                    </div>
                                  )}
                                  <div style={childStyle}>
                                    {childEl.type === 'Heading' && (
                                      <h3 className="text-3xl font-black uppercase tracking-tighter">
                                        <EditableText value={childEl.props.text} onChange={(val) => handleUpdateChildProp('text', val)} isEditable={!!isEditable} autoFocus={isChildSelected} />
                                      </h3>
                                    )}
                                    {childEl.type === 'Paragraph' && (
                                      <p className="text-sm text-black/75 leading-relaxed">
                                        <EditableText value={childEl.props.text} onChange={(val) => handleUpdateChildProp('text', val)} isEditable={!!isEditable} multiline autoFocus={isChildSelected} />
                                      </p>
                                    )}
                                    {childEl.type === 'Button' && (
                                      isEditable ? (
                                        <div className="inline-block">
                                          <EditableText value={childEl.props.text} onChange={(val) => handleUpdateChildProp('text', val)} isEditable={!!isEditable} className={getInlineButtonClasses(childEl.props.buttonStyle)} autoFocus={isChildSelected} />
                                        </div>
                                      ) : (
                                        <a href={childEl.props.link || '#'} className={getInlineButtonClasses(childEl.props.buttonStyle)}>{childEl.props.text}</a>
                                      )
                                    )}
                                    {childEl.type === 'Image' && (
                                      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-black/10">
                                        <img src={childEl.props.url} alt={childEl.props.alt || ''} className="w-full h-full object-cover" />
                                      </div>
                                    )}
                                    {childEl.type === 'Divider' && <div className="border-t-2 border-black/10 my-2 w-full" />}
                                    {childEl.type === 'Spacer' && <div style={{ height: childEl.props.height || '24px' }} />}
                                  </div>
                                  {isEditable && (
                                    <div className={`absolute -top-3.5 right-2 ${isChildSelected ? 'flex' : 'hidden group-hover/child:flex'} items-center gap-1 bg-purple-600 text-white rounded px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider z-40 shadow-md border border-white`}>
                                      <button 
                                        onClick={(e) => { 
                                          e.stopPropagation(); 
                                          const newCols = JSON.parse(JSON.stringify(columns));
                                          newCols[colIdx].elements[elIdx].props.elements.splice(childIdx, 1);
                                          onPropChange?.('columns', newCols);
                                        }}
                                        className="hover:bg-red-500 p-0.5 rounded text-red-100"
                                        title="Delete Element"
                                      >
                                        ✕
                                      </button>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                            
                            {isEditable && (
                              <button
                                onClick={(e) => { e.stopPropagation(); handleAddElementAt(colIdx, (el.props.elements || []).length, elIdx); }}
                                className="mt-2 py-1.5 border border-dashed border-black/10 text-black/40 hover:text-black/70 hover:border-black/30 font-bold uppercase tracking-widest text-[8px] rounded transition-all text-center flex items-center justify-center gap-1 bg-black/5"
                              >
                                + Add Element to Container
                              </button>
                            )}
                          </div>
                        )}
                      </div>

                      {isEditable && (
                        <div className={`absolute -top-3.5 right-2 ${isSelected ? 'flex' : 'hidden group-hover/el:flex'} items-center gap-1 bg-blue-600 text-white rounded px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider z-40 shadow-md border border-white`}>
                          <button 
                            onClick={(e) => { e.stopPropagation(); onMoveElement?.(colIdx, elIdx, 'up'); }}
                            className="hover:bg-white/20 p-0.5 rounded"
                            title="Move Up"
                          >
                            ↑
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); onMoveElement?.(colIdx, elIdx, 'down'); }}
                            className="hover:bg-white/20 p-0.5 rounded"
                            title="Move Down"
                          >
                            ↓
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); onDeleteElement?.(colIdx, elIdx); }}
                            className="hover:bg-red-500 p-0.5 rounded text-red-100"
                            title="Delete Element"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                    </div>

                    {isEditable && (
                      <div 
                        className="group/adder relative h-2 -my-1 flex items-center justify-center transition-all"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, colIdx, elIdx + 1)}
                      >
                        <div className="w-full h-[1px] bg-blue-500/0 group-hover/adder:bg-blue-500/30 transition-colors" />
                        <button
                          onClick={() => handleAddElementAt(colIdx, elIdx + 1)}
                          className="absolute w-5 h-5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow opacity-0 group-hover/adder:opacity-100 transition-opacity scale-75 hover:scale-100 z-30 animate-in fade-in zoom-in-50 duration-75"
                          title="Insert element here"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

              {isEditable && (
                <button
                  onClick={() => handleAddElementAt(colIdx, col.elements?.length || 0)}
                  className="mt-2 py-2 border border-dashed border-black/15 text-black/50 hover:text-black hover:border-black/30 font-black uppercase tracking-widest text-[9px] rounded-lg transition-all text-center flex items-center justify-center gap-1"
                >
                  + Add Element
                </button>
              )}
            </div>
          );
        })}
      </div>
    );
  },

  ShopifyProduct: ({ productId, storeDomain, storefrontToken, buttonText, productTitle, productPrice, productImage }: any) => {
    // This uses a function component pattern so we can use hooks
    const ShopifyWidget = React.memo(function ShopifyWidget({ productId, storeDomain, storefrontToken, buttonText, productTitle, productPrice, productImage }: any) {
      const containerRef = React.useRef<HTMLDivElement>(null);
      const [sdkReady, setSdkReady] = React.useState(false);

      React.useEffect(() => {
        if (!productId || !storeDomain || !storefrontToken) return;

        const initBuyButton = () => {
          const ShopifyBuy = (window as any).ShopifyBuy;
          if (!ShopifyBuy || !containerRef.current) return;

          try {
            const client = ShopifyBuy.buildClient({
              domain: storeDomain,
              storefrontAccessToken: storefrontToken,
            });

            ShopifyBuy.UI.onReady(client).then((ui: any) => {
              if (!containerRef.current) return;
              containerRef.current.innerHTML = '';
              ui.createComponent('product', {
                id: productId,
                node: containerRef.current,
                options: {
                  product: {
                    buttonDestination: 'checkout',
                    contents: { img: true, title: true, price: true, options: false },
                    text: { button: buttonText || 'Buy Now' },
                    styles: {
                      product: { '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0' } },
                      button: {
                        'background-color': '#4f46e5',
                        ':hover': { 'background-color': '#4338ca' },
                        'border-radius': '12px',
                        'padding-left': '24px',
                        'padding-right': '24px',
                        'font-weight': '700',
                        'letter-spacing': '0.05em',
                        'text-transform': 'uppercase',
                        'font-size': '13px',
                      }
                    }
                  }
                }
              });
            });
            setSdkReady(true);
          } catch (err) {
            console.error('Shopify Buy Button init error:', err);
          }
        };

        if ((window as any).ShopifyBuy) {
          initBuyButton();
        } else {
          const existing = document.querySelector('script[src*="buy-button-storefront"]');
          if (existing) {
            existing.addEventListener('load', initBuyButton);
          } else {
            const script = document.createElement('script');
            script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.js';
            script.async = true;
            script.onload = initBuyButton;
            document.body.appendChild(script);
          }
        }
      }, [productId, storeDomain, storefrontToken, buttonText]);

      // Fallback/placeholder card if not configured yet
      if (!productId || !storeDomain || !storefrontToken) {
        return (
          <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col @md:flex-row gap-10 items-center bg-white rounded-2xl shadow-xl border border-indigo-100 overflow-hidden">
                <div className="w-full @md:w-96 h-64 @md:h-auto @md:aspect-square bg-gray-100 overflow-hidden shrink-0">
                  <img
                    src={productImage || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'}
                    alt={productTitle || 'Product'}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 p-8 @md:p-12 flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Shopify</span>
                    <span className="bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">In Stock</span>
                  </div>
                  <h2 className="text-3xl @md:text-4xl font-black text-gray-900 tracking-tight leading-tight">{productTitle || 'Product Name'}</h2>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm">Connect your Shopify store in the E-Commerce panel to show a live buy button with real product data.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-indigo-600">{productPrice || '$0.00'}</span>
                  </div>
                  <button className="self-start bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-indigo-700 transition-all shadow-md pointer-events-none">
                    {buttonText || 'Buy Now'}
                  </button>
                  <p className="text-[10px] text-gray-400 font-semibold">⚡ Set your Shopify Product ID, Store Domain & Storefront Token in the inspector to activate live checkout.</p>
                </div>
              </div>
            </div>
          </section>
        );
      }

      return (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div ref={containerRef} className="w-full min-h-[320px] flex items-center justify-center">
              {!sdkReady && (
                <div className="flex flex-col items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-semibold">Loading Shopify product...</span>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    });

    return <ShopifyWidget productId={productId} storeDomain={storeDomain} storefrontToken={storefrontToken} buttonText={buttonText} productTitle={productTitle} productPrice={productPrice} productImage={productImage} />;
  },
  ContactForm: (props: any) => {
    return <ContactForm {...props} />;
  },
  GoogleMap: ({ address = "1600 Amphitheatre Pkwy, Mountain View, CA", zoom = "14" }: any) => {
    const encodedAddress = encodeURIComponent(address);
    return (
      <div className="w-full py-8 px-6 bg-white flex flex-col items-center">
        <div className="w-full max-w-4xl border-[4px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] aspect-video">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${encodedAddress}&z=${zoom}&output=embed`}
          />
        </div>
      </div>
    );
  },
  CalendlyEmbed: ({ url = "https://calendly.com/acme" }: any) => {
    if (!url) {
      return (
        <div className="w-full py-16 px-6 bg-gray-50 border-2 border-dashed border-gray-200 text-center font-bold text-gray-400">
          Configure your Calendly Link in the Inspector panel.
        </div>
      );
    }
    return (
      <div className="w-full py-8 px-6 bg-white flex flex-col items-center">
        <div className="w-full max-w-4xl border-[4px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white h-[600px]">
          <iframe
            title="Calendly Booking"
            src={url}
            width="100%"
            height="100%"
            style={{ border: 0 }}
          />
        </div>
      </div>
    );
  },
  MailchimpForm: ({ title = "Subscribe to our Newsletter", subtitle = "Stay updated with the latest news, updates, and templates.", actionUrl = "", buttonText = "Subscribe" }: any) => {
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) return;
      if (actionUrl) {
        window.open(`${actionUrl}&EMAIL=${encodeURIComponent(email)}`, '_blank');
      } else {
        setStatus('success');
      }
    };

    return (
      <section className="py-16 px-6 bg-[#F8F5F2] border-y-[4px] border-black text-center flex flex-col items-center justify-center">
        <div className="max-w-xl w-full">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black">{title}</h2>
          <p className="text-sm font-bold uppercase tracking-widest text-black/50 mb-8">{subtitle}</p>
          {status === 'success' ? (
            <div className="border-[3px] border-black bg-green-100 p-4 rounded-xl font-bold text-sm text-green-800 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              🎉 Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@gmail.com"
                className="flex-1 max-w-sm px-4 py-3 bg-white border-2 border-black rounded-xl font-bold text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
              <button
                type="submit"
                className="bg-black hover:bg-black/90 text-white font-black uppercase tracking-widest text-xs px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0"
              >
                {buttonText}
              </button>
            </form>
          )}
        </div>
      </section>
    );
  },
  InstagramFeed: ({ title = "Follow Us on Instagram", handle = "@michaelfreddesigns" }: any) => {
    const mockPosts = [
      { id: 1, url: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=80', likes: '1.2k', comments: '45' },
      { id: 2, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop&q=80', likes: '890', comments: '22' },
      { id: 3, url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80', likes: '2.5k', comments: '112' },
      { id: 4, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80', likes: '1.7k', comments: '64' },
      { id: 5, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80', likes: '980', comments: '31' },
      { id: 6, url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80', likes: '3.1k', comments: '150' },
    ];
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black">{title}</h2>
            <a href={`https://instagram.com/${handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 font-bold text-xs text-blue-600 hover:underline uppercase tracking-widest">{handle}</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {mockPosts.map((post) => (
              <div key={post.id} className="aspect-square relative group overflow-hidden border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-gray-50 cursor-pointer">
                <img src={post.url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Instagram mock post" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 text-white font-bold text-sm transition-opacity">
                  <div className="flex items-center gap-1.5">
                    <span>❤️</span> {post.likes}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>💬</span> {post.comments}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};
