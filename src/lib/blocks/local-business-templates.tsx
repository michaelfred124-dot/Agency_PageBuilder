import React from 'react';
import { Star, MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

// ============================================================================
// HOME PAGE SECTIONS
// ============================================================================

export const LocalBusinessHero = ({
  title = "Welcome to Our Business",
  subtitle = "Professional services for your local community",
  ctaText = "Get Started",
  image = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
  backgroundColor = "#ffffff"
}: any) => (
  <div className="w-full min-h-screen flex items-center justify-center bg-white" style={{ backgroundColor }}>
    <div className="absolute inset-0 w-full h-full">
      <img src={image} alt="Hero" className="w-full h-full object-cover opacity-40" />
    </div>
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">{title}</h1>
      <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl">{subtitle}</p>
      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
        {ctaText}
      </button>
    </div>
  </div>
);

export const LocalBusinessAbout = ({
  title = "About Us",
  description = "We've been serving our community with excellence for over 10 years. Our team is dedicated to providing the highest quality service.",
  features = [
    "10+ Years Experience",
    "100+ Satisfied Clients",
    "Award Winning Service",
    "24/7 Customer Support"
  ],
  image = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
}: any) => (
  <div className="w-full py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-black">{title}</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{description}</p>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-black">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src={image} alt="About" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
);

export const LocalBusinessServices = ({
  title = "Our Services",
  services = [
    { name: "Service One", description: "High-quality service tailored to your needs", icon: "🎯" },
    { name: "Service Two", description: "Professional solutions for your business", icon: "✨" },
    { name: "Service Three", description: "Reliable and affordable options", icon: "💎" },
    { name: "Service Four", description: "Expert support every step of the way", icon: "🚀" }
  ]
}: any) => (
  <div className="w-full py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-black">{title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer a complete range of services designed to meet all your needs
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service: any, i: number) => (
          <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-black">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const LocalBusinessWhyChooseUs = ({
  title = "Why Choose Us",
  reasons = [
    "Expert Team with Years of Experience",
    "Customer-First Approach",
    "Competitive Pricing",
    "Quick Turnaround Times",
    "Quality Guarantee",
    "Local Support"
  ]
}: any) => (
  <div className="w-full py-20 px-6 bg-blue-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-black">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason: string, i: number) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <p className="text-lg text-gray-700 font-medium">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================================================
// SERVICES PAGE SECTIONS
// ============================================================================

export const ServicePageHero = ({
  title = "Our Services",
  subtitle = "Comprehensive solutions tailored to your needs",
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff"
}: any) => (
  <div className="w-full py-24 px-6" style={{ backgroundColor }}>
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: textColor }}>{title}</h1>
      <p className="text-xl md:text-2xl opacity-90" style={{ color: textColor }}>{subtitle}</p>
    </div>
  </div>
);

export const ServiceDetail = ({
  serviceName = "Service Name",
  description = "Detailed description of the service and what it includes",
  features = [
    "Feature 1: Professional quality work",
    "Feature 2: Fast turnaround time",
    "Feature 3: Competitive pricing",
    "Feature 4: Satisfaction guaranteed"
  ],
  image = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  price = "$499"
}: any) => (
  <div className="w-full py-16 px-6 border-b border-gray-200">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4 text-black">{serviceName}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <div className="space-y-3 mb-8">
            {features.map((feature: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-blue-600">{price}</span>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
          <img src={image} alt={serviceName} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// TESTIMONIALS/REVIEWS PAGE SECTIONS
// ============================================================================

export const TestimonialSection = ({
  testimonials = [
    { name: "John Smith", title: "Business Owner", text: "Outstanding service and excellent customer support!", rating: 5 },
    { name: "Sarah Johnson", title: "Manager", text: "Professional team that exceeded our expectations.", rating: 5 },
    { name: "Mike Davis", title: "CEO", text: "Reliable, affordable, and worth every penny!", rating: 5 }
  ]
}: any) => (
  <div className="w-full py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-black">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial: any, i: number) => (
          <div key={i} className="bg-gray-50 p-8 rounded-lg">
            <div className="flex gap-1 mb-4">
              {Array(testimonial.rating).fill(0).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
            <div>
              <p className="font-bold text-black">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================================================
// CONTACT PAGE SECTIONS
// ============================================================================

export const ContactInfo = ({
  phone = "+1 (555) 123-4567",
  email = "info@business.com",
  address = "123 Main Street, City, State 12345",
  hours = "Monday - Friday: 9AM - 5PM\nSaturday: 10AM - 2PM"
}: any) => (
  <div className="w-full py-16 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-black">Contact Information</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">📞 Phone</label>
            <a href={`tel:${phone}`} className="text-lg text-blue-600 hover:underline">{phone}</a>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">📧 Email</label>
            <a href={`mailto:${email}`} className="text-lg text-blue-600 hover:underline">{email}</a>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">📍 Address</label>
            <p className="text-lg text-gray-700">{address}</p>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">🕒 Hours</label>
            <p className="text-lg text-gray-700 whitespace-pre-line">{hours}</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-black">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">Contact us today for a free consultation</p>
          <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const ContactForm = ({
  title = "Get In Touch",
  subtitle = "We'd love to hear from you. Send us a message!"
}: any) => (
  <div className="w-full py-20 px-6 bg-white">
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-black">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name" className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
          <input type="email" placeholder="Your Email" className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
        </div>
        <input type="text" placeholder="Subject" className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
        <textarea placeholder="Your Message" rows={6} className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none" />
        <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

// ============================================================================
// PORTFOLIO/WORK PAGE SECTIONS
// ============================================================================

export const PortfolioGrid = ({
  projects = [
    { title: "Project 1", category: "Web Design", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
    { title: "Project 2", category: "Branding", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
    { title: "Project 3", category: "Development", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
    { title: "Project 4", category: "Marketing", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
    { title: "Project 5", category: "Web Design", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
    { title: "Project 6", category: "Branding", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" }
  ]
}: any) => (
  <div className="w-full py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Work</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project: any, i: number) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-md mb-4 h-64">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Helper for checkmark (since we're using a simple icon)
const checkmark = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);
