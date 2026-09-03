import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  reactionsAdd(
    request: Reactions.ReactionsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<ReactionsAddschema, Reactions.ReactionsAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/reactions.add"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  reactionsGet(
    request: Reactions.ReactionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Reactions.ReactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/reactions.get"),
        auth: this.#auth.slackAuth,
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

  reactionsList(
    request: Reactions.ReactionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ReactionsListschema, Reactions.ReactionsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/reactions.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
          { name: "full", value: request.full, schema: s.optional(s.boolean()) },
          { name: "count", value: request.count, schema: s.optional(s.number()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
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

  reactionsRemove(
    request: Reactions.ReactionsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<ReactionsRemoveschema, Reactions.ReactionsRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/reactions.remove"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
    token: string;
    contentType: ContentType;
    channel: string;
    name: string;
    timestamp: string;
  };

  export class ReactionsAddError extends ResponseError<
    Declared<"reactionsAdderrorschema1", ReactionsAdderrorschema1>
  > {
    static readonly errors: ErrorDecoders<ReactionsAddError> = [
      {
        on: [400, 599],
        kind: "reactionsAdderrorschema1",
        decode: { kind: "json", schema: reactionsAdderrorschema1Schema },
      },
    ];
  }

  export type ReactionsGetRequest = {
    token: string;
    channel?: string;
    file?: string;
    fileComment?: string;
    full?: boolean;
    timestamp?: string;
    contentType: ContentType;
  };

  export class ReactionsGetError extends ResponseError<
    Declared<"reactionsGeterrorschema1", ReactionsGeterrorschema1>
  > {
    static readonly errors: ErrorDecoders<ReactionsGetError> = [
      {
        on: [400, 599],
        kind: "reactionsGeterrorschema1",
        decode: { kind: "json", schema: reactionsGeterrorschema1Schema },
      },
    ];
  }

  export type ReactionsListRequest = {
    token: string;
    user?: string;
    full?: boolean;
    count?: number;
    page?: number;
    cursor?: string;
    limit?: number;
    contentType: ContentType;
  };

  export class ReactionsListError extends ResponseError<
    Declared<"reactionsListerrorschema1", ReactionsListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ReactionsListError> = [
      {
        on: [400, 599],
        kind: "reactionsListerrorschema1",
        decode: { kind: "json", schema: reactionsListerrorschema1Schema },
      },
    ];
  }

  export type ReactionsRemoveRequest = {
    token: string;
    contentType: ContentType;
    name: string;
    file?: string;
    fileComment?: string;
    channel?: string;
    timestamp?: string;
  };

  export class ReactionsRemoveError extends ResponseError<
    Declared<"reactionsRemoveerrorschema1", ReactionsRemoveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<ReactionsRemoveError> = [
      {
        on: [400, 599],
        kind: "reactionsRemoveerrorschema1",
        decode: { kind: "json", schema: reactionsRemoveerrorschema1Schema },
      },
    ];
  }
}
