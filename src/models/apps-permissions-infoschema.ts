import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { infoSchema, type Info } from "./info.js";

/** Schema for successful response from apps.permissions.info method */
export type AppsPermissionsInfoschema = {
  info: Info;
  ok: boolean;
};

export const appsPermissionsInfoschemaSchema: Schema<AppsPermissionsInfoschema> =
  s.object<AppsPermissionsInfoschema>({
    info: infoSchema,
    ok: s.boolean(),
  });
