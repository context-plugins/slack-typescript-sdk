import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  apiPermissionsScopesListsuccessschemaSchema,
  type ApiPermissionsScopesListsuccessschema,
} from "../models/api-permissions-scopes-listsuccessschema.js";
import {
  appsPermissionsInfoschemaSchema,
  type AppsPermissionsInfoschema,
} from "../models/apps-permissions-infoschema.js";
import {
  appsPermissionsRequestschemaSchema,
  type AppsPermissionsRequestschema,
} from "../models/apps-permissions-requestschema.js";
import {
  appsPermissionsResourcesListsuccessschemaSchema,
  type AppsPermissionsResourcesListsuccessschema,
} from "../models/apps-permissions-resources-listsuccessschema.js";
import { appsUninstallschemaSchema, type AppsUninstallschema } from "../models/apps-uninstallschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class Apps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * apps_event_authorizations_list
   *
   * @remarks
   * Get a list of authorizations for the given event context. Each authorization represents an app
   * installation that the event is visible to.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsEventAuthorizationsList(
    request: Apps.AppsEventAuthorizationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.event.authorizations.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "event_context", value: request.eventContext, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * apps_permissions_info
   *
   * @remarks
   * Returns list of permissions this app has on a team.
   *
   * @returns Standard success response when used with a user token
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsInfo(
    request: Apps.AppsPermissionsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsInfoschema, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsRequest(
    request: Apps.AppsPermissionsRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsRequestschema, ApiError> {
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * apps_permissions_resources_list
   *
   * @remarks
   * Returns list of resource grants this app has on a team.
   *
   * @returns Typical successful paginated response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsResourcesList(
    request: Apps.AppsPermissionsResourcesListRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsResourcesListsuccessschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.permissions.resources.list"),
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
        success: { kind: "json", schema: appsPermissionsResourcesListsuccessschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * apps_permissions_scopes_list
   *
   * @remarks
   * Returns list of scopes this app has on a team.
   *
   * @returns Typical successful paginated response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsScopesList(
    request: Apps.AppsPermissionsScopesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiPermissionsScopesListsuccessschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.permissions.scopes.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [{ name: "token", value: request.token, schema: s.string() }],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiPermissionsScopesListsuccessschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * apps_permissions_users_list
   *
   * @remarks
   * Returns list of user grants and corresponding scopes this app has on a team.
   *
   * @returns Typical successful paginated response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsUsersList(
    request: Apps.AppsPermissionsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsUsersRequest(
    request: Apps.AppsPermissionsUsersRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * apps_uninstall
   *
   * @remarks
   * Uninstalls your app from a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsUninstall(
    request: Apps.AppsUninstallRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsUninstallschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.uninstall"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
          { name: "client_secret", value: request.clientSecret, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appsUninstallschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Apps {
  export type AppsEventAuthorizationsListRequest = {
    eventContext: string;
    cursor?: string;
    limit?: number;
    /** Authentication token. Requires scope: `authorizations:read` */
    token: string;
    contentType: ContentType;
  };

  export type AppsPermissionsInfoRequest = {
    /** Authentication token. Requires scope: `none` */
    token?: string;
    contentType: ContentType;
  };

  export type AppsPermissionsRequestRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    /** A comma separated list of scopes to request for */
    scopes: string;
    /** Token used to trigger the permissions API */
    triggerId: string;
    contentType: ContentType;
  };

  export type AppsPermissionsResourcesListRequest = {
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

  export type AppsPermissionsScopesListRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    contentType: ContentType;
  };

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

  export type AppsUninstallRequest = {
    /** Authentication token. Requires scope: `none` */
    token?: string;
    /** Issued when you created your application. */
    clientId?: string;
    /** Issued when you created your application. */
    clientSecret?: string;
    contentType: ContentType;
  };
}
