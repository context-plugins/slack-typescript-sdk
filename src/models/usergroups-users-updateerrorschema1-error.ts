import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsUpdateErrorEnumSchema,
  type UsergroupsUpdateErrorEnum,
} from "./usergroups-update-error-enum.js";

export type UsergroupsUsersUpdateerrorschema1Error = {
  callstack?: string;
  error: UsergroupsUpdateErrorEnum;
  ok: "False";
};

export const usergroupsUsersUpdateerrorschema1ErrorSchema: Schema<UsergroupsUsersUpdateerrorschema1Error> =
  s.object<UsergroupsUsersUpdateerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsUpdateErrorEnumSchema,
    ok: s.literal("False"),
  });
