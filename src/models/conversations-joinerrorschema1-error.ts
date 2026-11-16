import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationsJoinErrorEnumSchema,
  type ConversationsJoinErrorEnum,
} from "./conversations-join-error-enum.js";

/** Schema for error response from conversations.join method */
export type ConversationsJoinerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsJoinErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsJoinerrorschema1ErrorSchema: Schema<ConversationsJoinerrorschema1Error> =
  s.object<ConversationsJoinerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: conversationsJoinErrorEnumSchema,
      needed: s.optional(s.string()),
      ok: s.boolean(),
      provided: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
