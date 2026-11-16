import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.delete */
export type AdminConversationsDeleteschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsDeleteschemaSchema: Schema<AdminConversationsDeleteschema> =
  s.object<AdminConversationsDeleteschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
