import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Login = {
  count: number;
  country: string | null;
  dateFirst: number;
  dateLast: number;
  ip: string | null;
  isp: string | null;
  region: string | null;
  userAgent: string;
  userId: string;
  username: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const loginProperties: s.Shape<Login> = {
  count: s.int(),
  country: s.nullable(s.string()),
  dateFirst: s.int(),
  dateLast: s.int(),
  ip: s.nullable(s.string()),
  isp: s.nullable(s.string()),
  region: s.nullable(s.string()),
  userAgent: s.string(),
  userId: s.string(),
  username: s.string(),
  _keysMap: {
    dateFirst: "date_first",
    dateLast: "date_last",
    userAgent: "user_agent",
    userId: "user_id",
  },
};

export const loginInternalSchema: Schema<Login> = s.object<Login>(loginProperties, {
  additionalProperties: s.json(),
});

export const loginSchema: Schema<Login> = s.lazySchema(() =>
  s.object<Login>(
    {
      ...loginProperties,
      userId: s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
