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

    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || [];
    return adminEmails.includes(user.email);
  } catch (err) {
    console.error('[checkAdminAuth] Error:', err);
    return false;
  }
}
