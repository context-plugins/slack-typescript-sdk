import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  authRevoke(
    request: Auth.AuthRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthRevokeschema, Auth.AuthRevokeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/auth.revoke"),
        auth: this.#auth.slackAuth,
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

  authTest(
    request: Auth.AuthTestRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthTestsuccessschema, Auth.AuthTestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/auth.test"),
        auth: this.#auth.slackAuth,
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
    token: string;
    test?: boolean;
    contentType: ContentType;
  };

  export class AuthRevokeError extends ResponseError<
    Declared<"authRevokeerrorschema1", AuthRevokeerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AuthRevokeError> = [
      {
        on: [400, 599],
        kind: "authRevokeerrorschema1",
        decode: { kind: "json", schema: authRevokeerrorschema1Schema },
      },
    ];
  }

  export type AuthTestRequest = {
    token: string;
    contentType: ContentType;
  };

  export class AuthTestError extends ResponseError<Declared<"authTesterrorschema1", AuthTesterrorschema1>> {
    static readonly errors: ErrorDecoders<AuthTestError> = [
      {
        on: [400, 599],
        kind: "authTesterrorschema1",
        decode: { kind: "json", schema: authTesterrorschema1Schema },
      },
    ];
  }
}
