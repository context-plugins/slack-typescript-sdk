import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objsReminderInternalSchema, objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

/** Schema for successful response from reminders.info method */
export type RemindersInfoschema = {
  ok: boolean;
  reminder: ObjsReminder;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const remindersInfoschemaProperties: s.Shape<RemindersInfoschema> = {
  ok: s.boolean(),
  reminder: objsReminderInternalSchema,
};

export const remindersInfoschemaInternalSchema: Schema<RemindersInfoschema> = s.object<RemindersInfoschema>(
  remindersInfoschemaProperties,
  { additionalProperties: s.json() },
);

export const remindersInfoschemaSchema: Schema<RemindersInfoschema> = s.lazySchema(() =>
  s.object<RemindersInfoschema>(
    {
      ...remindersInfoschemaProperties,
      reminder: objsReminderSchema,
    },
    { additionalProperties: s.json() },
  ),
);
