import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersConversationsErrorEnumSchema,
  type UsersConversationsErrorEnum,
} from "./users-conversations-error-enum.js";

export type UsersConversationserrorschema1 = {
  callstack?: string;
  error: UsersConversationsErrorEnum;
  ok: "False";
};

export const usersConversationserrorschema1Schema: Schema<UsersConversationserrorschema1> =
  s.object<UsersConversationserrorschema1>({
    callstack: s.optional(s.string()),
    error: usersConversationsErrorEnumSchema,
    ok: s.literal("False"),
  });
