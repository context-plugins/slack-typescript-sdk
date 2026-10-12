import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * apps_permissions_info
   *
   * @remarks
   * Returns list of permissions this app has on a team.
   *
   * @returns Standard success response when used with a user token
   *
   * @throws {@link AppsPermissions.AppsPermissionsInfoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsInfo(
    request: AppsPermissions.AppsPermissionsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsInfoschema, AppsPermissions.AppsPermissionsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.permissions.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * apps_permissions_request
   *
   * @remarks
   * Allows an app to request additional scopes
   *
   * @returns Standard success response when used with a user token
   *
   * @throws {@link AppsPermissions.AppsPermissionsRequestError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsRequest(
    request: AppsPermissions.AppsPermissionsRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsRequestschema, AppsPermissions.AppsPermissionsRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.permissions.request"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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
    /** Authentication token. Requires scope: `none` */
    token?: string;
    contentType: ContentType;
  };

  export class AppsPermissionsInfoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"appsPermissionsInfoerrorschema1", AppsPermissionsInfoerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AppsPermissionsInfoError> = [
      {
        on: "default",
        kind: "appsPermissionsInfoerrorschema1",
        decode: { kind: "json", schema: appsPermissionsInfoerrorschema1Schema },
      },
    ];
  }

  export type AppsPermissionsRequestRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    /** A comma separated list of scopes to request for */
    scopes: string;
    /** Token used to trigger the permissions API */
    triggerId: string;
    contentType: ContentType;
  };

  export class AppsPermissionsRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"appsPermissionsRequesterrorschema1", AppsPermissionsRequesterrorschema1>
    >;

    static readonly errors: ErrorDecoders<AppsPermissionsRequestError> = [
      {
        on: "default",
        kind: "appsPermissionsRequesterrorschema1",
        decode: { kind: "json", schema: appsPermissionsRequesterrorschema1Schema },
      },
    ];
  }
}
