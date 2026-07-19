"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Search, Loader2, ImageIcon, Check } from 'lucide-react';

interface StockPhoto {
  id: string | number;
  url: string;
  thumb: string;
  alt?: string;
}

interface ImagePickerModalProps {
  isOpen: boolean;
  tenantId: string;
  onClose: () => void;
  onSelect: (url: string) => void;
}

/**
 * Image picker for the client site editor.
 * Two sources: upload your own photo (Supabase Storage via /api/upload),
 * or search stock photos (/api/stock).
 */
export default function ImagePickerModal({ isOpen, tenantId, onClose, onSelect }: ImagePickerModalProps) {
  const [tab, setTab] = useState<'upload' | 'stock'>('upload');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [stockQuery, setStockQuery] = useState('');
  const [stockPhotos, setStockPhotos] = useState<StockPhoto[]>([]);
  const [stockLoading, setStockLoading] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  const searchStock = useCallback(async (query: string) => {
    setStockLoading(true);
    try {
      const res = await fetch(`/api/stock?query=${encodeURIComponent(query)}`);
      const json = await res.json();
      setStockPhotos(Array.isArray(json.photos) ? json.photos : []);
    } catch {
      setStockPhotos([]);
    } finally {
      setStockLoading(false);
    }
  }, []);

  // Load default stock photos when the stock tab first opens
  useEffect(() => {
    if (isOpen && tab === 'stock' && stockPhotos.length === 0 && !stockLoading) {
      searchStock('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, tab]);

  // Reset transient state each time the modal opens
  useEffect(() => {
    if (isOpen) {
      setUploadError(null);
      setSelectedUrl(null);
    }
  }, [isOpen]);

  const handleFile = async (file: File) => {
    setUploading(true);
    setUploadError(null);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tenantId', tenantId);
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const json = await res.json();
      if (!res.ok) {
        setUploadError(json.error || 'Upload failed.');
        return;
      }
      onSelect(json.url);
      onClose();
    } catch (err: any) {
      setUploadError(err?.message || 'Network error during upload.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[80] flex items-center justify-center p-4"
          onClick={() => !uploading && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ type: 'spring', damping: 24, stiffness: 240 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Change Image</h3>
              </div>
              <button
                onClick={() => !uploading && onClose()}
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="px-6 pt-3 border-b border-slate-200 flex gap-1 shrink-0">
              <button
                onClick={() => setTab('upload')}
                className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${tab === 'upload' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
              >
                Upload Your Photo
              </button>
              <button
                onClick={() => setTab('stock')}
                className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${tab === 'stock' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
              >
                Stock Photos
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {tab === 'upload' ? (
                <div>
                  <div
                    onClick={() => !uploading && fileInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);
                      const file = e.dataTransfer.files?.[0];
                      if (file && !uploading) handleFile(file);
                    }}
                    className={`border-2 border-dashed rounded-2xl py-16 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors ${
                      dragOver ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 hover:border-indigo-400 hover:bg-slate-50'
                    }`}
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                        <p className="text-sm font-semibold text-slate-700">Uploading…</p>
                      </>
                    ) : (
                      <>
                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
                          <Upload className="w-6 h-6 text-indigo-600" />
                        </div>
                        <p className="text-sm font-bold text-slate-800">Click to upload or drag & drop</p>
                        <p className="text-xs text-slate-400">JPEG, PNG, WebP, or GIF — up to 8MB</p>
                      </>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFile(file);
                      e.target.value = '';
                    }}
                  />
                  {uploadError && (
                    <div className="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                      {uploadError}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <form
                    onSubmit={(e) => { e.preventDefault(); searchStock(stockQuery); }}
                    className="relative"
                  >
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={stockQuery}
                      onChange={(e) => setStockQuery(e.target.value)}
                      placeholder="Search photos… (e.g. dog grooming, coffee shop)"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-24 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Search
                    </button>
                  </form>

                  {stockLoading ? (
                    <div className="py-16 flex items-center justify-center">
                      <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-3">
                      {stockPhotos.map(photo => (
                        <button
                          key={photo.id}
                          type="button"
                          onClick={() => setSelectedUrl(photo.url)}
                          className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                            selectedUrl === photo.url ? 'border-indigo-600 ring-2 ring-indigo-600/20' : 'border-transparent hover:border-indigo-300'
                          }`}
                        >
                          {selectedUrl === photo.url && (
                            <div className="absolute top-2 right-2 z-10 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center shadow">
                              <Check className="w-3 h-3 text-white" strokeWidth={3} />
                            </div>
                          )}
                          <img
                            src={photo.thumb || photo.url}
                            alt={photo.alt || 'Stock photo'}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                      {stockPhotos.length === 0 && (
                        <p className="col-span-3 text-center text-sm text-slate-400 py-12">No photos found. Try another search.</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer (stock tab only — upload applies immediately) */}
            {tab === 'stock' && (
              <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-end gap-3 shrink-0 bg-slate-50">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => { if (selectedUrl) { onSelect(selectedUrl); onClose(); } }}
                  disabled={!selectedUrl}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
                >
                  Use This Photo
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
