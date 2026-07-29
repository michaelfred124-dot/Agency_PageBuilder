// Schema data for the brighter-solar block family.
// Kept out of brighter-solar.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const BS_SCHEMAS = {
  BSHeader: {
    description: "Brighter Solar Header",
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'ctaText', label: 'CTA Button Text', type: 'text' },
    ],
    defaultProps: {
      businessName: "BRIGHTER",
      tagline: "SOLAR CLEANING",
      ctaText: "GET A FREE QUOTE",
      navLinks: ["HOME", "SERVICES", "ABOUT US", "REVIEWS", "PRICING", "CONTACT"]
    }
  },
  BSHero: {
    description: "Brighter Solar Hero Section",
    fields: [
      { name: 'headline', label: 'Headline', type: 'textarea' },
      { name: 'subheading', label: 'Subheading', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'primaryButton', label: 'Primary Button Text', type: 'text' },
      { name: 'secondaryButton', label: 'Secondary Button Text', type: 'text' },
      { name: 'backgroundImage', label: 'Background Image', type: 'image' }
    ],
    defaultProps: {
      headline: "MORE SUN.\nMORE POWER.\nMORE SAVINGS.",
      subheading: "CLEAN PANELS. MAX POWER.",
      description: "Professional solar panel cleaning that removes dirt, dust & grime so your system performs at its best.",
      primaryButton: "GET A FREE QUOTE",
      secondaryButton: "SEE OUR SERVICES",
      backgroundImage: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80"
    }
  },
  BSStats: {
    description: "Brighter Solar Stats Bar",
    fields: [
      { name: 'stats', label: 'Stats', type: 'array', arrayFields: [
        { name: 'value', label: 'Value', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'icon', label: 'Icon', type: 'text' }
      ]}
    ],
    defaultProps: {
      stats: [
        { value: "500+", label: "Homes & Businesses\nServed", icon: "Users" },
        { value: "5+", label: "Years of Local\nExperience", icon: "Calendar" },
        { value: "100%", label: "Satisfaction\nGuaranteed", icon: "Shield" },
        { value: "Eco-Friendly", label: "Pure Water Technology\nSafe for Your System", icon: "Leaf" }
      ]
    }
  },
  BSServices: {
    description: "Brighter Solar Services Grid",
    fields: [
      { name: 'heading', label: 'Heading', type: 'text' },
      { name: 'services', label: 'Services', type: 'array', arrayFields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'img', label: 'Image URL', type: 'text' },
        { name: 'icon', label: 'Icon (Home, Building2, Search, ShieldCheck)', type: 'text' }
      ]}
    ],
    defaultProps: {
      heading: "Complete Solar Panel Cleaning Solutions",
      services: [
        { title: "Residential Cleaning", icon: "Home", desc: "Keep your home system running at peak performance with routine cleanings.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
        { title: "Commercial Cleaning", icon: "Building2", desc: "Maximize energy production and savings for your business with professional service.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
        { title: "Ground Mount Cleaning", icon: "Search", desc: "We safely clean all types of ground mounted solar installations.", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" },
        { title: "Bird Proofing", icon: "ShieldCheck", desc: "Protect your panels from birds and pests with our proofing solutions.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  },
  BSSteps: {
    description: "Brighter Solar How It Works",
    fields: [
      { name: 'heading', label: 'Heading', type: 'text' },
      { name: 'steps', label: 'Steps', type: 'array', arrayFields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'icon', label: 'Icon', type: 'text' }
      ]}
    ],
    defaultProps: {
      heading: "Clean Panels.\nBetter Results.",
      steps: [
        { title: "Inspect", desc: "We inspect your system to check buildup and performance.", icon: "Search" },
        { title: "Pure Clean", desc: "We use pure water technology to gently remove all dirt & grime.", icon: "Droplets" },
        { title: "Rinse", desc: "Spot-free rinse leaves your panels clean and streak-free.", icon: "Sparkles" },
        { title: "Maximize", desc: "Enjoy up to 25% more energy and lower electric bills.", icon: "TrendingUp" }
      ]
    }
  },
  BSTestimonials: {
    description: "Brighter Solar Testimonials",
    fields: [
      { name: 'heading', label: 'Heading', type: 'text' },
      { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'role', label: 'Role', type: 'text' },
        { name: 'quote', label: 'Quote', type: 'text' },
        { name: 'img', label: 'Avatar URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      heading: "Real Reviews. Real Results.",
      reviews: [
        { name: "Sarah M.", role: "Homeowner", quote: "My system is producing way more power after the cleaning. Super professional and easy to work with!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "David L.", role: "Business Owner", quote: "We schedule regular cleanings for all our buildings. The difference in output is incredible.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "James R.", role: "Homeowner", quote: "Great communication, on-time, and our panels have never looked better. Highly recommend!", img: "https://randomuser.me/api/portraits/men/67.jpg" }
      ]
    }
  },
  BSPricing: {
    description: "Brighter Solar Pricing Plans",
    fields: [
      { name: 'heading', label: 'Heading', type: 'text' },
      { name: 'plans', label: 'Plans', type: 'array', arrayFields: [
        { name: 'title', label: 'Plan Title', type: 'text' },
        { name: 'price', label: 'Starting Price', type: 'text' },
        { name: 'icon', label: 'Icon', type: 'text' },
        { name: 'features', label: 'Features (List manually in code for now)', type: 'text' }
      ]}
    ],
    defaultProps: {
      heading: "Simple Pricing. Powerful Results.",
      plans: [
        { title: "Residential", price: "99", icon: "Home", features: ["Up to 20 Solar Panels", "Pure Water Cleaning", "System Inspection", "Streak-Free Guarantee"] },
        { title: "Commercial", price: "299", icon: "Building2", isPopular: true, features: ["Up to 100 Solar Panels", "Pure Water Cleaning", "System Inspection", "Priority Scheduling"] },
        { title: "Ground Mount", price: "199", icon: "Search", features: ["Up to 50 Panels", "Pure Water Cleaning", "Undercarriage Cleaning", "System Inspection"] }
      ]
    }
  },
  BSCTA: {
    description: "Brighter Solar CTA block",
    fields: [
      { name: 'heading', label: 'Heading', type: 'textarea' },
      { name: 'buttonText', label: 'Button Text', type: 'text' }
    ],
    defaultProps: {
      heading: "Dirty Panels Cost You Money.\nLet's Change That.",
      buttonText: "GET A FREE QUOTE"
    }
  },
  BSFooter: {
    description: "Brighter Solar Footer",
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'email', label: 'Email Address', type: 'text' },
      { name: 'address', label: 'Service Area / Address', type: 'text' },
      { name: 'hours', label: 'Hours (use \\n for line breaks)', type: 'textarea' },
    ],
    defaultProps: {
      businessName: "BRIGHTER",
      tagline: "SOLAR CLEANING",
      description: "Professional solar panel cleaning services that help you get the most out of your investment.",
      phone: "(555) 123-4567",
      email: "info@brightersolar.com",
      address: "Serving Your Local Area",
      hours: "Mon - Sat: 7AM - 5PM\nSun: Closed"
    }
  }
};
