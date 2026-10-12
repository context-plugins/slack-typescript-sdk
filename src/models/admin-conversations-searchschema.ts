import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelObjectSchema, type ChannelObject } from "./channel-object.js";

/** Schema for successful response of admin.conversations.search */
export type AdminConversationsSearchschema = {
  channels: ChannelObject[];
  nextCursor: string;
};

export const adminConversationsSearchschemaSchema: Schema<AdminConversationsSearchschema> =
  s.object<AdminConversationsSearchschema>({
    channels: s.array(s.lazy(() => channelObjectSchema)),
    nextCursor: s.string(),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  });
