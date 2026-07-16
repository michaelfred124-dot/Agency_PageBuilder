import { WidgetData, BackgroundConfig } from '@/types/bento';

export interface HistorySnapshot {
  widgets: WidgetData[];
  theme: BackgroundConfig;
  timestamp: number;
  description: string;
}

class UndoRedoManager {
  private history: HistorySnapshot[] = [];
  private future: HistorySnapshot[] = [];
  private readonly maxHistorySize = 50;
  private lastSnapshotTime = 0;
  private readonly snapshotDebounceMs = 1000; // Only capture after 1s idle
  private isDragging = false;

  /**
   * Push a snapshot to the history stack.
   * Throttled to 1 second intervals to avoid excessive snapshots during drag.
   */
  pushSnapshot(
    widgets: WidgetData[],
    theme: BackgroundConfig,
    description: string
  ): void {
    const now = Date.now();

    // Skip if we're currently dragging (wait for drag end)
    if (this.isDragging) return;

    // Throttle: don't capture more than once per second
    if (now - this.lastSnapshotTime < this.snapshotDebounceMs) return;

    // Deep clone to avoid mutation issues
    const snapshot: HistorySnapshot = {
      widgets: JSON.parse(JSON.stringify(widgets)),
      theme: JSON.parse(JSON.stringify(theme)),
      timestamp: now,
      description
    };

    this.history.push(snapshot);

    // Trim if over limit
    if (this.history.length > this.maxHistorySize) {
      this.history.shift();
    }

    // Clear redo stack when new action is performed
    this.future = [];
    this.lastSnapshotTime = now;

    // Persist to IndexedDB
    this.persistToIndexedDB().catch(err =>
      console.error('Failed to persist undo/redo to IndexedDB:', err)
    );
  }

  /**
   * Undo last action
   */
  undo(): HistorySnapshot | null {
    if (this.history.length === 0) return null;

    // Move current state to redo stack
    const current = this.history.pop();
    if (current) {
      this.future.push(current);
    }

    // Return previous state
    return this.history[this.history.length - 1] || null;
  }

  /**
   * Redo last undone action
   */
  redo(): HistorySnapshot | null {
    if (this.future.length === 0) return null;

    const next = this.future.pop();
    if (next) {
      this.history.push(next);
      return next;
    }

    return null;
  }

  canUndo(): boolean {
    return this.history.length > 0;
  }

  canRedo(): boolean {
    return this.future.length > 0;
  }

  /**
   * Clear all undo/redo history
   */
  clear(): void {
    this.history = [];
    this.future = [];
  }

  /**
   * Set dragging state to prevent snapshots during drag operations
   */
  setDragging(isDragging: boolean): void {
    this.isDragging = isDragging;
  }

  /**
   * Get current history size (for debugging/monitoring)
   */
  getHistorySize(): number {
    return this.history.length;
  }

  private async persistToIndexedDB(): Promise<void> {
    if (typeof window === 'undefined') return;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open('BentoBuilder', 1);

      request.onerror = () => reject(request.error);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('history')) {
          db.createObjectStore('history', { keyPath: 'id' });
        }
      };

      request.onsuccess = () => {
        try {
          const db = request.result;
          const transaction = db.transaction('history', 'readwrite');
          const store = transaction.objectStore('history');

          // Store with ID '1' (singleton pattern)
          store.put({
            id: 1,
            history: this.history,
            future: this.future,
            timestamp: Date.now()
          });

          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error);
        } catch (err) {
          reject(err);
        }
      };
    });
  }

  async loadFromIndexedDB(): Promise<void> {
    if (typeof window === 'undefined') return;

    return new Promise((resolve) => {
      const request = indexedDB.open('BentoBuilder', 1);

      request.onsuccess = () => {
        try {
          const db = request.result;
          const transaction = db.transaction('history', 'readonly');
          const store = transaction.objectStore('history');
          const getRequest = store.get(1);

          getRequest.onsuccess = () => {
            const data = getRequest.result;
            if (data?.history) {
              this.history = data.history;
            }
            if (data?.future) {
              this.future = data.future;
            }
            resolve();
          };

          getRequest.onerror = () => resolve(); // Silently fail
        } catch (err) {
          console.error('Failed to load undo/redo from IndexedDB:', err);
          resolve(); // Silently fail
        }
      };

      request.onerror = () => resolve(); // Silently fail
    });
  }
}

// Export singleton instance
export const undoRedoManager = new UndoRedoManager();

// Auto-load from IndexedDB on init
if (typeof window !== 'undefined') {
  undoRedoManager.loadFromIndexedDB().catch(err =>
    console.error('Failed to load undo/redo history:', err)
  );
}
