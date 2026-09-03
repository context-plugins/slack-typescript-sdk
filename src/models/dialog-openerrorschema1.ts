import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dialogOpenErrorEnumSchema, type DialogOpenErrorEnum } from "./dialog-open-error-enum.js";

export type DialogOpenerrorschema1 = {
  callstack?: string;
  error: DialogOpenErrorEnum;
  ok: "False";
};

export const dialogOpenerrorschema1Schema: Schema<DialogOpenerrorschema1> = s.object<DialogOpenerrorschema1>({
  callstack: s.optional(s.string()),
  error: dialogOpenErrorEnumSchema,
  ok: s.literal("False"),
});
