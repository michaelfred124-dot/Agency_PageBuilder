"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Car,
  Gem,
  ThumbsUp,
  Wallet,
  Star,
  Check,
  X,
  Menu,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ZoomIn,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
  Facebook,
  Twitter,
  Instagram,
  Award,
  ChevronRight as ChevronRightIcon
} from "lucide-react";
import EditableText from "@/components/EditableText";

// Brand Color Palette definitions
export const EDI_ORANGE = "#FF6B00";
export const EDI_BLUE = "#4DE1FF";
export const EDI_DARK = "#0F0F0F";
export const EDI_CARD = "#121212";
export const EDI_GOLD = "#FFD700";
export const EDI_TEAL = "#14B8A6";

// Inline Reveal Animation Component
interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "fit-content",
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width,
        position: "relative",
        overflow: isVisible ? "visible" : "hidden",
      }}
    >
      <div
        className={`transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

// Fallback Logo Component
const Logo: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <div
      className={`${className} shrink-0 relative flex items-center justify-center bg-[#1a1a1a] rounded-full border-2 overflow-hidden group`}
      style={{ borderColor: EDI_ORANGE }}
    >
      <div
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-colors duration-300"
        style={{ backgroundColor: EDI_ORANGE }}
      />
      <Car className="w-3/5 h-3/5 text-gray-100 relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
      <Sparkles
        className="absolute top-[20%] right-[20%] w-1/4 h-1/4 animate-pulse"
        style={{ color: EDI_ORANGE }}
        fill="currentColor"
      />
    </div>
  );
};

// Simple Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  let baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-gradient-to-r from-orange-500 via-[#FF6B00] to-red-600 bg-[length:200%_auto] text-white border-none shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]";
  } else if (variant === "outline") {
    variantStyles =
      "border-2 text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]";
  } else {
    variantStyles =
      "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20";
  }

  let sizeStyles = "";
  if (size === "sm") {
    sizeStyles = "px-4 py-2 text-xs rounded-lg";
  } else if (size === "lg") {
    sizeStyles = "px-10 py-5 text-sm rounded-2xl";
  } else {
    sizeStyles = "px-6 py-3.5 text-xs rounded-xl";
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      style={variant === "outline" ? { borderColor: EDI_ORANGE } : {}}
      {...props}
    >
      {children}
    </button>
  );
};

// --- SCHEMAS ---
export const EDI_SCHEMAS = {
  EDIHeader: {
    description: "Easy Does It navigation header",
    fields: [
      { name: "businessName", label: "Business Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "text" },
      { name: "ctaText", label: "CTA Button Text", type: "text" },
    ],
    defaultProps: {
      businessName: "Easy Does It",
      phone: "(209) 304-7288",
      ctaText: "Get Quote",
    },
  },
  EDIHero: {
    description: "Easy Does It Hero Section",
    fields: [
      { name: "title", label: "Headline Text", type: "textarea" },
      { name: "subtitle", label: "Subtitle Text", type: "textarea" },
      { name: "image", label: "Right Image URL", type: "text" },
      { name: "badgeText", label: "Rating Badge Text", type: "text" },
    ],
    defaultProps: {
      title: "Your Car Is \nIn Great Hands \nWith Us",
      subtitle:
        "Experience the ultimate shine. Our professionals bring showroom quality directly to your driveway, using advanced techniques and premium products.",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070",
      badgeText: "#1 Rated in County",
    },
  },
  EDIServices: {
    description: "Easy Does It Services Overview & Process Flow",
    fields: [
      { name: "heading", label: "How It Works Heading", type: "text" },
      { name: "description", label: "How It Works Description", type: "textarea" },
    ],
    defaultProps: {
      heading: "How it Works",
      description:
        "Our approach is focused on delivering outstanding results while ensuring a smooth and hassle-free experience for you.",
    },
  },
  EDIPricing: {
    description: "Easy Does It 3-Tier Detailing Plans",
    fields: [
      { name: "title", label: "Section Title", type: "text" },
      { name: "plan1Name", label: "Plan 1 Name", type: "text" },
      { name: "plan1Price", label: "Plan 1 Price", type: "text" },
      { name: "plan2Name", label: "Plan 2 Name", type: "text" },
      { name: "plan2Price", label: "Plan 2 Price", type: "text" },
      { name: "plan3Name", label: "Plan 3 Name", type: "text" },
      { name: "plan3Price", label: "Plan 3 Price", type: "text" },
    ],
    defaultProps: {
      title: "Pick what fits you best",
      plan1Name: "Basic",
      plan1Price: "115",
      plan2Name: "Premium",
      plan2Price: "200",
      plan3Name: "Ultimate",
      plan3Price: "250",
    },
  },
  EDIFaq: {
    description: "Easy Does It FAQ Accordion",
    fields: [
      { name: "title", label: "Section Title", type: "text" },
      { name: "subtitle", label: "Section Subtitle", type: "textarea" },
    ],
    defaultProps: {
      title: "Frequently Asked Questions",
      subtitle:
        "Have questions? Our FAQ section has you covered with quick answers to common inquiries about our detailing services.",
    },
  },
  EDIGallery: {
    description: "Easy Does It Slider Image Carousels",
    fields: [
      { name: "title", label: "Section Title", type: "text" },
      { name: "subtitle", label: "Section Subtitle", type: "textarea" },
    ],
    defaultProps: {
      title: "Automotive Artistry",
      subtitle:
        "Browse our gallery of recent work. We treat every vehicle like a masterpiece, ensuring perfection down to the microscopic level.",
    },
  },
  EDIContact: {
    description: "Easy Does It Contact Details & Booking Form",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      { name: "phone", label: "Phone", type: "text" },
      { name: "email", label: "Email", type: "text" },
      { name: "serviceArea", label: "Service Area", type: "text" },
    ],
    defaultProps: {
      title: "Ready for a Showroom Shine?",
      subtitle:
        "Fill out the form below to request a quote or book an appointment. We'll get back to you within 15 minutes during business hours.",
      phone: "(209) 304-7288",
      email: "contact@easydoesit.com",
      serviceArea: "Amador County, CA",
    },
  },
  EDIFooter: {
    description: "Easy Does It Site Footer",
    fields: [
      { name: "phone", label: "Phone Number", type: "text" },
      { name: "email", label: "Email Address", type: "text" },
      { name: "address", label: "Location/Service Area", type: "text" },
    ],
    defaultProps: {
      phone: "(209) 304-7288",
      email: "contact@easydoesit.com",
      address: "Ione, CA (Amador County)",
    },
  },
};

// --- RENDERERS ---
export const EDI_RENDERERS: Record<string, (props: any) => React.ReactNode> = {
  EDIHeader: ({ businessName, phone, ctaText, onNavigate }: any) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (action: string) => {
      setIsMobileMenuOpen(false);
      if (onNavigate) {
        onNavigate(action);
      }
    };

    const navLinks = [
      { name: "Home", action: "home" },
      { name: "Services", action: "services" },
      { name: "Gallery", action: "gallery" },
      { name: "Pricing", action: "pricing" },
      { name: "Contact", action: "contact" },
    ];

    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 py-2" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick("home")}>
            <Logo className="w-14 h-14 transition-transform duration-300 group-hover:scale-105" />
            <span className="hidden lg:block text-2xl font-bold tracking-tight text-white">
              {businessName}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.action)}
                className="text-base font-semibold text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full"
                  style={{ backgroundColor: EDI_ORANGE }}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right mr-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Call for Booking</p>
              <p className="text-white font-bold text-sm hover:text-orange-500 transition-colors">{phone}</p>
            </div>
            <Button size="md" className="hidden md:inline-flex" onClick={() => handleNavClick("contact")}>
              {ctaText}
            </Button>

            <button
              className="md:hidden text-white p-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-2xl">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.action)}
                  className="text-xl font-medium py-3 border-b border-white/5 text-left text-white"
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full mt-4" onClick={() => handleNavClick("contact")}>
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </header>
    );
  },
  EDIHero: ({ title, subtitle, image, badgeText, onNavigate }: any) => {
    return (
      <section className="relative min-h-screen pt-32 pb-12 px-4 md:px-8 flex items-center justify-center bg-[#050505] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[128px] pointer-events-none" />
        <div
          className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full blur-[128px] pointer-events-none"
          style={{ backgroundColor: `${EDI_ORANGE}10` }}
        />

        <div className="w-full max-w-[1600px] mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
            <div className="lg:col-span-7 relative bg-[#121212]/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-14 overflow-hidden border border-white/10 flex flex-col justify-center min-h-[600px] shadow-2xl shadow-black/50 group">
              <div
                className="absolute top-[-50%] right-[-50%] w-full h-full rounded-full blur-3xl pointer-events-none bg-gradient-to-b"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${EDI_ORANGE}0a, transparent)`,
                }}
              />

              <div className="relative z-10 space-y-8 text-left">
                <Reveal>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex bg-[#1A1A1A] border border-white/10 p-1.5 rounded-md gap-0.5 shadow-inner">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                      {badgeText}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold leading-[0.9] text-white tracking-tight uppercase whitespace-pre-line">
                    Your Car Is <br />
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-[length:200%_auto] animate-gradient-xy filter"
                      style={{ filter: "drop-shadow(0 0 20px rgba(255,107,0,0.3))" }}
                    >
                      In Great Hands
                    </span>{" "}
                    <br />
                    <span className="text-white">With Us</span>
                  </h1>
                </Reveal>

                <Reveal delay={200}>
                  <p className="text-gray-400 text-lg max-w-lg leading-relaxed mt-4 font-light">{subtitle}</p>
                </Reveal>

                <Reveal delay={300}>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button size="lg" onClick={() => onNavigate && onNavigate("pricing")}>
                      Get a Free Quote
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => onNavigate && onNavigate("contact")}>
                      Contact Us
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[400px] lg:h-auto rounded-[2.5rem] overflow-hidden group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 group-hover:opacity-80 transition-opacity duration-500" />
              <img
                src={image}
                alt="Car Detailing"
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 right-8 z-20 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                OPEN 7 DAYS
              </div>

              <div className="absolute bottom-8 left-8 z-20 text-left">
                <div className="flex items-center gap-2 font-bold mb-1 drop-shadow-lg">
                  <CheckCircle size={20} className="text-cyan-400" />
                  <span className="text-white">Fully Insured & Bonded</span>
                </div>
                <p className="text-white/60 text-sm">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
  EDIServices: ({ heading, description }: any) => {
    const features = [
      {
        icon: ThumbsUp,
        title: "Five Star Quality",
        desc: "Responsible professionals with great attention to detail. High-end equipment.",
        iconGradient: "from-[#FF6B00] to-red-600",
        glow: "bg-orange-500/20",
        startColor: "#FF6B00",
        endColor: "#E02424",
      },
      {
        icon: Wallet,
        title: "Reasonable Pricing",
        desc: "Best value-based pricing. You simply can't get a better deal elsewhere.",
        iconGradient: "from-amber-400 to-[#FF6B00]",
        glow: "bg-amber-500/20",
        startColor: "#FBBF24",
        endColor: "#FF6B00",
      },
      {
        icon: Star,
        title: "Service Done Right",
        desc: "Our detailing clients are our #1 priority. We pull out all the stops.",
        iconGradient: "from-[#FF6B00] to-yellow-500",
        glow: "bg-orange-500/20",
        startColor: "#FF6B00",
        endColor: "#EAB308",
      },
    ];

    const steps = [
      {
        icon: Smartphone,
        title: "Booking",
        desc: "Book online in 60 seconds. Choose your package and time slot.",
      },
      {
        icon: Car,
        title: "Detailing",
        desc: "Our fully equipped van arrives at your location to perform the service.",
      },
      {
        icon: Gem,
        title: "Excellence",
        desc: "Inspect the car with us and pay only when you are 100% satisfied.",
      },
    ];

    return (
      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {features.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 100} width="100%" className="h-full hover:z-30 relative text-left">
                <div className="h-full p-8 rounded-[2rem] bg-[#121212] border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none bg-gradient-to-br"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${feature.startColor}, ${feature.endColor})`,
                    }}
                  />

                  <div className={`absolute top-0 right-0 w-32 h-32 ${feature.glow} blur-[60px] rounded-full -mr-10 -mt-10 transition-opacity opacity-20 group-hover:opacity-60`} />

                  <div className="relative z-10">
                    <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 origin-left">
                      <feature.icon className="w-10 h-10" style={{ color: feature.startColor }} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal width="100%">
            <div className="bg-[#121212] rounded-[2.5rem] p-8 lg:p-16 border border-white/5 relative overflow-hidden group text-left">
              <div
                className="absolute top-0 left-0 w-full h-1 opacity-20"
                style={{
                  background: `linear-gradient(to right, transparent, ${EDI_ORANGE}, transparent)`,
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] blur-[100px] rounded-full pointer-events-none translate-y-1/3 translate-x-1/4"
                style={{
                  background: `linear-gradient(to top left, ${EDI_ORANGE}1a, transparent)`,
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                    {heading} <span className="inline-block animate-bounce" style={{ color: EDI_ORANGE }}>👉</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {steps.map((step, idx) => (
                    <div key={idx} className="relative group/step text-left">
                      <div
                        className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 group-hover/step:border-orange-500 transition-all shadow-lg hover:shadow-orange-500/20"
                        style={{ borderInlineColor: EDI_ORANGE }}
                      >
                        <step.icon className="w-6 h-6" style={{ color: EDI_ORANGE }} />
                      </div>

                      <h4 className="text-xl font-bold text-white mb-3 group-hover/step:text-orange-500 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed group-hover/step:text-gray-300 transition-colors">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  },
  EDIPricing: ({ title, plan1Name, plan1Price, plan2Name, plan2Price, plan3Name, plan3Price, onNavigate }: any) => {
    const [isMonthly, setIsMonthly] = useState(false);

    const plans = [
      {
        name: plan1Name,
        price: parseInt(plan1Price) || 115,
        description: "Perfect for maintaining a clean and protected vehicle.",
        features: [
          { text: "Hand wash & foam bath", included: true },
          { text: "Wheel & tire cleaning", included: true },
          { text: "Tire shine", included: true },
          { text: "Exterior windows cleaned", included: true },
          { text: "Full interior vacuum", included: false },
          { text: "Wipe down of surfaces", included: false },
          { text: "Clay bar decontamination", included: false },
        ],
      },
      {
        name: plan2Name,
        price: parseInt(plan2Price) || 200,
        popular: true,
        description: "A complete interior and exterior detail for a full refresh.",
        features: [
          { text: "Hand wash & foam bath", included: true },
          { text: "Wheel & tire cleaning", included: true },
          { text: "Tire shine", included: true },
          { text: "Exterior windows cleaned", included: true },
          { text: "Full interior vacuum", included: true },
          { text: "Wipe down of surfaces", included: true },
          { text: "Clay bar decontamination", included: false },
        ],
      },
      {
        name: plan3Name,
        price: parseInt(plan3Price) || 250,
        description: "The definitive detailing package for a showroom finish.",
        features: [
          { text: "Hand wash & foam bath", included: true },
          { text: "Wheel & tire cleaning", included: true },
          { text: "Tire shine", included: true },
          { text: "Exterior windows cleaned", included: true },
          { text: "Full interior vacuum", included: true },
          { text: "Wipe down of surfaces", included: true },
          { text: "Clay bar decontamination", included: true },
        ],
      },
    ];

    return (
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
          <img
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070"
            alt="Detailing Background"
            className="w-full h-full object-cover blur-sm opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal width="100%">
              <span
                className="text-transparent bg-clip-text font-bold tracking-widest text-xs uppercase"
                style={{ backgroundImage: `linear-gradient(to right, #F97316, ${EDI_ORANGE})` }}
              >
                Pricing Plans
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{title}</h2>

              <div className="inline-flex bg-[#121212]/80 p-1.5 rounded-full border border-white/10 mt-4 backdrop-blur-md relative overflow-hidden group">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
                    !isMonthly ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
                    isMonthly ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Monthly <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded ml-1 font-bold">-20%</span>
                </button>

                <div
                  className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-white/10 border border-white/10 transition-all duration-300 ${
                    isMonthly ? "left-[calc(50%+3px)]" : "left-1.5"
                  }`}
                />
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, idx) => (
              <Reveal key={idx} delay={idx * 150} width="100%" className="h-full hover:z-30 relative transition-all duration-300 text-left">
                <div className={`h-full p-[1px] rounded-[2.5rem] relative ${plan.popular ? "overflow-hidden" : "bg-white/10"}`}>
                  {plan.popular && (
                    <div
                      className="absolute inset-0 animate-gradient-xy opacity-100"
                      style={{
                        backgroundImage: `linear-gradient(to top right, #F97316, ${EDI_ORANGE}, #FBBF24)`,
                      }}
                    />
                  )}

                  <div className="relative p-8 rounded-[2.5rem] transition-all duration-300 hover:transform hover:-translate-y-2 group h-full flex flex-col backdrop-blur-md bg-[#121212]/95">
                    {plan.popular && (
                      <div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg z-10"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${EDI_ORANGE}, #E02424)`,
                        }}
                      >
                        Most Popular
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                    <div className="flex items-end gap-1 mb-8">
                      <span className="text-5xl font-bold tracking-tight text-white">
                        ${isMonthly ? Math.round(plan.price * 0.8) : plan.price}
                      </span>
                      <span className="text-gray-500 mb-2 font-medium">/ {isMonthly ? "mo" : "wash"}</span>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div
                            className={`rounded-full p-0.5 mt-0.5 ${
                              feature.included
                                ? "text-white"
                                : "bg-white/5 text-gray-600"
                            }`}
                            style={feature.included ? { backgroundImage: `linear-gradient(to bottom right, ${EDI_ORANGE}, #EA580C)` } : {}}
                          >
                            {feature.included ? <Check size={10} strokeWidth={3} /> : <X size={10} />}
                          </div>
                          <span className={`text-sm font-medium ${feature.included ? "text-gray-300" : "text-gray-650"}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant={plan.popular ? "primary" : "secondary"}
                      className="w-full"
                      onClick={() => onNavigate && onNavigate("contact")}
                    >
                      Choose {plan.name}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  },
  EDIFaq: ({ title, subtitle }: any) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = [
      {
        question: "What areas do you serve?",
        answer: "We currently serve the entire Amador County area, including Ione, Jackson, Sutter Creek, and surrounding neighborhoods.",
      },
      {
        question: "Do I need to provide water or power?",
        answer: "No! Our vans are fully equipped with their own water tank and electricity generator. We are 100% self-sufficient.",
      },
      {
        question: "How long does a typical detail take?",
        answer: "It depends on the package. A basic wash takes about 45-60 minutes, while a full interior/exterior detail can take 3-4 hours.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, cash, and digital payments like Apple Pay and Venmo upon completion of the service.",
      },
      {
        question: "Is my car safe with you?",
        answer: "Absolutely. We are fully insured and bonded. Our professionals undergo strict background checks and training.",
      },
    ];

    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-left">
            <Reveal>
              <span className="font-semibold tracking-wider text-sm uppercase" style={{ color: EDI_ORANGE }}>
                FAQ
              </span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">{title}</h2>
              <p className="text-gray-400 mb-8 text-lg">{subtitle}</p>
              <div className="p-6 bg-[#141414] rounded-2xl border border-white/5 inline-block">
                <p className="text-gray-300 font-medium mb-2">Still have questions?</p>
                <p className="text-gray-500 text-sm mb-4">
                  Can't find the answer you're looking for? Please contact our friendly team.
                </p>
                <button className="font-semibold hover:underline" style={{ color: EDI_ORANGE }}>
                  Get in touch
                </button>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4 text-left">
            {faqData.map((item, index) => (
              <Reveal key={index} delay={index * 100} width="100%">
                <div
                  className={`border rounded-2xl transition-all duration-300 ${
                    openIndex === index ? "bg-[#141414] border-orange-500/50" : "bg-transparent border-white/10 hover:border-white/20"
                  }`}
                >
                  <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                    <span className={`font-semibold text-lg ${openIndex === index ? "text-white" : "text-gray-300"}`}>
                      {item.question}
                    </span>
                    <div
                      className={`p-1 rounded-full ${
                        openIndex === index ? "text-black" : "bg-white/10 text-white"
                      }`}
                      style={openIndex === index ? { backgroundColor: EDI_ORANGE } : {}}
                    >
                      {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  },
  EDIGallery: ({ title, subtitle }: any) => {
    const collections = [
      {
        title: "Exterior Excellence",
        description: "From meticulous hand washes to advanced paint protection.",
        items: [
          {
            id: "e1",
            title: "Mirror Surface Polish",
            category: "Paint Correction",
            servicePackage: "Platinum",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
          },
          {
            id: "e2",
            title: "Deep Foam Bath",
            category: "Hand Wash",
            servicePackage: "Basic",
            image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200",
          },
          {
            id: "e3",
            title: "Hydrophobic Shield",
            category: "Ceramic Coating",
            servicePackage: "Platinum",
            image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200",
          },
        ],
      },
      {
        title: "Interior Restoration",
        description: "Deep cleansing and sanitization for a factory-fresh feel.",
        items: [
          {
            id: "i1",
            title: "Leather Care & Conditioning",
            category: "Conditioning",
            servicePackage: "Standard",
            image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200",
          },
          {
            id: "i2",
            title: "Intricate Cabin Detail",
            category: "Interior Detail",
            servicePackage: "Standard",
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200",
          },
        ],
      },
    ];

    const Carousel = ({ collection }: any) => {
      const scrollRef = useRef<HTMLDivElement>(null);

      const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
          const { current } = scrollRef;
          const scrollAmount = 340;
          const newScrollLeft = direction === "left" ? current.scrollLeft - scrollAmount : current.scrollLeft + scrollAmount;

          current.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
          });
        }
      };

      return (
        <div className="py-8 text-left">
          <div className="flex items-end justify-between mb-8 px-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
              <p className="text-gray-400 text-sm">{collection.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-white/10 bg-[#121212] flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-white/10 bg-[#121212] flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {collection.items.map((item: any) => (
              <div
                key={item.id}
                className="min-w-[300px] md:min-w-[400px] h-[450px] relative group rounded-3xl overflow-hidden snap-center bg-[#121212] border border-white/5"
              >
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-85" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-3">
                    <span
                      className="px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md rounded-full border"
                      style={{
                        backgroundColor: `${EDI_ORANGE}30`,
                        borderColor: `${EDI_ORANGE}50`,
                      }}
                    >
                      {item.servicePackage}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-bold text-gray-300 uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                  <div
                    className="w-12 h-1 rounded-full mt-4 transform origin-left transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: EDI_ORANGE }}
                  ></div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                  <ZoomIn size={18} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    return (
      <div className="min-h-screen bg-[#050505] pt-24 pb-20">
        <section className="relative px-4 mb-12 text-center">
          <div className="container mx-auto max-w-7xl">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
                style={{
                  backgroundColor: `${EDI_ORANGE}1a`,
                  borderColor: `${EDI_ORANGE}30`,
                }}
              >
                <Award size={14} style={{ color: EDI_ORANGE }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: EDI_ORANGE }}>
                  Our Portfolio
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Automotive <span style={{ color: EDI_ORANGE }}>Artistry</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>
            </Reveal>
          </div>
        </section>

        <div className="container mx-auto max-w-[1400px] mb-24 space-y-12">
          {collections.map((collection, idx) => (
            <Reveal key={idx} width="100%" delay={idx * 100}>
              <Carousel collection={collection} />
            </Reveal>
          ))}
        </div>
      </div>
    );
  },
  EDIContact: ({ title, subtitle, phone, email, serviceArea, tenantId, isEditable }: any) => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", vehicle: "", service: "Not Sure", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (isEditable) return;

      setStatus("submitting");
      setErrorMessage("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tenantId,
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            message: `${formData.service} Detail request for vehicle ${formData.vehicle}. Message: ${formData.message}`,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to submit");
        }

        setStatus("success");
        setFormData({ fullName: "", phone: "", email: "", vehicle: "", service: "Not Sure", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } catch (err: any) {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try giving us a call instead.");
      }
    };

    return (
      <section className="bg-[#050505] pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl text-center mb-16">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
              style={{
                backgroundColor: `${EDI_BLUE}10`,
                borderColor: `${EDI_BLUE}20`,
              }}
            >
              <Calendar size={14} style={{ color: EDI_BLUE }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: EDI_BLUE }}>
                Book Now
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready for a <span style={{ color: EDI_ORANGE }}>Showroom Shine?</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>
          </Reveal>
        </div>

        <div className="container mx-auto px-4 max-w-7xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <Reveal width="100%">
                <div className="bg-[#121212] rounded-[2.5rem] p-8 border border-white/5 relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full -mr-10 -mt-10 pointer-events-none"
                    style={{ backgroundColor: `${EDI_BLUE}1a` }}
                  />

                  <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div
                        className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10"
                        style={{ color: EDI_BLUE }}
                      >
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Call or Text</p>
                        <p className="text-xl font-bold text-white">{phone}</p>
                        <p className="text-sm text-gray-400 mt-1">Mon-Sun: 8am - 6pm</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div
                        className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10"
                        style={{ color: EDI_ORANGE }}
                      >
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Email Us</p>
                        <p className="text-xl font-bold text-white">{email}</p>
                        <p className="text-sm text-gray-400 mt-1">24/7 Support</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div
                        className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10"
                        style={{ color: EDI_GOLD }}
                      >
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Service Area</p>
                        <p className="text-xl font-bold text-white">{serviceArea}</p>
                        <p className="text-sm text-gray-400 mt-1">Ione, Jackson, Sutter Creek & more</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-10 border-t border-white/10">
                    <h4 className="font-bold text-white mb-4">Business Hours</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-white">8:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-white">9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-white">By Appointment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal width="100%" delay={100}>
                <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-3xl border border-white/10 flex items-center gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <CheckCircle className="text-green-500" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">100% Satisfaction Guarantee</p>
                    <p className="text-sm text-gray-400">If you're not happy, we'll re-wash it for free.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal width="100%" delay={200}>
                <form onSubmit={handleSubmit} className="bg-[#121212] rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative group">
                  <div
                    className="absolute top-0 right-0 w-64 h-64 blur-[80px] rounded-full pointer-events-none transition-colors duration-700"
                    style={{ backgroundColor: `${EDI_BLUE}08` }}
                  />

                  <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="(209) 304-7288"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">Vehicle Make/Model</label>
                      <input
                        type="text"
                        placeholder="e.g. Tesla Model 3"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <label className="text-sm text-gray-400 font-medium ml-1">Service Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Not Sure">Select a Service...</option>
                      <option value="Basic">Basic Detail ($115)</option>
                      <option value="Premium">Premium Detail ($200)</option>
                      <option value="Ultimate">Ultimate Detail ($250)</option>
                      <option value="Ceramic Coating">Ceramic Coating</option>
                      <option value="Paint Correction">Paint Correction</option>
                    </select>
                  </div>

                  <div className="space-y-2 mb-8">
                    <label className="text-sm text-gray-400 font-medium ml-1">Message (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your vehicle's condition..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-600 resize-none"
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mb-6 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                      <AlertCircle size={18} />
                      {errorMessage}
                    </div>
                  )}

                  {status === "success" && (
                    <div className="flex items-center gap-2 text-green-400 text-sm mb-6 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                      <CheckCircle size={18} />
                      Message sent! We'll be in touch shortly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting" || status === "success" || isEditable}
                    className="w-full text-white py-4 text-xs font-black uppercase tracking-[0.2em] rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 active:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                    style={{ backgroundImage: `linear-gradient(to right, #F97316, ${EDI_ORANGE}, #DC2626)` }}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle size={20} /> Sent Successfully
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                  {isEditable && (
                    <p className="text-[10px] text-gray-400 mt-2 text-center">⚡ Form submissions are disabled in preview canvas.</p>
                  )}
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  },
  EDIFooter: ({ phone, email, address, onNavigate }: any) => {
    const handleLinkClick = (e: React.MouseEvent, action: string) => {
      e.preventDefault();
      if (onNavigate) {
        onNavigate(action);
      }
    };

    return (
      <footer id="footer" className="bg-[#050505] pt-24 border-t border-white/10 text-left">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-white/10 p-8 md:p-16 text-center overflow-hidden mb-24 group">
            <div
              className="absolute top-0 right-0 w-64 h-64 blur-[80px] rounded-full pointer-events-none group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundColor: `${EDI_ORANGE}1a` }}
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 blur-[80px] rounded-full pointer-events-none group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundColor: `${EDI_ORANGE}1a` }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Car Will Look Like New. Guaranteed.</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Ready to be amazed? Get a free, no-obligation quote and let us tackle your car's biggest challenge.
              </p>

              <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto justify-center">
                <Button size="lg" onClick={() => onNavigate && onNavigate("contact")}>
                  Get My Free Quote
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <Logo className="w-16 h-16 transition-transform group-hover:scale-105 duration-300" />
                <span className="text-xl font-bold text-white">Easy Does It</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The most trusted car detailing in Ione, CA and Amador County. We bring the shine to you.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, "home")} className="text-gray-400 hover:text-orange-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, "services")} className="text-gray-400 hover:text-orange-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, "gallery")} className="text-gray-400 hover:text-orange-500 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, "contact")} className="text-gray-400 hover:text-orange-500 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, "contact")} className="text-gray-400 hover:text-orange-500 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin size={18} style={{ color: EDI_ORANGE }} />
                  {address}
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone size={18} style={{ color: EDI_ORANGE }} />
                  {phone}
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} style={{ color: EDI_ORANGE }} />
                  {email}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 py-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>© 2026 Easy Does It Detailing. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-green-500">Firebase Active</span>
              </div>
              <p>Designed with 🧡 by Expert Dev</p>
            </div>
          </div>
        </div>
      </footer>
    );
  },
};
