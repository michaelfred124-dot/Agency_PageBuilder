// Schema data for the solene block family.
// Kept out of solene.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const SE_SCHEMAS = {
  SEHero: {
    description: "Solène Boutique Hero",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'textarea' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'button1Text', label: 'Primary Button Text', type: 'text' },
      { name: 'button1Link', label: 'Primary Button Link', type: 'text' },
      { name: 'button2Text', label: 'Secondary Button Text', type: 'text' },
      { name: 'button2Link', label: 'Secondary Button Link', type: 'text' },
      { name: 'image', label: 'Background Image', type: 'text' }
    ],
    defaultProps: {
      tagline: "New Collection — Spring 2026",
      title: "Objects made\nto be lived with.",
      subtitle: "Curated home goods and gifts from independent makers across the Pacific Northwest.",
      button1Text: "Shop the Collection",
      button1Link: "/work/solene-boutique/shop",
      button2Text: "Meet Our Makers",
      button2Link: "/work/solene-boutique/about",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80"
    }
  },
  SESocial: {
    description: "Solène Stats/Social Proof",
    fields: [
      { name: 'stats', label: 'Stats Array', type: 'array', arrayFields: [
        { name: 'stat', label: 'Stat', type: 'text' },
        { name: 'label', label: 'Label', type: 'text' }
      ]}
    ],
    defaultProps: {
      stats: [
        { stat: '350+', label: 'Products' },
        { stat: '80+', label: 'Independent Makers' },
        { stat: '12,000+', label: 'Happy Homes' },
        { stat: '4.9 Stars', label: '890 Reviews' },
      ]
    }
  },
  SERooms: {
    description: "Shop by Room Gallery",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'rooms', label: 'Rooms Array', type: 'array', arrayFields: [
        { name: 'name', label: 'Room Name', type: 'text' },
        { name: 'photo', label: 'Photo URL', type: 'text' },
        { name: 'link', label: 'Link URL', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "Browse",
      title: "Find your perfect piece",
      rooms: [
        { name: 'Living Room', photo: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=560&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Kitchen', photo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=560&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Bedroom', photo: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=560&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Workspace', photo: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=560&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Gift Ideas', photo: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=560&q=80', link: '/work/solene-boutique/shop' },
      ]
    }
  },
  SEProducts: {
    description: "Featured Products Grid",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'linkText', label: 'Link Text', type: 'text' },
      { name: 'linkUrl', label: 'Link URL', type: 'text' },
      { name: 'products', label: 'Products Array', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'maker', label: 'Maker', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' },
        { name: 'photo', label: 'Photo URL', type: 'text' },
        { name: 'link', label: 'Product Link', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "Just In",
      title: "New Arrivals",
      linkText: "View All",
      linkUrl: "/work/solene-boutique/shop",
      products: [
        { name: 'Handthrown Ceramic Mug', maker: 'Kiln Studio', price: '$42', photo: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Linen Throw Blanket', maker: 'Thread & Loom', price: '$128', photo: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Beeswax Taper Candles (Set of 4)', maker: 'Pinery Co.', price: '$24', photo: 'https://images.unsplash.com/photo-1602607863001-e5da79a9e1e4?w=600&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Walnut Serving Board', maker: 'Pacific Grain', price: '$88', photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Pressed Wildflower Print', maker: 'Meadow Press', price: '$65', photo: 'https://images.unsplash.com/photo-1490750967868-88df5691cc53?w=600&q=80', link: '/work/solene-boutique/shop' },
        { name: 'Cotton Market Bag', maker: 'Coastal Fiber', price: '$38', photo: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', link: '/work/solene-boutique/shop' },
      ]
    }
  },
  SEMakers: {
    description: "About the Makers Section",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'desc1', label: 'Description 1', type: 'textarea' },
      { name: 'desc2', label: 'Description 2', type: 'textarea' },
      { name: 'bullets', label: 'Bullets (comma separated)', type: 'text' },
      { name: 'linkText', label: 'Link Text', type: 'text' },
      { name: 'linkUrl', label: 'Link URL', type: 'text' },
      { name: 'image', label: 'Image URL', type: 'text' }
    ],
    defaultProps: {
      tagline: "Our Standard",
      title: "We only carry what we believe in.",
      desc1: "Every maker in our shop has been visited in person. We sit in their studios, understand their process, and only say yes when we'd be proud to have their work in our own homes.",
      desc2: "We don't list thousands of products. We list the ones that matter.",
      bullets: "Small-batch production only,Sustainable natural materials,Fair wages throughout the supply chain",
      linkText: "Meet Our Makers",
      linkUrl: "/work/solene-boutique/about",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
    }
  },
  SETestimonials: {
    description: "Solène Testimonials Grid",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'testimonials', label: 'Testimonials Array', type: 'array', arrayFields: [
        { name: 'text', label: 'Text', type: 'textarea' },
        { name: 'author', label: 'Author', type: 'text' },
        { name: 'location', label: 'Location', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "Reviews",
      title: "From happy homes",
      testimonials: [
        { text: "Finally a shop where everything has a story. Bought three gifts here and every recipient asked where I found them.", author: "Meredith L.", location: "Portland" },
        { text: "The ceramics I ordered arrived better than pictured. Beautifully packaged, clearly made with care.", author: "James P.", location: "Seattle" },
        { text: "Refreshing to shop somewhere that isn't just curated aesthetics — these products genuinely last.", author: "Claire T.", location: "San Francisco" },
      ]
    }
  },
  SECta: {
    description: "Solène Final CTA",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' },
      { name: 'buttonLink', label: 'Button Link', type: 'text' }
    ],
    defaultProps: {
      title: "Discover objects worth keeping.",
      subtitle: "New arrivals added weekly. Free shipping on orders $75+.",
      buttonText: "Shop the Spring Collection",
      buttonLink: "/work/solene-boutique/shop"
    }
  }
};
