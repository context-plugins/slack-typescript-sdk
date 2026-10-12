import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatPostEphemeralErrorEnumSchema,
  type ChatPostEphemeralErrorEnum,
} from "./chat-post-ephemeral-error-enum.js";

/** Schema for error response from chat.postEphemeral method */
export type ChatPostEphemeralerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatPostEphemeralErrorEnum;
  ok: boolean;
};

export const chatPostEphemeralerrorschema1Schema: Schema<ChatPostEphemeralerrorschema1> =
  s.object<ChatPostEphemeralerrorschema1>({
    callstack: s.optional(s.string()),
    error: chatPostEphemeralErrorEnumSchema,
    ok: s.boolean(),
  });
