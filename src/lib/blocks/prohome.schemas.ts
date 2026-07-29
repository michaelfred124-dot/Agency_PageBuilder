// Schema data for the prohome block family.
// Kept out of prohome.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const PH_SCHEMAS: Record<string, any> = {
  PHHeader: {
    description: 'ProHome sticky header with phone CTA',
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
    ],
    defaultProps: { businessName: 'ProHome Services', phone: '(555) 123-4567', navLinks: ['Services', 'About', 'Reviews', 'Contact'] },
  },
  PHHero: {
    description: 'Full-bleed hero with phone + book CTAs',
    fields: [
      { name: 'headline', label: 'Headline (\\n = line break)', type: 'textarea' },
      { name: 'sub', label: 'Subtitle', type: 'textarea' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'ctaText', label: 'Book CTA Text', type: 'text' },
      { name: 'bgImage', label: 'Background Image', type: 'image' },
      { name: 'badges', label: 'Trust Badges', type: 'array', arrayFields: [
        { name: 'text', label: 'Badge Text', type: 'text' },
      ]},
    ],
    defaultProps: {
      headline: 'Fast, Reliable Home Services\nYou Can Trust',
      sub: 'Serving the greater metro area since 2005. Licensed, bonded, and insured professionals ready 24/7.',
      phone: '(555) 123-4567',
      ctaText: 'Book a Service Call',
      bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2070&q=80',
      badges: ['Licensed & Bonded', '5-Star Rated', '24/7 Emergency', 'Free Estimates'],
    },
  },
  PHStats: {
    description: 'Gold stats bar with 4 key numbers',
    fields: [
      { name: 'stats', label: 'Stats', type: 'array', arrayFields: [
        { name: 'value', label: 'Value', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' },
      ]},
    ],
    defaultProps: {
      stats: [
        { value: '18+', label: 'Years in Business' },
        { value: '12,400+', label: 'Customers Served' },
        { value: '4.9★', label: 'Average Rating' },
        { value: '< 2hrs', label: 'Avg Response Time' },
      ],
    },
  },
  PHServices: {
    description: 'Service card grid on cream background',
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'services', label: 'Services', type: 'array', arrayFields: [
        { name: 'icon', label: 'Icon (Lucide name e.g. Wrench)', type: 'text' },
        { name: 'name', label: 'Service Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
      ]},
    ],
    defaultProps: {
      title: 'Our Services',
      subtitle: "Full-spectrum home services from the valley's most trusted crew.",
      services: [
        { icon: 'Wrench', name: 'Plumbing', desc: 'Leaks, clogs, water heaters, pipe repair, and remodels.' },
        { icon: 'Zap', name: 'Electrical', desc: 'Panel upgrades, outlets, lighting, and EV charger installs.' },
        { icon: 'Wind', name: 'HVAC', desc: 'AC repair, furnace tune-up, duct cleaning, and new systems.' },
        { icon: 'Droplets', name: 'Drain Cleaning', desc: 'Hydro-jetting, camera inspection, and sewer line service.' },
        { icon: 'Flame', name: 'Water Heaters', desc: 'Tank & tankless install, repair, and annual service.' },
        { icon: 'Shield', name: '24/7 Emergency', desc: 'Round-the-clock dispatch for urgent home crises.' },
      ],
    },
  },
  PHProcess: {
    description: '3-step process on white background',
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'steps', label: 'Steps', type: 'array', arrayFields: [
        { name: 'num', label: 'Step Number (e.g. 01)', type: 'text' },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'body', label: 'Body', type: 'textarea' },
      ]},
    ],
    defaultProps: {
      title: 'How It Works',
      steps: [
        { num: '01', heading: 'Call or Book Online', body: 'Reach us any time via phone, text, or our online booking form. No hold times — we answer fast.' },
        { num: '02', heading: 'We Dispatch a Pro', body: 'A vetted, uniformed technician arrives on-time with all the tools for your service type.' },
        { num: '03', heading: 'Job Done Right', body: "We fix it properly, clean up after ourselves, and follow up to make sure you're satisfied." },
      ],
    },
  },
  PHTestimonials: {
    description: 'Customer reviews 2-column grid',
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [
        { name: 'name', label: 'Customer Name', type: 'text' },
        { name: 'service', label: 'Service Type', type: 'text' },
        { name: 'rating', label: 'Rating (1-5)', type: 'text' },
        { name: 'text', label: 'Review Text', type: 'textarea' },
      ]},
    ],
    defaultProps: {
      title: 'What Our Customers Say',
      reviews: [
        { name: 'Sandra M.', service: 'Plumbing Repair', rating: 5, text: 'Showed up within 90 minutes and had my burst pipe fixed in under an hour. Absolutely saved us during the holidays.' },
        { name: 'Derek H.', service: 'HVAC Tune-Up', rating: 5, text: "The technician was polite, knowledgeable, and didn't try to upsell me on anything I didn't need. Rare to find that." },
        { name: 'Priya K.', service: 'Electrical Panel', rating: 5, text: 'Upgraded my old panel to 200A with zero hiccups. Clean work, passed inspection first try. Will use again.' },
        { name: 'Tom G.', service: 'Water Heater Install', rating: 5, text: 'Same-day install of a new tankless unit. Fast, clean, and they explained everything. Outstanding.' },
      ],
    },
  },
  PHCTA: {
    description: 'Dark green CTA with prominent phone number',
    fields: [
      { name: 'headline', label: 'Headline', type: 'text' },
      { name: 'sub', label: 'Subtext', type: 'textarea' },
      { name: 'phone', label: 'Phone Number', type: 'text' },
      { name: 'ctaText', label: 'Secondary CTA Text', type: 'text' },
    ],
    defaultProps: {
      headline: 'Need a Pro Today?',
      sub: 'We dispatch within the hour. No diagnostic fees. Just honest service from real professionals.',
      phone: '(555) 123-4567',
      ctaText: 'Schedule Online',
    },
  },
  PHFooter: {
    description: 'Dark footer with contact info, links, and hours',
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'address', label: 'Address', type: 'text' },
      { name: 'copyright', label: 'Copyright Text', type: 'text' },
    ],
    defaultProps: {
      businessName: 'ProHome Services',
      phone: '(555) 123-4567',
      email: 'info@prohome.com',
      address: '123 Main St, Your City, ST 12345',
      links: ['Services', 'About Us', 'Reviews', 'Contact', 'Emergency Service'],
      copyright: '© 2025 ProHome Services. All rights reserved.',
    },
  },
};
