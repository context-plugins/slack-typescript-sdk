import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsCreateErrorEnumSchema,
  type UsergroupsCreateErrorEnum,
} from "./usergroups-create-error-enum.js";

/** Schema for error response from usergroups.create method */
export type UsergroupsCreateerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsCreateErrorEnum;
  ok: boolean;
};

export const usergroupsCreateerrorschema1ErrorSchema: Schema<UsergroupsCreateerrorschema1Error> =
  s.object<UsergroupsCreateerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsCreateErrorEnumSchema,
    ok: s.boolean(),
  });
