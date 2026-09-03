import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  appsPermissionsInfoerrorschema1Schema,
  type AppsPermissionsInfoerrorschema1,
} from "../models/apps-permissions-infoerrorschema1.js";
import {
  appsPermissionsInfoschemaSchema,
  type AppsPermissionsInfoschema,
} from "../models/apps-permissions-infoschema.js";
import {
  appsPermissionsRequesterrorschema1Schema,
  type AppsPermissionsRequesterrorschema1,
} from "../models/apps-permissions-requesterrorschema1.js";
import {
  appsPermissionsRequestschemaSchema,
  type AppsPermissionsRequestschema,
} from "../models/apps-permissions-requestschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class AppsPermissions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  appsPermissionsInfo(
    request: AppsPermissions.AppsPermissionsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsInfoschema, AppsPermissions.AppsPermissionsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps.permissions.info"),
        auth: this.#auth.slackAuth,
        query: [{ name: "token", value: request.token, schema: s.optional(s.string()) }],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appsPermissionsInfoschemaSchema },
        errorFactory: AppsPermissions.AppsPermissionsInfoError,
      },
      options,
    );
  }

  appsPermissionsRequest(
    request: AppsPermissions.AppsPermissionsRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsRequestschema, AppsPermissions.AppsPermissionsRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps.permissions.request"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "scopes", value: request.scopes, schema: s.string() },
          { name: "trigger_id", value: request.triggerId, schema: s.string() },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appsPermissionsRequestschemaSchema },
        errorFactory: AppsPermissions.AppsPermissionsRequestError,
      },
      options,
    );
  }
}

export namespace AppsPermissions {
  export type AppsPermissionsInfoRequest = {
    token?: string;
    contentType: ContentType;
  };

  export class AppsPermissionsInfoError extends ResponseError<
    Declared<"appsPermissionsInfoerrorschema1", AppsPermissionsInfoerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AppsPermissionsInfoError> = [
      {
        on: [400, 599],
        kind: "appsPermissionsInfoerrorschema1",
        decode: { kind: "json", schema: appsPermissionsInfoerrorschema1Schema },
      },
    ];
  }

  export type AppsPermissionsRequestRequest = {
    token: string;
    scopes: string;
    triggerId: string;
    contentType: ContentType;
  };

  export class AppsPermissionsRequestError extends ResponseError<
    Declared<"appsPermissionsRequesterrorschema1", AppsPermissionsRequesterrorschema1>
  > {
    static readonly errors: ErrorDecoders<AppsPermissionsRequestError> = [
      {
        on: [400, 599],
        kind: "appsPermissionsRequesterrorschema1",
        decode: { kind: "json", schema: appsPermissionsRequesterrorschema1Schema },
      },
    ];
  }
}
