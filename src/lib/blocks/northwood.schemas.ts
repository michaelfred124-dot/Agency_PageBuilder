// Schema data for the northwood block family.
// Kept out of northwood.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const NW_SCHEMAS = {
  NWEthos: {
    description: "Northwood Features/Ethos",
    fields: [
      {
        name: "features",
        label: "Features",
        type: "array",
        arrayFields: [
          { name: "title", label: "Title", type: "text" },
          { name: "desc", label: "Description", type: "textarea" },
          {
            name: "iconName",
            label: "Icon (Coffee/MapPin/Smartphone/User)",
            type: "text",
          },
        ],
      },
    ],
    defaultProps: {
      features: [
        {
          iconName: "Coffee",
          title: "Small Batch",
          desc: "Roasted in small batches for quality and consistency.",
        },
        {
          iconName: "MapPin",
          title: "Ethically Sourced",
          desc: "We partner with farmers who care about people and the planet.",
        },
        {
          iconName: "Smartphone",
          title: "Made Locally",
          desc: "Roasted, packed, and shipped right here in our community.",
        },
        {
          iconName: "User",
          title: "Community Driven",
          desc: "We're proud to support local events and give back where we live.",
        },
      ],
    },
  },
  NWMenu: {
    description: "Northwood Coffee Menu",
    fields: [
      {
        name: "coffee",
        label: "Coffee",
        type: "array",
        arrayFields: [
          { name: "name", label: "Name", type: "text" },
          { name: "price", label: "Price", type: "text" },
        ],
      },
      {
        name: "food",
        label: "Food",
        type: "array",
        arrayFields: [
          { name: "name", label: "Name", type: "text" },
          { name: "price", label: "Price", type: "text" },
        ],
      },
      {
        name: "seasonal",
        label: "Seasonal",
        type: "array",
        arrayFields: [
          { name: "name", label: "Name", type: "text" },
          { name: "price", label: "Price", type: "text" },
        ],
      },
    ],
    defaultProps: {
      coffee: [
        { name: "Latte", price: "$4.75" },
        { name: "Cappuccino", price: "$4.50" },
        { name: "Mocha", price: "$5.25" },
        { name: "Cold Brew", price: "$4.75" },
        { name: "Pour Over", price: "$5.50" },
      ],
      food: [
        { name: "Avocado Toast", price: "$8.50" },
        { name: "Breakfast Sandwich", price: "$7.50" },
        { name: "Yogurt Parfait", price: "$6.25" },
        { name: "Almond Croissant", price: "$4.25" },
        { name: "Chocolate Chip Cookie", price: "$3.25" },
      ],
      seasonal: [
        { name: "Honey Lavender Latte", price: "$5.75" },
        { name: "Iced Maple Oat Latte", price: "$5.75" },
        { name: "Strawberry Matcha", price: "$5.50" },
        { name: "Peach Cold Brew", price: "$5.25" },
      ],
    },
  },
  NWFindUs: {
    description: "Northwood Coffee Find Us section",
    fields: [
      { name: "address", label: "Address", type: "text" },
      { name: "cityState", label: "City State Zip", type: "text" },
      { name: "phone", label: "Phone", type: "text" },
      { name: "email", label: "Email", type: "text" },
      { name: "image", label: "Location Photo", type: "image" },
    ],
    defaultProps: {
      address: "123 Main Street",
      cityState: "Yourtown, ST 12345",
      phone: "(555) 123-4567",
      email: "hello@northwoodcoffee.co",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    },
  },
  NWOrderAhead: {
    description: "Northwood Order Ahead Call to Action",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      { name: "image", label: "Featured Image", type: "image" },
    ],
    defaultProps: {
      title: "Order Ahead",
      subtitle:
        "Order in advance and pick up when it's ready. More time for what matters.",
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
    },
  },
  NWCommunity: {
    description: "Northwood Community & Testimonials",
    fields: [
      { name: "tagline", label: "Tagline", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      {
        name: "communityImages",
        label: "Community Photos",
        type: "array",
        arrayFields: [
          { name: "url", label: "Photo", type: "image" },
          { name: "alt", label: "Alt text", type: "text" },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        type: "array",
        arrayFields: [
          { name: "text", label: "Quote", type: "textarea" },
          { name: "author", label: "Author", type: "text" },
          { name: "rating", label: "Rating (1-5)", type: "text" },
        ],
      },
    ],
    defaultProps: {
      tagline: "Stronger together",
      heading: "Our Community",
      subtitle: "We're more than just coffee. We're a gathering place, a creative space, and a proud supporter of local artists and makers.",
      communityImages: [
        { url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop", alt: "Cafe culture" },
        { url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2074&auto=format&fit=crop", alt: "Latte art" },
        { url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop", alt: "Cafe vibe" },
        { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop", alt: "Pastry" },
      ],
      testimonials: [
        {
          text: "Best coffee in town! The staff is amazing and the vibes are unmatched.",
          author: "Sarah K.",
          rating: "5",
        },
        {
          text: "I come here every morning. Consistent, delicious, and always made with care.",
          author: "Michael T.",
          rating: "5",
        },
        {
          text: "Love supporting a local business that gives so much back to the community.",
          author: "Jessica L.",
          rating: "5",
        },
      ],
    },
  },
  NWFooter: {
    description: "Northwood Footer",
    fields: [
      { name: "businessName", label: "Business Name", type: "text" },
      { name: "address", label: "Address", type: "text" },
      { name: "phone", label: "Phone", type: "text" },
      { name: "email", label: "Email", type: "text" },
      { name: "text", label: "Footer Copyright Text", type: "textarea" },
      { name: "instagram", label: "Instagram URL", type: "text" },
      { name: "facebook", label: "Facebook URL", type: "text" },
      { name: "twitter", label: "Twitter/X URL", type: "text" },
    ],
    defaultProps: {
      businessName: "Northwood Coffee Co.",
      address: "123 Main Street, Yourtown ST 12345",
      phone: "(555) 123-4567",
      email: "hello@northwoodcoffee.co",
      text: "© 2026 Northwood Coffee Co. All rights reserved. Locally roasted in the Pacific Northwest.",
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
};
