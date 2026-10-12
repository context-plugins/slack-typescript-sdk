import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  chatDeleteScheduledMessageerrorschema1Schema,
  type ChatDeleteScheduledMessageerrorschema1,
} from "../models/chat-delete-scheduled-messageerrorschema1.js";
import {
  chatDeleteScheduledMessageschemaSchema,
  type ChatDeleteScheduledMessageschema,
} from "../models/chat-delete-scheduled-messageschema.js";
import {
  chatDeleteerrorschema1Schema,
  type ChatDeleteerrorschema1,
} from "../models/chat-deleteerrorschema1.js";
import {
  chatDeletesuccessschemaSchema,
  type ChatDeletesuccessschema,
} from "../models/chat-deletesuccessschema.js";
import {
  chatGetPermalinkerrorschema1Schema,
  type ChatGetPermalinkerrorschema1,
} from "../models/chat-get-permalinkerrorschema1.js";
import {
  chatGetPermalinksuccessschemaSchema,
  type ChatGetPermalinksuccessschema,
} from "../models/chat-get-permalinksuccessschema.js";
import {
  chatMeMessageerrorschema1Schema,
  type ChatMeMessageerrorschema1,
} from "../models/chat-me-messageerrorschema1.js";
import { chatMeMessageschemaSchema, type ChatMeMessageschema } from "../models/chat-me-messageschema.js";
import {
  chatPostEphemeralerrorschema1Schema,
  type ChatPostEphemeralerrorschema1,
} from "../models/chat-post-ephemeralerrorschema1.js";
import {
  chatPostEphemeralsuccessschemaSchema,
  type ChatPostEphemeralsuccessschema,
} from "../models/chat-post-ephemeralsuccessschema.js";
import {
  chatPostMessageerrorschema1Schema,
  type ChatPostMessageerrorschema1,
} from "../models/chat-post-messageerrorschema1.js";
import {
  chatPostMessagesuccessschemaSchema,
  type ChatPostMessagesuccessschema,
} from "../models/chat-post-messagesuccessschema.js";
import {
  chatScheduleMessageerrorschema1Schema,
  type ChatScheduleMessageerrorschema1,
} from "../models/chat-schedule-messageerrorschema1.js";
import {
  chatScheduleMessagesuccessschemaSchema,
  type ChatScheduleMessagesuccessschema,
} from "../models/chat-schedule-messagesuccessschema.js";
import {
  chatScheduledMessagesListerrorschema1Schema,
  type ChatScheduledMessagesListerrorschema1,
} from "../models/chat-scheduled-messages-listerrorschema1.js";
import {
  chatScheduledMessagesListschemaSchema,
  type ChatScheduledMessagesListschema,
} from "../models/chat-scheduled-messages-listschema.js";
import {
  chatUnfurlerrorschema1Schema,
  type ChatUnfurlerrorschema1,
} from "../models/chat-unfurlerrorschema1.js";
import {
  chatUnfurlsuccessschemaSchema,
  type ChatUnfurlsuccessschema,
} from "../models/chat-unfurlsuccessschema.js";
import {
  chatUpdateerrorschema1Schema,
  type ChatUpdateerrorschema1,
} from "../models/chat-updateerrorschema1.js";
import {
  chatUpdatesuccessschemaSchema,
  type ChatUpdatesuccessschema,
} from "../models/chat-updatesuccessschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class Chat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * chat_delete
   *
   * @remarks
   * Deletes a message.
   *
   * @returns Typical success response
   *
   * @throws {@link Chat.ChatDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatDelete(
    request: Chat.ChatDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatDeletesuccessschema, Chat.ChatDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/chat.delete"),
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
            { name: "ts", value: request.ts, schema: s.optional(s.float64()) },
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "as_user", value: request.asUser, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatDeletesuccessschemaSchema },
        errorFactory: Chat.ChatDeleteError,
      },
      options,
    );
  }

  /**
   * chat_deleteScheduledMessage
   *
   * @remarks
   * Deletes a pending scheduled message from the queue.
   *
   * @returns Typical success response
   *
   * @throws {@link Chat.ChatDeleteScheduledMessageError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatDeleteScheduledMessage(
    request: Chat.ChatDeleteScheduledMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatDeleteScheduledMessageschema, Chat.ChatDeleteScheduledMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/chat.deleteScheduledMessage"),
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
            { name: "channel", value: request.channel, schema: s.string() },
            { name: "scheduled_message_id", value: request.scheduledMessageId, schema: s.string() },
            { name: "as_user", value: request.asUser, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatDeleteScheduledMessageschemaSchema },
        errorFactory: Chat.ChatDeleteScheduledMessageError,
      },
      options,
    );
  }

  /**
   * chat_getPermalink
   *
   * @remarks
   * Retrieve a permalink URL for a specific extant message
   *
   * @returns Standard success response
   *
   * @throws {@link Chat.ChatGetPermalinkError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatGetPermalink(
    request: Chat.ChatGetPermalinkRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatGetPermalinksuccessschema, Chat.ChatGetPermalinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/chat.getPermalink"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel", value: request.channel, schema: s.string() },
          { name: "message_ts", value: request.messageTs, schema: s.string() },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chatGetPermalinksuccessschemaSchema },
        errorFactory: Chat.ChatGetPermalinkError,
      },
      options,
    );
  }

  /**
   * chat_meMessage
   *
   * @remarks
   * Share a me message into a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Chat.ChatMeMessageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatMeMessage(
    request: Chat.ChatMeMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatMeMessageschema, Chat.ChatMeMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/chat.meMessage"),
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
            { name: "text", value: request.text, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatMeMessageschemaSchema },
        errorFactory: Chat.ChatMeMessageError,
      },
      options,
    );
  }

  /**
   * chat_postEphemeral
   *
   * @remarks
   * Sends an ephemeral message to a user in a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Chat.ChatPostEphemeralError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatPostEphemeral(
    request: Chat.ChatPostEphemeralRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatPostEphemeralsuccessschema, Chat.ChatPostEphemeralError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/chat.postEphemeral"),
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
            { name: "channel", value: request.channel, schema: s.string() },
            { name: "user", value: request.user, schema: s.string() },
            { name: "as_user", value: request.asUser, schema: s.optional(s.boolean()) },
            { name: "attachments", value: request.attachments, schema: s.optional(s.string()) },
            { name: "blocks", value: request.blocks, schema: s.optional(s.string()) },
            { name: "icon_emoji", value: request.iconEmoji, schema: s.optional(s.string()) },
            { name: "icon_url", value: request.iconUrl, schema: s.optional(s.string()) },
            { name: "link_names", value: request.linkNames, schema: s.optional(s.boolean()) },
            { name: "parse", value: request.parse, schema: s.optional(s.string()) },
            { name: "text", value: request.text, schema: s.optional(s.string()) },
            { name: "thread_ts", value: request.threadTs, schema: s.optional(s.string()) },
            { name: "username", value: request.username, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatPostEphemeralsuccessschemaSchema },
        errorFactory: Chat.ChatPostEphemeralError,
      },
      options,
    );
  }

  /**
   * chat_postMessage
   *
   * @remarks
   * Sends a message to a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Chat.ChatPostMessageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatPostMessage(
    request: Chat.ChatPostMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatPostMessagesuccessschema, Chat.ChatPostMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/chat.postMessage"),
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
            { name: "channel", value: request.channel, schema: s.string() },
            { name: "as_user", value: request.asUser, schema: s.optional(s.string()) },
            { name: "attachments", value: request.attachments, schema: s.optional(s.string()) },
            { name: "blocks", value: request.blocks, schema: s.optional(s.string()) },
            { name: "icon_emoji", value: request.iconEmoji, schema: s.optional(s.string()) },
            { name: "icon_url", value: request.iconUrl, schema: s.optional(s.string()) },
            { name: "link_names", value: request.linkNames, schema: s.optional(s.boolean()) },
            { name: "mrkdwn", value: request.mrkdwn, schema: s.optional(s.boolean()) },
            { name: "parse", value: request.parse, schema: s.optional(s.string()) },
            { name: "reply_broadcast", value: request.replyBroadcast, schema: s.optional(s.boolean()) },
            { name: "text", value: request.text, schema: s.optional(s.string()) },
            { name: "thread_ts", value: request.threadTs, schema: s.optional(s.string()) },
            { name: "unfurl_links", value: request.unfurlLinks, schema: s.optional(s.boolean()) },
            { name: "unfurl_media", value: request.unfurlMedia, schema: s.optional(s.boolean()) },
            { name: "username", value: request.username, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatPostMessagesuccessschemaSchema },
        errorFactory: Chat.ChatPostMessageError,
      },
      options,
    );
  }

  /**
   * chat_scheduleMessage
   *
   * @remarks
   * Schedules a message to be sent to a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Chat.ChatScheduleMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatScheduleMessage(
    request: Chat.ChatScheduleMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatScheduleMessagesuccessschema, Chat.ChatScheduleMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/chat.scheduleMessage"),
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
            { name: "text", value: request.text, schema: s.optional(s.string()) },
            { name: "post_at", value: request.postAt, schema: s.optional(s.string()) },
            { name: "parse", value: request.parse, schema: s.optional(s.string()) },
            { name: "as_user", value: request.asUser, schema: s.optional(s.boolean()) },
            { name: "link_names", value: request.linkNames, schema: s.optional(s.boolean()) },
            { name: "attachments", value: request.attachments, schema: s.optional(s.string()) },
            { name: "blocks", value: request.blocks, schema: s.optional(s.string()) },
            { name: "unfurl_links", value: request.unfurlLinks, schema: s.optional(s.boolean()) },
            { name: "unfurl_media", value: request.unfurlMedia, schema: s.optional(s.boolean()) },
            { name: "thread_ts", value: request.threadTs, schema: s.optional(s.float64()) },
            { name: "reply_broadcast", value: request.replyBroadcast, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatScheduleMessagesuccessschemaSchema },
        errorFactory: Chat.ChatScheduleMessageError,
      },
      options,
    );
  }

  /**
   * chat_scheduledMessages_list
   *
   * @remarks
   * Returns a list of scheduled messages.
   *
   * @returns Typical success response
   *
   * @throws {@link Chat.ChatScheduledMessagesListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatScheduledMessagesList(
    request: Chat.ChatScheduledMessagesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatScheduledMessagesListschema, Chat.ChatScheduledMessagesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/chat.scheduledMessages.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "latest", value: request.latest, schema: s.optional(s.float64()) },
          { name: "oldest", value: request.oldest, schema: s.optional(s.float64()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chatScheduledMessagesListschemaSchema },
        errorFactory: Chat.ChatScheduledMessagesListError,
      },
      options,
    );
  }

  /**
   * chat_unfurl
   *
   * @remarks
   * Provide custom unfurl behavior for user-posted URLs
   *
   * @returns Typical, minimal success response
   *
   * @throws {@link Chat.ChatUnfurlError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatUnfurl(
    request: Chat.ChatUnfurlRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatUnfurlsuccessschema, Chat.ChatUnfurlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/chat.unfurl"),
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
            { name: "channel", value: request.channel, schema: s.string() },
            { name: "ts", value: request.ts, schema: s.string() },
            { name: "unfurls", value: request.unfurls, schema: s.optional(s.string()) },
            { name: "user_auth_message", value: request.userAuthMessage, schema: s.optional(s.string()) },
            { name: "user_auth_required", value: request.userAuthRequired, schema: s.optional(s.boolean()) },
            { name: "user_auth_url", value: request.userAuthUrl, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatUnfurlsuccessschemaSchema },
        errorFactory: Chat.ChatUnfurlError,
      },
      options,
    );
  }

  /**
   * chat_update
   *
   * @remarks
   * Updates a message.
   *
   * @returns Typical success response
   *
   * @throws {@link Chat.ChatUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatUpdate(
    request: Chat.ChatUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatUpdatesuccessschema, Chat.ChatUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/chat.update"),
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
            { name: "channel", value: request.channel, schema: s.string() },
            { name: "ts", value: request.ts, schema: s.string() },
            { name: "as_user", value: request.asUser, schema: s.optional(s.string()) },
            { name: "attachments", value: request.attachments, schema: s.optional(s.string()) },
            { name: "blocks", value: request.blocks, schema: s.optional(s.string()) },
            { name: "link_names", value: request.linkNames, schema: s.optional(s.string()) },
            { name: "parse", value: request.parse, schema: s.optional(s.string()) },
            { name: "text", value: request.text, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatUpdatesuccessschemaSchema },
        errorFactory: Chat.ChatUpdateError,
      },
      options,
    );
  }
}

export namespace Chat {
  export type ChatDeleteRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `chat:write` */
    token?: string;
    /** Timestamp of the message to be deleted. */
    ts?: number;
    /** Channel containing the message to be deleted. */
    channel?: string;
    /**
     * Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot
     * users](/bot-users) in this context are considered authed users. If unused or false, the
     * message will be deleted with `chat:write:bot` scope.
     */
    asUser?: boolean;
  };

  export class ChatDeleteError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"chatDeleteerrorschema1", ChatDeleteerrorschema1>>;

    static readonly errors: ErrorDecoders<ChatDeleteError> = [
      {
        on: "default",
        kind: "chatDeleteerrorschema1",
        decode: { kind: "json", schema: chatDeleteerrorschema1Schema },
      },
    ];
  }

  export type ChatDeleteScheduledMessageRequest = {
    /** Authentication token. Requires scope: `chat:write` */
    token: string;
    contentType: ContentType;
    /** The channel the scheduled_message is posting to */
    channel: string;
    /** `scheduled_message_id` returned from call to chat.scheduleMessage */
    scheduledMessageId: string;
    /**
     * Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot
     * users](/bot-users) in this context are considered authed users. If unused or false, the
     * message will be deleted with `chat:write:bot` scope.
     */
    asUser?: boolean;
  };

  export class ChatDeleteScheduledMessageError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"chatDeleteScheduledMessageerrorschema1", ChatDeleteScheduledMessageerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ChatDeleteScheduledMessageError> = [
      {
        on: "default",
        kind: "chatDeleteScheduledMessageerrorschema1",
        decode: { kind: "json", schema: chatDeleteScheduledMessageerrorschema1Schema },
      },
    ];
  }

  export type ChatGetPermalinkRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    /** The ID of the conversation or channel containing the message */
    channel: string;
    /** A message's `ts` value, uniquely identifying it within a channel */
    messageTs: string;
    contentType: ContentType;
  };

  export class ChatGetPermalinkError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"chatGetPermalinkerrorschema1", ChatGetPermalinkerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ChatGetPermalinkError> = [
      {
        on: "default",
        kind: "chatGetPermalinkerrorschema1",
        decode: { kind: "json", schema: chatGetPermalinkerrorschema1Schema },
      },
    ];
  }

  export type ChatMeMessageRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `chat:write` */
    token?: string;
    /**
     * Channel to send message to. Can be a public channel, private group or IM channel. Can be an
     * encoded ID, or a name.
     */
    channel?: string;
    /** Text of the message to send. */
    text?: string;
  };

  export class ChatMeMessageError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"chatMeMessageerrorschema1", ChatMeMessageerrorschema1>>;

    static readonly errors: ErrorDecoders<ChatMeMessageError> = [
      {
        on: "default",
        kind: "chatMeMessageerrorschema1",
        decode: { kind: "json", schema: chatMeMessageerrorschema1Schema },
      },
    ];
  }

  export type ChatPostEphemeralRequest = {
    /** Authentication token. Requires scope: `chat:write` */
    token: string;
    contentType: ContentType;
    /**
     * Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.
     */
    channel: string;
    /**
     * `id` of the user who will receive the ephemeral message. The user should be in the channel
     * specified by the `channel` argument.
     */
    user: string;
    /**
     * Pass true to post the message as the authed user. Defaults to true if the chat:write:bot
     * scope is not included. Otherwise, defaults to false.
     */
    asUser?: boolean;
    /** A JSON-based array of structured attachments, presented as a URL-encoded string. */
    attachments?: string;
    /** A JSON-based array of structured blocks, presented as a URL-encoded string. */
    blocks?: string;
    /**
     * Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction
     * with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.
     */
    iconEmoji?: string;
    /**
     * URL to an image to use as the icon for this message. Must be used in conjunction with
     * `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.
     */
    iconUrl?: string;
    /** Find and link channel names and usernames. */
    linkNames?: boolean;
    /** Change how messages are treated. Defaults to `none`. See [below](#formatting). */
    parse?: string;
    /**
     * How this field works and whether it is required depends on other fields you use in your API
     * call. [See below](#text_usage) for more detail.
     */
    text?: string;
    /**
     * Provide another message's `ts` value to post this message in a thread. Avoid using a reply's
     * `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if
     * there is already an active thread.
     */
    threadTs?: string;
    /**
     * Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise
     * ignored. See [authorship](#authorship) below.
     */
    username?: string;
  };

  export class ChatPostEphemeralError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"chatPostEphemeralerrorschema1", ChatPostEphemeralerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ChatPostEphemeralError> = [
      {
        on: "default",
        kind: "chatPostEphemeralerrorschema1",
        decode: { kind: "json", schema: chatPostEphemeralerrorschema1Schema },
      },
    ];
  }

  export type ChatPostMessageRequest = {
    /** Authentication token. Requires scope: `chat:write` */
    token: string;
    contentType: ContentType;
    /**
     * Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.
     * See [below](#channels) for more details.
     */
    channel: string;
    /**
     * Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See
     * [authorship](#authorship) below.
     */
    asUser?: string;
    /** A JSON-based array of structured attachments, presented as a URL-encoded string. */
    attachments?: string;
    /** A JSON-based array of structured blocks, presented as a URL-encoded string. */
    blocks?: string;
    /**
     * Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction
     * with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.
     */
    iconEmoji?: string;
    /**
     * URL to an image to use as the icon for this message. Must be used in conjunction with
     * `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.
     */
    iconUrl?: string;
    /** Find and link channel names and usernames. */
    linkNames?: boolean;
    /** Disable Slack markup parsing by setting to `false`. Enabled by default. */
    mrkdwn?: boolean;
    /** Change how messages are treated. Defaults to `none`. See [below](#formatting). */
    parse?: string;
    /**
     * Used in conjunction with `thread_ts` and indicates whether reply should be made visible to
     * everyone in the channel or conversation. Defaults to `false`.
     */
    replyBroadcast?: boolean;
    /**
     * How this field works and whether it is required depends on other fields you use in your API
     * call. [See below](#text_usage) for more detail.
     */
    text?: string;
    /**
     * Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts`
     * value; use its parent instead.
     */
    threadTs?: string;
    /** Pass true to enable unfurling of primarily text-based content. */
    unfurlLinks?: boolean;
    /** Pass false to disable unfurling of media content. */
    unfurlMedia?: boolean;
    /**
     * Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise
     * ignored. See [authorship](#authorship) below.
     */
    username?: string;
  };

  export class ChatPostMessageError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"chatPostMessageerrorschema1", ChatPostMessageerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ChatPostMessageError> = [
      {
        on: "default",
        kind: "chatPostMessageerrorschema1",
        decode: { kind: "json", schema: chatPostMessageerrorschema1Schema },
      },
    ];
  }

  export type ChatScheduleMessageRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `chat:write` */
    token?: string;
    /**
     * Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name.
     * See [below](#channels) for more details.
     */
    channel?: string;
    /**
     * How this field works and whether it is required depends on other fields you use in your API
     * call. [See below](#text_usage) for more detail.
     */
    text?: string;
    /** Unix EPOCH timestamp of time in future to send the message. */
    postAt?: string;
    /**
     * Change how messages are treated. Defaults to `none`. See
     * [chat.postMessage](chat.postMessage#formatting).
     */
    parse?: string;
    /**
     * Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See
     * [chat.postMessage](chat.postMessage#authorship).
     */
    asUser?: boolean;
    /** Find and link channel names and usernames. */
    linkNames?: boolean;
    /** A JSON-based array of structured attachments, presented as a URL-encoded string. */
    attachments?: string;
    /** A JSON-based array of structured blocks, presented as a URL-encoded string. */
    blocks?: string;
    /** Pass true to enable unfurling of primarily text-based content. */
    unfurlLinks?: boolean;
    /** Pass false to disable unfurling of media content. */
    unfurlMedia?: boolean;
    /**
     * Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts`
     * value; use its parent instead.
     */
    threadTs?: number;
    /**
     * Used in conjunction with `thread_ts` and indicates whether reply should be made visible to
     * everyone in the channel or conversation. Defaults to `false`.
     */
    replyBroadcast?: boolean;
  };

  export class ChatScheduleMessageError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"chatScheduleMessageerrorschema1", ChatScheduleMessageerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ChatScheduleMessageError> = [
      {
        on: "default",
        kind: "chatScheduleMessageerrorschema1",
        decode: { kind: "json", schema: chatScheduleMessageerrorschema1Schema },
      },
    ];
  }

  export type ChatScheduledMessagesListRequest = {
    /** The channel of the scheduled messages */
    channel?: string;
    /** A UNIX timestamp of the latest value in the time range */
    latest?: number;
    /** A UNIX timestamp of the oldest value in the time range */
    oldest?: number;
    /** Maximum number of original entries to return. */
    limit?: number;
    /**
     * For pagination purposes, this is the `cursor` value returned from a previous call to
     * `chat.scheduledmessages.list` indicating where you want to start this call from.
     */
    cursor?: string;
    contentType: ContentType;
    /** Authentication token. Requires scope: `none` */
    token?: string;
  };

  export class ChatScheduledMessagesListError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"chatScheduledMessagesListerrorschema1", ChatScheduledMessagesListerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ChatScheduledMessagesListError> = [
      {
        on: "default",
        kind: "chatScheduledMessagesListerrorschema1",
        decode: { kind: "json", schema: chatScheduledMessagesListerrorschema1Schema },
      },
    ];
  }

  export type ChatUnfurlRequest = {
    /** Authentication token. Requires scope: `links:write` */
    token: string;
    contentType: ContentType;
    /** Channel ID of the message */
    channel: string;
    /** Timestamp of the message to add unfurl behavior to. */
    ts: string;
    /**
     * URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their
     * unfurl blocks or message attachments.
     */
    unfurls?: string;
    /**
     * Provide a simply-formatted string to send as an ephemeral message to the user as invitation
     * to authenticate further and enable full unfurling behavior
     */
    userAuthMessage?: string;
    /**
     * Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for
     * this domain
     */
    userAuthRequired?: boolean;
    /**
     * Send users to this custom URL where they will complete authentication in your app to fully
     * trigger unfurling. Value should be properly URL-encoded.
     */
    userAuthUrl?: string;
  };

  export class ChatUnfurlError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"chatUnfurlerrorschema1", ChatUnfurlerrorschema1>>;

    static readonly errors: ErrorDecoders<ChatUnfurlError> = [
      {
        on: "default",
        kind: "chatUnfurlerrorschema1",
        decode: { kind: "json", schema: chatUnfurlerrorschema1Schema },
      },
    ];
  }

  export type ChatUpdateRequest = {
    /** Authentication token. Requires scope: `chat:write` */
    token: string;
    contentType: ContentType;
    /** Channel containing the message to be updated. */
    channel: string;
    /** Timestamp of the message to be updated. */
    ts: string;
    /**
     * Pass true to update the message as the authed user. [Bot users](/bot-users) in this context
     * are considered authed users.
     */
    asUser?: string;
    /**
     * A JSON-based array of structured attachments, presented as a URL-encoded string. This field
     * is required when not presenting `text`. If you don't include this field, the message's
     * previous `attachments` will be retained. To remove previous `attachments`, include an empty
     * array for this field.
     */
    attachments?: string;
    /**
     * A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded
     * string. If you don't include this field, the message's previous `blocks` will be retained. To
     * remove previous `blocks`, include an empty array for this field.
     */
    blocks?: string;
    /**
     * Find and link channel names and usernames. Defaults to `none`. If you do not specify a value
     * for this field, the original value set for the message will be overwritten with the default,
     * `none`.
     */
    linkNames?: string;
    /**
     * Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts
     * either `none` or `full`. If you do not specify a value for this field, the original value set
     * for the message will be overwritten with the default, `client`.
     */
    parse?: string;
    /**
     * New text for the message, using the [default formatting
     * rules](/reference/surfaces/formatting). It's not required when presenting `blocks` or
     * `attachments`.
     */
    text?: string;
  };

  export class ChatUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"chatUpdateerrorschema1", ChatUpdateerrorschema1>>;

    static readonly errors: ErrorDecoders<ChatUpdateError> = [
      {
        on: "default",
        kind: "chatUpdateerrorschema1",
        decode: { kind: "json", schema: chatUpdateerrorschema1Schema },
      },
    ];
  }
}
