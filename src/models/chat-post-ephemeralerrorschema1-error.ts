import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatPostEphemeralErrorEnumSchema,
  type ChatPostEphemeralErrorEnum,
} from "./chat-post-ephemeral-error-enum.js";

export type ChatPostEphemeralerrorschema1Error = {
  callstack?: string;
  error: ChatPostEphemeralErrorEnum;
  ok: "False";
};

export const chatPostEphemeralerrorschema1ErrorSchema: Schema<ChatPostEphemeralerrorschema1Error> =
  s.object<ChatPostEphemeralerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatPostEphemeralErrorEnumSchema,
    ok: s.literal("False"),
  });
