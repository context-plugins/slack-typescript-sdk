import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsArchiveErrorEnumSchema,
  type AdminConversationsArchiveErrorEnum,
} from "./admin-conversations-archive-error-enum.js";

export type AdminConversationsArchiveerrorschema1Error = {
  error: AdminConversationsArchiveErrorEnum;
  ok: "False";
};

export const adminConversationsArchiveerrorschema1ErrorSchema: Schema<AdminConversationsArchiveerrorschema1Error> =
  s.object<AdminConversationsArchiveerrorschema1Error>({
    error: adminConversationsArchiveErrorEnumSchema,
    ok: s.literal("False"),
  });
