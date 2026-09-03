import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

export type AppsPermissionsScopesListerrorschema1Error = {
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: "False";
};

export const appsPermissionsScopesListerrorschema1ErrorSchema: Schema<AppsPermissionsScopesListerrorschema1Error> =
  s.object<AppsPermissionsScopesListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: appsPermissionsInfoErrorEnumSchema,
    ok: s.literal("False"),
  });
