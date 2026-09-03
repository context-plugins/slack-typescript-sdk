import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

export type RemindersListerrorschema1 = {
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: "False";
};

export const remindersListerrorschema1Schema: Schema<RemindersListerrorschema1> =
  s.object<RemindersListerrorschema1>({
    callstack: s.optional(s.string()),
    error: appsPermissionsInfoErrorEnumSchema,
    ok: s.literal("False"),
  });
