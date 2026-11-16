import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from reminders.complete method */
export type RemindersCompleteschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const remindersCompleteschemaSchema: Schema<RemindersCompleteschema> =
  s.object<RemindersCompleteschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
