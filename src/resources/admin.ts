import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  adminConversationsArchiveerrorschema1Schema,
  type AdminConversationsArchiveerrorschema1,
} from "../models/admin-conversations-archiveerrorschema1.js";
import {
  adminConversationsArchiveschemaSchema,
  type AdminConversationsArchiveschema,
} from "../models/admin-conversations-archiveschema.js";
import {
  adminConversationsConvertToPrivateerrorschema1Schema,
  type AdminConversationsConvertToPrivateerrorschema1,
} from "../models/admin-conversations-convert-to-privateerrorschema1.js";
import {
  adminConversationsConvertToPrivateschemaSchema,
  type AdminConversationsConvertToPrivateschema,
} from "../models/admin-conversations-convert-to-privateschema.js";
import {
  adminConversationsCreateerrorschema1Schema,
  type AdminConversationsCreateerrorschema1,
} from "../models/admin-conversations-createerrorschema1.js";
import {
  adminConversationsCreateschemaSchema,
  type AdminConversationsCreateschema,
} from "../models/admin-conversations-createschema.js";
import {
  adminConversationsDeleteerrorschema1Schema,
  type AdminConversationsDeleteerrorschema1,
} from "../models/admin-conversations-deleteerrorschema1.js";
import {
  adminConversationsDeleteschemaSchema,
  type AdminConversationsDeleteschema,
} from "../models/admin-conversations-deleteschema.js";
import {
  adminConversationsDisconnectSharederrorschema1Schema,
  type AdminConversationsDisconnectSharederrorschema1,
} from "../models/admin-conversations-disconnect-sharederrorschema1.js";
import {
  adminConversationsGetConversationPrefsschemaSchema,
  type AdminConversationsGetConversationPrefsschema,
} from "../models/admin-conversations-get-conversation-prefsschema.js";
import {
  adminConversationsGetTeamserrorschema1Schema,
  type AdminConversationsGetTeamserrorschema1,
} from "../models/admin-conversations-get-teamserrorschema1.js";
import {
  adminConversationsGetTeamsschemaSchema,
  type AdminConversationsGetTeamsschema,
} from "../models/admin-conversations-get-teamsschema.js";
import {
  adminConversationsInviteerrorschema1Schema,
  type AdminConversationsInviteerrorschema1,
} from "../models/admin-conversations-inviteerrorschema1.js";
import {
  adminConversationsInviteschemaSchema,
  type AdminConversationsInviteschema,
} from "../models/admin-conversations-inviteschema.js";
import {
  adminConversationsRenameschemaSchema,
  type AdminConversationsRenameschema,
} from "../models/admin-conversations-renameschema.js";
import {
  adminConversationsRenameschema1Schema,
  type AdminConversationsRenameschema1,
} from "../models/admin-conversations-renameschema1.js";
import {
  adminConversationsSearcherrorschema1Schema,
  type AdminConversationsSearcherrorschema1,
} from "../models/admin-conversations-searcherrorschema1.js";
import {
  adminConversationsSearchschemaSchema,
  type AdminConversationsSearchschema,
} from "../models/admin-conversations-searchschema.js";
import {
  adminConversationsSetConversationPrefserrorschema1Schema,
  type AdminConversationsSetConversationPrefserrorschema1,
} from "../models/admin-conversations-set-conversation-prefserrorschema1.js";
import {
  adminConversationsSetConversationPrefsschemaSchema,
  type AdminConversationsSetConversationPrefsschema,
} from "../models/admin-conversations-set-conversation-prefsschema.js";
import {
  adminConversationsUnarchiveerrorschema1Schema,
  type AdminConversationsUnarchiveerrorschema1,
} from "../models/admin-conversations-unarchiveerrorschema1.js";
import {
  adminConversationsUnarchiveerrorschema21Schema,
  type AdminConversationsUnarchiveerrorschema21,
} from "../models/admin-conversations-unarchiveerrorschema21.js";
import {
  adminConversationsUnarchiveerrorschema31Schema,
  type AdminConversationsUnarchiveerrorschema31,
} from "../models/admin-conversations-unarchiveerrorschema31.js";
import {
  adminConversationsUnarchiveschemaSchema,
  type AdminConversationsUnarchiveschema,
} from "../models/admin-conversations-unarchiveschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class Admin {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminAppsApprove(
    request: Admin.AdminAppsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.apps.approve"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "app_id", value: request.appId, schema: s.optional(s.string()) },
            { name: "request_id", value: request.requestId, schema: s.optional(s.string()) },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminAppsApproveError,
      },
      options,
    );
  }

  adminAppsApprovedList(
    request: Admin.AdminAppsApprovedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsApprovedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.apps.approved.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "enterprise_id", value: request.enterpriseId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminAppsApprovedListError,
      },
      options,
    );
  }

  adminAppsRequestsList(
    request: Admin.AdminAppsRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.apps.requests.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminAppsRequestsListError,
      },
      options,
    );
  }

  adminAppsRestrict(
    request: Admin.AdminAppsRestrictRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRestrictError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.apps.restrict"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "app_id", value: request.appId, schema: s.optional(s.string()) },
            { name: "request_id", value: request.requestId, schema: s.optional(s.string()) },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminAppsRestrictError,
      },
      options,
    );
  }

  adminAppsRestrictedList(
    request: Admin.AdminAppsRestrictedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRestrictedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.apps.restricted.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "enterprise_id", value: request.enterpriseId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminAppsRestrictedListError,
      },
      options,
    );
  }

  adminConversationsArchive(
    request: Admin.AdminConversationsArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsArchiveschema, Admin.AdminConversationsArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.archive"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel_id", value: request.channelId, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsArchiveschemaSchema },
        errorFactory: Admin.AdminConversationsArchiveError,
      },
      options,
    );
  }

  adminConversationsConvertToPrivate(
    request: Admin.AdminConversationsConvertToPrivateRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsConvertToPrivateschema, Admin.AdminConversationsConvertToPrivateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.convertToPrivate"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel_id", value: request.channelId, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsConvertToPrivateschemaSchema },
        errorFactory: Admin.AdminConversationsConvertToPrivateError,
      },
      options,
    );
  }

  adminConversationsCreate(
    request: Admin.AdminConversationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsCreateschema, Admin.AdminConversationsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.create"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "name", value: request.name, schema: s.string() },
            { name: "is_private", value: request.isPrivate, schema: s.boolean() },
            { name: "description", value: request.description, schema: s.optional(s.string()) },
            { name: "org_wide", value: request.orgWide, schema: s.optional(s.boolean()) },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsCreateschemaSchema },
        errorFactory: Admin.AdminConversationsCreateError,
      },
      options,
    );
  }

  adminConversationsDelete(
    request: Admin.AdminConversationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsDeleteschema, Admin.AdminConversationsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.delete"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel_id", value: request.channelId, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsDeleteschemaSchema },
        errorFactory: Admin.AdminConversationsDeleteError,
      },
      options,
    );
  }

  adminConversationsDisconnectShared(
    request: Admin.AdminConversationsDisconnectSharedRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsRenameschema, Admin.AdminConversationsDisconnectSharedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.disconnectShared"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel_id", value: request.channelId, schema: s.string() },
            { name: "leaving_team_ids", value: request.leavingTeamIds, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsRenameschemaSchema },
        errorFactory: Admin.AdminConversationsDisconnectSharedError,
      },
      options,
    );
  }

  adminConversationsEkmListOriginalConnectedChannelInfo(
    request: Admin.AdminConversationsEkmListOriginalConnectedChannelInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.conversations.ekm.listOriginalConnectedChannelInfo"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel_ids", value: request.channelIds, schema: s.optional(s.string()) },
          { name: "team_ids", value: request.teamIds, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError,
      },
      options,
    );
  }

  adminConversationsGetConversationPrefs(
    request: Admin.AdminConversationsGetConversationPrefsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdminConversationsGetConversationPrefsschema,
    Admin.AdminConversationsGetConversationPrefsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.conversations.getConversationPrefs"),
        auth: this.#auth.slackAuth,
        query: [{ name: "channel_id", value: request.channelId, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminConversationsGetConversationPrefsschemaSchema },
        errorFactory: Admin.AdminConversationsGetConversationPrefsError,
      },
      options,
    );
  }

  adminConversationsGetTeams(
    request: Admin.AdminConversationsGetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsGetTeamsschema, Admin.AdminConversationsGetTeamsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.conversations.getTeams"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "channel_id", value: request.channelId, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminConversationsGetTeamsschemaSchema },
        errorFactory: Admin.AdminConversationsGetTeamsError,
      },
      options,
    );
  }

  adminConversationsInvite(
    request: Admin.AdminConversationsInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsInviteschema, Admin.AdminConversationsInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.invite"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "user_ids", value: request.userIds, schema: s.string() },
            { name: "channel_id", value: request.channelId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsInviteschemaSchema },
        errorFactory: Admin.AdminConversationsInviteError,
      },
      options,
    );
  }

  adminConversationsRename(
    request: Admin.AdminConversationsRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsRenameschema1, Admin.AdminConversationsRenameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.rename"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel_id", value: request.channelId, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsRenameschema1Schema },
        errorFactory: Admin.AdminConversationsRenameError,
      },
      options,
    );
  }

  adminConversationsRestrictAccessAddGroup(
    request: Admin.AdminConversationsRestrictAccessAddGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessAddGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.restrictAccess.addGroup"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "group_id", value: request.groupId, schema: s.string() },
            { name: "channel_id", value: request.channelId, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminConversationsRestrictAccessAddGroupError,
      },
      options,
    );
  }

  adminConversationsRestrictAccessListGroups(
    request: Admin.AdminConversationsRestrictAccessListGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessListGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.conversations.restrictAccess.listGroups"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel_id", value: request.channelId, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminConversationsRestrictAccessListGroupsError,
      },
      options,
    );
  }

  adminConversationsRestrictAccessRemoveGroup(
    request: Admin.AdminConversationsRestrictAccessRemoveGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessRemoveGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.restrictAccess.removeGroup"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "group_id", value: request.groupId, schema: s.string() },
            { name: "channel_id", value: request.channelId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminConversationsRestrictAccessRemoveGroupError,
      },
      options,
    );
  }

  adminConversationsSearch(
    request: Admin.AdminConversationsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsSearchschema, Admin.AdminConversationsSearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.conversations.search"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "team_ids", value: request.teamIds, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "search_channel_types", value: request.searchChannelTypes, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "sort_dir", value: request.sortDir, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminConversationsSearchschemaSchema },
        errorFactory: Admin.AdminConversationsSearchError,
      },
      options,
    );
  }

  adminConversationsSetConversationPrefs(
    request: Admin.AdminConversationsSetConversationPrefsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdminConversationsSetConversationPrefsschema,
    Admin.AdminConversationsSetConversationPrefsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.setConversationPrefs"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel_id", value: request.channelId, schema: s.string() },
            { name: "prefs", value: request.prefs, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsSetConversationPrefsschemaSchema },
        errorFactory: Admin.AdminConversationsSetConversationPrefsError,
      },
      options,
    );
  }

  adminConversationsSetTeams(
    request: Admin.AdminConversationsSetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsSetTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.setTeams"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel_id", value: request.channelId, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
            { name: "target_team_ids", value: request.targetTeamIds, schema: s.optional(s.string()) },
            { name: "org_channel", value: request.orgChannel, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminConversationsSetTeamsError,
      },
      options,
    );
  }

  adminConversationsUnarchive(
    request: Admin.AdminConversationsUnarchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsUnarchiveschema, Admin.AdminConversationsUnarchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.unarchive"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel_id", value: request.channelId, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: adminConversationsUnarchiveschemaSchema },
        errorFactory: Admin.AdminConversationsUnarchiveError,
      },
      options,
    );
  }

  adminEmojiAdd(
    request: Admin.AdminEmojiAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.emoji.add"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
            { name: "url", value: request.url, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminEmojiAddError,
      },
      options,
    );
  }

  adminEmojiAddAlias(
    request: Admin.AdminEmojiAddAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiAddAliasError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.emoji.addAlias"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
            { name: "alias_for", value: request.aliasFor, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminEmojiAddAliasError,
      },
      options,
    );
  }

  adminEmojiList(
    request: Admin.AdminEmojiListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.emoji.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminEmojiListError,
      },
      options,
    );
  }

  adminEmojiRemove(
    request: Admin.AdminEmojiRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.emoji.remove"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminEmojiRemoveError,
      },
      options,
    );
  }

  adminEmojiRename(
    request: Admin.AdminEmojiRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiRenameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.emoji.rename"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
            { name: "new_name", value: request.newName, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminEmojiRenameError,
      },
      options,
    );
  }

  adminInviteRequestsApprove(
    request: Admin.AdminInviteRequestsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.inviteRequests.approve"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "invite_request_id", value: request.inviteRequestId, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminInviteRequestsApproveError,
      },
      options,
    );
  }

  adminInviteRequestsApprovedList(
    request: Admin.AdminInviteRequestsApprovedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsApprovedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.inviteRequests.approved.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminInviteRequestsApprovedListError,
      },
      options,
    );
  }

  adminInviteRequestsDeniedList(
    request: Admin.AdminInviteRequestsDeniedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsDeniedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.inviteRequests.denied.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminInviteRequestsDeniedListError,
      },
      options,
    );
  }

  adminInviteRequestsDeny(
    request: Admin.AdminInviteRequestsDenyRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsDenyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.inviteRequests.deny"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "invite_request_id", value: request.inviteRequestId, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminInviteRequestsDenyError,
      },
      options,
    );
  }

  adminInviteRequestsList(
    request: Admin.AdminInviteRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.inviteRequests.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminInviteRequestsListError,
      },
      options,
    );
  }

  adminTeamsAdminsList(
    request: Admin.AdminTeamsAdminsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsAdminsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.teams.admins.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsAdminsListError,
      },
      options,
    );
  }

  adminTeamsCreate(
    request: Admin.AdminTeamsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.create"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_domain", value: request.teamDomain, schema: s.string() },
            { name: "team_name", value: request.teamName, schema: s.string() },
            { name: "team_description", value: request.teamDescription, schema: s.optional(s.string()) },
            {
              name: "team_discoverability",
              value: request.teamDiscoverability,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsCreateError,
      },
      options,
    );
  }

  adminTeamsList(
    request: Admin.AdminTeamsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.teams.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsListError,
      },
      options,
    );
  }

  adminTeamsOwnersList(
    request: Admin.AdminTeamsOwnersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsOwnersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.teams.owners.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsOwnersListError,
      },
      options,
    );
  }

  adminTeamsSettingsInfo(
    request: Admin.AdminTeamsSettingsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.teams.settings.info"),
        auth: this.#auth.slackAuth,
        query: [{ name: "team_id", value: request.teamId, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsSettingsInfoError,
      },
      options,
    );
  }

  adminTeamsSettingsSetDefaultChannels(
    request: Admin.AdminTeamsSettingsSetDefaultChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDefaultChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setDefaultChannels"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "channel_ids", value: request.channelIds, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsSettingsSetDefaultChannelsError,
      },
      options,
    );
  }

  adminTeamsSettingsSetDescription(
    request: Admin.AdminTeamsSettingsSetDescriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDescriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setDescription"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "description", value: request.description, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsSettingsSetDescriptionError,
      },
      options,
    );
  }

  adminTeamsSettingsSetDiscoverability(
    request: Admin.AdminTeamsSettingsSetDiscoverabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDiscoverabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setDiscoverability"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "discoverability", value: request.discoverability, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsSettingsSetDiscoverabilityError,
      },
      options,
    );
  }

  adminTeamsSettingsSetIcon(
    request: Admin.AdminTeamsSettingsSetIconRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetIconError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setIcon"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "image_url", value: request.imageUrl, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsSettingsSetIconError,
      },
      options,
    );
  }

  adminTeamsSettingsSetName(
    request: Admin.AdminTeamsSettingsSetNameRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetNameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setName"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminTeamsSettingsSetNameError,
      },
      options,
    );
  }

  adminUsergroupsAddChannels(
    request: Admin.AdminUsergroupsAddChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsAddChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.usergroups.addChannels"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "usergroup_id", value: request.usergroupId, schema: s.string() },
            { name: "channel_ids", value: request.channelIds, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsergroupsAddChannelsError,
      },
      options,
    );
  }

  adminUsergroupsAddTeams(
    request: Admin.AdminUsergroupsAddTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsAddTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.usergroups.addTeams"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "usergroup_id", value: request.usergroupId, schema: s.string() },
            { name: "team_ids", value: request.teamIds, schema: s.string() },
            { name: "auto_provision", value: request.autoProvision, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsergroupsAddTeamsError,
      },
      options,
    );
  }

  adminUsergroupsListChannels(
    request: Admin.AdminUsergroupsListChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsListChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.usergroups.listChannels"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "usergroup_id", value: request.usergroupId, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "include_num_members", value: request.includeNumMembers, schema: s.optional(s.boolean()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsergroupsListChannelsError,
      },
      options,
    );
  }

  adminUsergroupsRemoveChannels(
    request: Admin.AdminUsergroupsRemoveChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsRemoveChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.usergroups.removeChannels"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "usergroup_id", value: request.usergroupId, schema: s.string() },
            { name: "channel_ids", value: request.channelIds, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsergroupsRemoveChannelsError,
      },
      options,
    );
  }

  adminUsersAssign(
    request: Admin.AdminUsersAssignRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersAssignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.assign"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
            { name: "is_restricted", value: request.isRestricted, schema: s.optional(s.boolean()) },
            {
              name: "is_ultra_restricted",
              value: request.isUltraRestricted,
              schema: s.optional(s.boolean()),
            },
            { name: "channel_ids", value: request.channelIds, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersAssignError,
      },
      options,
    );
  }

  adminUsersInvite(
    request: Admin.AdminUsersInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.invite"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "email", value: request.email, schema: s.string() },
            { name: "channel_ids", value: request.channelIds, schema: s.string() },
            { name: "custom_message", value: request.customMessage, schema: s.optional(s.string()) },
            { name: "real_name", value: request.realName, schema: s.optional(s.string()) },
            { name: "resend", value: request.resend, schema: s.optional(s.boolean()) },
            { name: "is_restricted", value: request.isRestricted, schema: s.optional(s.boolean()) },
            {
              name: "is_ultra_restricted",
              value: request.isUltraRestricted,
              schema: s.optional(s.boolean()),
            },
            { name: "guest_expiration_ts", value: request.guestExpirationTs, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersInviteError,
      },
      options,
    );
  }

  adminUsersList(
    request: Admin.AdminUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.users.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "team_id", value: request.teamId, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersListError,
      },
      options,
    );
  }

  adminUsersRemove(
    request: Admin.AdminUsersRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.remove"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersRemoveError,
      },
      options,
    );
  }

  adminUsersSessionInvalidate(
    request: Admin.AdminUsersSessionInvalidateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSessionInvalidateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.session.invalidate"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "session_id", value: request.sessionId, schema: s.number() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersSessionInvalidateError,
      },
      options,
    );
  }

  adminUsersSessionReset(
    request: Admin.AdminUsersSessionResetRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSessionResetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.session.reset"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "user_id", value: request.userId, schema: s.string() },
            { name: "mobile_only", value: request.mobileOnly, schema: s.optional(s.boolean()) },
            { name: "web_only", value: request.webOnly, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersSessionResetError,
      },
      options,
    );
  }

  adminUsersSetAdmin(
    request: Admin.AdminUsersSetAdminRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetAdminError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.setAdmin"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersSetAdminError,
      },
      options,
    );
  }

  adminUsersSetExpiration(
    request: Admin.AdminUsersSetExpirationRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetExpirationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.setExpiration"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
            { name: "expiration_ts", value: request.expirationTs, schema: s.number() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersSetExpirationError,
      },
      options,
    );
  }

  adminUsersSetOwner(
    request: Admin.AdminUsersSetOwnerRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetOwnerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.setOwner"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersSetOwnerError,
      },
      options,
    );
  }

  adminUsersSetRegular(
    request: Admin.AdminUsersSetRegularRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetRegularError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.setRegular"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Admin.AdminUsersSetRegularError,
      },
      options,
    );
  }
}

export namespace Admin {
  export type AdminAppsApproveRequest = {
    token: string;
    contentType: ContentType;
    appId?: string;
    requestId?: string;
    teamId?: string;
  };

  export class AdminAppsApproveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminAppsApproveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsApprovedListRequest = {
    token: string;
    limit?: number;
    cursor?: string;
    teamId?: string;
    enterpriseId?: string;
    contentType: ContentType;
  };

  export class AdminAppsApprovedListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminAppsApprovedListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsRequestsListRequest = {
    token: string;
    limit?: number;
    cursor?: string;
    teamId?: string;
    contentType: ContentType;
  };

  export class AdminAppsRequestsListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminAppsRequestsListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsRestrictRequest = {
    token: string;
    contentType: ContentType;
    appId?: string;
    requestId?: string;
    teamId?: string;
  };

  export class AdminAppsRestrictError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminAppsRestrictError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsRestrictedListRequest = {
    token: string;
    limit?: number;
    cursor?: string;
    teamId?: string;
    enterpriseId?: string;
    contentType: ContentType;
  };

  export class AdminAppsRestrictedListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminAppsRestrictedListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsArchiveRequest = {
    token: string;
    contentType: ContentType;
    channelId: string;
  };

  export class AdminConversationsArchiveError extends ResponseError<
    Declared<"adminConversationsArchiveerrorschema1", AdminConversationsArchiveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsArchiveError> = [
      {
        on: [400, 599],
        kind: "adminConversationsArchiveerrorschema1",
        decode: { kind: "json", schema: adminConversationsArchiveerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsConvertToPrivateRequest = {
    token: string;
    contentType: ContentType;
    channelId: string;
  };

  export class AdminConversationsConvertToPrivateError extends ResponseError<
    Declared<"adminConversationsConvertToPrivateerrorschema1", AdminConversationsConvertToPrivateerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsConvertToPrivateError> = [
      {
        on: [400, 599],
        kind: "adminConversationsConvertToPrivateerrorschema1",
        decode: { kind: "json", schema: adminConversationsConvertToPrivateerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsCreateRequest = {
    token: string;
    contentType: ContentType;
    name: string;
    isPrivate: boolean;
    description?: string;
    orgWide?: boolean;
    teamId?: string;
  };

  export class AdminConversationsCreateError extends ResponseError<
    Declared<"adminConversationsCreateerrorschema1", AdminConversationsCreateerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsCreateError> = [
      {
        on: [400, 599],
        kind: "adminConversationsCreateerrorschema1",
        decode: { kind: "json", schema: adminConversationsCreateerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsDeleteRequest = {
    token: string;
    contentType: ContentType;
    channelId: string;
  };

  export class AdminConversationsDeleteError extends ResponseError<
    Declared<"adminConversationsDeleteerrorschema1", AdminConversationsDeleteerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsDeleteError> = [
      {
        on: [400, 599],
        kind: "adminConversationsDeleteerrorschema1",
        decode: { kind: "json", schema: adminConversationsDeleteerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsDisconnectSharedRequest = {
    token: string;
    contentType: ContentType;
    channelId: string;
    leavingTeamIds?: string;
  };

  export class AdminConversationsDisconnectSharedError extends ResponseError<
    Declared<"adminConversationsDisconnectSharederrorschema1", AdminConversationsDisconnectSharederrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsDisconnectSharedError> = [
      {
        on: [400, 599],
        kind: "adminConversationsDisconnectSharederrorschema1",
        decode: { kind: "json", schema: adminConversationsDisconnectSharederrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsEkmListOriginalConnectedChannelInfoRequest = {
    token: string;
    channelIds?: string;
    teamIds?: string;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class AdminConversationsEkmListOriginalConnectedChannelInfoError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsEkmListOriginalConnectedChannelInfoError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsGetConversationPrefsRequest = {
    channelId: string;
    token: string;
    contentType: ContentType;
  };

  export class AdminConversationsGetConversationPrefsError extends ResponseError<
    Declared<"adminConversationsUnarchiveerrorschema1", AdminConversationsUnarchiveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsGetConversationPrefsError> = [
      {
        on: [400, 599],
        kind: "adminConversationsUnarchiveerrorschema1",
        decode: { kind: "json", schema: adminConversationsUnarchiveerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsGetTeamsRequest = {
    channelId: string;
    cursor?: string;
    limit?: number;
    token: string;
    contentType: ContentType;
  };

  export class AdminConversationsGetTeamsError extends ResponseError<
    Declared<"adminConversationsGetTeamserrorschema1", AdminConversationsGetTeamserrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsGetTeamsError> = [
      {
        on: [400, 599],
        kind: "adminConversationsGetTeamserrorschema1",
        decode: { kind: "json", schema: adminConversationsGetTeamserrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsInviteRequest = {
    token: string;
    contentType: ContentType;
    userIds: string;
    channelId: string;
  };

  export class AdminConversationsInviteError extends ResponseError<
    Declared<"adminConversationsInviteerrorschema1", AdminConversationsInviteerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsInviteError> = [
      {
        on: [400, 599],
        kind: "adminConversationsInviteerrorschema1",
        decode: { kind: "json", schema: adminConversationsInviteerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsRenameRequest = {
    token: string;
    contentType: ContentType;
    channelId: string;
    name: string;
  };

  export class AdminConversationsRenameError extends ResponseError<
    Declared<"adminConversationsUnarchiveerrorschema21", AdminConversationsUnarchiveerrorschema21>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsRenameError> = [
      {
        on: [400, 599],
        kind: "adminConversationsUnarchiveerrorschema21",
        decode: { kind: "json", schema: adminConversationsUnarchiveerrorschema21Schema },
      },
    ];
  }

  export type AdminConversationsRestrictAccessAddGroupRequest = {
    contentType: ContentType;
    token: string;
    groupId: string;
    channelId: string;
    teamId?: string;
  };

  export class AdminConversationsRestrictAccessAddGroupError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessAddGroupError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsRestrictAccessListGroupsRequest = {
    token: string;
    channelId: string;
    teamId?: string;
    contentType: ContentType;
  };

  export class AdminConversationsRestrictAccessListGroupsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessListGroupsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsRestrictAccessRemoveGroupRequest = {
    contentType: ContentType;
    token: string;
    teamId: string;
    groupId: string;
    channelId: string;
  };

  export class AdminConversationsRestrictAccessRemoveGroupError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessRemoveGroupError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsSearchRequest = {
    teamIds?: string;
    query?: string;
    limit?: number;
    cursor?: string;
    searchChannelTypes?: string;
    sort?: string;
    sortDir?: string;
    token: string;
    contentType: ContentType;
  };

  export class AdminConversationsSearchError extends ResponseError<
    Declared<"adminConversationsSearcherrorschema1", AdminConversationsSearcherrorschema1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsSearchError> = [
      {
        on: [400, 599],
        kind: "adminConversationsSearcherrorschema1",
        decode: { kind: "json", schema: adminConversationsSearcherrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsSetConversationPrefsRequest = {
    token: string;
    contentType: ContentType;
    channelId: string;
    prefs: string;
  };

  export class AdminConversationsSetConversationPrefsError extends ResponseError<
    Declared<
      "adminConversationsSetConversationPrefserrorschema1",
      AdminConversationsSetConversationPrefserrorschema1
    >
  > {
    static readonly errors: ErrorDecoders<AdminConversationsSetConversationPrefsError> = [
      {
        on: [400, 599],
        kind: "adminConversationsSetConversationPrefserrorschema1",
        decode: { kind: "json", schema: adminConversationsSetConversationPrefserrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsSetTeamsRequest = {
    token: string;
    contentType: ContentType;
    channelId: string;
    teamId?: string;
    targetTeamIds?: string;
    orgChannel?: boolean;
  };

  export class AdminConversationsSetTeamsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsSetTeamsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsUnarchiveRequest = {
    token: string;
    contentType: ContentType;
    channelId: string;
  };

  export class AdminConversationsUnarchiveError extends ResponseError<
    Declared<"adminConversationsUnarchiveerrorschema31", AdminConversationsUnarchiveerrorschema31>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsUnarchiveError> = [
      {
        on: [400, 599],
        kind: "adminConversationsUnarchiveerrorschema31",
        decode: { kind: "json", schema: adminConversationsUnarchiveerrorschema31Schema },
      },
    ];
  }

  export type AdminEmojiAddRequest = {
    contentType: ContentType;
    token: string;
    name: string;
    url: string;
  };

  export class AdminEmojiAddError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiAddError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiAddAliasRequest = {
    contentType: ContentType;
    token: string;
    name: string;
    aliasFor: string;
  };

  export class AdminEmojiAddAliasError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiAddAliasError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiListRequest = {
    token: string;
    cursor?: string;
    limit?: number;
    contentType: ContentType;
  };

  export class AdminEmojiListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiRemoveRequest = {
    contentType: ContentType;
    token: string;
    name: string;
  };

  export class AdminEmojiRemoveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiRemoveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiRenameRequest = {
    contentType: ContentType;
    token: string;
    name: string;
    newName: string;
  };

  export class AdminEmojiRenameError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiRenameError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsApproveRequest = {
    token: string;
    contentType: ContentType;
    inviteRequestId: string;
    teamId?: string;
  };

  export class AdminInviteRequestsApproveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminInviteRequestsApproveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsApprovedListRequest = {
    teamId?: string;
    cursor?: string;
    limit?: number;
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsApprovedListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminInviteRequestsApprovedListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsDeniedListRequest = {
    teamId?: string;
    cursor?: string;
    limit?: number;
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsDeniedListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminInviteRequestsDeniedListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsDenyRequest = {
    token: string;
    contentType: ContentType;
    inviteRequestId: string;
    teamId?: string;
  };

  export class AdminInviteRequestsDenyError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminInviteRequestsDenyError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsListRequest = {
    teamId?: string;
    cursor?: string;
    limit?: number;
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminInviteRequestsListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsAdminsListRequest = {
    token: string;
    teamId: string;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class AdminTeamsAdminsListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsAdminsListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsCreateRequest = {
    token: string;
    contentType: ContentType;
    teamDomain: string;
    teamName: string;
    teamDescription?: string;
    teamDiscoverability?: string;
  };

  export class AdminTeamsCreateError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsCreateError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsListRequest = {
    limit?: number;
    cursor?: string;
    token: string;
    contentType: ContentType;
  };

  export class AdminTeamsListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsOwnersListRequest = {
    token: string;
    teamId: string;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class AdminTeamsOwnersListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsOwnersListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsInfoRequest = {
    teamId: string;
    token: string;
    contentType: ContentType;
  };

  export class AdminTeamsSettingsInfoError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsInfoError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDefaultChannelsRequest = {
    contentType: ContentType;
    token: string;
    teamId: string;
    channelIds: string;
  };

  export class AdminTeamsSettingsSetDefaultChannelsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDefaultChannelsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDescriptionRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    description: string;
  };

  export class AdminTeamsSettingsSetDescriptionError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDescriptionError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDiscoverabilityRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    discoverability: string;
  };

  export class AdminTeamsSettingsSetDiscoverabilityError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDiscoverabilityError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetIconRequest = {
    contentType: ContentType;
    token: string;
    imageUrl: string;
    teamId: string;
  };

  export class AdminTeamsSettingsSetIconError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetIconError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetNameRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    name: string;
  };

  export class AdminTeamsSettingsSetNameError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetNameError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsAddChannelsRequest = {
    token: string;
    contentType: ContentType;
    usergroupId: string;
    channelIds: string;
    teamId?: string;
  };

  export class AdminUsergroupsAddChannelsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsergroupsAddChannelsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsAddTeamsRequest = {
    token: string;
    contentType: ContentType;
    usergroupId: string;
    teamIds: string;
    autoProvision?: boolean;
  };

  export class AdminUsergroupsAddTeamsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsergroupsAddTeamsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsListChannelsRequest = {
    usergroupId: string;
    teamId?: string;
    includeNumMembers?: boolean;
    token: string;
    contentType: ContentType;
  };

  export class AdminUsergroupsListChannelsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsergroupsListChannelsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsRemoveChannelsRequest = {
    token: string;
    contentType: ContentType;
    usergroupId: string;
    channelIds: string;
  };

  export class AdminUsergroupsRemoveChannelsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsergroupsRemoveChannelsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersAssignRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
    isRestricted?: boolean;
    isUltraRestricted?: boolean;
    channelIds?: string;
  };

  export class AdminUsersAssignError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersAssignError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersInviteRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    email: string;
    channelIds: string;
    customMessage?: string;
    realName?: string;
    resend?: boolean;
    isRestricted?: boolean;
    isUltraRestricted?: boolean;
    guestExpirationTs?: string;
  };

  export class AdminUsersInviteError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersInviteError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersListRequest = {
    teamId: string;
    cursor?: string;
    limit?: number;
    token: string;
    contentType: ContentType;
  };

  export class AdminUsersListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersRemoveRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
  };

  export class AdminUsersRemoveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersRemoveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSessionInvalidateRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    sessionId: number;
  };

  export class AdminUsersSessionInvalidateError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSessionInvalidateError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSessionResetRequest = {
    token: string;
    contentType: ContentType;
    userId: string;
    mobileOnly?: boolean;
    webOnly?: boolean;
  };

  export class AdminUsersSessionResetError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSessionResetError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetAdminRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
  };

  export class AdminUsersSetAdminError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSetAdminError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetExpirationRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
    expirationTs: number;
  };

  export class AdminUsersSetExpirationError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSetExpirationError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetOwnerRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
  };

  export class AdminUsersSetOwnerError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSetOwnerError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetRegularRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
  };

  export class AdminUsersSetRegularError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSetRegularError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
