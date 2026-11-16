import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { pinsAddschemaSchema, type PinsAddschema } from "../models/pins-addschema.js";
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinsAdd(request: Pins.PinsAddRequest, options?: RequestOptions): ApiPromise<PinsAddschema, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinsList(
    request: Pins.PinsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinsRemove(
    request: Pins.PinsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<PinsRemoveschema, ApiError> {
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
        errorFactory: ApiError,
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

  export type PinsListRequest = {
    /** Authentication token. Requires scope: `pins:read` */
    token: string;
    /** Channel to get pinned items for. */
    channel: string;
    contentType: ContentType;
  };

  export type PinsRemoveRequest = {
    /** Authentication token. Requires scope: `pins:write` */
    token: string;
    contentType: ContentType;
    /** Channel where the item is pinned to. */
    channel: string;
    /** Timestamp of the message to un-pin. */
    timestamp?: string;
  };
}
