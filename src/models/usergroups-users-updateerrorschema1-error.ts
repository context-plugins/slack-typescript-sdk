import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsUpdateErrorEnumSchema,
  type UsergroupsUpdateErrorEnum,
} from "./usergroups-update-error-enum.js";

/** Schema for error response from usergroups.users.update method */
export type UsergroupsUsersUpdateerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsUpdateErrorEnum;
  ok: boolean;
};

export const usergroupsUsersUpdateerrorschema1ErrorSchema: Schema<UsergroupsUsersUpdateerrorschema1Error> =
  s.object<UsergroupsUsersUpdateerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsUpdateErrorEnumSchema,
    ok: s.boolean(),
  });
