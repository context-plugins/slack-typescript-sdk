import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  conversationsArchiveerrorschema1Schema,
  type ConversationsArchiveerrorschema1,
} from "../models/conversations-archiveerrorschema1.js";
import {
  conversationsArchivesuccessschemaSchema,
  type ConversationsArchivesuccessschema,
} from "../models/conversations-archivesuccessschema.js";
import {
  conversationsCloseerrorschema1Schema,
  type ConversationsCloseerrorschema1,
} from "../models/conversations-closeerrorschema1.js";
import {
  conversationsClosesuccessschemaSchema,
  type ConversationsClosesuccessschema,
} from "../models/conversations-closesuccessschema.js";
import {
  conversationsCreateerrorschema1Schema,
  type ConversationsCreateerrorschema1,
} from "../models/conversations-createerrorschema1.js";
import {
  conversationsCreatesuccessschemaSchema,
  type ConversationsCreatesuccessschema,
} from "../models/conversations-createsuccessschema.js";
import {
  conversationsHistoryerrorschema1Schema,
  type ConversationsHistoryerrorschema1,
} from "../models/conversations-historyerrorschema1.js";
import {
  conversationsHistorysuccessschemaSchema,
  type ConversationsHistorysuccessschema,
} from "../models/conversations-historysuccessschema.js";
import {
  conversationsInfoerrorschema1Schema,
  type ConversationsInfoerrorschema1,
} from "../models/conversations-infoerrorschema1.js";
import {
  conversationsInfosuccessschemaSchema,
  type ConversationsInfosuccessschema,
} from "../models/conversations-infosuccessschema.js";
import {
  conversationsInviteerrorschemaSchema,
  type ConversationsInviteerrorschema,
} from "../models/conversations-inviteerrorschema.js";
import {
  conversationsInviteerrorschema11Schema,
  type ConversationsInviteerrorschema11,
} from "../models/conversations-inviteerrorschema11.js";
import {
  conversationsJoinerrorschema1Schema,
  type ConversationsJoinerrorschema1,
} from "../models/conversations-joinerrorschema1.js";
import {
  conversationsJoinsuccessschemaSchema,
  type ConversationsJoinsuccessschema,
} from "../models/conversations-joinsuccessschema.js";
import {
  conversationsKickerrorschema1Schema,
  type ConversationsKickerrorschema1,
} from "../models/conversations-kickerrorschema1.js";
import {
  conversationsKicksuccessschemaSchema,
  type ConversationsKicksuccessschema,
} from "../models/conversations-kicksuccessschema.js";
import {
  conversationsLeaveerrorschema1Schema,
  type ConversationsLeaveerrorschema1,
} from "../models/conversations-leaveerrorschema1.js";
import {
  conversationsLeavesuccessschemaSchema,
  type ConversationsLeavesuccessschema,
} from "../models/conversations-leavesuccessschema.js";
import {
  conversationsListerrorschema1Schema,
  type ConversationsListerrorschema1,
} from "../models/conversations-listerrorschema1.js";
import {
  conversationsListsuccessschemaSchema,
  type ConversationsListsuccessschema,
} from "../models/conversations-listsuccessschema.js";
import {
  conversationsMarkerrorschema1Schema,
  type ConversationsMarkerrorschema1,
} from "../models/conversations-markerrorschema1.js";
import {
  conversationsMarksuccessschemaSchema,
  type ConversationsMarksuccessschema,
} from "../models/conversations-marksuccessschema.js";
import {
  conversationsMemberserrorschema1Schema,
  type ConversationsMemberserrorschema1,
} from "../models/conversations-memberserrorschema1.js";
import {
  conversationsMemberssuccessschemaSchema,
  type ConversationsMemberssuccessschema,
} from "../models/conversations-memberssuccessschema.js";
import {
  conversationsOpenerrorschema1Schema,
  type ConversationsOpenerrorschema1,
} from "../models/conversations-openerrorschema1.js";
import {
  conversationsOpensuccessschemaSchema,
  type ConversationsOpensuccessschema,
} from "../models/conversations-opensuccessschema.js";
import {
  conversationsRenameerrorschema1Schema,
  type ConversationsRenameerrorschema1,
} from "../models/conversations-renameerrorschema1.js";
import {
  conversationsRenamesuccessschemaSchema,
  type ConversationsRenamesuccessschema,
} from "../models/conversations-renamesuccessschema.js";
import {
  conversationsReplieserrorschema1Schema,
  type ConversationsReplieserrorschema1,
} from "../models/conversations-replieserrorschema1.js";
import {
  conversationsRepliessuccessschemaSchema,
  type ConversationsRepliessuccessschema,
} from "../models/conversations-repliessuccessschema.js";
import {
  conversationsSetPurposeerrorschema1Schema,
  type ConversationsSetPurposeerrorschema1,
} from "../models/conversations-set-purposeerrorschema1.js";
import {
  conversationsSetPurposesuccessschemaSchema,
  type ConversationsSetPurposesuccessschema,
} from "../models/conversations-set-purposesuccessschema.js";
import {
  conversationsSetTopicerrorschema1Schema,
  type ConversationsSetTopicerrorschema1,
} from "../models/conversations-set-topicerrorschema1.js";
import {
  conversationsSetTopicsuccessschemaSchema,
  type ConversationsSetTopicsuccessschema,
} from "../models/conversations-set-topicsuccessschema.js";
import {
  conversationsUnarchiveerrorschema1Schema,
  type ConversationsUnarchiveerrorschema1,
} from "../models/conversations-unarchiveerrorschema1.js";
import {
  conversationsUnarchivesuccessschemaSchema,
  type ConversationsUnarchivesuccessschema,
} from "../models/conversations-unarchivesuccessschema.js";
import type { Servers } from "../servers.js";

export class Conversations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  conversationsArchive(
    request: Conversations.ConversationsArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsArchivesuccessschema, Conversations.ConversationsArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.archive"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel", value: request.channel, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsArchivesuccessschemaSchema },
        errorFactory: Conversations.ConversationsArchiveError,
      },
      options,
    );
  }

  conversationsClose(
    request: Conversations.ConversationsCloseRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsClosesuccessschema, Conversations.ConversationsCloseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.close"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel", value: request.channel, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsClosesuccessschemaSchema },
        errorFactory: Conversations.ConversationsCloseError,
      },
      options,
    );
  }

  conversationsCreate(
    request: Conversations.ConversationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsCreatesuccessschema, Conversations.ConversationsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.create"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "name", value: request.name, schema: s.optional(s.string()) },
            { name: "is_private", value: request.isPrivate, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsCreatesuccessschemaSchema },
        errorFactory: Conversations.ConversationsCreateError,
      },
      options,
    );
  }

  conversationsHistory(
    request: Conversations.ConversationsHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsHistorysuccessschema, Conversations.ConversationsHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/conversations.history"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "latest", value: request.latest, schema: s.optional(s.number()) },
          { name: "oldest", value: request.oldest, schema: s.optional(s.number()) },
          { name: "inclusive", value: request.inclusive, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsHistorysuccessschemaSchema },
        errorFactory: Conversations.ConversationsHistoryError,
      },
      options,
    );
  }

  conversationsInfo(
    request: Conversations.ConversationsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsInfosuccessschema, Conversations.ConversationsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/conversations.info"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "include_locale", value: request.includeLocale, schema: s.optional(s.boolean()) },
          { name: "include_num_members", value: request.includeNumMembers, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsInfosuccessschemaSchema },
        errorFactory: Conversations.ConversationsInfoError,
      },
      options,
    );
  }

  conversationsInvite(
    request: Conversations.ConversationsInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsInviteerrorschema, Conversations.ConversationsInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.invite"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "users", value: request.users, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsInviteerrorschemaSchema },
        errorFactory: Conversations.ConversationsInviteError,
      },
      options,
    );
  }

  conversationsJoin(
    request: Conversations.ConversationsJoinRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsJoinsuccessschema, Conversations.ConversationsJoinError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.join"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel", value: request.channel, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsJoinsuccessschemaSchema },
        errorFactory: Conversations.ConversationsJoinError,
      },
      options,
    );
  }

  conversationsKick(
    request: Conversations.ConversationsKickRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsKicksuccessschema, Conversations.ConversationsKickError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.kick"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "user", value: request.user, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsKicksuccessschemaSchema },
        errorFactory: Conversations.ConversationsKickError,
      },
      options,
    );
  }

  conversationsLeave(
    request: Conversations.ConversationsLeaveRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsLeavesuccessschema, Conversations.ConversationsLeaveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.leave"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel", value: request.channel, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsLeavesuccessschemaSchema },
        errorFactory: Conversations.ConversationsLeaveError,
      },
      options,
    );
  }

  conversationsList(
    request: Conversations.ConversationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsListsuccessschema, Conversations.ConversationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/conversations.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "exclude_archived", value: request.excludeArchived, schema: s.optional(s.boolean()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsListsuccessschemaSchema },
        errorFactory: Conversations.ConversationsListError,
      },
      options,
    );
  }

  conversationsMark(
    request: Conversations.ConversationsMarkRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsMarksuccessschema, Conversations.ConversationsMarkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.mark"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "ts", value: request.ts, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsMarksuccessschemaSchema },
        errorFactory: Conversations.ConversationsMarkError,
      },
      options,
    );
  }

  conversationsMembers(
    request: Conversations.ConversationsMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsMemberssuccessschema, Conversations.ConversationsMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/conversations.members"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsMemberssuccessschemaSchema },
        errorFactory: Conversations.ConversationsMembersError,
      },
      options,
    );
  }

  conversationsOpen(
    request: Conversations.ConversationsOpenRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsOpensuccessschema, Conversations.ConversationsOpenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.open"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "users", value: request.users, schema: s.optional(s.string()) },
            { name: "return_im", value: request.returnIm, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsOpensuccessschemaSchema },
        errorFactory: Conversations.ConversationsOpenError,
      },
      options,
    );
  }

  conversationsRename(
    request: Conversations.ConversationsRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsRenamesuccessschema, Conversations.ConversationsRenameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.rename"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "name", value: request.name, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsRenamesuccessschemaSchema },
        errorFactory: Conversations.ConversationsRenameError,
      },
      options,
    );
  }

  conversationsReplies(
    request: Conversations.ConversationsRepliesRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsRepliessuccessschema, Conversations.ConversationsRepliesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/conversations.replies"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "ts", value: request.ts, schema: s.optional(s.number()) },
          { name: "latest", value: request.latest, schema: s.optional(s.number()) },
          { name: "oldest", value: request.oldest, schema: s.optional(s.number()) },
          { name: "inclusive", value: request.inclusive, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsRepliessuccessschemaSchema },
        errorFactory: Conversations.ConversationsRepliesError,
      },
      options,
    );
  }

  conversationsSetPurpose(
    request: Conversations.ConversationsSetPurposeRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsSetPurposesuccessschema, Conversations.ConversationsSetPurposeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.setPurpose"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "purpose", value: request.purpose, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsSetPurposesuccessschemaSchema },
        errorFactory: Conversations.ConversationsSetPurposeError,
      },
      options,
    );
  }

  conversationsSetTopic(
    request: Conversations.ConversationsSetTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsSetTopicsuccessschema, Conversations.ConversationsSetTopicError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.setTopic"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "topic", value: request.topic, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsSetTopicsuccessschemaSchema },
        errorFactory: Conversations.ConversationsSetTopicError,
      },
      options,
    );
  }

  conversationsUnarchive(
    request: Conversations.ConversationsUnarchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsUnarchivesuccessschema, Conversations.ConversationsUnarchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/conversations.unarchive"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "channel", value: request.channel, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsUnarchivesuccessschemaSchema },
        errorFactory: Conversations.ConversationsUnarchiveError,
      },
      options,
    );
  }
}

export namespace Conversations {
  export type ConversationsArchiveRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
  };

  export class ConversationsArchiveError extends ResponseError<
    Declared<"conversationsArchiveerrorschema1", ConversationsArchiveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsArchiveError> = [
      {
        on: [400, 599],
        kind: "conversationsArchiveerrorschema1",
        decode: { kind: "json", schema: conversationsArchiveerrorschema1Schema },
      },
    ];
  }

  export type ConversationsCloseRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
  };

  export class ConversationsCloseError extends ResponseError<
    Declared<"conversationsCloseerrorschema1", ConversationsCloseerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsCloseError> = [
      {
        on: [400, 599],
        kind: "conversationsCloseerrorschema1",
        decode: { kind: "json", schema: conversationsCloseerrorschema1Schema },
      },
    ];
  }

  export type ConversationsCreateRequest = {
    contentType: ContentType;
    token?: string;
    name?: string;
    isPrivate?: boolean;
  };

  export class ConversationsCreateError extends ResponseError<
    Declared<"conversationsCreateerrorschema1", ConversationsCreateerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsCreateError> = [
      {
        on: [400, 599],
        kind: "conversationsCreateerrorschema1",
        decode: { kind: "json", schema: conversationsCreateerrorschema1Schema },
      },
    ];
  }

  export type ConversationsHistoryRequest = {
    token?: string;
    channel?: string;
    latest?: number;
    oldest?: number;
    inclusive?: boolean;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class ConversationsHistoryError extends ResponseError<
    Declared<"conversationsHistoryerrorschema1", ConversationsHistoryerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsHistoryError> = [
      {
        on: [400, 599],
        kind: "conversationsHistoryerrorschema1",
        decode: { kind: "json", schema: conversationsHistoryerrorschema1Schema },
      },
    ];
  }

  export type ConversationsInfoRequest = {
    token?: string;
    channel?: string;
    includeLocale?: boolean;
    includeNumMembers?: boolean;
    contentType: ContentType;
  };

  export class ConversationsInfoError extends ResponseError<
    Declared<"conversationsInfoerrorschema1", ConversationsInfoerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsInfoError> = [
      {
        on: [400, 599],
        kind: "conversationsInfoerrorschema1",
        decode: { kind: "json", schema: conversationsInfoerrorschema1Schema },
      },
    ];
  }

  export type ConversationsInviteRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    users?: string;
  };

  export class ConversationsInviteError extends ResponseError<
    Declared<"conversationsInviteerrorschema11", ConversationsInviteerrorschema11>
  > {
    static readonly errors: ErrorDecoders<ConversationsInviteError> = [
      {
        on: [400, 599],
        kind: "conversationsInviteerrorschema11",
        decode: { kind: "json", schema: conversationsInviteerrorschema11Schema },
      },
    ];
  }

  export type ConversationsJoinRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
  };

  export class ConversationsJoinError extends ResponseError<
    Declared<"conversationsJoinerrorschema1", ConversationsJoinerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsJoinError> = [
      {
        on: [400, 599],
        kind: "conversationsJoinerrorschema1",
        decode: { kind: "json", schema: conversationsJoinerrorschema1Schema },
      },
    ];
  }

  export type ConversationsKickRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    user?: string;
  };

  export class ConversationsKickError extends ResponseError<
    Declared<"conversationsKickerrorschema1", ConversationsKickerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsKickError> = [
      {
        on: [400, 599],
        kind: "conversationsKickerrorschema1",
        decode: { kind: "json", schema: conversationsKickerrorschema1Schema },
      },
    ];
  }

  export type ConversationsLeaveRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
  };

  export class ConversationsLeaveError extends ResponseError<
    Declared<"conversationsLeaveerrorschema1", ConversationsLeaveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsLeaveError> = [
      {
        on: [400, 599],
        kind: "conversationsLeaveerrorschema1",
        decode: { kind: "json", schema: conversationsLeaveerrorschema1Schema },
      },
    ];
  }

  export type ConversationsListRequest = {
    token?: string;
    excludeArchived?: boolean;
    types?: string;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class ConversationsListError extends ResponseError<
    Declared<"conversationsListerrorschema1", ConversationsListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsListError> = [
      {
        on: [400, 599],
        kind: "conversationsListerrorschema1",
        decode: { kind: "json", schema: conversationsListerrorschema1Schema },
      },
    ];
  }

  export type ConversationsMarkRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    ts?: number;
  };

  export class ConversationsMarkError extends ResponseError<
    Declared<"conversationsMarkerrorschema1", ConversationsMarkerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsMarkError> = [
      {
        on: [400, 599],
        kind: "conversationsMarkerrorschema1",
        decode: { kind: "json", schema: conversationsMarkerrorschema1Schema },
      },
    ];
  }

  export type ConversationsMembersRequest = {
    token?: string;
    channel?: string;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class ConversationsMembersError extends ResponseError<
    Declared<"conversationsMemberserrorschema1", ConversationsMemberserrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsMembersError> = [
      {
        on: [400, 599],
        kind: "conversationsMemberserrorschema1",
        decode: { kind: "json", schema: conversationsMemberserrorschema1Schema },
      },
    ];
  }

  export type ConversationsOpenRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    users?: string;
    returnIm?: boolean;
  };

  export class ConversationsOpenError extends ResponseError<
    Declared<"conversationsOpenerrorschema1", ConversationsOpenerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsOpenError> = [
      {
        on: [400, 599],
        kind: "conversationsOpenerrorschema1",
        decode: { kind: "json", schema: conversationsOpenerrorschema1Schema },
      },
    ];
  }

  export type ConversationsRenameRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    name?: string;
  };

  export class ConversationsRenameError extends ResponseError<
    Declared<"conversationsRenameerrorschema1", ConversationsRenameerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsRenameError> = [
      {
        on: [400, 599],
        kind: "conversationsRenameerrorschema1",
        decode: { kind: "json", schema: conversationsRenameerrorschema1Schema },
      },
    ];
  }

  export type ConversationsRepliesRequest = {
    token?: string;
    channel?: string;
    ts?: number;
    latest?: number;
    oldest?: number;
    inclusive?: boolean;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class ConversationsRepliesError extends ResponseError<
    Declared<"conversationsReplieserrorschema1", ConversationsReplieserrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsRepliesError> = [
      {
        on: [400, 599],
        kind: "conversationsReplieserrorschema1",
        decode: { kind: "json", schema: conversationsReplieserrorschema1Schema },
      },
    ];
  }

  export type ConversationsSetPurposeRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    purpose?: string;
  };

  export class ConversationsSetPurposeError extends ResponseError<
    Declared<"conversationsSetPurposeerrorschema1", ConversationsSetPurposeerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsSetPurposeError> = [
      {
        on: [400, 599],
        kind: "conversationsSetPurposeerrorschema1",
        decode: { kind: "json", schema: conversationsSetPurposeerrorschema1Schema },
      },
    ];
  }

  export type ConversationsSetTopicRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    topic?: string;
  };

  export class ConversationsSetTopicError extends ResponseError<
    Declared<"conversationsSetTopicerrorschema1", ConversationsSetTopicerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsSetTopicError> = [
      {
        on: [400, 599],
        kind: "conversationsSetTopicerrorschema1",
        decode: { kind: "json", schema: conversationsSetTopicerrorschema1Schema },
      },
    ];
  }

  export type ConversationsUnarchiveRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
  };

  export class ConversationsUnarchiveError extends ResponseError<
    Declared<"conversationsUnarchiveerrorschema1", ConversationsUnarchiveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ConversationsUnarchiveError> = [
      {
        on: [400, 599],
        kind: "conversationsUnarchiveerrorschema1",
        decode: { kind: "json", schema: conversationsUnarchiveerrorschema1Schema },
      },
    ];
  }
}
