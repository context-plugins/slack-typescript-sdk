import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { infoSchema, type Info } from "./info.js";

export type AppsPermissionsInfoschema = {
  info: Info;
  ok: "True";
};

export const appsPermissionsInfoschemaSchema: Schema<AppsPermissionsInfoschema> =
  s.object<AppsPermissionsInfoschema>({
    info: infoSchema,
    ok: s.literal("True"),
  });
