import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationsOpenErrorEnumSchema,
  type ConversationsOpenErrorEnum,
} from "./conversations-open-error-enum.js";

/** Schema for error response from conversations.open method */
export type ConversationsOpenerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsOpenErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsOpenerrorschema1ErrorSchema: Schema<ConversationsOpenerrorschema1Error> =
  s.object<ConversationsOpenerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: conversationsOpenErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
