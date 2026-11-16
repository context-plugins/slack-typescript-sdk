import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  usergroupsUpdateErrorEnumSchema,
  type UsergroupsUpdateErrorEnum,
} from "./usergroups-update-error-enum.js";

/** Schema for error response from usergroups.update method */
export type UsergroupsUpdateerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsergroupsUpdateErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usergroupsUpdateerrorschema1ErrorSchema: Schema<UsergroupsUpdateerrorschema1Error> =
  s.object<UsergroupsUpdateerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: usergroupsUpdateErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
