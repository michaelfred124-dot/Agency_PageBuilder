// Schema data for the easydoesit block family.
// Kept out of easydoesit.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const EDI_SCHEMAS = {
  EDIHeader: {
    description: "Easy Does It navigation header",
    fields: [
      { name: "businessName", label: "Business Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "text" },
      { name: "ctaText", label: "CTA Button Text", type: "text" },
    ],
    defaultProps: {
      businessName: "Easy Does It",
      phone: "(209) 304-7288",
      ctaText: "Get Quote",
    },
  },
  EDIHero: {
    description: "Easy Does It Hero Section",
    fields: [
      { name: "title", label: "Headline Text", type: "textarea" },
      { name: "subtitle", label: "Subtitle Text", type: "textarea" },
      { name: "image", label: "Right Image URL", type: "text" },
      { name: "badgeText", label: "Rating Badge Text", type: "text" },
    ],
    defaultProps: {
      title: "Your Car Is \nIn Great Hands \nWith Us",
      subtitle:
        "Experience the ultimate shine. Our professionals bring showroom quality directly to your driveway, using advanced techniques and premium products.",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070",
      badgeText: "#1 Rated in County",
    },
  },
  EDIServices: {
    description: "Easy Does It Services Overview & Process Flow",
    fields: [
      { name: "heading", label: "How It Works Heading", type: "text" },
      { name: "description", label: "How It Works Description", type: "textarea" },
    ],
    defaultProps: {
      heading: "How it Works",
      description:
        "Our approach is focused on delivering outstanding results while ensuring a smooth and hassle-free experience for you.",
    },
  },
  EDIPricing: {
    description: "Easy Does It 3-Tier Detailing Plans",
    fields: [
      { name: "title", label: "Section Title", type: "text" },
      { name: "plan1Name", label: "Plan 1 Name", type: "text" },
      { name: "plan1Price", label: "Plan 1 Price", type: "text" },
      { name: "plan2Name", label: "Plan 2 Name", type: "text" },
      { name: "plan2Price", label: "Plan 2 Price", type: "text" },
      { name: "plan3Name", label: "Plan 3 Name", type: "text" },
      { name: "plan3Price", label: "Plan 3 Price", type: "text" },
      { name: "bgImage", label: "Background Photo", type: "image" },
    ],
    defaultProps: {
      title: "Pick what fits you best",
      plan1Name: "Basic",
      plan1Price: "115",
      plan2Name: "Premium",
      plan2Price: "200",
      plan3Name: "Ultimate",
      plan3Price: "250",
      bgImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070",
    },
  },
  EDIFaq: {
    description: "Easy Does It FAQ Accordion",
    fields: [
      { name: "title", label: "Section Title", type: "text" },
      { name: "subtitle", label: "Section Subtitle", type: "textarea" },
    ],
    defaultProps: {
      title: "Frequently Asked Questions",
      subtitle:
        "Have questions? Our FAQ section has you covered with quick answers to common inquiries about our detailing services.",
    },
  },
  EDIGallery: {
    description: "Easy Does It Slider Image Carousels",
    fields: [
      { name: "title", label: "Section Title", type: "text" },
      { name: "subtitle", label: "Section Subtitle", type: "textarea" },
    ],
    defaultProps: {
      title: "Automotive Artistry",
      subtitle:
        "Browse our gallery of recent work. We treat every vehicle like a masterpiece, ensuring perfection down to the microscopic level.",
    },
  },
  EDIContact: {
    description: "Easy Does It Contact Details & Booking Form",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      { name: "phone", label: "Phone", type: "text" },
      { name: "email", label: "Email", type: "text" },
      { name: "serviceArea", label: "Service Area", type: "text" },
    ],
    defaultProps: {
      title: "Ready for a Showroom Shine?",
      subtitle:
        "Fill out the form below to request a quote or book an appointment. We'll get back to you within 15 minutes during business hours.",
      phone: "(209) 304-7288",
      email: "contact@easydoesit.com",
      serviceArea: "Amador County, CA",
    },
  },
  EDIFooter: {
    description: "Easy Does It Site Footer",
    fields: [
      { name: "phone", label: "Phone Number", type: "text" },
      { name: "email", label: "Email Address", type: "text" },
      { name: "address", label: "Location/Service Area", type: "text" },
    ],
    defaultProps: {
      phone: "(209) 304-7288",
      email: "contact@easydoesit.com",
      address: "Ione, CA (Amador County)",
    },
  },
};
