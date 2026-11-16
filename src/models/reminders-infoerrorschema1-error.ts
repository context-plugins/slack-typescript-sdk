import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  remindersDeleteErrorEnumSchema,
  type RemindersDeleteErrorEnum,
} from "./reminders-delete-error-enum.js";

/** Schema for error response from reminders.info method */
export type RemindersInfoerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RemindersDeleteErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const remindersInfoerrorschema1ErrorSchema: Schema<RemindersInfoerrorschema1Error> =
  s.object<RemindersInfoerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: remindersDeleteErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
