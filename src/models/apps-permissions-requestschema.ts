import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppsPermissionsRequestschema = {
  ok: "True";
};

export const appsPermissionsRequestschemaSchema: Schema<AppsPermissionsRequestschema> =
  s.object<AppsPermissionsRequestschema>({
    ok: s.literal("True"),
  });
