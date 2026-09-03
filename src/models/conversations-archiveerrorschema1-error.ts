import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsArchiveErrorEnumSchema,
  type ConversationsArchiveErrorEnum,
} from "./conversations-archive-error-enum.js";

export type ConversationsArchiveerrorschema1Error = {
  callstack?: string;
  error: ConversationsArchiveErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsArchiveerrorschema1ErrorSchema: Schema<ConversationsArchiveerrorschema1Error> =
  s.object<ConversationsArchiveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsArchiveErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
