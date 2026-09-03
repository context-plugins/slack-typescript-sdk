import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usergroupsUpdateErrorEnumSchema,
  type UsergroupsUpdateErrorEnum,
} from "./usergroups-update-error-enum.js";

export type UsergroupsUpdateerrorschema1 = {
  callstack?: string;
  error: UsergroupsUpdateErrorEnum;
  ok: "False";
};

export const usergroupsUpdateerrorschema1Schema: Schema<UsergroupsUpdateerrorschema1> =
  s.object<UsergroupsUpdateerrorschema1>({
    callstack: s.optional(s.string()),
    error: usergroupsUpdateErrorEnumSchema,
    ok: s.literal("False"),
  });
