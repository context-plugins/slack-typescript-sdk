import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
};

export const loginSchema: Schema<Login> = s.object<Login>({
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
});
