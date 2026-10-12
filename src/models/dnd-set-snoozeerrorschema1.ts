import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndSetSnoozeErrorEnumSchema, type DndSetSnoozeErrorEnum } from "./dnd-set-snooze-error-enum.js";

/** Schema for error response from dnd.setSnooze method */
export type DndSetSnoozeerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DndSetSnoozeErrorEnum;
  ok: boolean;
};

export const dndSetSnoozeerrorschema1Schema: Schema<DndSetSnoozeerrorschema1> =
  s.object<DndSetSnoozeerrorschema1>({
    callstack: s.optional(s.string()),
    error: dndSetSnoozeErrorEnumSchema,
    ok: s.boolean(),
  });
