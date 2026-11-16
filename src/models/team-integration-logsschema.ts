import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logInternalSchema, logSchema, type Log } from "./log.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from team.integrationLogs method */
export type TeamIntegrationLogsschema = {
  logs: Log[];
  ok: boolean;
  paging: Pagingobject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const teamIntegrationLogsschemaProperties: s.Shape<TeamIntegrationLogsschema> = {
  logs: s.array(s.lazy(() => logInternalSchema)),
  ok: s.boolean(),
  paging: pagingobjectSchema,
};

export const teamIntegrationLogsschemaInternalSchema: Schema<TeamIntegrationLogsschema> =
  s.object<TeamIntegrationLogsschema>(teamIntegrationLogsschemaProperties, {
    additionalProperties: s.json(),
  });

export const teamIntegrationLogsschemaSchema: Schema<TeamIntegrationLogsschema> = s.lazySchema(() =>
  s.object<TeamIntegrationLogsschema>(
    {
      ...teamIntegrationLogsschemaProperties,
      logs: s.array(s.lazy(() => logSchema)).check(s.minLength(1), s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
