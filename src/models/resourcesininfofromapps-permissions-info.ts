import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourcesininfofromappsPermissionsInfo = {
  excludedIds?: Record<string, unknown>[];
  ids: Record<string, unknown>[];
  wildcard?: boolean;
};

export const resourcesininfofromappsPermissionsInfoSchema: Schema<ResourcesininfofromappsPermissionsInfo> =
  s.object<ResourcesininfofromappsPermissionsInfo>({
    excludedIds: s.optional(s.array(s.record(s.string(), s.unknown()))),
    ids: s.array(s.record(s.string(), s.unknown())),
    wildcard: s.optional(s.boolean()),
    _keysMap: {
      excludedIds: "excluded_ids",
    },
  });
