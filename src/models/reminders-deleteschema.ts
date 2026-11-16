import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from reminders.delete method */
export type RemindersDeleteschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const remindersDeleteschemaSchema: Schema<RemindersDeleteschema> = s.object<RemindersDeleteschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
