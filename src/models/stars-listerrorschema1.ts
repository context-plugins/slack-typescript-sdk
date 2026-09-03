import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

export type StarsListerrorschema1 = {
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: "False";
};

export const starsListerrorschema1Schema: Schema<StarsListerrorschema1> = s.object<StarsListerrorschema1>({
  callstack: s.optional(s.string()),
  error: appsPermissionsInfoErrorEnumSchema,
  ok: s.literal("False"),
});
