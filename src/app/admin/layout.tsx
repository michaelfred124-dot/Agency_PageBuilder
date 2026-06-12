import React from 'react';
import { redirect } from 'next/navigation';
import { getSupabaseServerClient } from '@/lib/supabase';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { LayoutDashboard, Users, Settings, LogOut, ShieldCheck, ChevronLeft, Image as ImageIcon, Briefcase, FileText, DollarSign } from 'lucide-react';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enforce Admin Access
  const supabaseAuth = await createClient();
  const { data: { session } } = await supabaseAuth.auth.getSession();

  if (!session?.user) {
    redirect('/login');
  }

  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim().toLowerCase()) || [];
  const userEmail = session.user.email?.toLowerCase();

  const isAdmin = 
    userEmail && (
      adminEmails.includes(userEmail) || 
      userEmail === 'michaelfreddesigns@gmail.com' ||
      userEmail === 'michaelfred124@gmail.com' ||
      session.user.user_metadata?.is_admin === true ||
      session.user.app_metadata?.is_admin === true ||
      session.user.user_metadata?.role === 'admin' ||
      session.user.app_metadata?.role === 'admin'
    );

  if (!isAdmin) {
    // Not an admin, redirect to regular dashboard
    redirect('/dashboard');
  }

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col hidden md:flex">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900 tracking-tight">Agency CMS</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-6">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-900 font-medium transition-colors">
            <LayoutDashboard className="w-4 h-4" />
            Overview
          </Link>
          <Link href="/admin/templates" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <FileText className="w-4 h-4" />
            Templates
          </Link>
          <Link href="/admin/revenue" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <DollarSign className="w-4 h-4" />
            Revenue
          </Link>
          <Link href="/admin/portfolio" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <ImageIcon className="w-4 h-4" />
            Portfolio
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <Briefcase className="w-4 h-4" />
            Services
          </Link>
          <Link href="/admin/clients" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <Users className="w-4 h-4" />
            Clients
          </Link>
          <div className="pt-4 mt-4 border-t border-slate-200">
            <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
              <Settings className="w-4 h-4" />
              Settings
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="flex-1 overflow-y-auto z-10 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
