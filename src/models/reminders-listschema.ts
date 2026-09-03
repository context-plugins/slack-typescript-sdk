import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

export type RemindersListschema = {
  ok: "True";
  reminders: ObjsReminder[];
};

export const remindersListschemaSchema: Schema<RemindersListschema> = s.object<RemindersListschema>({
  ok: s.literal("True"),
  reminders: s.array(s.lazy(() => objsReminderSchema)),
});
