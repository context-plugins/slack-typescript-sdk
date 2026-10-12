import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndEndSnoozeErrorEnumSchema, type DndEndSnoozeErrorEnum } from "./dnd-end-snooze-error-enum.js";

/** Schema for error response from dnd.endSnooze method */
export type DndEndSnoozeerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DndEndSnoozeErrorEnum;
  ok: boolean;
};

export const dndEndSnoozeerrorschema1Schema: Schema<DndEndSnoozeerrorschema1> =
  s.object<DndEndSnoozeerrorschema1>({
    callstack: s.optional(s.string()),
    error: dndEndSnoozeErrorEnumSchema,
    ok: s.boolean(),
  });
