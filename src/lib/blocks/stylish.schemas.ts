// Schema data for the stylish block family.
// Kept out of stylish.tsx (a "use client" module) so server code — notably the AI
// generation pipeline — can actually read it. See AI_ONBOARDING_PLAN.md.

export const SS_SCHEMAS = {
  SSHero: {
    description: "Stylish Store Grid Hero",
    fields: [
      { name: 'mainTitle', label: 'Main Title', type: 'text' },
      { name: 'mainSubtitle', label: 'Main Subtitle', type: 'text' },
      { name: 'mainImage', label: 'Main Background Image', type: 'text' },
      { name: 'mainLink', label: 'Main Link', type: 'text' },
      
      { name: 'topTitle', label: 'Top Right Title', type: 'text' },
      { name: 'topImage', label: 'Top Right Image', type: 'text' },
      { name: 'topLink', label: 'Top Right Link', type: 'text' },
      
      { name: 'bottomTitle', label: 'Bottom Right Title', type: 'text' },
      { name: 'bottomImage', label: 'Bottom Right Image', type: 'text' },
      { name: 'bottomLink', label: 'Bottom Right Link', type: 'text' }
    ],
    defaultProps: {
      mainTitle: "Stylish shoes for Women",
      mainSubtitle: "Spring & Summer Collection",
      mainImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=700&auto=format&fit=crop",
      mainLink: "/work/stylish-store/services",
      topTitle: "Sports Wear",
      topImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
      topLink: "/work/stylish-store/services",
      bottomTitle: "Fashion Shoes",
      bottomImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop",
      bottomLink: "/work/stylish-store/services"
    }
  },
  SSPromo: {
    description: "Newsletter Discount Promo",
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'discountText', label: 'Background Discount Text', type: 'text' },
      { name: 'buttonText', label: 'Button Text', type: 'text' }
    ],
    defaultProps: {
      title: "10% OFF Discount Coupons",
      subtitle: "Subscribe to get 10% OFF on all your purchases.",
      discountText: "10%",
      buttonText: "EMAIL ME"
    }
  },
  SSFeatured: {
    description: "Featured Products Carousel/Grid",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'linkText', label: 'Link Text', type: 'text' },
      { name: 'linkUrl', label: 'Link URL', type: 'text' },
      { name: 'products', label: 'Products', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price (number)', type: 'text' },
        { name: 'img', label: 'Image URL', type: 'text' },
        { name: 'tag', label: 'Badge Tag', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "Handpicked Items",
      title: "Featured Products",
      linkText: "View all",
      linkUrl: "/work/stylish-store/services",
      products: [
        { name: 'Air Dunk Retro Blue', desc: 'Running shoes for men', price: '99', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop', tag: 'Best Seller' },
        { name: 'Air Dunk Pastel Pink', desc: 'Running shoes for men', price: '119', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop', tag: 'New' },
        { name: 'Flyknit Red Racer', desc: 'Running shoes for men', price: '129', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop', tag: 'Trending' },
        { name: 'Air Force Classic White', desc: 'Running shoes for men', price: '89', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Gel-Lyte Modern Trainer', desc: 'Running shoes for men', price: '139', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop', tag: 'Exclusive' }
      ]
    }
  },
  SSDualBanner: {
    description: "Dual Collection Banners",
    fields: [
      { name: 'leftTitle', label: 'Left Card Title', type: 'text' },
      { name: 'leftLink', label: 'Left Card Link', type: 'text' },
      { name: 'leftImage', label: 'Left Card Image', type: 'text' },
      { name: 'rightTitle', label: 'Right Card Title', type: 'text' },
      { name: 'rightLink', label: 'Right Card Link', type: 'text' },
      { name: 'rightImage', label: 'Right Card Image', type: 'text' }
    ],
    defaultProps: {
      leftTitle: "Minimal Collection",
      leftLink: "/work/stylish-store/services",
      leftImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop",
      rightTitle: "Sneakers",
      rightLink: "/work/stylish-store/services",
      rightImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop"
    }
  },
  SSLatest: {
    description: "Latest Products Grid",
    fields: [
      { name: 'tagline', label: 'Tagline', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'linkText', label: 'Link Text', type: 'text' },
      { name: 'linkUrl', label: 'Link URL', type: 'text' },
      { name: 'products', label: 'Products', type: 'array', arrayFields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'desc', label: 'Description', type: 'text' },
        { name: 'price', label: 'Price (number)', type: 'text' },
        { name: 'img', label: 'Image URL', type: 'text' },
        { name: 'tag', label: 'Badge Tag', type: 'text' }
      ]}
    ],
    defaultProps: {
      tagline: "Fresh Arrivals",
      title: "Latest Products",
      linkText: "View all",
      linkUrl: "/work/stylish-store/services",
      products: [
        { name: 'Cortez Classic Blue', desc: 'Running shoes for men', price: '80', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Pegasus Trail Zoom', desc: 'Running shoes for men', price: '130', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Metcon Training Pro', desc: 'Running shoes for men', price: '140', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Court Vision Low', desc: 'Running shoes for men', price: '75', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop', tag: '' },
        { name: 'Zoom Fly Vaporfly', desc: 'Running shoes for men', price: '250', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop', tag: '' }
      ]
    }
  }
};
