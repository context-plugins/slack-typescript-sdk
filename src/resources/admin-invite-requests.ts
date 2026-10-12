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

export class AdminInviteRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_inviteRequests_approve
   *
   * @remarks
   * Approve a workspace invite request.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminInviteRequests.AdminInviteRequestsApproveError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsApprove(
    request: AdminInviteRequests.AdminInviteRequestsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.inviteRequests.approve"),
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
            { name: "invite_request_id", value: request.inviteRequestId, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminInviteRequests.AdminInviteRequestsApproveError,
      },
      options,
    );
  }

  /**
   * admin_inviteRequests_deny
   *
   * @remarks
   * Deny a workspace invite request.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminInviteRequests.AdminInviteRequestsDenyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsDeny(
    request: AdminInviteRequests.AdminInviteRequestsDenyRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsDenyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.inviteRequests.deny"),
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
            { name: "invite_request_id", value: request.inviteRequestId, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminInviteRequests.AdminInviteRequestsDenyError,
      },
      options,
    );
  }

  /**
   * admin_inviteRequests_list
   *
   * @remarks
   * List all pending workspace invite requests.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminInviteRequests.AdminInviteRequestsListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminInviteRequestsList(
    request: AdminInviteRequests.AdminInviteRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.inviteRequests.list"),
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
        errorFactory: AdminInviteRequests.AdminInviteRequestsListError,
      },
      options,
    );
  }
}

export namespace AdminInviteRequests {
  export type AdminInviteRequestsApproveRequest = {
    /** Authentication token. Requires scope: `admin.invites:write` */
    token: string;
    contentType: ContentType;
    /** ID of the request to invite. */
    inviteRequestId: string;
    /** ID for the workspace where the invite request was made. */
    teamId?: string;
  };

  export class AdminInviteRequestsApproveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsApproveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsDenyRequest = {
    /** Authentication token. Requires scope: `admin.invites:write` */
    token: string;
    contentType: ContentType;
    /** ID of the request to invite. */
    inviteRequestId: string;
    /** ID for the workspace where the invite request was made. */
    teamId?: string;
  };

  export class AdminInviteRequestsDenyError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsDenyError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsListRequest = {
    /** ID for the workspace where the invite requests were made. */
    teamId?: string;
    /** Value of the `next_cursor` field sent as part of the previous API response */
    cursor?: string;
    /**
     * The number of results that will be returned by the API on each invocation. Must be between 1
     * - 1000, both inclusive
     */
    limit?: number;
    /** Authentication token. Requires scope: `admin.invites:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminInviteRequestsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
