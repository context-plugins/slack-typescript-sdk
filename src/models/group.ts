import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resourcesininfofromappsPermissionsInfoSchema,
  type ResourcesininfofromappsPermissionsInfo,
} from "./resourcesininfofromapps-permissions-info.js";

export type Group = {
  resources?: ResourcesininfofromappsPermissionsInfo;
  scopes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSchema: Schema<Group> = s.object<Group>(
  {
    resources: s.optional(s.lazy(() => resourcesininfofromappsPermissionsInfoSchema)),
    scopes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
