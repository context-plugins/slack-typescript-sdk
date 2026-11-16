import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class OauthV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * oauth_v2_access
   *
   * @remarks
   * Exchanges a temporary OAuth verifier code for an access token.
   *
   * @returns Successful token request with scopes for both a bot user and a user token
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthV2Access(
    request: OauthV2.OauthV2AccessRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth.v2.access"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "code", value: request.code, schema: s.string() },
          { name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
          { name: "client_secret", value: request.clientSecret, schema: s.optional(s.string()) },
          { name: "redirect_uri", value: request.redirectUri, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace OauthV2 {
  export type OauthV2AccessRequest = {
    /** The `code` param returned via the OAuth callback. */
    code: string;
    /** Issued when you created your application. */
    clientId?: string;
    /** Issued when you created your application. */
    clientSecret?: string;
    /** This must match the originally submitted URI (if one was sent). */
    redirectUri?: string;
    contentType: ContentType;
  };
}
