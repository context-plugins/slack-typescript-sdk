import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageobjectSchema, type Messageobject } from "./messageobject.js";

/** Schema for successful response of chat.postMessage method */
export type ChatPostMessagesuccessschema = {
  channel: string;
  message: Messageobject;
  ok: boolean;
  ts: string;
};

export const chatPostMessagesuccessschemaSchema: Schema<ChatPostMessagesuccessschema> =
  s.object<ChatPostMessagesuccessschema>({
    channel: s.string(),
    message: messageobjectSchema,
    ok: s.boolean(),
    ts: s.string(),
  });
