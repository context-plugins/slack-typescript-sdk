import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  chatDelete(
    request: Chat.ChatDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatDeletesuccessschema, Chat.ChatDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/chat.delete"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ts", value: request.ts, schema: s.optional(s.number()) },
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

  chatDeleteScheduledMessage(
    request: Chat.ChatDeleteScheduledMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatDeleteScheduledMessageschema, Chat.ChatDeleteScheduledMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/chat.deleteScheduledMessage"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  chatGetPermalink(
    request: Chat.ChatGetPermalinkRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatGetPermalinksuccessschema, Chat.ChatGetPermalinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/chat.getPermalink"),
        auth: this.#auth.slackAuth,
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

  chatMeMessage(
    request: Chat.ChatMeMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatMeMessageschema, Chat.ChatMeMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/chat.meMessage"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
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

  chatPostEphemeral(
    request: Chat.ChatPostEphemeralRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatPostEphemeralsuccessschema, Chat.ChatPostEphemeralError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/chat.postEphemeral"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  chatPostMessage(
    request: Chat.ChatPostMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatPostMessagesuccessschema, Chat.ChatPostMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/chat.postMessage"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  chatScheduleMessage(
    request: Chat.ChatScheduleMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatScheduleMessagesuccessschema, Chat.ChatScheduleMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/chat.scheduleMessage"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
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
            { name: "thread_ts", value: request.threadTs, schema: s.optional(s.number()) },
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

  chatScheduledMessagesList(
    request: Chat.ChatScheduledMessagesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatScheduledMessagesListschema, Chat.ChatScheduledMessagesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/chat.scheduledMessages.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "latest", value: request.latest, schema: s.optional(s.number()) },
          { name: "oldest", value: request.oldest, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
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

  chatUnfurl(
    request: Chat.ChatUnfurlRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatUnfurlsuccessschema, Chat.ChatUnfurlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/chat.unfurl"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  chatUpdate(
    request: Chat.ChatUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatUpdatesuccessschema, Chat.ChatUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/chat.update"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
    token?: string;
    ts?: number;
    channel?: string;
    asUser?: boolean;
  };

  export class ChatDeleteError extends ResponseError<
    Declared<"chatDeleteerrorschema1", ChatDeleteerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatDeleteError> = [
      {
        on: [400, 599],
        kind: "chatDeleteerrorschema1",
        decode: { kind: "json", schema: chatDeleteerrorschema1Schema },
      },
    ];
  }

  export type ChatDeleteScheduledMessageRequest = {
    token: string;
    contentType: ContentType;
    channel: string;
    scheduledMessageId: string;
    asUser?: boolean;
  };

  export class ChatDeleteScheduledMessageError extends ResponseError<
    Declared<"chatDeleteScheduledMessageerrorschema1", ChatDeleteScheduledMessageerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatDeleteScheduledMessageError> = [
      {
        on: [400, 599],
        kind: "chatDeleteScheduledMessageerrorschema1",
        decode: { kind: "json", schema: chatDeleteScheduledMessageerrorschema1Schema },
      },
    ];
  }

  export type ChatGetPermalinkRequest = {
    token: string;
    channel: string;
    messageTs: string;
    contentType: ContentType;
  };

  export class ChatGetPermalinkError extends ResponseError<
    Declared<"chatGetPermalinkerrorschema1", ChatGetPermalinkerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatGetPermalinkError> = [
      {
        on: [400, 599],
        kind: "chatGetPermalinkerrorschema1",
        decode: { kind: "json", schema: chatGetPermalinkerrorschema1Schema },
      },
    ];
  }

  export type ChatMeMessageRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    text?: string;
  };

  export class ChatMeMessageError extends ResponseError<
    Declared<"chatMeMessageerrorschema1", ChatMeMessageerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatMeMessageError> = [
      {
        on: [400, 599],
        kind: "chatMeMessageerrorschema1",
        decode: { kind: "json", schema: chatMeMessageerrorschema1Schema },
      },
    ];
  }

  export type ChatPostEphemeralRequest = {
    token: string;
    contentType: ContentType;
    channel: string;
    user: string;
    asUser?: boolean;
    attachments?: string;
    blocks?: string;
    iconEmoji?: string;
    iconUrl?: string;
    linkNames?: boolean;
    parse?: string;
    text?: string;
    threadTs?: string;
    username?: string;
  };

  export class ChatPostEphemeralError extends ResponseError<
    Declared<"chatPostEphemeralerrorschema1", ChatPostEphemeralerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatPostEphemeralError> = [
      {
        on: [400, 599],
        kind: "chatPostEphemeralerrorschema1",
        decode: { kind: "json", schema: chatPostEphemeralerrorschema1Schema },
      },
    ];
  }

  export type ChatPostMessageRequest = {
    token: string;
    contentType: ContentType;
    channel: string;
    asUser?: string;
    attachments?: string;
    blocks?: string;
    iconEmoji?: string;
    iconUrl?: string;
    linkNames?: boolean;
    mrkdwn?: boolean;
    parse?: string;
    replyBroadcast?: boolean;
    text?: string;
    threadTs?: string;
    unfurlLinks?: boolean;
    unfurlMedia?: boolean;
    username?: string;
  };

  export class ChatPostMessageError extends ResponseError<
    Declared<"chatPostMessageerrorschema1", ChatPostMessageerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatPostMessageError> = [
      {
        on: [400, 599],
        kind: "chatPostMessageerrorschema1",
        decode: { kind: "json", schema: chatPostMessageerrorschema1Schema },
      },
    ];
  }

  export type ChatScheduleMessageRequest = {
    contentType: ContentType;
    token?: string;
    channel?: string;
    text?: string;
    postAt?: string;
    parse?: string;
    asUser?: boolean;
    linkNames?: boolean;
    attachments?: string;
    blocks?: string;
    unfurlLinks?: boolean;
    unfurlMedia?: boolean;
    threadTs?: number;
    replyBroadcast?: boolean;
  };

  export class ChatScheduleMessageError extends ResponseError<
    Declared<"chatScheduleMessageerrorschema1", ChatScheduleMessageerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatScheduleMessageError> = [
      {
        on: [400, 599],
        kind: "chatScheduleMessageerrorschema1",
        decode: { kind: "json", schema: chatScheduleMessageerrorschema1Schema },
      },
    ];
  }

  export type ChatScheduledMessagesListRequest = {
    channel?: string;
    latest?: number;
    oldest?: number;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
    token?: string;
  };

  export class ChatScheduledMessagesListError extends ResponseError<
    Declared<"chatScheduledMessagesListerrorschema1", ChatScheduledMessagesListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatScheduledMessagesListError> = [
      {
        on: [400, 599],
        kind: "chatScheduledMessagesListerrorschema1",
        decode: { kind: "json", schema: chatScheduledMessagesListerrorschema1Schema },
      },
    ];
  }

  export type ChatUnfurlRequest = {
    token: string;
    contentType: ContentType;
    channel: string;
    ts: string;
    unfurls?: string;
    userAuthMessage?: string;
    userAuthRequired?: boolean;
    userAuthUrl?: string;
  };

  export class ChatUnfurlError extends ResponseError<
    Declared<"chatUnfurlerrorschema1", ChatUnfurlerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatUnfurlError> = [
      {
        on: [400, 599],
        kind: "chatUnfurlerrorschema1",
        decode: { kind: "json", schema: chatUnfurlerrorschema1Schema },
      },
    ];
  }

  export type ChatUpdateRequest = {
    token: string;
    contentType: ContentType;
    channel: string;
    ts: string;
    asUser?: string;
    attachments?: string;
    blocks?: string;
    linkNames?: string;
    parse?: string;
    text?: string;
  };

  export class ChatUpdateError extends ResponseError<
    Declared<"chatUpdateerrorschema1", ChatUpdateerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ChatUpdateError> = [
      {
        on: [400, 599],
        kind: "chatUpdateerrorschema1",
        decode: { kind: "json", schema: chatUpdateerrorschema1Schema },
      },
    ];
  }
}
