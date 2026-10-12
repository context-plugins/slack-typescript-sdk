import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * pins_add
   *
   * @remarks
   * Pins an item to a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Pins.PinsAddError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinsAdd(
    request: Pins.PinsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<PinsAddschema, Pins.PinsAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/pins.add"),
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

  /**
   * pins_list
   *
   * @remarks
   * Lists items pinned to a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Pins.PinsListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinsList(
    request: Pins.PinsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pins.PinsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pins.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * pins_remove
   *
   * @remarks
   * Un-pins an item from a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link Pins.PinsRemoveError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinsRemove(
    request: Pins.PinsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<PinsRemoveschema, Pins.PinsRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/pins.remove"),
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
    /** Authentication token. Requires scope: `pins:write` */
    token: string;
    contentType: ContentType;
    /** Channel to pin the item in. */
    channel: string;
    /** Timestamp of the message to pin. */
    timestamp?: string;
  };

  export class PinsAddError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"pinsAdderrorschema1", PinsAdderrorschema1>>;

    static readonly errors: ErrorDecoders<PinsAddError> = [
      {
        on: "default",
        kind: "pinsAdderrorschema1",
        decode: { kind: "json", schema: pinsAdderrorschema1Schema },
      },
    ];
  }

  export type PinsListRequest = {
    /** Authentication token. Requires scope: `pins:read` */
    token: string;
    /** Channel to get pinned items for. */
    channel: string;
    contentType: ContentType;
  };

  export class PinsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"pinsListerrorschema1", PinsListerrorschema1>>;

    static readonly errors: ErrorDecoders<PinsListError> = [
      {
        on: "default",
        kind: "pinsListerrorschema1",
        decode: { kind: "json", schema: pinsListerrorschema1Schema },
      },
    ];
  }

  export type PinsRemoveRequest = {
    /** Authentication token. Requires scope: `pins:write` */
    token: string;
    contentType: ContentType;
    /** Channel where the item is pinned to. */
    channel: string;
    /** Timestamp of the message to un-pin. */
    timestamp?: string;
  };

  export class PinsRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"pinsRemoveerrorschema1", PinsRemoveerrorschema1>>;

    static readonly errors: ErrorDecoders<PinsRemoveError> = [
      {
        on: "default",
        kind: "pinsRemoveerrorschema1",
        decode: { kind: "json", schema: pinsRemoveerrorschema1Schema },
      },
    ];
  }
}
