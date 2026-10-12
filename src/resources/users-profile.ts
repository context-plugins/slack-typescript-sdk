import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  usersProfileGeterrorschema1Schema,
  type UsersProfileGeterrorschema1,
} from "../models/users-profile-geterrorschema1.js";
import {
  usersProfileGetschemaSchema,
  type UsersProfileGetschema,
} from "../models/users-profile-getschema.js";
import {
  usersProfileSeterrorschema1Schema,
  type UsersProfileSeterrorschema1,
} from "../models/users-profile-seterrorschema1.js";
import {
  usersProfileSetschemaSchema,
  type UsersProfileSetschema,
} from "../models/users-profile-setschema.js";
import type { Servers } from "../servers.js";

export class UsersProfile {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * users_profile_get
   *
   * @remarks
   * Retrieves a user's profile information.
   *
   * @returns Typical success response
   *
   * @throws {@link UsersProfile.UsersProfileGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersProfileGet(
    request: UsersProfile.UsersProfileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersProfileGetschema, UsersProfile.UsersProfileGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users.profile.get"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "include_labels", value: request.includeLabels, schema: s.optional(s.boolean()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersProfileGetschemaSchema },
        errorFactory: UsersProfile.UsersProfileGetError,
      },
      options,
    );
  }

  /**
   * users_profile_set
   *
   * @remarks
   * Set the profile information for a user.
   *
   * @returns Typical success response
   *
   * @throws {@link UsersProfile.UsersProfileSetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersProfileSet(
    request: UsersProfile.UsersProfileSetRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersProfileSetschema, UsersProfile.UsersProfileSetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users.profile.set"),
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
            { name: "name", value: request.name, schema: s.optional(s.string()) },
            { name: "profile", value: request.profile, schema: s.optional(s.string()) },
            { name: "user", value: request.user, schema: s.optional(s.string()) },
            { name: "value", value: request.value, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: usersProfileSetschemaSchema },
        errorFactory: UsersProfile.UsersProfileSetError,
      },
      options,
    );
  }
}

export namespace UsersProfile {
  export type UsersProfileGetRequest = {
    /** Authentication token. Requires scope: `users.profile:read` */
    token: string;
    /** Include labels for each ID in custom profile fields */
    includeLabels?: boolean;
    /** User to retrieve profile info for */
    user?: string;
    contentType: ContentType;
  };

  export class UsersProfileGetError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usersProfileGeterrorschema1", UsersProfileGeterrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsersProfileGetError> = [
      {
        on: "default",
        kind: "usersProfileGeterrorschema1",
        decode: { kind: "json", schema: usersProfileGeterrorschema1Schema },
      },
    ];
  }

  export type UsersProfileSetRequest = {
    /** Authentication token. Requires scope: `users.profile:write` */
    token: string;
    contentType: ContentType;
    /** Name of a single key to set. Usable only if `profile` is not passed. */
    name?: string;
    /**
     * Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be
     * set. Each field name is limited to 255 characters.
     */
    profile?: string;
    /** ID of user to change. This argument may only be specified by team admins on paid teams. */
    user?: string;
    /** Value to set a single key to. Usable only if `profile` is not passed. */
    value?: string;
  };

  export class UsersProfileSetError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usersProfileSeterrorschema1", UsersProfileSeterrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsersProfileSetError> = [
      {
        on: "default",
        kind: "usersProfileSeterrorschema1",
        decode: { kind: "json", schema: usersProfileSeterrorschema1Schema },
      },
    ];
  }
}
