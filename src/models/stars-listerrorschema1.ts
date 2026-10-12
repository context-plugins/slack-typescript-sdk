import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

/** Schema for error response from stars.list method */
export type StarsListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: boolean;
};

export const starsListerrorschema1Schema: Schema<StarsListerrorschema1> = s.object<StarsListerrorschema1>({
  callstack: s.optional(s.string()),
  error: appsPermissionsInfoErrorEnumSchema,
  ok: s.boolean(),
});
