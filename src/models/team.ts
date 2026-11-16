import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resourcesininfofromappsPermissionsInfoSchema,
  type ResourcesininfofromappsPermissionsInfo,
} from "./resourcesininfofromapps-permissions-info.js";

export type Team = {
  resources: ResourcesininfofromappsPermissionsInfo;
  scopes: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamSchema: Schema<Team> = s.object<Team>(
  {
    resources: resourcesininfofromappsPermissionsInfoSchema,
    scopes: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
