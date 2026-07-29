// Schema data for the ecommerce block family.
// Kept out of ecommerce.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const EC_SCHEMAS = {
  ProductGrid: {
    description: "A grid of products with images, prices, and buy buttons.",
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { name: 'products', label: 'Products', type: 'array', arrayFields: [
        { name: 'name', label: 'Product Name', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' },
        { name: 'image', label: 'Product Image URL', type: 'text' },
        { name: 'buttonText', label: 'Button Text', type: 'text' }
      ]}
    ],
    defaultProps: {
      title: "Featured Products",
      subtitle: "Shop our latest collection",
      products: [
        { name: "Premium Widget", price: "$49.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", buttonText: "Add to Cart" },
        { name: "Signature Collection", price: "$89.99", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop", buttonText: "Add to Cart" },
        { name: "Essential Kit", price: "$29.99", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop", buttonText: "Add to Cart" }
      ]
    }
  },
  PricingTable: {
    description: "A pricing table for subscriptions or digital products.",
    fields: [
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { name: 'plans', label: 'Pricing Plans', type: 'array', arrayFields: [
        { name: 'name', label: 'Plan Name', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' },
        { name: 'features', label: 'Features (comma separated)', type: 'text' },
        { name: 'buttonText', label: 'Button Text', type: 'text' },
        { name: 'isPopular', label: 'Is Popular? (true/false)', type: 'text' }
      ]}
    ],
    defaultProps: {
      title: "Simple Pricing",
      subtitle: "Choose the plan that's right for you",
      plans: [
        { name: "Basic", price: "$9/mo", features: "1 User, 5GB Storage, Basic Support", buttonText: "Get Started", isPopular: "false" },
        { name: "Pro", price: "$29/mo", features: "5 Users, 50GB Storage, Priority Support, Analytics", buttonText: "Get Started", isPopular: "true" },
        { name: "Enterprise", price: "$99/mo", features: "Unlimited Users, 500GB Storage, 24/7 Support, Custom Integrations", buttonText: "Contact Us", isPopular: "false" }
      ]
    }
  }
};
