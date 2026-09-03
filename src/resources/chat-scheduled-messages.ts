import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  chatScheduledMessagesListerrorschema1Schema,
  type ChatScheduledMessagesListerrorschema1,
} from "../models/chat-scheduled-messages-listerrorschema1.js";
import {
  chatScheduledMessagesListschemaSchema,
  type ChatScheduledMessagesListschema,
} from "../models/chat-scheduled-messages-listschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class ChatScheduledMessages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  chatScheduledMessagesList(
    request: ChatScheduledMessages.ChatScheduledMessagesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatScheduledMessagesListschema, ChatScheduledMessages.ChatScheduledMessagesListError> {
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
        errorFactory: ChatScheduledMessages.ChatScheduledMessagesListError,
      },
      options,
    );
  }
}

export namespace ChatScheduledMessages {
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
}
