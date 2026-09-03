import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsCreateErrorEnumSchema,
  type UsergroupsCreateErrorEnum,
} from "./usergroups-create-error-enum.js";

export type UsergroupsCreateerrorschema1 = {
  callstack?: string;
  error: UsergroupsCreateErrorEnum;
  ok: "False";
};

export const usergroupsCreateerrorschema1Schema: Schema<UsergroupsCreateerrorschema1> =
  s.object<UsergroupsCreateerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsCreateErrorEnumSchema,
    ok: s.literal("False"),
  });
