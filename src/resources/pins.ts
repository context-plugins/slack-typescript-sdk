import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { pinsAdderrorschema1Schema, type PinsAdderrorschema1 } from "../models/pins-adderrorschema1.js";
import { pinsAddschemaSchema, type PinsAddschema } from "../models/pins-addschema.js";
import { pinsListerrorschema1Schema, type PinsListerrorschema1 } from "../models/pins-listerrorschema1.js";
import {
  pinsRemoveerrorschema1Schema,
  type PinsRemoveerrorschema1,
} from "../models/pins-removeerrorschema1.js";
import { pinsRemoveschemaSchema, type PinsRemoveschema } from "../models/pins-removeschema.js";
import type { Servers } from "../servers.js";

export class Pins {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  pinsAdd(
    request: Pins.PinsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<PinsAddschema, Pins.PinsAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/pins.add"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.string() },
            { name: "timestamp", value: request.timestamp, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: pinsAddschemaSchema },
        errorFactory: Pins.PinsAddError,
      },
      options,
    );
  }

  pinsList(
    request: Pins.PinsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pins.PinsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/pins.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel", value: request.channel, schema: s.string() },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pins.PinsListError,
      },
      options,
    );
  }

  pinsRemove(
    request: Pins.PinsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<PinsRemoveschema, Pins.PinsRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/pins.remove"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: s.string() },
            { name: "timestamp", value: request.timestamp, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: pinsRemoveschemaSchema },
        errorFactory: Pins.PinsRemoveError,
      },
      options,
    );
  }
}

export namespace Pins {
  export type PinsAddRequest = {
    token: string;
    contentType: ContentType;
    channel: string;
    timestamp?: string;
  };

  export class PinsAddError extends ResponseError<Declared<"pinsAdderrorschema1", PinsAdderrorschema1>> {
    static readonly errors: ErrorDecoders<PinsAddError> = [
      {
        on: [400, 599],
        kind: "pinsAdderrorschema1",
        decode: { kind: "json", schema: pinsAdderrorschema1Schema },
      },
    ];
  }

  export type PinsListRequest = {
    token: string;
    channel: string;
    contentType: ContentType;
  };

  export class PinsListError extends ResponseError<Declared<"pinsListerrorschema1", PinsListerrorschema1>> {
    static readonly errors: ErrorDecoders<PinsListError> = [
      {
        on: [400, 599],
        kind: "pinsListerrorschema1",
        decode: { kind: "json", schema: pinsListerrorschema1Schema },
      },
    ];
  }

  export type PinsRemoveRequest = {
    token: string;
    contentType: ContentType;
    channel: string;
    timestamp?: string;
  };

  export class PinsRemoveError extends ResponseError<
    Declared<"pinsRemoveerrorschema1", PinsRemoveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<PinsRemoveError> = [
      {
        on: [400, 599],
        kind: "pinsRemoveerrorschema1",
        decode: { kind: "json", schema: pinsRemoveerrorschema1Schema },
      },
    ];
  }
}
