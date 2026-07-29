// Schema data for the meridian block family.
// Kept out of meridian.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const MP_SCHEMAS: Record<string, any> = {
  MPHero: { description: 'Real estate hero with navy overlay', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Find Your Perfect\nHome in the Valley.', subtitle: 'Local expertise, white-glove service.', bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073' } },
  MPStats: { description: 'Slate blue stats bar', fields: [{ name: 'stats', label: 'Stats', type: 'array', arrayFields: [{ name: 'value', label: 'Value', type: 'text' }, { name: 'label', label: 'Label', type: 'text' }] }], defaultProps: { stats: [] } },
  MPServices: { description: 'Services grid on cream background', fields: [{ name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { services: [] } },
  MPListings: { description: 'Featured property listings grid', fields: [{ name: 'title', label: 'Section Title', type: 'text' }, { name: 'projects', label: 'Listings', type: 'array', arrayFields: [{ name: 'title', label: 'Price & Beds', type: 'text' }, { name: 'loc', label: 'Location', type: 'text' }, { name: 'img', label: 'Image URL', type: 'text' }] }], defaultProps: { title: 'Featured Listings', projects: [] } },
  MPTestimonials: { description: 'Green-accented client testimonials', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review Text', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }] }], defaultProps: { testimonials: [] } },
  MPCta: { description: 'Navy CTA with green button', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }], defaultProps: { title: "Ready to Buy, Sell, or Invest?\nLet's talk.", subtitle: 'Schedule a free strategy call today.' } },
  MPFooter: { description: 'Real estate footer with disclaimer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Meridian Properties. Equal Housing Opportunity.' } },
};
