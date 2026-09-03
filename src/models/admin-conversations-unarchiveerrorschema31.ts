import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsUnarchiveErrorEnumSchema,
  type AdminConversationsUnarchiveErrorEnum,
} from "./admin-conversations-unarchive-error-enum.js";

export type AdminConversationsUnarchiveerrorschema31 = {
  error: AdminConversationsUnarchiveErrorEnum;
  ok: "False";
};

export const adminConversationsUnarchiveerrorschema31Schema: Schema<AdminConversationsUnarchiveerrorschema31> =
  s.object<AdminConversationsUnarchiveerrorschema31>({
    error: adminConversationsUnarchiveErrorEnumSchema,
    ok: s.literal("False"),
  });
