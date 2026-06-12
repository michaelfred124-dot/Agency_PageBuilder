"use client";

import React, { useEffect, useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import { Plus, Edit2, Trash2, CheckCircle2, XCircle } from 'lucide-react';

export default function AdminServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});

  const supabase = getSupabaseBrowserClient();

  const fetchServices = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from('services').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setServices(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddNew = async () => {
    const { data, error } = await supabase.from('services').insert([
      { title: 'New Service', description: 'Description here', price: '$0', is_active: false }
    ]).select().single();

    if (!error && data) {
      setServices([data, ...services]);
      setIsEditing(data.id);
      setEditForm(data);
    }
  };

  const handleSave = async (id: string) => {
    const { error } = await supabase.from('services').update({
      title: editForm.title,
      description: editForm.description,
      price: editForm.price,
      is_active: editForm.is_active
    }).eq('id', id);

    if (!error) {
      setServices(services.map(s => s.id === id ? { ...s, ...editForm } : s));
      setIsEditing(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (!error) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Services CMS</h1>
          <p className="text-slate-500">Manage the services displayed on your website.</p>
        </div>
        <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading services...</div>
        ) : services.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No services found. Click 'Add Service' to create one.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-400 bg-slate-50">
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Description</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {services.map(service => (
                <tr key={service.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    {isEditing === service.id ? (
                      <input 
                        type="text" 
                        value={editForm.title} 
                        onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900"
                      />
                    ) : (
                      <span className="font-medium text-slate-900">{service.title}</span>
                    )}
                  </td>
                  <td className="p-4 text-slate-500">
                    {isEditing === service.id ? (
                      <input 
                        type="text" 
                        value={editForm.description} 
                        onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900"
                      />
                    ) : (
                      <span className="line-clamp-1">{service.description}</span>
                    )}
                  </td>
                  <td className="p-4 text-slate-500">
                    {isEditing === service.id ? (
                      <input 
                        type="text" 
                        value={editForm.price} 
                        onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                        className="w-24 bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900"
                      />
                    ) : (
                      <span>{service.price}</span>
                    )}
                  </td>
                  <td className="p-4">
                    {isEditing === service.id ? (
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
                      service.is_active ? 
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400"><CheckCircle2 className="w-3.5 h-3.5" /> Active</span> : 
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-slate-500"><XCircle className="w-3.5 h-3.5" /> Hidden</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {isEditing === service.id ? (
                        <>
                          <button onClick={() => setIsEditing(null)} className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Cancel</button>
                          <button onClick={() => handleSave(service.id)} className="px-3 py-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">Save</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => { setIsEditing(service.id); setEditForm(service); }} className="p-2 text-slate-500 hover:text-slate-900 hover:bg-white/10 rounded-lg transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(service.id)} className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
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
