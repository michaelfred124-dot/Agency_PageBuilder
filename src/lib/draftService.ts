import { getSupabaseBrowserClient } from '@/lib/supabase';
import { WidgetData, BackgroundConfig } from '@/types/bento';

export interface Draft {
  id: string;
  user_id: string;
  site_id: string;
  tenant_id: string;
  canvas_json: WidgetData[];
  theme_json: BackgroundConfig;
  page_slug: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

// Load a draft from Supabase
export async function loadDraft(draftId: string): Promise<Draft | null> {
  if (!draftId) return null;

  try {
    const supabase = getSupabaseBrowserClient();
    const { data, error } = await supabase
      .from('drafts')
      .select('*')
      .eq('id', draftId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }

    return data as Draft;
  } catch (err) {
    console.error('Failed to load draft:', err);
    return null;
  }
}

// Save or update a draft
export async function saveDraft(
  draftId: string,
  canvasJson: WidgetData[],
  themeJson: BackgroundConfig,
  pageSlug: string = 'home'
): Promise<Draft | null> {
  if (!draftId) return null;

  try {
    const supabase = getSupabaseBrowserClient();
    const { data, error } = await supabase
      .from('drafts')
      .upsert({
        id: draftId,
        canvas_json: canvasJson,
        theme_json: themeJson,
        page_slug: pageSlug,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'id'
      })
      .select()
      .single();

    if (error) throw error;
    return data as Draft;
  } catch (err) {
    console.error('Failed to save draft:', err);

    // Fallback: save to localStorage for offline sync
    const queue = JSON.parse(localStorage.getItem('draft-queue') || '[]');
    queue.push({ draftId, canvasJson, themeJson, pageSlug, timestamp: Date.now() });
    localStorage.setItem('draft-queue', JSON.stringify(queue));

    return null;
  }
}

// Create a new draft
export async function createNewDraft(
  tenantId: string,
  siteId: string,
  siteName: string = 'Untitled Site'
): Promise<string | null> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('drafts')
      .insert({
        user_id: user.id,
        site_id: siteId,
        tenant_id: tenantId,
        canvas_json: [],
        theme_json: { type: 'solid', value: '#ffffff' },
        page_slug: 'home',
        is_published: false
      })
      .select()
      .single();

    if (error) throw error;
    return data.id as string;
  } catch (err) {
    console.error('Failed to create draft:', err);
    return null;
  }
}

// List all drafts for a tenant
export async function listDrafts(tenantId: string): Promise<Draft[]> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { data, error } = await supabase
      .from('drafts')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('updated_at', { ascending: false });

    if (error) throw error;
    return (data || []) as Draft[];
  } catch (err) {
    console.error('Failed to list drafts:', err);
    return [];
  }
}

// Delete a draft
export async function deleteDraft(draftId: string): Promise<boolean> {
  try {
    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase
      .from('drafts')
      .delete()
      .eq('id', draftId);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Failed to delete draft:', err);
    return false;
  }
}

// OFFLINE QUEUE MANAGEMENT

interface QueuedSave {
  draftId: string;
  canvasJson: WidgetData[];
  themeJson: BackgroundConfig;
  pageSlug: string;
  timestamp: number;
}

export function queueSaveOffline(
  draftId: string,
  canvasJson: WidgetData[],
  themeJson: BackgroundConfig,
  pageSlug: string = 'home'
): void {
  if (typeof window === 'undefined') return;

  const queue: QueuedSave[] = JSON.parse(localStorage.getItem('draft-queue') || '[]');

  // Remove if already in queue
  const filtered = queue.filter(q => q.draftId !== draftId);

  // Add new save
  filtered.push({
    draftId,
    canvasJson,
    themeJson,
    pageSlug,
    timestamp: Date.now()
  });

  localStorage.setItem('draft-queue', JSON.stringify(filtered));
}

export async function flushSaveQueue(): Promise<number> {
  if (typeof window === 'undefined') return 0;

  const queue: QueuedSave[] = JSON.parse(localStorage.getItem('draft-queue') || '[]');
  if (queue.length === 0) return 0;

  let flushed = 0;
  for (const item of queue) {
    try {
      const result = await saveDraft(item.draftId, item.canvasJson, item.themeJson, item.pageSlug);
      if (result) flushed++;
    } catch (err) {
      console.error(`Failed to flush draft ${item.draftId}:`, err);
      break; // Stop on first error, will retry on next sync
    }
  }

  // Remove flushed items from queue
  if (flushed > 0) {
    const remaining = queue.slice(flushed);
    if (remaining.length > 0) {
      localStorage.setItem('draft-queue', JSON.stringify(remaining));
    } else {
      localStorage.removeItem('draft-queue');
    }
  }

  return flushed;
}

// Get queue size for UI display
export function getQueueSize(): number {
  if (typeof window === 'undefined') return 0;
  const queue: QueuedSave[] = JSON.parse(localStorage.getItem('draft-queue') || '[]');
  return queue.length;
}

// Listen for online/offline changes and auto-flush
if (typeof window !== 'undefined') {
  window.addEventListener('online', async () => {
    const flushed = await flushSaveQueue();
    if (flushed > 0) {
      console.log(`Synced ${flushed} draft(s) after coming online`);
    }
  });
}
