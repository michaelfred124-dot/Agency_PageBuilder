// Schema data for the spotless block family.
// Kept out of spotless.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const SC_SCHEMAS: Record<string, any> = {
  SCHero: { description: 'Home cleaning teal hero with gradient overlay', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'A Spotless Home.\nFresh Every Time.', subtitle: 'Reliable, thorough, and trustworthy home cleaning.', bgImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070' } },
  SCStats: { description: 'Dark teal stats bar', fields: [{ name: 'stats', label: 'Stats', type: 'array', arrayFields: [{ name: 'value', label: 'Value', type: 'text' }, { name: 'label', label: 'Label', type: 'text' }] }], defaultProps: { stats: [] } },
  SCServices: { description: 'Cleaning service cards on light teal background', fields: [{ name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { services: [] } },
  SCAbout: { description: 'About split with photo and trust badges', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: 'Family-owned. Locally trusted.', desc: '', image: '' } },
  SCTestimonials: { description: 'Homeowner reviews with teal left border', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review Text', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }, { name: 'rating', label: 'Rating (1-5)', type: 'text' }] }], defaultProps: { testimonials: [] } },
  SCCta: { description: 'Teal CTA with free quote offer', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }], defaultProps: { title: 'Get your free quote today.\nFirst clean is 15% off.', subtitle: 'Book online in 2 minutes.' } },
  SCFooter: { description: 'Dark teal footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Spotless Home Co.' } },
};
