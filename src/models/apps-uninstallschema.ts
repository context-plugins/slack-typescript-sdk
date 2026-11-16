import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from apps.uninstall method */
export type AppsUninstallschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appsUninstallschemaSchema: Schema<AppsUninstallschema> = s.object<AppsUninstallschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
