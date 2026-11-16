import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ScheduledMessage = {
  channelId: string;
  dateCreated: number;
  id: string;
  postAt: number;
  text?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scheduledMessageProperties: s.Shape<ScheduledMessage> = {
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
};

export const scheduledMessageInternalSchema: Schema<ScheduledMessage> = s.object<ScheduledMessage>(
  scheduledMessageProperties,
  { additionalProperties: s.json() },
);

export const scheduledMessageSchema: Schema<ScheduledMessage> = s.lazySchema(() =>
  s.object<ScheduledMessage>(
    {
      ...scheduledMessageProperties,
      channelId: s.string().check(s.pattern("^[C][A-Z0-9]{2,}$")),
      id: s.string().check(s.pattern("^[Q][A-Z0-9]{8,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
