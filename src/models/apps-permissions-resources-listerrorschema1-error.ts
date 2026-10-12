import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsResourcesListErrorEnumSchema,
  type AppsPermissionsResourcesListErrorEnum,
} from "./apps-permissions-resources-list-error-enum.js";

/** Schema for error response from apps.permissions.resources.list method */
export type AppsPermissionsResourcesListerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsPermissionsResourcesListErrorEnum;
  ok: boolean;
};

export const appsPermissionsResourcesListerrorschema1ErrorSchema: Schema<AppsPermissionsResourcesListerrorschema1Error> =
  s.object<AppsPermissionsResourcesListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: appsPermissionsResourcesListErrorEnumSchema,
    ok: s.boolean(),
  });
