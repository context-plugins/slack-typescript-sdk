import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from apps.uninstall method */
export type AppsUninstallschema = {
  ok: boolean;
};

export const appsUninstallschemaSchema: Schema<AppsUninstallschema> = s.object<AppsUninstallschema>({
  ok: s.boolean(),
});
