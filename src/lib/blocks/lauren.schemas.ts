// Schema data for the lauren block family.
// Kept out of lauren.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

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
