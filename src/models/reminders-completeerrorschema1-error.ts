import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  remindersCompleteErrorEnumSchema,
  type RemindersCompleteErrorEnum,
} from "./reminders-complete-error-enum.js";

/** Schema for error response from reminders.complete method */
export type RemindersCompleteerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RemindersCompleteErrorEnum;
  ok: boolean;
};

export const remindersCompleteerrorschema1ErrorSchema: Schema<RemindersCompleteerrorschema1Error> =
  s.object<RemindersCompleteerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: remindersCompleteErrorEnumSchema,
    ok: s.boolean(),
  });
