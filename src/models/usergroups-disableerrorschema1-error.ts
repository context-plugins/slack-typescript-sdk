import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsCreateErrorEnumSchema,
  type UsergroupsCreateErrorEnum,
} from "./usergroups-create-error-enum.js";

export type UsergroupsDisableerrorschema1Error = {
  callstack?: string;
  error: UsergroupsCreateErrorEnum;
  ok: "False";
};

export const usergroupsDisableerrorschema1ErrorSchema: Schema<UsergroupsDisableerrorschema1Error> =
  s.object<UsergroupsDisableerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsCreateErrorEnumSchema,
    ok: s.literal("False"),
  });
