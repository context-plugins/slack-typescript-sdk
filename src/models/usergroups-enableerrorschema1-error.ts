import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  usergroupsEnableErrorEnumSchema,
  type UsergroupsEnableErrorEnum,
} from "./usergroups-enable-error-enum.js";

/** Schema for error response from usergroups.enable method */
export type UsergroupsEnableerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsEnableErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usergroupsEnableerrorschema1ErrorSchema: Schema<UsergroupsEnableerrorschema1Error> =
  s.object<UsergroupsEnableerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: usergroupsEnableErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
