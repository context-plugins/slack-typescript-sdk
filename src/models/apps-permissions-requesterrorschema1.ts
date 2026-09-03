import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsRequestErrorEnumSchema,
  type AppsPermissionsRequestErrorEnum,
} from "./apps-permissions-request-error-enum.js";

export type AppsPermissionsRequesterrorschema1 = {
  callstack?: string;
  error: AppsPermissionsRequestErrorEnum;
  ok: "False";
};

export const appsPermissionsRequesterrorschema1Schema: Schema<AppsPermissionsRequesterrorschema1> =
  s.object<AppsPermissionsRequesterrorschema1>({
    callstack: s.optional(s.string()),
    error: appsPermissionsRequestErrorEnumSchema,
    ok: s.literal("False"),
  });
