import Image from 'next/image';
import React from "react";
import Link from 'next/link';
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Smartphone,
  User,
  Menu as MenuIcon,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

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
      { name: "image", label: "Image URL", type: "text" },
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
      { name: "image", label: "Image URL", type: "text" },
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
    fields: [{ name: "text", label: "Footer Text", type: "textarea" }],
    defaultProps: {
      text: "© 2026 Northwood Coffee Co. All rights reserved. Locally roasted in the Pacific Northwest.",
    },
  },
};

const getIcon = (name: string) => {
  switch (name) {
    case "Coffee":
      return <Coffee className="w-8 h-8 text-[#8B5E3C]" />;
    case "MapPin":
      return <MapPin className="w-8 h-8 text-[#8B5E3C]" />;
    case "Smartphone":
      return <Smartphone className="w-8 h-8 text-[#8B5E3C]" />;
    case "User":
      return <User className="w-8 h-8 text-[#8B5E3C]" />;
    default:
      return <Coffee className="w-8 h-8 text-[#8B5E3C]" />;
  }
};

export const NW_RENDERERS = {
  NWEthos: ({ features }: any) => (
    <section className="py-12 @md:py-20 px-6 @md:px-12 bg-[#F4F1EA]">
      <div className="w-full max-w-7xl mx-auto @md:max-w-6xl">
        <div className="grid grid-cols-2 @md:grid-cols-4 gap-8 text-center">
          {features?.map((feature: any, i: number) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-4">{getIcon(feature.iconName)}</div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  NWFindUs: ({ address, cityState, phone, email, image }: any) => (
    <section className="py-12 @md:py-20 bg-[#1B1F16] text-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 @md:px-12">
        <div className="grid @md:grid-cols-2 gap-8 @md:gap-12 items-center">
          <div>
            <span className="italic text-[#D4AF37] text-2xl mb-4 block">
              Come say hi!
            </span>
            <h2 className="text-4xl @sm:text-5xl @md:text-7xl font-bold mb-8 uppercase">
              Find Us
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#8B5E3C] shrink-0" />
                <div>
                  <p className="font-bold text-xl uppercase tracking-tighter">
                    {address}
                  </p>
                  <p className="text-white/60">{cityState}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                <Phone className="w-6 h-6 text-[#8B5E3C] shrink-0" />
                <p className="font-bold text-xl">{phone}</p>
              </div>
              <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                <Mail className="w-6 h-6 text-[#8B5E3C] shrink-0" />
                <p className="font-bold text-xl">{email}</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square @md:aspect-[4/5]">
            <Image               src={(image) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
              alt="Location"
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            fill />
          </div>
        </div>
      </div>
    </section>
  ),
  NWMenu: ({ coffee, food, seasonal }: any) => (
    <section className="py-12 @md:py-20 px-6 @md:px-12 bg-white text-[#2C2C2C] font-serif">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="italic text-[#8B5E3C] text-xl block mb-2">
              Our Menu
            </span>
            <h2 className="text-3xl @sm:text-4xl @md:text-5xl font-black uppercase tracking-tighter">
              Something for everyone
            </h2>
          </div>
        </div>
        <div className="grid @md:grid-cols-3 gap-8 @md:gap-12">
          {/* Coffee */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <Coffee className="w-5 h-5" /> Coffee
            </h3>
            <div className="space-y-4">
              {coffee?.map((item: any, i: number) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-black/5 pb-2"
                >
                  <span className="font-bold">{item.name}</span>
                  <span className="font-light">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Food */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <MenuIcon className="w-5 h-5" /> Food
            </h3>
            <div className="space-y-4">
              {food?.map((item: any, i: number) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-black/5 pb-2"
                >
                  <span className="font-bold">{item.name}</span>
                  <span className="font-light">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Seasonal */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#D4AF37]" /> Seasonal Specials
            </h3>
            <div className="space-y-4">
              {seasonal?.map((item: any, i: number) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-black/5 pb-2 text-[#8B5E3C]"
                >
                  <span className="font-bold">{item.name}</span>
                  <span className="font-light">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
  NWOrderAhead: ({ title, subtitle, image }: any) => (
    <section className="py-12 @md:py-20 px-6 @md:px-12 bg-[#F4F1EA]">
      <div className="w-full max-w-7xl mx-auto bg-[#1B1F16] text-white rounded-[40px] overflow-hidden">
        <div className="grid @lg:grid-cols-2 items-center">
          <div className="p-8 @md:p-12 @lg:p-16">
            <span className="italic text-[#D4AF37] text-2xl mb-4 block">
              Skip the line
            </span>
            <h2 className="text-4xl @sm:text-5xl @md:text-7xl font-bold mb-8 uppercase leading-none">
              {title}
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-md">{subtitle}</p>
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <MenuIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">
                  Choose items
                </span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">
                  Pick your time
                </span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">
                  Pick Up
                </span>
              </div>
            </div>
            <button className="w-full @sm:w-auto bg-[#8B5E3C] text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-[#A67B5B] transition-all pointer-events-none">
              Start Ordering
            </button>
          </div>
          <div className="relative h-full min-h-[400px]">
            <Image               src={(image) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}
              className="absolute inset-0 w-full h-full object-cover"
              alt="App"
              referrerPolicy="no-referrer"
            fill />
          </div>
        </div>
      </div>
    </section>
  ),
  NWCommunity: ({ testimonials }: any) => (
    <section className="py-12 @md:py-20 px-6 @md:px-12 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="italic text-[#8B5E3C] text-xl block mb-2">
            Stronger together
          </span>
          <h2 className="text-3xl @sm:text-4xl @md:text-5xl font-black uppercase tracking-tighter mb-4">
            Our Community
          </h2>
          <p className="text-black/60 max-w-xl mx-auto">
            We're more than just coffee. We're a gathering place, a creative
            space, and a proud supporter of local artists and makers.
          </p>
        </div>

        <div className="grid @md:grid-cols-4 gap-6">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
            <Image               src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Cafe culture"
              referrerPolicy="no-referrer"
            fill />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group @md:pt-12">
            <Image               src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2074&auto=format&fit=crop"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Latte art"
              referrerPolicy="no-referrer"
            fill />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
            <Image               src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Cafe vibe"
              referrerPolicy="no-referrer"
            fill />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group @md:pt-12">
            <Image               src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Pastry"
              referrerPolicy="no-referrer"
            fill />
          </div>
        </div>

        <div className="mt-20 grid @md:grid-cols-3 gap-8 @md:gap-12 max-w-5xl mx-auto">
          {testimonials?.map((review: any, i: number) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(parseInt(review.rating) || 5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>
              <p className="text-lg font-light italic mb-4">"{review.text}"</p>
              <span className="font-bold uppercase tracking-widest text-xs">
                — {review.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  NWFooter: ({ text }: any) => (
    <footer className="py-12 bg-[#1B1F16] text-white/50 border-t border-white/10 text-center px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <Coffee className="w-8 h-8 text-[#8B5E3C] mb-6" />
        <p className="max-w-md mx-auto text-sm">{text}</p>
        <div className="flex gap-4 mt-8">
          <Link href="#" className="hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  ),
};
