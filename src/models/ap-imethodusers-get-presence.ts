import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApImethodusersGetPresence = {
  autoAway?: boolean;
  connectionCount?: number;
  lastActivity?: number;
  manualAway?: boolean;
  ok: "True";
  online?: boolean;
  presence: string;
};

export const apImethodusersGetPresenceSchema: Schema<ApImethodusersGetPresence> =
  s.object<ApImethodusersGetPresence>({
    autoAway: s.optional(s.boolean()),
    connectionCount: s.optional(s.number()),
    lastActivity: s.optional(s.number()),
    manualAway: s.optional(s.boolean()),
    ok: s.literal("True"),
    online: s.optional(s.boolean()),
    presence: s.string(),
    _keysMap: {
      autoAway: "auto_away",
      connectionCount: "connection_count",
      lastActivity: "last_activity",
      manualAway: "manual_away",
    },
  });
