import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loginSchema, type Login } from "./login.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from team.accessLogs method */
export type TeamAccessLogsschema = {
  logins: Login[];
  ok: boolean;
  paging: Pagingobject;
};

export const teamAccessLogsschemaSchema: Schema<TeamAccessLogsschema> = s.object<TeamAccessLogsschema>({
  logins: s.array(s.lazy(() => loginSchema)),
  ok: s.boolean(),
  paging: pagingobjectSchema,
});
