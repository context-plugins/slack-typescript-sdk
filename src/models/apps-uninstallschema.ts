import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppsUninstallschema = {
  ok: "True";
};

export const appsUninstallschemaSchema: Schema<AppsUninstallschema> = s.object<AppsUninstallschema>({
  ok: s.literal("True"),
});
