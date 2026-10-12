import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from apps.permissions.request method */
export type AppsPermissionsRequestschema = {
  ok: boolean;
};

export const appsPermissionsRequestschemaSchema: Schema<AppsPermissionsRequestschema> =
  s.object<AppsPermissionsRequestschema>({
    ok: s.boolean(),
  });
