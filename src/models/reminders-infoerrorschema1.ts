import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  remindersDeleteErrorEnumSchema,
  type RemindersDeleteErrorEnum,
} from "./reminders-delete-error-enum.js";

export type RemindersInfoerrorschema1 = {
  callstack?: string;
  error: RemindersDeleteErrorEnum;
  ok: "False";
};

export const remindersInfoerrorschema1Schema: Schema<RemindersInfoerrorschema1> =
  s.object<RemindersInfoerrorschema1>({
    callstack: s.optional(s.string()),
    error: remindersDeleteErrorEnumSchema,
    ok: s.literal("False"),
  });
