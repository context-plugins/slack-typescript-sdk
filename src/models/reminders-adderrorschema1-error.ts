import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { remindersAddErrorEnumSchema, type RemindersAddErrorEnum } from "./reminders-add-error-enum.js";

/** Schema for error response from reminders.add method */
export type RemindersAdderrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RemindersAddErrorEnum;
  ok: boolean;
};

export const remindersAdderrorschema1ErrorSchema: Schema<RemindersAdderrorschema1Error> =
  s.object<RemindersAdderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: remindersAddErrorEnumSchema,
    ok: s.boolean(),
  });
