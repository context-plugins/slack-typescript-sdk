import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndEndSnoozeErrorEnumSchema, type DndEndSnoozeErrorEnum } from "./dnd-end-snooze-error-enum.js";

export type DndEndSnoozeerrorschema1Error = {
  callstack?: string;
  error: DndEndSnoozeErrorEnum;
  ok: "False";
};

export const dndEndSnoozeerrorschema1ErrorSchema: Schema<DndEndSnoozeerrorschema1Error> =
  s.object<DndEndSnoozeerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: dndEndSnoozeErrorEnumSchema,
    ok: s.literal("False"),
  });
