import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsEnableErrorEnumSchema,
  type UsergroupsEnableErrorEnum,
} from "./usergroups-enable-error-enum.js";

export type UsergroupsListerrorschema1Error = {
  callstack?: string;
  error: UsergroupsEnableErrorEnum;
  ok: "False";
};

export const usergroupsListerrorschema1ErrorSchema: Schema<UsergroupsListerrorschema1Error> =
  s.object<UsergroupsListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsEnableErrorEnumSchema,
    ok: s.literal("False"),
  });
