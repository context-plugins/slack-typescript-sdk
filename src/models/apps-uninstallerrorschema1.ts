import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appsUninstallErrorEnumSchema, type AppsUninstallErrorEnum } from "./apps-uninstall-error-enum.js";

/** Schema for error response from apps.uninstall method */
export type AppsUninstallerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsUninstallErrorEnum;
  ok: boolean;
};

export const appsUninstallerrorschema1Schema: Schema<AppsUninstallerrorschema1> =
  s.object<AppsUninstallerrorschema1>({
    callstack: s.optional(s.string()),
    error: appsUninstallErrorEnumSchema,
    ok: s.boolean(),
  });
