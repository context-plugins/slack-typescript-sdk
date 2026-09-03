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

  appsEventAuthorizationsList(
    request: Apps.AppsEventAuthorizationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Apps.AppsEventAuthorizationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps.event.authorizations.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "event_context", value: request.eventContext, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
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

  appsPermissionsInfo(
    request: Apps.AppsPermissionsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsInfoschema, Apps.AppsPermissionsInfoError> {
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
        errorFactory: Apps.AppsPermissionsInfoError,
      },
      options,
    );
  }

  appsPermissionsRequest(
    request: Apps.AppsPermissionsRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsRequestschema, Apps.AppsPermissionsRequestError> {
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
        errorFactory: Apps.AppsPermissionsRequestError,
      },
      options,
    );
  }

  appsPermissionsResourcesList(
    request: Apps.AppsPermissionsResourcesListRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsPermissionsResourcesListsuccessschema, Apps.AppsPermissionsResourcesListError> {
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
        errorFactory: Apps.AppsPermissionsResourcesListError,
      },
      options,
    );
  }

  appsPermissionsScopesList(
    request: Apps.AppsPermissionsScopesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiPermissionsScopesListsuccessschema, Apps.AppsPermissionsScopesListError> {
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
        errorFactory: Apps.AppsPermissionsScopesListError,
      },
      options,
    );
  }

  appsPermissionsUsersList(
    request: Apps.AppsPermissionsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Apps.AppsPermissionsUsersListError> {
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
        errorFactory: Apps.AppsPermissionsUsersListError,
      },
      options,
    );
  }

  appsPermissionsUsersRequest(
    request: Apps.AppsPermissionsUsersRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Apps.AppsPermissionsUsersRequestError> {
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
        errorFactory: Apps.AppsPermissionsUsersRequestError,
      },
      options,
    );
  }

  appsUninstall(
    request: Apps.AppsUninstallRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsUninstallschema, Apps.AppsUninstallError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/apps.uninstall"),
        auth: this.#auth.slackAuth,
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
    token: string;
    contentType: ContentType;
  };

  export class AppsEventAuthorizationsListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AppsEventAuthorizationsListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

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

  export type AppsUninstallRequest = {
    token?: string;
    clientId?: string;
    clientSecret?: string;
    contentType: ContentType;
  };

  export class AppsUninstallError extends ResponseError<
    Declared<"appsUninstallerrorschema1", AppsUninstallerrorschema1>
  > {
    static readonly errors: ErrorDecoders<AppsUninstallError> = [
      {
        on: [400, 599],
        kind: "appsUninstallerrorschema1",
        decode: { kind: "json", schema: appsUninstallerrorschema1Schema },
      },
    ];
  }
}
