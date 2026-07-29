// Schema data for the maison block family.
// Kept out of maison.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const MB_SCHEMAS: Record<string, any> = {
  MBHero: {
    description: 'Editorial full-height boutique hero',
    fields: [
      { name: 'headline', label: 'Headline (\\n = line break)', type: 'textarea' },
      { name: 'sub', label: 'Subtitle', type: 'textarea' },
      { name: 'ctaText', label: 'Primary CTA Text', type: 'text' },
      { name: 'secondaryText', label: 'Secondary CTA Text', type: 'text' },
      { name: 'badge', label: 'Badge Text', type: 'text' },
      { name: 'bgImage', label: 'Background Image URL', type: 'text' },
    ],
    defaultProps: {
      headline: 'Dressed for\nyour story.',
      sub: 'Curated collections for women who live intentionally. New arrivals every Thursday.',
      ctaText: 'Shop New Arrivals',
      secondaryText: 'Explore Lookbook',
      badge: 'New Collection · Spring 2025',
      bgImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2070&q=80',
    },
  },
  MBAbout: {
    description: 'Split image / story section',
    fields: [
      { name: 'eyebrow', label: 'Eyebrow Label', type: 'text' },
      { name: 'headline', label: 'Headline (\\n = line break)', type: 'textarea' },
      { name: 'body', label: 'Body Text', type: 'textarea' },
      { name: 'ctaText', label: 'CTA Text', type: 'text' },
      { name: 'image', label: 'Image URL', type: 'text' },
    ],
    defaultProps: {
      eyebrow: 'Our Story',
      headline: 'More than a boutique.\nA way of life.',
      body: 'Founded in 2018, Maison was built on the belief that getting dressed should feel joyful — not overwhelming. We source only from makers who share our commitment to quality, ethics, and lasting style over passing trends.',
      ctaText: 'Meet the Founders',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=2070&q=80',
    },
  },
  MBCollections: {
    description: 'Editorial 3-column collection grid',
    fields: [
      { name: 'eyebrow', label: 'Eyebrow', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'collections', label: 'Collections', type: 'array', arrayFields: [
        { name: 'label', label: 'Collection Name', type: 'text' },
        { name: 'sub', label: 'Subtext', type: 'text' },
        { name: 'image', label: 'Image URL', type: 'text' },
      ]},
    ],
    defaultProps: {
      eyebrow: 'Shop',
      title: 'Current Collections',
      collections: [
        { label: 'New Arrivals', sub: '24 pieces', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80' },
        { label: 'Essentials', sub: 'Year-round staples', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80' },
        { label: 'Sale', sub: 'Up to 40% off', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80' },
      ],
    },
  },
  MBQuote: {
    description: 'Full-width espresso pull quote',
    fields: [
      { name: 'quote', label: 'Quote Text', type: 'textarea' },
      { name: 'attribution', label: 'Attribution', type: 'text' },
    ],
    defaultProps: {
      quote: 'Style is a way of saying who you are without having to speak.',
      attribution: '— Rachel Zoe',
    },
  },
  MBTestimonials: {
    description: 'Minimal 3-column customer reviews on sand',
    fields: [
      { name: 'eyebrow', label: 'Eyebrow', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'rating', label: 'Rating (1-5)', type: 'text' },
        { name: 'text', label: 'Review', type: 'textarea' },
      ]},
    ],
    defaultProps: {
      eyebrow: 'Our Customers',
      title: 'They love it here.',
      reviews: [
        { name: 'Claire B.', rating: 5, text: "I discovered Maison two years ago and haven't shopped anywhere else since. The quality is impeccable and the team actually knows fashion." },
        { name: 'Nadia S.', rating: 5, text: "The curation here is unlike anything I've seen locally. Every piece feels like it was chosen with purpose. My wardrobe has completely transformed." },
        { name: 'Taylor M.', rating: 5, text: 'Ordered online and everything arrived beautifully packaged. Sizing was perfect and the fabric quality is way above the price point.' },
      ],
    },
  },
  MBNewsletter: {
    description: 'Sage green email newsletter signup',
    fields: [
      { name: 'headline', label: 'Headline', type: 'text' },
      { name: 'sub', label: 'Subtitle', type: 'textarea' },
      { name: 'placeholder', label: 'Input Placeholder', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' },
      { name: 'fine', label: 'Fine Print', type: 'text' },
    ],
    defaultProps: {
      headline: 'Be the first to know.',
      sub: 'New arrivals, private events, and styling tips — straight to your inbox.',
      placeholder: 'Your email address',
      buttonText: 'Subscribe',
      fine: 'No spam, ever. Unsubscribe anytime.',
    },
  },
  MBFooter: {
    description: 'Minimal 4-column sand footer',
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'copyright', label: 'Copyright', type: 'text' },
    ],
    defaultProps: {
      businessName: 'Maison Boutique',
      tagline: 'Intentional style. Lasting quality.',
      copyright: '© 2025 Maison Boutique. All rights reserved.',
      shop: ['New Arrivals', 'Essentials', 'Sale', 'Lookbook'],
      company: ['Our Story', 'Sustainability', 'Press', 'Careers'],
      support: ['Sizing Guide', 'Shipping & Returns', 'FAQ', 'Contact Us'],
    },
  },
};
