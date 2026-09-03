import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndSetSnoozeErrorEnumSchema, type DndSetSnoozeErrorEnum } from "./dnd-set-snooze-error-enum.js";

export type DndSetSnoozeerrorschema1 = {
  callstack?: string;
  error: DndSetSnoozeErrorEnum;
  ok: "False";
};

export const dndSetSnoozeerrorschema1Schema: Schema<DndSetSnoozeerrorschema1> =
  s.object<DndSetSnoozeerrorschema1>({
    callstack: s.optional(s.string()),
    error: dndSetSnoozeErrorEnumSchema,
    ok: s.literal("False"),
  });
