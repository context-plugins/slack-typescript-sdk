import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dndEndSnoozeErrorEnumSchema, type DndEndSnoozeErrorEnum } from "./dnd-end-snooze-error-enum.js";

/** Schema for error response from dnd.endSnooze method */
export type DndEndSnoozeerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DndEndSnoozeErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dndEndSnoozeerrorschema1ErrorSchema: Schema<DndEndSnoozeerrorschema1Error> =
  s.object<DndEndSnoozeerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: dndEndSnoozeErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
