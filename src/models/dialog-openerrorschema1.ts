import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dialogOpenErrorEnumSchema, type DialogOpenErrorEnum } from "./dialog-open-error-enum.js";

/** Schema for error response from dialog.open method */
export type DialogOpenerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DialogOpenErrorEnum;
  ok: boolean;
};

export const dialogOpenerrorschema1Schema: Schema<DialogOpenerrorschema1> = s.object<DialogOpenerrorschema1>({
  callstack: s.optional(s.string()),
  error: dialogOpenErrorEnumSchema,
  ok: s.boolean(),
});
