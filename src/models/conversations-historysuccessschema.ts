import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageobjectInternalSchema, messageobjectSchema, type Messageobject } from "./messageobject.js";

/** Schema for successful response from conversations.history method */
export type ConversationsHistorysuccessschema = {
  channelActionsCount: number;
  channelActionsTs: Record<string, unknown>;
  hasMore: boolean;
  messages: Messageobject[];
  ok: boolean;
  pinCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const conversationsHistorysuccessschemaProperties: s.Shape<ConversationsHistorysuccessschema> = {
  channelActionsCount: s.int(),
  channelActionsTs: s.record(s.string(), s.unknown()),
  hasMore: s.boolean(),
  messages: s.array(s.lazy(() => messageobjectInternalSchema)),
  ok: s.boolean(),
  pinCount: s.int(),
  _keysMap: {
    channelActionsCount: "channel_actions_count",
    channelActionsTs: "channel_actions_ts",
    hasMore: "has_more",
    pinCount: "pin_count",
  },
};

export const conversationsHistorysuccessschemaInternalSchema: Schema<ConversationsHistorysuccessschema> =
  s.object<ConversationsHistorysuccessschema>(conversationsHistorysuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const conversationsHistorysuccessschemaSchema: Schema<ConversationsHistorysuccessschema> =
  s.lazySchema(() =>
    s.object<ConversationsHistorysuccessschema>(
      {
        ...conversationsHistorysuccessschemaProperties,
        messages: s.array(s.lazy(() => messageobjectSchema)).check(s.minLength(1), s.uniqueItems()),
      },
      { additionalProperties: s.json() },
    ),
  );
