import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

/** Schema for successful response from reminders.info method */
export type RemindersInfoschema = {
  ok: boolean;
  reminder: ObjsReminder;
};

export const remindersInfoschemaSchema: Schema<RemindersInfoschema> = s.object<RemindersInfoschema>({
  ok: s.boolean(),
  reminder: objsReminderSchema,
});
