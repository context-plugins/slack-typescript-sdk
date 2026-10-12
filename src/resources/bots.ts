import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { botsInfoerrorschema1Schema, type BotsInfoerrorschema1 } from "../models/bots-infoerrorschema1.js";
import { botsInfoschemaSchema, type BotsInfoschema } from "../models/bots-infoschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class Bots {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * bots_info
   *
   * @remarks
   * Gets information about a bot user.
   *
   * @returns When successful, returns bot info by bot ID.
   *
   * @throws {@link Bots.BotsInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  botsInfo(
    request: Bots.BotsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<BotsInfoschema, Bots.BotsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bots.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "bot", value: request.bot, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: botsInfoschemaSchema },
        errorFactory: Bots.BotsInfoError,
      },
      options,
    );
  }
}

export namespace Bots {
  export type BotsInfoRequest = {
    /** Authentication token. Requires scope: `users:read` */
    token: string;
    /** Bot user to get info on */
    bot?: string;
    contentType: ContentType;
  };

  export class BotsInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"botsInfoerrorschema1", BotsInfoerrorschema1>>;

    static readonly errors: ErrorDecoders<BotsInfoError> = [
      {
        on: "default",
        kind: "botsInfoerrorschema1",
        decode: { kind: "json", schema: botsInfoerrorschema1Schema },
      },
    ];
  }
}
