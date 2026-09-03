import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dialogOpenErrorEnumSchema, type DialogOpenErrorEnum } from "./dialog-open-error-enum.js";

export type DialogOpenerrorschema1Error = {
  callstack?: string;
  error: DialogOpenErrorEnum;
  ok: "False";
};

export const dialogOpenerrorschema1ErrorSchema: Schema<DialogOpenerrorschema1Error> =
  s.object<DialogOpenerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: dialogOpenErrorEnumSchema,
    ok: s.literal("False"),
  });
