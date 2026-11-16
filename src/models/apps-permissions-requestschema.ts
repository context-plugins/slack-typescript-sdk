import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from apps.permissions.request method */
export type AppsPermissionsRequestschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appsPermissionsRequestschemaSchema: Schema<AppsPermissionsRequestschema> =
  s.object<AppsPermissionsRequestschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
