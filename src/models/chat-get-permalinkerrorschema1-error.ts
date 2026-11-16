import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chatGetPermalinkErrorEnumSchema,
  type ChatGetPermalinkErrorEnum,
} from "./chat-get-permalink-error-enum.js";

/** Schema for error response from chat.getPermalink method */
export type ChatGetPermalinkerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatGetPermalinkErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatGetPermalinkerrorschema1ErrorSchema: Schema<ChatGetPermalinkerrorschema1Error> =
  s.object<ChatGetPermalinkerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: chatGetPermalinkErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
