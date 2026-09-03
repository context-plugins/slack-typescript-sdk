import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";
import { scheduledMessageSchema, type ScheduledMessage } from "./scheduled-message.js";

export type ChatScheduledMessagesListschema = {
  ok: "True";
  responseMetadata: ResponseMetadata;
  scheduledMessages: ScheduledMessage[];
};

export const chatScheduledMessagesListschemaSchema: Schema<ChatScheduledMessagesListschema> =
  s.object<ChatScheduledMessagesListschema>({
    ok: s.literal("True"),
    responseMetadata: responseMetadataSchema,
    scheduledMessages: s.array(s.lazy(() => scheduledMessageSchema)),
    _keysMap: {
      responseMetadata: "response_metadata",
      scheduledMessages: "scheduled_messages",
    },
  });
