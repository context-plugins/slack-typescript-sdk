import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from dnd.endSnooze method */
export type DndEndSnoozeschema = {
  dndEnabled: boolean;
  nextDndEndTs: number;
  nextDndStartTs: number;
  ok: boolean;
  snoozeEnabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dndEndSnoozeschemaSchema: Schema<DndEndSnoozeschema> = s.object<DndEndSnoozeschema>(
  {
    dndEnabled: s.boolean(),
    nextDndEndTs: s.int(),
    nextDndStartTs: s.int(),
    ok: s.boolean(),
    snoozeEnabled: s.boolean(),
    _keysMap: {
      dndEnabled: "dnd_enabled",
      nextDndEndTs: "next_dnd_end_ts",
      nextDndStartTs: "next_dnd_start_ts",
      snoozeEnabled: "snooze_enabled",
    },
  },
  { additionalProperties: s.json() },
);
