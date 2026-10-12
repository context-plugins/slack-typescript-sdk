import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageobjectSchema, type Messageobject } from "./messageobject.js";

/** Schema for successful response from conversations.history method */
export type ConversationsHistorysuccessschema = {
  channelActionsCount: number;
  channelActionsTs: Record<string, unknown>;
  hasMore: boolean;
  messages: Messageobject[];
  ok: boolean;
  pinCount: number;
};

export const conversationsHistorysuccessschemaSchema: Schema<ConversationsHistorysuccessschema> =
  s.object<ConversationsHistorysuccessschema>({
    channelActionsCount: s.int(),
    channelActionsTs: s.record(s.string(), s.unknown()),
    hasMore: s.boolean(),
    messages: s.array(s.lazy(() => messageobjectSchema)),
    ok: s.boolean(),
    pinCount: s.int(),
    _keysMap: {
      channelActionsCount: "channel_actions_count",
      channelActionsTs: "channel_actions_ts",
      hasMore: "has_more",
      pinCount: "pin_count",
    },
  });
