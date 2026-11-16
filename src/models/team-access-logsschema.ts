import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loginInternalSchema, loginSchema, type Login } from "./login.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from team.accessLogs method */
export type TeamAccessLogsschema = {
  logins: Login[];
  ok: boolean;
  paging: Pagingobject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const teamAccessLogsschemaProperties: s.Shape<TeamAccessLogsschema> = {
  logins: s.array(s.lazy(() => loginInternalSchema)),
  ok: s.boolean(),
  paging: pagingobjectSchema,
};

export const teamAccessLogsschemaInternalSchema: Schema<TeamAccessLogsschema> =
  s.object<TeamAccessLogsschema>(teamAccessLogsschemaProperties, { additionalProperties: s.json() });

export const teamAccessLogsschemaSchema: Schema<TeamAccessLogsschema> = s.lazySchema(() =>
  s.object<TeamAccessLogsschema>(
    {
      ...teamAccessLogsschemaProperties,
      logins: s.array(s.lazy(() => loginSchema)).check(s.minLength(1), s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
