import { WidgetData } from '../types/bento';

export const resolveCollisions = (widgets: WidgetData[], movedWidgetId: string): WidgetData[] => {
  const newWidgets = JSON.parse(JSON.stringify(widgets)) as WidgetData[];
  const movedWidget = newWidgets.find(w => w.id === movedWidgetId);
  if (!movedWidget) return widgets;

  const getColSpan = (w: WidgetData) => {
    if (w.gridColumnSpan) return w.gridColumnSpan;
    if (w.type === 'header' || w.type === 'menu' || w.type === 'spacer' || w.type === 'pricing' || w.type === 'reviews' || w.type === 'footer') return 10;
    if (w.type === 'gallery' || w.type === 'faq' || w.type === 'video') return 4;
    return w.size === 'wide' || w.size === 'large' ? 2 : 1;
  };
  const getRowSpan = (w: WidgetData) => {
    if (w.gridRowSpan) return w.gridRowSpan;
    if (w.type === 'header' || w.type === 'reviews' || w.type === 'footer') return 2;
    if (w.type === 'menu' || w.type === 'spacer') return 1;
    if (w.type === 'pricing') return 4;
    if (w.type === 'gallery' || w.type === 'faq' || w.type === 'video') return 3;
    return w.size === 'tall' || w.size === 'large' ? 2 : 1;
  };

  const checkOverlap = (w1: WidgetData, w2: WidgetData) => {
    const w1X = w1.gridX || 1;
    const w1Y = w1.gridY || 1;
    const w2X = w2.gridX || 1;
    const w2Y = w2.gridY || 1;
    return !(
      w1X + getColSpan(w1) - 1 < w2X ||
      w1X > w2X + getColSpan(w2) - 1 ||
      w1Y + getRowSpan(w1) - 1 < w2Y ||
      w1Y > w2Y + getRowSpan(w2) - 1
    );
  };

  let hasCollisions = true;
  const movedIds = new Set([movedWidgetId]);

  while (hasCollisions) {
    hasCollisions = false;
    for (const id of Array.from(movedIds)) {
      const widget = newWidgets.find(w => w.id === id);
      if (!widget) continue;

      for (const other of newWidgets) {
        if (other.id === id) continue;

        if (checkOverlap(widget, other)) {
          other.gridY = (widget.gridY || 1) + getRowSpan(widget);
          movedIds.add(other.id);
          hasCollisions = true;
        }
      }
    }
  }

  return newWidgets;
};
