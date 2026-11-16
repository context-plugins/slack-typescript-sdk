import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objsReminderInternalSchema, objsReminderSchema, type ObjsReminder } from "./objs-reminder.js";

/** Schema for successful response from reminders.list method */
export type RemindersListschema = {
  ok: boolean;
  reminders: ObjsReminder[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const remindersListschemaProperties: s.Shape<RemindersListschema> = {
  ok: s.boolean(),
  reminders: s.array(s.lazy(() => objsReminderInternalSchema)),
};

export const remindersListschemaInternalSchema: Schema<RemindersListschema> = s.object<RemindersListschema>(
  remindersListschemaProperties,
  { additionalProperties: s.json() },
);

export const remindersListschemaSchema: Schema<RemindersListschema> = s.lazySchema(() =>
  s.object<RemindersListschema>(
    {
      ...remindersListschemaProperties,
      reminders: s.array(s.lazy(() => objsReminderSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
