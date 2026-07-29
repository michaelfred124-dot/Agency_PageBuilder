// Schema data for the atelierhair block family.
// Kept out of atelierhair.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const AH_SCHEMAS: Record<string, any> = {
  AHHero: { description: 'Full-screen editorial hair salon hero', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Where Hair Becomes\nHigh Art.', subtitle: 'Precision cuts, lived-in color, and luxury treatments.', bgImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074' } },
  AHAbout: { description: 'Stylist bio with 50/50 split layout', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'desc', label: 'Description', type: 'textarea' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: "Hi, I'm Sofia.\nYour new favorite stylist.", desc: '', image: '' } },
  AHServices: { description: 'Service grid on blush background', fields: [{ name: 'services', label: 'Services', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { services: [] } },
  AHPortfolio: { description: 'Work portfolio photo grid', fields: [{ name: 'images', label: 'Images', type: 'array', arrayFields: [{ name: 'url', label: 'Image URL', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }] }], defaultProps: { images: [] } },
  AHTestimonials: { description: 'Dark client testimonials', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review Text', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }] }], defaultProps: { testimonials: [] } },
  AHCta: { description: 'Full-bleed booking CTA', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'image', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Ready for your best hair yet?', image: '' } },
  AHFooter: { description: 'Minimal dark footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Atelier Hair Studio · By appointment only' } },
};
