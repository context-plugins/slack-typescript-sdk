import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { botsInfoschemaInternalSchema, type BotsInfoschema } from "../models/bots-infoschema.js";
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  botsInfo(request: Bots.BotsInfoRequest, options?: RequestOptions): ApiPromise<BotsInfoschema, ApiError> {
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
        success: { kind: "json", schema: botsInfoschemaInternalSchema },
        errorFactory: ApiError,
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
}
