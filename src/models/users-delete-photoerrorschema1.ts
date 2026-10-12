import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

/** Schema for error response from users.deletePhoto method */
export type UsersDeletePhotoerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: boolean;
};

export const usersDeletePhotoerrorschema1Schema: Schema<UsersDeletePhotoerrorschema1> =
  s.object<UsersDeletePhotoerrorschema1>({
    callstack: s.optional(s.string()),
    error: appsPermissionsInfoErrorEnumSchema,
    ok: s.boolean(),
  });
