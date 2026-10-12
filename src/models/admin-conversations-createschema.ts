import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.create */
export type AdminConversationsCreateschema = {
  channelId?: string;
  ok: boolean;
};

export const adminConversationsCreateschemaSchema: Schema<AdminConversationsCreateschema> =
  s.object<AdminConversationsCreateschema>({
    channelId: s.optional(s.string()),
    ok: s.boolean(),
    _keysMap: {
      channelId: "channel_id",
    },
  });
