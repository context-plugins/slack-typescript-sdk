import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsSearchErrorEnumSchema,
  type AdminConversationsSearchErrorEnum,
} from "./admin-conversations-search-error-enum.js";

export type AdminConversationsSearcherrorschema1 = {
  error: AdminConversationsSearchErrorEnum;
  ok: "False";
};

export const adminConversationsSearcherrorschema1Schema: Schema<AdminConversationsSearcherrorschema1> =
  s.object<AdminConversationsSearcherrorschema1>({
    error: adminConversationsSearchErrorEnumSchema,
    ok: s.literal("False"),
  });
