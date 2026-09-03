import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appsUninstallErrorEnumSchema, type AppsUninstallErrorEnum } from "./apps-uninstall-error-enum.js";

export type AppsUninstallerrorschema1Error = {
  callstack?: string;
  error: AppsUninstallErrorEnum;
  ok: "False";
};

export const appsUninstallerrorschema1ErrorSchema: Schema<AppsUninstallerrorschema1Error> =
  s.object<AppsUninstallerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: appsUninstallErrorEnumSchema,
    ok: s.literal("False"),
  });
