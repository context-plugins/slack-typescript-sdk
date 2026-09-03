import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsEnableErrorEnumSchema,
  type UsergroupsEnableErrorEnum,
} from "./usergroups-enable-error-enum.js";

export type UsergroupsEnableerrorschema1Error = {
  callstack?: string;
  error: UsergroupsEnableErrorEnum;
  ok: "False";
};

export const usergroupsEnableerrorschema1ErrorSchema: Schema<UsergroupsEnableerrorschema1Error> =
  s.object<UsergroupsEnableerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsEnableErrorEnumSchema,
    ok: s.literal("False"),
  });
