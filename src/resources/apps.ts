import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  apiPermissionsScopesListsuccessschemaSchema,
  type ApiPermissionsScopesListsuccessschema,
} from "../models/api-permissions-scopes-listsuccessschema.js";
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
import {
  appsPermissionsResourcesListerrorschema1Schema,
  type AppsPermissionsResourcesListerrorschema1,
} from "../models/apps-permissions-resources-listerrorschema1.js";
import {
  appsPermissionsResourcesListsuccessschemaSchema,
  type AppsPermissionsResourcesListsuccessschema,
} from "../models/apps-permissions-resources-listsuccessschema.js";
import {
  appsPermissionsScopesListerrorschema1Schema,
  type AppsPermissionsScopesListerrorschema1,
} from "../models/apps-permissions-scopes-listerrorschema1.js";
import {
  appsUninstallerrorschema1Schema,
  type AppsUninstallerrorschema1,
} from "../models/apps-uninstallerrorschema1.js";
import { appsUninstallschemaSchema, type AppsUninstallschema } from "../models/apps-uninstallschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
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
   * @throws {@link Apps.AppsEventAuthorizationsListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsEventAuthorizationsList(
    request: Apps.AppsEventAuthorizationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Apps.AppsEventAuthorizationsListError> {
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
        errorFactory: Apps.AppsEventAuthorizationsListError,
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
   * @throws {@link Apps.AppsPermissionsInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsInfo(
    request: Apps.AppsPermissionsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsInfoschema, Apps.AppsPermissionsInfoError> {
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
        errorFactory: Apps.AppsPermissionsInfoError,
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
   * @throws {@link Apps.AppsPermissionsRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsRequest(
    request: Apps.AppsPermissionsRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsRequestschema, Apps.AppsPermissionsRequestError> {
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
        errorFactory: Apps.AppsPermissionsRequestError,
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
   * @throws {@link Apps.AppsPermissionsResourcesListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsResourcesList(
    request: Apps.AppsPermissionsResourcesListRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsResourcesListsuccessschema, Apps.AppsPermissionsResourcesListError> {
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
        errorFactory: Apps.AppsPermissionsResourcesListError,
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
   * @throws {@link Apps.AppsPermissionsScopesListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsScopesList(
    request: Apps.AppsPermissionsScopesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiPermissionsScopesListsuccessschema, Apps.AppsPermissionsScopesListError> {
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
        errorFactory: Apps.AppsPermissionsScopesListError,
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
   * @throws {@link Apps.AppsPermissionsUsersListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsUsersList(
    request: Apps.AppsPermissionsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Apps.AppsPermissionsUsersListError> {
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
        errorFactory: Apps.AppsPermissionsUsersListError,
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
   * @throws {@link Apps.AppsPermissionsUsersRequestError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsUsersRequest(
    request: Apps.AppsPermissionsUsersRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Apps.AppsPermissionsUsersRequestError> {
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
        errorFactory: Apps.AppsPermissionsUsersRequestError,
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
   * @throws {@link Apps.AppsUninstallError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsUninstall(
    request: Apps.AppsUninstallRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsUninstallschema, Apps.AppsUninstallError> {
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
        errorFactory: Apps.AppsUninstallError,
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

  export class AppsEventAuthorizationsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AppsEventAuthorizationsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

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

  export class AppsPermissionsResourcesListError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"appsPermissionsResourcesListerrorschema1", AppsPermissionsResourcesListerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AppsPermissionsResourcesListError> = [
      {
        on: "default",
        kind: "appsPermissionsResourcesListerrorschema1",
        decode: { kind: "json", schema: appsPermissionsResourcesListerrorschema1Schema },
      },
    ];
  }

  export type AppsPermissionsScopesListRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    contentType: ContentType;
  };

  export class AppsPermissionsScopesListError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"appsPermissionsScopesListerrorschema1", AppsPermissionsScopesListerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AppsPermissionsScopesListError> = [
      {
        on: "default",
        kind: "appsPermissionsScopesListerrorschema1",
        decode: { kind: "json", schema: appsPermissionsScopesListerrorschema1Schema },
      },
    ];
  }

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

  export type AppsUninstallRequest = {
    /** Authentication token. Requires scope: `none` */
    token?: string;
    /** Issued when you created your application. */
    clientId?: string;
    /** Issued when you created your application. */
    clientSecret?: string;
    contentType: ContentType;
  };

  export class AppsUninstallError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"appsUninstallerrorschema1", AppsUninstallerrorschema1>>;

    static readonly errors: ErrorDecoders<AppsUninstallError> = [
      {
        on: "default",
        kind: "appsUninstallerrorschema1",
        decode: { kind: "json", schema: appsUninstallerrorschema1Schema },
      },
    ];
  }
}
