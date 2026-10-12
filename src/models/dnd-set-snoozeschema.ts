import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from dnd.setSnooze method */
export type DndSetSnoozeschema = {
  ok: boolean;
  snoozeEnabled: boolean;
  snoozeEndtime: number;
  snoozeRemaining: number;
};

export const dndSetSnoozeschemaSchema: Schema<DndSetSnoozeschema> = s.object<DndSetSnoozeschema>({
  ok: s.boolean(),
  snoozeEnabled: s.boolean(),
  snoozeEndtime: s.int(),
  snoozeRemaining: s.int(),
  _keysMap: {
    snoozeEnabled: "snooze_enabled",
    snoozeEndtime: "snooze_endtime",
    snoozeRemaining: "snooze_remaining",
  },
});
