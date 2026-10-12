import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  remindersDeleteErrorEnumSchema,
  type RemindersDeleteErrorEnum,
} from "./reminders-delete-error-enum.js";

/** Schema for error response from reminders.info method */
export type RemindersInfoerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RemindersDeleteErrorEnum;
  ok: boolean;
};

export const remindersInfoerrorschema1Schema: Schema<RemindersInfoerrorschema1> =
  s.object<RemindersInfoerrorschema1>({
    callstack: s.optional(s.string()),
    error: remindersDeleteErrorEnumSchema,
    ok: s.boolean(),
  });
