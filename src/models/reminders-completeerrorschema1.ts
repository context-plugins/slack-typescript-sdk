import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  remindersCompleteErrorEnumSchema,
  type RemindersCompleteErrorEnum,
} from "./reminders-complete-error-enum.js";

export type RemindersCompleteerrorschema1 = {
  callstack?: string;
  error: RemindersCompleteErrorEnum;
  ok: "False";
};

export const remindersCompleteerrorschema1Schema: Schema<RemindersCompleteerrorschema1> =
  s.object<RemindersCompleteerrorschema1>({
    callstack: s.optional(s.string()),
    error: remindersCompleteErrorEnumSchema,
    ok: s.literal("False"),
  });
