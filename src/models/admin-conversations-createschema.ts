import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsCreateschema = {
  channelId?: string;
  ok: "True";
};

export const adminConversationsCreateschemaSchema: Schema<AdminConversationsCreateschema> =
  s.object<AdminConversationsCreateschema>({
    channelId: s.optional(s.string()),
    ok: s.literal("True"),
    _keysMap: {
      channelId: "channel_id",
    },
  });
