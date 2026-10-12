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

export class AdminAppsRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_apps_requests_list
   *
   * @remarks
   * List app requests for a team/workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminAppsRequests.AdminAppsRequestsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminAppsRequestsList(
    request: AdminAppsRequests.AdminAppsRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminAppsRequests.AdminAppsRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.apps.requests.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminAppsRequests.AdminAppsRequestsListError,
      },
      options,
    );
  }
}

export namespace AdminAppsRequests {
  export type AdminAppsRequestsListRequest = {
    /** Authentication token. Requires scope: `admin.apps:read` */
    token: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
     */
    cursor?: string;
    teamId?: string;
    contentType: ContentType;
  };

  export class AdminAppsRequestsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminAppsRequestsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
