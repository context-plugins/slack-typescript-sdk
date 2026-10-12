import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Generated from users.getPresence with shasum e7251aec575d8863f9e0eb38663ae9dc26655f65 */
export type ApImethodusersGetPresence = {
  autoAway?: boolean;
  connectionCount?: number;
  lastActivity?: number;
  manualAway?: boolean;
  ok: boolean;
  online?: boolean;
  presence: string;
};

export const apImethodusersGetPresenceSchema: Schema<ApImethodusersGetPresence> =
  s.object<ApImethodusersGetPresence>({
    autoAway: s.optional(s.boolean()),
    connectionCount: s.optional(s.int()),
    lastActivity: s.optional(s.int()),
    manualAway: s.optional(s.boolean()),
    ok: s.boolean(),
    online: s.optional(s.boolean()),
    presence: s.string(),
    _keysMap: {
      autoAway: "auto_away",
      connectionCount: "connection_count",
      lastActivity: "last_activity",
      manualAway: "manual_away",
    },
  });
