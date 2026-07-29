// Schema data for the pawspamper block family.
// Kept out of pawspamper.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const PP_SCHEMAS: Record<string, any> = {
  PPHero: { description: 'Pet spa teal-to-gradient hero', fields: [{ name: 'title', label: 'Title', type: 'textarea' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'bgImage', label: 'Background Image URL', type: 'text' }], defaultProps: { title: 'Your Dog Deserves\nThe Very Best.', subtitle: 'Cage-free grooming in a calm spa environment.', bgImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070' } },
  PPEthos: { description: 'Pet spa value pillars with icons', fields: [{ name: 'features', label: 'Features', type: 'array', arrayFields: [{ name: 'iconName', label: 'Icon Name', type: 'text' }, { name: 'title', label: 'Title', type: 'text' }, { name: 'desc', label: 'Description', type: 'textarea' }] }], defaultProps: { features: [] } },
  PPBook: { description: 'Teal booking split section', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'subtitle', label: 'Subtitle', type: 'text' }, { name: 'image', label: 'Photo URL', type: 'text' }], defaultProps: { title: "Book Your Pup's Appointment", subtitle: 'Spots fill up fast.', image: '' } },
  PPTestimonials: { description: 'Cream background pet owner reviews', fields: [{ name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [{ name: 'text', label: 'Review', type: 'textarea' }, { name: 'author', label: 'Author', type: 'text' }, { name: 'rating', label: 'Rating (1-5)', type: 'text' }] }], defaultProps: { testimonials: [] } },
  PPFindUs: { description: 'Location split with contact info', fields: [{ name: 'address', label: 'Address', type: 'text' }, { name: 'cityState', label: 'City, State', type: 'text' }, { name: 'phone', label: 'Phone', type: 'text' }, { name: 'email', label: 'Email', type: 'text' }, { name: 'image', label: 'Location Photo URL', type: 'text' }], defaultProps: { address: '531 Barkley Ave', cityState: 'Austin, TX', phone: '(512) 555-0183', email: 'hello@pawsandpamper.com', image: '' } },
  PPFooter: { description: 'Teal footer', fields: [{ name: 'text', label: 'Footer Text', type: 'text' }], defaultProps: { text: '© 2026 Paws & Pamper Pet Spa' } },
};
