import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Schema for successful response from conversations.open method when opening channels, ims, mpims
 */
export type ConversationsOpensuccessschema = {
  alreadyOpen?: boolean;
  channel: Record<string, unknown>;
  noOp?: boolean;
  ok: boolean;
};

export const conversationsOpensuccessschemaSchema: Schema<ConversationsOpensuccessschema> =
  s.object<ConversationsOpensuccessschema>({
    alreadyOpen: s.optional(s.boolean()),
    channel: s.record(s.string(), s.unknown()),
    noOp: s.optional(s.boolean()),
    ok: s.boolean(),
    _keysMap: {
      alreadyOpen: "already_open",
      noOp: "no_op",
    },
  });
