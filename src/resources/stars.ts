import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { starsAdderrorschema1Schema, type StarsAdderrorschema1 } from "../models/stars-adderrorschema1.js";
import { starsAddschemaSchema, type StarsAddschema } from "../models/stars-addschema.js";
import { starsListerrorschema1Schema, type StarsListerrorschema1 } from "../models/stars-listerrorschema1.js";
import { starsListschemaSchema, type StarsListschema } from "../models/stars-listschema.js";
import {
  starsRemoveerrorschema1Schema,
  type StarsRemoveerrorschema1,
} from "../models/stars-removeerrorschema1.js";
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

  starsAdd(
    request: Stars.StarsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<StarsAddschema, Stars.StarsAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/stars.add"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
        errorFactory: Stars.StarsAddError,
      },
      options,
    );
  }

  starsList(
    request: Stars.StarsListRequest,
    options?: RequestOptions,
  ): ApiPromise<StarsListschema, Stars.StarsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/stars.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: starsListschemaSchema },
        errorFactory: Stars.StarsListError,
      },
      options,
    );
  }

  starsRemove(
    request: Stars.StarsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<StarsRemoveschema, Stars.StarsRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/stars.remove"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
        errorFactory: Stars.StarsRemoveError,
      },
      options,
    );
  }
}

export namespace Stars {
  export type StarsAddRequest = {
    token: string;
    contentType: ContentType;
    channel?: string;
    file?: string;
    fileComment?: string;
    timestamp?: string;
  };

  export class StarsAddError extends ResponseError<Declared<"starsAdderrorschema1", StarsAdderrorschema1>> {
    static readonly errors: ErrorDecoders<StarsAddError> = [
      {
        on: [400, 599],
        kind: "starsAdderrorschema1",
        decode: { kind: "json", schema: starsAdderrorschema1Schema },
      },
    ];
  }

  export type StarsListRequest = {
    token?: string;
    count?: string;
    page?: string;
    cursor?: string;
    limit?: number;
    contentType: ContentType;
  };

  export class StarsListError extends ResponseError<
    Declared<"starsListerrorschema1", StarsListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<StarsListError> = [
      {
        on: [400, 599],
        kind: "starsListerrorschema1",
        decode: { kind: "json", schema: starsListerrorschema1Schema },
      },
    ];
  }

  export type StarsRemoveRequest = {
    token: string;
    contentType: ContentType;
    channel?: string;
    file?: string;
    fileComment?: string;
    timestamp?: string;
  };

  export class StarsRemoveError extends ResponseError<
    Declared<"starsRemoveerrorschema1", StarsRemoveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<StarsRemoveError> = [
      {
        on: [400, 599],
        kind: "starsRemoveerrorschema1",
        decode: { kind: "json", schema: starsRemoveerrorschema1Schema },
      },
    ];
  }
}
