import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsMarkErrorEnumSchema,
  type ConversationsMarkErrorEnum,
} from "./conversations-mark-error-enum.js";

export type ConversationsMarkerrorschema1Error = {
  callstack?: string;
  error: ConversationsMarkErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsMarkerrorschema1ErrorSchema: Schema<ConversationsMarkerrorschema1Error> =
  s.object<ConversationsMarkerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsMarkErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
