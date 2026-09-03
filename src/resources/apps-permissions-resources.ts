import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  appsPermissionsResourcesListerrorschema1Schema,
  type AppsPermissionsResourcesListerrorschema1,
} from "../models/apps-permissions-resources-listerrorschema1.js";
import {
  appsPermissionsResourcesListsuccessschemaSchema,
  type AppsPermissionsResourcesListsuccessschema,
} from "../models/apps-permissions-resources-listsuccessschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class AppsPermissionsResources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  appsPermissionsResourcesList(
    request: AppsPermissionsResources.AppsPermissionsResourcesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AppsPermissionsResourcesListsuccessschema,
    AppsPermissionsResources.AppsPermissionsResourcesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps.permissions.resources.list"),
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
        success: { kind: "json", schema: appsPermissionsResourcesListsuccessschemaSchema },
        errorFactory: AppsPermissionsResources.AppsPermissionsResourcesListError,
      },
      options,
    );
  }
}

export namespace AppsPermissionsResources {
  export type AppsPermissionsResourcesListRequest = {
    token: string;
    cursor?: string;
    limit?: number;
    contentType: ContentType;
  };

  export class AppsPermissionsResourcesListError extends ResponseError<
    Declared<"appsPermissionsResourcesListerrorschema1", AppsPermissionsResourcesListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AppsPermissionsResourcesListError> = [
      {
        on: [400, 599],
        kind: "appsPermissionsResourcesListerrorschema1",
        decode: { kind: "json", schema: appsPermissionsResourcesListerrorschema1Schema },
      },
    ];
  }
}
