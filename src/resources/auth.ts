import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  authRevokeerrorschema1Schema,
  type AuthRevokeerrorschema1,
} from "../models/auth-revokeerrorschema1.js";
import { authRevokeschemaSchema, type AuthRevokeschema } from "../models/auth-revokeschema.js";
import { authTesterrorschema1Schema, type AuthTesterrorschema1 } from "../models/auth-testerrorschema1.js";
import { authTestsuccessschemaSchema, type AuthTestsuccessschema } from "../models/auth-testsuccessschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class Auth {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * auth_revoke
   *
   * @remarks
   * Revokes a token.
   *
   * @returns Typical success response
   *
   * @throws {@link Auth.AuthRevokeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authRevoke(
    request: Auth.AuthRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthRevokeschema, Auth.AuthRevokeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/auth.revoke"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "test", value: request.test, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authRevokeschemaSchema },
        errorFactory: Auth.AuthRevokeError,
      },
      options,
    );
  }

  /**
   * auth_test
   *
   * @remarks
   * Checks authentication & identity.
   *
   * @returns Standard success response when used with a user token
   *
   * @throws {@link Auth.AuthTestError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTest(
    request: Auth.AuthTestRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthTestsuccessschema, Auth.AuthTestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/auth.test"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authTestsuccessschemaSchema },
        errorFactory: Auth.AuthTestError,
      },
      options,
    );
  }
}

export namespace Auth {
  export type AuthRevokeRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    /**
     * Setting this parameter to `1` triggers a _testing mode_ where the specified token will not
     * actually be revoked.
     */
    test?: boolean;
    contentType: ContentType;
  };

  export class AuthRevokeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"authRevokeerrorschema1", AuthRevokeerrorschema1>>;

    static readonly errors: ErrorDecoders<AuthRevokeError> = [
      {
        on: "default",
        kind: "authRevokeerrorschema1",
        decode: { kind: "json", schema: authRevokeerrorschema1Schema },
      },
    ];
  }

  export type AuthTestRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    contentType: ContentType;
  };

  export class AuthTestError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"authTesterrorschema1", AuthTesterrorschema1>>;

    static readonly errors: ErrorDecoders<AuthTestError> = [
      {
        on: "default",
        kind: "authTesterrorschema1",
        decode: { kind: "json", schema: authTesterrorschema1Schema },
      },
    ];
  }
}
