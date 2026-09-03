import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

export type RemindersAddschema = {
  ok: "True";
  reminder: ObjsReminder;
};

export const remindersAddschemaSchema: Schema<RemindersAddschema> = s.object<RemindersAddschema>({
  ok: s.literal("True"),
  reminder: objsReminderSchema,
});
