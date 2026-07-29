// Schema data for the precisebuilding block family.
// Kept out of precisebuilding.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

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
