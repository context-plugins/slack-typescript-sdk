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

export class AdminUsersSession {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_users_session_invalidate
   *
   * @remarks
   * Invalidate a single session for a user by session_id
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsersSession.AdminUsersSessionInvalidateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSessionInvalidate(
    request: AdminUsersSession.AdminUsersSessionInvalidateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsersSession.AdminUsersSessionInvalidateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.session.invalidate"),
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
            { name: "session_id", value: request.sessionId, schema: s.int() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsersSession.AdminUsersSessionInvalidateError,
      },
      options,
    );
  }

  /**
   * admin_users_session_reset
   *
   * @remarks
   * Wipes all valid sessions on all devices for a given user
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsersSession.AdminUsersSessionResetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsersSessionReset(
    request: AdminUsersSession.AdminUsersSessionResetRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsersSession.AdminUsersSessionResetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.users.session.reset"),
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
            { name: "user_id", value: request.userId, schema: s.string() },
            { name: "mobile_only", value: request.mobileOnly, schema: s.optional(s.boolean()) },
            { name: "web_only", value: request.webOnly, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsersSession.AdminUsersSessionResetError,
      },
      options,
    );
  }
}

export namespace AdminUsersSession {
  export type AdminUsersSessionInvalidateRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** ID of the team that the session belongs to */
    teamId: string;
    sessionId: number;
  };

  export class AdminUsersSessionInvalidateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSessionInvalidateError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsersSessionResetRequest = {
    /** Authentication token. Requires scope: `admin.users:write` */
    token: string;
    contentType: ContentType;
    /** The ID of the user to wipe sessions for */
    userId: string;
    /** Only expire mobile sessions (default: false) */
    mobileOnly?: boolean;
    /** Only expire web sessions (default: false) */
    webOnly?: boolean;
  };

  export class AdminUsersSessionResetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsersSessionResetError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
