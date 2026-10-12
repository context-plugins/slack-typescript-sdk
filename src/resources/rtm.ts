import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  rtmConnecterrorschema1Schema,
  type RtmConnecterrorschema1,
} from "../models/rtm-connecterrorschema1.js";
import { rtmConnectschemaSchema, type RtmConnectschema } from "../models/rtm-connectschema.js";
import type { Servers } from "../servers.js";

export class Rtm {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * rtm_connect
   *
   * @remarks
   * Starts a Real Time Messaging session.
   *
   * @returns Typical success response
   *
   * @throws {@link Rtm.RtmConnectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rtmConnect(
    request: Rtm.RtmConnectRequest,
    options?: RequestOptions,
  ): ApiPromise<RtmConnectschema, Rtm.RtmConnectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rtm.connect"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          {
            name: "batch_presence_aware",
            value: request.batchPresenceAware,
            schema: s.optional(s.boolean()),
          },
          { name: "presence_sub", value: request.presenceSub, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rtmConnectschemaSchema },
        errorFactory: Rtm.RtmConnectError,
      },
      options,
    );
  }
}

export namespace Rtm {
  export type RtmConnectRequest = {
    /** Authentication token. Requires scope: `rtm:stream` */
    token: string;
    /**
     * Batch presence deliveries via subscription. Enabling changes the shape of `presence_change`
     * events.
     */
    batchPresenceAware?: boolean;
    /** Only deliver presence events when requested by subscription */
    presenceSub?: boolean;
    contentType: ContentType;
  };

  export class RtmConnectError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"rtmConnecterrorschema1", RtmConnecterrorschema1>>;

    static readonly errors: ErrorDecoders<RtmConnectError> = [
      {
        on: "default",
        kind: "rtmConnecterrorschema1",
        decode: { kind: "json", schema: rtmConnecterrorschema1Schema },
      },
    ];
  }
}
