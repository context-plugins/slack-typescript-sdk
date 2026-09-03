import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageSchema, type Message } from "./message.js";

export type ChatScheduleMessagesuccessschema = {
  channel: string;
  message: Message;
  ok: "True";
  postAt: number;
  scheduledMessageId: string;
};

export const chatScheduleMessagesuccessschemaSchema: Schema<ChatScheduleMessagesuccessschema> =
  s.object<ChatScheduleMessagesuccessschema>({
    channel: s.string(),
    message: messageSchema,
    ok: s.literal("True"),
    postAt: s.number(),
    scheduledMessageId: s.string(),
    _keysMap: {
      postAt: "post_at",
      scheduledMessageId: "scheduled_message_id",
    },
  });
