import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  remindersCompleteErrorEnumSchema,
  type RemindersCompleteErrorEnum,
} from "./reminders-complete-error-enum.js";

export type RemindersCompleteerrorschema1Error = {
  callstack?: string;
  error: RemindersCompleteErrorEnum;
  ok: "False";
};

export const remindersCompleteerrorschema1ErrorSchema: Schema<RemindersCompleteerrorschema1Error> =
  s.object<RemindersCompleteerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: remindersCompleteErrorEnumSchema,
    ok: s.literal("False"),
  });
