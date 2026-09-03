import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsJoinErrorEnumSchema,
  type ConversationsJoinErrorEnum,
} from "./conversations-join-error-enum.js";

export type ConversationsJoinerrorschema1Error = {
  callstack?: string;
  error: ConversationsJoinErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsJoinerrorschema1ErrorSchema: Schema<ConversationsJoinerrorschema1Error> =
  s.object<ConversationsJoinerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsJoinErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
