import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  usergroupsEnableErrorEnumSchema,
  type UsergroupsEnableErrorEnum,
} from "./usergroups-enable-error-enum.js";

/** Schema for error response from usergroups.users.list method */
export type UsergroupsUsersListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsEnableErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usergroupsUsersListerrorschema1Schema: Schema<UsergroupsUsersListerrorschema1> =
  s.object<UsergroupsUsersListerrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: usergroupsEnableErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
