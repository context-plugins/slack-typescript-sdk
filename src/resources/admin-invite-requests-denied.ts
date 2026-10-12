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

export class AdminInviteRequestsDenied {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_inviteRequests_denied_list
   *
   * @remarks
   * List all denied workspace invite requests.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsDeniedList(
    request: AdminInviteRequestsDenied.AdminInviteRequestsDeniedListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.inviteRequests.denied.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
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
        errorFactory: AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError,
      },
      options,
    );
  }
}

export namespace AdminInviteRequestsDenied {
  export type AdminInviteRequestsDeniedListRequest = {
    /** ID for the workspace where the invite requests were made. */
    teamId?: string;
    /** Value of the `next_cursor` field sent as part of the previous api response */
    cursor?: string;
    /**
     * The number of results that will be returned by the API on each invocation. Must be between 1
     * - 1000 both inclusive
     */
    limit?: number;
    /** Authentication token. Requires scope: `admin.invites:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsDeniedListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsDeniedListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
