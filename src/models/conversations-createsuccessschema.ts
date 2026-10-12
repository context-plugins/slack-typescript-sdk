import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.create method */
export type ConversationsCreatesuccessschema = {
  channel: Record<string, unknown>;
  ok: boolean;
};

export const conversationsCreatesuccessschemaSchema: Schema<ConversationsCreatesuccessschema> =
  s.object<ConversationsCreatesuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.boolean(),
  });
