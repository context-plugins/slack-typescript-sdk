import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsUpdateErrorEnumSchema,
  type UsergroupsUpdateErrorEnum,
} from "./usergroups-update-error-enum.js";

export type UsergroupsUpdateerrorschema1Error = {
  callstack?: string;
  error: UsergroupsUpdateErrorEnum;
  ok: "False";
};

export const usergroupsUpdateerrorschema1ErrorSchema: Schema<UsergroupsUpdateerrorschema1Error> =
  s.object<UsergroupsUpdateerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usergroupsUpdateErrorEnumSchema,
    ok: s.literal("False"),
  });
