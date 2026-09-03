import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsConvertToPrivateErrorEnumSchema,
  type AdminConversationsConvertToPrivateErrorEnum,
} from "./admin-conversations-convert-to-private-error-enum.js";

export type AdminConversationsConvertToPrivateerrorschema1Error = {
  error: AdminConversationsConvertToPrivateErrorEnum;
  ok: "False";
};

export const adminConversationsConvertToPrivateerrorschema1ErrorSchema: Schema<AdminConversationsConvertToPrivateerrorschema1Error> =
  s.object<AdminConversationsConvertToPrivateerrorschema1Error>({
    error: adminConversationsConvertToPrivateErrorEnumSchema,
    ok: s.literal("False"),
  });
