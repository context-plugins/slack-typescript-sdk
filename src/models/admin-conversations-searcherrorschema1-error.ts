import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsSearchErrorEnumSchema,
  type AdminConversationsSearchErrorEnum,
} from "./admin-conversations-search-error-enum.js";

export type AdminConversationsSearcherrorschema1Error = {
  error: AdminConversationsSearchErrorEnum;
  ok: "False";
};

export const adminConversationsSearcherrorschema1ErrorSchema: Schema<AdminConversationsSearcherrorschema1Error> =
  s.object<AdminConversationsSearcherrorschema1Error>({
    error: adminConversationsSearchErrorEnumSchema,
    ok: s.literal("False"),
  });
