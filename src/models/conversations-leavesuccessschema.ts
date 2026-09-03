import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsLeavesuccessschema = {
  notInChannel?: boolean;
  ok: "True";
};

export const conversationsLeavesuccessschemaSchema: Schema<ConversationsLeavesuccessschema> =
  s.object<ConversationsLeavesuccessschema>({
    notInChannel: s.optional(s.boolean()),
    ok: s.literal("True"),
    _keysMap: {
      notInChannel: "not_in_channel",
    },
  });
