// Schema data for the emberandrye block family.
// Kept out of emberandrye.tsx (a React client component module) so server code —
// notably the AI generation pipeline — can read it. See AI_ONBOARDING_PLAN.md.

export const ER_SCHEMAS = {
  ERHero: {
    description: "Cinematic Ember & Rye Hero",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'button1Text', label: 'Primary Button Text', type: 'text' },
      { name: 'button1Link', label: 'Primary Button Link', type: 'text' },
      { name: 'button2Text', label: 'Secondary Button Text', type: 'text' },
      { name: 'button2Link', label: 'Secondary Button Link', type: 'text' },
      { name: 'footerText', label: 'Footer Text', type: 'text' },
      { name: 'bgImage', label: 'Background Image', type: 'text' },
    ],
    defaultProps: {
      tagline: "Wood-Fired · Dry-Aged · River North, Chicago",
      title: "Ember & Rye",
      subtitle: "Where fire meets finesse.",
      button1Text: "Reserve a Table",
      button1Link: "/work/ember-and-rye/contact",
      button2Text: "View the Menu",
      button2Link: "/work/ember-and-rye/menu",
      footerText: "OPEN TUESDAY – SUNDAY · DINNER FROM 5PM",
      bgImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
    }
  },
  ERSocial: {
    description: "Social proof strip for Ember & Rye",
    fields: [
      { name: 'stats', label: 'Stats List (comma separated)', type: 'text' }
    ],
    defaultProps: {
      stats: "James Beard Nominee 2024,1200°F Wood-Fired Grill,28-Day Dry-Aged Prime,#1 Steakhouse in Chicago"
    }
  },
  ERMenu: {
    description: "Tonight's Menu Preview",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'starters', label: 'Starters', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' }
      ]},
      { name: 'sides', label: 'Sides', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' }
      ]},
      { name: 'steaks', label: 'Steaks', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' }
      ]},
      { name: 'menuLink', label: 'Full Menu Link', type: 'text' },
    ],
    defaultProps: {
      tagline: "Tonight's Kitchen",
      title: "A Selection from Tonight's Menu",
      starters: [
        { name: 'Beef Tartare', desc: 'Hand-cut prime beef, quail egg, cornichon, grilled crostini', price: '$22' },
        { name: 'Bone Marrow Gratin', desc: 'Roasted marrow, herb gremolata, pickled shallots, toast points', price: '$18' },
        { name: 'Oysters on the Half Shell', desc: 'Daily selection, mignonette, cocktail sauce', price: 'Market' },
      ],
      sides: [
        { name: 'Truffle Mac & Cheese', price: '$14' },
        { name: 'Duck Fat Potatoes', price: '$12' },
        { name: 'Creamed Spinach', price: '$11' },
      ],
      steaks: [
        { name: 'Prime Ribeye 14oz', desc: 'Bone-in, wood-fired, compound butter', price: '$72' },
        { name: 'New York Strip 12oz', desc: 'USDA Prime, classic preparation', price: '$58' },
        { name: 'Filet Mignon 8oz', desc: 'Center-cut tenderloin, bordelaise sauce', price: '$64' },
        { name: 'Tomahawk 32oz', desc: '45-day aged, tableside presentation — for two', price: '$145' },
      ],
      menuLink: "/work/ember-and-rye/menu"
    }
  },
  ERGrill: {
    description: "The Grill Feature",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'textarea' },
      { name: 'desc', label: 'Description', type: 'textarea' },
      { name: 'bullets', label: 'Bullets (comma separated)', type: 'text' },
      { name: 'image', label: 'Image', type: 'text' },
    ],
    defaultProps: {
      tagline: "Our Craft",
      title: "1200°F. That's where\nflavor lives.",
      desc: "Our Argentine parilla was custom-built in Buenos Aires and shipped to River North in 2018. Every steak is cooked over real hardwood — no gas, no shortcuts. The temperature, the wood, and the time are the only variables.",
      bullets: "28-day dry-aging room on premises,James Beard-nominated Executive Chef,Sommelier-curated wine list of 200+ bottles",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
    }
  },
  ERTestimonials: {
    description: "Ember & Rye Testimonials",
    fields: [
      { name: 'testimonials', label: 'Testimonials', type: 'array', arrayFields: [
        { name: 'text', label: 'Text', type: 'textarea' },
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'location', label: 'Location', type: 'text' }
      ]}
    ],
    defaultProps: {
      testimonials: [
        { text: 'The best steak I\'ve had outside of a private dining club. The tomahawk for two was a religious experience.', name: 'Marcus R.', location: 'Chicago' },
        { text: 'Perfect for our anniversary. Service was impeccable, wine pairings were inspired, and that bone marrow...', name: 'Sarah K.', location: 'Oak Park' },
        { text: 'We\'ve been to every top steakhouse in Chicago. Ember & Rye is in a different category.', name: 'David L.', location: 'Naperville' },
      ]
    }
  },
  ERCta: {
    description: "Ember & Rye Reservations CTA",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' },
      { name: 'buttonLink', label: 'Button Link', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'text' }
    ],
    defaultProps: {
      title: "Your table is waiting.",
      subtitle: "Tuesday through Sunday · Dinner from 5pm",
      buttonText: "Reserve Online",
      buttonLink: "/work/ember-and-rye/contact",
      phone: "or call (312) 555-0193"
    }
  }
};
