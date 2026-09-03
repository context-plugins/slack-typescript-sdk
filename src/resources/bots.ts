import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  botsInfo(
    request: Bots.BotsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<BotsInfoschema, Bots.BotsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/bots.info"),
        auth: this.#auth.slackAuth,
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
    token: string;
    bot?: string;
    contentType: ContentType;
  };

  export class BotsInfoError extends ResponseError<Declared<"botsInfoerrorschema1", BotsInfoerrorschema1>> {
    static readonly errors: ErrorDecoders<BotsInfoError> = [
      {
        on: [400, 599],
        kind: "botsInfoerrorschema1",
        decode: { kind: "json", schema: botsInfoerrorschema1Schema },
      },
    ];
  }
}
