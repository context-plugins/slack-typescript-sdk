import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialogOpenErrorEnumSchema, type DialogOpenErrorEnum } from "./dialog-open-error-enum.js";

/** Schema for error response from dialog.open method */
export type DialogOpenerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DialogOpenErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dialogOpenerrorschema1ErrorSchema: Schema<DialogOpenerrorschema1Error> =
  s.object<DialogOpenerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: dialogOpenErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
