import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsCreateErrorEnumSchema,
  type UsergroupsCreateErrorEnum,
} from "./usergroups-create-error-enum.js";

export type UsergroupsDisableerrorschema1 = {
  callstack?: string;
  error: UsergroupsCreateErrorEnum;
  ok: "False";
};

export const usergroupsDisableerrorschema1Schema: Schema<UsergroupsDisableerrorschema1> =
  s.object<UsergroupsDisableerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsCreateErrorEnumSchema,
    ok: s.literal("False"),
  });
