"use client";

import React, { useState } from 'react';
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
  X
} from 'lucide-react';
import { Tenant } from '@/lib/supabase';

// Extended User type mapping aggregated server-side fields
export interface ExtendedUser {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string;
  tenants: (Tenant & { settings: any, submissions: any[] })[];
  submissions: any[];
  total_mrr: number;
}

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
                      </motion.div>
                    )}

                    {/* TAB: SITES */}
                    {activeDrawerTab === 'sites' && (
                      <motion.div key="sites" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                        {selectedUser.tenants.length === 0 ? (
                          <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl">
                            <Globe className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-sm font-semibold text-slate-900">No websites found</h3>
                            <p className="text-xs text-slate-500 mt-1">This user hasn't published any websites yet.</p>
                          </div>
                        ) : (
                          selectedUser.tenants.map(tenant => (
                            <div key={tenant.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-500/50 transition-colors">
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
                                <button 
                                  onClick={() => handleLaunchEditor(tenant.id)}
                                  className="text-xs font-semibold bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                                >
                                  Open Editor
                                </button>
                              </div>
                              
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
                                <div className="flex justify-between text-slate-500 pt-2 border-t border-slate-100">
                                  <span>Leads Captured</span>
                                  <span className="font-semibold text-slate-900">{tenant.submissions?.length || 0}</span>
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
    </div>
  );
}
