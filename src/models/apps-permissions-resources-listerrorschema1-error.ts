import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsResourcesListErrorEnumSchema,
  type AppsPermissionsResourcesListErrorEnum,
} from "./apps-permissions-resources-list-error-enum.js";

export type AppsPermissionsResourcesListerrorschema1Error = {
  callstack?: string;
  error: AppsPermissionsResourcesListErrorEnum;
  ok: "False";
};

export const appsPermissionsResourcesListerrorschema1ErrorSchema: Schema<AppsPermissionsResourcesListerrorschema1Error> =
  s.object<AppsPermissionsResourcesListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: appsPermissionsResourcesListErrorEnumSchema,
    ok: s.literal("False"),
  });
