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

export class AdminUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_users_assign
   *
   * @remarks
   * Add an Enterprise user to a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsers.AdminUsersAssignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersAssign(
    request: AdminUsers.AdminUsersAssignRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersAssignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.assign"),
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

  /**
   * admin_users_invite
   *
   * @remarks
   * Invite a user to a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsers.AdminUsersInviteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersInvite(
    request: AdminUsers.AdminUsersInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.invite"),
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

  /**
   * admin_users_list
   *
   * @remarks
   * List users on a workspace
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsers.AdminUsersListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersList(
    request: AdminUsers.AdminUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.users.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "team_id", value: request.teamId, schema: s.string() },
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
        errorFactory: AdminUsers.AdminUsersListError,
      },
      options,
    );
  }

  /**
   * admin_users_remove
   *
   * @remarks
   * Remove a user from a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsers.AdminUsersRemoveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersRemove(
    request: AdminUsers.AdminUsersRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.remove"),
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

  /**
   * admin_users_setAdmin
   *
   * @remarks
   * Set an existing guest, regular user, or owner to be an admin user.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsers.AdminUsersSetAdminError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSetAdmin(
    request: AdminUsers.AdminUsersSetAdminRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersSetAdminError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.setAdmin"),
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

  /**
   * admin_users_setExpiration
   *
   * @remarks
   * Set an expiration for a guest user
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsers.AdminUsersSetExpirationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSetExpiration(
    request: AdminUsers.AdminUsersSetExpirationRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersSetExpirationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.setExpiration"),
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
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "user_id", value: request.userId, schema: s.string() },
            { name: "expiration_ts", value: request.expirationTs, schema: s.int() },
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

  /**
   * admin_users_setOwner
   *
   * @remarks
   * Set an existing guest, regular user, or admin user to be a workspace owner.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsers.AdminUsersSetOwnerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSetOwner(
    request: AdminUsers.AdminUsersSetOwnerRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersSetOwnerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.setOwner"),
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

  /**
   * admin_users_setRegular
   *
   * @remarks
   * Set an existing guest user, admin user, or owner to be a regular user.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsers.AdminUsersSetRegularError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSetRegular(
    request: AdminUsers.AdminUsersSetRegularRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsers.AdminUsersSetRegularError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.setRegular"),
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
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to add to the workspace. */
    userId: string;
    /** True if user should be added to the workspace as a guest. */
    isRestricted?: boolean;
    /** True if user should be added to the workspace as a single-channel guest. */
    isUltraRestricted?: boolean;
    /** Comma separated values of channel IDs to add user in the new workspace. */
    channelIds?: string;
  };

  export class AdminUsersAssignError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersAssignError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersInviteRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The email address of the person to invite. */
    email: string;
    /**
     * A comma-separated list of `channel_id`s for this user to join. At least one channel is
     * required.
     */
    channelIds: string;
    /** An optional message to send to the user in the invite email. */
    customMessage?: string;
    /** Full name of the user. */
    realName?: string;
    /**
     * Allow this invite to be resent in the future if a user has not signed up yet. (default:
     * false)
     */
    resend?: boolean;
    /** Is this user a multi-channel guest user? (default: false) */
    isRestricted?: boolean;
    /** Is this user a single channel guest user? (default: false) */
    isUltraRestricted?: boolean;
    /**
     * Timestamp when guest account should be disabled. Only include this timestamp if you are
     * inviting a guest user and you want their account to expire on a certain date.
     */
    guestExpirationTs?: string;
  };

  export class AdminUsersInviteError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersInviteError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersListRequest = {
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    /** Limit for how many users to be retrieved per page */
    limit?: number;
    /** Authentication token. Requires scope: `admin.users:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminUsersListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersRemoveRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to remove. */
    userId: string;
  };

  export class AdminUsersRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersRemoveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetAdminRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to designate as an admin. */
    userId: string;
  };

  export class AdminUsersSetAdminError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSetAdminError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetExpirationRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to set an expiration for. */
    userId: string;
    /** Timestamp when guest account should be disabled. */
    expirationTs: number;
  };

  export class AdminUsersSetExpirationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSetExpirationError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetOwnerRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** Id of the user to promote to owner. */
    userId: string;
  };

  export class AdminUsersSetOwnerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSetOwnerError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSetRegularRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID (`T1234`) of the workspace. */
    teamId: string;
    /** The ID of the user to designate as a regular user. */
    userId: string;
  };

  export class AdminUsersSetRegularError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSetRegularError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
