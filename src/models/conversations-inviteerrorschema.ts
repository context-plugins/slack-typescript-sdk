import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsInviteerrorschema = {
  channel: Record<string, unknown>;
  ok: "True";
};

export const conversationsInviteerrorschemaSchema: Schema<ConversationsInviteerrorschema> =
  s.object<ConversationsInviteerrorschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.literal("True"),
  });
