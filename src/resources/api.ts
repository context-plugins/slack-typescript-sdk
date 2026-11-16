import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { apiTestsuccessschemaSchema, type ApiTestsuccessschema } from "../models/api-testsuccessschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class Api {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * api_test
   *
   * @remarks
   * Checks API calling code.
   *
   * @returns Standard success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apiTest(request: Api.ApiTestRequest, options?: RequestOptions): ApiPromise<ApiTestsuccessschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api.test"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "error", value: request.error, schema: s.optional(s.string()) },
          { name: "foo", value: request.foo, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiTestsuccessschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api {
  export type ApiTestRequest = {
    /** Error response to return */
    error?: string;
    /** example property to return */
    foo?: string;
    contentType: ContentType;
  };
}
