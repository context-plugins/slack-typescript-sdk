import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsEnableErrorEnumSchema,
  type UsergroupsEnableErrorEnum,
} from "./usergroups-enable-error-enum.js";

export type UsergroupsUsersListerrorschema1 = {
  callstack?: string;
  error: UsergroupsEnableErrorEnum;
  ok: "False";
};

export const usergroupsUsersListerrorschema1Schema: Schema<UsergroupsUsersListerrorschema1> =
  s.object<UsergroupsUsersListerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsEnableErrorEnumSchema,
    ok: s.literal("False"),
  });
