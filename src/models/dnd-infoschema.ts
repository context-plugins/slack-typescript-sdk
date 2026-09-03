import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DndInfoschema = {
  dndEnabled: boolean;
  nextDndEndTs: number;
  nextDndStartTs: number;
  ok: "True";
  snoozeEnabled?: boolean;
  snoozeEndtime?: number;
  snoozeRemaining?: number;
};

export const dndInfoschemaSchema: Schema<DndInfoschema> = s.object<DndInfoschema>({
  dndEnabled: s.boolean(),
  nextDndEndTs: s.number(),
  nextDndStartTs: s.number(),
  ok: s.literal("True"),
  snoozeEnabled: s.optional(s.boolean()),
  snoozeEndtime: s.optional(s.number()),
  snoozeRemaining: s.optional(s.number()),
  _keysMap: {
    dndEnabled: "dnd_enabled",
    nextDndEndTs: "next_dnd_end_ts",
    nextDndStartTs: "next_dnd_start_ts",
    snoozeEnabled: "snooze_enabled",
    snoozeEndtime: "snooze_endtime",
    snoozeRemaining: "snooze_remaining",
  },
});
