import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * admin_apps_approve
   *
   * @remarks
   * Approve an app for installation on a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminAppsApproveError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsApprove(
    request: Admin.AdminAppsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.apps.approve"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_apps_approved_list
   *
   * @remarks
   * List approved apps for an org or workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminAppsApprovedListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsApprovedList(
    request: Admin.AdminAppsApprovedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsApprovedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.apps.approved.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_apps_requests_list
   *
   * @remarks
   * List app requests for a team/workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminAppsRequestsListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsRequestsList(
    request: Admin.AdminAppsRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.apps.requests.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_apps_restrict
   *
   * @remarks
   * Restrict an app for installation on a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminAppsRestrictError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsRestrict(
    request: Admin.AdminAppsRestrictRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRestrictError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.apps.restrict"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_apps_restricted_list
   *
   * @remarks
   * List restricted apps for an org or workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminAppsRestrictedListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsRestrictedList(
    request: Admin.AdminAppsRestrictedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRestrictedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.apps.restricted.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_conversations_archive
   *
   * @remarks
   * Archive a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsArchiveError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsArchive(
    request: Admin.AdminConversationsArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsArchiveschema, Admin.AdminConversationsArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.archive"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_convertToPrivate
   *
   * @remarks
   * Convert a public channel to a private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsConvertToPrivateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsConvertToPrivate(
    request: Admin.AdminConversationsConvertToPrivateRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsConvertToPrivateschema, Admin.AdminConversationsConvertToPrivateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.convertToPrivate"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_create
   *
   * @remarks
   * Create a public or private channel-based conversation.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsCreate(
    request: Admin.AdminConversationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsCreateschema, Admin.AdminConversationsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.create"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_delete
   *
   * @remarks
   * Delete a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsDeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsDelete(
    request: Admin.AdminConversationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsDeleteschema, Admin.AdminConversationsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.delete"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_disconnectShared
   *
   * @remarks
   * Disconnect a connected channel from one or more workspaces.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsDisconnectSharedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsDisconnectShared(
    request: Admin.AdminConversationsDisconnectSharedRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsRenameschema, Admin.AdminConversationsDisconnectSharedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.disconnectShared"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_ekm_listOriginalConnectedChannelInfo
   *
   * @remarks
   * List all disconnected channels—i.e., channels that were once connected to other workspaces and
   * then disconnected—and the corresponding original channel IDs for key revocation with EKM.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsEkmListOriginalConnectedChannelInfo(
    request: Admin.AdminConversationsEkmListOriginalConnectedChannelInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.conversations.ekm.listOriginalConnectedChannelInfo"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel_ids", value: request.channelIds, schema: s.optional(s.string()) },
          { name: "team_ids", value: request.teamIds, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_conversations_getConversationPrefs
   *
   * @remarks
   * Get conversation preferences for a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsGetConversationPrefsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/admin.conversations.getConversationPrefs"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * admin_conversations_getTeams
   *
   * @remarks
   * Get all the workspaces a given public or private channel is connected to within this Enterprise
   * org.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsGetTeamsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsGetTeams(
    request: Admin.AdminConversationsGetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsGetTeamsschema, Admin.AdminConversationsGetTeamsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.conversations.getTeams"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "channel_id", value: request.channelId, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_conversations_invite
   *
   * @remarks
   * Invite a user to a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsInviteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsInvite(
    request: Admin.AdminConversationsInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsInviteschema, Admin.AdminConversationsInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.invite"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_rename
   *
   * @remarks
   * Rename a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsRenameError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsRename(
    request: Admin.AdminConversationsRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsRenameschema1, Admin.AdminConversationsRenameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.rename"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_restrictAccess_addGroup
   *
   * @remarks
   * Add an allowlist of IDP groups for accessing a channel
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsRestrictAccessAddGroupError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsRestrictAccessAddGroup(
    request: Admin.AdminConversationsRestrictAccessAddGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessAddGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.restrictAccess.addGroup"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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

  /**
   * admin_conversations_restrictAccess_listGroups
   *
   * @remarks
   * List all IDP Groups linked to a channel
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsRestrictAccessListGroupsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsRestrictAccessListGroups(
    request: Admin.AdminConversationsRestrictAccessListGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessListGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.conversations.restrictAccess.listGroups"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * admin_conversations_restrictAccess_removeGroup
   *
   * @remarks
   * Remove a linked IDP group linked from a private channel
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsRestrictAccessRemoveGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsRestrictAccessRemoveGroup(
    request: Admin.AdminConversationsRestrictAccessRemoveGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessRemoveGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.restrictAccess.removeGroup"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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

  /**
   * admin_conversations_search
   *
   * @remarks
   * Search for public or private channels in an Enterprise organization.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsSearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsSearch(
    request: Admin.AdminConversationsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsSearchschema, Admin.AdminConversationsSearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.conversations.search"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "team_ids", value: request.teamIds, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_conversations_setConversationPrefs
   *
   * @remarks
   * Set the posting permissions for a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsSetConversationPrefsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/admin.conversations.setConversationPrefs"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_setTeams
   *
   * @remarks
   * Set the workspaces in an Enterprise grid org that connect to a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsSetTeamsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsSetTeams(
    request: Admin.AdminConversationsSetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsSetTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.setTeams"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_conversations_unarchive
   *
   * @remarks
   * Unarchive a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminConversationsUnarchiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsUnarchive(
    request: Admin.AdminConversationsUnarchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsUnarchiveschema, Admin.AdminConversationsUnarchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.unarchive"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_emoji_add
   *
   * @remarks
   * Add an emoji.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminEmojiAddError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiAdd(
    request: Admin.AdminEmojiAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.emoji.add"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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

  /**
   * admin_emoji_addAlias
   *
   * @remarks
   * Add an emoji alias.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminEmojiAddAliasError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiAddAlias(
    request: Admin.AdminEmojiAddAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiAddAliasError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.emoji.addAlias"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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

  /**
   * admin_emoji_list
   *
   * @remarks
   * List emoji for an Enterprise Grid organization.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminEmojiListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiList(
    request: Admin.AdminEmojiListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.emoji.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_emoji_remove
   *
   * @remarks
   * Remove an emoji across an Enterprise Grid organization
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminEmojiRemoveError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiRemove(
    request: Admin.AdminEmojiRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.emoji.remove"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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

  /**
   * admin_emoji_rename
   *
   * @remarks
   * Rename an emoji.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminEmojiRenameError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiRename(
    request: Admin.AdminEmojiRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiRenameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.emoji.rename"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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

  /**
   * admin_inviteRequests_approve
   *
   * @remarks
   * Approve a workspace invite request.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminInviteRequestsApproveError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsApprove(
    request: Admin.AdminInviteRequestsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.inviteRequests.approve"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_inviteRequests_approved_list
   *
   * @remarks
   * List all approved workspace invite requests.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminInviteRequestsApprovedListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsApprovedList(
    request: Admin.AdminInviteRequestsApprovedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsApprovedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.inviteRequests.approved.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_inviteRequests_denied_list
   *
   * @remarks
   * List all denied workspace invite requests.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminInviteRequestsDeniedListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsDeniedList(
    request: Admin.AdminInviteRequestsDeniedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsDeniedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.inviteRequests.denied.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_inviteRequests_deny
   *
   * @remarks
   * Deny a workspace invite request.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminInviteRequestsDenyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsDeny(
    request: Admin.AdminInviteRequestsDenyRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsDenyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.inviteRequests.deny"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_inviteRequests_list
   *
   * @remarks
   * List all pending workspace invite requests.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminInviteRequestsListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsList(
    request: Admin.AdminInviteRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.inviteRequests.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_teams_admins_list
   *
   * @remarks
   * List all of the admins on a given workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsAdminsListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsAdminsList(
    request: Admin.AdminTeamsAdminsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsAdminsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.teams.admins.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_teams_create
   *
   * @remarks
   * Create an Enterprise team.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsCreate(
    request: Admin.AdminTeamsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.create"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_teams_list
   *
   * @remarks
   * List all teams on an Enterprise organization
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsList(
    request: Admin.AdminTeamsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.teams.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_teams_owners_list
   *
   * @remarks
   * List all of the owners on a given workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsOwnersListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsOwnersList(
    request: Admin.AdminTeamsOwnersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsOwnersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.teams.owners.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_teams_settings_info
   *
   * @remarks
   * Fetch information about settings in a workspace
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsSettingsInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsInfo(
    request: Admin.AdminTeamsSettingsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.teams.settings.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * admin_teams_settings_setDefaultChannels
   *
   * @remarks
   * Set the default channels of a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsSettingsSetDefaultChannelsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetDefaultChannels(
    request: Admin.AdminTeamsSettingsSetDefaultChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDefaultChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setDefaultChannels"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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

  /**
   * admin_teams_settings_setDescription
   *
   * @remarks
   * Set the description of a given workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsSettingsSetDescriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetDescription(
    request: Admin.AdminTeamsSettingsSetDescriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDescriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setDescription"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_teams_settings_setDiscoverability
   *
   * @remarks
   * An API method that allows admins to set the discoverability of a given workspace
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsSettingsSetDiscoverabilityError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetDiscoverability(
    request: Admin.AdminTeamsSettingsSetDiscoverabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDiscoverabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setDiscoverability"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_teams_settings_setIcon
   *
   * @remarks
   * Sets the icon of a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsSettingsSetIconError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetIcon(
    request: Admin.AdminTeamsSettingsSetIconRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetIconError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setIcon"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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

  /**
   * admin_teams_settings_setName
   *
   * @remarks
   * Set the name of a given workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminTeamsSettingsSetNameError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetName(
    request: Admin.AdminTeamsSettingsSetNameRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetNameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setName"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_usergroups_addChannels
   *
   * @remarks
   * Add one or more default channels to an IDP group.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsergroupsAddChannelsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsergroupsAddChannels(
    request: Admin.AdminUsergroupsAddChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsAddChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.usergroups.addChannels"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_usergroups_addTeams
   *
   * @remarks
   * Associate one or more default workspaces with an organization-wide IDP group.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsergroupsAddTeamsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsergroupsAddTeams(
    request: Admin.AdminUsergroupsAddTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsAddTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.usergroups.addTeams"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_usergroups_listChannels
   *
   * @remarks
   * List the channels linked to an org-level IDP group (user group).
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsergroupsListChannelsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsergroupsListChannels(
    request: Admin.AdminUsergroupsListChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsListChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.usergroups.listChannels"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * admin_usergroups_removeChannels
   *
   * @remarks
   * Remove one or more default channels from an org-level IDP group (user group).
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsergroupsRemoveChannelsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsergroupsRemoveChannels(
    request: Admin.AdminUsergroupsRemoveChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsRemoveChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.usergroups.removeChannels"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_users_assign
   *
   * @remarks
   * Add an Enterprise user to a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersAssignError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersAssign(
    request: Admin.AdminUsersAssignRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersAssignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.assign"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_users_invite
   *
   * @remarks
   * Invite a user to a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersInviteError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersInvite(
    request: Admin.AdminUsersInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.invite"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_users_list
   *
   * @remarks
   * List users on a workspace
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersList(
    request: Admin.AdminUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.users.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "team_id", value: request.teamId, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_users_remove
   *
   * @remarks
   * Remove a user from a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersRemoveError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersRemove(
    request: Admin.AdminUsersRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.remove"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_users_session_invalidate
   *
   * @remarks
   * Invalidate a single session for a user by session_id
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersSessionInvalidateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSessionInvalidate(
    request: Admin.AdminUsersSessionInvalidateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSessionInvalidateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.session.invalidate"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "session_id", value: request.sessionId, schema: s.int() },
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

  /**
   * admin_users_session_reset
   *
   * @remarks
   * Wipes all valid sessions on all devices for a given user
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersSessionResetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSessionReset(
    request: Admin.AdminUsersSessionResetRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSessionResetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.session.reset"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_users_setAdmin
   *
   * @remarks
   * Set an existing guest, regular user, or owner to be an admin user.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersSetAdminError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSetAdmin(
    request: Admin.AdminUsersSetAdminRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetAdminError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.setAdmin"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_users_setExpiration
   *
   * @remarks
   * Set an expiration for a guest user
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersSetExpirationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSetExpiration(
    request: Admin.AdminUsersSetExpirationRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetExpirationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.setExpiration"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
            { name: "expiration_ts", value: request.expirationTs, schema: s.int() },
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

  /**
   * admin_users_setOwner
   *
   * @remarks
   * Set an existing guest, regular user, or admin user to be a workspace owner.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersSetOwnerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSetOwner(
    request: Admin.AdminUsersSetOwnerRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetOwnerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.setOwner"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * admin_users_setRegular
   *
   * @remarks
   * Set an existing guest user, admin user, or owner to be a regular user.
   *
   * @returns Typical success response
   *
   * @throws {@link Admin.AdminUsersSetRegularError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSetRegular(
    request: Admin.AdminUsersSetRegularRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetRegularError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.setRegular"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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
    /** Authentication token. Requires scope: `admin.apps:write` */
    token: string;
    contentType: ContentType;
    /** The id of the app to approve. */
    appId?: string;
    /** The id of the request to approve. */
    requestId?: string;
    teamId?: string;
  };

  export class AdminAppsApproveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsApproveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsApprovedListRequest = {
    /** Authentication token. Requires scope: `admin.apps:read` */
    token: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
     */
    cursor?: string;
    teamId?: string;
    enterpriseId?: string;
    contentType: ContentType;
  };

  export class AdminAppsApprovedListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsApprovedListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsRequestsListRequest = {
    /** Authentication token. Requires scope: `admin.apps:read` */
    token: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
     */
    cursor?: string;
    teamId?: string;
    contentType: ContentType;
  };

  export class AdminAppsRequestsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsRequestsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsRestrictRequest = {
    /** Authentication token. Requires scope: `admin.apps:write` */
    token: string;
    contentType: ContentType;
    /** The id of the app to restrict. */
    appId?: string;
    /** The id of the request to restrict. */
    requestId?: string;
    teamId?: string;
  };

  export class AdminAppsRestrictError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsRestrictError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsRestrictedListRequest = {
    /** Authentication token. Requires scope: `admin.apps:read` */
    token: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
     */
    cursor?: string;
    teamId?: string;
    enterpriseId?: string;
    contentType: ContentType;
  };

  export class AdminAppsRestrictedListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsRestrictedListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsArchiveRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The channel to archive. */
    channelId: string;
  };

  export class AdminConversationsArchiveError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsArchiveerrorschema1", AdminConversationsArchiveerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsArchiveError> = [
      {
        on: "default",
        kind: "adminConversationsArchiveerrorschema1",
        decode: { kind: "json", schema: adminConversationsArchiveerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsConvertToPrivateRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The channel to convert to private. */
    channelId: string;
  };

  export class AdminConversationsConvertToPrivateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<
        "adminConversationsConvertToPrivateerrorschema1",
        AdminConversationsConvertToPrivateerrorschema1
      >
    >;

    static readonly errors: ErrorDecoders<AdminConversationsConvertToPrivateError> = [
      {
        on: "default",
        kind: "adminConversationsConvertToPrivateerrorschema1",
        decode: { kind: "json", schema: adminConversationsConvertToPrivateerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsCreateRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** Name of the public or private channel to create. */
    name: string;
    /** When `true`, creates a private channel instead of a public channel */
    isPrivate: boolean;
    /** Description of the public or private channel to create. */
    description?: string;
    /**
     * When `true`, the channel will be available org-wide. Note: if the channel is not
     * `org_wide=true`, you must specify a `team_id` for this channel
     */
    orgWide?: boolean;
    /**
     * The workspace to create the channel in. Note: this argument is required unless you set
     * `org_wide=true`.
     */
    teamId?: string;
  };

  export class AdminConversationsCreateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsCreateerrorschema1", AdminConversationsCreateerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsCreateError> = [
      {
        on: "default",
        kind: "adminConversationsCreateerrorschema1",
        decode: { kind: "json", schema: adminConversationsCreateerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsDeleteRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The channel to delete. */
    channelId: string;
  };

  export class AdminConversationsDeleteError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsDeleteerrorschema1", AdminConversationsDeleteerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsDeleteError> = [
      {
        on: "default",
        kind: "adminConversationsDeleteerrorschema1",
        decode: { kind: "json", schema: adminConversationsDeleteerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsDisconnectSharedRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The channel to be disconnected from some workspaces. */
    channelId: string;
    /**
     * The team to be removed from the channel. Currently only a single team id can be specified.
     */
    leavingTeamIds?: string;
  };

  export class AdminConversationsDisconnectSharedError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<
        "adminConversationsDisconnectSharederrorschema1",
        AdminConversationsDisconnectSharederrorschema1
      >
    >;

    static readonly errors: ErrorDecoders<AdminConversationsDisconnectSharedError> = [
      {
        on: "default",
        kind: "adminConversationsDisconnectSharederrorschema1",
        decode: { kind: "json", schema: adminConversationsDisconnectSharederrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsEkmListOriginalConnectedChannelInfoRequest = {
    /** Authentication token. Requires scope: `admin.conversations:read` */
    token: string;
    /** A comma-separated list of channels to filter to. */
    channelIds?: string;
    /**
     * A comma-separated list of the workspaces to which the channels you would like returned
     * belong.
     */
    teamIds?: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class AdminConversationsEkmListOriginalConnectedChannelInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminConversationsEkmListOriginalConnectedChannelInfoError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsGetConversationPrefsRequest = {
    /** The channel to get preferences for. */
    channelId: string;
    /** Authentication token. Requires scope: `admin.conversations:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminConversationsGetConversationPrefsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsUnarchiveerrorschema1", AdminConversationsUnarchiveerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsGetConversationPrefsError> = [
      {
        on: "default",
        kind: "adminConversationsUnarchiveerrorschema1",
        decode: { kind: "json", schema: adminConversationsUnarchiveerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsGetTeamsRequest = {
    /** The channel to determine connected workspaces within the organization for. */
    channelId: string;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
     */
    cursor?: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /** Authentication token. Requires scope: `admin.conversations:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminConversationsGetTeamsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsGetTeamserrorschema1", AdminConversationsGetTeamserrorschema1>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsGetTeamsError> = [
      {
        on: "default",
        kind: "adminConversationsGetTeamserrorschema1",
        decode: { kind: "json", schema: adminConversationsGetTeamserrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsInviteRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The users to invite. */
    userIds: string;
    /** The channel that the users will be invited to. */
    channelId: string;
  };

  export class AdminConversationsInviteError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsInviteerrorschema1", AdminConversationsInviteerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsInviteError> = [
      {
        on: "default",
        kind: "adminConversationsInviteerrorschema1",
        decode: { kind: "json", schema: adminConversationsInviteerrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsRenameRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The channel to rename. */
    channelId: string;
    name: string;
  };

  export class AdminConversationsRenameError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsUnarchiveerrorschema21", AdminConversationsUnarchiveerrorschema21>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsRenameError> = [
      {
        on: "default",
        kind: "adminConversationsUnarchiveerrorschema21",
        decode: { kind: "json", schema: adminConversationsUnarchiveerrorschema21Schema },
      },
    ];
  }

  export type AdminConversationsRestrictAccessAddGroupRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    /**
     * The [IDP
     * Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org)
     * ID to be an allowlist for the private channel.
     */
    groupId: string;
    /** The channel to link this group to. */
    channelId: string;
    /**
     * The workspace where the channel exists. This argument is required for channels only tied to
     * one workspace, and optional for channels that are shared across an organization.
     */
    teamId?: string;
  };

  export class AdminConversationsRestrictAccessAddGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessAddGroupError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsRestrictAccessListGroupsRequest = {
    /** Authentication token. Requires scope: `admin.conversations:read` */
    token: string;
    channelId: string;
    /**
     * The workspace where the channel exists. This argument is required for channels only tied to
     * one workspace, and optional for channels that are shared across an organization.
     */
    teamId?: string;
    contentType: ContentType;
  };

  export class AdminConversationsRestrictAccessListGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessListGroupsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsRestrictAccessRemoveGroupRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    /**
     * The workspace where the channel exists. This argument is required for channels only tied to
     * one workspace, and optional for channels that are shared across an organization.
     */
    teamId: string;
    /**
     * The [IDP
     * Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org)
     * ID to remove from the private channel.
     */
    groupId: string;
    /** The channel to remove the linked group from. */
    channelId: string;
  };

  export class AdminConversationsRestrictAccessRemoveGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessRemoveGroupError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsSearchRequest = {
    /** Comma separated string of team IDs, signifying the workspaces to search through. */
    teamIds?: string;
    /** Name of the the channel to query by. */
    query?: string;
    /**
     * Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10.
     */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    /**
     * The type of channel to include or exclude in the search. For example `private` will search
     * private channels, while `private_exclude` will exclude them. For a full list of types, check
     * the [Types section](#types).
     */
    searchChannelTypes?: string;
    /**
     * Possible values are `relevant` (search ranking based on what we think is closest), `name`
     * (alphabetical), `member_count` (number of users in the channel), and `created` (date channel
     * was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted
     */
    sort?: string;
    /**
     * Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c),
     * and `desc` for descending order like (3, 2, 1) or (c, b, a)
     */
    sortDir?: string;
    /** Authentication token. Requires scope: `admin.conversations:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminConversationsSearchError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsSearcherrorschema1", AdminConversationsSearcherrorschema1>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsSearchError> = [
      {
        on: "default",
        kind: "adminConversationsSearcherrorschema1",
        decode: { kind: "json", schema: adminConversationsSearcherrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsSetConversationPrefsRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The channel to set the prefs for */
    channelId: string;
    /** The prefs for this channel in a stringified JSON format. */
    prefs: string;
  };

  export class AdminConversationsSetConversationPrefsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<
        "adminConversationsSetConversationPrefserrorschema1",
        AdminConversationsSetConversationPrefserrorschema1
      >
    >;

    static readonly errors: ErrorDecoders<AdminConversationsSetConversationPrefsError> = [
      {
        on: "default",
        kind: "adminConversationsSetConversationPrefserrorschema1",
        decode: { kind: "json", schema: adminConversationsSetConversationPrefserrorschema1Schema },
      },
    ];
  }

  export type AdminConversationsSetTeamsRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The encoded `channel_id` to add or remove to workspaces. */
    channelId: string;
    /**
     * The workspace to which the channel belongs. Omit this argument if the channel is a
     * cross-workspace shared channel.
     */
    teamId?: string;
    /**
     * A comma-separated list of workspaces to which the channel should be shared. Not required if
     * the channel is being shared org-wide.
     */
    targetTeamIds?: string;
    /** True if channel has to be converted to an org channel */
    orgChannel?: boolean;
  };

  export class AdminConversationsSetTeamsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminConversationsSetTeamsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsUnarchiveRequest = {
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    contentType: ContentType;
    /** The channel to unarchive. */
    channelId: string;
  };

  export class AdminConversationsUnarchiveError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"adminConversationsUnarchiveerrorschema31", AdminConversationsUnarchiveerrorschema31>
    >;

    static readonly errors: ErrorDecoders<AdminConversationsUnarchiveError> = [
      {
        on: "default",
        kind: "adminConversationsUnarchiveerrorschema31",
        decode: { kind: "json", schema: adminConversationsUnarchiveerrorschema31Schema },
      },
    ];
  }

  export type AdminEmojiAddRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /**
     * The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required,
     * although they may be included.
     */
    name: string;
    /**
     * The URL of a file to use as an image for the emoji. Square images under 128KB and with
     * transparent backgrounds work best.
     */
    url: string;
  };

  export class AdminEmojiAddError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiAddError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiAddAliasRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /**
     * The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required,
     * although they may be included.
     */
    name: string;
    /** The alias of the emoji. */
    aliasFor: string;
  };

  export class AdminEmojiAddAliasError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiAddAliasError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiListRequest = {
    /** Authentication token. Requires scope: `admin.teams:read` */
    token: string;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
     */
    cursor?: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    contentType: ContentType;
  };

  export class AdminEmojiListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiRemoveRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /**
     * The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required,
     * although they may be included.
     */
    name: string;
  };

  export class AdminEmojiRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiRemoveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiRenameRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /**
     * The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required,
     * although they may be included.
     */
    name: string;
    /** The new name of the emoji. */
    newName: string;
  };

  export class AdminEmojiRenameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiRenameError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsApproveRequest = {
    /** Authentication token. Requires scope: `admin.invites:write` */
    token: string;
    contentType: ContentType;
    /** ID of the request to invite. */
    inviteRequestId: string;
    /** ID for the workspace where the invite request was made. */
    teamId?: string;
  };

  export class AdminInviteRequestsApproveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsApproveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsApprovedListRequest = {
    /** ID for the workspace where the invite requests were made. */
    teamId?: string;
    /** Value of the `next_cursor` field sent as part of the previous API response */
    cursor?: string;
    /**
     * The number of results that will be returned by the API on each invocation. Must be between 1
     * - 1000, both inclusive
     */
    limit?: number;
    /** Authentication token. Requires scope: `admin.invites:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsApprovedListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsApprovedListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsDeniedListRequest = {
    /** ID for the workspace where the invite requests were made. */
    teamId?: string;
    /** Value of the `next_cursor` field sent as part of the previous api response */
    cursor?: string;
    /**
     * The number of results that will be returned by the API on each invocation. Must be between 1
     * - 1000 both inclusive
     */
    limit?: number;
    /** Authentication token. Requires scope: `admin.invites:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsDeniedListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsDeniedListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsDenyRequest = {
    /** Authentication token. Requires scope: `admin.invites:write` */
    token: string;
    contentType: ContentType;
    /** ID of the request to invite. */
    inviteRequestId: string;
    /** ID for the workspace where the invite request was made. */
    teamId?: string;
  };

  export class AdminInviteRequestsDenyError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsDenyError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsListRequest = {
    /** ID for the workspace where the invite requests were made. */
    teamId?: string;
    /** Value of the `next_cursor` field sent as part of the previous API response */
    cursor?: string;
    /**
     * The number of results that will be returned by the API on each invocation. Must be between 1
     * - 1000, both inclusive
     */
    limit?: number;
    /** Authentication token. Requires scope: `admin.invites:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsAdminsListRequest = {
    /** Authentication token. Requires scope: `admin.teams:read` */
    token: string;
    teamId: string;
    /** The maximum number of items to return. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class AdminTeamsAdminsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsAdminsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsCreateRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** Team domain (for example, slacksoftballteam). */
    teamDomain: string;
    /** Team name (for example, Slack Softball Team). */
    teamName: string;
    /** Description for the team. */
    teamDescription?: string;
    /**
     * Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or
     * `unlisted`.
     */
    teamDiscoverability?: string;
  };

  export class AdminTeamsCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsCreateError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsListRequest = {
    /** The maximum number of items to return. Must be between 1 - 100 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    /** Authentication token. Requires scope: `admin.teams:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminTeamsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsOwnersListRequest = {
    /** Authentication token. Requires scope: `admin.teams:read` */
    token: string;
    teamId: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class AdminTeamsOwnersListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsOwnersListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsInfoRequest = {
    teamId: string;
    /** Authentication token. Requires scope: `admin.teams:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminTeamsSettingsInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsInfoError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDefaultChannelsRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /** ID for the workspace to set the default channel for. */
    teamId: string;
    /** An array of channel IDs. */
    channelIds: string;
  };

  export class AdminTeamsSettingsSetDefaultChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDefaultChannelsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDescriptionRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** ID for the workspace to set the description for. */
    teamId: string;
    /** The new description for the workspace. */
    description: string;
  };

  export class AdminTeamsSettingsSetDescriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDescriptionError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDiscoverabilityRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** The ID of the workspace to set discoverability on. */
    teamId: string;
    /**
     * This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`,
     * or `unlisted`.
     */
    discoverability: string;
  };

  export class AdminTeamsSettingsSetDiscoverabilityError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDiscoverabilityError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetIconRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /** Image URL for the icon */
    imageUrl: string;
    /** ID for the workspace to set the icon for. */
    teamId: string;
  };

  export class AdminTeamsSettingsSetIconError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetIconError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetNameRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** ID for the workspace to set the name for. */
    teamId: string;
    /** The new name of the workspace. */
    name: string;
  };

  export class AdminTeamsSettingsSetNameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetNameError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsAddChannelsRequest = {
    /** Authentication token. Requires scope: `admin.usergroups:write` */
    token: string;
    contentType: ContentType;
    /** ID of the IDP group to add default channels for. */
    usergroupId: string;
    /** Comma separated string of channel IDs. */
    channelIds: string;
    /** The workspace to add default channels in. */
    teamId?: string;
  };

  export class AdminUsergroupsAddChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsergroupsAddChannelsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsAddTeamsRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** An encoded usergroup (IDP Group) ID. */
    usergroupId: string;
    /**
     * A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the
     * organization associated with the token.
     */
    teamIds: string;
    /**
     * When `true`, this method automatically creates new workspace accounts for the IDP group
     * members.
     */
    autoProvision?: boolean;
  };

  export class AdminUsergroupsAddTeamsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsergroupsAddTeamsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsListChannelsRequest = {
    /** ID of the IDP group to list default channels for. */
    usergroupId: string;
    /** ID of the the workspace. */
    teamId?: string;
    /** Flag to include or exclude the count of members per channel. */
    includeNumMembers?: boolean;
    /** Authentication token. Requires scope: `admin.usergroups:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminUsergroupsListChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsergroupsListChannelsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsRemoveChannelsRequest = {
    /** Authentication token. Requires scope: `admin.usergroups:write` */
    token: string;
    contentType: ContentType;
    /** ID of the IDP Group */
    usergroupId: string;
    /** Comma-separated string of channel IDs */
    channelIds: string;
  };

  export class AdminUsergroupsRemoveChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsergroupsRemoveChannelsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersAssignRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to add to the workspace. */
    userId: string;
    /** True if user should be added to the workspace as a guest. */
    isRestricted?: boolean;
    /** True if user should be added to the workspace as a single-channel guest. */
    isUltraRestricted?: boolean;
    /** Comma separated values of channel IDs to add user in the new workspace. */
    channelIds?: string;
  };

  export class AdminUsersAssignError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersAssignError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersInviteRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The email address of the person to invite. */
    email: string;
    /**
     * A comma-separated list of `channel_id`s for this user to join. At least one channel is
     * required.
     */
    channelIds: string;
    /** An optional message to send to the user in the invite email. */
    customMessage?: string;
    /** Full name of the user. */
    realName?: string;
    /**
     * Allow this invite to be resent in the future if a user has not signed up yet. (default:
     * false)
     */
    resend?: boolean;
    /** Is this user a multi-channel guest user? (default: false) */
    isRestricted?: boolean;
    /** Is this user a single channel guest user? (default: false) */
    isUltraRestricted?: boolean;
    /**
     * Timestamp when guest account should be disabled. Only include this timestamp if you are
     * inviting a guest user and you want their account to expire on a certain date.
     */
    guestExpirationTs?: string;
  };

  export class AdminUsersInviteError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersInviteError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersListRequest = {
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    /** Limit for how many users to be retrieved per page */
    limit?: number;
    /** Authentication token. Requires scope: `admin.users:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminUsersListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersRemoveRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to remove. */
    userId: string;
  };

  export class AdminUsersRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersRemoveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSessionInvalidateRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** ID of the team that the session belongs to */
    teamId: string;
    sessionId: number;
  };

  export class AdminUsersSessionInvalidateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSessionInvalidateError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSessionResetRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID of the user to wipe sessions for */
    userId: string;
    /** Only expire mobile sessions (default: false) */
    mobileOnly?: boolean;
    /** Only expire web sessions (default: false) */
    webOnly?: boolean;
  };

  export class AdminUsersSessionResetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSessionResetError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetAdminRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to designate as an admin. */
    userId: string;
  };

  export class AdminUsersSetAdminError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSetAdminError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetExpirationRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to set an expiration for. */
    userId: string;
    /** Timestamp when guest account should be disabled. */
    expirationTs: number;
  };

  export class AdminUsersSetExpirationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSetExpirationError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetOwnerRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** Id of the user to promote to owner. */
    userId: string;
  };

  export class AdminUsersSetOwnerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSetOwnerError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetRegularRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to designate as a regular user. */
    userId: string;
  };

  export class AdminUsersSetRegularError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSetRegularError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
