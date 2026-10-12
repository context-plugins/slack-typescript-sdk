import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsUpdateErrorEnumSchema,
  type UsergroupsUpdateErrorEnum,
} from "./usergroups-update-error-enum.js";

/** Schema for error response from usergroups.users.update method */
export type UsergroupsUsersUpdateerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsUpdateErrorEnum;
  ok: boolean;
};

export const usergroupsUsersUpdateerrorschema1Schema: Schema<UsergroupsUsersUpdateerrorschema1> =
  s.object<UsergroupsUsersUpdateerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsUpdateErrorEnumSchema,
    ok: s.boolean(),
  });
