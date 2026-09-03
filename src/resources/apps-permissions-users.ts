import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class AppsPermissionsUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  appsPermissionsUsersList(
    request: AppsPermissionsUsers.AppsPermissionsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AppsPermissionsUsers.AppsPermissionsUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps.permissions.users.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AppsPermissionsUsers.AppsPermissionsUsersListError,
      },
      options,
    );
  }

  appsPermissionsUsersRequest(
    request: AppsPermissionsUsers.AppsPermissionsUsersRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AppsPermissionsUsers.AppsPermissionsUsersRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps.permissions.users.request"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "scopes", value: request.scopes, schema: s.string() },
          { name: "trigger_id", value: request.triggerId, schema: s.string() },
          { name: "user", value: request.user, schema: s.string() },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AppsPermissionsUsers.AppsPermissionsUsersRequestError,
      },
      options,
    );
  }
}

export namespace AppsPermissionsUsers {
  export type AppsPermissionsUsersListRequest = {
    token: string;
    cursor?: string;
    limit?: number;
    contentType: ContentType;
  };

  export class AppsPermissionsUsersListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AppsPermissionsUsersListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AppsPermissionsUsersRequestRequest = {
    token: string;
    scopes: string;
    triggerId: string;
    user: string;
    contentType: ContentType;
  };

  export class AppsPermissionsUsersRequestError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AppsPermissionsUsersRequestError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
