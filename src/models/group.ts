import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  resourcesininfofromappsPermissionsInfoSchema,
  type ResourcesininfofromappsPermissionsInfo,
} from "./resourcesininfofromapps-permissions-info.js";

export type Group = {
  resources?: ResourcesininfofromappsPermissionsInfo;
  scopes?: string[];
};

export const groupSchema: Schema<Group> = s.object<Group>({
  resources: s.optional(s.lazy(() => resourcesininfofromappsPermissionsInfoSchema)),
  scopes: s.optional(s.array(s.string())),
});
