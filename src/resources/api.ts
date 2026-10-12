import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { apiTesterrorschema1Schema, type ApiTesterrorschema1 } from "../models/api-testerrorschema1.js";
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
   * @throws {@link Api.ApiTestError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apiTest(
    request: Api.ApiTestRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiTestsuccessschema, Api.ApiTestError> {
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
        errorFactory: Api.ApiTestError,
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

  export class ApiTestError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"apiTesterrorschema1", ApiTesterrorschema1>>;

    static readonly errors: ErrorDecoders<ApiTestError> = [
      {
        on: "default",
        kind: "apiTesterrorschema1",
        decode: { kind: "json", schema: apiTesterrorschema1Schema },
      },
    ];
  }
}
