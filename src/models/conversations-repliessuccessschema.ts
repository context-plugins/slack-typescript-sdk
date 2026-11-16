import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from conversations.replies method */
export type ConversationsRepliessuccessschema = {
  hasMore?: boolean;
  messages: Record<string, unknown>[];
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsRepliessuccessschemaSchema: Schema<ConversationsRepliessuccessschema> =
  s.object<ConversationsRepliessuccessschema>(
    {
      hasMore: s.optional(s.boolean()),
      messages: s.array(s.record(s.string(), s.unknown())),
      ok: s.boolean(),
      _keysMap: {
        hasMore: "has_more",
      },
    },
    { additionalProperties: s.json() },
  );
