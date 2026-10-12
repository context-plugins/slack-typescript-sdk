import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from reminders.delete method */
export type RemindersDeleteschema = {
  ok: boolean;
};

export const remindersDeleteschemaSchema: Schema<RemindersDeleteschema> = s.object<RemindersDeleteschema>({
  ok: s.boolean(),
});
