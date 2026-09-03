import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndEndSnoozeErrorEnumSchema, type DndEndSnoozeErrorEnum } from "./dnd-end-snooze-error-enum.js";

export type DndEndSnoozeerrorschema1 = {
  callstack?: string;
  error: DndEndSnoozeErrorEnum;
  ok: "False";
};

export const dndEndSnoozeerrorschema1Schema: Schema<DndEndSnoozeerrorschema1> =
  s.object<DndEndSnoozeerrorschema1>({
    callstack: s.optional(s.string()),
    error: dndEndSnoozeErrorEnumSchema,
    ok: s.literal("False"),
  });
