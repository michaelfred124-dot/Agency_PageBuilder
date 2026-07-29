'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload, CheckCircle2, Clock, MessageSquare, PlayCircle, Flag, ChevronDown,
  Image as ImageIcon, Type, Palette, AlertCircle, CheckCircle
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  type: 'file' | 'text' | 'color';
  required: boolean;
  status: 'pending' | 'in-progress' | 'completed';
  value?: any;
}

interface ChecklistSection {
  title: string;
  description: string;
  items: ChecklistItem[];
}

interface OnboardingChecklistProps {
  businessName: string;
  templateName: string;
  onItemUpdate: (sectionIdx: number, itemIdx: number, value: any) => void;
  sections: ChecklistSection[];
}

export const OnboardingChecklist: React.FC<OnboardingChecklistProps> = ({
  businessName,
  templateName,
  onItemUpdate,
  sections,
}) => {
  const [expandedSection, setExpandedSection] = useState<number>(0);
  const [uploadingFiles, setUploadingFiles] = useState<Set<string>>(new Set());

  // Calculate progress
  const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);
  const completedItems = sections.reduce(
    (sum, s) => sum + s.items.filter(item => item.status === 'completed').length,
    0
  );
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  const handleFileUpload = (sectionIdx: number, itemIdx: number, file: File) => {
    const itemId = `${sectionIdx}-${itemIdx}`;
    setUploadingFiles(prev => new Set([...prev, itemId]));

    // Simulate upload
    setTimeout(() => {
      onItemUpdate(sectionIdx, itemIdx, {
        fileName: file.name,
        uploadedAt: new Date().toLocaleString(),
      });
      setUploadingFiles(prev => {
        const next = new Set(prev);
        next.delete(itemId);
        return next;
      });
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {/* Header with stats */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="text-indigo-100 text-sm font-semibold mb-1">Welcome,</p>
            <h2 className="text-3xl font-black mb-2">{businessName}</h2>
            <p className="text-indigo-100 mb-4">Your website is being built using the {templateName} layout</p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Ready in 3-5 days</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Updates via email</span>
              </div>
            </div>
          </div>

          {/* Progress Ring */}
          <div className="text-center min-w-max">
            <div className="relative w-32 h-32 mx-auto mb-3">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeDasharray={`${(progressPercent / 100) * 339.3} 339.3`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-black">{progressPercent}%</div>
                  <div className="text-xs text-indigo-100">{completedItems} of {totalItems}</div>
                </div>
              </div>
            </div>
            <p className="text-indigo-100 text-xs font-semibold">COMPLETE</p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {sections.map((section, sectionIdx) => (
          <motion.div
            key={sectionIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-2 border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-300 transition-colors"
          >
            {/* Section Header */}
            <button
              onClick={() => setExpandedSection(expandedSection === sectionIdx ? -1 : sectionIdx)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 text-left">
                <div className="text-2xl">📋</div>
                <div>
                  <h3 className="font-black text-slate-900">{section.title}</h3>
                  <p className="text-xs text-slate-600 mt-1">{section.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900">
                    {section.items.filter(i => i.status === 'completed').length}/{section.items.length}
                  </div>
                  <div className="text-xs text-slate-500">complete</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-transform ${
                    expandedSection === sectionIdx ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {/* Section Content */}
            <AnimatePresence>
              {expandedSection === sectionIdx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-slate-200 px-6 py-6 bg-slate-50/50"
                >
                  <div className="space-y-6">
                    {section.items.map((item, itemIdx) => {
                      const itemKey = `${sectionIdx}-${itemIdx}`;
                      const isUploading = uploadingFiles.has(itemKey);

                      return (
                        <div key={itemIdx} className="bg-white rounded-lg p-5 border border-slate-200">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="mt-1">
                                {item.status === 'completed' ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                ) : (
                                  <Circle className="w-5 h-5 text-slate-400" />
                                )}
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900">{item.label}</p>
                                {item.required && (
                                  <p className="text-xs text-red-600 font-semibold">Required</p>
                                )}
                              </div>
                            </div>
                            {item.status === 'completed' && (
                              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                DONE
                              </span>
                            )}
                          </div>

                          {/* File Upload */}
                          {item.type === 'file' && (
                            <div className="ml-8 space-y-2">
                              {item.value ? (
                                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                                  <div className="flex-1">
                                    <p className="text-sm font-semibold text-emerald-900">{item.value.fileName}</p>
                                    <p className="text-xs text-emerald-700">{item.value.uploadedAt}</p>
                                  </div>
                                  <button
                                    onClick={() => onItemUpdate(sectionIdx, itemIdx, null)}
                                    className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ) : (
                                <div
                                  className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/30 transition-colors"
                                  onDrop={(e) => {
                                    e.preventDefault();
                                    const file = e.dataTransfer.files?.[0];
                                    if (file) handleFileUpload(sectionIdx, itemIdx, file);
                                  }}
                                  onDragOver={(e) => e.preventDefault()}
                                >
                                  {isUploading ? (
                                    <>
                                      <Upload className="w-5 h-5 text-slate-400 mx-auto mb-2 animate-bounce" />
                                      <p className="text-sm font-semibold text-slate-600">Uploading...</p>
                                    </>
                                  ) : (
                                    <>
                                      <Upload className="w-5 h-5 text-slate-400 mx-auto mb-2" />
                                      <p className="text-sm font-semibold text-slate-600">Drag file here or click</p>
                                      <p className="text-xs text-slate-500 mt-1">PNG, JPG, SVG (max 5MB)</p>
                                      <input
                                        type="file"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) handleFileUpload(sectionIdx, itemIdx, file);
                                        }}
                                      />
                                    </>
                                  )}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Text Input */}
                          {item.type === 'text' && (
                            <div className="ml-8">
                              <textarea
                                value={item.value || ''}
                                onChange={(e) => onItemUpdate(sectionIdx, itemIdx, e.target.value)}
                                placeholder="Enter your text here..."
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                rows={3}
                              />
                              <p className="text-xs text-slate-500 mt-2">
                                {item.value?.length || 0} characters
                              </p>
                            </div>
                          )}

                          {/* Color Picker */}
                          {item.type === 'color' && (
                            <div className="ml-8 flex items-center gap-3">
                              <div
                                className="w-12 h-12 rounded-lg border-2 border-slate-300 cursor-pointer"
                                style={{ backgroundColor: item.value || '#1B6EB5' }}
                                onClick={() => {
                                  const input = document.createElement('input');
                                  input.type = 'color';
                                  input.value = item.value || '#1B6EB5';
                                  input.onchange = (e: any) => {
                                    onItemUpdate(sectionIdx, itemIdx, e.target.value);
                                  };
                                  input.click();
                                }}
                              />
                              <input
                                type="text"
                                value={item.value || '#1B6EB5'}
                                onChange={(e) => onItemUpdate(sectionIdx, itemIdx, e.target.value)}
                                placeholder="#1B6EB5"
                                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
        <h3 className="font-black text-slate-900 mb-6">What Happens Next</h3>

        <div className="space-y-6">
          {[
            {
              phase: 'Phase 1',
              title: 'Gather Content',
              desc: 'You upload photos, logos, and text (you are here)',
              status: progressPercent < 100 ? 'in-progress' : 'complete',
            },
            {
              phase: 'Phase 2',
              title: 'Build Your Site',
              desc: 'Our team designs and develops your website (3-5 days)',
              status: progressPercent < 100 ? 'pending' : 'in-progress',
            },
            {
              phase: 'Phase 3',
              title: 'Review & Approve',
              desc: 'You review the live preview and request changes',
              status: 'pending',
            },
            {
              phase: 'Phase 4',
              title: 'Go Live',
              desc: 'Your website is published and ready for the world',
              status: 'pending',
            },
          ].map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${
                    step.status === 'complete'
                      ? 'bg-emerald-100 text-emerald-700'
                      : step.status === 'in-progress'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {step.status === 'complete' ? '✓' : idx + 1}
                </div>
                {idx < 3 && (
                  <div
                    className={`w-0.5 h-12 ${
                      step.status === 'complete' ? 'bg-emerald-300' : 'bg-slate-300'
                    }`}
                  />
                )}
              </div>
              <div className="pb-4">
                <p className="font-bold text-slate-900">{step.phase}: {step.title}</p>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6 flex items-start gap-4">
        <MessageSquare className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
        <div>
          <p className="font-bold text-indigo-900 mb-2">Need help?</p>
          <p className="text-sm text-indigo-800 mb-3">
            Our team is here to help. Chat with us anytime or email support@michaelfreddesigns.com
          </p>
          <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">
            💬 Chat with our team →
          </button>
        </div>
      </div>
    </div>
  );
};

const Circle = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" />
  </svg>
);
