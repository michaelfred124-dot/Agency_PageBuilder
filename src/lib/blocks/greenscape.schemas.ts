// Schema data for the greenscape block family.
// Kept out of greenscape.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

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
          img: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&w=800&q=80",
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
          img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80",
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
