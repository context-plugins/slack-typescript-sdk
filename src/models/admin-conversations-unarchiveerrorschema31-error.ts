import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsUnarchiveErrorEnumSchema,
  type AdminConversationsUnarchiveErrorEnum,
} from "./admin-conversations-unarchive-error-enum.js";

export type AdminConversationsUnarchiveerrorschema31Error = {
  error: AdminConversationsUnarchiveErrorEnum;
  ok: "False";
};

export const adminConversationsUnarchiveerrorschema31ErrorSchema: Schema<AdminConversationsUnarchiveerrorschema31Error> =
  s.object<AdminConversationsUnarchiveerrorschema31Error>({
    error: adminConversationsUnarchiveErrorEnumSchema,
    ok: s.literal("False"),
  });
