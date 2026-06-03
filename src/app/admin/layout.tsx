import React from 'react';
import { redirect } from 'next/navigation';
import { getSupabaseServerClient } from '@/lib/supabase';
import Link from 'next/link';
import { LayoutDashboard, Users, Settings, LogOut, ShieldCheck, ChevronLeft } from 'lucide-react';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enforce Admin Access
  const supabase = getSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session?.user) {
    redirect('/login');
  }

  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || [];
  const userEmail = session.user.email;

  if (!userEmail || !adminEmails.includes(userEmail)) {
    // Not an admin, redirect to regular dashboard
    redirect('/dashboard');
  }

  return (
    <div className="flex h-screen bg-[#050505] text-white font-sans overflow-hidden">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col hidden md:flex">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">Agency Admin</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-6">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white font-medium transition-colors">
            <Users className="w-4 h-4 text-indigo-400" />
            Clients
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            Platform Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
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
