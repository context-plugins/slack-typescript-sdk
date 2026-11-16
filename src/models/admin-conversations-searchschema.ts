import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelObjectInternalSchema, channelObjectSchema, type ChannelObject } from "./channel-object.js";

/** Schema for successful response of admin.conversations.search */
export type AdminConversationsSearchschema = {
  channels: ChannelObject[];
  nextCursor: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adminConversationsSearchschemaProperties: s.Shape<AdminConversationsSearchschema> = {
  channels: s.array(s.lazy(() => channelObjectInternalSchema)),
  nextCursor: s.string(),
  _keysMap: {
    nextCursor: "next_cursor",
  },
};

export const adminConversationsSearchschemaInternalSchema: Schema<AdminConversationsSearchschema> =
  s.object<AdminConversationsSearchschema>(adminConversationsSearchschemaProperties, {
    additionalProperties: s.json(),
  });

export const adminConversationsSearchschemaSchema: Schema<AdminConversationsSearchschema> = s.lazySchema(() =>
  s.object<AdminConversationsSearchschema>(
    {
      ...adminConversationsSearchschemaProperties,
      channels: s.array(s.lazy(() => channelObjectSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
