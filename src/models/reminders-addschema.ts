import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objsReminderInternalSchema, objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

/** Schema for successful response from reminders.add method */
export type RemindersAddschema = {
  ok: boolean;
  reminder: ObjsReminder;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const remindersAddschemaProperties: s.Shape<RemindersAddschema> = {
  ok: s.boolean(),
  reminder: objsReminderInternalSchema,
};

export const remindersAddschemaInternalSchema: Schema<RemindersAddschema> = s.object<RemindersAddschema>(
  remindersAddschemaProperties,
  { additionalProperties: s.json() },
);

export const remindersAddschemaSchema: Schema<RemindersAddschema> = s.lazySchema(() =>
  s.object<RemindersAddschema>(
    {
      ...remindersAddschemaProperties,
      reminder: objsReminderSchema,
    },
    { additionalProperties: s.json() },
  ),
);
