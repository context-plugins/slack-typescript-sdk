import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatPostEphemeralErrorEnumSchema,
  type ChatPostEphemeralErrorEnum,
} from "./chat-post-ephemeral-error-enum.js";

export type ChatPostEphemeralerrorschema1 = {
  callstack?: string;
  error: ChatPostEphemeralErrorEnum;
  ok: "False";
};

export const chatPostEphemeralerrorschema1Schema: Schema<ChatPostEphemeralerrorschema1> =
  s.object<ChatPostEphemeralerrorschema1>({
    callstack: s.optional(s.string()),
    error: chatPostEphemeralErrorEnumSchema,
    ok: s.literal("False"),
  });
