"use client";
import React, { useState, useEffect } from "react";
import { EDI_RENDERERS, Reveal, EDI_ORANGE, EDI_TEAL, EDI_BLUE, Button } from "../../../src/lib/blocks/easydoesit";
import { Check, X, Tag, Sparkles, Shield, Droplets, Wind, Zap, Award, Car, Clock, Star, ChevronRight } from "lucide-react";

// Map block renderers to components to avoid React Hook order mismatch bugs
const EDIHeader = EDI_RENDERERS.EDIHeader;
const EDIHero = EDI_RENDERERS.EDIHero;
const EDIServices = EDI_RENDERERS.EDIServices;
const EDIPricing = EDI_RENDERERS.EDIPricing;
const EDIFaq = EDI_RENDERERS.EDIFaq;
const EDIGallery = EDI_RENDERERS.EDIGallery;
const EDIContact = EDI_RENDERERS.EDIContact;
const EDIFooter = EDI_RENDERERS.EDIFooter;

export default function EasyDoesItTemplate() {
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "pricing" | "gallery" | "contact">("home");

  const navigateTo = (page: "home" | "services" | "pricing" | "gallery" | "contact") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const defaultProps = {
    businessName: "Easy Does It",
    phone: "(209) 304-7288",
    email: "contact@easydoesit.com",
    address: "Ione, CA (Amador County)",
    serviceArea: "Amador County, CA",
    ctaText: "Get Quote",
    heroTitle: "Your Car Is \nIn Great Hands \nWith Us",
    heroSubtitle: "Experience the ultimate shine. Our professionals bring showroom quality directly to your driveway, using advanced techniques and premium products.",
    heroImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070",
    badgeText: "#1 Rated in County",
    servicesHeading: "How it Works",
    servicesDescription: "Our approach is focused on delivering outstanding results while ensuring a smooth and hassle-free experience for you.",
    pricingTitle: "Pick what fits you best",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Have questions? Our FAQ section has you covered with quick answers to common inquiries about our detailing services.",
    galleryTitle: "Automotive Artistry",
    gallerySubtitle: "Browse our gallery of recent work. We treat every vehicle like a masterpiece, ensuring perfection down to the microscopic level.",
    contactTitle: "Ready for a Showroom Shine?",
    contactSubtitle: "Fill out the form below to request a quote or book an appointment. We'll get back to you within 15 minutes during business hours.",
  };

  // Render the inner page based on routing state
  const renderContent = () => {
    switch (currentPage) {
      case "services":
        return renderServicesPage();
      case "pricing":
        return renderPricingPage();
      case "gallery":
        return (
          <EDIGallery
            title={defaultProps.galleryTitle}
            subtitle={defaultProps.gallerySubtitle}
          />
        );
      case "contact":
        return (
          <EDIContact
            title={defaultProps.contactTitle}
            subtitle={defaultProps.contactSubtitle}
            phone={defaultProps.phone}
            email={defaultProps.email}
            serviceArea={defaultProps.serviceArea}
            tenantId="easy_does_it"
            isEditable={false}
          />
        );
      case "home":
      default:
        return (
          <>
            <EDIHero
              title={defaultProps.heroTitle}
              subtitle={defaultProps.heroSubtitle}
              image={defaultProps.heroImage}
              badgeText={defaultProps.badgeText}
              onNavigate={navigateTo}
            />
            <EDIServices
              heading={defaultProps.servicesHeading}
              description={defaultProps.servicesDescription}
            />
            <EDIPricing
              title={defaultProps.pricingTitle}
              plan1Name="Basic"
              plan1Price="115"
              plan2Name="Premium"
              plan2Price="200"
              plan3Name="Ultimate"
              plan3Price="250"
              onNavigate={navigateTo}
            />
            <EDIFaq
              title={defaultProps.faqTitle}
              subtitle={defaultProps.faqSubtitle}
            />
          </>
        );
    }
  };

  // Custom Detailed Services page view
  const renderServicesPage = () => {
    const packages = [
      {
        name: "Basic",
        price: "115",
        duration: "45 - 60 Mins",
        description: "Perfect for maintaining a clean vehicle. A thorough exterior wash and light interior vacuum.",
        highlight: false,
        accentColor: "text-gray-300",
        buttonVariant: "secondary" as const,
        bgGradient: "bg-gradient-to-br from-gray-900 via-[#121212] to-black",
        border: "border-white/10 hover:border-white/30",
        shadow: "hover:shadow-lg hover:shadow-gray-500/10",
        icon: Car,
        features: [
          "Hand Wash & Foam Bath",
          "Spot Free Rinse",
          "Wheel & Tire Cleaning",
          "Tire Shine Application",
          "Exterior Windows Cleaned",
          "Light Interior Vacuum",
          "Dash Dusting",
        ],
      },
      {
        name: "Standard",
        price: "200",
        duration: "1.5 - 2 Hours",
        description: "Our most popular package. Deep cleaning for both interior and exterior with added protection.",
        highlight: true,
        accentColor: "text-amber-500",
        buttonVariant: "primary" as const,
        bgGradient: "bg-gradient-to-br from-amber-500/10 via-[#121212] to-black",
        border: "border-amber-500/30 hover:border-amber-500/60",
        shadow: "shadow-[0_0_30px_-10px_rgba(245,150,0,0.15)] hover:shadow-[0_0_50px_-10px_rgba(245,150,0,0.25)]",
        icon: Star,
        features: [
          "Everything in Basic",
          "Spray Wax Paint Protection",
          "Deep Interior Vacuum",
          "Wipe Down All Plastics/Vinyl",
          "Leather Cleaning & Conditioning",
          "Door Jambs Cleaned",
          "Interior Windows Cleaned",
          "Air Freshener",
        ],
      },
      {
        name: "Platinum",
        price: "250",
        duration: "3 - 4 Hours",
        description: "The ultimate showroom finish. Full restoration and premium protection for the perfectionist.",
        highlight: false,
        accentColor: "text-cyan-400",
        buttonVariant: "secondary" as const,
        bgGradient: "bg-gradient-to-br from-cyan-900/20 via-[#121212] to-black",
        border: "border-cyan-500/30 hover:border-cyan-500/60",
        shadow: "hover:shadow-lg hover:shadow-cyan-500/20",
        icon: Award,
        features: [
          "Everything in Standard",
          "Clay Bar Decontamination",
          "Iron Remover Treatment",
          "1-Year Ceramic Sealant",
          "Shampoo Carpets & Mats",
          "Steam Clean Vents/Crevices",
          "Headliner Spot Cleaning",
          "Engine Bay Detail",
        ],
      },
    ];

    return (
      <div className="min-h-screen bg-[#050505] pt-28 pb-20 text-left">
        <section className="relative px-4 mb-20 text-center">
          <div className="container mx-auto max-w-7xl">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
                style={{
                  backgroundColor: `${defaultProps.phone ? "#14B8A6" : "" }1a`,
                  borderColor: `#14B8A630`,
                }}
              >
                <Sparkles size={14} className="text-[#14B8A6]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[#14B8A6]">Service Menu</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">Detailing Packages</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Choose the perfect level of care for your vehicle. From maintenance washes to complete showroom restorations.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-7xl mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, idx) => (
              <Reveal key={idx} delay={idx * 150} width="100%" className="h-full">
                <div
                  className={`relative h-full rounded-[2.5rem] border ${pkg.border} ${pkg.bgGradient} p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 group overflow-hidden ${pkg.shadow}`}
                >
                  {pkg.highlight && (
                    <div
                      className="absolute top-0 right-0 text-black text-xs font-bold px-6 py-2 rounded-bl-2xl shadow-lg z-10"
                      style={{ backgroundColor: "#FFD700" }}
                    >
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-8 relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${pkg.accentColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <pkg.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-sm text-gray-400 font-medium">$</span>
                      <span className={`text-5xl font-bold ${pkg.accentColor} tracking-tight`}>{pkg.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed min-h-[48px]">{pkg.description}</p>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-white/5 via-white/20 to-white/5 mb-8"></div>

                  <ul className="space-y-4 mb-10 flex-grow relative z-10">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm group/item">
                        <div
                          className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center ${
                            pkg.highlight ? "text-black" : "bg-white/10 text-gray-400 group-hover/item:text-white group-hover/item:bg-white/20"
                          } transition-colors`}
                          style={pkg.highlight ? { backgroundColor: "#FFD700" } : {}}
                        >
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className={i < (pkg.highlight ? 5 : 3) ? "text-gray-200" : "text-gray-400 group-hover:text-gray-300 transition-colors"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 uppercase tracking-widest font-semibold">
                      <Clock size={12} />
                      {pkg.duration}
                    </div>
                    <button
                      className="w-full font-bold uppercase tracking-widest text-xs py-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-white cursor-pointer"
                      style={pkg.highlight ? { backgroundImage: "linear-gradient(to right, #FF6B00, #EA580C)", border: "none" } : {}}
                      onClick={() => navigateTo("contact")}
                    >
                      Book {pkg.name}
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <section className="container mx-auto px-4 max-w-7xl">
          <Reveal width="100%">
            <div className="bg-[#121212] border border-white/5 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none"
                style={{ backgroundColor: `${EDI_TEAL}08` }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need something specific?</h2>
                  <p className="text-gray-400 text-lg mb-8">
                    We offer a range of specialized services including ceramic coating, paint correction, and interior restoration. Customize your package to fit your exact needs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["Ceramic Coating", "Paint Correction", "Headlight Restoration", "Pet Hair Removal", "Engine Bay Detail"].map((item, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-[#14B8A6]/50 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative group cursor-pointer" onClick={() => navigateTo("contact")}>
                    <div
                      className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"
                      style={{ backgroundColor: "#FFD700" }}
                    ></div>
                    <Button size="lg" className="relative">
                      Contact for Custom Quote <ChevronRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    );
  };

  // Custom Detailed Pricing page view
  const renderPricingPage = () => {
    const addOns = [
      { name: "Pet Hair Removal", price: 40, description: "Intensive hair removal from all fabrics", icon: Wind },
      { name: "Engine Bay Detail", price: 50, description: "Degrease and dress engine components", icon: Zap },
      { name: "Headlight Restoration", price: 60, description: "Restore clarity to foggy headlights", icon: Sparkles },
      { name: "Odor Removal", price: 75, description: "Ozone treatment to kill bacteria", icon: Wind },
      { name: "Leather Conditioning", price: 35, description: "Premium conditioner for suppleness", icon: Shield },
      { name: "Child Seat Cleaning", price: 25, description: "Sanitize and steam clean", icon: Droplets },
    ];

    return (
      <div className="min-h-screen bg-[#050505] pt-24 pb-20 text-left">
        <section className="relative px-4 mb-20 text-center">
          <div className="container mx-auto max-w-7xl">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
                style={{
                  backgroundColor: `${EDI_ORANGE}1a`,
                  borderColor: `${EDI_ORANGE}30`,
                }}
              >
                <Tag size={14} style={{ color: EDI_ORANGE }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: EDI_ORANGE }}>
                  Simple Pricing
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Invest in your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#F5E6C8]">Vehicle</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Transparent pricing with no hidden fees. Choose a package that suits your needs or build your own with our add-ons.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pricing plans toggle & cards reused */}
        <EDIPricing
          title={defaultProps.pricingTitle}
          plan1Name="Basic"
          plan1Price="115"
          plan2Name="Premium"
          plan2Price="200"
          plan3Name="Ultimate"
          plan3Price="250"
          onNavigate={navigateTo}
        />

        <section className="container mx-auto px-4 max-w-7xl mb-24">
          <Reveal width="100%">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Premium Add-ons</h2>
                <p className="text-gray-400">Customize your package with these extra services.</p>
              </div>
              <p className="text-sm font-bold mt-4 md:mt-0" style={{ color: EDI_ORANGE }}>
                * Available with any wash package
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, idx) => (
              <Reveal key={idx} delay={idx * 50} width="100%">
                <div className="bg-[#121212] p-6 rounded-3xl border border-white/5 flex items-center gap-6 hover:border-white/15 transition-all hover:bg-[#161616]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shrink-0 border border-white/10">
                    <addon.icon size={20} style={{ color: "#F5E6C8" }} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-white">{addon.name}</h4>
                      <span className="font-bold" style={{ color: "#F5E6C8" }}>
                        ${addon.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{addon.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 max-w-5xl">
          <Reveal width="100%">
            <div className="bg-[#121212] rounded-[2.5rem] border border-white/5 overflow-hidden">
              <div className="p-8 md:p-12 text-center bg-gradient-to-b from-[#161616] to-[#121212]">
                <h3 className="text-2xl font-bold text-white mb-4">Compare Features</h3>
                <p className="text-gray-400 text-sm">Detailed breakdown of what's included in each package.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="p-6 text-gray-400 font-medium text-sm">Features</th>
                      <th className="p-6 text-center text-white font-bold">Basic</th>
                      <th className="p-6 text-center font-bold bg-white/5" style={{ color: "#F5E6C8" }}>
                        Premium
                      </th>
                      <th className="p-6 text-center text-white font-bold">Ultimate</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      "Hand Wash",
                      "Wheel Cleaning",
                      "Tire Shine",
                      "Window Cleaning",
                      "Vacuum",
                      "Interior Wipe Down",
                      "Leather Conditioning",
                      "Clay Bar",
                      "Paint Sealant",
                    ].map((feat, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300 font-medium">{feat}</td>
                        <td className="p-6 text-center text-gray-500">
                          {i < 4 ? <Check size={16} className="mx-auto" style={{ color: EDI_ORANGE }} /> : <X size={16} className="mx-auto opacity-20" />}
                        </td>
                        <td className="p-6 text-center text-gray-500 bg-white/5">
                          {i < 7 ? <Check size={16} className="mx-auto" style={{ color: EDI_ORANGE }} /> : <X size={16} className="mx-auto opacity-20" />}
                        </td>
                        <td className="p-6 text-center text-gray-500">
                          {i < 9 ? <Check size={16} className="mx-auto" style={{ color: EDI_ORANGE }} /> : <X size={16} className="mx-auto opacity-20" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black font-sans flex flex-col">
      <EDIHeader
        businessName={defaultProps.businessName}
        phone={defaultProps.phone}
        ctaText={defaultProps.ctaText}
        onNavigate={navigateTo}
      />

      <main className="flex-grow">{renderContent()}</main>

      <EDIFooter
        phone={defaultProps.phone}
        email={defaultProps.email}
        address={defaultProps.address}
        onNavigate={navigateTo}
      />
    </div>
  );
}
