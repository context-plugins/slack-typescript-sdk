import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from dnd.info method */
export type DndInfoschema = {
  dndEnabled: boolean;
  nextDndEndTs: number;
  nextDndStartTs: number;
  ok: boolean;
  snoozeEnabled?: boolean;
  snoozeEndtime?: number;
  snoozeRemaining?: number;
};

export const dndInfoschemaSchema: Schema<DndInfoschema> = s.object<DndInfoschema>({
  dndEnabled: s.boolean(),
  nextDndEndTs: s.int(),
  nextDndStartTs: s.int(),
  ok: s.boolean(),
  snoozeEnabled: s.optional(s.boolean()),
  snoozeEndtime: s.optional(s.int()),
  snoozeRemaining: s.optional(s.int()),
  _keysMap: {
    dndEnabled: "dnd_enabled",
    nextDndEndTs: "next_dnd_end_ts",
    nextDndStartTs: "next_dnd_start_ts",
    snoozeEnabled: "snooze_enabled",
    snoozeEndtime: "snooze_endtime",
    snoozeRemaining: "snooze_remaining",
  },
});
