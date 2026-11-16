import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ObjsEnterpriseUser = {
  enterpriseId: string;
  enterpriseName: string;
  id: string;
  isAdmin: boolean;
  isOwner: boolean;
  teams: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const objsEnterpriseUserProperties: s.Shape<ObjsEnterpriseUser> = {
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
};

export const objsEnterpriseUserInternalSchema: Schema<ObjsEnterpriseUser> = s.object<ObjsEnterpriseUser>(
  objsEnterpriseUserProperties,
  { additionalProperties: s.json() },
);

export const objsEnterpriseUserSchema: Schema<ObjsEnterpriseUser> = s.lazySchema(() =>
  s.object<ObjsEnterpriseUser>(
    {
      ...objsEnterpriseUserProperties,
      enterpriseId: s.string().check(s.pattern("^[E][A-Z0-9]{8,}$")),
      id: s.string().check(s.pattern("^[WU][A-Z0-9]{8,}$")),
      teams: s.array(s.string().check(s.pattern("^[T][A-Z0-9]{2,}$"))).check(s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
