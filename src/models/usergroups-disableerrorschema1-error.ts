import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsCreateErrorEnumSchema,
  type UsergroupsCreateErrorEnum,
} from "./usergroups-create-error-enum.js";

/** Schema for error response from usergroups.disable method */
export type UsergroupsDisableerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsCreateErrorEnum;
  ok: boolean;
};

export const usergroupsDisableerrorschema1ErrorSchema: Schema<UsergroupsDisableerrorschema1Error> =
  s.object<UsergroupsDisableerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsCreateErrorEnumSchema,
    ok: s.boolean(),
  });
