import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from conversations.setTopic method */
export type ConversationsSetTopicsuccessschema = {
  channel: Record<string, unknown>;
  ok: boolean;
};

export const conversationsSetTopicsuccessschemaSchema: Schema<ConversationsSetTopicsuccessschema> =
  s.object<ConversationsSetTopicsuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.boolean(),
  });
