import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appsUninstallErrorEnumSchema, type AppsUninstallErrorEnum } from "./apps-uninstall-error-enum.js";

/** Schema for error response from apps.uninstall method */
export type AppsUninstallerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsUninstallErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appsUninstallerrorschema1ErrorSchema: Schema<AppsUninstallerrorschema1Error> =
  s.object<AppsUninstallerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: appsUninstallErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
