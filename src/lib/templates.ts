import type { SectionData } from './blocks';

export const TEMPLATES: Record<string, SectionData[]> = {
  easy_does_it: [
    {
      id: "edi-header-1",
      type: "EDIHeader",
      props: {
        businessName: "Easy Does It",
        phone: "(209) 304-7288",
        ctaText: "Get Quote"
      }
    },
    {
      id: "edi-hero-1",
      type: "EDIHero",
      props: {
        title: "Your Car Is \nIn Great Hands \nWith Us",
        subtitle: "Experience the ultimate shine. Our professionals bring showroom quality directly to your driveway, using advanced techniques and premium products.",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070",
        badgeText: "#1 Rated in County"
      }
    },
    {
      id: "edi-services-1",
      type: "EDIServices",
      props: {
        heading: "How it Works",
        description: "Our approach is focused on delivering outstanding results while ensuring a smooth and hassle-free experience for you."
      }
    },
    {
      id: "edi-pricing-1",
      type: "EDIPricing",
      props: {
        title: "Pick what fits you best",
        plan1Name: "Basic",
        plan1Price: "115",
        plan2Name: "Premium",
        plan2Price: "200",
        plan3Name: "Ultimate",
        plan3Price: "250"
      }
    },
    {
      id: "edi-faq-1",
      type: "EDIFaq",
      props: {
        title: "Frequently Asked Questions",
        subtitle: "Have questions? Our FAQ section has you covered with quick answers to common inquiries about our detailing services."
      }
    },
    {
      id: "edi-gallery-1",
      type: "EDIGallery",
      props: {
        title: "Automotive Artistry",
        subtitle: "Browse our gallery of recent work. We treat every vehicle like a masterpiece, ensuring perfection down to the microscopic level."
      }
    },
    {
      id: "edi-contact-1",
      type: "EDIContact",
      props: {
        title: "Ready for a Showroom Shine?",
        subtitle: "Fill out the form below to request a quote or book an appointment. We'll get back to you within 15 minutes during business hours.",
        phone: "(209) 304-7288",
        email: "contact@easydoesit.com",
        serviceArea: "Amador County, CA"
      }
    },
    {
      id: "edi-footer-1",
      type: "EDIFooter",
      props: {
        phone: "(209) 304-7288",
        email: "contact@easydoesit.com",
        address: "Ione, CA (Amador County)"
      }
    }
  ],
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
          { title: 'Modern Front Yard', loc: 'Mountain View, CA', img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80' },
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
          { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop', title: 'Portraits' },
          { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop', title: 'Couples' },
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
  blank: [],

  // ── NEW INDUSTRY TEMPLATES ──────────────────────────────────────────────────

  // 1. LAW FIRM – Sterling Law Group
  law_firm: [
    {
      id: "lf-header-1",
      type: "SLHeader",
      props: {
        businessName: "STERLING LAW",
        navLinks: ["HOME", "PRACTICE AREAS", "ABOUT US", "RESULTS", "CONTACT"]
      }
    },
    {
      id: "lf-hero-1",
      type: "SLHero",
      props: {
        headline: "TRUSTED.\nEXPERIENCED.\nRESULTS-DRIVEN.",
        subheading: "YOUR RIGHTS. OUR PRIORITY.",
        description: "Sterling & Associates provides aggressive legal representation for individuals and businesses. Over 25 years of courtroom excellence and $50M+ recovered for our clients.",
        backgroundImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "lf-stats-1",
      type: "SLStats",
      props: {
        stats: [
          { value: "25+", label: "Years of\nLegal Excellence", icon: "Scale" },
          { value: "2,000+", label: "Cases\nSuccessfully Closed", icon: "Users" },
          { value: "$50M+", label: "Recovered for\nOur Clients", icon: "Shield" },
          { value: "98%", label: "Client\nSatisfaction Rate", icon: "Star" }
        ]
      }
    },
    {
      id: "lf-services-1",
      type: "SLServices",
      props: {
        heading: "Our Practice Areas",
        services: [
          { title: "Personal Injury", icon: "Heart", desc: "Car accidents, slip and falls, and workplace injuries. We fight to maximize your compensation.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
          { title: "Business Law", icon: "Building2", desc: "Contract disputes, business formation, mergers, and commercial litigation for growing businesses.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
          { title: "Family Law", icon: "Home", desc: "Divorce, child custody, adoption, and guardianship handled with care and confidentiality.", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop" },
          { title: "Estate Planning", icon: "FileText", desc: "Wills, trusts, powers of attorney, and probate to protect your family's future.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" }
        ]
      }
    },
    {
      id: "lf-steps-1",
      type: "SLProcess",
      props: {
        heading: "How We Work.\nSimple & Transparent.",
        steps: [
          { title: "Free Consultation", desc: "Schedule a no-obligation call. We review your case and outline your legal options clearly.", icon: "MessageCircle" },
          { title: "Case Strategy", desc: "We build a tailored legal strategy designed to maximize your outcome and protect your rights.", icon: "Search" },
          { title: "Aggressive Advocacy", desc: "We fight in your corner—in negotiations, mediation, or in court—every step of the way.", icon: "Shield" },
          { title: "Resolution", desc: "We guide you to a full resolution so you can move forward with confidence and peace of mind.", icon: "CheckCircle" }
        ]
      }
    },
    {
      id: "lf-testimonials-1",
      type: "SLTestimonials",
      props: {
        heading: "Client Success Stories",
        reviews: [
          { name: "Rebecca M.", role: "Personal Injury Client", quote: "Sterling Law fought tirelessly for me after my accident. They recovered 3x what the insurance company offered. I felt supported every single step of the way.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
          { name: "Thomas H.", role: "Business Owner", quote: "I had a complex contract dispute and Sterling's team was absolutely brilliant. They resolved it quickly and saved my company thousands of dollars.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
          { name: "Maria S.", role: "Estate Planning Client", quote: "They made estate planning straightforward and stress-free. My family is now fully protected and I have total peace of mind.", img: "https://randomuser.me/api/portraits/women/67.jpg" }
        ]
      }
    },
    {
      id: "lf-cta-1",
      type: "SLCTA",
      props: {
        heading: "Don't Navigate the Legal System Alone.\nGet Expert Representation Today.",
        buttonText: "SCHEDULE FREE CONSULTATION"
      }
    },
    {
      id: "lf-footer-1",
      type: "SLFooter",
      props: { businessName: "STERLING LAW" }
    }
  ],

  // 2. AUTO REPAIR – Ridge Line Auto Service
  auto_repair: [
    {
      id: "ar-header-1",
      type: "RLHeader",
      props: {
        businessName: "RIDGE LINE AUTO",
        tagline: "HONEST. FAST. RELIABLE.",
        phone: "(555) 874-0200",
        ctaText: "BOOK ONLINE",
        navLinks: ["HOME", "SERVICES", "ABOUT US", "REVIEWS", "LOCATION"]
      }
    },
    {
      id: "ar-hero-1",
      type: "RLHero",
      props: {
        badge: "Rated #1 Auto Repair in the Valley",
        title: "Expert Auto Repair You Can Actually Trust",
        subtitle: "Factory-trained technicians. Transparent pricing. No surprises. Just your car running perfectly — fast.",
        ctaText: "BOOK AN APPOINTMENT",
        secondaryCtaText: "GET AN ESTIMATE",
        bgImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "ar-stats-1",
      type: "RLStats",
      props: {
        stats: [
          { value: "15,000+", label: "Vehicles\nServiced", icon: "Car" },
          { value: "5.0 Stars", label: "300+ Verified\nReviews", icon: "Star" },
          { value: "18+", label: "Years Serving\nThe Community", icon: "Calendar" },
          { value: "Same-Day", label: "Service Available\nMost Repairs", icon: "Zap" }
        ]
      }
    },
    {
      id: "ar-services-1",
      type: "RLServices",
      props: {
        title: "Full-Service Auto Care",
        subtitle: "From oil changes to full engine rebuilds — we handle it all under one roof with factory-grade equipment.",
        services: [
          { title: "Oil Change & Tune-Up", icon: "Droplets", desc: "Quick, precise oil changes with a full multi-point inspection on every visit. In and out fast.", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop" },
          { title: "Brakes & Suspension", icon: "Shield", desc: "Safety is everything. We inspect, service, and replace brake systems and suspension components.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop" },
          { title: "Engine & Transmission", icon: "Settings", desc: "From diagnostics to full rebuilds, our certified techs tackle even the most complex engine jobs.", img: "https://images.unsplash.com/photo-1581579187009-cbef9be1a049?q=80&w=800&auto=format&fit=crop" },
          { title: "AC & Electrical", icon: "Zap", desc: "We diagnose and repair air conditioning systems, wiring, batteries, and all electrical components.", img: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=800&auto=format&fit=crop" }
        ]
      }
    },
    {
      id: "ar-process-1",
      type: "RLProcess",
      props: {
        title: "Getting your car fixed has never been this easy",
        steps: [
          { title: "Book Online", desc: "Schedule your appointment in seconds from your phone or computer. Pick a time that works for you.", icon: "Calendar" },
          { title: "Drop It Off", desc: "Bring your vehicle in and our advisor will walk through everything with you before any work begins.", icon: "Car" },
          { title: "We Fix It Right", desc: "Certified techs complete the work using OEM parts. We update you throughout with photos and texts.", icon: "Wrench" }
        ]
      }
    },
    {
      id: "ar-testimonials-1",
      type: "RLTestimonials",
      props: {
        title: "What Our Customers Say",
        reviews: [
          { name: "Karen D.", role: "Regular Customer", quote: "I've been bringing my cars here for 8 years. They are always honest, upfront about costs, and never try to upsell you on things you don't need. Rare to find that these days.", img: "https://randomuser.me/api/portraits/women/28.jpg" },
          { name: "Brandon T.", role: "Fleet Manager", quote: "Ridge Line services our entire company fleet of 12 vans. Turnaround is fast, work is excellent, and they always beat the dealership prices. Couldn't ask for more.", img: "https://randomuser.me/api/portraits/men/51.jpg" }
        ]
      }
    },
    {
      id: "ar-cta-1",
      type: "RLCTA",
      props: {
        title: "Car Trouble? We've Got You Covered.",
        subtitle: "Book online in 60 seconds or call us now for same-day service availability.",
        buttonText: "BOOK YOUR APPOINTMENT"
      }
    },
    {
      id: "ar-footer-1",
      type: "RLFooter",
      props: {
        businessName: "RIDGE LINE AUTO",
        tagline: "HONEST. FAST. RELIABLE.",
        description: "Trusted auto repair and maintenance serving the community for over 18 years. All makes and models welcome.",
        licensing: "ASE Certified Technicians | Licensed & Insured",
        phone: "(555) 874-0200",
        email: "service@ridgelineauto.com",
        address: "2847 Commerce Blvd, Suite A"
      }
    }
  ],

  // 3. HAIR SALON – Atelier Hair Studio
  hair_salon: [
    {
      id: "hs-hero-1",
      type: "AHHero",
      props: {
        title: "Where Hair Becomes\nHigh Art.",
        subtitle: "Precision cuts, lived-in color, and luxury treatments in an intimate studio setting. Book your transformation today.",
        bgImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
      }
    },
    {
      id: "hs-about-1",
      type: "AHAbout",
      props: {
        title: "Hi, I'm Sofia.\nYour new favorite stylist.",
        desc: "With over 12 years behind the chair and advanced training in Paris and New York, I specialize in creating tailored looks that enhance your natural beauty. My studio is a space where you can slow down, be yourself, and leave feeling completely transformed. Every appointment is a 1-on-1 experience — no double-booking, ever.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1974&auto=format&fit=crop"
      }
    },
    {
      id: "hs-services-1",
      type: "AHServices",
      props: {
        services: [
          { iconName: 'Scissors', title: 'Precision Cuts', desc: 'Custom haircuts tailored to your face shape, texture, and lifestyle. Includes blowout.' },
          { iconName: 'Sparkles', title: 'Color & Balayage', desc: 'Lived-in color, bold transformations, and everything in between. Always blended perfectly.' },
          { iconName: 'Star', title: 'Keratin Treatments', desc: 'Smooth, frizz-free hair for up to 3 months. Safe for all hair types and colors.' },
          { iconName: 'Heart', title: 'Bridal Packages', desc: 'Full-day bridal prep for you and your wedding party. Trials available.' }
        ]
      }
    },
    {
      id: "hs-portfolio-1",
      type: "AHPortfolio",
      props: {
        images: [
          { url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop", title: "Balayage" },
          { url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop", title: "Color" },
          { url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop", title: "Cuts" },
          { url: "https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=800&auto=format&fit=crop", title: "Styling" }
        ]
      }
    },
    {
      id: "hs-testimonials-1",
      type: "AHTestimonials",
      props: {
        testimonials: [
          { text: "Sofia is an absolute genius with color. I came in with a reference photo and left with something even better. I get compliments every single day.", author: "Natalie P." },
          { text: "I have super thick, curly hair and Sofia is the only stylist who actually knows what she's doing with it. Life-changing haircut!", author: "Amara J." },
          { text: "The studio vibe is so relaxing and Sofia makes you feel totally comfortable. My hair has never looked or felt this healthy. Worth every penny.", author: "Claire M." }
        ]
      }
    },
    {
      id: "hs-cta-1",
      type: "AHCta",
      props: {
        title: "Ready for your best hair yet?",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "hs-footer-1",
      type: "AHFooter",
      props: { text: "© 2026 Atelier Hair Studio · All rights reserved · By appointment only" }
    }
  ],

  // 4. REAL ESTATE – Meridian Properties
  real_estate: [
    {
      id: "re-hero-1",
      type: "MPHero",
      props: {
        title: "Find Your Perfect\nHome in the Valley.",
        subtitle: "Local expertise, white-glove service, and an unmatched record of results. Let's find the home you deserve.",
        bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
      }
    },
    {
      id: "re-stats-1",
      type: "MPStats",
      props: {
        stats: [
          { value: "450+", label: "Homes\nSuccessfully Sold", icon: "Home" },
          { value: "$120M+", label: "In Transactions\nThis Year", icon: "TrendingUp" },
          { value: "14 Days", label: "Average Days\nOn Market", icon: "Calendar" },
          { value: "5★", label: "Zillow & Google\nRated Agent", icon: "Star" }
        ]
      }
    },
    {
      id: "re-services-1",
      type: "MPServices",
      props: {
        services: [
          { iconName: 'Home', title: 'Buyer Representation', desc: 'We find the right home at the right price and guide you through every step of closing.' },
          { iconName: 'TrendingUp', title: 'Seller Strategy', desc: 'Expert staging, photography, and pricing to sell your home fast and for top dollar.' },
          { iconName: 'Building2', title: 'Investment Properties', desc: 'Rental analysis, cap rates, and off-market deals for serious real estate investors.' },
          { iconName: 'MapPin', title: 'Relocation Services', desc: 'Moving to our area? We make the transition seamless with local knowledge and connections.' },
          { iconName: 'Key', title: 'First-Time Buyers', desc: 'We walk first-time buyers through the entire process — from pre-approval to keys in hand.' },
          { iconName: 'FileText', title: 'Luxury Market', desc: 'Discretion and results for high-end buyers and sellers in the $1M+ market.' }
        ]
      }
    },
    {
      id: "re-listings-1",
      type: "MPListings",
      props: {
        title: "Featured Listings",
        projects: [
          { title: "4 Bed · 3 Bath · $685,000", loc: "2204 Ridgemont Way, Scottsdale AZ", img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop" },
          { title: "3 Bed · 2 Bath · $425,000", loc: "819 Lakeview Terrace, Tempe AZ", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=800&auto=format&fit=crop" },
          { title: "5 Bed · 4 Bath · $1,100,000", loc: "10 Camelback Peak Dr, Phoenix AZ", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
          { title: "2 Bed · 2 Bath · $310,000", loc: "445 Saguaro Circle #3, Mesa AZ", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop" }
        ]
      }
    },
    {
      id: "re-testimonials-1",
      type: "MPTestimonials",
      props: {
        testimonials: [
          { text: "Meridian sold our home in 8 days for $22K over asking. Their marketing and negotiation skills are absolutely next level.", author: "The Hernandez Family", rating: "5" },
          { text: "As first-time buyers we were nervous, but they made every step easy and clear. We couldn't have done it without them.", author: "Jake & Emily S.", rating: "5" },
          { text: "I've bought and sold 6 homes. Meridian is by far the best real estate team I've ever worked with. Responsive, honest, results-driven.", author: "David R.", rating: "5" }
        ]
      }
    },
    {
      id: "re-cta-1",
      type: "MPCta",
      props: {
        title: "Ready to Buy, Sell, or Invest?\nLet's talk.",
        subtitle: "Schedule a free 30-minute strategy call today. No obligation, no pressure — just expert guidance."
      }
    },
    {
      id: "re-footer-1",
      type: "MPFooter",
      props: { text: "© 2026 Meridian Properties. Licensed Real Estate Brokerage. Equal Housing Opportunity." }
    }
  ],

  // 5. PERSONAL TRAINER – Iron Edge Fitness
  personal_trainer: [
    {
      id: "pt-header-1",
      type: "IEHeader",
      props: {
        businessName: "IRON EDGE",
        navLinks: ["HOME", "PROGRAMS", "ABOUT", "RESULTS", "PRICING", "START NOW"]
      }
    },
    {
      id: "pt-hero-1",
      type: "IEHero",
      props: {
        headline: "STRONGER.\nLEANER.\nCONFIDENT.",
        subheading: "REAL COACHING. REAL RESULTS.",
        description: "Iron Edge is private 1-on-1 personal training built around your specific goals, schedule, and fitness level. No group classes. No fluff. Just results.",
        backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "pt-stats-1",
      type: "IEStats",
      props: {
        stats: [
          { value: "300+", label: "Clients\nTransformed", icon: "Users" },
          { value: "8+", label: "Years of\nCoaching", icon: "Calendar" },
          { value: "94%", label: "Goal Achievement\nRate", icon: "TrendingUp" },
          { value: "NSCA", label: "Certified Strength &\nConditioning Specialist", icon: "Shield" }
        ]
      }
    },
    {
      id: "pt-services-1",
      type: "IEServices",
      props: {
        heading: "Training Programs Built Around You",
        services: [
          { title: "1-on-1 Personal Training", icon: "User", desc: "Private sessions tailored entirely to your goals, schedule, and current fitness level.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop" },
          { title: "Fat Loss Programs", desc: "Evidence-based nutrition guidance and training protocols for sustainable, permanent fat loss.", icon: "TrendingDown", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop" },
          { title: "Strength & Muscle", icon: "Dumbbell", desc: "Progressive overload programming designed to build strength and lean muscle over time.", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop" },
          { title: "Online Coaching", icon: "Laptop", desc: "Full coaching experience delivered remotely — programming, check-ins, and nutrition support.", img: "https://images.unsplash.com/photo-1616279969862-a2dc396a7f10?q=80&w=800&auto=format&fit=crop" }
        ]
      }
    },
    {
      id: "pt-steps-1",
      type: "IEProcess",
      props: {
        heading: "Your Transformation Starts Here.",
        steps: [
          { title: "Free Strategy Call", desc: "We start with a free 30-minute consultation to understand your goals, lifestyle, and fitness history.", icon: "MessageCircle" },
          { title: "Custom Program", desc: "I build a fully personalized training and nutrition plan designed specifically for your body and goals.", icon: "ClipboardList" },
          { title: "Train & Track", desc: "We train together (or remotely), tracking progress weekly and adjusting the plan as you improve.", icon: "TrendingUp" },
          { title: "Reach Your Goals", desc: "Real, lasting results. Most clients hit their primary goal within 12–16 weeks of consistent training.", icon: "Star" }
        ]
      }
    },
    {
      id: "pt-testimonials-1",
      type: "IETestimonials",
      props: {
        heading: "Client Transformations",
        reviews: [
          { name: "Jessica L.", role: "Lost 38 lbs in 14 weeks", quote: "I tried everything before Iron Edge. This program finally taught me how to eat and train in a way that actually fits my life. I've kept the weight off for 2 years.", img: "https://randomuser.me/api/portraits/women/31.jpg" },
          { name: "Marcus K.", role: "Added 25 lbs of muscle", quote: "I gained more muscle in 4 months with Iron Edge than I did in 3 years training on my own. The personalized programming makes all the difference.", img: "https://randomuser.me/api/portraits/men/40.jpg" },
          { name: "Sandra T.", role: "Post-surgery rehabilitation", quote: "After my knee surgery I was nervous to work out. The program was careful, progressive, and I'm now stronger than before my injury. Incredible coach.", img: "https://randomuser.me/api/portraits/women/57.jpg" }
        ]
      }
    },
    {
      id: "pt-pricing-1",
      type: "IEPricing",
      props: {
        heading: "Simple, Transparent Pricing.",
        plans: [
          { title: "Online Coaching", price: "197", icon: "Laptop", features: ["Weekly Training Program", "Nutrition Guidance", "Weekly Check-In Call", "App-Based Tracking"] },
          { title: "In-Person Training", price: "397", icon: "User", isPopular: true, features: ["3 Private Sessions/Week", "Custom Meal Plan", "Body Composition Tracking", "Unlimited Text Support"] },
          { title: "VIP Intensive", price: "697", icon: "Star", features: ["5 Sessions/Week", "Full Nutrition Coaching", "Priority Scheduling", "Monthly Photo Reviews"] }
        ]
      }
    },
    {
      id: "pt-cta-1",
      type: "IECTA",
      props: {
        heading: "Your Best Body Is Closer Than You Think.\nStart Today.",
        buttonText: "BOOK FREE STRATEGY CALL"
      }
    },
    {
      id: "pt-footer-1",
      type: "IEFooter",
      props: { businessName: "IRON EDGE" }
    }
  ],

  // 6. DENTAL PRACTICE – Clarity Dental Studio
  dental: [
    {
      id: "dt-header-1",
      type: "CDHeader",
      props: {
        businessName: "CLARITY DENTAL",
        navLinks: ["HOME", "SERVICES", "ABOUT US", "PATIENT INFO", "BOOK NOW"]
      }
    },
    {
      id: "dt-hero-1",
      type: "CDHero",
      props: {
        headline: "YOUR SMILE.\nOUR PASSION.\nPERFECTED.",
        subheading: "GENTLE CARE. STUNNING RESULTS.",
        description: "Clarity Dental Studio provides modern, anxiety-free dental care for the whole family. From routine cleanings to complete smile makeovers — we're your partner in lifelong oral health.",
        backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "dt-stats-1",
      type: "CDStats",
      props: {
        stats: [
          { value: "5,000+", label: "Happy Patients\nServed", icon: "Users" },
          { value: "15+", label: "Years of\nExpert Care", icon: "Calendar" },
          { value: "4.9★", label: "Google\nRating", icon: "Star" },
          { value: "Same-Day", label: "Emergency\nAppointments", icon: "Zap" }
        ]
      }
    },
    {
      id: "dt-services-1",
      type: "CDServices",
      props: {
        heading: "Comprehensive Dental Services",
        services: [
          { title: "General & Preventive", icon: "Shield", desc: "Cleanings, exams, X-rays, fillings, and preventive care for the whole family. Gentle and thorough.", img: "https://images.unsplash.com/photo-1588776814546-1ffedcb087b4?q=80&w=800&auto=format&fit=crop" },
          { title: "Cosmetic Dentistry", icon: "Sparkles", desc: "Teeth whitening, veneers, bonding, and smile makeovers to give you total confidence.", img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop" },
          { title: "Implants & Restorations", icon: "Star", desc: "Dental implants, crowns, bridges, and full restorations. Beautiful, long-lasting results.", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop" },
          { title: "Invisalign & Orthodontics", icon: "Smile", desc: "Straighten your smile discreetly with Invisalign clear aligners. Results in as little as 6 months.", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop" }
        ]
      }
    },
    {
      id: "dt-testimonials-1",
      type: "CDTestimonials",
      props: {
        heading: "Real Patients. Real Smiles.",
        reviews: [
          { name: "Lindsay F.", role: "Cosmetic Patient", quote: "I got veneers at Clarity Dental and the results are beyond anything I imagined. My confidence has completely transformed. The team is warm, professional, and so skilled.", img: "https://randomuser.me/api/portraits/women/35.jpg" },
          { name: "Robert M.", role: "Implant Patient", quote: "After losing a tooth I was worried about implants. The procedure was painless and the implant looks completely natural. Wish I had done it sooner!", img: "https://randomuser.me/api/portraits/men/58.jpg" },
          { name: "Amy K.", role: "Family Patient", quote: "We bring our whole family here — from our 6-year-old to my 70-year-old mom. Dr. Chen puts everyone at ease and the team is genuinely kind and caring.", img: "https://randomuser.me/api/portraits/women/62.jpg" }
        ]
      }
    },
    {
      id: "dt-pricing-1",
      type: "CDPricing",
      props: {
        heading: "Membership Plans for Uninsured Patients",
        plans: [
          { title: "Basic Plan", price: "29/mo", icon: "Shield", features: ["2 Cleanings Per Year", "Annual X-Rays", "Oral Cancer Screening", "10% Off All Treatments"] },
          { title: "Complete Care", price: "49/mo", icon: "Star", isPopular: true, features: ["2 Cleanings Per Year", "Annual X-Rays", "1 Emergency Visit", "20% Off All Treatments"] },
          { title: "Family Plan", price: "89/mo", icon: "Home", features: ["Covers 2 Adults", "2 Children Under 12", "All Basic Benefits", "25% Off All Treatments"] }
        ]
      }
    },
    {
      id: "dt-cta-1",
      type: "CDCTA",
      props: {
        heading: "Ready for a Smile You Love?\nBook Your Visit Today.",
        buttonText: "REQUEST AN APPOINTMENT"
      }
    },
    {
      id: "dt-footer-1",
      type: "CDFooter",
      props: { businessName: "CLARITY DENTAL" }
    }
  ],

  // 7. DOG GROOMING – Paws & Pamper Pet Spa
  dog_grooming: [
    {
      id: "dg-hero-1",
      type: "PPHero",
      props: {
        title: "Your Dog Deserves\nThe Very Best.",
        subtitle: "Professional grooming in a calm, cage-free spa environment. Every visit is a tail-wagging good time.",
        bgImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "dg-ethos-1",
      type: "PPEthos",
      props: {
        features: [
          { iconName: 'Heart', title: 'Cage-Free Studio', desc: 'Your pup roams freely between appointments in our calm, open-space studio.' },
          { iconName: 'Leaf', title: 'Natural Products', desc: 'We use only natural, non-toxic, hypoallergenic shampoos and conditioners.' },
          { iconName: 'Shield', title: 'Fear Free Certified', desc: 'Every groomer is certified in low-stress, fear-free handling techniques.' },
          { iconName: 'Star', title: 'One Dog at a Time', desc: 'No rushed appointments. Your dog gets our full attention for their whole visit.' }
        ]
      }
    },
    {
      id: "dg-orderahead-1",
      type: "PPBook",
      props: {
        title: "Book Your Pup's Appointment",
        subtitle: "Online booking is quick and easy. Spots fill up fast — reserve your dog's next grooming session in seconds.",
        image: "https://images.unsplash.com/photo-1534361960057-19f4434a4aeb?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "dg-community-1",
      type: "PPTestimonials",
      props: {
        testimonials: [
          { text: "Paws & Pamper is the ONLY place I trust with my golden retriever. She actually gets excited when we pull into the parking lot!", author: "Lauren C.", rating: "5" },
          { text: "My anxious rescue dog used to shake at the groomers. After one visit here he was calm and happy. They are absolute miracle workers.", author: "James D.", rating: "5" },
          { text: "Amazing results every time. My doodle comes out looking like a show dog and smells incredible. Worth every penny.", author: "Priya M.", rating: "5" }
        ]
      }
    },
    {
      id: "dg-findus-1",
      type: "PPFindUs",
      props: {
        address: "531 Barkley Ave",
        cityState: "Austin, TX 78704",
        phone: "(512) 555-0183",
        email: "hello@pawsandpamper.com",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
      }
    },
    {
      id: "dg-footer-1",
      type: "PPFooter",
      props: { text: "© 2026 Paws & Pamper Pet Spa · Austin, TX · Cage-Free · Fear Free Certified" }
    }
  ],

  // 8. WEDDING PLANNER – The Golden Thread Events
  wedding_planner: [
    {
      id: "wp-hero-1",
      type: "GTHero",
      props: {
        title: "Your Dream Wedding,\nFlawlessly Executed.",
        subtitle: "Luxury wedding planning and design for couples who want every detail to be absolutely perfect. Based in Charleston, serving the Southeast.",
        bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "wp-about-1",
      type: "GTAbout",
      props: {
        title: "Hi, I'm Claire.\nI turn visions into memories.",
        desc: "I've been planning weddings for 10+ years and have produced over 200 weddings across the Southeast. My approach blends high-level logistics with creative design — so your day is not only beautiful but runs without a hitch. I become your most organized friend, your creative partner, and your stress absorber all at once.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
      }
    },
    {
      id: "wp-services-1",
      type: "GTServices",
      props: {
        services: [
          { iconName: 'Star', title: 'Full Planning', desc: 'From first meeting to final farewell — we handle every detail of your entire wedding journey.' },
          { iconName: 'CheckCircle', title: 'Day-Of Coordination', desc: 'Months of prep distilled into flawless execution on your wedding day. You relax, we run everything.' },
          { iconName: 'Flower2', title: 'Design & Styling', desc: 'Moodboards, florals, tablescapes, and décor direction to bring your aesthetic vision to life.' },
          { iconName: 'Heart', title: 'Elopements', desc: 'Intimate, meaningful ceremonies for couples who want something personal, private, and unforgettable.' }
        ]
      }
    },
    {
      id: "wp-portfolio-1",
      type: "GTPortfolio",
      props: {
        images: [
          { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop", title: "Outdoor Ceremony" },
          { url: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop", title: "Garden Reception" },
          { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop", title: "Florals & Design" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", title: "Reception Details" }
        ]
      }
    },
    {
      id: "wp-testimonials-1",
      type: "GTTestimonials",
      props: {
        testimonials: [
          { text: "Claire is the reason our wedding was absolutely perfect. She anticipated every problem before it happened and our guests still talk about how flawless the day was.", author: "Sophie & Andrew" },
          { text: "Hiring Claire was the single best decision we made for our wedding. She understood our vision immediately and elevated it beyond what we thought possible.", author: "Maya & Jordan" },
          { text: "From our first call I knew Claire was something special. She's calm, creative, deeply organized, and just genuinely cares about your wedding as much as you do.", author: "Emma P." }
        ]
      }
    },
    {
      id: "wp-cta-1",
      type: "GTCta",
      props: {
        title: "Your perfect day starts with one conversation.",
        image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "wp-footer-1",
      type: "GTFooter",
      props: { text: "© 2026 The Golden Thread Events · Charleston, SC · Serving the Southeast" }
    }
  ],

  // 9. HOME CLEANING – Spotless Home Co.
  home_cleaning: [
    {
      id: "hc-hero-1",
      type: "SCHero",
      props: {
        title: "A Spotless Home.\nFresh Every Time.",
        subtitle: "Reliable, thorough, and trustworthy home cleaning services. We treat your home like our own.",
        bgImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "hc-stats-1",
      type: "SCStats",
      props: {
        stats: [
          { value: "1,200+", label: "Homes\nCleaned", icon: "Home" },
          { value: "7+", label: "Years in\nBusiness", icon: "Calendar" },
          { value: "4.9★", label: "Google & Yelp\nRating", icon: "Star" },
          { value: "100%", label: "Background\nChecked Team", icon: "Shield" }
        ]
      }
    },
    {
      id: "hc-services-1",
      type: "SCServices",
      props: {
        services: [
          { iconName: 'Sparkles', title: 'Standard Cleaning', desc: 'Regular maintenance cleaning for a consistently clean home. Weekly, bi-weekly, or monthly.' },
          { iconName: 'Star', title: 'Deep Cleaning', desc: 'A thorough, top-to-bottom clean including baseboards, appliance interiors, and more.' },
          { iconName: 'Key', title: 'Move-In / Move-Out', desc: 'Leave your old home spotless or start fresh in your new place with our move clean service.' },
          { iconName: 'Building2', title: 'Airbnb & Rentals', desc: 'Fast turnovers between guests with hotel-standard cleanliness. We track checkout schedules.' },
          { iconName: 'Leaf', title: 'Eco-Friendly Option', desc: 'We offer green cleaning with non-toxic products that are safe for kids, pets, and the planet.' },
          { iconName: 'Calendar', title: 'One-Time Service', desc: 'Need a single cleaning? No contracts required. Book whenever the need arises.' }
        ]
      }
    },
    {
      id: "hc-about-1",
      type: "SCAbout",
      props: {
        title: "Family-owned. Locally trusted.\nSince 2017.",
        desc: "Spotless Home Co. was founded by the Martinez family with one goal: to give busy homeowners one less thing to worry about. We're fully insured, background checked, and use professional-grade products. Every cleaner on our team is personally trained and held to the highest standards.",
        image: "https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=1200&auto=format&fit=crop"
      }
    },
    {
      id: "hc-testimonials-1",
      type: "SCTestimonials",
      props: {
        testimonials: [
          { text: "Spotless has been cleaning our home for 3 years. Consistent, thorough, and the team is always punctual and professional. We couldn't live without them.", author: "The Chen Family", rating: "5" },
          { text: "I had them do a deep clean before listing my house for sale. The realtor said it was the cleanest house she'd shown in months. House sold in 4 days!", author: "Michael O.", rating: "5" },
          { text: "I was nervous about letting cleaners into my home, but the background check process and professionalism immediately put me at ease. Truly trustworthy.", author: "Sandra W.", rating: "5" }
        ]
      }
    },
    {
      id: "hc-cta-1",
      type: "SCCta",
      props: {
        title: "Get your free quote today.\nFirst clean is 15% off.",
        subtitle: "Book online in 2 minutes or give us a call. We'll match any local competitor's price."
      }
    },
    {
      id: "hc-footer-1",
      type: "SCFooter",
      props: { text: "© 2026 Spotless Home Co. · Fully Insured · Background Checked Team · Serving the Metro Area" }
    }
  ],

  // 10. YOGA STUDIO – Solstice Yoga & Wellness
  yoga_studio: [
    {
      id: "ys-hero-1",
      type: "SYHero",
      props: {
        title: "Find Your\nCenter Here.",
        subtitle: "A welcoming, all-levels yoga and wellness studio rooted in community, movement, and mindfulness.",
        bgImage: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "ys-ethos-1",
      type: "SYEthos",
      props: {
        features: [
          { iconName: 'Sun', title: 'All Levels Welcome', desc: 'From first-timers to advanced practitioners, every class is guided with care and modifications.' },
          { iconName: 'Heart', title: 'Community First', desc: "We're more than a studio — we're a community where everyone belongs and feels seen." },
          { iconName: 'Leaf', title: 'Holistic Wellness', desc: 'Beyond yoga — we offer meditation, breathwork, sound healing, and wellness workshops.' },
          { iconName: 'Star', title: 'Expert Instructors', desc: 'Every teacher holds a 200hr+ RYT certification and brings years of dedicated teaching experience.' }
        ]
      }
    },
    {
      id: "ys-orderahead-1",
      type: "SYBook",
      props: {
        title: "Book Your Class Online",
        subtitle: "Reserve your mat in advance for any of our 30+ weekly classes. New student special — first week unlimited for $25.",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "ys-community-1",
      type: "SYTestimonials",
      props: {
        testimonials: [
          { text: "Solstice completely changed my relationship with movement. I walked in tight and stressed, and after 3 months I feel the best I have in years. This community is magic.", author: "Rachel T.", rating: "5" },
          { text: "The instructors are world-class. Every class is thoughtfully designed and I've learned so much about my body and breath in just a few months.", author: "Omar N.", rating: "5" },
          { text: "I've tried a dozen yoga studios and nothing compares to Solstice. The space is beautiful, the people are genuine, and every single teacher is exceptional.", author: "Diane M.", rating: "5" }
        ]
      }
    },
    {
      id: "ys-findus-1",
      type: "SYFindUs",
      props: {
        address: "814 Solstice Lane",
        cityState: "Denver, CO 80203",
        phone: "(720) 555-0142",
        email: "hello@solsticeyoga.com",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
      }
    },
    {
      id: "ys-footer-1",
      type: "SYFooter",
      props: { text: "© 2026 Solstice Yoga & Wellness · Denver, CO · All are welcome here." }
    }
  ],

  // ── PROHOME SERVICES ────────────────────────────────────────────────────────
  prohome_services: [
    {
      id: "ph-header-1",
      type: "PHHeader",
      props: {
        businessName: "Valley ProHome Services",
        phone: "(555) 382-9100",
        navLinks: ["Plumbing", "Electrical", "HVAC", "Contact"]
      }
    },
    {
      id: "ph-hero-1",
      type: "PHHero",
      props: {
        headline: "Fast, Reliable Home Services\nYou Can Trust",
        sub: "Serving the greater valley area since 2006. Licensed, bonded, and insured professionals available 24/7.",
        phone: "(555) 382-9100",
        ctaText: "Book a Service Call",
        bgImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2070&q=80",
        badges: ["Licensed & Bonded", "5-Star Rated", "24/7 Emergency", "Free Estimates"]
      }
    },
    {
      id: "ph-stats-1",
      type: "PHStats",
      props: {
        stats: [
          { value: "18+", label: "Years in Business" },
          { value: "12,400+", label: "Customers Served" },
          { value: "4.9★", label: "Average Rating" },
          { value: "< 2hrs", label: "Avg Response Time" }
        ]
      }
    },
    {
      id: "ph-services-1",
      type: "PHServices",
      props: {
        title: "Our Services",
        subtitle: "Full-spectrum home services from the valley's most trusted crew.",
        services: [
          { icon: "Wrench", name: "Plumbing", desc: "Leaks, clogs, water heaters, pipe repair, and remodels." },
          { icon: "Zap", name: "Electrical", desc: "Panel upgrades, outlets, lighting, and EV charger installs." },
          { icon: "Wind", name: "HVAC", desc: "AC repair, furnace tune-up, duct cleaning, and new systems." },
          { icon: "Droplets", name: "Drain Cleaning", desc: "Hydro-jetting, camera inspection, and sewer line service." },
          { icon: "Flame", name: "Water Heaters", desc: "Tank & tankless install, repair, and annual service." },
          { icon: "Shield", name: "24/7 Emergency", desc: "Round-the-clock dispatch for urgent home crises." }
        ]
      }
    },
    {
      id: "ph-process-1",
      type: "PHProcess",
      props: {
        title: "How It Works",
        steps: [
          { num: "01", heading: "Call or Book Online", body: "Reach us any time via phone, text, or our online booking form. No hold times — we answer fast." },
          { num: "02", heading: "We Dispatch a Pro", body: "A vetted, uniformed technician arrives on-time with all the tools for your service type." },
          { num: "03", heading: "Job Done Right", body: "We fix it properly, clean up after ourselves, and follow up to make sure you're satisfied." }
        ]
      }
    },
    {
      id: "ph-testimonials-1",
      type: "PHTestimonials",
      props: {
        title: "What Our Customers Say",
        reviews: [
          { name: "Sandra M.", service: "Plumbing Repair", rating: 5, text: "Showed up within 90 minutes and had my burst pipe fixed in under an hour. Absolutely saved us during the holidays." },
          { name: "Derek H.", service: "HVAC Tune-Up", rating: 5, text: "The technician was polite, knowledgeable, and didn't try to upsell me on anything I didn't need. Rare to find that." },
          { name: "Priya K.", service: "Electrical Panel", rating: 5, text: "Upgraded my old panel to 200A with zero hiccups. Clean work, passed inspection first try. Will use again." },
          { name: "Tom G.", service: "Water Heater Install", rating: 5, text: "Same-day install of a new tankless unit. Fast, clean, and they explained everything. Outstanding." }
        ]
      }
    },
    {
      id: "ph-cta-1",
      type: "PHCTA",
      props: {
        headline: "Need a Pro Today?",
        sub: "We dispatch within the hour. No diagnostic fees. Just honest service from real professionals.",
        phone: "(555) 382-9100",
        ctaText: "Schedule Online"
      }
    },
    {
      id: "ph-footer-1",
      type: "PHFooter",
      props: {
        businessName: "Valley ProHome Services",
        phone: "(555) 382-9100",
        email: "hello@valleyprohome.com",
        address: "3820 Industrial Blvd, Your City, ST 12345",
        links: ["Plumbing", "Electrical", "HVAC", "Reviews", "Emergency Service"],
        copyright: "© 2025 Valley ProHome Services. All rights reserved."
      }
    }
  ],

  // ── MAISON BOUTIQUE ─────────────────────────────────────────────────────────
  maison_boutique: [
    {
      id: "mb-hero-1",
      type: "MBHero",
      props: {
        headline: "Dressed for\nyour story.",
        sub: "Curated collections for women who live intentionally. New arrivals every Thursday.",
        ctaText: "Shop New Arrivals",
        secondaryText: "Explore Lookbook",
        badge: "New Collection · Spring 2025",
        bgImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: "mb-about-1",
      type: "MBAbout",
      props: {
        eyebrow: "Our Story",
        headline: "More than a boutique.\nA way of life.",
        body: "Founded in 2018, Maison was built on the belief that getting dressed should feel joyful — not overwhelming. We source only from makers who share our commitment to quality, ethics, and lasting style over passing trends.",
        ctaText: "Meet the Founders",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: "mb-collections-1",
      type: "MBCollections",
      props: {
        eyebrow: "Shop",
        title: "Current Collections",
        collections: [
          { label: "New Arrivals", sub: "24 pieces", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" },
          { label: "Essentials", sub: "Year-round staples", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" },
          { label: "Sale", sub: "Up to 40% off", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80" }
        ]
      }
    },
    {
      id: "mb-quote-1",
      type: "MBQuote",
      props: {
        quote: "Style is a way of saying who you are without having to speak.",
        attribution: "— Rachel Zoe"
      }
    },
    {
      id: "mb-testimonials-1",
      type: "MBTestimonials",
      props: {
        eyebrow: "Our Customers",
        title: "They love it here.",
        reviews: [
          { name: "Claire B.", rating: 5, text: "I discovered Maison two years ago and haven't shopped anywhere else since. The quality is impeccable and the team actually knows fashion." },
          { name: "Nadia S.", rating: 5, text: "The curation here is unlike anything I've seen locally. Every piece feels like it was chosen with purpose. My wardrobe has completely transformed." },
          { name: "Taylor M.", rating: 5, text: "Ordered online and everything arrived beautifully packaged. Sizing was perfect and the fabric quality is way above the price point." }
        ]
      }
    },
    {
      id: "mb-newsletter-1",
      type: "MBNewsletter",
      props: {
        headline: "Be the first to know.",
        sub: "New arrivals, private events, and styling tips — straight to your inbox.",
        placeholder: "Your email address",
        buttonText: "Subscribe",
        fine: "No spam, ever. Unsubscribe anytime."
      }
    },
    {
      id: "mb-footer-1",
      type: "MBFooter",
      props: {
        businessName: "Maison Boutique",
        tagline: "Intentional style. Lasting quality.",
        copyright: "© 2025 Maison Boutique. All rights reserved.",
        shop: ["New Arrivals", "Essentials", "Sale", "Lookbook"],
        company: ["Our Story", "Sustainability", "Press", "Careers"],
        support: ["Sizing Guide", "Shipping & Returns", "FAQ", "Contact Us"]
      }
    }
  ]
};

export const TEMPLATE_PAGES: Record<string, { name: string; slug: string; sections: SectionData[] }[]> = {
  greenscape: [
    {
      name: 'Home',
      slug: '/',
      sections: [
        { id: "gs-home-header", type: "GSHeader", props: { businessName: "Greenscape", tagline: "Landscaping", phone: "(408) 123-4567", address: "Proudly serving Sunnyvale and surrounding areas", hours: "Mon - Sat: 7AM - 6PM", ctaText: "Get a Free Quote" } },
        { id: "gs-home-hero", type: "GSHero", props: { title: "Beautiful landscapes.\nBuilt for your life.", subtitle: "Expert landscaping services that enhance your property and add lasting value. Rooted in quality since 2012.", bgImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80" } },
        { id: "gs-home-services", type: "GSServices", props: { services: [
          { iconName: 'Shovel', title: 'Lawn Care', desc: 'Expert maintenance for every season.' },
          { iconName: 'Trees', title: 'Landscape Design', desc: 'Custom designs tailored to you.' },
          { iconName: 'Leaf', title: 'Garden & Planting', desc: 'Beautiful plants and expert care.' },
          { iconName: 'Droplets', title: 'Hardscaping', desc: 'Patios, walkways, and walls.' },
          { iconName: 'ShieldCheck', title: 'Irrigation', desc: 'Efficient water-saving systems.' },
          { iconName: 'Trash2', title: 'Cleanup', desc: 'Yard cleanup and debris removal.' }
        ] } },
        { id: "gs-home-about", type: "GSAbout", props: { title: "Rooted in our community. \nCommitted to excellence.", desc: "Greenscape Landscaping is a locally owned and operated business serving Sunnyvale and surrounding areas. We take pride in our work, our reliability, and the relationships we build with our clients.", image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80" } },
        { id: "gs-home-projects", type: "GSProjects", props: { title: "Projects we're proud of", projects: [
          { title: 'Backyard Retreat', loc: 'Sunnyvale, CA', img: 'https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=800&q=80' },
          { title: 'Modern Front Yard', loc: 'Mountain View, CA', img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80' },
          { title: 'Elegant Pathway', loc: 'Cupertino, CA', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
          { title: 'Drought-Tolerant', loc: 'Santa Clara, CA', img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=800&q=80' }
        ] } },
        { id: "gs-home-cta", type: "GSCta", props: { title: "Let's build something \nbeautiful together.", subtitle: "Contact us today for your free quote and start your transition to a more beautiful life outdoors." } },
        { id: "gs-home-footer", type: "GSFooter", props: { text: "© 2026 Greenscape Landscaping. Licensed & Insured. Serving the Bay Area." } }
      ]
    },
    {
      name: 'Services',
      slug: '/services',
      sections: [
        { id: "gs-services-header", type: "GSHeader", props: { businessName: "Greenscape", tagline: "Landscaping", phone: "(408) 123-4567", address: "Proudly serving Sunnyvale and surrounding areas", hours: "Mon - Sat: 7AM - 6PM", ctaText: "Get a Free Quote" } },
        { id: "gs-services-hero", type: "GSHero", props: { title: "Our Landscaping\nServices", subtitle: "We offer professional lawn care, design, hardscaping, irrigation, and yard cleanups.", bgImage: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=2070&q=80" } },
        { id: "gs-services-grid", type: "GSServices", props: { services: [
          { iconName: 'Shovel', title: 'Lawn Care', desc: 'Expert maintenance for every season.' },
          { iconName: 'Trees', title: 'Landscape Design', desc: 'Custom designs tailored to you.' },
          { iconName: 'Leaf', title: 'Garden & Planting', desc: 'Beautiful plants and expert care.' },
          { iconName: 'Droplets', title: 'Hardscaping', desc: 'Patios, walkways, and walls.' },
          { iconName: 'ShieldCheck', title: 'Irrigation', desc: 'Efficient water-saving systems.' },
          { iconName: 'Trash2', title: 'Cleanup', desc: 'Yard cleanup and debris removal.' }
        ] } },
        { id: "gs-services-cta", type: "GSCta", props: { title: "Let's build something \nbeautiful together.", subtitle: "Contact us today for your free quote and start your transition to a more beautiful life outdoors." } },
        { id: "gs-services-footer", type: "GSFooter", props: { text: "© 2026 Greenscape Landscaping. Licensed & Insured. Serving the Bay Area." } }
      ]
    },
    {
      name: 'About Us',
      slug: '/about',
      sections: [
        { id: "gs-about-header", type: "GSHeader", props: { businessName: "Greenscape", tagline: "Landscaping", phone: "(408) 123-4567", address: "Proudly serving Sunnyvale and surrounding areas", hours: "Mon - Sat: 7AM - 6PM", ctaText: "Get a Free Quote" } },
        { id: "gs-about-hero", type: "GSHero", props: { title: "Rooted in Our\nCommunity", subtitle: "Committed to excellence in Sunnyvale and the surrounding Bay Area since 2012.", bgImage: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=2070&q=80" } },
        { id: "gs-about-block", type: "GSAbout", props: { title: "Rooted in our community. \nCommitted to excellence.", desc: "Greenscape Landscaping is a locally owned and operated business serving Sunnyvale and surrounding areas. We take pride in our work, our reliability, and the relationships we build with our clients.", image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80" } },
        { id: "gs-about-cta", type: "GSCta", props: { title: "Let's build something \nbeautiful together.", subtitle: "Contact us today for your free quote and start your transition to a more beautiful life outdoors." } },
        { id: "gs-about-footer", type: "GSFooter", props: { text: "© 2026 Greenscape Landscaping. Licensed & Insured. Serving the Bay Area." } }
      ]
    },
    {
      name: 'Our Work',
      slug: '/projects',
      sections: [
        { id: "gs-projects-header", type: "GSHeader", props: { businessName: "Greenscape", tagline: "Landscaping", phone: "(408) 123-4567", address: "Proudly serving Sunnyvale and surrounding areas", hours: "Mon - Sat: 7AM - 6PM", ctaText: "Get a Free Quote" } },
        { id: "gs-projects-hero", type: "GSHero", props: { title: "Projects We're\nProud Of", subtitle: "Take a look at some of our recent backyard design and landscaping projects.", bgImage: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=2070&q=80" } },
        { id: "gs-projects-block", type: "GSProjects", props: { title: "Projects we're proud of", projects: [
          { title: 'Backyard Retreat', loc: 'Sunnyvale, CA', img: 'https://images.unsplash.com/photo-1592424040945-8bc2718104ee?auto=format&fit=crop&w=800&q=80' },
          { title: 'Modern Front Yard', loc: 'Mountain View, CA', img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80' },
          { title: 'Elegant Pathway', loc: 'Cupertino, CA', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
          { title: 'Drought-Tolerant', loc: 'Santa Clara, CA', img: 'https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=800&q=80' }
        ] } },
        { id: "gs-projects-cta", type: "GSCta", props: { title: "Let's build something \nbeautiful together.", subtitle: "Contact us today for your free quote and start your transition to a more beautiful life outdoors." } },
        { id: "gs-projects-footer", type: "GSFooter", props: { text: "© 2026 Greenscape Landscaping. Licensed & Insured. Serving the Bay Area." } }
      ]
    },
    {
      name: 'Contact',
      slug: '/contact',
      sections: [
        { id: "gs-contact-header", type: "GSHeader", props: { businessName: "Greenscape", tagline: "Landscaping", phone: "(408) 123-4567", address: "Proudly serving Sunnyvale and surrounding areas", hours: "Mon - Sat: 7AM - 6PM", ctaText: "Get a Free Quote" } },
        { id: "gs-contact-hero", type: "GSHero", props: { title: "Start Your Outdoor\nTransformation", subtitle: "Contact us today for a free, no-obligation estimate on your next project.", bgImage: "https://images.unsplash.com/photo-1416879598555-2272e5ae672b?auto=format&fit=crop&w=2070&q=80" } },
        { id: "gs-contact-block", type: "GSContact", props: { title: "Get In Touch", subtitle: "Ready to start your outdoor transformation? Let us know how we can help.", phone: "(408) 123-4567", email: "info@greenscape.com", address: "123 Greenway Dr, Sunnyvale, CA 94086" } },
        { id: "gs-contact-footer", type: "GSFooter", props: { text: "© 2026 Greenscape Landscaping. Licensed & Insured. Serving the Bay Area." } }
      ]
    }
  ],
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
