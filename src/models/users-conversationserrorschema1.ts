import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  usersConversationsErrorEnumSchema,
  type UsersConversationsErrorEnum,
} from "./users-conversations-error-enum.js";

/** Schema for error response from users.conversations method */
export type UsersConversationserrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersConversationsErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConversationserrorschema1Schema: Schema<UsersConversationserrorschema1> =
  s.object<UsersConversationserrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: usersConversationsErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
