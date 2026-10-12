import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  reactionsAdderrorschema1Schema,
  type ReactionsAdderrorschema1,
} from "../models/reactions-adderrorschema1.js";
import { reactionsAddschemaSchema, type ReactionsAddschema } from "../models/reactions-addschema.js";
import {
  reactionsGeterrorschema1Schema,
  type ReactionsGeterrorschema1,
} from "../models/reactions-geterrorschema1.js";
import {
  reactionsListerrorschema1Schema,
  type ReactionsListerrorschema1,
} from "../models/reactions-listerrorschema1.js";
import { reactionsListschemaSchema, type ReactionsListschema } from "../models/reactions-listschema.js";
import {
  reactionsRemoveerrorschema1Schema,
  type ReactionsRemoveerrorschema1,
} from "../models/reactions-removeerrorschema1.js";
import { reactionsRemoveschemaSchema, type ReactionsRemoveschema } from "../models/reactions-removeschema.js";
import type { Servers } from "../servers.js";

export class Reactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * reactions_add
   *
   * @remarks
   * Adds a reaction to an item.
   *
   * @returns Typical success response
   *
   * @throws {@link Reactions.ReactionsAddError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reactionsAdd(
    request: Reactions.ReactionsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<ReactionsAddschema, Reactions.ReactionsAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reactions.add"),
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
            { name: "name", value: request.name, schema: s.string() },
            { name: "timestamp", value: request.timestamp, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: reactionsAddschemaSchema },
        errorFactory: Reactions.ReactionsAddError,
      },
      options,
    );
  }

  /**
   * reactions_get
   *
   * @remarks
   * Gets reactions for an item.
   *
   * @returns Typical success response
   *
   * @throws {@link Reactions.ReactionsGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reactionsGet(
    request: Reactions.ReactionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Reactions.ReactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reactions.get"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "file", value: request.file, schema: s.optional(s.string()) },
          { name: "file_comment", value: request.fileComment, schema: s.optional(s.string()) },
          { name: "full", value: request.full, schema: s.optional(s.boolean()) },
          { name: "timestamp", value: request.timestamp, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Reactions.ReactionsGetError,
      },
      options,
    );
  }

  /**
   * reactions_list
   *
   * @remarks
   * Lists reactions made by a user.
   *
   * @returns Typical success response
   *
   * @throws {@link Reactions.ReactionsListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reactionsList(
    request: Reactions.ReactionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ReactionsListschema, Reactions.ReactionsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reactions.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
          { name: "full", value: request.full, schema: s.optional(s.boolean()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reactionsListschemaSchema },
        errorFactory: Reactions.ReactionsListError,
      },
      options,
    );
  }

  /**
   * reactions_remove
   *
   * @remarks
   * Removes a reaction from an item.
   *
   * @returns Typical success response
   *
   * @throws {@link Reactions.ReactionsRemoveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reactionsRemove(
    request: Reactions.ReactionsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<ReactionsRemoveschema, Reactions.ReactionsRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reactions.remove"),
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
            { name: "file", value: request.file, schema: s.optional(s.string()) },
            { name: "file_comment", value: request.fileComment, schema: s.optional(s.string()) },
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "timestamp", value: request.timestamp, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: reactionsRemoveschemaSchema },
        errorFactory: Reactions.ReactionsRemoveError,
      },
      options,
    );
  }
}

export namespace Reactions {
  export type ReactionsAddRequest = {
    /** Authentication token. Requires scope: `reactions:write` */
    token: string;
    contentType: ContentType;
    /** Channel where the message to add reaction to was posted. */
    channel: string;
    /** Reaction (emoji) name. */
    name: string;
    /** Timestamp of the message to add reaction to. */
    timestamp: string;
  };

  export class ReactionsAddError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"reactionsAdderrorschema1", ReactionsAdderrorschema1>>;

    static readonly errors: ErrorDecoders<ReactionsAddError> = [
      {
        on: "default",
        kind: "reactionsAdderrorschema1",
        decode: { kind: "json", schema: reactionsAdderrorschema1Schema },
      },
    ];
  }

  export type ReactionsGetRequest = {
    /** Authentication token. Requires scope: `reactions:read` */
    token: string;
    /** Channel where the message to get reactions for was posted. */
    channel?: string;
    /** File to get reactions for. */
    file?: string;
    /** File comment to get reactions for. */
    fileComment?: string;
    /** If true always return the complete reaction list. */
    full?: boolean;
    /** Timestamp of the message to get reactions for. */
    timestamp?: string;
    contentType: ContentType;
  };

  export class ReactionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"reactionsGeterrorschema1", ReactionsGeterrorschema1>>;

    static readonly errors: ErrorDecoders<ReactionsGetError> = [
      {
        on: "default",
        kind: "reactionsGeterrorschema1",
        decode: { kind: "json", schema: reactionsGeterrorschema1Schema },
      },
    ];
  }

  export type ReactionsListRequest = {
    /** Authentication token. Requires scope: `reactions:read` */
    token: string;
    /** Show reactions made by this user. Defaults to the authed user. */
    user?: string;
    /** If true always return the complete reaction list. */
    full?: boolean;
    count?: number;
    page?: number;
    /**
     * Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the
     * previous request's `response_metadata`. This parameter is optional, but pagination is
     * mandatory: the default value simply fetches the first "page" of the collection.
     */
    cursor?: string;
    /**
     * The maximum number of items to return. Fewer than the requested number of items may be
     * returned, even if the end of the list hasn't been reached.
     */
    limit?: number;
    contentType: ContentType;
  };

  export class ReactionsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"reactionsListerrorschema1", ReactionsListerrorschema1>>;

    static readonly errors: ErrorDecoders<ReactionsListError> = [
      {
        on: "default",
        kind: "reactionsListerrorschema1",
        decode: { kind: "json", schema: reactionsListerrorschema1Schema },
      },
    ];
  }

  export type ReactionsRemoveRequest = {
    /** Authentication token. Requires scope: `reactions:write` */
    token: string;
    contentType: ContentType;
    /** Reaction (emoji) name. */
    name: string;
    /** File to remove reaction from. */
    file?: string;
    /** File comment to remove reaction from. */
    fileComment?: string;
    /** Channel where the message to remove reaction from was posted. */
    channel?: string;
    /** Timestamp of the message to remove reaction from. */
    timestamp?: string;
  };

  export class ReactionsRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"reactionsRemoveerrorschema1", ReactionsRemoveerrorschema1>
    >;

    static readonly errors: ErrorDecoders<ReactionsRemoveError> = [
      {
        on: "default",
        kind: "reactionsRemoveerrorschema1",
        decode: { kind: "json", schema: reactionsRemoveerrorschema1Schema },
      },
    ];
  }
}
