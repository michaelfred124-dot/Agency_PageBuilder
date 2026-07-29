// Schema data for the goldenthread block family.
// Kept out of goldenthread.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const GT_SCHEMAS: Record<string, any> = {
  GTHero: { description: 'Wedding planner romantic full-screen hero', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Your Dream Wedding,\nFlawlessly Executed.', subtitle: 'Luxury wedding planning for couples who want perfection.', bgImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070' } },
  GTAbout: { description: 'Planner bio with blush split layout', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: "Hi, I'm Claire.", desc: '', image: '' } },
  GTServices: { description: 'Service cards on champagne background', fields: [{ name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { services: [] } },
  GTPortfolio: { description: 'Wedding portfolio photo grid', fields: [{ name: 'images', label: 'Portfolio Images', type: 'array', arrayFields: [{ name: 'url', label: 'Image URL', type: 'text' }, { name: 'title', label: 'Caption', type: 'text' }] }], defaultProps: { images: [] } },
  GTTestimonials: { description: 'Couple testimonials on champagne background', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Quote', type: 'textarea' }, { name: 'author', label: 'Couple Name', type: 'text' }] }], defaultProps: { testimonials: [] } },
  GTCta: { description: 'Romantic full-bleed CTA with dark overlay', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'image', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Your perfect day starts with one conversation.', image: '' } },
  GTFooter: { description: 'Dark wedding planner footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 The Golden Thread Events' } },
};
