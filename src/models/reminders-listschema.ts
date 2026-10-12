import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

/** Schema for successful response from reminders.list method */
export type RemindersListschema = {
  ok: boolean;
  reminders: ObjsReminder[];
};

export const remindersListschemaSchema: Schema<RemindersListschema> = s.object<RemindersListschema>({
  ok: s.boolean(),
  reminders: s.array(s.lazy(() => objsReminderSchema)),
});
