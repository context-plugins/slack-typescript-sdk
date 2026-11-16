import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from conversations.leave method */
export type ConversationsLeavesuccessschema = {
  notInChannel?: boolean;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsLeavesuccessschemaSchema: Schema<ConversationsLeavesuccessschema> =
  s.object<ConversationsLeavesuccessschema>(
    {
      notInChannel: s.optional(s.boolean()),
      ok: s.boolean(),
      _keysMap: {
        notInChannel: "not_in_channel",
      },
    },
    { additionalProperties: s.json() },
  );
