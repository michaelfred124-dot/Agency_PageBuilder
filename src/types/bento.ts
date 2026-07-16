export type WidgetType = 'text' | 'image' | 'social' | 'map' | 'header' | 'button' | 'newsletter' | 'testimonial' | 'blog' | 'faq' | 'embed' | 'menu' | 'product' | 'gallery' | 'spacer' | 'footer' | 'pricing' | 'reviews' | 'video' | 'stat' | 'countdown' | 'edi-section';

export type WidgetSize = 'small' | 'wide' | 'tall' | 'large';

export interface WidgetData {
  id: string;
  type: WidgetType;
  size: WidgetSize;
  customWidth?: number;
  customHeight?: number;
  title?: string;
  content?: string;
  url?: string;
  image?: string;
  images?: string[]; // Multiple images for gallery widgets
  socialLinks?: { platform: string; url: string }[];
  location?: string;
  ctaText?: string;
  author?: string;
  date?: string;
  category?: string;
  // Styling properties
  borderRadius?: number;
  shadow?: 'none' | 'soft' | 'medium' | 'hard';
  opacity?: number;
  blur?: number;
  openInNewTab?: boolean;
  gridColumnSpan?: number;
  gridRowSpan?: number;
  gridX?: number;
  gridY?: number;
  showBorder?: boolean;
  borderColor?: string;
  borderWidth?: number;
  showBackground?: boolean;
  backgroundColor?: string;
  variant?: string;
  sectionKey?: string;
  sectionProps?: Record<string, any>;
}

export interface BackgroundConfig {
  type: 'gradient' | 'solid';
  value: string;
  ambientColors?: string[];
}

export interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

export interface CustomTemplate {
  id: string;
  name: string;
  widgets: WidgetData[];
  backgroundConfig: BackgroundConfig;
  theme: 'dark' | 'light';
  createdAt: number;
}

export interface AppState {
  widgets: WidgetData[];
  setWidgets: (widgets: WidgetData[]) => void;
  addWidget: (type: WidgetType) => void;
  updateWidget: (id: string, data: Partial<WidgetData>) => void;
  removeWidget: (id: string) => void;
  duplicateWidget: (id: string) => void;
  insertRowAbove: (yIndex: number) => void;
  selectedWidgetId: string | null;
  setSelectedWidgetId: (id: string | null) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  isResizing?: boolean;
  setIsResizing?: (isResizing: boolean) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  showBio: boolean;
  setShowBio: (showBio: boolean) => void;
  activeDraggingId?: string | null;
  setActiveDraggingId?: (id: string | null) => void;
  backgroundConfig: BackgroundConfig;
  setBackgroundConfig: (config: BackgroundConfig) => void;
  customTemplates: CustomTemplate[];
  saveCustomTemplate: (name: string) => void;
  deleteCustomTemplate: (id: string) => void;
  // Draft Persistence
  draftId: string | null;
  setDraftId: (id: string | null) => void;
  isDraftSaved: boolean;
  setIsDraftSaved: (saved: boolean) => void;
  lastSaveTime: number | null;
  setLastSaveTime: (time: number | null) => void;
  // Undo/Redo
  handleUndo?: () => void;
  handleRedo?: () => void;
  canUndo?: () => boolean;
  canRedo?: () => boolean;
  // E-commerce Cart State
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string, removeAll?: boolean) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}
