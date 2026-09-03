import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DndSetSnoozeschema = {
  ok: "True";
  snoozeEnabled: boolean;
  snoozeEndtime: number;
  snoozeRemaining: number;
};

export const dndSetSnoozeschemaSchema: Schema<DndSetSnoozeschema> = s.object<DndSetSnoozeschema>({
  ok: s.literal("True"),
  snoozeEnabled: s.boolean(),
  snoozeEndtime: s.number(),
  snoozeRemaining: s.number(),
  _keysMap: {
    snoozeEnabled: "snooze_enabled",
    snoozeEndtime: "snooze_endtime",
    snoozeRemaining: "snooze_remaining",
  },
});
