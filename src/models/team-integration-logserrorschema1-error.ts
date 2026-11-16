import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  appsPermissionsInfoErrorEnumSchema,
  type AppsPermissionsInfoErrorEnum,
} from "./apps-permissions-info-error-enum.js";

/** Schema for error response from team.integrationLogs method */
export type TeamIntegrationLogserrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AppsPermissionsInfoErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamIntegrationLogserrorschema1ErrorSchema: Schema<TeamIntegrationLogserrorschema1Error> =
  s.object<TeamIntegrationLogserrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: appsPermissionsInfoErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
