import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageInternalSchema, messageSchema, type Message } from "./message.js";

/** Schema for successful response of chat.scheduleMessage method */
export type ChatScheduleMessagesuccessschema = {
  channel: string;
  message: Message;
  ok: boolean;
  postAt: number;
  scheduledMessageId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatScheduleMessagesuccessschemaProperties: s.Shape<ChatScheduleMessagesuccessschema> = {
  channel: s.string(),
  message: messageInternalSchema,
  ok: s.boolean(),
  postAt: s.int(),
  scheduledMessageId: s.string(),
  _keysMap: {
    postAt: "post_at",
    scheduledMessageId: "scheduled_message_id",
  },
};

export const chatScheduleMessagesuccessschemaInternalSchema: Schema<ChatScheduleMessagesuccessschema> =
  s.object<ChatScheduleMessagesuccessschema>(chatScheduleMessagesuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const chatScheduleMessagesuccessschemaSchema: Schema<ChatScheduleMessagesuccessschema> = s.lazySchema(
  () =>
    s.object<ChatScheduleMessagesuccessschema>(
      {
        ...chatScheduleMessagesuccessschemaProperties,
        channel: s.string().check(s.pattern("^[CGD][A-Z0-9]{8,}$")),
        message: messageSchema,
        scheduledMessageId: s.string().check(s.pattern("^[Q][A-Z0-9]{8,}$")),
      },
      { additionalProperties: s.json() },
    ),
);
