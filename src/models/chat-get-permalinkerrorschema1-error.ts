import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatGetPermalinkErrorEnumSchema,
  type ChatGetPermalinkErrorEnum,
} from "./chat-get-permalink-error-enum.js";

export type ChatGetPermalinkerrorschema1Error = {
  callstack?: string;
  error: ChatGetPermalinkErrorEnum;
  ok: "False";
};

export const chatGetPermalinkerrorschema1ErrorSchema: Schema<ChatGetPermalinkerrorschema1Error> =
  s.object<ChatGetPermalinkerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatGetPermalinkErrorEnumSchema,
    ok: s.literal("False"),
  });
