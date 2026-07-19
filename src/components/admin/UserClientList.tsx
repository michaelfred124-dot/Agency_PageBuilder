"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MoreVertical,
  Globe,
  Building,
  Mail,
  Calendar,
  CreditCard,
  MessageSquare,
  DollarSign,
  Users,
  LayoutDashboard,
  ExternalLink,
  ChevronRight,
  User as UserIcon,
  X,
  Plus,
  Loader2,
  Check,
  Tag,
  Clock,
  StickyNote,
  Trash2,
  Pencil,
  AlertTriangle,
  CheckSquare,
  Square,
  Archive,
  Inbox,
  FileText,
  LayoutList,
  ChevronDown
} from 'lucide-react';
import { Tenant } from '@/lib/supabase';
import { TEMPLATE_CATALOG } from '@/lib/templateCatalog';

interface ClientProfile {
  user_id: string;
  pipeline_stage: string;
  lead_source: string | null;
  tags: string[];
  assigned_to: string | null;
  next_follow_up_at: string | null;
  estimated_mrr_cents: number | null;
}

interface ActivityEntry {
  id: string;
  tenant_id: string | null;
  type: string;
  body: string;
  created_at: string;
}

interface ClientTask {
  id: string;
  tenant_id: string | null;
  title: string;
  due_at: string | null;
  status: string;
}

interface OnboardingSubmission {
  id: string;
  plan_tier: string;
  answers: Record<string, any>;
  status: string;
  converted_tenant_id: string | null;
  created_at: string;
}

// Extended User type mapping aggregated server-side fields
export interface ExtendedUser {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string;
  tenants: (Tenant & { settings: any, submissions: any[] })[];
  submissions: any[];
  total_mrr: number;
  profile: ClientProfile | null;
  activity: ActivityEntry[];
  tasks: ClientTask[];
  onboardingSubmissions: OnboardingSubmission[];
}

const PIPELINE_STAGES = ['lead', 'contacted', 'qualified', 'active', 'churned'] as const;
const STAGE_COLORS: Record<string, string> = {
  lead: 'bg-slate-100 text-slate-600',
  contacted: 'bg-blue-100 text-blue-700',
  qualified: 'bg-amber-100 text-amber-700',
  active: 'bg-emerald-100 text-emerald-700',
  churned: 'bg-red-100 text-red-700',
};

interface UserClientListProps {
  initialClients: ExtendedUser[];
}

export default function UserClientList({ initialClients }: UserClientListProps) {
  const [users, setUsers] = useState<ExtendedUser[]>(initialClients);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'DATE_NEWEST' | 'DATE_OLDEST' | 'MRR_DESC' | 'LEADS_DESC'>('DATE_NEWEST');

  // Selected user for CRM drawer view
  const [selectedUser, setSelectedUser] = useState<ExtendedUser | null>(null);
  const [activeDrawerTab, setActiveDrawerTab] = useState<'overview' | 'sites' | 'leads'>('overview');

  // CRM: notes / tasks composer state
  const [noteDraft, setNoteDraft] = useState('');
  const [addingNote, setAddingNote] = useState(false);
  const [taskTitleDraft, setTaskTitleDraft] = useState('');
  const [taskDueDraft, setTaskDueDraft] = useState('');
  const [addingTask, setAddingTask] = useState(false);
  const [profileSaving, setProfileSaving] = useState(false);
  const [tagDraft, setTagDraft] = useState('');

  // Tenant edit / delete
  const [editingTenantId, setEditingTenantId] = useState<string | null>(null);
  const [editTenantForm, setEditTenantForm] = useState({ name: '', status: 'Draft', plan_tier: 'DIY', notes: '' });
  const [tenantSaving, setTenantSaving] = useState(false);
  const [confirmDeleteTenantId, setConfirmDeleteTenantId] = useState<string | null>(null);
  const [tenantDeleting, setTenantDeleting] = useState(false);
  const [expandedPagesTenantId, setExpandedPagesTenantId] = useState<string | null>(null);

  // Assign New Site modal state
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignTemplateKey, setAssignTemplateKey] = useState<string | null>(null);
  const [assignSiteName, setAssignSiteName] = useState('');
  const [assignSubdomain, setAssignSubdomain] = useState('');
  const [assignPlanTier, setAssignPlanTier] = useState<'DIY' | 'DFY'>('DFY');
  const [assignSubmitting, setAssignSubmitting] = useState(false);
  const [assignError, setAssignError] = useState<string | null>(null);

  const resetAssignForm = () => {
    setAssignTemplateKey(null);
    setAssignSiteName('');
    setAssignSubdomain('');
    setAssignPlanTier('DFY');
    setAssignError(null);
  };

  const handleAssignSite = async () => {
    if (!selectedUser || !assignSiteName.trim() || !assignSubdomain.trim()) {
      setAssignError('Site name and subdomain are required.');
      return;
    }
    setAssignSubmitting(true);
    setAssignError(null);
    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          data: {
            name: assignSiteName.trim(),
            subdomain: assignSubdomain.trim(),
            owner_id: selectedUser.id,
            template_key: assignTemplateKey || undefined,
            plan_tier: assignPlanTier,
            status: 'Draft'
          }
        })
      });
      const json = await res.json();
      if (!res.ok) {
        setAssignError(json.error || 'Failed to create site.');
        return;
      }
      // Reflect the new site in local state so the drawer updates immediately
      const newTenant = { ...json.tenant, settings: null, submissions: [] };
      setUsers(prev => prev.map(u =>
        u.id === selectedUser.id ? { ...u, tenants: [...u.tenants, newTenant] } : u
      ));
      setSelectedUser(prev => prev ? { ...prev, tenants: [...prev.tenants, newTenant] } : prev);
      setShowAssignModal(false);
      resetAssignForm();
    } catch (err: any) {
      setAssignError(err?.message || 'Network error.');
    } finally {
      setAssignSubmitting(false);
    }
  };

  // Helper: patch the selected user + the master list with a partial update
  const patchSelectedUser = (patch: Partial<ExtendedUser>) => {
    setSelectedUser(prev => (prev ? { ...prev, ...patch } : prev));
    setUsers(prev => prev.map(u => (u.id === selectedUser?.id ? { ...u, ...patch } : u)));
  };

  const updateProfileField = async (data: Partial<ClientProfile>) => {
    if (!selectedUser) return;
    setProfileSaving(true);
    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_client_profile', userId: selectedUser.id, data }),
      });
      const json = await res.json();
      if (res.ok) patchSelectedUser({ profile: json.profile });
    } finally {
      setProfileSaving(false);
    }
  };

  const handleAddTag = () => {
    const tag = tagDraft.trim();
    if (!tag || !selectedUser) return;
    const nextTags = Array.from(new Set([...(selectedUser.profile?.tags || []), tag]));
    setTagDraft('');
    updateProfileField({ tags: nextTags });
  };

  const handleRemoveTag = (tag: string) => {
    if (!selectedUser) return;
    const nextTags = (selectedUser.profile?.tags || []).filter(t => t !== tag);
    updateProfileField({ tags: nextTags });
  };

  const handleAddNote = async () => {
    if (!noteDraft.trim() || !selectedUser) return;
    setAddingNote(true);
    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'add_activity', userId: selectedUser.id, type: 'note', body: noteDraft.trim() }),
      });
      const json = await res.json();
      if (res.ok) {
        patchSelectedUser({ activity: [json.activity, ...(selectedUser.activity || [])] });
        setNoteDraft('');
      }
    } finally {
      setAddingNote(false);
    }
  };

  const handleAddTask = async () => {
    if (!taskTitleDraft.trim() || !selectedUser) return;
    setAddingTask(true);
    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add_task', userId: selectedUser.id, title: taskTitleDraft.trim(),
          dueAt: taskDueDraft || undefined
        }),
      });
      const json = await res.json();
      if (res.ok) {
        patchSelectedUser({ tasks: [json.task, ...(selectedUser.tasks || [])] });
        setTaskTitleDraft('');
        setTaskDueDraft('');
      }
    } finally {
      setAddingTask(false);
    }
  };

  const handleToggleTask = async (task: ClientTask) => {
    const nextStatus = task.status === 'open' ? 'done' : 'open';
    patchSelectedUser({ tasks: (selectedUser?.tasks || []).map(t => (t.id === task.id ? { ...t, status: nextStatus } : t)) });
    await fetch('/api/admin/client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update_task', taskId: task.id, status: nextStatus }),
    }).catch(() => {});
  };

  const handleDeleteTask = async (taskId: string) => {
    patchSelectedUser({ tasks: (selectedUser?.tasks || []).filter(t => t.id !== taskId) });
    await fetch(`/api/admin/client?action=delete_task&taskId=${taskId}`, { method: 'DELETE' }).catch(() => {});
  };

  const handleUpdateLeadStatus = async (leadId: string, status: string) => {
    if (!selectedUser) return;
    const nextSubs = selectedUser.submissions.map(s => (s.id === leadId ? { ...s, status } : s));
    patchSelectedUser({ submissions: nextSubs });
    await fetch('/api/admin/client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update_lead', leadId, status }),
    }).catch(() => {});
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!selectedUser || !confirm('Delete this lead? This cannot be undone.')) return;
    patchSelectedUser({ submissions: selectedUser.submissions.filter(s => s.id !== leadId) });
    await fetch(`/api/admin/client?action=delete_lead&leadId=${leadId}`, { method: 'DELETE' }).catch(() => {});
  };

  const openTenantEdit = (tenant: Tenant) => {
    setEditingTenantId(tenant.id);
    setEditTenantForm({
      name: tenant.name || '',
      status: tenant.status || 'Draft',
      plan_tier: (tenant as any).plan_tier || 'DIY',
      notes: (tenant as any).notes || ''
    });
  };

  const handleSaveTenantEdit = async () => {
    if (!editingTenantId || !selectedUser) return;
    setTenantSaving(true);
    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update', tenantId: editingTenantId, data: editTenantForm }),
      });
      const json = await res.json();
      if (res.ok) {
        const nextTenants = selectedUser.tenants.map(t => (t.id === editingTenantId ? { ...t, ...json.tenant } : t));
        patchSelectedUser({ tenants: nextTenants });
        setEditingTenantId(null);
      }
    } finally {
      setTenantSaving(false);
    }
  };

  const handleDeleteTenant = async (tenantId: string) => {
    if (!selectedUser) return;
    setTenantDeleting(true);
    try {
      const res = await fetch(`/api/admin/client?action=delete_tenant&tenantId=${tenantId}`, { method: 'DELETE' });
      if (res.ok) {
        patchSelectedUser({ tenants: selectedUser.tenants.filter(t => t.id !== tenantId) });
        setConfirmDeleteTenantId(null);
      }
    } finally {
      setTenantDeleting(false);
    }
  };

  // CRM Calculations
  const totalUsers = users.length;
  const totalSites = users.reduce((acc, u) => acc + u.tenants.length, 0);
  const totalLeads = users.reduce((acc, u) => acc + u.submissions.length, 0);
  const totalMRR = users.reduce((acc, u) => acc + u.total_mrr, 0);

  // Filtering & Sorting
  const filteredUsers = users
    .filter(user => {
      const matchSearch = user.email.toLowerCase().includes(searchQuery.toLowerCase()) || user.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'DATE_NEWEST') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      if (sortBy === 'DATE_OLDEST') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      if (sortBy === 'MRR_DESC') return b.total_mrr - a.total_mrr;
      if (sortBy === 'LEADS_DESC') return b.submissions.length - a.submissions.length;
      return 0;
    });

  const handleLaunchEditor = (tenantId: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/admin/editor/${tenantId}`;
    }
  };

  return (
    <div className="relative">
      
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-500">Total Users</h3>
          </div>
          <div className="text-2xl font-bold text-slate-900">{totalUsers}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-500">Live Sites</h3>
          </div>
          <div className="text-2xl font-bold text-slate-900">{totalSites}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-500">Total Leads</h3>
          </div>
          <div className="text-2xl font-bold text-slate-900">{totalLeads}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <DollarSign className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-slate-500">Est. MRR</h3>
          </div>
          <div className="text-2xl font-bold text-slate-900">${totalMRR}</div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by email or user ID..."
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors shadow-sm"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 focus:outline-none focus:border-indigo-500 shadow-sm"
          >
            <option value="DATE_NEWEST">Newest First</option>
            <option value="DATE_OLDEST">Oldest First</option>
            <option value="MRR_DESC">Highest MRR</option>
            <option value="LEADS_DESC">Most Leads</option>
          </select>
        </div>
      </div>

      {/* Main CRM Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredUsers.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="col-span-full py-20 text-center"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">No users found</h3>
              <p className="text-slate-500 text-sm">Try adjusting your search criteria.</p>
            </motion.div>
          ) : (
            filteredUsers.map((user) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={user.id}
                className="group relative bg-white border border-slate-200 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 flex flex-col justify-between cursor-pointer"
                onClick={() => { setSelectedUser(user); setActiveDrawerTab('overview'); }}
              >
                
                <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />

                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 flex items-center justify-center text-xl font-extrabold text-indigo-600">
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                          {user.email}
                        </h3>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          Joined {new Date(user.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 my-5 text-sm">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <LayoutDashboard className="w-3.5 h-3.5" /> Sites Owned
                      </span>
                      <span className={`font-semibold ${user.tenants.length > 0 ? 'text-indigo-600' : 'text-slate-400'}`}>
                        {user.tenants.length} site{user.tenants.length !== 1 && 's'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" /> Total Leads
                      </span>
                      <span className="font-semibold text-slate-700">
                        {user.submissions.length} message{user.submissions.length !== 1 && 's'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5" /> Est. MRR
                      </span>
                      <span className="font-semibold text-emerald-600">
                        ${user.total_mrr}/mo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-2 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400 group-hover:text-indigo-600 transition-colors">View Profile</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Slide-out CRM Drawer */}
      <AnimatePresence>
        {selectedUser && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
              onClick={() => setSelectedUser(null)}
            />

            <motion.div 
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-white border-l border-slate-200 shadow-2xl z-50 flex flex-col"
            >
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                
                {/* Drawer Header */}
                <div className="bg-slate-50 border-b border-slate-200 p-6 sticky top-0 z-10 backdrop-blur-xl bg-slate-50/80">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-2xl font-extrabold text-white shadow-lg">
                        {selectedUser.email.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-slate-900">{selectedUser.email}</h2>
                        <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Joined {new Date(selectedUser.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedUser(null)}
                      className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200/50 rounded-xl transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 border-b border-slate-200">
                    <button 
                      onClick={() => setActiveDrawerTab('overview')}
                      className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${activeDrawerTab === 'overview' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-t-lg'}`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveDrawerTab('sites')}
                      className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${activeDrawerTab === 'sites' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-t-lg'}`}
                    >
                      Sites
                      <span className="bg-slate-200 text-slate-600 text-[10px] px-1.5 py-0.5 rounded-full">{selectedUser.tenants.length}</span>
                    </button>
                    <button
                      onClick={() => setActiveDrawerTab('leads')}
                      className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${activeDrawerTab === 'leads' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-t-lg'}`}
                    >
                      Leads
                      <span className="bg-slate-200 text-slate-600 text-[10px] px-1.5 py-0.5 rounded-full">{selectedUser.submissions.length}</span>
                    </button>
                  </div>
                </div>

                {/* Drawer Body */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {/* TAB: OVERVIEW */}
                    {activeDrawerTab === 'overview' && (
                      <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Account Metadata</h4>
                          <div className="grid grid-cols-1 gap-4 text-xs">
                            <div>
                              <span className="text-slate-400">User UUID</span>
                              <p className="text-slate-700 font-mono mt-1 select-all break-all bg-white border border-slate-200 px-2 py-1.5 rounded-lg">{selectedUser.id}</p>
                            </div>
                            <div>
                              <span className="text-slate-400">Email Address</span>
                              <p className="text-slate-900 font-medium mt-1 select-all">{selectedUser.email}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-slate-400">Account Created</span>
                                <p className="text-slate-900 font-medium mt-1">{new Date(selectedUser.created_at).toLocaleString()}</p>
                              </div>
                              <div>
                                <span className="text-slate-400">Last Sign In</span>
                                <p className="text-slate-900 font-medium mt-1">{selectedUser.last_sign_in_at ? new Date(selectedUser.last_sign_in_at).toLocaleString() : 'Never'}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                            <span className="text-indigo-600/80 text-xs font-bold uppercase tracking-wider">MRR Contribution</span>
                            <div className="text-2xl font-extrabold text-indigo-700 mt-1">${selectedUser.total_mrr} / mo</div>
                          </div>
                          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
                            <span className="text-purple-600/80 text-xs font-bold uppercase tracking-wider">Total Leads</span>
                            <div className="text-2xl font-extrabold text-purple-700 mt-1">{selectedUser.submissions.length}</div>
                          </div>
                        </div>

                        {/* Pipeline / Relationship */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Relationship</h4>

                          <div>
                            <span className="text-xs text-slate-400 font-semibold">Pipeline Stage</span>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {PIPELINE_STAGES.map(stage => (
                                <button
                                  key={stage}
                                  disabled={profileSaving}
                                  onClick={() => updateProfileField({ pipeline_stage: stage })}
                                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full transition-colors disabled:opacity-50 ${
                                    (selectedUser.profile?.pipeline_stage || 'lead') === stage
                                      ? STAGE_COLORS[stage]
                                      : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                                  }`}
                                >
                                  {stage}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-xs text-slate-400 font-semibold">Lead Source</span>
                              <input
                                type="text"
                                defaultValue={selectedUser.profile?.lead_source || ''}
                                onBlur={(e) => updateProfileField({ lead_source: e.target.value })}
                                placeholder="Referral, Google, etc."
                                className="w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-400"
                              />
                            </div>
                            <div>
                              <span className="text-xs text-slate-400 font-semibold">Next Follow-Up</span>
                              <input
                                type="date"
                                defaultValue={selectedUser.profile?.next_follow_up_at ? selectedUser.profile.next_follow_up_at.slice(0, 10) : ''}
                                onChange={(e) => updateProfileField({ next_follow_up_at: e.target.value ? new Date(e.target.value).toISOString() : null })}
                                className="w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-400"
                              />
                            </div>
                          </div>

                          <div>
                            <span className="text-xs text-slate-400 font-semibold">MRR Override ($/mo, blank = auto-calculated)</span>
                            <input
                              type="number"
                              min={0}
                              defaultValue={selectedUser.profile?.estimated_mrr_cents != null ? (selectedUser.profile.estimated_mrr_cents / 100).toString() : ''}
                              onBlur={(e) => updateProfileField({ estimated_mrr_cents: e.target.value === '' ? null : Math.round(Number(e.target.value) * 100) })}
                              placeholder="Auto"
                              className="w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-400"
                            />
                          </div>

                          <div>
                            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1"><Tag className="w-3 h-3" /> Tags</span>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {(selectedUser.profile?.tags || []).map(tag => (
                                <span key={tag} className="flex items-center gap-1 bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full">
                                  {tag}
                                  <button onClick={() => handleRemoveTag(tag)} className="hover:text-red-500"><X className="w-2.5 h-2.5" /></button>
                                </span>
                              ))}
                              <input
                                type="text"
                                value={tagDraft}
                                onChange={(e) => setTagDraft(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddTag(); } }}
                                placeholder="+ add tag"
                                className="text-[10px] font-semibold px-2 py-1 border border-dashed border-slate-300 rounded-full focus:outline-none focus:border-indigo-400 w-24"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Onboarding Briefs */}
                        {selectedUser.onboardingSubmissions.length > 0 && (
                          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                              <FileText className="w-4 h-4 text-slate-400" /> Onboarding Briefs
                            </h4>
                            {selectedUser.onboardingSubmissions.map(sub => (
                              <details key={sub.id} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 group">
                                <summary className="cursor-pointer text-xs font-semibold text-slate-700 flex items-center justify-between">
                                  <span>{sub.plan_tier} brief — {new Date(sub.created_at).toLocaleDateString()}</span>
                                  <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${sub.status === 'new' ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-500'}`}>{sub.status}</span>
                                </summary>
                                <div className="mt-3 space-y-1.5 text-[11px] text-slate-600">
                                  {Object.entries(sub.answers || {}).map(([key, value]) => (
                                    <div key={key} className="flex gap-2">
                                      <span className="text-slate-400 font-semibold shrink-0 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                      <span className="break-words">{typeof value === 'string' || typeof value === 'boolean' ? String(value) : JSON.stringify(value)}</span>
                                    </div>
                                  ))}
                                </div>
                              </details>
                            ))}
                          </div>
                        )}

                        {/* Tasks */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                            <CheckSquare className="w-4 h-4 text-slate-400" /> Tasks
                          </h4>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={taskTitleDraft}
                              onChange={(e) => setTaskTitleDraft(e.target.value)}
                              onKeyDown={(e) => { if (e.key === 'Enter') handleAddTask(); }}
                              placeholder="Follow up about..."
                              className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-400"
                            />
                            <input
                              type="date"
                              value={taskDueDraft}
                              onChange={(e) => setTaskDueDraft(e.target.value)}
                              className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 text-xs focus:outline-none focus:border-indigo-400"
                            />
                            <button
                              onClick={handleAddTask}
                              disabled={addingTask || !taskTitleDraft.trim()}
                              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-lg"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="space-y-1.5">
                            {selectedUser.tasks.length === 0 && (
                              <p className="text-xs text-slate-400 py-2">No tasks yet.</p>
                            )}
                            {selectedUser.tasks.map(task => (
                              <div key={task.id} className="flex items-center gap-2.5 py-1.5 group">
                                <button onClick={() => handleToggleTask(task)} className="text-slate-400 hover:text-indigo-600 shrink-0">
                                  {task.status === 'done' ? <CheckSquare className="w-4 h-4 text-emerald-500" /> : <Square className="w-4 h-4" />}
                                </button>
                                <span className={`flex-1 text-xs ${task.status === 'done' ? 'line-through text-slate-400' : 'text-slate-700'}`}>{task.title}</span>
                                {task.due_at && <span className="text-[10px] text-slate-400">{new Date(task.due_at).toLocaleDateString()}</span>}
                                <button onClick={() => handleDeleteTask(task.id)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Activity / Notes */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                            <StickyNote className="w-4 h-4 text-slate-400" /> Activity Log
                          </h4>
                          <div className="flex gap-2">
                            <textarea
                              value={noteDraft}
                              onChange={(e) => setNoteDraft(e.target.value)}
                              rows={2}
                              placeholder="Log a call, email, or note..."
                              className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs resize-none focus:outline-none focus:border-indigo-400"
                            />
                            <button
                              onClick={handleAddNote}
                              disabled={addingNote || !noteDraft.trim()}
                              className="px-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-lg shrink-0"
                            >
                              {addingNote ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                          <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                            {selectedUser.activity.length === 0 && (
                              <p className="text-xs text-slate-400 py-2">No activity logged yet.</p>
                            )}
                            {selectedUser.activity.map(entry => (
                              <div key={entry.id} className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                                <p className="text-xs text-slate-700">{entry.body}</p>
                                <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> {new Date(entry.created_at).toLocaleString()}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB: SITES */}
                    {activeDrawerTab === 'sites' && (
                      <motion.div key="sites" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                        <button
                          onClick={() => { resetAssignForm(); setShowAssignModal(true); }}
                          className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                        >
                          <Plus className="w-4 h-4" /> Assign New Site
                        </button>
                        {selectedUser.tenants.length === 0 ? (
                          <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl">
                            <Globe className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-sm font-semibold text-slate-900">No websites found</h3>
                            <p className="text-xs text-slate-500 mt-1">Design a site and assign it to this client to get started.</p>
                          </div>
                        ) : (
                          selectedUser.tenants.map(tenant => (
                            <div key={tenant.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
                              {editingTenantId === tenant.id ? (
                                <div className="space-y-3">
                                  <div>
                                    <span className="text-xs text-slate-400 font-semibold">Name</span>
                                    <input
                                      type="text"
                                      value={editTenantForm.name}
                                      onChange={(e) => setEditTenantForm(f => ({ ...f, name: e.target.value }))}
                                      className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-400"
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <span className="text-xs text-slate-400 font-semibold">Status</span>
                                      <select
                                        value={editTenantForm.status}
                                        onChange={(e) => setEditTenantForm(f => ({ ...f, status: e.target.value }))}
                                        className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-400"
                                      >
                                        <option value="Draft">Draft</option>
                                        <option value="Designing">Designing</option>
                                        <option value="Live">Live</option>
                                      </select>
                                    </div>
                                    <div>
                                      <span className="text-xs text-slate-400 font-semibold">Plan Tier</span>
                                      <select
                                        value={editTenantForm.plan_tier}
                                        onChange={(e) => setEditTenantForm(f => ({ ...f, plan_tier: e.target.value }))}
                                        className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-400"
                                      >
                                        <option value="DIY">DIY</option>
                                        <option value="DFY">DFY</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-xs text-slate-400 font-semibold">Notes</span>
                                    <textarea
                                      value={editTenantForm.notes}
                                      onChange={(e) => setEditTenantForm(f => ({ ...f, notes: e.target.value }))}
                                      rows={2}
                                      className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-indigo-400"
                                    />
                                  </div>
                                  <div className="flex justify-end gap-2 pt-1">
                                    <button onClick={() => setEditingTenantId(null)} className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900">Cancel</button>
                                    <button
                                      onClick={handleSaveTenantEdit}
                                      disabled={tenantSaving}
                                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-lg flex items-center gap-1.5"
                                    >
                                      {tenantSaving && <Loader2 className="w-3 h-3 animate-spin" />} Save
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <div className="flex justify-between items-start mb-3">
                                    <div>
                                      <h4 className="font-bold text-slate-900">{tenant.name}</h4>
                                      <div className="flex items-center gap-2 mt-1.5">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                          tenant.status === 'Live' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                          {tenant.status}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                                          {tenant.plan_tier || 'DIY'}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 shrink-0">
                                      <button
                                        onClick={() => openTenantEdit(tenant)}
                                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
                                        title="Edit site"
                                      >
                                        <Pencil className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => setConfirmDeleteTenantId(tenant.id)}
                                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors"
                                        title="Delete site"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => handleLaunchEditor(tenant.id)}
                                        className="text-xs font-semibold bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                                      >
                                        Open Editor
                                      </button>
                                    </div>
                                  </div>

                                  {confirmDeleteTenantId === tenant.id && (
                                    <div className="mb-3 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                      <div className="flex-1">
                                        <p className="text-xs font-semibold text-red-700">Delete "{tenant.name}"? This permanently removes the site, its pages, leads, and orders.</p>
                                        <div className="flex gap-2 mt-2">
                                          <button onClick={() => setConfirmDeleteTenantId(null)} className="text-xs font-semibold text-slate-500 hover:text-slate-800">Cancel</button>
                                          <button
                                            onClick={() => handleDeleteTenant(tenant.id)}
                                            disabled={tenantDeleting}
                                            className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 px-3 py-1 rounded-lg"
                                          >
                                            {tenantDeleting ? 'Deleting…' : 'Delete Permanently'}
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  <div className="space-y-2 mt-4 text-xs">
                                    <div className="flex justify-between text-slate-500">
                                      <span>Subdomain</span>
                                      <a href={`https://${tenant.subdomain}.michaelfreddesigns.com`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline flex items-center gap-1">
                                        {tenant.subdomain}.michaelfreddesigns.com <ExternalLink className="w-3 h-3" />
                                      </a>
                                    </div>
                                    {tenant.custom_domain && (
                                      <div className="flex justify-between text-slate-500">
                                        <span>Custom Domain</span>
                                        <a href={`https://${tenant.custom_domain}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline flex items-center gap-1">
                                          {tenant.custom_domain} <ExternalLink className="w-3 h-3" />
                                        </a>
                                      </div>
                                    )}
                                    {(tenant as any).notes && (
                                      <div className="text-slate-500 pt-2 border-t border-slate-100">
                                        <span className="block text-slate-400 mb-1">Notes</span>
                                        <p className="text-slate-700">{(tenant as any).notes}</p>
                                      </div>
                                    )}
                                    <div className="flex justify-between text-slate-500 pt-2 border-t border-slate-100">
                                      <span>Leads Captured</span>
                                      <span className="font-semibold text-slate-900">{tenant.submissions?.length || 0}</span>
                                    </div>
                                  </div>

                                  {tenant.template_key && (
                                    <div className="mt-3 pt-3 border-t border-slate-100">
                                      <button
                                        onClick={() => setExpandedPagesTenantId(prev => (prev === tenant.id ? null : tenant.id))}
                                        className="w-full flex items-center justify-between text-xs font-bold text-slate-500 hover:text-slate-800"
                                      >
                                        <span className="flex items-center gap-1.5"><LayoutList className="w-3.5 h-3.5" /> Manage Pages</span>
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedPagesTenantId === tenant.id ? 'rotate-180' : ''}`} />
                                      </button>
                                      {expandedPagesTenantId === tenant.id && (
                                        <PagesManagerPanel tenantId={tenant.id} templateKey={tenant.template_key} />
                                      )}
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          ))
                        )}
                      </motion.div>
                    )}

                    {/* TAB: LEADS */}
                    {activeDrawerTab === 'leads' && (
                      <motion.div key="leads" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-3">
                        {selectedUser.submissions.length === 0 ? (
                          <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl">
                            <Inbox className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-sm font-semibold text-slate-900">No leads yet</h3>
                            <p className="text-xs text-slate-500 mt-1">Messages from this client's contact forms will appear here.</p>
                          </div>
                        ) : (
                          selectedUser.submissions.map((lead: any) => (
                            <div key={lead.id} className="bg-white border border-slate-200 rounded-xl p-4">
                              <div className="flex justify-between items-start gap-3">
                                <div className="min-w-0">
                                  <p className="font-bold text-slate-900 text-sm truncate">{lead.name}</p>
                                  <a href={`mailto:${lead.email}`} className="text-xs text-indigo-600 hover:underline">{lead.email}</a>
                                  {lead.phone && <p className="text-xs text-slate-400">{lead.phone}</p>}
                                </div>
                                <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 ${
                                  lead.status === 'unread' ? 'bg-amber-100 text-amber-700' :
                                  lead.status === 'archived' ? 'bg-slate-100 text-slate-500' : 'bg-emerald-100 text-emerald-700'
                                }`}>
                                  {lead.status}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 mt-2.5 whitespace-pre-wrap">{lead.message}</p>
                              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100">
                                <span className="text-[10px] text-slate-400">{new Date(lead.created_at).toLocaleString()}</span>
                                <div className="flex items-center gap-1">
                                  {lead.status !== 'read' && (
                                    <button onClick={() => handleUpdateLeadStatus(lead.id, 'read')} title="Mark read" className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-slate-50 rounded-lg">
                                      <Check className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                  {lead.status !== 'archived' && (
                                    <button onClick={() => handleUpdateLeadStatus(lead.id, 'archived')} title="Archive" className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg">
                                      <Archive className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                  <button onClick={() => handleDeleteLead(lead.id)} title="Delete" className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg">
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Assign New Site Modal */}
      <AnimatePresence>
        {showAssignModal && selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => !assignSubmitting && setShowAssignModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 24, stiffness: 240 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Assign New Site</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Import a designed site into <span className="font-semibold text-slate-700">{selectedUser.email}</span>'s account
                  </p>
                </div>
                <button
                  onClick={() => !assignSubmitting && setShowAssignModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
                {/* Template picker */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Choose a design</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                    {TEMPLATE_CATALOG.map(t => (
                      <button
                        key={t.key}
                        type="button"
                        onClick={() => {
                          setAssignTemplateKey(t.key);
                          if (!assignSiteName.trim()) setAssignSiteName(t.name);
                        }}
                        className={`relative text-left border-2 rounded-xl overflow-hidden transition-all group ${
                          assignTemplateKey === t.key
                            ? 'border-indigo-600 ring-2 ring-indigo-600/20 shadow-md'
                            : 'border-slate-200 hover:border-indigo-300'
                        }`}
                      >
                        {assignTemplateKey === t.key && (
                          <div className="absolute top-2 right-2 z-10 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center shadow">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                        )}
                        <img src={t.image} alt={t.name} className="h-20 w-full object-cover object-top" referrerPolicy="no-referrer" />
                        <div className="p-2">
                          <div className="text-[11px] font-bold text-slate-800 leading-tight truncate">{t.name}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Site details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Site Name</label>
                    <input
                      type="text"
                      value={assignSiteName}
                      onChange={(e) => setAssignSiteName(e.target.value)}
                      placeholder="Acme Plumbing Co."
                      className="w-full mt-1.5 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subdomain</label>
                    <div className="flex items-center mt-1.5">
                      <input
                        type="text"
                        value={assignSubdomain}
                        onChange={(e) => setAssignSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                        placeholder="acme"
                        className="flex-1 min-w-0 bg-white border border-slate-200 rounded-l-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                      <span className="bg-slate-50 border border-l-0 border-slate-200 rounded-r-xl px-3 py-2.5 text-xs text-slate-400 whitespace-nowrap">
                        .michaelfreddesigns.com
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Plan Tier</label>
                  <div className="flex gap-2 mt-1.5">
                    {(['DFY', 'DIY'] as const).map(tier => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setAssignPlanTier(tier)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-colors ${
                          assignPlanTier === tier
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                            : 'border-slate-200 text-slate-500 hover:border-slate-300'
                        }`}
                      >
                        {tier === 'DFY' ? 'Done-For-You ($150/mo)' : 'DIY ($20/mo)'}
                      </button>
                    ))}
                  </div>
                </div>

                {assignError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                    {assignError}
                  </div>
                )}
              </div>

              <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-end gap-3 shrink-0 bg-slate-50">
                <button
                  onClick={() => setShowAssignModal(false)}
                  disabled={assignSubmitting}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAssignSite}
                  disabled={assignSubmitting || !assignSiteName.trim() || !assignSubdomain.trim()}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                >
                  {assignSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {assignSubmitting ? 'Creating Site…' : 'Assign Site'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface TenantPage {
  page_slug: string;
  nav_label: string | null;
  seo_title: string | null;
  seo_description: string | null;
}

/** Per-tenant page add/rename/SEO/delete panel — fetches its own data, scoped state. */
function PagesManagerPanel({ tenantId, templateKey }: { tenantId: string; templateKey: string }) {
  const [pages, setPages] = useState<TenantPage[] | null>(null);
  const [availablePages, setAvailablePages] = useState<{ name: string; slug: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [addingSlug, setAddingSlug] = useState<string | null>(null);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ nav_label: '', seo_title: '', seo_description: '' });
  const [savingMeta, setSavingMeta] = useState(false);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const [siteRes, templateRes] = await Promise.all([
        fetch(`/api/site/${tenantId}`),
        fetch(`/api/admin/client?action=template_pages&templateKey=${encodeURIComponent(templateKey)}`),
      ]);
      const siteJson = await siteRes.json();
      const templateJson = await templateRes.json();
      const existing: TenantPage[] = siteRes.ok ? (siteJson.pages || []) : [];
      setPages(existing);
      const existingSlugs = new Set(existing.map(p => p.page_slug));
      setAvailablePages((templateJson.pages || []).filter((p: any) => !existingSlugs.has(p.slug)));
    } catch {
      setError('Failed to load pages.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [tenantId, templateKey]);

  const handleAddPage = async (slug: string) => {
    setAddingSlug(slug);
    setError(null);
    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'add_page', tenantId, pageSlug: slug }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to add page.');
      await load();
    } catch (err: any) {
      setError(err?.message || 'Failed to add page.');
    } finally {
      setAddingSlug(null);
    }
  };

  const handleDeletePage = async (slug: string) => {
    if (!confirm(`Delete the "${slug}" page? This cannot be undone.`)) return;
    setDeletingSlug(slug);
    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete_page', tenantId, pageSlug: slug }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      await load();
    } catch (err: any) {
      setError(err?.message || 'Failed to delete page.');
    } finally {
      setDeletingSlug(null);
    }
  };

  const openEdit = (page: TenantPage) => {
    setEditingSlug(page.page_slug);
    setEditForm({
      nav_label: page.nav_label || '',
      seo_title: page.seo_title || '',
      seo_description: page.seo_description || '',
    });
  };

  const handleSaveMeta = async () => {
    if (!editingSlug) return;
    setSavingMeta(true);
    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_page_meta', tenantId, pageSlug: editingSlug, data: editForm }),
      });
      if (res.ok) {
        setEditingSlug(null);
        await load();
      }
    } finally {
      setSavingMeta(false);
    }
  };

  if (loading) {
    return <div className="py-4 flex justify-center"><Loader2 className="w-4 h-4 text-slate-300 animate-spin" /></div>;
  }

  return (
    <div className="mt-3 space-y-2">
      {error && <div className="bg-red-50 border border-red-200 text-red-700 text-[10px] rounded-lg px-2.5 py-1.5">{error}</div>}

      {(pages || []).map(page => (
        <div key={page.page_slug}>
          {editingSlug === page.page_slug ? (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
              <input
                type="text" placeholder="Nav label"
                value={editForm.nav_label}
                onChange={(e) => setEditForm(f => ({ ...f, nav_label: e.target.value }))}
                className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-indigo-400"
              />
              <input
                type="text" placeholder="SEO title (blank = site name)"
                value={editForm.seo_title}
                onChange={(e) => setEditForm(f => ({ ...f, seo_title: e.target.value }))}
                className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-indigo-400"
              />
              <textarea
                placeholder="SEO description" rows={2}
                value={editForm.seo_description}
                onChange={(e) => setEditForm(f => ({ ...f, seo_description: e.target.value }))}
                className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs resize-none focus:outline-none focus:border-indigo-400"
              />
              <div className="flex justify-end gap-2">
                <button onClick={() => setEditingSlug(null)} className="text-[10px] font-semibold text-slate-500">Cancel</button>
                <button
                  onClick={handleSaveMeta}
                  disabled={savingMeta}
                  className="text-[10px] font-bold bg-indigo-600 text-white px-2.5 py-1 rounded-lg disabled:opacity-50"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
              <span className="text-xs font-semibold text-slate-700">{page.nav_label || page.page_slug}</span>
              <div className="flex items-center gap-1">
                <button onClick={() => openEdit(page)} className="p-1 text-slate-400 hover:text-indigo-600"><Pencil className="w-3 h-3" /></button>
                {page.page_slug !== 'index' && (
                  <button
                    onClick={() => handleDeletePage(page.page_slug)}
                    disabled={deletingSlug === page.page_slug}
                    className="p-1 text-slate-400 hover:text-red-600 disabled:opacity-50"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {availablePages.length > 0 && (
        <div className="pt-1">
          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Add from template</p>
          <div className="flex flex-wrap gap-1.5">
            {availablePages.map(p => (
              <button
                key={p.slug}
                onClick={() => handleAddPage(p.slug)}
                disabled={addingSlug === p.slug}
                className="text-[10px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-full disabled:opacity-50 flex items-center gap-1"
              >
                {addingSlug === p.slug ? <Loader2 className="w-2.5 h-2.5 animate-spin" /> : <Plus className="w-2.5 h-2.5" />}
                {p.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
