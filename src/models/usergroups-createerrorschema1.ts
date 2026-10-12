import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsCreateErrorEnumSchema,
  type UsergroupsCreateErrorEnum,
} from "./usergroups-create-error-enum.js";

/** Schema for error response from usergroups.create method */
export type UsergroupsCreateerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsCreateErrorEnum;
  ok: boolean;
};

export const usergroupsCreateerrorschema1Schema: Schema<UsergroupsCreateerrorschema1> =
  s.object<UsergroupsCreateerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsCreateErrorEnumSchema,
    ok: s.boolean(),
  });
