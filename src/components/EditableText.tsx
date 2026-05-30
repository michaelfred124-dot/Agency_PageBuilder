"use client";
import React, { useState, useEffect, useRef } from 'react';

interface EditableTextProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  isEditable: boolean;
  multiline?: boolean;
  className?: string;
  autoFocus?: boolean;
}

export default function EditableText({
  value,
  onChange,
  placeholder = "Type here...",
  isEditable,
  multiline = false,
  className = "",
  autoFocus = false
}: EditableTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Sync value from props to contentEditable element
  useEffect(() => {
    if (elementRef.current && elementRef.current.innerText !== value) {
      elementRef.current.innerText = value || '';
    }
  }, [value]);

  // Handle auto-focus and cursor placement at the end of text
  useEffect(() => {
    if (isEditable && autoFocus && elementRef.current) {
      if (document.activeElement !== elementRef.current) {
        elementRef.current.focus();
        try {
          const range = document.createRange();
          const sel = window.getSelection();
          range.selectNodeContents(elementRef.current);
          range.collapse(false); // Collapse selection to the end of the text
          sel?.removeAllRanges();
          sel?.addRange(range);
        } catch (err) {
          console.error("Cursor placement error:", err);
        }
      }
    }
  }, [autoFocus, isEditable]);

  if (!isEditable) {
    return <span className={className}>{value || placeholder}</span>;
  }

  const handleBlur = () => {
    setIsFocused(false);
    if (elementRef.current) {
      const newValue = elementRef.current.innerText;
      if (newValue !== value) {
        onChange(newValue);
      }
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      elementRef.current?.blur();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      if (elementRef.current) {
        elementRef.current.innerText = value || '';
      }
      elementRef.current?.blur();
    }
  };

  return (
    <span
      ref={elementRef}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onClick={(e) => {
        // If already focused, stop propagation to prevent re-triggering parent select.
        // Otherwise, let the first click bubble up to select the parent section!
        if (isFocused) {
          e.stopPropagation();
        }
      }}
      className={`inline-block outline-none min-h-[1em] min-w-[2em] transition-all cursor-text rounded
        hover:outline-dashed hover:outline-2 hover:outline-blue-400/80 hover:bg-blue-50/5
        ${isFocused ? 'canvas-selected-element' : ''} ${className}`}
      data-placeholder={placeholder}
      title="Click to edit text directly inline"
    />
  );
}
