import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageobject1Schema, type Messageobject1 } from "./messageobject1.js";

/** Schema for successful response of chat.update method */
export type ChatUpdatesuccessschema = {
  channel: string;
  message: Messageobject1;
  ok: boolean;
  text: string;
  ts: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatUpdatesuccessschemaSchema: Schema<ChatUpdatesuccessschema> =
  s.object<ChatUpdatesuccessschema>(
    {
      channel: s.string(),
      message: messageobject1Schema,
      ok: s.boolean(),
      text: s.string(),
      ts: s.string(),
    },
    { additionalProperties: s.json() },
  );
