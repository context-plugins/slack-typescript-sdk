import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.info */
export type ConversationsInfosuccessschema = {
  channel: Record<string, unknown>;
  ok: boolean;
};

export const conversationsInfosuccessschemaSchema: Schema<ConversationsInfosuccessschema> =
  s.object<ConversationsInfosuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.boolean(),
  });
