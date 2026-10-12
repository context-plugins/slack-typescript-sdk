import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from conversations.leave method */
export type ConversationsLeavesuccessschema = {
  notInChannel?: boolean;
  ok: boolean;
};

export const conversationsLeavesuccessschemaSchema: Schema<ConversationsLeavesuccessschema> =
  s.object<ConversationsLeavesuccessschema>({
    notInChannel: s.optional(s.boolean()),
    ok: s.boolean(),
    _keysMap: {
      notInChannel: "not_in_channel",
    },
  });
