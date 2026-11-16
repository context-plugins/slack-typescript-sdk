import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourcesininfofromappsPermissionsInfo = {
  excludedIds?: Record<string, unknown>[];
  ids: Record<string, unknown>[];
  wildcard?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourcesininfofromappsPermissionsInfoSchema: Schema<ResourcesininfofromappsPermissionsInfo> =
  s.object<ResourcesininfofromappsPermissionsInfo>(
    {
      excludedIds: s.optional(s.array(s.record(s.string(), s.unknown()))),
      ids: s.array(s.record(s.string(), s.unknown())),
      wildcard: s.optional(s.boolean()),
      _keysMap: {
        excludedIds: "excluded_ids",
      },
    },
    { additionalProperties: s.json() },
  );
