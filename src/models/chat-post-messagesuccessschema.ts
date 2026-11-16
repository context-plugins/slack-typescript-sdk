import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageobjectInternalSchema, messageobjectSchema, type Messageobject } from "./messageobject.js";

/** Schema for successful response of chat.postMessage method */
export type ChatPostMessagesuccessschema = {
  channel: string;
  message: Messageobject;
  ok: boolean;
  ts: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatPostMessagesuccessschemaProperties: s.Shape<ChatPostMessagesuccessschema> = {
  channel: s.string(),
  message: messageobjectInternalSchema,
  ok: s.boolean(),
  ts: s.string(),
};

export const chatPostMessagesuccessschemaInternalSchema: Schema<ChatPostMessagesuccessschema> =
  s.object<ChatPostMessagesuccessschema>(chatPostMessagesuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const chatPostMessagesuccessschemaSchema: Schema<ChatPostMessagesuccessschema> = s.lazySchema(() =>
  s.object<ChatPostMessagesuccessschema>(
    {
      ...chatPostMessagesuccessschemaProperties,
      channel: s.string().check(s.pattern("^[CGD][A-Z0-9]{8,}$")),
      message: messageobjectSchema,
      ts: s.string().check(s.pattern("^\\d{10}\\.\\d{6}$")),
    },
    { additionalProperties: s.json() },
  ),
);
