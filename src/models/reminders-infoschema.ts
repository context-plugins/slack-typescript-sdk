import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

export type RemindersInfoschema = {
  ok: "True";
  reminder: ObjsReminder;
};

export const remindersInfoschemaSchema: Schema<RemindersInfoschema> = s.object<RemindersInfoschema>({
  ok: s.literal("True"),
  reminder: objsReminderSchema,
});
