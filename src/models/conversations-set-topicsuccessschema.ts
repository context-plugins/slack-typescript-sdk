import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsSetTopicsuccessschema = {
  channel: Record<string, unknown>;
  ok: "True";
};

export const conversationsSetTopicsuccessschemaSchema: Schema<ConversationsSetTopicsuccessschema> =
  s.object<ConversationsSetTopicsuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.literal("True"),
  });
