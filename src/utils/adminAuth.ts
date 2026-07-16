import { createClient } from '@/utils/supabase/server';

/**
 * Utility function to verify if the currently authenticated user is an administrator.
 * Reads white-listed admin emails from the ADMIN_EMAILS environment variable.
 */
export async function checkAdminAuth(): Promise<boolean> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || !user.email) {
      return false;
    }

    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim().toLowerCase()) || [];
    const email = user.email.toLowerCase();
    return adminEmails.includes(email) ||
      email === 'michaelfreddesigns@gmail.com' ||
      email === 'michaelfred124@gmail.com' ||
      user.user_metadata?.is_admin === true ||
      user.app_metadata?.is_admin === true ||
      user.user_metadata?.role === 'admin' ||
      user.app_metadata?.role === 'admin';
  } catch (err) {
    console.error('[checkAdminAuth] Error:', err);
    return false;
  }
}
