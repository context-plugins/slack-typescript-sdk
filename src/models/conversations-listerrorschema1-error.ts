import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationsListErrorEnumSchema,
  type ConversationsListErrorEnum,
} from "./conversations-list-error-enum.js";

/** Schema for error response from conversations.list method */
export type ConversationsListerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsListErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsListerrorschema1ErrorSchema: Schema<ConversationsListerrorschema1Error> =
  s.object<ConversationsListerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: conversationsListErrorEnumSchema,
      needed: s.optional(s.string()),
      ok: s.boolean(),
      provided: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
