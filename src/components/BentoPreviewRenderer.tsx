'use client';
import React from 'react';
import { WidgetData } from '../types/bento';
import { WidgetRenderer } from './BentoWidgetRenderer';

interface BentoPreviewRendererProps {
  widget: WidgetData;
}

export const BentoPreviewRenderer: React.FC<BentoPreviewRendererProps> = ({ widget }) => {
  return (
    <div className="w-full">
      <WidgetRenderer widget={widget} />
    </div>
  );
};
