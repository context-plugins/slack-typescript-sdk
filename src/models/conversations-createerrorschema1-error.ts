import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsCreateErrorEnumSchema,
  type ConversationsCreateErrorEnum,
} from "./conversations-create-error-enum.js";

export type ConversationsCreateerrorschema1Error = {
  callstack?: string;
  detail?: string;
  error: ConversationsCreateErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsCreateerrorschema1ErrorSchema: Schema<ConversationsCreateerrorschema1Error> =
  s.object<ConversationsCreateerrorschema1Error>({
    callstack: s.optional(s.string()),
    detail: s.optional(s.string()),
    error: conversationsCreateErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
