import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logSchema, type Log } from "./log.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from team.integrationLogs method */
export type TeamIntegrationLogsschema = {
  logs: Log[];
  ok: boolean;
  paging: Pagingobject;
};

export const teamIntegrationLogsschemaSchema: Schema<TeamIntegrationLogsschema> =
  s.object<TeamIntegrationLogsschema>({
    logs: s.array(s.lazy(() => logSchema)),
    ok: s.boolean(),
    paging: pagingobjectSchema,
  });
