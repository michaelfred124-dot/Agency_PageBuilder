// Schema data for the restaurant block family.
// Kept out of restaurant.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const RESTAURANT_SCHEMAS = {
  RHero: {
    description: "Elegant serif hero section for fine dining and modern restaurants.",
    fields: [
      { name: 'badge', label: 'Badge Text', type: 'text' },
      { name: 'title', label: 'Title (e.g. Where Every Meal Tells a Story)', type: 'textarea' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'primaryBtnText', label: 'Primary Button Text', type: 'text' },
      { name: 'secondaryBtnText', label: 'Secondary Button Text', type: 'text' },
      { name: 'bgImage', label: 'Background Image URL', type: 'text' }
    ],
    defaultProps: {
      badge: "Seasonal Menu Now Available",
      title: "Where Every Meal Tells a Story",
      description: "Modern Italian cuisine crafted with locally-sourced ingredients, served in a warm and welcoming atmosphere. Join us for an unforgettable dining experience.",
      primaryBtnText: "Make a Reservation",
      secondaryBtnText: "View Our Menu",
      bgImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop"
    }
  },
  RFeatures: {
    description: "Highlights key features of the dining experience.",
    fields: [
      { name: 'tag', label: 'Tagline/Label', type: 'text' },
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'features', label: 'Features List', type: 'array', arrayFields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' }
      ]}
    ],
    defaultProps: {
      tag: "The Experience",
      title: "What Makes Us Special",
      features: [
        { title: "Farm to Table", desc: "We partner with local farms to bring you the freshest seasonal ingredients. Our menu changes with the harvest, ensuring every dish celebrates what's best right now." },
        { title: "Handmade Pasta", desc: "Our pasta is made fresh daily using traditional techniques passed down through generations. Taste the difference that love and time make in every bite." },
        { title: "Curated Wine List", desc: "Our sommelier has assembled an exceptional collection of Italian and local wines, each chosen to complement our dishes and enhance your dining experience." }
      ]
    }
  },
  RMenuPreview: {
    description: "Curated menu categories showing name, description, and price.",
    fields: [
      { name: 'tag', label: 'Tagline/Label', type: 'text' },
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'subtitle', label: 'Section Subtitle', type: 'textarea' },
      { name: 'btnText', label: 'Button Text', type: 'text' },
      { name: 'category1Title', label: 'Category 1 Title', type: 'text' },
      { name: 'category1Items', label: 'Category 1 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Item Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' }
      ]},
      { name: 'category2Title', label: 'Category 2 Title', type: 'text' },
      { name: 'category2Items', label: 'Category 2 Items', type: 'array', arrayFields: [
        { name: 'name', label: 'Item Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' }
      ]}
    ],
    defaultProps: {
      tag: "Our Menu",
      title: "A Taste of What Awaits",
      subtitle: "A curated selection of our most beloved dishes. Visit us to experience the full menu.",
      btnText: "View Full Menu",
      category1Title: "Antipasti",
      category1Items: [
        { name: "Burrata Caprese", desc: "Creamy burrata, heirloom tomatoes, fresh basil, aged balsamic", price: "$18" },
        { name: "Calamari Fritti", desc: "Crispy calamari, lemon aioli, marinara, fresh herbs", price: "$16" },
        { name: "Charcuterie Board", desc: "Selection of cured meats, artisan cheeses, house pickles, grilled bread", price: "$24" }
      ],
      category2Title: "Pasta & Risotto",
      category2Items: [
        { name: "Tagliatelle Bolognese", desc: "Slow-braised beef and pork ragù, parmigiano-reggiano", price: "$26" },
        { name: "Lobster Ravioli", desc: "Maine lobster, brown butter, sage, lemon zest", price: "$34" },
        { name: "Wild Mushroom Risotto", desc: "Arborio rice, seasonal mushrooms, truffle oil, parmesan", price: "$28" }
      ]
    }
  },
  RAtmosphere: {
    description: "Atmosphere gallery displaying the dining space.",
    fields: [
      { name: 'tag', label: 'Tagline/Label', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'img1', label: 'Image 1 (Large)', type: 'text' },
      { name: 'img2', label: 'Image 2', type: 'text' },
      { name: 'img3', label: 'Image 3', type: 'text' },
      { name: 'img4', label: 'Image 4', type: 'text' },
      { name: 'img5', label: 'Image 5', type: 'text' },
      { name: 'img6', label: 'Image 6', type: 'text' }
    ],
    defaultProps: {
      tag: "The Atmosphere",
      title: "A Warm Welcome",
      subtitle: "Step into a space designed for connection, celebration, and memorable moments.",
      img1: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
      img2: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      img3: "https://images.unsplash.com/photo-1414235077428-338989a2e210?q=80&w=800&auto=format&fit=crop",
      img4: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
      img5: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
      img6: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&auto=format&fit=crop"
    }
  },
  RChef: {
    description: "Chef spotlight section with image, bio details, and personal quote.",
    fields: [
      { name: 'tag', label: 'Tagline/Label', type: 'text' },
      { name: 'name', label: 'Chef Name', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'bio1', label: 'Bio Paragraph 1', type: 'textarea' },
      { name: 'bio2', label: 'Bio Paragraph 2', type: 'textarea' },
      { name: 'quote', label: 'Chef Quote', type: 'textarea' },
      { name: 'image', label: 'Chef Image URL', type: 'text' }
    ],
    defaultProps: {
      tag: "Meet the Chef",
      name: "Marco Benedetti",
      title: "Executive Chef & Owner",
      bio1: "Born in Tuscany and trained in Rome's finest kitchens, Chef Marco brings over 25 years of culinary expertise to Osteria Bella. His philosophy is simple: start with exceptional ingredients, honor traditional techniques, and add a touch of modern creativity.",
      bio2: "After years working in Michelin-starred restaurants across Europe, Marco moved to the Pacific Northwest, drawn by the region's incredible produce and sustainable farming practices.",
      quote: "Food is about connection. Every dish I create is meant to bring people together around the table.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
    }
  },
  RReviews: {
    description: "Restaurant testimonials and open reviews grid.",
    fields: [
      { name: 'tag', label: 'Tagline/Label', type: 'text' },
      { name: 'title', label: 'Section Title', type: 'text' },
      { name: 'reviews', label: 'Reviews', type: 'array', arrayFields: [
        { name: 'author', label: 'Author Name', type: 'text' },
        { name: 'text', label: 'Review Text', type: 'textarea' },
        { name: 'source', label: 'Source (e.g. Google Review)', type: 'text' }
      ]}
    ],
    defaultProps: {
      tag: "Reviews",
      title: "What Our Guests Say",
      reviews: [
        { author: "Sarah M.", text: "The lobster ravioli was transcendent. Every bite was perfectly balanced. This is now our go-to spot for special occasions.", source: "OpenTable Review" },
        { author: "James & Linda R.", text: "The atmosphere is romantic without being stuffy. Staff was incredibly knowledgeable about the wine pairings. Highly recommend!", source: "Google Review" },
        { author: "Michael T.", text: "We celebrated our anniversary here and it exceeded all expectations. The homemade pasta rivals what we had in Italy. Chef Marco is a true artist.", source: "Yelp Review" }
      ]
    }
  },
  RHoursInfo: {
    description: "Standard details block displaying location, hours, and contact details.",
    fields: [
      { name: 'address', label: 'Address', type: 'textarea' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'hours', label: 'Hours List', type: 'array', arrayFields: [
        { name: 'day', label: 'Day Range', type: 'text' },
        { name: 'time', label: 'Hours', type: 'text' }
      ]}
    ],
    defaultProps: {
      address: "456 Main Street, Portland, OR 97205",
      phone: "(503) 555-0147",
      email: "ciao@osteriabella.com",
      hours: [
        { day: "Tue - Thu", time: "5pm - 10pm" },
        { day: "Fri - Sat", time: "5pm - 11pm" },
        { day: "Sunday", time: "4pm - 9pm" },
        { day: "Monday", time: "Closed" }
      ]
    }
  },
  RCta: {
    description: "Fine dining call to action block.",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { name: 'btnText', label: 'Button Text', type: 'text' },
      { name: 'bgImage', label: 'Background Image URL', type: 'text' }
    ],
    defaultProps: {
      title: "Ready to Join Us?",
      subtitle: "Book your table today and experience modern Italian cuisine at its finest.",
      btnText: "Make a Reservation",
      bgImage: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2000&auto=format&fit=crop"
    }
  },
  RFooter: {
    description: "Detailed premium restaurant page footer.",
    fields: [
      { name: 'businessName', label: 'Restaurant Name', type: 'text' },
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'desc', label: 'Description', type: 'textarea' },
      { name: 'address', label: 'Address', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' }
    ],
    defaultProps: {
      businessName: "Osteria Bella",
      tagline: "Modern Italian",
      desc: "Modern Italian cuisine crafted with love, served in a space designed for memorable moments.",
      address: "456 Main Street, Portland, OR 97205",
      phone: "(503) 555-0147",
      email: "ciao@osteriabella.com"
    }
  }
};
