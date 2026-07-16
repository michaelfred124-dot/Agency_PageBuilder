import { WidgetData } from '../types/bento';

export interface VariantOption {
  id: string;
  label: string;
}

// Variant options per widget "kind". Hero uses a separate kind from the
// default header/bio layout since they render completely different markup.
export const MENU_VARIANTS: VariantOption[] = [
  { id: 'classic', label: 'Classic' },
  { id: 'centered', label: 'Centered Logo' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'edi', label: 'Dark Glow' },
];

export const HERO_VARIANTS: VariantOption[] = [
  { id: 'overlay', label: 'Overlay' },
  { id: 'split', label: 'Split Image' },
  { id: 'minimal', label: 'Minimal Text' },
  { id: 'edi', label: 'Dark Glow' },
];

export const MAP_VARIANTS: VariantOption[] = [
  { id: 'card', label: 'Card Overlay' },
  { id: 'sidebar', label: 'Info Sidebar' },
  { id: 'pin', label: 'Full Bleed Pin' },
  { id: 'edi', label: 'Dark Glow' },
];

// Resolve which variant list (if any) applies to a given widget, keyed by a
// "kind" that can differ from the raw widget.type (e.g. header can be a hero
// or a bio block, each with its own variant set).
export function getWidgetKind(widget: Pick<WidgetData, 'type' | 'category'>): string | null {
  if (widget.type === 'header' && widget.category === 'hero') return 'hero';
  if (widget.type === 'menu') return 'menu';
  if (widget.type === 'map') return 'map';
  return null;
}

export const VARIANTS_BY_KIND: Record<string, VariantOption[]> = {
  hero: HERO_VARIANTS,
  menu: MENU_VARIANTS,
  map: MAP_VARIANTS,
};

export function getVariantOptions(widget: Pick<WidgetData, 'type' | 'category'>): VariantOption[] | null {
  const kind = getWidgetKind(widget);
  return kind ? VARIANTS_BY_KIND[kind] : null;
}
