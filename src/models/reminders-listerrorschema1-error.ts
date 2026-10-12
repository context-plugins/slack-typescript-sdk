import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

/** Schema for error response from reminders.list method */
export type RemindersListerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: boolean;
};

export const remindersListerrorschema1ErrorSchema: Schema<RemindersListerrorschema1Error> =
  s.object<RemindersListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: appsPermissionsInfoErrorEnumSchema,
    ok: s.boolean(),
  });
