import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationsCreateErrorEnumSchema,
  type ConversationsCreateErrorEnum,
} from "./conversations-create-error-enum.js";

/** Schema for error response from conversations.create method */
export type ConversationsCreateerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  detail?: string;
  error: ConversationsCreateErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsCreateerrorschema1Schema: Schema<ConversationsCreateerrorschema1> =
  s.object<ConversationsCreateerrorschema1>(
    {
      callstack: s.optional(s.string()),
      detail: s.optional(s.string()),
      error: conversationsCreateErrorEnumSchema,
      needed: s.optional(s.string()),
      ok: s.boolean(),
      provided: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
