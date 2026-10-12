import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.close method */
export type ConversationsClosesuccessschema = {
  alreadyClosed?: boolean;
  noOp?: boolean;
  ok: boolean;
};

export const conversationsClosesuccessschemaSchema: Schema<ConversationsClosesuccessschema> =
  s.object<ConversationsClosesuccessschema>({
    alreadyClosed: s.optional(s.boolean()),
    noOp: s.optional(s.boolean()),
    ok: s.boolean(),
    _keysMap: {
      alreadyClosed: "already_closed",
      noOp: "no_op",
    },
  });
