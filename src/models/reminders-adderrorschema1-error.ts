import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { remindersAddErrorEnumSchema, type RemindersAddErrorEnum } from "./reminders-add-error-enum.js";

export type RemindersAdderrorschema1Error = {
  callstack?: string;
  error: RemindersAddErrorEnum;
  ok: "False";
};

export const remindersAdderrorschema1ErrorSchema: Schema<RemindersAdderrorschema1Error> =
  s.object<RemindersAdderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: remindersAddErrorEnumSchema,
    ok: s.literal("False"),
  });
