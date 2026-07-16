"use client";
import React from 'react';
import { BentoAppProvider, useBentoContext } from '../lib/bentoStore';
import { WidgetRenderer } from './BentoWidgetRenderer';
import { WidgetData } from '../types/bento';
import { sortByFlowOrder, sectionHeightFor } from './BentoCanvas';

const PublishedFlowInner = () => {
  const { widgets } = useBentoContext();
  const sorted = sortByFlowOrder(widgets);
  return (
    <div data-canvas-root className="relative z-10 w-full flex flex-col bg-white">
      {sorted.map((widget) => (
        <div
          key={widget.id}
          className="w-full relative shrink-0"
          style={{ height: sectionHeightFor(widget) }}
        >
          <WidgetRenderer widget={widget} />
        </div>
      ))}
    </div>
  );
};

// Read-only flowing renderer for published tenant sites — sections stack
// full-width top-to-bottom, exactly like the editor canvas. Wraps the
// provider so server pages can pass the stored widgets straight through.
export const BentoPublishedGrid = ({ widgets }: { widgets: WidgetData[] }) => (
  <BentoAppProvider initialWidgets={widgets}>
    <PublishedFlowInner />
  </BentoAppProvider>
);
