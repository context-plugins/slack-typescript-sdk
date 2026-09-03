import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ObjsReminder = {
  completeTs?: number;
  creator: string;
  id: string;
  recurring: boolean;
  text: string;
  time?: number;
  user: string;
};

export const objsReminderSchema: Schema<ObjsReminder> = s.object<ObjsReminder>({
  completeTs: s.optional(s.number()),
  creator: s.string(),
  id: s.string(),
  recurring: s.boolean(),
  text: s.string(),
  time: s.optional(s.number()),
  user: s.string(),
  _keysMap: {
    completeTs: "complete_ts",
  },
});
