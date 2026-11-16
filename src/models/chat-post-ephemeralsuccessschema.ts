import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from chat.postEphemeral method */
export type ChatPostEphemeralsuccessschema = {
  messageTs: string;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatPostEphemeralsuccessschemaProperties: s.Shape<ChatPostEphemeralsuccessschema> = {
  messageTs: s.string(),
  ok: s.boolean(),
  _keysMap: {
    messageTs: "message_ts",
  },
};

export const chatPostEphemeralsuccessschemaInternalSchema: Schema<ChatPostEphemeralsuccessschema> =
  s.object<ChatPostEphemeralsuccessschema>(chatPostEphemeralsuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const chatPostEphemeralsuccessschemaSchema: Schema<ChatPostEphemeralsuccessschema> = s.lazySchema(() =>
  s.object<ChatPostEphemeralsuccessschema>(
    {
      ...chatPostEphemeralsuccessschemaProperties,
      messageTs: s.string().check(s.pattern("^\\d{10}\\.\\d{6}$")),
    },
    { additionalProperties: s.json() },
  ),
);
