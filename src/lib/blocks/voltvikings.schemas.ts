// Schema data for the voltvikings block family.
// Kept out of voltvikings.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const VV_SCHEMAS = {
  VVHeader: {
    description: "Volt Vikings Header",
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'ctaText', label: 'CTA Button Text', type: 'text' },
      { name: 'ctaLink', label: 'CTA Button Link', type: 'text' },
      { name: 'navLinks', label: 'Nav Menu', type: 'array', arrayFields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'href', label: 'Link', type: 'text' },
      ]},
    ],
    defaultProps: {
      businessName: "VOLT VIKINGS",
      tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
      phone: "(520) 555-0199",
      ctaText: "BOOK ONLINE",
      ctaLink: "#contact",
      navLinks: [
        { label: "HOME", href: "#" },
        { label: "SERVICES", href: "#services" },
        { label: "JOURNEY", href: "#process" },
        { label: "REVIEWS", href: "#reviews" },
        { label: "CORRIDOR", href: "#map" },
      ]
    }
  },
  VVHero: {
    description: "Volt Vikings High-Impact Hero",
    fields: [
      { name: 'badge', label: 'Badge text', type: 'text' },
      { name: 'title', label: 'Title text', type: 'textarea' },
      { name: 'subtitle', label: 'Subtitle text', type: 'textarea' },
      { name: 'ctaText', label: 'Primary Button Text', type: 'text' },
      { name: 'ctaLink', label: 'Primary Button Link', type: 'text' },
      { name: 'secondaryCtaText', label: 'Secondary Button Text', type: 'text' },
      { name: 'secondaryCtaLink', label: 'Secondary Button Link', type: 'text' },
      { name: 'bgImage', label: 'Background Image', type: 'image' }
    ],
    defaultProps: {
      badge: "Tucson's Rated #1 Electrician",
      title: "Legendary Electrical Services for Tucson & Phoenix",
      subtitle: "Licensed, bonded, and insured team of expert electricians delivering VoltGuard™ safety audits and maximum power reliability.",
      ctaText: "GET A FAST QUOTE",
      ctaLink: "#contact",
      secondaryCtaText: "VOLTGUARD™ AUDIT",
      secondaryCtaLink: "#services",
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
        { name: 'img', label: 'Service Image', type: 'image' },
        { name: 'icon', label: 'Icon (Home, Building2, Zap, ShieldCheck)', type: 'text' },
        { name: 'linkText', label: 'Link Text', type: 'text' },
        { name: 'link', label: 'Link URL', type: 'text' }
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
        { name: 'img', label: 'Avatar Image', type: 'image' }
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
      { name: 'address', label: 'Address', type: 'text' },
      { name: 'hours', label: 'Hours', type: 'textarea' },
      { name: 'navHeading', label: 'Nav Column Heading', type: 'text' },
      { name: 'footerNav', label: 'Footer Nav Links', type: 'array', arrayFields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'href', label: 'Link', type: 'text' },
      ]},
      { name: 'servicesHeading', label: 'Services Column Heading', type: 'text' },
      { name: 'footerServices', label: 'Services List', type: 'array', arrayFields: [
        { name: 'label', label: 'Service', type: 'text' },
      ]},
      { name: 'contactHeading', label: 'Contact Column Heading', type: 'text' },
      { name: 'legalLinks', label: 'Legal Links', type: 'array', arrayFields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'href', label: 'Link', type: 'text' },
      ]},
    ],
    defaultProps: {
      businessName: "VOLT VIKINGS",
      tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
      description: "Tucson's premier local electrical contractor service. Providing residential, commercial, and specialty services with legendary safety standards.",
      licensing: "AZ ROC #341258 | Licensed, Bonded & Insured",
      phone: "(520) 555-0199",
      email: "dispatch@voltvikings.com",
      address: "Tucson - Phoenix Area, AZ",
      hours: "Mon - Sat: 7AM - 7PM\nSun: Emergency Only",
      navHeading: "QUICK NAV",
      footerNav: [
        { label: "Home", href: "#" },
        { label: "Services", href: "#services" },
        { label: "Viking Journey", href: "#process" },
        { label: "Testimonials", href: "#reviews" },
        { label: "Map Corridor", href: "#map" },
      ],
      servicesHeading: "SERVICES",
      footerServices: [
        { label: "Residential Electrician" },
        { label: "Commercial Contracting" },
        { label: "Panel Upgrades (200A)" },
        { label: "EV Level-2 Fast Chargers" },
        { label: "VoltGuard™ Home Safety Audits" },
      ],
      contactHeading: "CORRIDOR CONTACT",
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    }
  }
};
