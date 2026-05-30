import type { SectionData } from './blocks';

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
  restaurant: [
    {
      id: "r-hero-1",
      type: "RHero",
      props: {
        badge: "Seasonal Menu Now Available",
        title: "Where Every Meal Tells a Story",
        description: "Modern Italian cuisine crafted with locally-sourced ingredients, served in a warm and welcoming atmosphere. Join us for an unforgettable dining experience.",
        primaryBtnText: "Make a Reservation",
        secondaryBtnText: "View Our Menu",
        bgImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop"
      }
    },
    {
      id: "r-features-1",
      type: "RFeatures",
      props: {
        tag: "The Experience",
        title: "What Makes Us Special",
        features: [
          { title: "Farm to Table", desc: "We partner with local farms to bring you the freshest seasonal ingredients. Our menu changes with the harvest, ensuring every dish celebrates what's best right now." },
          { title: "Handmade Pasta", desc: "Our pasta is made fresh daily using traditional techniques passed down through generations. Taste the difference that love and time make in every bite." },
          { title: "Curated Wine List", desc: "Our sommelier has assembled an exceptional collection of Italian and local wines, each chosen to complement our dishes and enhance your dining experience." }
        ]
      }
    },
    {
      id: "r-menu-preview-1",
      type: "RMenuPreview",
      props: {
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
    {
      id: "r-chef-1",
      type: "RChef",
      props: {
        tag: "Meet the Chef",
        name: "Marco Benedetti",
        title: "Executive Chef & Owner",
        bio1: "Born in Tuscany and trained in Rome's finest kitchens, Chef Marco brings over 25 years of culinary expertise to Osteria Bella. His philosophy is simple: start with exceptional ingredients, honor traditional techniques, and add a touch of modern creativity.",
        bio2: "After years working in Michelin-starred restaurants across Europe, Marco moved to the Pacific Northwest, drawn by the region's incredible produce and sustainable farming practices.",
        quote: "Food is about connection. Every dish I create is meant to bring people together around the table.",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
      }
    },
    {
      id: "r-reviews-1",
      type: "RReviews",
      props: {
        tag: "Reviews",
        title: "What Our Guests Say",
        reviews: [
          { author: "Sarah M.", text: "The lobster ravioli was transcendent. Every bite was perfectly balanced. This is now our go-to spot for special occasions.", source: "OpenTable Review" },
          { author: "James & Linda R.", text: "The atmosphere is romantic without being stuffy. Staff was incredibly knowledgeable about the wine pairings. Highly recommend!", source: "Google Review" },
          { author: "Michael T.", text: "We celebrated our anniversary here and it exceeded all expectations. The homemade pasta rivals what we had in Italy. Chef Marco is a true artist.", source: "Yelp Review" }
        ]
      }
    },
    {
      id: "r-cta-1",
      type: "RCta",
      props: {
        title: "Ready to Join Us?",
        subtitle: "Book your table today and experience modern Italian cuisine at its finest.",
        btnText: "Make a Reservation",
        bgImage: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2000"
      }
    },
    {
      id: "r-footer-1",
      type: "RFooter",
      props: {
        businessName: "Osteria Bella",
        tagline: "Modern Italian",
        desc: "Modern Italian cuisine crafted with love, served in a space designed for memorable moments.",
        address: "456 Main Street, Portland, OR 97205",
        phone: "(503) 555-0147",
        email: "ciao@osteriabella.com"
      }
    }
  ],
  voltvikings: [
    {
      id: "vv-header-1",
      type: "VVHeader",
      props: {
        businessName: "VOLT VIKINGS",
        tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
        phone: "(520) 555-0199",
        ctaText: "BOOK ONLINE",
        navLinks: ["HOME", "SERVICES", "JOURNEY", "REVIEWS", "CORRIDOR"]
      }
    },
    {
      id: "vv-hero-1",
      type: "VVHero",
      props: {
        badge: "Tucson's Rated #1 Electrician",
        title: "Legendary Electrical Services for Tucson & Phoenix",
        subtitle: "Licensed, bonded, and insured team of expert electricians delivering VoltGuard™ safety audits and maximum power reliability.",
        ctaText: "GET A FAST QUOTE",
        secondaryCtaText: "VOLTGUARD™ AUDIT",
        bgImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "vv-stats-1",
      type: "VVStats",
      props: {
        stats: [
          { value: "2,500+", label: "Projects\nCompleted", icon: "VikingShieldIcon" },
          { value: "5.0 Rating", label: "250+ Google\nReviews", icon: "Users" },
          { value: "VoltGuard™", label: "Home Safety\nTechnology", icon: "Zap" },
          { value: "Level-2 EV", label: "Fast Charger\nSpecialist", icon: "ShieldCheck" }
        ]
      }
    },
    {
      id: "vv-services-1",
      type: "VVServices",
      props: {
        title: "Tucson's Trusted Electrical Team",
        subtitle: "Explore our residential, commercial, and specialty electrical contracting services.",
        services: [
          { title: "Residential Electrician", icon: "Home", desc: "Lighting upgrades, panel replacements, troubleshooting, safety checks, and complete rewires.", img: "https://images.unsplash.com/photo-1558223190-184852c035be?q=80&w=800" },
          { title: "Commercial Contracting", icon: "Building2", desc: "High-voltage layout, tenant improvements, structural wiring, lighting systems, and service panels.", img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=800" },
          { title: "Smart Panel Upgrades", icon: "Zap", desc: "Transition your home's breaker panel to 200A. Maximize current safety and smart home compatibility.", img: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800" },
          { title: "EV Charger Installation", icon: "ShieldCheck", desc: "Expert wall connector level-2 charging box setups for Tesla, Rivian, and all modern electric vehicles.", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800" }
        ]
      }
    },
    {
      id: "vv-process-1",
      type: "VVProcess",
      props: {
        title: "Getting world class electrical services has never been easier",
        steps: [
          { title: "Get A Fast Quote", desc: "It’s never been easier. Just click the button and send us details of your project. We respond promptly.", icon: "Search" },
          { title: "Set A Schedule", desc: "Get work done at a time that suits you with fast and easy scheduling. We arrive right on time.", icon: "Calendar" },
          { title: "Sit Back & Relax", desc: "Our licensed, highly trained electricians handle everything safely. Get a legendary customer experience.", icon: "Shield" }
        ]
      }
    },
    {
      id: "vv-testimonials-1",
      type: "VVTestimonials",
      props: {
        title: "Legendary Service, Proven by Tucson Neighbors",
        reviews: [
          { name: "Carmine C.", role: "Retired Electrician", quote: "As a retired Electrician, I called Volt Vikings who I used previously on some HOAs I managed. They let you know when they will arrive, work extremely clean, and know their code inside and out. Excellent service and reasonable pricing.", img: "https://randomuser.me/api/portraits/men/44.jpg" },
          { name: "Glen T.", role: "Commercial Owner", quote: "I own a 29,000 sq ft commercial building and several apartments. For the past 5 years I have been calling Volt Vikings for all my electrical needs, from new equipment installs to complex troubleshooting. Qualified, competent crews every single time.", img: "https://randomuser.me/api/portraits/men/32.jpg" }
        ]
      }
    },
    {
      id: "vv-map-1",
      type: "VVMap",
      props: {
        title: "Legendary Electrical Services Throughout Tucson & Phoenix Area",
        desc: "No matter where you are, we've got your electrical needs covered. We provide rapid-response services across the region, giving everyone access to our highly experienced team. If you need electricians in Tucson, Mesa, Chandler, Tempe, or Phoenix, we are here for you!",
        mapIframeUrl: "https://snazzymaps.com/embed/717236"
      }
    },
    {
      id: "vv-cta-1",
      type: "VVCTA",
      props: {
        title: "Power Issues or Fast Project Upgrades?",
        subtitle: "Get a free online quote estimate or schedule an onsite consultation in seconds.",
        buttonText: "REQUEST ESTIMATE NOW"
      }
    },
    {
      id: "vv-footer-1",
      type: "VVFooter",
      props: {
        businessName: "VOLT VIKINGS",
        tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
        description: "Tucson's premier local electrical contractor service. Providing residential, commercial, and specialty services with legendary safety standards.",
        licensing: "AZ ROC #341258 | Licensed, Bonded & Insured",
        phone: "(520) 555-0199",
        email: "dispatch@voltvikings.com",
        address: "Tucson - Phoenix Area, AZ"
      }
    }
  ],
  blank: []
};

export const TEMPLATE_PAGES: Record<string, { name: string; slug: string; sections: SectionData[] }[]> = {
  restaurant: [
    {
      name: 'Home',
      slug: '/',
      sections: TEMPLATES.restaurant
    },
    {
      name: 'About',
      slug: '/about',
      sections: [
        {
          id: "r-hero-about",
          type: "RHero",
          props: {
            badge: "Our Story",
            title: "Born in Tuscany, Crafted in Portland",
            description: "Learn more about our heritage, our culinary philosophy, and the people behind Osteria Bella.",
            primaryBtnText: "Meet the Chef",
            secondaryBtnText: "View Gallery",
            bgImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop"
          }
        },
        {
          id: "r-chef-about",
          type: "RChef",
          props: {
            tag: "Meet the Chef",
            name: "Marco Benedetti",
            title: "Executive Chef & Owner",
            bio1: "Born in Tuscany and trained in Rome's finest kitchens, Chef Marco brings over 25 years of culinary expertise to Osteria Bella. His philosophy is simple: start with exceptional ingredients, honor traditional techniques, and add a touch of modern creativity.",
            bio2: "After years working in Michelin-starred restaurants across Europe, Marco moved to the Pacific Northwest, drawn by the region's incredible produce and sustainable farming practices.",
            quote: "Food is about connection. Every dish I create is meant to bring people together around the table.",
            image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
          }
        },
        {
          id: "r-features-about",
          type: "RFeatures",
          props: {
            tag: "Our Philosophy",
            title: "Excellence in Every Detail",
            features: [
              { title: "Honest Cooking", desc: "No pretension, just clean, classic Italian food executed with absolute precision." },
              { title: "Local Partnerships", desc: "We source our seafood from regional fishmongers and organic produce from local community co-ops." },
              { title: "Fine Hospitality", desc: "We believe dining is an art form. Our staff treats you like family from the moment you walk through our doors." }
            ]
          }
        },
        {
          id: "r-footer-about",
          type: "RFooter",
          props: {
            businessName: "Osteria Bella",
            tagline: "Modern Italian",
            desc: "Modern Italian cuisine crafted with love, served in a space designed for memorable moments.",
            address: "456 Main Street, Portland, OR 97205",
            phone: "(503) 555-0147",
            email: "ciao@osteriabella.com"
          }
        }
      ]
    },
    {
      name: 'Menu',
      slug: '/menu',
      sections: [
        {
          id: "r-hero-menu",
          type: "RHero",
          props: {
            badge: "Culinary Offerings",
            title: "Honoring Tradition, Welcoming Change",
            description: "Explore our dynamic menu of handmade pastas, artisanal starters, and curated wine pairings.",
            primaryBtnText: "Book Table",
            secondaryBtnText: "Wine List",
            bgImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000"
          }
        },
        {
          id: "r-menu-menu",
          type: "RMenuPreview",
          props: {
            tag: "Main Menu",
            title: "Dinner Menu",
            subtitle: "Available Tuesday through Sunday starting at 5:00 PM.",
            btnText: "",
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
        {
          id: "r-hours-menu",
          type: "RHoursInfo",
          props: {
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
        {
          id: "r-footer-menu",
          type: "RFooter",
          props: {
            businessName: "Osteria Bella",
            tagline: "Modern Italian",
            desc: "Modern Italian cuisine crafted with love, served in a space designed for memorable moments.",
            address: "456 Main Street, Portland, OR 97205",
            phone: "(503) 555-0147",
            email: "ciao@osteriabella.com"
          }
        }
      ]
    },
    {
      name: 'Reservations',
      slug: '/reservations',
      sections: [
        {
          id: "r-hero-reservations",
          type: "RHero",
          props: {
            badge: "Join Us",
            title: "Reserve Your Table",
            description: "We look forward to welcoming you to Osteria Bella. For parties larger than 6, please call us directly.",
            primaryBtnText: "Call Us Now",
            secondaryBtnText: "Private Events",
            bgImage: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=2000"
          }
        },
        {
          id: "r-hours-reservations",
          type: "RHoursInfo",
          props: {
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
        {
          id: "r-footer-reservations",
          type: "RFooter",
          props: {
            businessName: "Osteria Bella",
            tagline: "Modern Italian",
            desc: "Modern Italian cuisine crafted with love, served in a space designed for memorable moments.",
            address: "456 Main Street, Portland, OR 97205",
            phone: "(503) 555-0147",
            email: "ciao@osteriabella.com"
          }
        }
      ]
    },
    {
      name: 'Contact',
      slug: '/contact',
      sections: [
        {
          id: "r-hero-contact",
          type: "RHero",
          props: {
            badge: "Contact & Location",
            title: "Plan Your Visit",
            description: "Located in the heart of Portland. Find our address, parking information, and contact details below.",
            primaryBtnText: "Get Directions",
            secondaryBtnText: "Send Email",
            bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e210?q=80&w=2000"
          }
        },
        {
          id: "r-hours-contact",
          type: "RHoursInfo",
          props: {
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
        {
          id: "r-atmosphere-contact",
          type: "RAtmosphere",
          props: {
            tag: "The Space",
            title: "Welcome to Our Table",
            subtitle: "Explore the sights and spaces of Osteria Bella before you arrive.",
            img1: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
            img2: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
            img3: "https://images.unsplash.com/photo-1414235077428-338989a2e210?q=80&w=800&auto=format&fit=crop",
            img4: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
            img5: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
            img6: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&auto=format&fit=crop"
          }
        },
        {
          id: "r-footer-contact",
          type: "RFooter",
          props: {
            businessName: "Osteria Bella",
            tagline: "Modern Italian",
            desc: "Modern Italian cuisine crafted with love, served in a space designed for memorable moments.",
            address: "456 Main Street, Portland, OR 97205",
            phone: "(503) 555-0147",
            email: "ciao@osteriabella.com"
          }
        }
      ]
    }
  ],
  voltvikings: [
    {
      name: 'Home',
      slug: '/',
      sections: TEMPLATES.voltvikings
    },
    {
      name: 'Services',
      slug: '/services',
      sections: [
        {
          id: "vv-header-services",
          type: "VVHeader",
          props: {
            businessName: "VOLT VIKINGS",
            tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
            phone: "(520) 555-0199",
            ctaText: "BOOK ONLINE",
            navLinks: ["HOME", "SERVICES", "JOURNEY", "REVIEWS", "CORRIDOR"]
          }
        },
        {
          id: "vv-hero-services",
          type: "VVHero",
          props: {
            badge: "Commercial & Residential Services",
            title: "Expert Electrical Solutions",
            subtitle: "From breaker upgrades to heavy commercial installations, our Tucson crews offer premium quality electrical work.",
            ctaText: "REQUEST A QUOTE",
            secondaryCtaText: "CALL DISPATCH",
            bgImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2070"
          }
        },
        {
          id: "vv-services-services",
          type: "VVServices",
          props: {
            title: "Tucson's Trusted Electrical Team",
            subtitle: "Explore our residential, commercial, and specialty electrical contracting services.",
            services: [
              { title: "Residential Electrician", icon: "Home", desc: "Lighting upgrades, panel replacements, troubleshooting, safety checks, and complete rewires.", img: "https://images.unsplash.com/photo-1558223190-184852c035be?q=80&w=800" },
              { title: "Commercial Contracting", icon: "Building2", desc: "High-voltage layout, tenant improvements, structural wiring, lighting systems, and service panels.", img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=800" },
              { title: "Smart Panel Upgrades", icon: "Zap", desc: "Transition your home's breaker panel to 200A. Maximize current safety and smart home compatibility.", img: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800" },
              { title: "EV Charger Installation", icon: "ShieldCheck", desc: "Expert wall connector level-2 charging box setups for Tesla, Rivian, and all modern electric vehicles.", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800" }
            ]
          }
        },
        {
          id: "vv-cta-services",
          type: "VVCTA",
          props: {
            title: "Need Custom Electrical Enhancements?",
            subtitle: "Get a free online quote estimate or schedule an onsite consultation in seconds.",
            buttonText: "GET ESTIMATE NOW"
          }
        },
        {
          id: "vv-footer-services",
          type: "VVFooter",
          props: {
            businessName: "VOLT VIKINGS",
            tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
            description: "Tucson's premier local electrical contractor service. Providing residential, commercial, and specialty services with legendary safety standards.",
            licensing: "AZ ROC #341258 | Licensed, Bonded & Insured",
            phone: "(520) 555-0199",
            email: "dispatch@voltvikings.com",
            address: "Tucson - Phoenix Area, AZ"
          }
        }
      ]
    },
    {
      name: 'Viking Journey',
      slug: '/journey',
      sections: [
        {
          id: "vv-header-journey",
          type: "VVHeader",
          props: {
            businessName: "VOLT VIKINGS",
            tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
            phone: "(520) 555-0199",
            ctaText: "BOOK ONLINE",
            navLinks: ["HOME", "SERVICES", "JOURNEY", "REVIEWS", "CORRIDOR"]
          }
        },
        {
          id: "vv-hero-journey",
          type: "VVHero",
          props: {
            badge: "Seamless Customer Experience",
            title: "Our Viking Journey Process",
            subtitle: "We believe in clear scheduling, prompt arrival, clean execution, and guaranteed client satisfaction.",
            ctaText: "BOOK AN APPOINTMENT",
            secondaryCtaText: "OUR PLEDGE",
            bgImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070"
          }
        },
        {
          id: "vv-process-journey",
          type: "VVProcess",
          props: {
            title: "Getting world class electrical services has never been easier",
            steps: [
              { title: "Get A Fast Quote", desc: "It’s never been easier. Just click the button and send us details of your project. We respond promptly.", icon: "Search" },
              { title: "Set A Schedule", desc: "Get work done at a time that suits you with fast and easy scheduling. We arrive right on time.", icon: "Calendar" },
              { title: "Sit Back & Relax", desc: "Our licensed, highly trained electricians handle everything safely. Get a legendary customer experience.", icon: "Shield" }
            ]
          }
        },
        {
          id: "vv-cta-journey",
          type: "VVCTA",
          props: {
            title: "Ready to Upgrade Your Power System?",
            subtitle: "Get a free online quote estimate or schedule an onsite consultation in seconds.",
            buttonText: "GET ESTIMATE NOW"
          }
        },
        {
          id: "vv-footer-journey",
          type: "VVFooter",
          props: {
            businessName: "VOLT VIKINGS",
            tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
            description: "Tucson's premier local electrical contractor service. Providing residential, commercial, and specialty services with legendary safety standards.",
            licensing: "AZ ROC #341258 | Licensed, Bonded & Insured",
            phone: "(520) 555-0199",
            email: "dispatch@voltvikings.com",
            address: "Tucson - Phoenix Area, AZ"
          }
        }
      ]
    },
    {
      name: 'Reviews',
      slug: '/reviews',
      sections: [
        {
          id: "vv-header-reviews",
          type: "VVHeader",
          props: {
            businessName: "VOLT VIKINGS",
            tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
            phone: "(520) 555-0199",
            ctaText: "BOOK ONLINE",
            navLinks: ["HOME", "SERVICES", "JOURNEY", "REVIEWS", "CORRIDOR"]
          }
        },
        {
          id: "vv-hero-reviews",
          type: "VVHero",
          props: {
            badge: "Verified Client Testimonials",
            title: "Tucson Neighbors Speak",
            subtitle: "Read about our 5.0 Star rated electricians from actual local home and business owners.",
            ctaText: "READ MORE REVIEWS",
            secondaryCtaText: "LEAVE A REVIEW",
            bgImage: "https://images.unsplash.com/photo-1558223190-184852c035be?q=80&w=800"
          }
        },
        {
          id: "vv-testimonials-reviews",
          type: "VVTestimonials",
          props: {
            title: "Legendary Service, Proven by Tucson Neighbors",
            reviews: [
              { name: "Carmine C.", role: "Retired Electrician", quote: "As a retired Electrician, I called Volt Vikings who I used previously on some HOAs I managed. They let you know when they will arrive, work extremely clean, and know their code inside and out. Excellent service and reasonable pricing.", img: "https://randomuser.me/api/portraits/men/44.jpg" },
              { name: "Glen T.", role: "Commercial Owner", quote: "I own a 29,000 sq ft commercial building and several apartments. For the past 5 years I have been calling Volt Vikings for all my electrical needs, from new equipment installs to complex troubleshooting. Qualified, competent crews every single time.", img: "https://randomuser.me/api/portraits/men/32.jpg" }
            ]
          }
        },
        {
          id: "vv-cta-reviews",
          type: "VVCTA",
          props: {
            title: "Ready to Experience Legendary Service?",
            subtitle: "Get a free online quote estimate or schedule an onsite consultation in seconds.",
            buttonText: "GET ESTIMATE NOW"
          }
        },
        {
          id: "vv-footer-reviews",
          type: "VVFooter",
          props: {
            businessName: "VOLT VIKINGS",
            tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
            description: "Tucson's premier local electrical contractor service. Providing residential, commercial, and specialty services with legendary safety standards.",
            licensing: "AZ ROC #341258 | Licensed, Bonded & Insured",
            phone: "(520) 555-0199",
            email: "dispatch@voltvikings.com",
            address: "Tucson - Phoenix Area, AZ"
          }
        }
      ]
    },
    {
      name: 'Corridor',
      slug: '/corridor',
      sections: [
        {
          id: "vv-header-corridor",
          type: "VVHeader",
          props: {
            businessName: "VOLT VIKINGS",
            tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
            phone: "(520) 555-0199",
            ctaText: "BOOK ONLINE",
            navLinks: ["HOME", "SERVICES", "JOURNEY", "REVIEWS", "CORRIDOR"]
          }
        },
        {
          id: "vv-hero-corridor",
          type: "VVHero",
          props: {
            badge: "Tucson & Phoenix Office locations",
            title: "Viking Service Corridor",
            subtitle: "Find our service coverage area across the Phoenix to Tucson desert corridor.",
            ctaText: "VIEW OFFICE DETAILS",
            secondaryCtaText: "GET DIRECTIONS",
            bgImage: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800"
          }
        },
        {
          id: "vv-map-corridor",
          type: "VVMap",
          props: {
            title: "Legendary Electrical Services Throughout Tucson & Phoenix Area",
            desc: "No matter where you are, we've got your electrical needs covered. We provide rapid-response services across the region, giving everyone access to our highly experienced team. If you need electricians in Tucson, Mesa, Chandler, Tempe, or Phoenix, we are here for you!",
            mapIframeUrl: "https://snazzymaps.com/embed/717236"
          }
        },
        {
          id: "vv-footer-corridor",
          type: "VVFooter",
          props: {
            businessName: "VOLT VIKINGS",
            tagline: "LEGENDARY ELECTRICAL CONTRACTORS",
            description: "Tucson's premier local electrical contractor service. Providing residential, commercial, and specialty services with legendary safety standards.",
            licensing: "AZ ROC #341258 | Licensed, Bonded & Insured",
            phone: "(520) 555-0199",
            email: "dispatch@voltvikings.com",
            address: "Tucson - Phoenix Area, AZ"
          }
        }
      ]
    }
  ]
};
