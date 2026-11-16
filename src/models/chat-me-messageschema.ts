import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from chat.meMessage method */
export type ChatMeMessageschema = {
  channel?: string;
  ok: boolean;
  ts?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatMeMessageschemaProperties: s.Shape<ChatMeMessageschema> = {
  channel: s.optional(s.string()),
  ok: s.boolean(),
  ts: s.optional(s.string()),
};

export const chatMeMessageschemaInternalSchema: Schema<ChatMeMessageschema> = s.object<ChatMeMessageschema>(
  chatMeMessageschemaProperties,
  { additionalProperties: s.json() },
);

export const chatMeMessageschemaSchema: Schema<ChatMeMessageschema> = s.lazySchema(() =>
  s.object<ChatMeMessageschema>(
    {
      ...chatMeMessageschemaProperties,
      channel: s.optional(s.string().check(s.pattern("^[CGD][A-Z0-9]{8,}$"))),
      ts: s.optional(s.string().check(s.pattern("^\\d{10}\\.\\d{6}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
