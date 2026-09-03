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

export class AdminAppsRestricted {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminAppsRestrictedList(
    request: AdminAppsRestricted.AdminAppsRestrictedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminAppsRestricted.AdminAppsRestrictedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.apps.restricted.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "enterprise_id", value: request.enterpriseId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminAppsRestricted.AdminAppsRestrictedListError,
      },
      options,
    );
  }
}

export namespace AdminAppsRestricted {
  export type AdminAppsRestrictedListRequest = {
    token: string;
    limit?: number;
    cursor?: string;
    teamId?: string;
    enterpriseId?: string;
    contentType: ContentType;
  };

  export class AdminAppsRestrictedListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminAppsRestrictedListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
