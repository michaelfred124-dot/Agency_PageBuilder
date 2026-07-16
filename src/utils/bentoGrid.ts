export interface GridConfig {
  cols: number;
  gap: number;
  colWidth: number;
  rowHeight: number;
  stepX: number;
  stepY: number;
}

export const getGridConfig = (containerWidth: number): GridConfig => {
  const safeWidth = Math.max(containerWidth, 320);
  const isMobile = safeWidth < 768;
  const cols = isMobile ? 5 : 10;
  const gap = isMobile ? 12 : 16;
  const colWidth = (safeWidth - (cols - 1) * gap) / cols;
  const rowHeight = isMobile ? 85 : colWidth; 
  return {
    cols,
    gap,
    colWidth,
    rowHeight,
    stepX: colWidth + gap,
    stepY: rowHeight + gap,
  };
};

export const snapCoordinates = (x: number, y: number, config: GridConfig) => {
  return {
    x: Math.round(x / config.stepX) * config.stepX,
    y: Math.round(y / config.stepY) * config.stepY,
  };
};

export const snapDimensions = (width: number, height: number, config: GridConfig, minCols = 1, minRows = 1, maxCols = 12, maxRows = 24) => {
  const fractionalColSpan = (width + config.gap) / config.stepX;
  const fractionalRowSpan = (height + config.gap) / config.stepY;

  const colSpan = Math.min(maxCols, Math.max(minCols, Math.round(fractionalColSpan)));
  const rowSpan = Math.min(maxRows, Math.max(minRows, Math.round(fractionalRowSpan)));

  const snappedWidth = colSpan * config.colWidth + (colSpan - 1) * config.gap;
  const snappedHeight = rowSpan * config.rowHeight + (rowSpan - 1) * config.gap;

  return {
    width: snappedWidth,
    height: snappedHeight,
    colSpan,
    rowSpan,
  };
};

export const snapDimensionsProximity = (
  width: number, 
  height: number, 
  config: GridConfig, 
  threshold: number = 15,
  minCols = 1,
  minRows = 1,
  maxCols = 12,
  maxRows = 24
) => {
  const fractionalColSpan = (width + config.gap) / config.stepX;
  const fractionalRowSpan = (height + config.gap) / config.stepY;

  const colSpan = Math.min(maxCols, Math.max(minCols, Math.round(fractionalColSpan)));
  const rowSpan = Math.min(maxRows, Math.max(minRows, Math.round(fractionalRowSpan)));

  const snappedWidth = colSpan * config.colWidth + (colSpan - 1) * config.gap;
  const snappedHeight = rowSpan * config.rowHeight + (rowSpan - 1) * config.gap;

  const finalWidth = Math.abs(width - snappedWidth) < threshold ? snappedWidth : width;
  const finalHeight = Math.abs(height - snappedHeight) < threshold ? snappedHeight : height;

  const minWidth = minCols * config.colWidth + (minCols - 1) * config.gap;
  const minHeight = minRows * config.rowHeight + (minRows - 1) * config.gap;
  const maxWidth = maxCols * config.colWidth + (maxCols - 1) * config.gap;
  const maxHeight = maxRows * config.rowHeight + (maxRows - 1) * config.gap;

  return {
    width: Math.min(maxWidth, Math.max(minWidth, finalWidth)),
    height: Math.min(maxHeight, Math.max(minHeight, finalHeight)),
    colSpan,
    rowSpan,
  };
};
