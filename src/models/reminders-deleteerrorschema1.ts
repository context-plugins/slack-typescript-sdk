import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  remindersDeleteErrorEnumSchema,
  type RemindersDeleteErrorEnum,
} from "./reminders-delete-error-enum.js";

/** Schema for error response from reminders.delete method */
export type RemindersDeleteerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RemindersDeleteErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const remindersDeleteerrorschema1Schema: Schema<RemindersDeleteerrorschema1> =
  s.object<RemindersDeleteerrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: remindersDeleteErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
