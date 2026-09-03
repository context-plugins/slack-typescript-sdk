import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsResourcesListErrorEnumSchema,
  type AppsPermissionsResourcesListErrorEnum,
} from "./apps-permissions-resources-list-error-enum.js";

export type AppsPermissionsResourcesListerrorschema1 = {
  callstack?: string;
  error: AppsPermissionsResourcesListErrorEnum;
  ok: "False";
};

export const appsPermissionsResourcesListerrorschema1Schema: Schema<AppsPermissionsResourcesListerrorschema1> =
  s.object<AppsPermissionsResourcesListerrorschema1>({
    callstack: s.optional(s.string()),
    error: appsPermissionsResourcesListErrorEnumSchema,
    ok: s.literal("False"),
  });
