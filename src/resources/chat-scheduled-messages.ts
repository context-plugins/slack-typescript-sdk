import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * chat_scheduledMessages_list
   *
   * @remarks
   * Returns a list of scheduled messages.
   *
   * @returns Typical success response
   *
   * @throws {@link ChatScheduledMessages.ChatScheduledMessagesListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chatScheduledMessagesList(
    request: ChatScheduledMessages.ChatScheduledMessagesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatScheduledMessagesListschema, ChatScheduledMessages.ChatScheduledMessagesListError> {
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
        errorFactory: ChatScheduledMessages.ChatScheduledMessagesListError,
      },
      options,
    );
  }
}

export namespace ChatScheduledMessages {
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
}
