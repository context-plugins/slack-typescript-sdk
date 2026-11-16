import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from conversations.setPurpose method */
export type ConversationsSetPurposesuccessschema = {
  channel: Record<string, unknown>;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsSetPurposesuccessschemaSchema: Schema<ConversationsSetPurposesuccessschema> =
  s.object<ConversationsSetPurposesuccessschema>(
    {
      channel: s.record(s.string(), s.unknown()),
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
