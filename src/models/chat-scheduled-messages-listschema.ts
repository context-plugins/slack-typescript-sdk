import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";
import {
  scheduledMessageInternalSchema,
  scheduledMessageSchema,
  type ScheduledMessage,
} from "./scheduled-message.js";

/** Schema for successful response from chat.scheduledMessages.list method */
export type ChatScheduledMessagesListschema = {
  ok: boolean;
  responseMetadata: ResponseMetadata;
  scheduledMessages: ScheduledMessage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatScheduledMessagesListschemaProperties: s.Shape<ChatScheduledMessagesListschema> = {
  ok: s.boolean(),
  responseMetadata: responseMetadataSchema,
  scheduledMessages: s.array(s.lazy(() => scheduledMessageInternalSchema)),
  _keysMap: {
    responseMetadata: "response_metadata",
    scheduledMessages: "scheduled_messages",
  },
};

export const chatScheduledMessagesListschemaInternalSchema: Schema<ChatScheduledMessagesListschema> =
  s.object<ChatScheduledMessagesListschema>(chatScheduledMessagesListschemaProperties, {
    additionalProperties: s.json(),
  });

export const chatScheduledMessagesListschemaSchema: Schema<ChatScheduledMessagesListschema> = s.lazySchema(
  () =>
    s.object<ChatScheduledMessagesListschema>(
      {
        ...chatScheduledMessagesListschemaProperties,
        scheduledMessages: s.array(s.lazy(() => scheduledMessageSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
