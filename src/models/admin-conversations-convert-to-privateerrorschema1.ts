import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsConvertToPrivateErrorEnumSchema,
  type AdminConversationsConvertToPrivateErrorEnum,
} from "./admin-conversations-convert-to-private-error-enum.js";

export type AdminConversationsConvertToPrivateerrorschema1 = {
  error: AdminConversationsConvertToPrivateErrorEnum;
  ok: "False";
};

export const adminConversationsConvertToPrivateerrorschema1Schema: Schema<AdminConversationsConvertToPrivateerrorschema1> =
  s.object<AdminConversationsConvertToPrivateerrorschema1>({
    error: adminConversationsConvertToPrivateErrorEnumSchema,
    ok: s.literal("False"),
  });
