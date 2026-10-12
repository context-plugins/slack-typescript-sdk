import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

/** Schema for error response from apps.permissions.scopes.list method */
export type AppsPermissionsScopesListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: boolean;
};

export const appsPermissionsScopesListerrorschema1Schema: Schema<AppsPermissionsScopesListerrorschema1> =
  s.object<AppsPermissionsScopesListerrorschema1>({
    callstack: s.optional(s.string()),
    error: appsPermissionsInfoErrorEnumSchema,
    ok: s.boolean(),
  });
