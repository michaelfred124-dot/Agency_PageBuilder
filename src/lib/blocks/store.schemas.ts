// Schema data for the store block family.
// Kept out of store.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const ST_SCHEMAS = {
  StoreProducts: {
    description: 'Live product grid from the site\'s native store — real inventory, Stripe checkout.',
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { name: 'buttonText', label: 'Buy Button Text', type: 'text' },
      { name: 'accentColor', label: 'Accent Color (hex)', type: 'text' },
      { name: 'backgroundColor', label: 'Background Color (hex)', type: 'text' },
      { name: 'textColor', label: 'Text Color (hex)', type: 'text' }
    ],
    defaultProps: {
      title: 'Shop Our Products',
      subtitle: 'Secure checkout powered by Stripe',
      buttonText: 'Buy Now',
      accentColor: '#111111',
      backgroundColor: '#ffffff',
      textColor: '#111111'
    }
  }
};
