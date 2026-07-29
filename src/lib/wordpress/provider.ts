/**
 * Host-agnostic contract for provisioning client WordPress sites.
 *
 * Provisioning works by CLONING a master WordPress install that already has
 * Divi installed, activated, licensed, and laid out. That is the whole reason
 * clone-based hosting was chosen: the Divi theme, child theme, plugins, layouts
 * and settings come across byte-for-byte, so there is no fragile
 * "install theme -> import layout JSON -> hope it matches" sequence to babysit.
 *
 * Cloudways is the only implementation today. GridPane and RunCloud expose the
 * same clone-and-poll shape, so adding one means writing a new file that
 * satisfies this interface -- not touching the state machine.
 */

/** An async job on the host. Clones are slow, so they hand back a job to poll. */
export interface CloneHandle {
  operationId: string;
  serverId: string;
  /** Some hosts return the new app id immediately; others only after the clone finishes. */
  appId?: string;
}

export interface OperationStatus {
  complete: boolean;
  failed: boolean;
  message?: string;
}

/** A live WordPress install on the host. */
export interface HostedApp {
  appId: string;
  serverId: string;
  /** Public origin, no trailing slash — e.g. https://wordpress-1234-5678.cloudwaysapps.com */
  url: string;
  label: string;
}

export interface WordPressHost {
  readonly name: string;

  /** Start a clone of the configured master Divi site. Returns a job to poll. */
  cloneMaster(label: string): Promise<CloneHandle>;

  /** Poll a clone job. */
  getOperation(operationId: string): Promise<OperationStatus>;

  /**
   * Resolve the finished install.
   *
   * Takes a label as well as an id because not every host returns the new app
   * id up front — when it doesn't, we find the clone by the unique label we
   * gave it.
   */
  findApp(opts: { serverId: string; appId?: string; label?: string }): Promise<HostedApp | null>;
}

/** Thrown for host API failures so the state machine can tell them from bugs. */
export class HostError extends Error {
  constructor(message: string, readonly status?: number, readonly body?: string) {
    super(message);
    this.name = 'HostError';
  }
}

/**
 * A DNS-safe, unique-per-order label for the cloned app.
 *
 * Doubles as the lookup key when the host doesn't return an app id, so it must
 * be stable and collision-free — hence the order id suffix.
 */
export function appLabelFor(businessName: string | null, orderId: string): string {
  const slug = (businessName || 'client')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 24) || 'client';
  return `${slug}-${orderId.slice(0, 8)}`;
}
