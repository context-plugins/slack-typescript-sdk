import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class AdminApps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_apps_approve
   *
   * @remarks
   * Approve an app for installation on a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminApps.AdminAppsApproveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsApprove(
    request: AdminApps.AdminAppsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminApps.AdminAppsApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.apps.approve"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "app_id", value: request.appId, schema: s.optional(s.string()) },
            { name: "request_id", value: request.requestId, schema: s.optional(s.string()) },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminApps.AdminAppsApproveError,
      },
      options,
    );
  }

  /**
   * admin_apps_restrict
   *
   * @remarks
   * Restrict an app for installation on a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminApps.AdminAppsRestrictError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsRestrict(
    request: AdminApps.AdminAppsRestrictRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminApps.AdminAppsRestrictError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.apps.restrict"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "app_id", value: request.appId, schema: s.optional(s.string()) },
            { name: "request_id", value: request.requestId, schema: s.optional(s.string()) },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminApps.AdminAppsRestrictError,
      },
      options,
    );
  }
}

export namespace AdminApps {
  export type AdminAppsApproveRequest = {
    /** Authentication token. Requires scope: `admin.apps:write` */
    token: string;
    contentType: ContentType;
    /** The id of the app to approve. */
    appId?: string;
    /** The id of the request to approve. */
    requestId?: string;
    teamId?: string;
  };

  export class AdminAppsApproveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsApproveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsRestrictRequest = {
    /** Authentication token. Requires scope: `admin.apps:write` */
    token: string;
    contentType: ContentType;
    /** The id of the app to restrict. */
    appId?: string;
    /** The id of the request to restrict. */
    requestId?: string;
    teamId?: string;
  };

  export class AdminAppsRestrictError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsRestrictError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
