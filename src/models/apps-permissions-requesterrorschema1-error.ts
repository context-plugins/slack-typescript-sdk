import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsRequestErrorEnumSchema,
  type AppsPermissionsRequestErrorEnum,
} from "./apps-permissions-request-error-enum.js";

/** Schema for error response from apps.permissions.request method */
export type AppsPermissionsRequesterrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsPermissionsRequestErrorEnum;
  ok: boolean;
};

export const appsPermissionsRequesterrorschema1ErrorSchema: Schema<AppsPermissionsRequesterrorschema1Error> =
  s.object<AppsPermissionsRequesterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: appsPermissionsRequestErrorEnumSchema,
    ok: s.boolean(),
  });
