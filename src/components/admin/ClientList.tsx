"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink, 
  Globe, 
  Activity,
  Calendar,
  Building,
  Mail,
  Edit2,
  TrendingUp,
  User,
  Users,
  DollarSign,
  MessageSquare,
  X,
  FileText,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MailOpen,
  Archive,
  Save,
  Check
} from 'lucide-react';
import { Tenant } from '@/lib/supabase';

// Extended client type mapping aggregated server-side fields
interface ExtendedClient extends Tenant {
  submissions: any[];
  settings: {
    business_name: string;
    support_email: string;
    seo_description: string;
  } | null;
}

interface ClientListProps {
  initialClients: ExtendedClient[];
}

export default function ClientList({ initialClients }: ClientListProps) {
  const [clients, setClients] = useState<ExtendedClient[]>(initialClients);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPlan, setFilterPlan] = useState<'ALL' | 'DIY' | 'DFY'>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'Live' | 'Draft' | 'Template'>('ALL');
  const [filterLeads, setFilterLeads] = useState<'ALL' | 'HAS_UNREAD' | 'HAS_LEADS'>('ALL');
  const [sortBy, setSortBy] = useState<'DATE_NEWEST' | 'DATE_OLDEST' | 'NAME_AZ' | 'LEADS_DESC'>('DATE_NEWEST');

  // Selected client for CRM drawer view
  const [selectedClient, setSelectedClient] = useState<ExtendedClient | null>(null);
  const [activeDrawerTab, setActiveDrawerTab] = useState<'overview' | 'leads' | 'notes' | 'settings'>('overview');

  // Lead search inside drawer
  const [leadSearchQuery, setLeadSearchQuery] = useState('');

  // Admin form state for drawer settings
  const [formName, setFormName] = useState('');
  const [formSubdomain, setFormSubdomain] = useState('');
  const [formCustomDomain, setFormCustomDomain] = useState('');
  const [formStatus, setFormStatus] = useState<'Draft' | 'Live' | 'Template'>('Draft');
  const [formPlanTier, setFormPlanTier] = useState<'DIY' | 'DFY'>('DIY');
  const [formNotes, setFormNotes] = useState('');

  // Status/loading state for actions
  const [isUpdatingClient, setIsUpdatingClient] = useState(false);
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [notesSaveSuccess, setNotesSaveSuccess] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Sync admin form states when selected client changes
  useEffect(() => {
    if (selectedClient) {
      setFormName(selectedClient.name);
      setFormSubdomain(selectedClient.subdomain);
      setFormCustomDomain(selectedClient.custom_domain || '');
      setFormStatus((selectedClient.status as any) || 'Draft');
      setFormPlanTier(selectedClient.plan_tier || 'DIY');
      setFormNotes(selectedClient.notes || '');
      setActionError(null);
      setActionSuccess(null);
    }
  }, [selectedClient]);

  // CRM Calculations
  const totalClients = clients.length;
  const activeDeployments = clients.filter(c => c.status === 'Live').length;
  const totalLeads = clients.reduce((acc, c) => acc + (c.submissions?.length || 0), 0);
  
  // MRR: DIY = $20/mo, DFY = $150/mo
  const calculatedMRR = clients.reduce((acc, c) => {
    const tier = c.plan_tier || 'DIY';
    return acc + (tier === 'DIY' ? 20 : 150);
  }, 0);

  // Filtering & Sorting
  const filteredClients = clients
    .filter(client => {
      const matchSearch = 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.subdomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (client.custom_domain && client.custom_domain.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (client.settings?.business_name && client.settings.business_name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchPlan = filterPlan === 'ALL' || client.plan_tier === filterPlan;
      const matchStatus = filterStatus === 'ALL' || client.status === filterStatus;
      
      const unreadCount = client.submissions?.filter(s => s.status === 'unread').length || 0;
      const totalCount = client.submissions?.length || 0;
      const matchLeads = 
        filterLeads === 'ALL' || 
        (filterLeads === 'HAS_UNREAD' && unreadCount > 0) ||
        (filterLeads === 'HAS_LEADS' && totalCount > 0);

      return matchSearch && matchPlan && matchStatus && matchLeads;
    })
    .sort((a, b) => {
      if (sortBy === 'DATE_NEWEST') {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
      if (sortBy === 'DATE_OLDEST') {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      }
      if (sortBy === 'NAME_AZ') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'LEADS_DESC') {
        return (b.submissions?.length || 0) - (a.submissions?.length || 0);
      }
      return 0;
    });

  // Action: Launch page builder editor for the client
  const handleLaunchEditor = (clientId: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('instant_edit_site_id', clientId);
      window.location.href = '/dashboard';
    }
  };

  // Action: Update client CRM Notes
  const handleSaveNotes = async () => {
    if (!selectedClient) return;
    setIsSavingNotes(true);
    setActionError(null);
    setNotesSaveSuccess(false);

    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          tenantId: selectedClient.id,
          data: { notes: formNotes }
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save notes');

      // Update local state
      setClients(prev => prev.map(c => c.id === selectedClient.id ? { ...c, notes: formNotes } : c));
      setSelectedClient(prev => prev ? { ...prev, notes: formNotes } : null);
      
      setNotesSaveSuccess(true);
      setTimeout(() => setNotesSaveSuccess(false), 3000);
    } catch (err: any) {
      setActionError(err.message || 'Error occurred while saving notes');
    } finally {
      setIsSavingNotes(false);
    }
  };

  // Action: Update client settings (subdomain, tier, custom domain, status)
  const handleUpdateClientSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClient) return;
    setIsUpdatingClient(true);
    setActionError(null);
    setActionSuccess(null);

    const updatePayload = {
      name: formName,
      subdomain: formSubdomain,
      custom_domain: formCustomDomain,
      status: formStatus,
      plan_tier: formPlanTier
    };

    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          tenantId: selectedClient.id,
          data: updatePayload
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update client details');

      // Update local state
      const updatedClients = clients.map(c => 
        c.id === selectedClient.id 
          ? { ...c, ...updatePayload, subdomain: formSubdomain.toLowerCase().replace(/[^a-z0-9-]/g, '') } 
          : c
      );
      setClients(updatedClients);
      setSelectedClient(prev => prev ? { ...prev, ...updatePayload, subdomain: formSubdomain.toLowerCase().replace(/[^a-z0-9-]/g, '') } : null);
      
      setActionSuccess('Client settings updated successfully!');
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (err: any) {
      setActionError(err.message || 'Error updating client configuration');
    } finally {
      setIsUpdatingClient(false);
    }
  };

  // Action: Toggle single lead status (unread / read / archived)
  const handleToggleLeadStatus = async (leadId: string, currentStatus: string) => {
    if (!selectedClient) return;
    
    // Cycle status: unread -> read -> archived -> unread
    let nextStatus = 'read';
    if (currentStatus === 'unread') nextStatus = 'read';
    else if (currentStatus === 'read') nextStatus = 'archived';
    else if (currentStatus === 'archived') nextStatus = 'unread';

    try {
      const res = await fetch('/api/admin/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update_lead',
          leadId,
          status: nextStatus
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update lead status');

      // Update state locally
      setClients(prev => prev.map(c => {
        if (c.id !== selectedClient.id) return c;
        const updatedSubs = c.submissions.map(sub => sub.id === leadId ? { ...sub, status: nextStatus } : sub);
        return { ...c, submissions: updatedSubs };
      }));

      setSelectedClient(prev => {
        if (!prev) return null;
        const updatedSubs = prev.submissions.map(sub => sub.id === leadId ? { ...sub, status: nextStatus } : sub);
        return { ...prev, submissions: updatedSubs };
      });
    } catch (err) {
      console.error(err);
      alert('Error updating lead status');
    }
  };

  // Action: Delete client lead message
  const handleDeleteLead = async (leadId: string) => {
    if (!selectedClient) return;
    if (!window.confirm("Are you sure you want to permanently delete this lead?")) return;

    try {
      const res = await fetch(`/api/admin/client?action=delete_lead&leadId=${leadId}`, {
        method: 'DELETE'
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete lead');

      // Update state locally
      setClients(prev => prev.map(c => {
        if (c.id !== selectedClient.id) return c;
        const updatedSubs = c.submissions.filter(sub => sub.id !== leadId);
        return { ...c, submissions: updatedSubs };
      }));

      setSelectedClient(prev => {
        if (!prev) return null;
        const updatedSubs = prev.submissions.filter(sub => sub.id !== leadId);
        return { ...prev, submissions: updatedSubs };
      });
    } catch (err: any) {
      alert(`Error deleting lead: ${err.message}`);
    }
  };

  // Action: Delete entire client site (tenant)
  const handleDeleteTenant = async () => {
    if (!selectedClient) return;
    const confirm1 = window.confirm(`⚠️ DANGER ZONE ⚠️\n\nAre you sure you want to delete client "${selectedClient.name}"?\nThis will permanently delete the website builder configs, custom domain settings, media files, and leads. This action CANNOT be undone.`);
    if (!confirm1) return;
    
    const confirm2 = window.prompt(`Please type the subdomain "${selectedClient.subdomain}" to confirm deletion:`);
    if (confirm2 !== selectedClient.subdomain) {
      alert("Subdomain matching failed. Deletion cancelled.");
      return;
    }

    setIsUpdatingClient(true);
    setActionError(null);

    try {
      const res = await fetch(`/api/admin/client?action=delete_tenant&tenantId=${selectedClient.id}`, {
        method: 'DELETE'
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete tenant');

      // Update local lists
      setClients(prev => prev.filter(c => c.id !== selectedClient.id));
      setSelectedClient(null);
      alert(`Client site "${selectedClient.name}" has been successfully deleted.`);
    } catch (err: any) {
      setActionError(err.message || 'Error occurred while deleting client');
    } finally {
      setIsUpdatingClient(false);
    }
  };

  return (
    <div className="space-y-6 pb-24">
      
      {/* CRM Overview Stats Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
          <div>
            <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Total Clients</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">{totalClients}</h3>
            <div className="text-gray-500 text-[10px] mt-1.5 font-medium">All database site accounts</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Users className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
          <div>
            <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Active Live Sites</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">{activeDeployments}</h3>
            <div className="text-emerald-400 text-[10px] mt-1.5 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              {((activeDeployments / (totalClients || 1)) * 100).toFixed(0)}% conversion rate
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Activity className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
          <div>
            <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">MRR Pipeline</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">${calculatedMRR}</h3>
            <div className="text-gray-500 text-[10px] mt-1.5 font-medium">DIY ($20) + DFY ($150) billing</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
          <div>
            <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">Website Leads</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">{totalLeads}</h3>
            <div className="text-gray-500 text-[10px] mt-1.5 font-medium">Customer form submissions</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <MessageSquare className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Advanced Filter, Search, and Sorting Bar */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          
          {/* Search Query Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4.5 w-4.5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
              placeholder="Search clients by name, subdomain, business name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Sort Selection */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs font-medium shrink-0">Sort By</span>
            <select
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="DATE_NEWEST">Joined: Newest</option>
              <option value="DATE_OLDEST">Joined: Oldest</option>
              <option value="NAME_AZ">Client Name: A-Z</option>
              <option value="LEADS_DESC">Leads Count: High-Low</option>
            </select>
          </div>
        </div>

        {/* Filter Quick Pills */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-white/5 text-xs text-gray-400">
          
          {/* Plan filter */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[10px] tracking-wider uppercase text-gray-500">Plan Tier:</span>
            <div className="flex gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
              {(['ALL', 'DIY', 'DFY'] as const).map(tier => (
                <button
                  key={tier}
                  onClick={() => setFilterPlan(tier)}
                  className={`px-2 py-0.5 rounded-md font-medium text-[10px] transition-all ${
                    filterPlan === tier ? 'bg-indigo-600 text-white shadow-sm' : 'hover:text-white'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Status filter */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[10px] tracking-wider uppercase text-gray-500">Status:</span>
            <div className="flex gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
              {(['ALL', 'Live', 'Draft', 'Template'] as const).map(stat => (
                <button
                  key={stat}
                  onClick={() => setFilterStatus(stat)}
                  className={`px-2 py-0.5 rounded-md font-medium text-[10px] transition-all ${
                    filterStatus === stat ? 'bg-indigo-600 text-white shadow-sm' : 'hover:text-white'
                  }`}
                >
                  {stat}
                </button>
              ))}
            </div>
          </div>

          {/* Lead availability filter */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[10px] tracking-wider uppercase text-gray-500">Leads:</span>
            <div className="flex gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setFilterLeads('ALL')}
                className={`px-2 py-0.5 rounded-md font-medium text-[10px] transition-all ${
                  filterLeads === 'ALL' ? 'bg-indigo-600 text-white' : 'hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterLeads('HAS_UNREAD')}
                className={`px-2 py-0.5 rounded-md font-medium text-[10px] transition-all ${
                  filterLeads === 'HAS_UNREAD' ? 'bg-rose-600 text-white' : 'hover:text-white'
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => setFilterLeads('HAS_LEADS')}
                className={`px-2 py-0.5 rounded-md font-medium text-[10px] transition-all ${
                  filterLeads === 'HAS_LEADS' ? 'bg-purple-600 text-white' : 'hover:text-white'
                }`}
              >
                Has Leads
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clients CRM Dashboard Cards View */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredClients.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0 }}
              className="col-span-full py-16 text-center text-gray-400 bg-white/5 rounded-2xl border border-white/10"
            >
              <Building className="w-12 h-12 mx-auto mb-4 opacity-50 text-indigo-400" />
              <p className="text-lg font-medium text-white mb-1">No CRM clients match your filter</p>
              <p className="text-sm">Try resetting filters or adjusting search keywords.</p>
            </motion.div>
          ) : (
            filteredClients.map((client) => {
              const unreadLeadsCount = client.submissions?.filter(s => s.status === 'unread').length || 0;
              const totalLeadsCount = client.submissions?.length || 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={client.id}
                  className="group relative bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 flex flex-col justify-between"
                >
                  
                  {/* Neon Glow Hover Accent */}
                  <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/10 group-hover:to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />

                  <div className="relative">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center text-xl font-extrabold text-white shadow-inner">
                          {client.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-indigo-400 transition-colors">
                            {client.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1.5">
                            {/* Plan Badge */}
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                              client.plan_tier === 'DFY'
                                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                            }`}>
                              {client.plan_tier || 'DIY'} Plan
                            </span>

                            {/* Status Badge */}
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                              client.status === 'Live'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : client.status === 'Template'
                                ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                : 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                            }`}>
                              {client.status || 'Draft'}
                            </span>
                            
                            {/* Unread Leads Badge */}
                            {unreadLeadsCount > 0 && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/25 animate-pulse">
                                {unreadLeadsCount} New Lead{unreadLeadsCount > 1 ? 's' : ''}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* View details quick trigger */}
                      <button 
                        onClick={() => { setSelectedClient(client); setActiveDrawerTab('overview'); }}
                        className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-white/5"
                        title="Open CRM File"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Metadata & Description Info */}
                    <div className="space-y-2.5 my-5 text-sm">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5" /> Domain
                        </span>
                        <a 
                          href={`https://${client.custom_domain || `${client.subdomain}.michaelfreddesigns.com`}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-indigo-400 font-medium flex items-center gap-1 transition-colors"
                        >
                          {client.custom_domain || `${client.subdomain}.michaelfreddesigns.com`}
                          <ExternalLink className="w-3 h-3 text-gray-500" />
                        </a>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5" /> Platform Link
                        </span>
                        <span className="text-gray-400 font-mono text-[10px] bg-black/40 px-2 py-0.5 rounded border border-white/5">
                          {client.subdomain}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5" /> Leads Stored
                        </span>
                        <span className={`font-semibold ${totalLeadsCount > 0 ? 'text-indigo-400' : 'text-gray-500'}`}>
                          {totalLeadsCount} message{totalLeadsCount === 1 ? '' : 's'}
                        </span>
                      </div>

                      {client.settings?.support_email && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" /> Contact Email
                          </span>
                          <span className="text-gray-300 font-medium truncate max-w-[200px]">
                            {client.settings.support_email}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/5 flex gap-3 relative z-10">
                    <button 
                      onClick={() => handleLaunchEditor(client.id)}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-white px-3 py-2.5 rounded-xl text-xs font-bold border border-white/10 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-gray-400" />
                      Edit Website
                    </button>
                    <button 
                      onClick={() => { setSelectedClient(client); setActiveDrawerTab('overview'); }}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/10 flex items-center justify-center gap-1.5"
                    >
                      <Activity className="w-3.5 h-3.5" />
                      CRM Profile
                    </button>
                  </div>

                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* CRM Interactive Slide-out Drawer */}
      <AnimatePresence>
        {selectedClient && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClient(null)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] xl:w-[680px] bg-[#0a0a0a] border-l border-white/10 shadow-2xl z-50 flex flex-col"
            >
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-start bg-black/30">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-extrabold text-white">{selectedClient.name}</h2>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wider border ${
                      formPlanTier === 'DFY'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                    }`}>
                      {formPlanTier} Plan
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    Client Registered: {new Date(selectedClient.created_at).toLocaleString()}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedClient(null)}
                  className="p-1 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* CRM Navigation Tabs */}
              <div className="flex border-b border-white/10 px-4 bg-black/10">
                {(['overview', 'leads', 'notes', 'settings'] as const).map(tab => {
                  const unreadCount = selectedClient.submissions?.filter(s => s.status === 'unread').length || 0;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveDrawerTab(tab)}
                      className={`relative px-4 py-3 text-xs font-bold tracking-wide uppercase transition-colors shrink-0 ${
                        activeDrawerTab === tab ? 'text-indigo-400' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab}
                      {tab === 'leads' && unreadCount > 0 && (
                        <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-black bg-rose-500 text-white animate-pulse">
                          {unreadCount}
                        </span>
                      )}
                      {activeDrawerTab === tab && (
                        <motion.div 
                          layoutId="activeCrmTabLine" 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" 
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Drawer Content Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* Visual Feedback Alerts */}
                {actionError && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-xs font-medium flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{actionError}</span>
                  </div>
                )}
                {actionSuccess && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-medium flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{actionSuccess}</span>
                  </div>
                )}

                {/* OVERVIEW TAB */}
                {activeDrawerTab === 'overview' && (
                  <div className="space-y-6 animate-fadeIn">
                    
                    {/* Site Status Overview */}
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-5 space-y-4">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider text-indigo-400">Account Architecture</h4>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-gray-500">Client UUID</span>
                          <p className="text-gray-200 font-mono mt-1 select-all break-all bg-black/40 px-2 py-1 rounded">{selectedClient.id}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Owner User UUID</span>
                          <p className="text-gray-200 font-mono mt-1 select-all break-all bg-black/40 px-2 py-1 rounded">{selectedClient.owner_id || 'unassigned (Template)'}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Subdomain Link</span>
                          <p className="text-indigo-400 mt-1 font-semibold flex items-center gap-1">
                            <Building className="w-3.5 h-3.5" />
                            {selectedClient.subdomain}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500">Custom Mapping Domain</span>
                          <p className="text-gray-200 mt-1 font-semibold">
                            {selectedClient.custom_domain || 'None configured'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Site Settings metadata */}
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-5 space-y-4">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider text-indigo-400">Builder Metadata</h4>
                      {selectedClient.settings ? (
                        <div className="space-y-4 text-xs">
                          <div>
                            <span className="text-gray-500">Registered Business Name</span>
                            <p className="text-gray-200 font-bold mt-1 text-sm">{selectedClient.settings.business_name || 'Not filled'}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Registered Customer Support Email</span>
                            <p className="text-gray-200 font-medium mt-1 select-all">{selectedClient.settings.support_email || 'Not filled'}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Default SEO/Meta Description</span>
                            <p className="text-gray-300 mt-1 leading-relaxed italic bg-black/30 p-2.5 rounded border border-white/5">
                              "{selectedClient.settings.seo_description || 'No SEO details defined yet.'}"
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-xs text-gray-500 italic py-2">
                          Client has not configured global branding metadata (business name, email, SEO) inside their dashboard yet.
                        </div>
                      )}
                    </div>

                    {/* Quick Access */}
                    <div className="flex gap-4">
                      <a
                        href={`https://${selectedClient.custom_domain || `${selectedClient.subdomain}.michaelfreddesigns.com`}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                        Launch Live URL
                      </a>
                      <button
                        onClick={() => handleLaunchEditor(selectedClient.id)}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/15"
                      >
                        <Edit2 className="w-4 h-4" />
                        Edit Brand Website
                      </button>
                    </div>
                  </div>
                )}

                {/* LEADS BOARD TAB */}
                {activeDrawerTab === 'leads' && (
                  <div className="space-y-4 animate-fadeIn">
                    
                    {/* Lead Search bar */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-9 pr-3 py-2 border border-white/10 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                        placeholder="Search leads by name, email, message..."
                        value={leadSearchQuery}
                        onChange={(e) => setLeadSearchQuery(e.target.value)}
                      />
                    </div>

                    {/* Leads list */}
                    <div className="space-y-4">
                      {selectedClient.submissions?.length === 0 ? (
                        <div className="py-12 text-center text-gray-500 text-xs italic bg-white/5 rounded-xl border border-dashed border-white/10">
                          <MessageSquare className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                          No form submissions received from visitors on this client's site.
                        </div>
                      ) : (
                        (() => {
                          const clientFilteredLeads = selectedClient.submissions.filter(lead => 
                            lead.name.toLowerCase().includes(leadSearchQuery.toLowerCase()) ||
                            lead.email.toLowerCase().includes(leadSearchQuery.toLowerCase()) ||
                            lead.message.toLowerCase().includes(leadSearchQuery.toLowerCase()) ||
                            (lead.phone && lead.phone.includes(leadSearchQuery))
                          );

                          if (clientFilteredLeads.length === 0) {
                            return (
                              <div className="py-8 text-center text-gray-500 text-xs">
                                No leads match your search criteria.
                              </div>
                            );
                          }

                          return clientFilteredLeads.map((lead) => (
                            <div 
                              key={lead.id}
                              className={`border rounded-xl p-4 transition-all relative ${
                                lead.status === 'unread' 
                                  ? 'bg-indigo-500/5 border-indigo-500/30' 
                                  : lead.status === 'archived'
                                  ? 'bg-black/30 border-white/5 opacity-60'
                                  : 'bg-white/5 border-white/10'
                              }`}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h5 className="font-bold text-white text-sm flex items-center gap-2">
                                    {lead.name}
                                    {lead.status === 'unread' && (
                                      <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
                                    )}
                                  </h5>
                                  <span className="text-[10px] text-gray-400">
                                    {new Date(lead.created_at).toLocaleString()}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  {/* Toggle status icon */}
                                  <button
                                    onClick={() => handleToggleLeadStatus(lead.id, lead.status)}
                                    className={`p-1.5 rounded-lg border transition-all ${
                                      lead.status === 'unread'
                                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20'
                                        : lead.status === 'archived'
                                        ? 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                                        : 'bg-white/5 text-emerald-400 border-white/10 hover:bg-white/10 hover:text-gray-300'
                                    }`}
                                    title={`Status: ${lead.status}. Click to cycle.`}
                                  >
                                    {lead.status === 'unread' ? (
                                      <Mail className="w-3.5 h-3.5" />
                                    ) : lead.status === 'archived' ? (
                                      <Archive className="w-3.5 h-3.5" />
                                    ) : (
                                      <MailOpen className="w-3.5 h-3.5" />
                                    )}
                                  </button>

                                  {/* Delete lead */}
                                  <button
                                    onClick={() => handleDeleteLead(lead.id)}
                                    className="p-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-lg transition-colors"
                                    title="Delete Lead"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              <div className="space-y-1.5 text-xs text-gray-300 border-t border-white/5 pt-2 mt-2">
                                <p className="flex items-center gap-2">
                                  <span className="text-gray-500">Email:</span>
                                  <a href={`mailto:${lead.email}`} className="text-indigo-400 hover:underline font-medium">{lead.email}</a>
                                </p>
                                {lead.phone && (
                                  <p className="flex items-center gap-2">
                                    <span className="text-gray-500">Phone:</span>
                                    <a href={`tel:${lead.phone}`} className="text-gray-300 hover:underline">{lead.phone}</a>
                                  </p>
                                )}
                                <div className="mt-2.5 bg-black/40 p-3 rounded-lg border border-white/5 text-gray-200 leading-relaxed select-all">
                                  {lead.message}
                                </div>
                              </div>
                            </div>
                          ));
                        })()
                      )}
                    </div>
                  </div>
                )}

                {/* CRM NOTES TAB */}
                {activeDrawerTab === 'notes' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider text-indigo-400">Client Records File</h4>
                        <p className="text-xs text-gray-400">Save client interactions, feature requests, or invoices logs below.</p>
                      </div>
                      
                      <button
                        onClick={handleSaveNotes}
                        disabled={isSavingNotes}
                        className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                      >
                        {isSavingNotes ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : notesSaveSuccess ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Save className="w-3.5 h-3.5" />
                        )}
                        {isSavingNotes ? 'Saving...' : notesSaveSuccess ? 'Saved!' : 'Save Notes'}
                      </button>
                    </div>

                    <textarea
                      rows={14}
                      className="block w-full border border-white/10 rounded-2xl bg-white/5 p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed font-mono"
                      placeholder="Type admin notes here (e.g. 'Spoke to Michael on 6/2: Wants dynamic team member list added next cycle. Paid June invoice.')"
                      value={formNotes}
                      onChange={(e) => setFormNotes(e.target.value)}
                    />
                  </div>
                )}

                {/* SETTINGS / ADMIN CONTROLS TAB */}
                {activeDrawerTab === 'settings' && (
                  <form onSubmit={handleUpdateClientSettings} className="space-y-5 animate-fadeIn">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider text-indigo-400">Platform Settings</h4>
                    
                    {/* Client Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Client Brand Name</label>
                      <input
                        type="text"
                        required
                        className="block w-full px-3 py-2 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Plan Tier Selection */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Subscription Plan</label>
                        <select
                          className="block w-full px-3 py-2 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                          value={formPlanTier}
                          onChange={(e) => setFormPlanTier(e.target.value as any)}
                        >
                          <option value="DIY">DIY Plan ($20/mo)</option>
                          <option value="DFY">DFY Plan ($150/mo)</option>
                        </select>
                      </div>

                      {/* Deployment Status */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Platform Status</label>
                        <select
                          className="block w-full px-3 py-2 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                          value={formStatus}
                          onChange={(e) => setFormStatus(e.target.value as any)}
                        >
                          <option value="Draft">Draft</option>
                          <option value="Live">Live</option>
                          <option value="Template">Template</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Subdomain */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Platform Subdomain</label>
                        <input
                          type="text"
                          required
                          className="block w-full px-3 py-2 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-mono"
                          value={formSubdomain}
                          onChange={(e) => setFormSubdomain(e.target.value)}
                        />
                      </div>

                      {/* Custom Domain */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Custom Domain DNS</label>
                        <input
                          type="text"
                          className="block w-full px-3 py-2 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-mono"
                          placeholder="e.g. clientdomain.com"
                          value={formCustomDomain}
                          onChange={(e) => setFormCustomDomain(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button
                        type="submit"
                        disabled={isUpdatingClient}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                      >
                        {isUpdatingClient && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                        Save Configuration
                      </button>
                    </div>

                    {/* Danger Zone */}
                    <div className="pt-6 mt-6 border-t border-rose-500/20 space-y-3">
                      <h5 className="text-xs font-black text-rose-500 uppercase tracking-wider">Danger Zone</h5>
                      <div className="bg-rose-500/5 border border-rose-500/20 p-4 rounded-xl flex items-center justify-between gap-4">
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-rose-400">Permanently Delete Client</p>
                          <p className="text-[10px] text-gray-400">This deletes page assets, layouts, media, and leads forever.</p>
                        </div>
                        <button
                          type="button"
                          onClick={handleDeleteTenant}
                          className="bg-rose-600 hover:bg-rose-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-md"
                        >
                          Delete Site
                        </button>
                      </div>
                    </div>

                  </form>
                )}

              </div>
              
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
