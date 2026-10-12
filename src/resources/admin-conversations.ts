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

export class AdminConversations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_conversations_archive
   *
   * @remarks
   * Archive a public or private channel.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminConversations.AdminConversationsArchiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsArchive(
    request: AdminConversations.AdminConversationsArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsArchiveschema, AdminConversations.AdminConversationsArchiveError> {
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
        errorFactory: AdminConversations.AdminConversationsArchiveError,
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
   * @throws {@link AdminConversations.AdminConversationsConvertToPrivateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsConvertToPrivate(
    request: AdminConversations.AdminConversationsConvertToPrivateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdminConversationsConvertToPrivateschema,
    AdminConversations.AdminConversationsConvertToPrivateError
  > {
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
        errorFactory: AdminConversations.AdminConversationsConvertToPrivateError,
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
   * @throws {@link AdminConversations.AdminConversationsCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsCreate(
    request: AdminConversations.AdminConversationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsCreateschema, AdminConversations.AdminConversationsCreateError> {
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
        errorFactory: AdminConversations.AdminConversationsCreateError,
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
   * @throws {@link AdminConversations.AdminConversationsDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsDelete(
    request: AdminConversations.AdminConversationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsDeleteschema, AdminConversations.AdminConversationsDeleteError> {
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
        errorFactory: AdminConversations.AdminConversationsDeleteError,
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
   * @throws {@link AdminConversations.AdminConversationsDisconnectSharedError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsDisconnectShared(
    request: AdminConversations.AdminConversationsDisconnectSharedRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsRenameschema, AdminConversations.AdminConversationsDisconnectSharedError> {
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
        errorFactory: AdminConversations.AdminConversationsDisconnectSharedError,
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
   * @throws {@link AdminConversations.AdminConversationsGetConversationPrefsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsGetConversationPrefs(
    request: AdminConversations.AdminConversationsGetConversationPrefsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdminConversationsGetConversationPrefsschema,
    AdminConversations.AdminConversationsGetConversationPrefsError
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
        errorFactory: AdminConversations.AdminConversationsGetConversationPrefsError,
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
   * @throws {@link AdminConversations.AdminConversationsGetTeamsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsGetTeams(
    request: AdminConversations.AdminConversationsGetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsGetTeamsschema, AdminConversations.AdminConversationsGetTeamsError> {
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
        errorFactory: AdminConversations.AdminConversationsGetTeamsError,
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
   * @throws {@link AdminConversations.AdminConversationsInviteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsInvite(
    request: AdminConversations.AdminConversationsInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsInviteschema, AdminConversations.AdminConversationsInviteError> {
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
        errorFactory: AdminConversations.AdminConversationsInviteError,
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
   * @throws {@link AdminConversations.AdminConversationsRenameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsRename(
    request: AdminConversations.AdminConversationsRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsRenameschema1, AdminConversations.AdminConversationsRenameError> {
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
        errorFactory: AdminConversations.AdminConversationsRenameError,
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
   * @throws {@link AdminConversations.AdminConversationsSearchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsSearch(
    request: AdminConversations.AdminConversationsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsSearchschema, AdminConversations.AdminConversationsSearchError> {
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
        errorFactory: AdminConversations.AdminConversationsSearchError,
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
   * @throws {@link AdminConversations.AdminConversationsSetConversationPrefsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsSetConversationPrefs(
    request: AdminConversations.AdminConversationsSetConversationPrefsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdminConversationsSetConversationPrefsschema,
    AdminConversations.AdminConversationsSetConversationPrefsError
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
        errorFactory: AdminConversations.AdminConversationsSetConversationPrefsError,
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
   * @throws {@link AdminConversations.AdminConversationsSetTeamsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsSetTeams(
    request: AdminConversations.AdminConversationsSetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminConversations.AdminConversationsSetTeamsError> {
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
        errorFactory: AdminConversations.AdminConversationsSetTeamsError,
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
   * @throws {@link AdminConversations.AdminConversationsUnarchiveError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsUnarchive(
    request: AdminConversations.AdminConversationsUnarchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsUnarchiveschema, AdminConversations.AdminConversationsUnarchiveError> {
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
        errorFactory: AdminConversations.AdminConversationsUnarchiveError,
      },
      options,
    );
  }
}

export namespace AdminConversations {
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
}
