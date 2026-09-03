import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsUpdateErrorEnumSchema,
  type UsergroupsUpdateErrorEnum,
} from "./usergroups-update-error-enum.js";

export type UsergroupsUsersUpdateerrorschema1 = {
  callstack?: string;
  error: UsergroupsUpdateErrorEnum;
  ok: "False";
};

export const usergroupsUsersUpdateerrorschema1Schema: Schema<UsergroupsUsersUpdateerrorschema1> =
  s.object<UsergroupsUsersUpdateerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsUpdateErrorEnumSchema,
    ok: s.literal("False"),
  });
