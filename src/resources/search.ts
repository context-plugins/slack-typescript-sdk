import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * search_messages
   *
   * @remarks
   * Searches for messages matching a query.
   *
   * @returns Typical success response
   *
   * @throws {@link Search.SearchMessagesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchMessages(
    request: Search.SearchMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Search.SearchMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search.messages"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "query", value: request.query, schema: s.string() },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "highlight", value: request.highlight, schema: s.optional(s.boolean()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "sort_dir", value: request.sortDir, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Search.SearchMessagesError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchMessagesRequest = {
    /** Authentication token. Requires scope: `search:read` */
    token: string;
    /** Search query. */
    query: string;
    /** Pass the number of results you want per "page". Maximum of `100`. */
    count?: number;
    /** Pass a value of `true` to enable query highlight markers (see below). */
    highlight?: boolean;
    page?: number;
    /** Return matches sorted by either `score` or `timestamp`. */
    sort?: string;
    /** Change sort direction to ascending (`asc`) or descending (`desc`). */
    sortDir?: string;
    contentType: ContentType;
  };

  export class SearchMessagesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<SearchMessagesError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
