"use client";

import React, { useEffect, useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import { Plus, Edit2, Trash2, CheckCircle2, XCircle, Image as ImageIcon } from 'lucide-react';

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});

  const supabase = getSupabaseBrowserClient();

  const fetchItems = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from('portfolio_items').select('*').order('created_at', { ascending: false });
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
    const { data, error } = await supabase.from('portfolio_items').insert([
      { title: 'New Project', slug: `new-project-${newId.substring(0, 8)}`, description: 'Description here', client_name: 'Client Name', is_published: false }
    ]).select().single();

    if (!error && data) {
      setItems([data, ...items]);
      setIsEditing(data.id);
      setEditForm(data);
    }
  };

  const handleSave = async (id: string) => {
    const { error } = await supabase.from('portfolio_items').update({
      title: editForm.title,
      slug: editForm.slug,
      description: editForm.description,
      client_name: editForm.client_name,
      is_published: editForm.is_published
    }).eq('id', id);

    if (!error) {
      setItems(items.map(s => s.id === id ? { ...s, ...editForm } : s));
      setIsEditing(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this portfolio item?")) return;
    const { error } = await supabase.from('portfolio_items').delete().eq('id', id);
    if (!error) {
      setItems(items.filter(s => s.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Portfolio CMS</h1>
          <p className="text-slate-500">Manage past work and case studies to showcase your agency.</p>
        </div>
        <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium">
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading portfolio items...</div>
        ) : items.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No projects found. Click 'Add Project' to create one.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-400 bg-slate-50">
                <th className="p-4 font-medium">Project Name</th>
                <th className="p-4 font-medium">Client / Slug</th>
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
                          placeholder="Title"
                          value={editForm.title} 
                          onChange={(e) => setEditForm({...editForm, title: e.target.value})}
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
                        <div className="font-medium text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-400 line-clamp-1">{item.description}</div>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-slate-500">
                    {isEditing === item.id ? (
                      <div className="space-y-2">
                        <input 
                          type="text" 
                          placeholder="Client Name"
                          value={editForm.client_name} 
                          onChange={(e) => setEditForm({...editForm, client_name: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900"
                        />
                        <input 
                          type="text" 
                          placeholder="Slug"
                          value={editForm.slug} 
                          onChange={(e) => setEditForm({...editForm, slug: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900 text-xs"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="text-slate-900">{item.client_name}</div>
                        <div className="text-xs text-slate-400 font-mono">/{item.slug}</div>
                      </div>
                    )}
                  </td>
                  <td className="p-4">
                    {isEditing === item.id ? (
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={editForm.is_published} 
                          onChange={(e) => setEditForm({...editForm, is_published: e.target.checked})}
                          className="rounded border-slate-300 bg-slate-50"
                        />
                        <span className="text-slate-500">Published</span>
                      </label>
                    ) : (
                      item.is_published ? 
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400"><CheckCircle2 className="w-3.5 h-3.5" /> Published</span> : 
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-slate-500"><XCircle className="w-3.5 h-3.5" /> Draft</span>
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
