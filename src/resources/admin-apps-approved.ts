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

export class AdminAppsApproved {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_apps_approved_list
   *
   * @remarks
   * List approved apps for an org or workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminAppsApproved.AdminAppsApprovedListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsApprovedList(
    request: AdminAppsApproved.AdminAppsApprovedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminAppsApproved.AdminAppsApprovedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.apps.approved.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "enterprise_id", value: request.enterpriseId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminAppsApproved.AdminAppsApprovedListError,
      },
      options,
    );
  }
}

export namespace AdminAppsApproved {
  export type AdminAppsApprovedListRequest = {
    /** Authentication token. Requires scope: `admin.apps:read` */
    token: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
     */
    cursor?: string;
    teamId?: string;
    enterpriseId?: string;
    contentType: ContentType;
  };

  export class AdminAppsApprovedListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsApprovedListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
