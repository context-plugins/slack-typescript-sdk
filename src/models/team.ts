import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  resourcesininfofromappsPermissionsInfoSchema,
  type ResourcesininfofromappsPermissionsInfo,
} from "./resourcesininfofromapps-permissions-info.js";

export type Team = {
  resources: ResourcesininfofromappsPermissionsInfo;
  scopes: string[];
};

export const teamSchema: Schema<Team> = s.object<Team>({
  resources: resourcesininfofromappsPermissionsInfoSchema,
  scopes: s.array(s.string()),
});
