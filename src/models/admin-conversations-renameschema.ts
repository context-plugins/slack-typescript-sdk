import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.disconnectShared */
export type AdminConversationsRenameschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsRenameschemaSchema: Schema<AdminConversationsRenameschema> =
  s.object<AdminConversationsRenameschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
