import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ObjsEnterpriseUser = {
  enterpriseId: string;
  enterpriseName: string;
  id: string;
  isAdmin: boolean;
  isOwner: boolean;
  teams: string[];
};

export const objsEnterpriseUserSchema: Schema<ObjsEnterpriseUser> = s.object<ObjsEnterpriseUser>({
  enterpriseId: s.string(),
  enterpriseName: s.string(),
  id: s.string(),
  isAdmin: s.boolean(),
  isOwner: s.boolean(),
  teams: s.array(s.string()),
  _keysMap: {
    enterpriseId: "enterprise_id",
    enterpriseName: "enterprise_name",
    isAdmin: "is_admin",
    isOwner: "is_owner",
  },
});
