import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersConversationsErrorEnumSchema,
  type UsersConversationsErrorEnum,
} from "./users-conversations-error-enum.js";

/** Schema for error response from users.conversations method */
export type UsersConversationserrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersConversationsErrorEnum;
  ok: boolean;
};

export const usersConversationserrorschema1ErrorSchema: Schema<UsersConversationserrorschema1Error> =
  s.object<UsersConversationserrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersConversationsErrorEnumSchema,
    ok: s.boolean(),
  });
