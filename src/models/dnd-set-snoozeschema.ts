import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from dnd.setSnooze method */
export type DndSetSnoozeschema = {
  ok: boolean;
  snoozeEnabled: boolean;
  snoozeEndtime: number;
  snoozeRemaining: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dndSetSnoozeschemaSchema: Schema<DndSetSnoozeschema> = s.object<DndSetSnoozeschema>(
  {
    ok: s.boolean(),
    snoozeEnabled: s.boolean(),
    snoozeEndtime: s.int(),
    snoozeRemaining: s.int(),
    _keysMap: {
      snoozeEnabled: "snooze_enabled",
      snoozeEndtime: "snooze_endtime",
      snoozeRemaining: "snooze_remaining",
    },
  },
  { additionalProperties: s.json() },
);
