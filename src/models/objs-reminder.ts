import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ObjsReminder = {
  completeTs?: number;
  creator: string;
  id: string;
  recurring: boolean;
  text: string;
  time?: number;
  user: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const objsReminderProperties: s.Shape<ObjsReminder> = {
  completeTs: s.optional(s.int()),
  creator: s.string(),
  id: s.string(),
  recurring: s.boolean(),
  text: s.string(),
  time: s.optional(s.int()),
  user: s.string(),
  _keysMap: {
    completeTs: "complete_ts",
  },
};

export const objsReminderInternalSchema: Schema<ObjsReminder> = s.object<ObjsReminder>(
  objsReminderProperties,
  { additionalProperties: s.json() },
);

export const objsReminderSchema: Schema<ObjsReminder> = s.lazySchema(() =>
  s.object<ObjsReminder>(
    {
      ...objsReminderProperties,
      creator: s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$")),
      id: s.string().check(s.pattern("^Rm[A-Z0-9]{8,}$")),
      user: s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
