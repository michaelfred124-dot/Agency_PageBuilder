"use client";

import React, { useEffect, useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import { Plus, Edit2, Trash2, CheckCircle2, XCircle, FileText } from 'lucide-react';

export default function AdminTemplatesPage() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [isLaunchingBuilder, setIsLaunchingBuilder] = useState<string | null>(null);

  const supabase = getSupabaseBrowserClient();

  const fetchItems = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from('site_templates').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setItems(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddNew = async () => {
    const newId = crypto.randomUUID();
    const { data, error } = await supabase.from('site_templates').insert([
      { name: 'New Template', template_key: `template-${newId.substring(0, 8)}`, description: 'Description here', category: 'General', is_active: false }
    ]).select().single();

    if (!error && data) {
      setItems([data, ...items]);
      setIsEditing(data.id);
      setEditForm(data);
    }
  };

  const handleSave = async (id: string) => {
    const { error } = await supabase.from('site_templates').update({
      name: editForm.name,
      template_key: editForm.template_key,
      description: editForm.description,
      category: editForm.category,
      is_active: editForm.is_active
    }).eq('id', id);

    if (!error) {
      setItems(items.map(s => s.id === id ? { ...s, ...editForm } : s));
      setIsEditing(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this template?")) return;
    const { error } = await supabase.from('site_templates').delete().eq('id', id);
    if (!error) {
      setItems(items.filter(s => s.id !== id));
    }
  };

  const handleLaunchBuilder = async (item: any) => {
    setIsLaunchingBuilder(item.id);
    try {
      const res = await fetch('/api/admin/template/builder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ template_key: item.template_key, name: item.name })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to launch builder');
      
      if (data.tenantId) {
        window.location.href = `/admin/editor/${data.tenantId}`;
      }
    } catch (error: any) {
      alert(`Error launching builder: ${error.message}`);
      setIsLaunchingBuilder(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Templates CMS</h1>
          <p className="text-slate-500">Manage site templates available for your clients to start from.</p>
        </div>
        <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium">
          <Plus className="w-4 h-4" /> Add Template
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading templates...</div>
        ) : items.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No templates found. Click 'Add Template' to create one.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-400 bg-slate-50">
                <th className="p-4 font-medium">Template Name</th>
                <th className="p-4 font-medium">Key / Category</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {items.map(item => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    {isEditing === item.id ? (
                      <div className="space-y-2">
                        <input 
                          type="text" 
                          placeholder="Name"
                          value={editForm.name} 
                          onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900"
                        />
                        <input 
                          type="text" 
                          placeholder="Description"
                          value={editForm.description} 
                          onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900 text-xs"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="font-medium text-slate-900">{item.name}</div>
                        <div className="text-xs text-slate-400 line-clamp-1">{item.description}</div>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-slate-500">
                    {isEditing === item.id ? (
                      <div className="space-y-2">
                        <input 
                          type="text" 
                          placeholder="Template Key"
                          value={editForm.template_key} 
                          onChange={(e) => setEditForm({...editForm, template_key: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900 text-xs font-mono"
                        />
                        <input 
                          type="text" 
                          placeholder="Category"
                          value={editForm.category} 
                          onChange={(e) => setEditForm({...editForm, category: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900 text-xs"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="text-slate-900 text-xs font-mono">{item.template_key}</div>
                        <div className="text-xs text-slate-400">{item.category}</div>
                      </div>
                    )}
                  </td>
                  <td className="p-4">
                    {isEditing === item.id ? (
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={editForm.is_active} 
                          onChange={(e) => setEditForm({...editForm, is_active: e.target.checked})}
                          className="rounded border-slate-300 bg-slate-50"
                        />
                        <span className="text-slate-500">Active</span>
                      </label>
                    ) : (
                      item.is_active ? 
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400"><CheckCircle2 className="w-3.5 h-3.5" /> Active</span> : 
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-slate-500"><XCircle className="w-3.5 h-3.5" /> Disabled</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {isEditing === item.id ? (
                        <>
                          <button onClick={() => setIsEditing(null)} className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Cancel</button>
                          <button onClick={() => handleSave(item.id)} className="px-3 py-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">Save</button>
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => handleLaunchBuilder(item)} 
                            disabled={isLaunchingBuilder === item.id}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shadow-sm ${
                              isLaunchingBuilder === item.id 
                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                            }`}
                          >
                            {isLaunchingBuilder === item.id ? 'Loading...' : 'Launch Builder'}
                          </button>
                          <button onClick={() => { setIsEditing(item.id); setEditForm(item); }} className="p-2 text-slate-500 hover:text-slate-900 hover:bg-white/10 rounded-lg transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(item.id)} className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
