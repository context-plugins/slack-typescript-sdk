import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndSetSnoozeErrorEnumSchema, type DndSetSnoozeErrorEnum } from "./dnd-set-snooze-error-enum.js";

export type DndSetSnoozeerrorschema1Error = {
  callstack?: string;
  error: DndSetSnoozeErrorEnum;
  ok: "False";
};

export const dndSetSnoozeerrorschema1ErrorSchema: Schema<DndSetSnoozeerrorschema1Error> =
  s.object<DndSetSnoozeerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: dndSetSnoozeErrorEnumSchema,
    ok: s.literal("False"),
  });
