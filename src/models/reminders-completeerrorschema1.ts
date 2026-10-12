import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  remindersCompleteErrorEnumSchema,
  type RemindersCompleteErrorEnum,
} from "./reminders-complete-error-enum.js";

/** Schema for error response from reminders.complete method */
export type RemindersCompleteerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RemindersCompleteErrorEnum;
  ok: boolean;
};

export const remindersCompleteerrorschema1Schema: Schema<RemindersCompleteerrorschema1> =
  s.object<RemindersCompleteerrorschema1>({
    callstack: s.optional(s.string()),
    error: remindersCompleteErrorEnumSchema,
    ok: s.boolean(),
  });
