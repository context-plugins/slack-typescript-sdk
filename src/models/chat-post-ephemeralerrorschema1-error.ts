import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatPostEphemeralErrorEnumSchema,
  type ChatPostEphemeralErrorEnum,
} from "./chat-post-ephemeral-error-enum.js";

/** Schema for error response from chat.postEphemeral method */
export type ChatPostEphemeralerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatPostEphemeralErrorEnum;
  ok: boolean;
};

export const chatPostEphemeralerrorschema1ErrorSchema: Schema<ChatPostEphemeralerrorschema1Error> =
  s.object<ChatPostEphemeralerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatPostEphemeralErrorEnumSchema,
    ok: s.boolean(),
  });
