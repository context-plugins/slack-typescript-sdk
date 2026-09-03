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

export class AdminInviteRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminInviteRequestsApprove(
    request: AdminInviteRequests.AdminInviteRequestsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.inviteRequests.approve"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  adminInviteRequestsDeny(
    request: AdminInviteRequests.AdminInviteRequestsDenyRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsDenyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.inviteRequests.deny"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  adminInviteRequestsList(
    request: AdminInviteRequests.AdminInviteRequestsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.inviteRequests.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
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
        errorFactory: AdminInviteRequests.AdminInviteRequestsListError,
      },
      options,
    );
  }
}

export namespace AdminInviteRequests {
  export type AdminInviteRequestsApproveRequest = {
    token: string;
    contentType: ContentType;
    inviteRequestId: string;
    teamId?: string;
  };

  export class AdminInviteRequestsApproveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminInviteRequestsApproveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsDenyRequest = {
    token: string;
    contentType: ContentType;
    inviteRequestId: string;
    teamId?: string;
  };

  export class AdminInviteRequestsDenyError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminInviteRequestsDenyError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminInviteRequestsListRequest = {
    teamId?: string;
    cursor?: string;
    limit?: number;
    token: string;
    contentType: ContentType;
  };

  export class AdminInviteRequestsListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminInviteRequestsListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
