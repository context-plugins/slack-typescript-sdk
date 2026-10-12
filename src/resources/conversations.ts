import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * conversations_archive
   *
   * @remarks
   * Archives a conversation.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsArchiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsArchive(
    request: Conversations.ConversationsArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsArchivesuccessschema, Conversations.ConversationsArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.archive"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_close
   *
   * @remarks
   * Closes a direct message or multi-person direct message.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsCloseError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsClose(
    request: Conversations.ConversationsCloseRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsClosesuccessschema, Conversations.ConversationsCloseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.close"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_create
   *
   * @remarks
   * Initiates a public or private channel-based conversation
   *
   * @returns If successful, the command returns a rather stark [conversation
   * object](/types/conversation)
   *
   * @throws {@link Conversations.ConversationsCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsCreate(
    request: Conversations.ConversationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsCreatesuccessschema, Conversations.ConversationsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.create"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_history
   *
   * @remarks
   * Fetches a conversation's history of messages and events.
   *
   * @returns Typical success response containing a channel's messages
   *
   * @throws {@link Conversations.ConversationsHistoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsHistory(
    request: Conversations.ConversationsHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsHistorysuccessschema, Conversations.ConversationsHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations.history"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "latest", value: request.latest, schema: s.optional(s.float64()) },
          { name: "oldest", value: request.oldest, schema: s.optional(s.float64()) },
          { name: "inclusive", value: request.inclusive, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * conversations_info
   *
   * @remarks
   * Retrieve information about a conversation.
   *
   * @returns Typical success response for a public channel. (Also, a response from a private
   * channel and a multi-party IM is very similar to this example.)
   *
   * @throws {@link Conversations.ConversationsInfoError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsInfo(
    request: Conversations.ConversationsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsInfosuccessschema, Conversations.ConversationsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * conversations_invite
   *
   * @remarks
   * Invites users to a channel.
   *
   * @returns Typical success response when an invitation is extended
   *
   * @throws {@link Conversations.ConversationsInviteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsInvite(
    request: Conversations.ConversationsInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsInviteerrorschema, Conversations.ConversationsInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.invite"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_join
   *
   * @remarks
   * Joins an existing conversation.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsJoinError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsJoin(
    request: Conversations.ConversationsJoinRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsJoinsuccessschema, Conversations.ConversationsJoinError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.join"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_kick
   *
   * @remarks
   * Removes a user from a conversation.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsKickError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsKick(
    request: Conversations.ConversationsKickRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsKicksuccessschema, Conversations.ConversationsKickError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.kick"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_leave
   *
   * @remarks
   * Leaves a conversation.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsLeaveError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsLeave(
    request: Conversations.ConversationsLeaveRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsLeavesuccessschema, Conversations.ConversationsLeaveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.leave"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_list
   *
   * @remarks
   * Lists all channels in a Slack team.
   *
   * @returns Typical success response with only public channels
   *
   * @throws {@link Conversations.ConversationsListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsList(
    request: Conversations.ConversationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsListsuccessschema, Conversations.ConversationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "exclude_archived", value: request.excludeArchived, schema: s.optional(s.boolean()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * conversations_mark
   *
   * @remarks
   * Sets the read cursor in a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsMarkError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsMark(
    request: Conversations.ConversationsMarkRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsMarksuccessschema, Conversations.ConversationsMarkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.mark"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "ts", value: request.ts, schema: s.optional(s.float64()) },
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

  /**
   * conversations_members
   *
   * @remarks
   * Retrieve members of a conversation.
   *
   * @returns Typical paginated success response
   *
   * @throws {@link Conversations.ConversationsMembersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsMembers(
    request: Conversations.ConversationsMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsMemberssuccessschema, Conversations.ConversationsMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations.members"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * conversations_open
   *
   * @remarks
   * Opens or resumes a direct message or multi-person direct message.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsOpenError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsOpen(
    request: Conversations.ConversationsOpenRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsOpensuccessschema, Conversations.ConversationsOpenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.open"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_rename
   *
   * @remarks
   * Renames a conversation.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsRenameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsRename(
    request: Conversations.ConversationsRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsRenamesuccessschema, Conversations.ConversationsRenameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.rename"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_replies
   *
   * @remarks
   * Retrieve a thread of messages posted to a conversation
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsRepliesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsReplies(
    request: Conversations.ConversationsRepliesRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsRepliessuccessschema, Conversations.ConversationsRepliesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations.replies"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "ts", value: request.ts, schema: s.optional(s.float64()) },
          { name: "latest", value: request.latest, schema: s.optional(s.float64()) },
          { name: "oldest", value: request.oldest, schema: s.optional(s.float64()) },
          { name: "inclusive", value: request.inclusive, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * conversations_setPurpose
   *
   * @remarks
   * Sets the purpose for a conversation.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsSetPurposeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsSetPurpose(
    request: Conversations.ConversationsSetPurposeRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsSetPurposesuccessschema, Conversations.ConversationsSetPurposeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.setPurpose"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_setTopic
   *
   * @remarks
   * Sets the topic for a conversation.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsSetTopicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsSetTopic(
    request: Conversations.ConversationsSetTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsSetTopicsuccessschema, Conversations.ConversationsSetTopicError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.setTopic"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * conversations_unarchive
   *
   * @remarks
   * Reverses conversation archival.
   *
   * @returns Typical success response
   *
   * @throws {@link Conversations.ConversationsUnarchiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationsUnarchive(
    request: Conversations.ConversationsUnarchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsUnarchivesuccessschema, Conversations.ConversationsUnarchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations.unarchive"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** ID of conversation to archive */
    channel?: string;
  };

  export class ConversationsArchiveError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsArchiveerrorschema1", ConversationsArchiveerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsArchiveError> = [
      {
        on: "default",
        kind: "conversationsArchiveerrorschema1",
        decode: { kind: "json", schema: conversationsArchiveerrorschema1Schema },
      },
    ];
  }

  export type ConversationsCloseRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** Conversation to close. */
    channel?: string;
  };

  export class ConversationsCloseError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsCloseerrorschema1", ConversationsCloseerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsCloseError> = [
      {
        on: "default",
        kind: "conversationsCloseerrorschema1",
        decode: { kind: "json", schema: conversationsCloseerrorschema1Schema },
      },
    ];
  }

  export type ConversationsCreateRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** Name of the public or private channel to create */
    name?: string;
    /** Create a private channel instead of a public one */
    isPrivate?: boolean;
  };

  export class ConversationsCreateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsCreateerrorschema1", ConversationsCreateerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsCreateError> = [
      {
        on: "default",
        kind: "conversationsCreateerrorschema1",
        decode: { kind: "json", schema: conversationsCreateerrorschema1Schema },
      },
    ];
  }

  export type ConversationsHistoryRequest = {
    /** Authentication token. Requires scope: `conversations:history` */
    token?: string;
    /** Conversation ID to fetch history for. */
    channel?: string;
    /** End of time range of messages to include in results. */
    latest?: number;
    /** Start of time range of messages to include in results. */
    oldest?: number;
    /**
     * Include messages with latest or oldest timestamp in results only when either timestamp is
     * specified.
     */
    inclusive?: boolean;
    /**
     * The maximum number of items to return. Fewer than the requested number of items may be
     * returned, even if the end of the users list hasn't been reached.
     */
    limit?: number;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class ConversationsHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsHistoryerrorschema1", ConversationsHistoryerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsHistoryError> = [
      {
        on: "default",
        kind: "conversationsHistoryerrorschema1",
        decode: { kind: "json", schema: conversationsHistoryerrorschema1Schema },
      },
    ];
  }

  export type ConversationsInfoRequest = {
    /** Authentication token. Requires scope: `conversations:read` */
    token?: string;
    /** Conversation ID to learn more about */
    channel?: string;
    /** Set this to `true` to receive the locale for this conversation. Defaults to `false` */
    includeLocale?: boolean;
    /**
     * Set to `true` to include the member count for the specified conversation. Defaults to `false`
     */
    includeNumMembers?: boolean;
    contentType: ContentType;
  };

  export class ConversationsInfoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsInfoerrorschema1", ConversationsInfoerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsInfoError> = [
      {
        on: "default",
        kind: "conversationsInfoerrorschema1",
        decode: { kind: "json", schema: conversationsInfoerrorschema1Schema },
      },
    ];
  }

  export type ConversationsInviteRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** The ID of the public or private channel to invite user(s) to. */
    channel?: string;
    /** A comma separated list of user IDs. Up to 1000 users may be listed. */
    users?: string;
  };

  export class ConversationsInviteError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsInviteerrorschema11", ConversationsInviteerrorschema11>
    >;

    static readonly errors: ErrorDecoders<ConversationsInviteError> = [
      {
        on: "default",
        kind: "conversationsInviteerrorschema11",
        decode: { kind: "json", schema: conversationsInviteerrorschema11Schema },
      },
    ];
  }

  export type ConversationsJoinRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `channels:write` */
    token?: string;
    /** ID of conversation to join */
    channel?: string;
  };

  export class ConversationsJoinError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsJoinerrorschema1", ConversationsJoinerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsJoinError> = [
      {
        on: "default",
        kind: "conversationsJoinerrorschema1",
        decode: { kind: "json", schema: conversationsJoinerrorschema1Schema },
      },
    ];
  }

  export type ConversationsKickRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** ID of conversation to remove user from. */
    channel?: string;
    /** User ID to be removed. */
    user?: string;
  };

  export class ConversationsKickError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsKickerrorschema1", ConversationsKickerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsKickError> = [
      {
        on: "default",
        kind: "conversationsKickerrorschema1",
        decode: { kind: "json", schema: conversationsKickerrorschema1Schema },
      },
    ];
  }

  export type ConversationsLeaveRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** Conversation to leave */
    channel?: string;
  };

  export class ConversationsLeaveError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsLeaveerrorschema1", ConversationsLeaveerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsLeaveError> = [
      {
        on: "default",
        kind: "conversationsLeaveerrorschema1",
        decode: { kind: "json", schema: conversationsLeaveerrorschema1Schema },
      },
    ];
  }

  export type ConversationsListRequest = {
    /** Authentication token. Requires scope: `conversations:read` */
    token?: string;
    /** Set to `true` to exclude archived channels from the list */
    excludeArchived?: boolean;
    /**
     * Mix and match channel types by providing a comma-separated list of any combination of
     * `public_channel`, `private_channel`, `mpim`, `im`
     */
    types?: string;
    /**
     * The maximum number of items to return. Fewer than the requested number of items may be
     * returned, even if the end of the list hasn't been reached. Must be an integer no larger than
     * 1000.
     */
    limit?: number;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class ConversationsListError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsListerrorschema1", ConversationsListerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsListError> = [
      {
        on: "default",
        kind: "conversationsListerrorschema1",
        decode: { kind: "json", schema: conversationsListerrorschema1Schema },
      },
    ];
  }

  export type ConversationsMarkRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** Channel or conversation to set the read cursor for. */
    channel?: string;
    /** Unique identifier of message you want marked as most recently seen in this conversation. */
    ts?: number;
  };

  export class ConversationsMarkError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsMarkerrorschema1", ConversationsMarkerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsMarkError> = [
      {
        on: "default",
        kind: "conversationsMarkerrorschema1",
        decode: { kind: "json", schema: conversationsMarkerrorschema1Schema },
      },
    ];
  }

  export type ConversationsMembersRequest = {
    /** Authentication token. Requires scope: `conversations:read` */
    token?: string;
    /** ID of the conversation to retrieve members for */
    channel?: string;
    /**
     * The maximum number of items to return. Fewer than the requested number of items may be
     * returned, even if the end of the users list hasn't been reached.
     */
    limit?: number;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class ConversationsMembersError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsMemberserrorschema1", ConversationsMemberserrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsMembersError> = [
      {
        on: "default",
        kind: "conversationsMemberserrorschema1",
        decode: { kind: "json", schema: conversationsMemberserrorschema1Schema },
      },
    ];
  }

  export type ConversationsOpenRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /**
     * Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field
     * instead.
     */
    channel?: string;
    /**
     * Comma separated lists of users. If only one user is included, this creates a 1:1 DM. The
     * ordering of the users is preserved whenever a multi-person direct message is returned. Supply
     * a `channel` when not supplying `users`.
     */
    users?: string;
    /** Boolean, indicates you want the full IM channel definition in the response. */
    returnIm?: boolean;
  };

  export class ConversationsOpenError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsOpenerrorschema1", ConversationsOpenerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsOpenError> = [
      {
        on: "default",
        kind: "conversationsOpenerrorschema1",
        decode: { kind: "json", schema: conversationsOpenerrorschema1Schema },
      },
    ];
  }

  export type ConversationsRenameRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** ID of conversation to rename */
    channel?: string;
    /** New name for conversation. */
    name?: string;
  };

  export class ConversationsRenameError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsRenameerrorschema1", ConversationsRenameerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsRenameError> = [
      {
        on: "default",
        kind: "conversationsRenameerrorschema1",
        decode: { kind: "json", schema: conversationsRenameerrorschema1Schema },
      },
    ];
  }

  export type ConversationsRepliesRequest = {
    /** Authentication token. Requires scope: `conversations:history` */
    token?: string;
    /** Conversation ID to fetch thread from. */
    channel?: string;
    /**
     * Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing
     * message with 0 or more replies. If there are no replies then just the single message
     * referenced by `ts` will return - it is just an ordinary, unthreaded message.
     */
    ts?: number;
    /** End of time range of messages to include in results. */
    latest?: number;
    /** Start of time range of messages to include in results. */
    oldest?: number;
    /**
     * Include messages with latest or oldest timestamp in results only when either timestamp is
     * specified.
     */
    inclusive?: boolean;
    /**
     * The maximum number of items to return. Fewer than the requested number of items may be
     * returned, even if the end of the users list hasn't been reached.
     */
    limit?: number;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class ConversationsRepliesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsReplieserrorschema1", ConversationsReplieserrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsRepliesError> = [
      {
        on: "default",
        kind: "conversationsReplieserrorschema1",
        decode: { kind: "json", schema: conversationsReplieserrorschema1Schema },
      },
    ];
  }

  export type ConversationsSetPurposeRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** Conversation to set the purpose of */
    channel?: string;
    /** A new, specialer purpose */
    purpose?: string;
  };

  export class ConversationsSetPurposeError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsSetPurposeerrorschema1", ConversationsSetPurposeerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsSetPurposeError> = [
      {
        on: "default",
        kind: "conversationsSetPurposeerrorschema1",
        decode: { kind: "json", schema: conversationsSetPurposeerrorschema1Schema },
      },
    ];
  }

  export type ConversationsSetTopicRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** Conversation to set the topic of */
    channel?: string;
    /** The new topic string. Does not support formatting or linkification. */
    topic?: string;
  };

  export class ConversationsSetTopicError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsSetTopicerrorschema1", ConversationsSetTopicerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsSetTopicError> = [
      {
        on: "default",
        kind: "conversationsSetTopicerrorschema1",
        decode: { kind: "json", schema: conversationsSetTopicerrorschema1Schema },
      },
    ];
  }

  export type ConversationsUnarchiveRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `conversations:write` */
    token?: string;
    /** ID of conversation to unarchive */
    channel?: string;
  };

  export class ConversationsUnarchiveError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"conversationsUnarchiveerrorschema1", ConversationsUnarchiveerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ConversationsUnarchiveError> = [
      {
        on: "default",
        kind: "conversationsUnarchiveerrorschema1",
        decode: { kind: "json", schema: conversationsUnarchiveerrorschema1Schema },
      },
    ];
  }
}
