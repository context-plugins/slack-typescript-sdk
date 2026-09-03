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

export class AdminUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminUsersAssign(
    request: AdminUsers.AdminUsersAssignRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersAssignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.assign"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
            { name: "is_restricted", value: request.isRestricted, schema: s.optional(s.boolean()) },
            {
              name: "is_ultra_restricted",
              value: request.isUltraRestricted,
              schema: s.optional(s.boolean()),
            },
            { name: "channel_ids", value: request.channelIds, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsers.AdminUsersAssignError,
      },
      options,
    );
  }

  adminUsersInvite(
    request: AdminUsers.AdminUsersInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.invite"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "email", value: request.email, schema: s.string() },
            { name: "channel_ids", value: request.channelIds, schema: s.string() },
            { name: "custom_message", value: request.customMessage, schema: s.optional(s.string()) },
            { name: "real_name", value: request.realName, schema: s.optional(s.string()) },
            { name: "resend", value: request.resend, schema: s.optional(s.boolean()) },
            { name: "is_restricted", value: request.isRestricted, schema: s.optional(s.boolean()) },
            {
              name: "is_ultra_restricted",
              value: request.isUltraRestricted,
              schema: s.optional(s.boolean()),
            },
            { name: "guest_expiration_ts", value: request.guestExpirationTs, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsers.AdminUsersInviteError,
      },
      options,
    );
  }

  adminUsersList(
    request: AdminUsers.AdminUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.users.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "team_id", value: request.teamId, schema: s.string() },
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
        errorFactory: AdminUsers.AdminUsersListError,
      },
      options,
    );
  }

  adminUsersRemove(
    request: AdminUsers.AdminUsersRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.remove"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsers.AdminUsersRemoveError,
      },
      options,
    );
  }

  adminUsersSetAdmin(
    request: AdminUsers.AdminUsersSetAdminRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersSetAdminError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.setAdmin"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsers.AdminUsersSetAdminError,
      },
      options,
    );
  }

  adminUsersSetExpiration(
    request: AdminUsers.AdminUsersSetExpirationRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersSetExpirationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.setExpiration"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
            { name: "expiration_ts", value: request.expirationTs, schema: s.number() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsers.AdminUsersSetExpirationError,
      },
      options,
    );
  }

  adminUsersSetOwner(
    request: AdminUsers.AdminUsersSetOwnerRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersSetOwnerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.setOwner"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsers.AdminUsersSetOwnerError,
      },
      options,
    );
  }

  adminUsersSetRegular(
    request: AdminUsers.AdminUsersSetRegularRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersSetRegularError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.users.setRegular"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsers.AdminUsersSetRegularError,
      },
      options,
    );
  }
}

export namespace AdminUsers {
  export type AdminUsersAssignRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
    isRestricted?: boolean;
    isUltraRestricted?: boolean;
    channelIds?: string;
  };

  export class AdminUsersAssignError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersAssignError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersInviteRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    email: string;
    channelIds: string;
    customMessage?: string;
    realName?: string;
    resend?: boolean;
    isRestricted?: boolean;
    isUltraRestricted?: boolean;
    guestExpirationTs?: string;
  };

  export class AdminUsersInviteError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersInviteError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersListRequest = {
    teamId: string;
    cursor?: string;
    limit?: number;
    token: string;
    contentType: ContentType;
  };

  export class AdminUsersListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersRemoveRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
  };

  export class AdminUsersRemoveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersRemoveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetAdminRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
  };

  export class AdminUsersSetAdminError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSetAdminError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetExpirationRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
    expirationTs: number;
  };

  export class AdminUsersSetExpirationError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSetExpirationError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetOwnerRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
  };

  export class AdminUsersSetOwnerError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSetOwnerError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetRegularRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    userId: string;
  };

  export class AdminUsersSetRegularError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsersSetRegularError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
