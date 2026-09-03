import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

export type AppsPermissionsInfoerrorschema1Error = {
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: "False";
};

export const appsPermissionsInfoerrorschema1ErrorSchema: Schema<AppsPermissionsInfoerrorschema1Error> =
  s.object<AppsPermissionsInfoerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: appsPermissionsInfoErrorEnumSchema,
    ok: s.literal("False"),
  });
