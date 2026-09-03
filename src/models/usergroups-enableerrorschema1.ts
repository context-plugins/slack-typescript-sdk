import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsEnableErrorEnumSchema,
  type UsergroupsEnableErrorEnum,
} from "./usergroups-enable-error-enum.js";

export type UsergroupsEnableerrorschema1 = {
  callstack?: string;
  error: UsergroupsEnableErrorEnum;
  ok: "False";
};

export const usergroupsEnableerrorschema1Schema: Schema<UsergroupsEnableerrorschema1> =
  s.object<UsergroupsEnableerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsEnableErrorEnumSchema,
    ok: s.literal("False"),
  });
