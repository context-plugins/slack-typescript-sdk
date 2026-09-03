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

export class AdminConversations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminConversationsArchive(
    request: AdminConversations.AdminConversationsArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsArchiveschema, AdminConversations.AdminConversationsArchiveError> {
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
        errorFactory: AdminConversations.AdminConversationsArchiveError,
      },
      options,
    );
  }

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
        errorFactory: AdminConversations.AdminConversationsConvertToPrivateError,
      },
      options,
    );
  }

  adminConversationsCreate(
    request: AdminConversations.AdminConversationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsCreateschema, AdminConversations.AdminConversationsCreateError> {
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
        errorFactory: AdminConversations.AdminConversationsCreateError,
      },
      options,
    );
  }

  adminConversationsDelete(
    request: AdminConversations.AdminConversationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsDeleteschema, AdminConversations.AdminConversationsDeleteError> {
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
        errorFactory: AdminConversations.AdminConversationsDeleteError,
      },
      options,
    );
  }

  adminConversationsDisconnectShared(
    request: AdminConversations.AdminConversationsDisconnectSharedRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsRenameschema, AdminConversations.AdminConversationsDisconnectSharedError> {
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
        errorFactory: AdminConversations.AdminConversationsDisconnectSharedError,
      },
      options,
    );
  }

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
        errorFactory: AdminConversations.AdminConversationsGetConversationPrefsError,
      },
      options,
    );
  }

  adminConversationsGetTeams(
    request: AdminConversations.AdminConversationsGetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsGetTeamsschema, AdminConversations.AdminConversationsGetTeamsError> {
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
        errorFactory: AdminConversations.AdminConversationsGetTeamsError,
      },
      options,
    );
  }

  adminConversationsInvite(
    request: AdminConversations.AdminConversationsInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsInviteschema, AdminConversations.AdminConversationsInviteError> {
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
        errorFactory: AdminConversations.AdminConversationsInviteError,
      },
      options,
    );
  }

  adminConversationsRename(
    request: AdminConversations.AdminConversationsRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsRenameschema1, AdminConversations.AdminConversationsRenameError> {
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
        errorFactory: AdminConversations.AdminConversationsRenameError,
      },
      options,
    );
  }

  adminConversationsSearch(
    request: AdminConversations.AdminConversationsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsSearchschema, AdminConversations.AdminConversationsSearchError> {
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
        errorFactory: AdminConversations.AdminConversationsSearchError,
      },
      options,
    );
  }

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
        errorFactory: AdminConversations.AdminConversationsSetConversationPrefsError,
      },
      options,
    );
  }

  adminConversationsSetTeams(
    request: AdminConversations.AdminConversationsSetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminConversations.AdminConversationsSetTeamsError> {
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
        errorFactory: AdminConversations.AdminConversationsSetTeamsError,
      },
      options,
    );
  }

  adminConversationsUnarchive(
    request: AdminConversations.AdminConversationsUnarchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminConversationsUnarchiveschema, AdminConversations.AdminConversationsUnarchiveError> {
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
        errorFactory: AdminConversations.AdminConversationsUnarchiveError,
      },
      options,
    );
  }
}

export namespace AdminConversations {
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
}
