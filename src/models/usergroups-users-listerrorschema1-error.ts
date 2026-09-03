import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsEnableErrorEnumSchema,
  type UsergroupsEnableErrorEnum,
} from "./usergroups-enable-error-enum.js";

export type UsergroupsUsersListerrorschema1Error = {
  callstack?: string;
  error: UsergroupsEnableErrorEnum;
  ok: "False";
};

export const usergroupsUsersListerrorschema1ErrorSchema: Schema<UsergroupsUsersListerrorschema1Error> =
  s.object<UsergroupsUsersListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsEnableErrorEnumSchema,
    ok: s.literal("False"),
  });
