import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

/** Schema for successful response from reminders.add method */
export type RemindersAddschema = {
  ok: boolean;
  reminder: ObjsReminder;
};

export const remindersAddschemaSchema: Schema<RemindersAddschema> = s.object<RemindersAddschema>({
  ok: s.boolean(),
  reminder: objsReminderSchema,
});
