import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.close method */
export type ConversationsClosesuccessschema = {
  alreadyClosed?: boolean;
  noOp?: boolean;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsClosesuccessschemaSchema: Schema<ConversationsClosesuccessschema> =
  s.object<ConversationsClosesuccessschema>(
    {
      alreadyClosed: s.optional(s.boolean()),
      noOp: s.optional(s.boolean()),
      ok: s.boolean(),
      _keysMap: {
        alreadyClosed: "already_closed",
        noOp: "no_op",
      },
    },
    { additionalProperties: s.json() },
  );
