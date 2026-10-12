import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * apps_permissions_users_list
   *
   * @remarks
   * Returns list of user grants and corresponding scopes this app has on a team.
   *
   * @returns Typical successful paginated response
   *
   * @throws {@link AppsPermissionsUsers.AppsPermissionsUsersListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsUsersList(
    request: AppsPermissionsUsers.AppsPermissionsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AppsPermissionsUsers.AppsPermissionsUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.permissions.users.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * apps_permissions_users_request
   *
   * @remarks
   * Enables an app to trigger a permissions modal to grant an app access to a user access scope.
   *
   * @returns Standard success response when used with a user token
   *
   * @throws {@link AppsPermissionsUsers.AppsPermissionsUsersRequestError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsUsersRequest(
    request: AppsPermissionsUsers.AppsPermissionsUsersRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AppsPermissionsUsers.AppsPermissionsUsersRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.permissions.users.request"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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
    /** Authentication token. Requires scope: `none` */
    token: string;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    /** The maximum number of items to return. */
    limit?: number;
    contentType: ContentType;
  };

  export class AppsPermissionsUsersListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AppsPermissionsUsersListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AppsPermissionsUsersRequestRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    /** A comma separated list of user scopes to request for */
    scopes: string;
    /** Token used to trigger the request */
    triggerId: string;
    /** The user this scope is being requested for */
    user: string;
    contentType: ContentType;
  };

  export class AppsPermissionsUsersRequestError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AppsPermissionsUsersRequestError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
