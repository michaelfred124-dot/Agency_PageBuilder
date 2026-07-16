import { COMPONENT_SCHEMAS } from './blocks';
import { TEMPLATES, TEMPLATE_PAGES } from './templates';
import { WidgetData } from '../types/bento';

export interface SectionFieldDef {
  name: string;
  label: string;
  type: string;
}

export interface SectionDef {
  key: string;
  label: string;
  description: string;
  templateName: string;
  fields: SectionFieldDef[];
  defaultProps: Record<string, string>;
  colSpan: number;
  rowSpan: number;
  backgroundColor: string;
}

// Map template keys to user-friendly names (keys must match TEMPLATES in templates.ts)
const TEMPLATE_NAMES: Record<string, string> = {
  easy_does_it: 'Easy Does It',
  northwood: 'Northwood Coffee',
  greenscape: 'Greenscape Landscaping',
  lauren: 'Lauren Wilson Photo',
  brighter_solar: 'Brighter Solar',
  voltvikings: 'Volt Vikings',
  law_firm: 'Sterling Law Group',
  auto_repair: 'Ridge Line Auto',
  hair_salon: 'Atelier Hair Studio',
  real_estate: 'Meridian Properties',
  personal_trainer: 'Iron Edge Fitness',
  dental: 'Clarity Dental',
  dog_grooming: 'Paws & Pamper',
  wedding_planner: 'Golden Thread Events',
  home_cleaning: 'Spotless Home Co',
  yoga_studio: 'Solstice Yoga',
  prohome_services: 'Valley ProHome',
  maison_boutique: 'Maison Boutique',
  restaurant: 'Fine Dining Restaurant',
  ember_rye: 'Ember & Rye',
  solene_boutique: 'Solene Boutique',
  stylish_store: 'Stylish Store'
};

// Templates whose sections are designed on dark backgrounds
const DARK_TEMPLATES = new Set(['easy_does_it', 'voltvikings', 'law_firm', 'ember_rye', 'restaurant']);

export const getRowSpan = (type: string): number => {
  const t = type.toLowerCase();
  if (t.includes('header') || t.includes('nav')) return 1;
  if (t.includes('footer')) return 8;
  if (t.includes('hero')) return 6;
  if (t.includes('pricing') || t.includes('price')) return 9;
  if (t.includes('gallery') || t.includes('portfolio') || t.includes('lookbook')) return 8;
  if (t.includes('testimonial') || t.includes('review')) return 6;
  if (t.includes('contact') || t.includes('form') || t.includes('book')) return 10;
  if (t.includes('services') || t.includes('about') || t.includes('ethos') || t.includes('advantage')) return 7;
  return 6; // Default rowSpan
};

const getBackgroundColor = (templateKey: string): string =>
  DARK_TEMPLATES.has(templateKey) ? '#050505' : '#ffffff';

// Dynamically generate all template sections
const dynamicSections: SectionDef[] = [];

Object.entries(TEMPLATES).forEach(([templateKey, sections]) => {
  if (templateKey === 'blank') return;
  
  const templateName = TEMPLATE_NAMES[templateKey] || 
    templateKey.split(/[_-]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  sections.forEach((section) => {
    // Avoid duplicate section definitions by key
    if (dynamicSections.some(s => s.key === section.type)) return;

    const schema = COMPONENT_SCHEMAS[section.type] || {};
    
    // Split camelcase type for label: "SLHeader" -> "SL Header"
    const label = section.type
      .replace(/([A-Z])/g, ' $1')
      .replace(/^ /, '')
      .trim();

    dynamicSections.push({
      key: section.type,
      label: label,
      description: schema.description || `Custom section from the ${templateName} template.`,
      templateName: templateName,
      fields: schema.fields || [],
      defaultProps: schema.defaultProps || section.props || {},
      colSpan: 10,
      rowSpan: getRowSpan(section.type),
      backgroundColor: getBackgroundColor(templateKey)
    });
  });
});

export const TEMPLATE_SECTIONS: SectionDef[] = dynamicSections;

export function getSectionDef(sectionKey: string | undefined): SectionDef | undefined {
  return TEMPLATE_SECTIONS.find(s => s.key === sectionKey);
}

export function resolveSectionProps(widget: Pick<WidgetData, 'sectionKey' | 'sectionProps'>): Record<string, string> {
  const def = getSectionDef(widget.sectionKey);
  return { ...(def?.defaultProps ?? {}), ...(widget.sectionProps ?? {}) };
}

export function buildSectionWidget(def: SectionDef, id: string, gridY: number): WidgetData {
  return {
    id,
    type: 'edi-section',
    sectionKey: def.key,
    sectionProps: {},
    size: 'wide',
    gridColumnSpan: def.colSpan,
    gridRowSpan: def.rowSpan,
    gridX: 1,
    gridY,
    title: def.label,
    // Flowing layout: sections are full-width and touch edge-to-edge
    borderRadius: 0,
    shadow: 'none',
    showBackground: true,
    backgroundColor: def.backgroundColor,
  };
}

// ---- Starter Sites: load a complete template as a flowing page ----

export interface TemplateStarter {
  key: string;
  name: string;
  description: string;
  theme: 'light' | 'dark';
  sectionCount: number;
  pageCount: number;
}

export const TEMPLATE_STARTERS: TemplateStarter[] = Object.entries(TEMPLATES)
  .filter(([key, sections]) => key !== 'blank' && sections.length > 0)
  .map(([key, sections]) => {
    const pageCount = TEMPLATE_PAGES[key]?.length || 1;
    return {
      key,
      name: TEMPLATE_NAMES[key] ||
        key.split(/[_-]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      description: pageCount > 1
        ? `Complete ${pageCount}-page site — every section on every page stays fully editable.`
        : `Complete ${sections.length}-section site — every section stays fully editable.`,
      theme: DARK_TEMPLATES.has(key) ? 'dark' : 'light',
      sectionCount: sections.length,
      pageCount,
    };
  });

interface TemplateSectionData {
  id: string;
  type: string;
  props?: Record<string, any>;
}

// Convert a list of template section definitions into a flowing widget stack.
function buildWidgetsFromSections(sections: TemplateSectionData[], templateKey: string, makeId: () => string): WidgetData[] {
  return sections.map((section, index) => {
    const def = getSectionDef(section.type);
    const widget = def
      ? buildSectionWidget(def, makeId(), index + 1)
      : {
          id: makeId(),
          type: 'edi-section' as const,
          sectionKey: section.type,
          sectionProps: {},
          size: 'wide' as const,
          gridColumnSpan: 10,
          gridRowSpan: getRowSpan(section.type),
          gridX: 1,
          gridY: index + 1,
          title: section.type,
          borderRadius: 0,
          shadow: 'none' as const,
          showBackground: true,
          backgroundColor: getBackgroundColor(templateKey),
        };
    // Carry over any explicit per-section props defined by the template
    if (section.props && Object.keys(section.props).length > 0) {
      widget.sectionProps = { ...section.props };
    }
    return widget;
  });
}

// Build the home-page widget stack for a template. `makeId` supplies unique widget ids.
export function buildTemplateWidgets(templateKey: string, makeId: () => string): WidgetData[] {
  return buildWidgetsFromSections(TEMPLATES[templateKey] || [], templateKey, makeId);
}

export interface TemplatePageBuild {
  id: string;
  name: string;
  slug: string;
  sections: WidgetData[];
}

// Build every page of a template as editor pages. Templates without a
// TEMPLATE_PAGES entry get a single Home page from their main section list.
export function buildTemplatePages(templateKey: string, makeId: () => string): TemplatePageBuild[] {
  const pageDefs = TEMPLATE_PAGES[templateKey];
  if (!pageDefs?.length) {
    return [{
      id: 'home',
      name: 'Home',
      slug: '/',
      sections: buildTemplateWidgets(templateKey, makeId),
    }];
  }
  return pageDefs.map((page, index) => ({
    id: page.slug === '/' ? 'home' : `page-${templateKey}-${index}`,
    name: page.name,
    slug: page.slug,
    sections: buildWidgetsFromSections(page.sections, templateKey, makeId),
  }));
}
