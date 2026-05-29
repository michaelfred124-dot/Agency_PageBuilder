import { SectionData } from './blocks';

export const TEMPLATES: Record<string, SectionData[]> = {
  northwood: [
    {
      id: "nw-hero-1",
      type: "NWHero",
      props: {
        title: "Local coffee.\nMade for your mornings.",
        subtitle: "Handcrafted drinks, fresh bites, and good vibes in the heart of our community.",
        bgImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "nw-ethos-1",
      type: "NWEthos",
      props: {
        features: [
          { iconName: 'Coffee', title: 'Small Batch', desc: 'Roasted in small batches for quality and consistency.' },
          { iconName: 'MapPin', title: 'Ethically Sourced', desc: 'We partner with farmers who care about people and the planet.' },
          { iconName: 'Smartphone', title: 'Made Locally', desc: 'Roasted, packed, and shipped right here in our community.' },
          { iconName: 'User', title: 'Community Driven', desc: "We're proud to support local events and give back where we live." }
        ]
      }
    },
    {
      id: "nw-findus-1",
      type: "NWFindUs",
      props: {
        address: "123 Main Street",
        cityState: "Yourtown, ST 12345",
        phone: "(555) 123-4567",
        email: "hello@northwoodcoffee.co",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
      }
    },
    {
      id: "nw-menu-1",
      type: "NWMenu",
      props: {
        coffee: [
          { name: 'Latte', price: '$4.75' },
          { name: 'Cappuccino', price: '$4.50' },
          { name: 'Mocha', price: '$5.25' },
          { name: 'Cold Brew', price: '$4.75' },
          { name: 'Pour Over', price: '$5.50' },
        ],
        food: [
          { name: 'Avocado Toast', price: '$8.50' },
          { name: 'Breakfast Sandwich', price: '$7.50' },
          { name: 'Yogurt Parfait', price: '$6.25' },
          { name: 'Almond Croissant', price: '$4.25' },
          { name: 'Chocolate Chip Cookie', price: '$3.25' },
        ],
        seasonal: [
          { name: 'Honey Lavender Latte', price: '$5.75' },
          { name: 'Iced Maple Oat Latte', price: '$5.75' },
          { name: 'Strawberry Matcha', price: '$5.50' },
          { name: 'Peach Cold Brew', price: '$5.25' },
        ]
      }
    },
    {
      id: "nw-orderahead-1",
      type: "NWOrderAhead",
      props: {
        title: "Order Ahead",
        subtitle: "Order in advance and pick up when it's ready. More time for what matters.",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "nw-community-1",
      type: "NWCommunity",
      props: {
        testimonials: [
          { text: "Best coffee in town! The staff is amazing and the vibes are unmatched.", author: "Sarah K.", rating: '5' },
          { text: "I come here every morning. Consistent, delicious, and always made with care.", author: "Michael T.", rating: '5' },
          { text: "Love supporting a local business that gives so much back to the community.", author: "Jessica L.", rating: '5' }
        ]
      }
    },
    {
      id: "nw-footer-1",
      type: "NWFooter",
      props: {
        text: "© 2026 Northwood Coffee Co. All rights reserved. Locally roasted in the Pacific Northwest."
      }
    }
  ],
  greenscape: [
    {
      id: "gs-hero-1",
      type: "GSHero",
      props: {
        title: "Expert Landscaping\n& Design",
        subtitle: "Transforming outdoor spaces with sustainable and beautiful landscaping solutions.",
        bgImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: "gs-services-1",
      type: "GSServices",
      props: {
        services: [
          { iconName: 'Shovel', title: 'Lawn Care', desc: 'Expert maintenance for every season.' },
          { iconName: 'Trees', title: 'Landscape Design', desc: 'Custom designs tailored to you.' },
          { iconName: 'Leaf', title: 'Garden & Planting', desc: 'Beautiful plants and expert care.' },
          { iconName: 'Droplets', title: 'Hardscaping', desc: 'Patios, walkways, and walls.' },
          { iconName: 'ShieldCheck', title: 'Irrigation', desc: 'Efficient water-saving systems.' },
          { iconName: 'Trash2', title: 'Cleanup', desc: 'Yard cleanup and debris removal.' }
        ]
      }
    },
    {
      id: "gs-about-1",
      type: "GSAbout",
      props: {
        title: "Rooted in our community. \nCommitted to excellence.",
        desc: "Greenscape Landscaping is a locally owned and operated business serving Sunnyvale and surrounding areas. We take pride in our work, our reliability, and the relationships we build with our clients.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "gs-projects-1",
      type: "GSProjects",
      props: {
        title: "Projects we're proud of",
        projects: [
          { title: 'Backyard Retreat', loc: 'Sunnyvale, CA', img: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80' },
          { title: 'Modern Front Yard', loc: 'Mountain View, CA', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?auto=format&fit=crop&w=800&q=80' },
          { title: 'Elegant Pathway', loc: 'Cupertino, CA', img: 'https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?auto=format&fit=crop&w=800&q=80' },
          { title: 'Drought-Tolerant', loc: 'Santa Clara, CA', img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=800&q=80' }
        ]
      }
    },
    {
      id: "gs-cta-1",
      type: "GSCta",
      props: {
        title: "Let's build something \nbeautiful together.",
        subtitle: "Contact us today for your free quote and start your transition to a more beautiful life outdoors."
      }
    },
    {
      id: "gs-footer-1",
      type: "GSFooter",
      props: {
        text: "© 2026 Greenscape Landscaping. Licensed & Insured. Serving the Bay Area."
      }
    }
  ],
  lauren: [
    {
      id: "lw-hero-1",
      type: "LWHero",
      props: {
        title: "Capturing authentic\nmoments.",
        subtitle: "Documentary-style photography for weddings, couples, and brands.",
        bgImage: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop"
      }
    },
    {
      id: "lw-about-1",
      type: "LWAbout",
      props: {
        title: "Hi, I'm Lauren.\nNice to meet you.",
        desc: "I'm a natural light photographer based in Colorado. I believe in capturing real moments and creating images that feel honest, emotive, and timeless. When I'm not behind the camera, you'll find me hiking, traveling, or drinking way too much coffee.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
      }
    },
    {
      id: "lw-services-1",
      type: "LWServices",
      props: {
        services: [
          { iconName: 'User', title: 'Portraits', desc: 'Natural, authentic portraits that capture who you are.' },
          { iconName: 'Star', title: 'Weddings', desc: 'Documenting your day with heart and intention.' },
          { iconName: 'Heart', title: 'Couples', desc: 'Honest moments. Real connection. Beautiful light.' },
          { iconName: 'Trees', title: 'Landscapes', desc: 'Scenic landscapes and travel imagery that inspires.' }
        ]
      }
    },
    {
      id: "lw-portfolio-1",
      type: "LWPortfolio",
      props: {
        images: [
          { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', title: 'Weddings' },
          { url: 'https://images.unsplash.com/photo-1520850838323-133289a2e340?q=80&w=2070&auto=format&fit=crop', title: 'Portraits' },
          { url: 'https://images.unsplash.com/photo-1511285560929-86b16002067d?q=80&w=2070&auto=format&fit=crop', title: 'Couples' },
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', title: 'Landscapes' }
        ]
      }
    },
    {
      id: "lw-testimonials-1",
      type: "LWTestimonials",
      props: {
        testimonials: [
          { text: "Lauren made us feel so comfortable and captured our day perfectly. We'll cherish these photos forever.", author: "Jessica & Mark" },
          { text: "The photos are STUNNING. She has such a gift for capturing natural moments and beautiful light.", author: "Amy & Taylor" },
          { text: "Professional, kind, and insanely talented. We had the best experience and the results speak for themselves.", author: "Michael R." }
        ]
      }
    },
    {
      id: "lw-cta-1",
      type: "LWCta",
      props: {
        title: "Ready to book your session?",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "lw-footer-1",
      type: "LWFooter",
      props: {
        text: "© 2026 Lauren Wilson Photography"
      }
    }
  ],
  brighter_solar: [
    {
      id: "bs-header-1",
      type: "BSHeader",
      props: {
        businessName: "BRIGHTER",
        navLinks: ["HOME", "SERVICES", "ABOUT US", "REVIEWS", "PRICING", "CONTACT"]
      }
    },
    {
      id: "bs-hero-1",
      type: "BSHero",
      props: {
        headline: "MORE SUN.\nMORE POWER.\nMORE SAVINGS.",
        subheading: "CLEAN PANELS. MAX POWER.",
        description: "Professional solar panel cleaning that removes dirt, dust & grime so your system performs at its best.",
        backgroundImage: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: "bs-stats-1",
      type: "BSStats",
      props: {
        stats: [
          { value: "500+", label: "Homes & Businesses\nServed", icon: "Users" },
          { value: "5+", label: "Years of Local\nExperience", icon: "Calendar" },
          { value: "100%", label: "Satisfaction\nGuaranteed", icon: "Shield" },
          { value: "Eco-Friendly", label: "Pure Water Technology\nSafe for Your System", icon: "Leaf" }
        ]
      }
    },
    {
      id: "bs-services-1",
      type: "BSServices",
      props: {
        heading: "Complete Solar Panel Cleaning Solutions",
        services: [
          { title: "Residential Cleaning", icon: "Home", desc: "Keep your home system running at peak performance with routine cleanings.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
          { title: "Commercial Cleaning", icon: "Building2", desc: "Maximize energy production and savings for your business with professional service.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
          { title: "Ground Mount Cleaning", icon: "Search", desc: "We safely clean all types of ground mounted solar installations.", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" },
          { title: "Bird Proofing", icon: "ShieldCheck", desc: "Protect your panels from birds and pests with our proofing solutions.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" }
        ]
      }
    },
    {
      id: "bs-steps-1",
      type: "BSSteps",
      props: {
        heading: "Clean Panels.\nBetter Results.",
        steps: [
          { title: "Inspect", desc: "We inspect your system to check buildup and performance.", icon: "Search" },
          { title: "Pure Clean", desc: "We use pure water technology to gently remove all dirt & grime.", icon: "Droplets" },
          { title: "Rinse", desc: "Spot-free rinse leaves your panels clean and streak-free.", icon: "Sparkles" },
          { title: "Maximize", desc: "Enjoy up to 25% more energy and lower electric bills.", icon: "TrendingUp" }
        ]
      }
    },
    {
      id: "bs-testimonials-1",
      type: "BSTestimonials",
      props: {
        heading: "Real Reviews. Real Results.",
        reviews: [
          { name: "Sarah M.", role: "Homeowner", quote: "My system is producing way more power after the cleaning. Super professional and easy to work with!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
          { name: "David L.", role: "Business Owner", quote: "We schedule regular cleanings for all our buildings. The difference in output is incredible.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
          { name: "James R.", role: "Homeowner", quote: "Great communication, on-time, and our panels have never looked better. Highly recommend!", img: "https://randomuser.me/api/portraits/men/67.jpg" }
        ]
      }
    },
    {
      id: "bs-pricing-1",
      type: "BSPricing",
      props: {
        heading: "Simple Pricing. Powerful Results.",
        plans: [
          { title: "Residential", price: "99", icon: "Home", features: ["Up to 20 Solar Panels", "Pure Water Cleaning", "System Inspection", "Streak-Free Guarantee"] },
          { title: "Commercial", price: "299", icon: "Building2", isPopular: true, features: ["Up to 100 Solar Panels", "Pure Water Cleaning", "System Inspection", "Priority Scheduling"] },
          { title: "Ground Mount", price: "199", icon: "Search", features: ["Up to 50 Panels", "Pure Water Cleaning", "Undercarriage Cleaning", "System Inspection"] }
        ]
      }
    },
    {
      id: "bs-cta-1",
      type: "BSCTA",
      props: {
        heading: "Dirty Panels Cost You Money.\nLet's Change That.",
        buttonText: "GET A FREE QUOTE"
      }
    },
    {
      id: "bs-footer-1",
      type: "BSFooter",
      props: {
        businessName: "BRIGHTER"
      }
    }
  ],
  blank: []
};
