import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsRepliessuccessschema = {
  hasMore?: boolean;
  messages: Record<string, unknown>[];
  ok: "True";
};

export const conversationsRepliessuccessschemaSchema: Schema<ConversationsRepliessuccessschema> =
  s.object<ConversationsRepliessuccessschema>({
    hasMore: s.optional(s.boolean()),
    messages: s.array(s.record(s.string(), s.unknown())),
    ok: s.literal("True"),
    _keysMap: {
      hasMore: "has_more",
    },
  });
