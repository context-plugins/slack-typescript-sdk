import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DndEndSnoozeschema = {
  dndEnabled: boolean;
  nextDndEndTs: number;
  nextDndStartTs: number;
  ok: "True";
  snoozeEnabled: boolean;
};

export const dndEndSnoozeschemaSchema: Schema<DndEndSnoozeschema> = s.object<DndEndSnoozeschema>({
  dndEnabled: s.boolean(),
  nextDndEndTs: s.number(),
  nextDndStartTs: s.number(),
  ok: s.literal("True"),
  snoozeEnabled: s.boolean(),
  _keysMap: {
    dndEnabled: "dnd_enabled",
    nextDndEndTs: "next_dnd_end_ts",
    nextDndStartTs: "next_dnd_start_ts",
    snoozeEnabled: "snooze_enabled",
  },
});
