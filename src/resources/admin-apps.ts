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

export class AdminApps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminAppsApprove(
    request: AdminApps.AdminAppsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminApps.AdminAppsApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.apps.approve"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  adminAppsRestrict(
    request: AdminApps.AdminAppsRestrictRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminApps.AdminAppsRestrictError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.apps.restrict"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
    token: string;
    contentType: ContentType;
    appId?: string;
    requestId?: string;
    teamId?: string;
  };

  export class AdminAppsApproveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminAppsApproveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminAppsRestrictRequest = {
    token: string;
    contentType: ContentType;
    appId?: string;
    requestId?: string;
    teamId?: string;
  };

  export class AdminAppsRestrictError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminAppsRestrictError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
