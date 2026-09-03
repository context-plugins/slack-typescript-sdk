import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsCreateErrorEnumSchema,
  type UsergroupsCreateErrorEnum,
} from "./usergroups-create-error-enum.js";

export type UsergroupsCreateerrorschema1Error = {
  callstack?: string;
  error: UsergroupsCreateErrorEnum;
  ok: "False";
};

export const usergroupsCreateerrorschema1ErrorSchema: Schema<UsergroupsCreateerrorschema1Error> =
  s.object<UsergroupsCreateerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsCreateErrorEnumSchema,
    ok: s.literal("False"),
  });
