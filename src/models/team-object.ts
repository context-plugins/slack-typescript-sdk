import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalOrgMigrationsSchema, type ExternalOrgMigrations } from "./external-org-migrations.js";
import { objsIconSchema, type ObjsIcon } from "./objs-icon.js";
import { objsPrimaryOwnerSchema, type ObjsPrimaryOwner } from "./objs-primary-owner.js";
import { planSchema, type Plan } from "./plan.js";
import { ssoProviderSchema, type SsoProvider } from "./sso-provider.js";

export type TeamObject = {
  archived?: boolean;
  avatarBaseUrl?: string;
  created?: number;
  dateCreate?: number;
  deleted?: boolean;
  description?: string | null;
  discoverable?: Record<string, unknown>;
  domain: string;
  emailDomain: string;
  enterpriseId?: string;
  enterpriseName?: string;
  externalOrgMigrations?: ExternalOrgMigrations;
  hasComplianceExport?: boolean;
  icon: ObjsIcon;
  id: string;
  isAssigned?: boolean;
  isEnterprise?: number;
  isOverStorageLimit?: boolean;
  limitTs?: number;
  locale?: string;
  messagesCount?: number;
  msgEditWindowMins?: number;
  name: string;
  overIntegrationsLimit?: boolean;
  overStorageLimit?: boolean;
  payProdCur?: string;
  plan?: Plan;
  primaryOwner?: ObjsPrimaryOwner;
  ssoProvider?: SsoProvider;
};

export const teamObjectSchema: Schema<TeamObject> = s.object<TeamObject>({
  archived: s.optional(s.boolean()),
  avatarBaseUrl: s.optional(s.string()),
  created: s.optional(s.int()),
  dateCreate: s.optional(s.int()),
  deleted: s.optional(s.boolean()),
  description: s.optionalNullable(s.string()),
  discoverable: s.optional(s.record(s.string(), s.unknown())),
  domain: s.string(),
  emailDomain: s.string(),
  enterpriseId: s.optional(s.string()),
  enterpriseName: s.optional(s.string()),
  externalOrgMigrations: s.optional(s.lazy(() => externalOrgMigrationsSchema)),
  hasComplianceExport: s.optional(s.boolean()),
  icon: objsIconSchema,
  id: s.string(),
  isAssigned: s.optional(s.boolean()),
  isEnterprise: s.optional(s.int()),
  isOverStorageLimit: s.optional(s.boolean()),
  limitTs: s.optional(s.int()),
  locale: s.optional(s.string()),
  messagesCount: s.optional(s.int()),
  msgEditWindowMins: s.optional(s.int()),
  name: s.string(),
  overIntegrationsLimit: s.optional(s.boolean()),
  overStorageLimit: s.optional(s.boolean()),
  payProdCur: s.optional(s.string()),
  plan: s.optional(s.lazy(() => planSchema)),
  primaryOwner: s.optional(s.lazy(() => objsPrimaryOwnerSchema)),
  ssoProvider: s.optional(s.lazy(() => ssoProviderSchema)),
  _keysMap: {
    avatarBaseUrl: "avatar_base_url",
    dateCreate: "date_create",
    emailDomain: "email_domain",
    enterpriseId: "enterprise_id",
    enterpriseName: "enterprise_name",
    externalOrgMigrations: "external_org_migrations",
    hasComplianceExport: "has_compliance_export",
    isAssigned: "is_assigned",
    isEnterprise: "is_enterprise",
    isOverStorageLimit: "is_over_storage_limit",
    limitTs: "limit_ts",
    messagesCount: "messages_count",
    msgEditWindowMins: "msg_edit_window_mins",
    overIntegrationsLimit: "over_integrations_limit",
    overStorageLimit: "over_storage_limit",
    payProdCur: "pay_prod_cur",
    primaryOwner: "primary_owner",
    ssoProvider: "sso_provider",
  },
});
