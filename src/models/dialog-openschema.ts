import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from dialog.open method */
export type DialogOpenschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dialogOpenschemaSchema: Schema<DialogOpenschema> = s.object<DialogOpenschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
