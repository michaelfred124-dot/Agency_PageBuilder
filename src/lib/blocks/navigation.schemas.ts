// Schema data for the navigation block family.
// Kept out of navigation.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const NAV_SCHEMAS = {
  FloatingPillNav: {
    description: "Modern glassmorphism floating pill header with logo, navigation links, and CTA button.",
    fields: [
      { name: 'brandName', label: 'Brand Name', type: 'text' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'buttonText', label: 'CTA Button Text', type: 'text' },
      { name: 'buttonLink', label: 'CTA Button Link', type: 'text' },
      { name: 'links', label: 'Nav Links', type: 'array', arrayFields: [
        { name: 'label', label: 'Link Label', type: 'text' },
        { name: 'href', label: 'Link URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      brandName: "AURA STUDIO",
      phone: "(555) 234-5678",
      buttonText: "Book Appointment",
      buttonLink: "#contact",
      links: [
        { label: "Home", href: "#" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Reviews", href: "#reviews" }
      ]
    }
  },

  CorporateTopNav: {
    description: "2-tier corporate header with top contact info bar, main logo, nav links, and quote button.",
    fields: [
      { name: 'topNotice', label: 'Top Notice Bar Text', type: 'text' },
      { name: 'email', label: 'Direct Email', type: 'text' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'brandName', label: 'Company Name', type: 'text' },
      { name: 'tagline', label: 'Company Subtitle', type: 'text' },
      { name: 'ctaText', label: 'Main CTA Button Text', type: 'text' },
      { name: 'ctaLink', label: 'Main CTA Button Link', type: 'text' },
      { name: 'links', label: 'Nav Links', type: 'array', arrayFields: [
        { name: 'label', label: 'Link Label', type: 'text' },
        { name: 'href', label: 'Link URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      topNotice: "⚡ 24/7 Emergency Service Available Across the Metro Area",
      email: "info@company.com",
      phone: "1-800-555-0199",
      brandName: "APEX SERVICES",
      tagline: "Commercial & Residential Experts",
      ctaText: "Request Free Estimate",
      ctaLink: "#contact",
      links: [
        { label: "Home", href: "#" },
        { label: "Services", href: "#services" },
        { label: "Why Us", href: "#why-us" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" }
      ]
    }
  },

  LuxuryCenteredNav: {
    description: "Elegant serif centered navigation header for luxury brands, dining, and photo studios.",
    fields: [
      { name: 'brandName', label: 'Brand Name', type: 'text' },
      { name: 'tagline', label: 'Tagline Below Brand', type: 'text' },
      { name: 'ctaText', label: 'Right Action Text', type: 'text' },
      { name: 'ctaLink', label: 'Right Action Link', type: 'text' },
      { name: 'links', label: 'Centered Links', type: 'array', arrayFields: [
        { name: 'label', label: 'Link Label', type: 'text' },
        { name: 'href', label: 'Link URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      brandName: "MAISON DE ÉLÉGANCE",
      tagline: "PARIS · NEW YORK · LOS ANGELES",
      ctaText: "Reserve Table",
      ctaLink: "#reserve",
      links: [
        { label: "Story", href: "#story" },
        { label: "Menu", href: "#menu" },
        { label: "Atmosphere", href: "#atmosphere" },
        { label: "Private Events", href: "#events" },
        { label: "Contact", href: "#contact" }
      ]
    }
  },

  BrutalistNav: {
    description: "High-contrast neo-brutalist navigation header with bold black borders and status pill.",
    fields: [
      { name: 'brandName', label: 'Brand Name', type: 'text' },
      { name: 'statusText', label: 'Live Status Pill Text', type: 'text' },
      { name: 'ctaText', label: 'Button Text', type: 'text' },
      { name: 'ctaLink', label: 'Button Link', type: 'text' },
      { name: 'links', label: 'Nav Links', type: 'array', arrayFields: [
        { name: 'label', label: 'Link Label', type: 'text' },
        { name: 'href', label: 'Link URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      brandName: "VOLT // STUDIO",
      statusText: "🟢 OPEN TODAY",
      ctaText: "GET STARTED 🚀",
      ctaLink: "#contact",
      links: [
        { label: "WORK", href: "#work" },
        { label: "SERVICES", href: "#services" },
        { label: "PROCESS", href: "#process" },
        { label: "PRICING", href: "#pricing" }
      ]
    }
  }
};
