'use client';
import React from 'react';
import { X, Upload, Trash2 } from 'lucide-react';
import { useBentoContext } from '../lib/bentoStore';

interface FieldDef {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'color' | 'image' | 'select' | 'url' | 'toggle' | 'richtext';
  required?: boolean;
  options?: { label: string; value: string }[];
  placeholder?: string;
  help?: string;
}

interface PropsEditorProps {
  blockId: string;
  blockType: string;
  fields: FieldDef[];
  values: Record<string, any>;
  onClose: () => void;
}

export const PropsEditor: React.FC<PropsEditorProps> = ({
  blockId,
  blockType,
  fields,
  values,
  onClose,
}) => {
  const { updateWidget } = useBentoContext();
  const [localValues, setLocalValues] = React.useState(values);
  const [activeTab, setActiveTab] = React.useState<'content' | 'style' | 'layout'>('content');

  const contentFields = fields.filter(f =>
    !['bgColor', 'textColor', 'borderRadius', 'padding', 'gap'].includes(f.name)
  );
  const styleFields = fields.filter(f =>
    ['bgColor', 'textColor', 'borderRadius', 'padding', 'gap'].includes(f.name)
  );

  const handleUpdate = (fieldName: string, value: any) => {
    setLocalValues(prev => ({ ...prev, [fieldName]: value }));
    updateWidget(blockId, { [fieldName]: value });
  };

  const handleImageUpload = (fieldName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        handleUpdate(fieldName, dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-full w-full sm:w-96 bg-white/95 backdrop-blur-3xl border border-black/5 sm:rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 flex items-center justify-between shrink-0 border-b border-black/5">
        <div>
          <h3 className="font-bold text-sm text-black">Edit Block</h3>
          <p className="text-[10px] text-black/40 mt-1">{blockType}</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-black/5 rounded-lg transition-colors"
        >
          <X className="w-4 h-4 text-black/50" />
        </button>
      </div>

      {/* Tabs */}
      {(contentFields.length > 0 || styleFields.length > 0) && (
        <div className="px-6 pt-4 shrink-0">
          <div className="flex gap-2 bg-black/[0.04] rounded-lg p-1">
            {contentFields.length > 0 && (
              <button
                onClick={() => setActiveTab('content')}
                className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'content'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-black/40 hover:text-black/60'
                }`}
              >
                Content
              </button>
            )}
            {styleFields.length > 0 && (
              <button
                onClick={() => setActiveTab('style')}
                className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'style'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-black/40 hover:text-black/60'
                }`}
              >
                Style
              </button>
            )}
          </div>
        </div>
      )}

      {/* Fields */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-5 space-y-5">
        {activeTab === 'content' &&
          contentFields.map(field => (
            <FieldInput
              key={field.name}
              field={field}
              value={localValues[field.name] ?? ''}
              onChange={(value) => handleUpdate(field.name, value)}
              onImageUpload={(e) => handleImageUpload(field.name, e)}
            />
          ))}

        {activeTab === 'style' &&
          (styleFields.length > 0 ? (
            styleFields.map(field => (
              <FieldInput
                key={field.name}
                field={field}
                value={localValues[field.name] ?? ''}
                onChange={(value) => handleUpdate(field.name, value)}
                onImageUpload={(e) => handleImageUpload(field.name, e)}
              />
            ))
          ) : (
            <p className="text-xs text-black/40 text-center py-4">No style options available</p>
          ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-black/5 flex gap-2 shrink-0">
        <button
          onClick={onClose}
          className="flex-1 px-4 py-2.5 bg-black/5 hover:bg-black/10 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

interface FieldInputProps {
  field: FieldDef;
  value: any;
  onChange: (value: any) => void;
  onImageUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FieldInput: React.FC<FieldInputProps> = ({ field, value, onChange, onImageUpload }) => {
  switch (field.type) {
    case 'text':
      return (
        <div>
          <label className="block text-xs font-bold text-black/60 mb-2 uppercase tracking-wider">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className="w-full bg-black/5 border border-black/10 rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-black/20 focus:ring-2 focus:ring-black/10 transition-all text-black"
          />
          {field.help && <p className="text-[10px] text-black/40 mt-1">{field.help}</p>}
        </div>
      );

    case 'textarea':
      return (
        <div>
          <label className="block text-xs font-bold text-black/60 mb-2 uppercase tracking-wider">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          <textarea
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className="w-full bg-black/5 border border-black/10 rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-black/20 focus:ring-2 focus:ring-black/10 transition-all text-black resize-none min-h-24"
          />
          {field.help && <p className="text-[10px] text-black/40 mt-1">{field.help}</p>}
        </div>
      );

    case 'number':
      return (
        <div>
          <label className="block text-xs font-bold text-black/60 mb-2 uppercase tracking-wider">
            {field.label}
          </label>
          <input
            type="number"
            value={value ?? 0}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full bg-black/5 border border-black/10 rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
          />
        </div>
      );

    case 'color':
      return (
        <div>
          <label className="block text-xs font-bold text-black/60 mb-2 uppercase tracking-wider">
            {field.label}
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              value={value?.startsWith('#') ? value : '#000000'}
              onChange={(e) => onChange(e.target.value)}
              className="w-12 h-10 border border-black/10 rounded-lg cursor-pointer bg-transparent p-1"
            />
            <input
              type="text"
              value={value ?? ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="#000000"
              className="flex-1 bg-black/5 border border-black/10 rounded-lg px-3 py-2.5 text-xs font-mono focus:outline-none focus:border-black/20 transition-all text-black"
            />
          </div>
        </div>
      );

    case 'image':
      return (
        <div>
          <label className="block text-xs font-bold text-black/60 mb-2 uppercase tracking-wider">
            {field.label}
          </label>
          {value && (
            <div className="mb-3 relative rounded-lg overflow-hidden bg-black/5 border border-black/10 h-32">
              <img
                src={value}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex gap-2">
            <label className="flex-1 px-3 py-2.5 bg-black/5 border border-black/10 border-dashed rounded-lg cursor-pointer hover:bg-black/10 transition-colors flex items-center justify-center gap-2 text-xs font-bold text-black/60">
              <Upload className="w-3.5 h-3.5" />
              Upload
              <input
                type="file"
                accept="image/*"
                onChange={onImageUpload}
                className="hidden"
              />
            </label>
            {value && (
              <button
                onClick={() => onChange('')}
                className="px-3 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5 text-red-500" />
              </button>
            )}
          </div>
          <input
            type="text"
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://images.unsplash.com/..."
            className="w-full mt-2 bg-black/5 border border-black/10 rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
          />
        </div>
      );

    case 'select':
      return (
        <div>
          <label className="block text-xs font-bold text-black/60 mb-2 uppercase tracking-wider">
            {field.label}
          </label>
          <select
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-black/5 border border-black/10 rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
          >
            <option value="">Select {field.label.toLowerCase()}...</option>
            {field.options?.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      );

    case 'toggle':
      return (
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-black/60 uppercase tracking-wider">
            {field.label}
          </label>
          <button
            onClick={() => onChange(!value)}
            className={`w-12 h-7 rounded-full p-1 transition-all ${
              value ? 'bg-black' : 'bg-black/10'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-all ${
                value ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      );

    case 'url':
      return (
        <div>
          <label className="block text-xs font-bold text-black/60 mb-2 uppercase tracking-wider">
            {field.label}
          </label>
          <input
            type="url"
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://example.com"
            className="w-full bg-black/5 border border-black/10 rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
          />
        </div>
      );

    default:
      return null;
  }
};
