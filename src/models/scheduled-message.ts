import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduledMessage = {
  channelId: string;
  dateCreated: number;
  id: string;
  postAt: number;
  text?: string;
};

export const scheduledMessageSchema: Schema<ScheduledMessage> = s.object<ScheduledMessage>({
  channelId: s.string(),
  dateCreated: s.int(),
  id: s.string(),
  postAt: s.int(),
  text: s.optional(s.string()),
  _keysMap: {
    channelId: "channel_id",
    dateCreated: "date_created",
    postAt: "post_at",
  },
});
