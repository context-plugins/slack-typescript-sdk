import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from reminders.complete method */
export type RemindersCompleteschema = {
  ok: boolean;
};

export const remindersCompleteschemaSchema: Schema<RemindersCompleteschema> =
  s.object<RemindersCompleteschema>({
    ok: s.boolean(),
  });
