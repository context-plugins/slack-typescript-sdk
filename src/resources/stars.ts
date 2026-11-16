import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { starsAddschemaSchema, type StarsAddschema } from "../models/stars-addschema.js";
import { starsListschemaSchema, type StarsListschema } from "../models/stars-listschema.js";
import { starsRemoveschemaSchema, type StarsRemoveschema } from "../models/stars-removeschema.js";
import type { Servers } from "../servers.js";

export class Stars {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * stars_add
   *
   * @remarks
   * Adds a star to an item.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  starsAdd(request: Stars.StarsAddRequest, options?: RequestOptions): ApiPromise<StarsAddschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/stars.add"),
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
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "file", value: request.file, schema: s.optional(s.string()) },
            { name: "file_comment", value: request.fileComment, schema: s.optional(s.string()) },
            { name: "timestamp", value: request.timestamp, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: starsAddschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * stars_list
   *
   * @remarks
   * Lists stars for a user.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  starsList(
    request: Stars.StarsListRequest,
    options?: RequestOptions,
  ): ApiPromise<StarsListschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stars.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: starsListschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * stars_remove
   *
   * @remarks
   * Removes a star from an item.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  starsRemove(
    request: Stars.StarsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<StarsRemoveschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/stars.remove"),
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
            { name: "channel", value: request.channel, schema: s.optional(s.string()) },
            { name: "file", value: request.file, schema: s.optional(s.string()) },
            { name: "file_comment", value: request.fileComment, schema: s.optional(s.string()) },
            { name: "timestamp", value: request.timestamp, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: starsRemoveschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Stars {
  export type StarsAddRequest = {
    /** Authentication token. Requires scope: `stars:write` */
    token: string;
    contentType: ContentType;
    /**
     * Channel to add star to, or channel where the message to add star to was posted (used with
     * `timestamp`).
     */
    channel?: string;
    /** File to add star to. */
    file?: string;
    /** File comment to add star to. */
    fileComment?: string;
    /** Timestamp of the message to add star to. */
    timestamp?: string;
  };

  export type StarsListRequest = {
    /** Authentication token. Requires scope: `stars:read` */
    token?: string;
    count?: string;
    page?: string;
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

  export type StarsRemoveRequest = {
    /** Authentication token. Requires scope: `stars:write` */
    token: string;
    contentType: ContentType;
    /**
     * Channel to remove star from, or channel where the message to remove star from was posted
     * (used with `timestamp`).
     */
    channel?: string;
    /** File to remove star from. */
    file?: string;
    /** File comment to remove star from. */
    fileComment?: string;
    /** Timestamp of the message to remove star from. */
    timestamp?: string;
  };
}
