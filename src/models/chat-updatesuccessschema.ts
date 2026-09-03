import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageobject1Schema, type Messageobject1 } from "./messageobject1.js";

export type ChatUpdatesuccessschema = {
  channel: string;
  message: Messageobject1;
  ok: "True";
  text: string;
  ts: string;
};

export const chatUpdatesuccessschemaSchema: Schema<ChatUpdatesuccessschema> =
  s.object<ChatUpdatesuccessschema>({
    channel: s.string(),
    message: messageobject1Schema,
    ok: s.literal("True"),
    text: s.string(),
    ts: s.string(),
  });
