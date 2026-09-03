import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appsUninstallErrorEnumSchema, type AppsUninstallErrorEnum } from "./apps-uninstall-error-enum.js";

export type AppsUninstallerrorschema1 = {
  callstack?: string;
  error: AppsUninstallErrorEnum;
  ok: "False";
};

export const appsUninstallerrorschema1Schema: Schema<AppsUninstallerrorschema1> =
  s.object<AppsUninstallerrorschema1>({
    callstack: s.optional(s.string()),
    error: appsUninstallErrorEnumSchema,
    ok: s.literal("False"),
  });
