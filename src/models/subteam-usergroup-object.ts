import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prefsSchema, type Prefs } from "./prefs.js";

export type SubteamUsergroupObject = {
  autoProvision: boolean;
  autoType: Record<string, unknown>;
  channelCount?: number;
  createdBy: string;
  dateCreate: number;
  dateDelete: number;
  dateUpdate: number;
  deletedBy: Record<string, unknown>;
  description: string;
  enterpriseSubteamId: string;
  handle: string;
  id: string;
  isExternal: boolean;
  isSubteam: boolean;
  isUsergroup: boolean;
  name: string;
  prefs: Prefs;
  teamId: string;
  updatedBy: string;
  userCount?: number;
  users?: string[];
};

export const subteamUsergroupObjectSchema: Schema<SubteamUsergroupObject> = s.object<SubteamUsergroupObject>({
  autoProvision: s.boolean(),
  autoType: s.record(s.string(), s.unknown()),
  channelCount: s.optional(s.int()),
  createdBy: s.string(),
  dateCreate: s.int(),
  dateDelete: s.int(),
  dateUpdate: s.int(),
  deletedBy: s.record(s.string(), s.unknown()),
  description: s.string(),
  enterpriseSubteamId: s.string(),
  handle: s.string(),
  id: s.string(),
  isExternal: s.boolean(),
  isSubteam: s.boolean(),
  isUsergroup: s.boolean(),
  name: s.string(),
  prefs: prefsSchema,
  teamId: s.string(),
  updatedBy: s.string(),
  userCount: s.optional(s.int()),
  users: s.optional(s.array(s.string())),
  _keysMap: {
    autoProvision: "auto_provision",
    autoType: "auto_type",
    channelCount: "channel_count",
    createdBy: "created_by",
    dateCreate: "date_create",
    dateDelete: "date_delete",
    dateUpdate: "date_update",
    deletedBy: "deleted_by",
    enterpriseSubteamId: "enterprise_subteam_id",
    isExternal: "is_external",
    isSubteam: "is_subteam",
    isUsergroup: "is_usergroup",
    teamId: "team_id",
    updatedBy: "updated_by",
    userCount: "user_count",
  },
});
