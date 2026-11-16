import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.create */
export type AdminConversationsCreateschema = {
  channelId?: string;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adminConversationsCreateschemaProperties: s.Shape<AdminConversationsCreateschema> = {
  channelId: s.optional(s.string()),
  ok: s.boolean(),
  _keysMap: {
    channelId: "channel_id",
  },
};

export const adminConversationsCreateschemaInternalSchema: Schema<AdminConversationsCreateschema> =
  s.object<AdminConversationsCreateschema>(adminConversationsCreateschemaProperties, {
    additionalProperties: s.json(),
  });

export const adminConversationsCreateschemaSchema: Schema<AdminConversationsCreateschema> = s.lazySchema(() =>
  s.object<AdminConversationsCreateschema>(
    {
      ...adminConversationsCreateschemaProperties,
      channelId: s.optional(s.string().check(s.pattern("^[C][A-Z0-9]{2,}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
