"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppState, WidgetData, WidgetType, BackgroundConfig, CartItem, CustomTemplate } from '../types/bento';
import { saveDraft, flushSaveQueue, queueSaveOffline } from './draftService';
import { undoRedoManager } from './undoRedoStore';
import { resolveCollisions } from '../utils/bentoCollision';

const defaultWidgets: WidgetData[] = [
  {
    id: 'luxe-nav-menu',
    type: 'menu',
    size: 'wide',
    gridColumnSpan: 10,
    gridRowSpan: 1,
    gridX: 1,
    gridY: 1,
    title: 'AURA LUXE STORE',
    content: 'Home, Men, Women, Collections, Sale, New Arrivals',
    borderRadius: 24,
    shadow: 'none',
    showBackground: true,
    backgroundColor: '#ffffff'
  },
  {
    id: 'banner-spring-2026',
    type: 'image',
    size: 'large',
    gridColumnSpan: 4,
    gridRowSpan: 3,
    gridX: 1,
    gridY: 2,
    title: 'SPRING COLLECTIONS 2026',
    content: 'DISCOVER ELEVATED STYLE',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'banner-street-zoom',
    type: 'image',
    size: 'wide',
    gridColumnSpan: 3,
    gridRowSpan: 3,
    gridX: 5,
    gridY: 2,
    title: 'STREET STYLE ZOOM',
    content: 'EXPLORE HIGHLIGHTED KICKS',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'banner-retro-archive',
    type: 'image',
    size: 'wide',
    gridColumnSpan: 3,
    gridRowSpan: 3,
    gridX: 8,
    gridY: 2,
    title: 'RETRO ARCHIVE SNEAKERS',
    content: 'LIMITED RUN RETRO RELEASES',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'luxe-discount-coupon',
    type: 'newsletter',
    size: 'wide',
    gridColumnSpan: 10,
    gridRowSpan: 1,
    gridX: 1,
    gridY: 5,
    title: 'SUBSCRIBE FOR $15 INSTANT CREDIT',
    content: 'Join the luxury community mailing list and gain VIP early-access keys to exclusive sneaker drops.',
    ctaText: 'GET CREDIT KEY',
    borderRadius: 24,
    shadow: 'soft',
    showBackground: true,
    backgroundColor: '#f1f5f9'
  },
  {
    id: 'prod-retro-jade',
    type: 'product',
    size: 'tall',
    gridColumnSpan: 2,
    gridRowSpan: 2,
    gridX: 1,
    gridY: 6,
    title: 'Retro Running Jade',
    category: '$120.00',
    content: "Men's Performance",
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    ctaText: 'Add to Cart',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'prod-pastel-pink',
    type: 'product',
    size: 'tall',
    gridColumnSpan: 2,
    gridRowSpan: 2,
    gridX: 3,
    gridY: 6,
    title: 'Air Pastel Pink',
    category: '$135.00',
    content: "Women's Lifestyle",
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    ctaText: 'Add to Cart',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'prod-zoom-racer',
    type: 'product',
    size: 'tall',
    gridColumnSpan: 2,
    gridRowSpan: 2,
    gridX: 5,
    gridY: 6,
    title: 'Crimson Zoom Racer',
    category: '$150.00',
    content: "Unisex Track & Field",
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    ctaText: 'Add to Cart',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'prod-cloudwalk-lite',
    type: 'product',
    size: 'tall',
    gridColumnSpan: 2,
    gridRowSpan: 2,
    gridX: 7,
    gridY: 6,
    title: 'CloudWalk Lite Core',
    category: '$110.00',
    content: 'Lifestyle Comfort',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    ctaText: 'Add to Cart',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'prod-retro-multicolor',
    type: 'product',
    size: 'tall',
    gridColumnSpan: 2,
    gridRowSpan: 2,
    gridX: 9,
    gridY: 6,
    title: 'Retro Multi-Color Neo',
    category: '$165.00',
    content: 'Heritage Limited Edition',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    ctaText: 'Add to Cart',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'default-luxe-gallery',
    type: 'gallery',
    size: 'large',
    gridColumnSpan: 6,
    gridRowSpan: 3,
    gridX: 1,
    gridY: 8,
    title: 'STREET STYLE LOOKBOOK 2026',
    content: 'AMBIENT STREET CULTURE COLLECTION',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    ctaText: 'VIEW LOOKBOOK',
    borderRadius: 24,
    shadow: 'soft'
  },
  {
    id: 'default-luxe-faq',
    type: 'faq',
    size: 'large',
    gridColumnSpan: 4,
    gridRowSpan: 3,
    gridX: 7,
    gridY: 8,
    title: 'CUSTOMER SERVICE & HELP',
    content: 'Do you offer worldwide shipping? | Yes, complimentary worldwide premium shipping is included for all orders over $150. ;; How can I exchange my shoe size? | Try them on! If the fit isn\'t perfect, return any unworn sneakers within 30 days for free. ;; Are these limited sneaker drops genuine? | 100% genuine. Every single pair is checked and verified by our curators before delivery.',
    ctaText: 'SUPPORT CENTER',
    borderRadius: 24,
    shadow: 'soft',
    showBackground: true,
    backgroundColor: '#ffffff'
  }
];

const AppContext = createContext<AppState | undefined>(undefined);

export const BentoAppProvider: React.FC<{
  children: ReactNode;
  initialWidgets?: WidgetData[];
  draftId?: string;
}> = ({ children, initialWidgets, draftId: initialDraftId }) => {
  const [widgets, setWidgets] = useState<WidgetData[]>(initialWidgets || defaultWidgets);
  const [selectedWidgetId, setSelectedWidgetId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [showBio, setShowBio] = useState<boolean>(false);
  const [activeDraggingId, setActiveDraggingId] = useState<string | null>(null);
  const [backgroundConfig, setBackgroundConfig] = useState<BackgroundConfig>({
    type: 'gradient',
    value: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    ambientColors: ['#e0c3fc', '#8ec5fc', '#fbc2eb']
  });

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Draft persistence
  const [draftId, setDraftId] = useState<string | null>(initialDraftId || null);
  const [isDraftSaved, setIsDraftSaved] = useState(true);
  const [lastSaveTime, setLastSaveTime] = useState<number | null>(null);

  const [customTemplates, setCustomTemplates] = useState<CustomTemplate[]>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('customTemplates');
        return saved ? JSON.parse(saved) : [];
      }
      return [];
    } catch (e) {
      return [];
    }
  });

  const saveCustomTemplate = (name: string) => {
    const newTemplate: CustomTemplate = {
      id: `custom-${uuidv4()}`,
      name: name || 'My Custom Template',
      widgets,
      backgroundConfig,
      theme,
      createdAt: Date.now()
    };
    const updated = [...customTemplates, newTemplate];
    setCustomTemplates(updated);
    try {
      localStorage.setItem('customTemplates', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save template', e);
    }
  };

  const deleteCustomTemplate = (id: string) => {
    const updated = customTemplates.filter(t => t.id !== id);
    setCustomTemplates(updated);
    try {
      localStorage.setItem('customTemplates', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save templates', e);
    }
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, removeAll: boolean = false) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (!existing) return prev;
      if (existing.quantity <= 1 || removeAll) {
        return prev.filter((i) => i.id !== id);
      }
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addWidget = (type: WidgetType) => {
    const maxExistingY = widgets.reduce((max, w) => {
      const rowSpan = w.gridRowSpan ?? (w.size === 'tall' ? 2 : (w.size === 'large' ? 2 : 1));
      return Math.max(max, (w.gridY || 1) + rowSpan - 1);
    }, 3);

    const colSpan = type === 'header' || type === 'pricing' || type === 'reviews' || type === 'footer' || type === 'edi-section' ? 10 : (type === 'gallery' ? 4 : (type === 'faq' ? 4 : (type === 'menu' || type === 'spacer' ? 10 : (type === 'video' ? 4 : 2))));
    const rowSpan = type === 'header' ? 2 : (type === 'gallery' ? 3 : (type === 'pricing' ? 4 : (type === 'faq' ? 3 : (type === 'menu' || type === 'spacer' ? 1 : (type === 'reviews' || type === 'footer' ? 2 : (type === 'video' ? 3 : (type === 'edi-section' ? 5 : 2)))))));

    const newWidget: WidgetData = {
      id: uuidv4(),
      type,
      size: type === 'header' || type === 'menu' || type === 'spacer' || type === 'pricing' || type === 'reviews' || type === 'footer' ? 'wide' : (type === 'gallery' || type === 'faq' || type === 'video' ? 'large' : 'small'),
      gridColumnSpan: colSpan,
      gridRowSpan: rowSpan,
      gridX: 1,
      gridY: maxExistingY + 1,
      title: type === 'product' ? 'Premium Sneaker' : 
             type === 'faq' ? 'FREQUENTLY ASKED QUESTIONS' : 
             type === 'gallery' ? 'INSPIRED LIFESTYLE' : 
             type === 'button' ? 'EXCLUSIVE ACCESS CODES' :
             type === 'menu' ? 'AURA LUXE BRAND' :
             type === 'pricing' ? 'MEMBERSHIP PLANS' :
             type === 'reviews' ? 'WHAT OUR CUSTOMERS SAY' :
             type === 'footer' ? 'STAY CONNECTED' :
             type === 'stat' ? 'GROWTH METRICS' :
             type === 'countdown' ? 'LIMITED TIME OFFER' :
             type === 'video' ? 'BRAND FILM' :
             type === 'spacer' ? undefined :
             `New ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      content: type === 'product' ? 'Athletic Footwear' : 
               type === 'faq' ? 'Q: Do you offer free shipping? | A: Yes! We offer complimentary express shipping on domestic orders over $150. ;; Q: Return policy? | A: Hassel-free 30-day returns on unworn items.' : 
               type === 'gallery' ? 'CURATED SPRING COLLECTION' : 
               type === 'button' ? 'Enter a sub-tagline describing your promotional campaign or main offer here.' :
               type === 'menu' ? 'Home, Shop, Collections, About, Contact' :
               type === 'pricing' ? 'Basic ($9.99/mo) | Pro ($19.99/mo) | Enterprise (Contact Us)' :
               type === 'reviews' ? '"Incredible quality and fits perfectly!" - Sarah T. ;; "Best purchase I\'ve made this year." - Michael R.' :
               type === 'footer' ? '© 2026 Aura Luxe. All rights reserved. | Terms | Privacy' :
               type === 'stat' ? 'Active Users|2.4M;;Total Revenue|$14M;;Countries|42' :
               type === 'countdown' ? '2026-12-31T23:59:59' :
               type === 'spacer' ? undefined :
               (type === 'text' || type === 'blog' || type === 'testimonial' || type === 'newsletter' ? 'Enter some content here...' : undefined),
      url: type === 'video' ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' : undefined,
      category: type === 'product' ? '$120.00' : undefined,
      image: type === 'product' ? 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' : undefined,
      images: type === 'gallery' ? [
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
      ] : undefined,
      ctaText: type === 'button' || type === 'newsletter' || type === 'product' || type === 'gallery' || type === 'faq' ? 
               (type === 'product' ? 'Buy Now' : (type === 'gallery' ? 'EXPLORE' : (type === 'faq' ? 'Support Center' : (type === 'button' ? 'CLAIM MY CODE' : 'Action')))) : undefined,
      borderRadius: 24,
      shadow: 'soft',
      showBackground: type === 'spacer' ? false : undefined,
      showBorder: type === 'spacer' ? false : undefined,
    };
    setWidgets((prev) => {
      const updated = [...prev, newWidget];
      // Record snapshot for undo/redo
      undoRedoManager.pushSnapshot(updated, backgroundConfig, `Added ${type} block`);
      return updated;
    });
    setSelectedWidgetId(newWidget.id);
  };

  const updateWidget = (id: string, data: Partial<WidgetData>) => {
    setWidgets((prev) => {
      const index = prev.findIndex(w => w.id === id);
      if (index === -1) return prev;

      const newWidgets = [...prev];
      newWidgets[index] = { ...newWidgets[index], ...data };

      const isGridChange = 'gridX' in data || 'gridY' in data || 'gridColumnSpan' in data || 'gridRowSpan' in data;

      const result = isGridChange ? resolveCollisions(newWidgets, id) : newWidgets;

      // Record snapshot for undo/redo (skip during drag)
      if (!isGridChange || activeDraggingId !== id) {
        undoRedoManager.pushSnapshot(result, backgroundConfig, 'Updated block');
      }

      return result;
    });
  };

  const removeWidget = (id: string) => {
    setWidgets((prev) => {
      const filtered = prev.filter((w) => w.id !== id);
      // Record snapshot for undo/redo
      undoRedoManager.pushSnapshot(filtered, backgroundConfig, 'Deleted block');
      return filtered;
    });
    if (selectedWidgetId === id) {
      setSelectedWidgetId(null);
      setIsEditing(false);
      setIsResizing(false);
    }
  };

  const duplicateWidget = (id: string) => {
    const widget = widgets.find(w => w.id === id);
    if (widget) {
      const maxExistingY = widgets.reduce((max, w) => {
        const rowSpan = w.gridRowSpan ?? (w.size === 'tall' ? 2 : (w.size === 'large' ? 2 : 1));
        return Math.max(max, (w.gridY || 1) + rowSpan - 1);
      }, 3);

      const newWidget = {
        ...widget,
        id: uuidv4(),
        gridX: 1,
        gridY: maxExistingY + 1
      };
      setWidgets(prev => {
        const updated = [...prev, newWidget];
        // Record snapshot for undo/redo
        undoRedoManager.pushSnapshot(updated, backgroundConfig, 'Duplicated block');
        return updated;
      });
      setSelectedWidgetId(newWidget.id);
    }
  };

  const insertRowAbove = (yIndex: number) => {
    setWidgets((prev) =>
      prev.map(w => {
        if ((w.gridY || 1) >= yIndex) {
          return { ...w, gridY: (w.gridY || 1) + 1 };
        }
        return w;
      })
    );
  };

  // Autosave to Supabase every 10 seconds
  useEffect(() => {
    if (!draftId || widgets.length === 0) return;

    const autosaveTimer = setInterval(async () => {
      try {
        setIsDraftSaved(false);
        await saveDraft(draftId, widgets, backgroundConfig, 'home');
        setIsDraftSaved(true);
        setLastSaveTime(Date.now());
      } catch (err) {
        console.error('Autosave failed:', err);

        // Queue for offline sync if network unavailable
        if (!navigator.onLine) {
          queueSaveOffline(draftId, widgets, backgroundConfig, 'home');
        }
      }
    }, 10000); // Every 10 seconds

    return () => clearInterval(autosaveTimer);
  }, [widgets, draftId, backgroundConfig]);

  // Handle online/offline events
  useEffect(() => {
    const handleOnline = async () => {
      console.log('Back online, flushing save queue...');
      await flushSaveQueue();
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  // Undo/Redo handlers
  const handleUndo = () => {
    const snapshot = undoRedoManager.undo();
    if (snapshot) {
      setWidgets(snapshot.widgets);
      setBackgroundConfig(snapshot.theme);
    }
  };

  const handleRedo = () => {
    const snapshot = undoRedoManager.redo();
    if (snapshot) {
      setWidgets(snapshot.widgets);
      setBackgroundConfig(snapshot.theme);
    }
  };

  return (
    <AppContext.Provider
      value={{
        widgets,
        setWidgets,
        addWidget,
        updateWidget,
        removeWidget,
        duplicateWidget,
        insertRowAbove,
        selectedWidgetId,
        setSelectedWidgetId,
        isEditing,
        setIsEditing,
        isResizing,
        setIsResizing,
        theme,
        setTheme,
        showBio,
        setShowBio,
        activeDraggingId,
        setActiveDraggingId,
        backgroundConfig,
        setBackgroundConfig,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        customTemplates,
        saveCustomTemplate,
        deleteCustomTemplate,
        draftId,
        setDraftId,
        isDraftSaved,
        setIsDraftSaved,
        lastSaveTime,
        setLastSaveTime,
        handleUndo,
        handleRedo,
        canUndo: () => undoRedoManager.canUndo(),
        canRedo: () => undoRedoManager.canRedo(),
      } as unknown as AppState}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useBentoContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useBentoContext must be used within a BentoAppProvider');
  }
  return context;
};
