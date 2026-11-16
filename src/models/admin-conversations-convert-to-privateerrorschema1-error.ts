import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsConvertToPrivateErrorEnumSchema,
  type AdminConversationsConvertToPrivateErrorEnum,
} from "./admin-conversations-convert-to-private-error-enum.js";

/** Schema for error response from admin.conversations.convertToPrivate */
export type AdminConversationsConvertToPrivateerrorschema1Error = {
  error: AdminConversationsConvertToPrivateErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsConvertToPrivateerrorschema1ErrorSchema: Schema<AdminConversationsConvertToPrivateerrorschema1Error> =
  s.object<AdminConversationsConvertToPrivateerrorschema1Error>(
    {
      error: adminConversationsConvertToPrivateErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
