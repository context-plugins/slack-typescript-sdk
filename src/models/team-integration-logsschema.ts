import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logSchema, type Log } from "./log.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

export type TeamIntegrationLogsschema = {
  logs: Log[];
  ok: "True";
  paging: Pagingobject;
};

export const teamIntegrationLogsschemaSchema: Schema<TeamIntegrationLogsschema> =
  s.object<TeamIntegrationLogsschema>({
    logs: s.array(s.lazy(() => logSchema)),
    ok: s.literal("True"),
    paging: pagingobjectSchema,
  });
