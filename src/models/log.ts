import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Log = {
  adminAppId?: string;
  appId: string;
  appType: string;
  changeType: string;
  channel?: string;
  date: string;
  scope: string;
  serviceId?: string;
  serviceType?: string;
  userId: string;
  userName: string;
};

export const logSchema: Schema<Log> = s.object<Log>({
  adminAppId: s.optional(s.string()),
  appId: s.string(),
  appType: s.string(),
  changeType: s.string(),
  channel: s.optional(s.string()),
  date: s.string(),
  scope: s.string(),
  serviceId: s.optional(s.string()),
  serviceType: s.optional(s.string()),
  userId: s.string(),
  userName: s.string(),
  _keysMap: {
    adminAppId: "admin_app_id",
    appId: "app_id",
    appType: "app_type",
    changeType: "change_type",
    serviceId: "service_id",
    serviceType: "service_type",
    userId: "user_id",
    userName: "user_name",
  },
});
