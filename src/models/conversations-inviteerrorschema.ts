import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from conversations.invite method */
export type ConversationsInviteerrorschema = {
  channel: Record<string, unknown>;
  ok: boolean;
};

export const conversationsInviteerrorschemaSchema: Schema<ConversationsInviteerrorschema> =
  s.object<ConversationsInviteerrorschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.boolean(),
  });
