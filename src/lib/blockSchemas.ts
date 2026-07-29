// Server-safe aggregation of every block schema.
//
// This deliberately does NOT live in blocks.tsx: that file is a "use client"
// module, so importing COMPONENT_SCHEMAS from server code (the AI generation
// pipeline) yields client-reference proxies and reads as an empty object.
// Keep this file free of React and of any "use client" import.

import { NW_SCHEMAS } from './blocks/northwood.schemas';
import { GS_SCHEMAS } from './blocks/greenscape.schemas';
import { LW_SCHEMAS } from './blocks/lauren.schemas';
import { EC_SCHEMAS } from './blocks/ecommerce.schemas';
import { BS_SCHEMAS } from './blocks/brighter-solar.schemas';
import { RESTAURANT_SCHEMAS } from './blocks/restaurant.schemas';
import { VV_SCHEMAS } from './blocks/voltvikings.schemas';
import { PH_SCHEMAS } from './blocks/prohome.schemas';
import { MB_SCHEMAS } from './blocks/maison.schemas';
import { SL_SCHEMAS } from './blocks/sterlinglaw.schemas';
import { RL_SCHEMAS } from './blocks/ridgeline.schemas';
import { AH_SCHEMAS } from './blocks/atelierhair.schemas';
import { MP_SCHEMAS } from './blocks/meridian.schemas';
import { IE_SCHEMAS } from './blocks/ironedge.schemas';
import { CD_SCHEMAS } from './blocks/claritydental.schemas';
import { PP_SCHEMAS } from './blocks/pawspamper.schemas';
import { GT_SCHEMAS } from './blocks/goldenthread.schemas';
import { SC_SCHEMAS } from './blocks/spotless.schemas';
import { SY_SCHEMAS } from './blocks/solstice.schemas';
import { EDI_SCHEMAS } from './blocks/easydoesit.schemas';
import { ST_SCHEMAS } from './blocks/store.schemas';
import { ER_SCHEMAS } from './blocks/emberandrye.schemas';
import { SE_SCHEMAS } from './blocks/solene.schemas';
import { SS_SCHEMAS } from './blocks/stylish.schemas';
import { PB_SCHEMAS } from './blocks/precisebuilding.schemas';
import { MENU_SCHEMAS } from './blocks/menu.schemas';
import { NAV_SCHEMAS } from './blocks/navigation.schemas';

export const COMPONENT_SCHEMAS: Record<string, any> = {
  ...NW_SCHEMAS,
  ...GS_SCHEMAS,
  ...LW_SCHEMAS,
  ...EC_SCHEMAS,
  ...BS_SCHEMAS,
  ...RESTAURANT_SCHEMAS,
  ...VV_SCHEMAS,
  ...PH_SCHEMAS,
  ...MB_SCHEMAS,
  ...SL_SCHEMAS,
  ...RL_SCHEMAS,
  ...AH_SCHEMAS,
  ...MP_SCHEMAS,
  ...IE_SCHEMAS,
  ...CD_SCHEMAS,
  ...PP_SCHEMAS,
  ...GT_SCHEMAS,
  ...SC_SCHEMAS,
  ...SY_SCHEMAS,
  ...EDI_SCHEMAS,
  ...ST_SCHEMAS,
  ...ER_SCHEMAS,
  ...SE_SCHEMAS,
  ...SS_SCHEMAS,
  ...PB_SCHEMAS,
  ...MENU_SCHEMAS,
  ...NAV_SCHEMAS,
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
      { name: 'image', label: 'Hero Image (for split/box)', type: 'image' }
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
      { name: 'bgImage', label: 'Background Image', type: 'image' },
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
      { name: 'bgImage', label: 'Background Image', type: 'image' },
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
      { name: 'bgImage', label: 'Background Image', type: 'image' },
    ],
    defaultProps: {
      title: "Timeless Imagery.\nAuthentic Stories.",
      subtitle: "Natural light photographer specializing in portraits, couples, weddings, and landscapes based in Colorado.",
      bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
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
      ]}
    ],
    defaultProps: {
      title: "Our Work",
      images: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
        { url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" },
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
