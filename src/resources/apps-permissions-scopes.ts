import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiPermissionsScopesListsuccessschemaSchema,
  type ApiPermissionsScopesListsuccessschema,
} from "../models/api-permissions-scopes-listsuccessschema.js";
import {
  appsPermissionsScopesListerrorschema1Schema,
  type AppsPermissionsScopesListerrorschema1,
} from "../models/apps-permissions-scopes-listerrorschema1.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class AppsPermissionsScopes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  appsPermissionsScopesList(
    request: AppsPermissionsScopes.AppsPermissionsScopesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiPermissionsScopesListsuccessschema, AppsPermissionsScopes.AppsPermissionsScopesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps.permissions.scopes.list"),
        auth: this.#auth.slackAuth,
        query: [{ name: "token", value: request.token, schema: s.string() }],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiPermissionsScopesListsuccessschemaSchema },
        errorFactory: AppsPermissionsScopes.AppsPermissionsScopesListError,
      },
      options,
    );
  }
}

export namespace AppsPermissionsScopes {
  export type AppsPermissionsScopesListRequest = {
    token: string;
    contentType: ContentType;
  };

  export class AppsPermissionsScopesListError extends ResponseError<
    Declared<"appsPermissionsScopesListerrorschema1", AppsPermissionsScopesListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AppsPermissionsScopesListError> = [
      {
        on: [400, 599],
        kind: "appsPermissionsScopesListerrorschema1",
        decode: { kind: "json", schema: appsPermissionsScopesListerrorschema1Schema },
      },
    ];
  }
}
