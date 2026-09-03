import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loginSchema, type Login } from "./login.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

export type TeamAccessLogsschema = {
  logins: Login[];
  ok: "True";
  paging: Pagingobject;
};

export const teamAccessLogsschemaSchema: Schema<TeamAccessLogsschema> = s.object<TeamAccessLogsschema>({
  logins: s.array(s.lazy(() => loginSchema)),
  ok: s.literal("True"),
  paging: pagingobjectSchema,
});
