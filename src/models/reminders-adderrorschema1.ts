import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { remindersAddErrorEnumSchema, type RemindersAddErrorEnum } from "./reminders-add-error-enum.js";

export type RemindersAdderrorschema1 = {
  callstack?: string;
  error: RemindersAddErrorEnum;
  ok: "False";
};

export const remindersAdderrorschema1Schema: Schema<RemindersAdderrorschema1> =
  s.object<RemindersAdderrorschema1>({
    callstack: s.optional(s.string()),
    error: remindersAddErrorEnumSchema,
    ok: s.literal("False"),
  });
