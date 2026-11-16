import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.invite */
export type AdminConversationsInviteschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsInviteschemaSchema: Schema<AdminConversationsInviteschema> =
  s.object<AdminConversationsInviteschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
