import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsCreateErrorEnumSchema,
  type UsergroupsCreateErrorEnum,
} from "./usergroups-create-error-enum.js";

/** Schema for error response from usergroups.disable method */
export type UsergroupsDisableerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsCreateErrorEnum;
  ok: boolean;
};

export const usergroupsDisableerrorschema1Schema: Schema<UsergroupsDisableerrorschema1> =
  s.object<UsergroupsDisableerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsCreateErrorEnumSchema,
    ok: s.boolean(),
  });
