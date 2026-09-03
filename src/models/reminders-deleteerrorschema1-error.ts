import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  remindersDeleteErrorEnumSchema,
  type RemindersDeleteErrorEnum,
} from "./reminders-delete-error-enum.js";

export type RemindersDeleteerrorschema1Error = {
  callstack?: string;
  error: RemindersDeleteErrorEnum;
  ok: "False";
};

export const remindersDeleteerrorschema1ErrorSchema: Schema<RemindersDeleteerrorschema1Error> =
  s.object<RemindersDeleteerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: remindersDeleteErrorEnumSchema,
    ok: s.literal("False"),
  });
