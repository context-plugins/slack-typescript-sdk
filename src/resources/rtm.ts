import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  rtmConnect(
    request: Rtm.RtmConnectRequest,
    options?: RequestOptions,
  ): ApiPromise<RtmConnectschema, Rtm.RtmConnectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/rtm.connect"),
        auth: this.#auth.slackAuth,
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
    token: string;
    batchPresenceAware?: boolean;
    presenceSub?: boolean;
    contentType: ContentType;
  };

  export class RtmConnectError extends ResponseError<
    Declared<"rtmConnecterrorschema1", RtmConnecterrorschema1>
  > {
    static readonly errors: ErrorDecoders<RtmConnectError> = [
      {
        on: [400, 599],
        kind: "rtmConnecterrorschema1",
        decode: { kind: "json", schema: rtmConnecterrorschema1Schema },
      },
    ];
  }
}
