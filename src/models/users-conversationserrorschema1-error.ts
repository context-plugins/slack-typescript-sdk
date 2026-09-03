import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersConversationsErrorEnumSchema,
  type UsersConversationsErrorEnum,
} from "./users-conversations-error-enum.js";

export type UsersConversationserrorschema1Error = {
  callstack?: string;
  error: UsersConversationsErrorEnum;
  ok: "False";
};

export const usersConversationserrorschema1ErrorSchema: Schema<UsersConversationserrorschema1Error> =
  s.object<UsersConversationserrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersConversationsErrorEnumSchema,
    ok: s.literal("False"),
  });
