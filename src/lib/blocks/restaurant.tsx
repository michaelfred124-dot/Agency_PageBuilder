import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {
  Utensils,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Star,
  ArrowRight,
  Sparkles,
  Heart
} from 'lucide-react';

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

export const RESTAURANT_RENDERERS = {
  RHero: ({ badge, title, description, primaryBtnText, secondaryBtnText, bgImage }: any) => (
    <section className="relative min-h-[90vh] flex items-center bg-black/40 text-white font-sans py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop"} 
          className="w-full h-full object-cover" 
          alt="Hero"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0f110e]/70" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6">
        {badge && (
          <span className="inline-block text-[#D6C5A0] text-xs font-semibold uppercase tracking-[0.25em] border border-[#D6C5A0]/30 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
            {badge}
          </span>
        )}
        <h1 className="text-4xl @sm:text-5xl @md:text-7xl font-serif leading-tight">
          {title.split(' ').map((word: string, index: number) => {
            if (index >= title.split(' ').length - 2) {
              return <em key={index} className="italic text-[#D6C5A0] font-normal not-italic font-serif block @sm:inline"> {word}</em>;
            }
            return ' ' + word;
          })}
        </h1>
        <p className="text-white/70 max-w-xl mx-auto text-sm @md:text-base font-light leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col @sm:flex-row justify-center items-center gap-4 pt-4">
          {primaryBtnText && (
            <button className="w-full @sm:w-auto bg-[#D6C5A0] text-[#1e231c] px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-[#e4d6b6] transition-all pointer-events-none">
              {primaryBtnText}
            </button>
          )}
          {secondaryBtnText && (
            <button className="w-full @sm:w-auto border border-white/20 hover:border-white text-white px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all pointer-events-none bg-white/5 backdrop-blur-sm">
              {secondaryBtnText}
            </button>
          )}
        </div>
      </div>
    </section>
  ),
  RFeatures: ({ tag, title, features }: any) => (
    <section className="py-20 px-6 bg-[#FAF8F5] text-[#2C2A29]">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          {tag && <span className="text-[#D6C5A0] text-xs font-bold uppercase tracking-widest block">{tag}</span>}
          <h2 className="text-3xl @md:text-5xl font-serif">
            {title.split(' ').map((word: string, index: number) => {
              if (index === title.split(' ').length - 1) {
                return <em key={index} className="italic font-normal font-serif"> {word}</em>;
              }
              return ' ' + word;
            })}
          </h2>
        </div>

        <div className="grid @md:grid-cols-3 gap-8">
          {features?.map((feat: any, idx: number) => (
            <div key={idx} className="bg-white border border-[#2D3B2D]/5 p-8 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#D6C5A0]/40 transition-colors">
              <span className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#2D3B2D] font-serif font-black text-sm border border-[#2D3B2D]/5">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-xl font-bold">{feat.title}</h3>
              <p className="text-xs text-[#2C2A29]/65 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  RMenuPreview: ({ tag, title, subtitle, btnText, category1Title, category1Items, category2Title, category2Items }: any) => (
    <section className="py-20 px-6 bg-white text-[#2C2A29]">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          {tag && <span className="text-[#D6C5A0] text-xs font-bold uppercase tracking-widest block">{tag}</span>}
          <h2 className="text-3xl @md:text-5xl font-serif">
            {title.split(' ').map((word: string, index: number) => {
              if (index === title.split(' ').length - 1) {
                return <em key={index} className="italic font-normal font-serif"> {word}</em>;
              }
              return ' ' + word;
            })}
          </h2>
          {subtitle && <p className="text-xs text-[#2C2A29]/60 max-w-md mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        <div className="grid @lg:grid-cols-2 gap-16">
          {/* Category 1 */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl font-bold border-b border-[#2D3B2D]/10 pb-3 flex items-center justify-between">
              <span>{category1Title}</span>
              <span className="text-xs font-sans text-slate-400 font-normal uppercase tracking-wider">Starters</span>
            </h3>
            <div className="space-y-6">
              {category1Items?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-serif text-lg font-bold hover:text-[#D6C5A0] transition-colors">{item.name}</h4>
                    <p className="text-xs text-[#2C2A29]/60 leading-normal">{item.desc}</p>
                  </div>
                  <span className="font-serif text-[#2D3B2D] font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl font-bold border-b border-[#2D3B2D]/10 pb-3 flex items-center justify-between">
              <span>{category2Title}</span>
              <span className="text-xs font-sans text-slate-400 font-normal uppercase tracking-wider">Mains</span>
            </h3>
            <div className="space-y-6">
              {category2Items?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-serif text-lg font-bold hover:text-[#D6C5A0] transition-colors">{item.name}</h4>
                    <p className="text-xs text-[#2C2A29]/60 leading-normal">{item.desc}</p>
                  </div>
                  <span className="font-serif text-[#2D3B2D] font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {btnText && (
          <div className="text-center pt-4">
            <button className="bg-[#2D3B2D] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-[#3d4d3d] transition-all pointer-events-none">
              {btnText}
            </button>
          </div>
        )}
      </div>
    </section>
  ),
  RAtmosphere: ({ tag, title, subtitle, img1, img2, img3, img4, img5, img6 }: any) => {
    const images = [img1, img2, img3, img4, img5, img6].filter(Boolean);
    return (
      <section className="py-20 px-6 bg-[#FAF8F5] text-[#2C2A29]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            {tag && <span className="text-[#D6C5A0] text-xs font-bold uppercase tracking-widest block">{tag}</span>}
            <h2 className="text-3xl @md:text-5xl font-serif">
              {title.split(' ').map((word: string, index: number) => {
                if (index === title.split(' ').length - 1) {
                  return <em key={index} className="italic font-normal font-serif"> {word}</em>;
                }
                return ' ' + word;
              })}
            </h2>
            {subtitle && <p className="text-xs text-[#2C2A29]/60 max-w-md mx-auto leading-relaxed">{subtitle}</p>}
          </div>

          <div className="grid grid-cols-2 @md:grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden group bg-slate-100 rounded-lg aspect-square ${idx === 0 ? 'col-span-2 row-span-2 aspect-[4/3] @md:aspect-square' : ''}`}
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Atmosphere"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0f110e]/10 group-hover:bg-[#0f110e]/35 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
  RChef: ({ tag, name, title, bio1, bio2, quote, image }: any) => (
    <section className="py-20 px-6 bg-white text-[#2C2A29]">
      <div className="max-w-5xl mx-auto">
        <div className="grid @lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={image || "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800"} 
              className="w-full h-full object-cover" 
              alt="Chef"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#2D3B2D]/10" />
          </div>

          <div className="space-y-6">
            {tag && <span className="text-[#D6C5A0] text-xs font-bold uppercase tracking-widest block">{tag}</span>}
            <div className="space-y-1">
              <h3 className="font-serif text-3xl @md:text-4xl font-bold">{name}</h3>
              <p className="text-xs uppercase tracking-widest text-[#2D3B2D] font-bold">{title}</p>
            </div>
            <div className="w-12 h-px bg-[#D6C5A0]" />
            <div className="space-y-4 text-xs @md:text-sm text-[#2C2A29]/75 leading-relaxed font-light">
              <p>{bio1}</p>
              {bio2 && <p>{bio2}</p>}
            </div>
            {quote && (
              <blockquote className="border-l-2 border-[#D6C5A0] pl-4 italic text-sm text-[#2C2A29]/80 font-serif leading-relaxed">
                "{quote}"
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  ),
  RReviews: ({ tag, title, reviews }: any) => (
    <section className="py-20 px-6 bg-[#4A5D4E] text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          {tag && <span className="text-[#D6C5A0] text-xs font-bold uppercase tracking-widest block">{tag}</span>}
          <h2 className="text-3xl @md:text-5xl font-serif text-[#FAF8F5]">
            {title.split(' ').map((word: string, index: number) => {
              if (index === title.split(' ').length - 1) {
                return <em key={index} className="italic font-normal font-serif text-[#D6C5A0]"> {word}</em>;
              }
              return ' ' + word;
            })}
          </h2>
        </div>

        <div className="grid @md:grid-cols-3 gap-8">
          {reviews?.map((rev: any, idx: number) => (
            <div key={idx} className="bg-[#566D5B] border border-white/5 p-8 flex flex-col justify-between space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="space-y-4">
                <div className="flex text-[#D6C5A0] gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-[#D6C5A0]" />
                  <Star className="w-3.5 h-3.5 fill-[#D6C5A0]" />
                  <Star className="w-3.5 h-3.5 fill-[#D6C5A0]" />
                  <Star className="w-3.5 h-3.5 fill-[#D6C5A0]" />
                  <Star className="w-3.5 h-3.5 fill-[#D6C5A0]" />
                </div>
                <p className="text-xs italic leading-relaxed text-white/90">"{rev.text}"</p>
              </div>
              <div className="border-t border-white/10 pt-4 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FAF8F5]">{rev.author}</span>
                <span className="text-[9px] text-white/50 uppercase tracking-widest mt-0.5">{rev.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  RHoursInfo: ({ address, phone, email, hours }: any) => (
    <section className="py-20 px-6 bg-white text-[#2C2A29]">
      <div className="max-w-5xl mx-auto">
        <div className="grid @md:grid-cols-3 gap-12 @md:gap-8 divide-y @md:divide-y-0 @md:divide-x divide-[#2D3B2D]/10">
          <div className="space-y-4 @md:px-4">
            <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2D3B2D]">Location</h4>
            <p className="text-xs leading-relaxed text-[#2C2A29]/75 font-light">
              {address}
            </p>
            <Link href="#" className="inline-block text-xs font-bold uppercase tracking-wider text-[#D6C5A0] hover:underline">
              Get Directions →
            </Link>
          </div>

          <div className="space-y-4 pt-8 @md:pt-0 @md:px-8">
            <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2D3B2D]">Hours</h4>
            <ul className="space-y-2 text-xs font-light text-[#2C2A29]/75">
              {hours?.map((item: any, idx: number) => (
                <li key={idx} className="flex justify-between border-b border-[#2D3B2D]/5 pb-1">
                  <span className="font-bold">{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-8 @md:pt-0 @md:px-8">
            <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2D3B2D]">Contact</h4>
            <div className="space-y-2 text-xs text-[#2C2A29]/75 font-light">
              <p>
                <strong className="block font-bold text-[#2C2A29] mb-0.5">Reservations:</strong>
                {phone}
              </p>
              <p>
                <strong className="block font-bold text-[#2C2A29] mb-0.5">Email:</strong>
                <a href={`mailto:${email}`} className="text-[#2D3B2D] hover:underline font-normal">{email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
  RCta: ({ title, subtitle, btnText, bgImage }: any) => (
    <section className="relative py-24 flex items-center bg-black/50 text-white font-sans overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2000"} 
          className="w-full h-full object-cover" 
          alt="CTA Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0f110e]/75" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
        <h2 className="text-3xl @sm:text-4xl @md:text-5xl font-serif">{title}</h2>
        <p className="text-white/70 max-w-md mx-auto text-xs @md:text-sm font-light leading-relaxed">
          {subtitle}
        </p>
        <button className="bg-[#D6C5A0] text-[#1e231c] px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-[#e4d6b6] transition-all pointer-events-none mt-4">
          {btnText}
        </button>
      </div>
    </section>
  ),
  RFooter: ({ businessName, tagline, desc, address, phone, email }: any) => (
    <footer className="bg-[#1e231c] text-white/50 py-16 px-6 border-t border-white/5 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid @md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="#" className="logo text-white block">
              <div className="flex items-center gap-2">
                <Utensils className="w-6 h-6 text-[#D6C5A0]" />
                <div className="font-serif font-black text-xl tracking-tight flex flex-col leading-none">
                  {businessName}
                  <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#D6C5A0] uppercase mt-0.5">{tagline}</span>
                </div>
              </div>
            </a>
            <p className="text-xs leading-relaxed text-white/60">{desc}</p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Reservations</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm uppercase tracking-wider">Private Events</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><Link href="/contact" className="hover:text-white transition-colors">Private Dining</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Corporate Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Wine Dinners</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Catering</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>{address}</li>
              <li>{phone}</li>
              <li><a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-[10px] tracking-wider uppercase text-white/30 flex flex-col @sm:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <p>Designed by ZADIE</p>
        </div>
      </div>
    </footer>
  )
};
