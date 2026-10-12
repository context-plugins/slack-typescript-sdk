import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apImethodusersGetPresenceSchema,
  type ApImethodusersGetPresence,
} from "../models/ap-imethodusers-get-presence.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  usersConversationserrorschema1Schema,
  type UsersConversationserrorschema1,
} from "../models/users-conversationserrorschema1.js";
import {
  usersConversationssuccessschemaSchema,
  type UsersConversationssuccessschema,
} from "../models/users-conversationssuccessschema.js";
import {
  usersCountserrorschema1Schema,
  type UsersCountserrorschema1,
} from "../models/users-countserrorschema1.js";
import {
  usersDeletePhotoerrorschema1Schema,
  type UsersDeletePhotoerrorschema1,
} from "../models/users-delete-photoerrorschema1.js";
import {
  usersDeletePhotoschemaSchema,
  type UsersDeletePhotoschema,
} from "../models/users-delete-photoschema.js";
import {
  usersIdentityerrorschema1Schema,
  type UsersIdentityerrorschema1,
} from "../models/users-identityerrorschema1.js";
import { usersInfoerrorschema1Schema, type UsersInfoerrorschema1 } from "../models/users-infoerrorschema1.js";
import {
  usersInfosuccessschemaSchema,
  type UsersInfosuccessschema,
} from "../models/users-infosuccessschema.js";
import { usersListerrorschema1Schema, type UsersListerrorschema1 } from "../models/users-listerrorschema1.js";
import { usersListschemaSchema, type UsersListschema } from "../models/users-listschema.js";
import {
  usersLookupByEmailerrorschema1Schema,
  type UsersLookupByEmailerrorschema1,
} from "../models/users-lookup-by-emailerrorschema1.js";
import {
  usersLookupByEmailsuccessschemaSchema,
  type UsersLookupByEmailsuccessschema,
} from "../models/users-lookup-by-emailsuccessschema.js";
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
import {
  usersSetActiveerrorschema1Schema,
  type UsersSetActiveerrorschema1,
} from "../models/users-set-activeerrorschema1.js";
import { usersSetActiveschemaSchema, type UsersSetActiveschema } from "../models/users-set-activeschema.js";
import {
  usersSetPhotoerrorschema1Schema,
  type UsersSetPhotoerrorschema1,
} from "../models/users-set-photoerrorschema1.js";
import { usersSetPhotoschemaSchema, type UsersSetPhotoschema } from "../models/users-set-photoschema.js";
import {
  usersSetPresenceerrorschema1Schema,
  type UsersSetPresenceerrorschema1,
} from "../models/users-set-presenceerrorschema1.js";
import {
  usersSetPresenceschemaSchema,
  type UsersSetPresenceschema,
} from "../models/users-set-presenceschema.js";
import type { Servers } from "../servers.js";

export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * users_conversations
   *
   * @remarks
   * List conversations the calling user may access.
   *
   * @returns Typical success response with only public channels. Note how `num_members` and
   * `is_member` are not returned like typical `conversations` objects.
   *
   * @throws {@link Users.UsersConversationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersConversations(
    request: Users.UsersConversationsRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersConversationssuccessschema, Users.UsersConversationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users.conversations"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "exclude_archived", value: request.excludeArchived, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersConversationssuccessschemaSchema },
        errorFactory: Users.UsersConversationsError,
      },
      options,
    );
  }

  /**
   * users_deletePhoto
   *
   * @remarks
   * Delete the user profile photo
   *
   * @returns Typical success response
   *
   * @throws {@link Users.UsersDeletePhotoError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersDeletePhoto(
    request: Users.UsersDeletePhotoRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersDeletePhotoschema, Users.UsersDeletePhotoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users.deletePhoto"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "token", value: request.token, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: usersDeletePhotoschemaSchema },
        errorFactory: Users.UsersDeletePhotoError,
      },
      options,
    );
  }

  /**
   * users_getPresence
   *
   * @remarks
   * Gets user presence information.
   *
   * @returns When requesting information for a different user, this method just returns the current
   * presence (either `active` or `away`).
   *
   * @throws {@link Users.UsersGetPresenceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersGetPresence(
    request: Users.UsersGetPresenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApImethodusersGetPresence, Users.UsersGetPresenceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users.getPresence"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apImethodusersGetPresenceSchema },
        errorFactory: Users.UsersGetPresenceError,
      },
      options,
    );
  }

  /**
   * users_identity
   *
   * @remarks
   * Get a user's identity.
   *
   * @returns You will receive at a minimum the following information:
   *
   * @throws {@link Users.UsersIdentityError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersIdentity(
    request: Users.UsersIdentityRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Users.UsersIdentityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users.identity"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [{ name: "token", value: request.token, schema: s.optional(s.string()) }],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Users.UsersIdentityError,
      },
      options,
    );
  }

  /**
   * users_info
   *
   * @remarks
   * Gets information about a user.
   *
   * @returns Typical success response
   *
   * @throws {@link Users.UsersInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersInfo(
    request: Users.UsersInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersInfosuccessschema, Users.UsersInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "include_locale", value: request.includeLocale, schema: s.optional(s.boolean()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersInfosuccessschemaSchema },
        errorFactory: Users.UsersInfoError,
      },
      options,
    );
  }

  /**
   * users_list
   *
   * @remarks
   * Lists all users in a Slack team.
   *
   * @returns Typical success response
   *
   * @throws {@link Users.UsersListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersList(
    request: Users.UsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersListschema, Users.UsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "include_locale", value: request.includeLocale, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersListschemaSchema },
        errorFactory: Users.UsersListError,
      },
      options,
    );
  }

  /**
   * users_lookupByEmail
   *
   * @remarks
   * Find a user with an email address.
   *
   * @returns Typical success response
   *
   * @throws {@link Users.UsersLookupByEmailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersLookupByEmail(
    request: Users.UsersLookupByEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersLookupByEmailsuccessschema, Users.UsersLookupByEmailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users.lookupByEmail"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "email", value: request.email, schema: s.string() },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersLookupByEmailsuccessschemaSchema },
        errorFactory: Users.UsersLookupByEmailError,
      },
      options,
    );
  }

  /**
   * users_profile_get
   *
   * @remarks
   * Retrieves a user's profile information.
   *
   * @returns Typical success response
   *
   * @throws {@link Users.UsersProfileGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersProfileGet(
    request: Users.UsersProfileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersProfileGetschema, Users.UsersProfileGetError> {
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
        errorFactory: Users.UsersProfileGetError,
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
   * @throws {@link Users.UsersProfileSetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersProfileSet(
    request: Users.UsersProfileSetRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersProfileSetschema, Users.UsersProfileSetError> {
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
        errorFactory: Users.UsersProfileSetError,
      },
      options,
    );
  }

  /**
   * users_setActive
   *
   * @remarks
   * Marked a user as active. Deprecated and non-functional.
   *
   * @returns Typical success response
   *
   * @throws {@link Users.UsersSetActiveError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersSetActive(
    request: Users.UsersSetActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersSetActiveschema, Users.UsersSetActiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users.setActive"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersSetActiveschemaSchema },
        errorFactory: Users.UsersSetActiveError,
      },
      options,
    );
  }

  /**
   * users_setPhoto
   *
   * @remarks
   * Set the user profile photo
   *
   * @returns Typical success response
   *
   * @throws {@link Users.UsersSetPhotoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersSetPhoto(
    request: Users.UsersSetPhotoRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersSetPhotoschema, Users.UsersSetPhotoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users.setPhoto"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "crop_w", value: request.cropW, schema: s.optional(s.string()) },
            { name: "crop_x", value: request.cropX, schema: s.optional(s.string()) },
            { name: "crop_y", value: request.cropY, schema: s.optional(s.string()) },
            { name: "image", value: request.image, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: usersSetPhotoschemaSchema },
        errorFactory: Users.UsersSetPhotoError,
      },
      options,
    );
  }

  /**
   * users_setPresence
   *
   * @remarks
   * Manually sets user presence.
   *
   * @returns Typical success response
   *
   * @throws {@link Users.UsersSetPresenceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usersSetPresence(
    request: Users.UsersSetPresenceRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersSetPresenceschema, Users.UsersSetPresenceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users.setPresence"),
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
          value: [{ name: "presence", value: request.presence, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: usersSetPresenceschemaSchema },
        errorFactory: Users.UsersSetPresenceError,
      },
      options,
    );
  }
}

export namespace Users {
  export type UsersConversationsRequest = {
    /** Authentication token. Requires scope: `conversations:read` */
    token?: string;
    /**
     * Browse conversations by a specific user ID's membership. Non-public channels are restricted
     * to those where the calling user shares membership.
     */
    user?: string;
    /**
     * Mix and match channel types by providing a comma-separated list of any combination of
     * `public_channel`, `private_channel`, `mpim`, `im`
     */
    types?: string;
    /** Set to `true` to exclude archived channels from the list */
    excludeArchived?: boolean;
    /**
     * The maximum number of items to return. Fewer than the requested number of items may be
     * returned, even if the end of the list hasn't been reached. Must be an integer no larger than
     * 1000.
     */
    limit?: number;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class UsersConversationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usersConversationserrorschema1", UsersConversationserrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsersConversationsError> = [
      {
        on: "default",
        kind: "usersConversationserrorschema1",
        decode: { kind: "json", schema: usersConversationserrorschema1Schema },
      },
    ];
  }

  export type UsersDeletePhotoRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `users.profile:write` */
    token: string;
  };

  export class UsersDeletePhotoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usersDeletePhotoerrorschema1", UsersDeletePhotoerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsersDeletePhotoError> = [
      {
        on: "default",
        kind: "usersDeletePhotoerrorschema1",
        decode: { kind: "json", schema: usersDeletePhotoerrorschema1Schema },
      },
    ];
  }

  export type UsersGetPresenceRequest = {
    /** Authentication token. Requires scope: `users:read` */
    token: string;
    /** User to get presence info on. Defaults to the authed user. */
    user?: string;
    contentType: ContentType;
  };

  export class UsersGetPresenceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"usersCountserrorschema1", UsersCountserrorschema1>>;

    static readonly errors: ErrorDecoders<UsersGetPresenceError> = [
      {
        on: "default",
        kind: "usersCountserrorschema1",
        decode: { kind: "json", schema: usersCountserrorschema1Schema },
      },
    ];
  }

  export type UsersIdentityRequest = {
    /** Authentication token. Requires scope: `identity.basic` */
    token?: string;
    contentType: ContentType;
  };

  export class UsersIdentityError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"usersIdentityerrorschema1", UsersIdentityerrorschema1>>;

    static readonly errors: ErrorDecoders<UsersIdentityError> = [
      {
        on: "default",
        kind: "usersIdentityerrorschema1",
        decode: { kind: "json", schema: usersIdentityerrorschema1Schema },
      },
    ];
  }

  export type UsersInfoRequest = {
    /** Authentication token. Requires scope: `users:read` */
    token: string;
    /** Set this to `true` to receive the locale for this user. Defaults to `false` */
    includeLocale?: boolean;
    /** User to get info on */
    user?: string;
    contentType: ContentType;
  };

  export class UsersInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"usersInfoerrorschema1", UsersInfoerrorschema1>>;

    static readonly errors: ErrorDecoders<UsersInfoError> = [
      {
        on: "default",
        kind: "usersInfoerrorschema1",
        decode: { kind: "json", schema: usersInfoerrorschema1Schema },
      },
    ];
  }

  export type UsersListRequest = {
    /** Authentication token. Requires scope: `users:read` */
    token?: string;
    /**
     * The maximum number of items to return. Fewer than the requested number of items may be
     * returned, even if the end of the users list hasn't been reached. Providing no `limit` value
     * will result in Slack attempting to deliver you the entire result set. If the collection is
     * too large you may experience `limit_required` or HTTP 500 errors.
     */
    limit?: number;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    /** Set this to `true` to receive the locale for users. Defaults to `false` */
    includeLocale?: boolean;
    contentType: ContentType;
  };

  export class UsersListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"usersListerrorschema1", UsersListerrorschema1>>;

    static readonly errors: ErrorDecoders<UsersListError> = [
      {
        on: "default",
        kind: "usersListerrorschema1",
        decode: { kind: "json", schema: usersListerrorschema1Schema },
      },
    ];
  }

  export type UsersLookupByEmailRequest = {
    /** Authentication token. Requires scope: `users:read.email` */
    token: string;
    /** An email address belonging to a user in the workspace */
    email: string;
    contentType: ContentType;
  };

  export class UsersLookupByEmailError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usersLookupByEmailerrorschema1", UsersLookupByEmailerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsersLookupByEmailError> = [
      {
        on: "default",
        kind: "usersLookupByEmailerrorschema1",
        decode: { kind: "json", schema: usersLookupByEmailerrorschema1Schema },
      },
    ];
  }

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

  export type UsersSetActiveRequest = {
    /** Authentication token. Requires scope: `users:write` */
    token: string;
    contentType: ContentType;
  };

  export class UsersSetActiveError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usersSetActiveerrorschema1", UsersSetActiveerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsersSetActiveError> = [
      {
        on: "default",
        kind: "usersSetActiveerrorschema1",
        decode: { kind: "json", schema: usersSetActiveerrorschema1Schema },
      },
    ];
  }

  export type UsersSetPhotoRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `users.profile:write` */
    token: string;
    /** Width/height of crop box (always square) */
    cropW?: string;
    /** X coordinate of top-left corner of crop box */
    cropX?: string;
    /** Y coordinate of top-left corner of crop box */
    cropY?: string;
    /** File contents via `multipart/form-data`. */
    image?: string;
  };

  export class UsersSetPhotoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"usersSetPhotoerrorschema1", UsersSetPhotoerrorschema1>>;

    static readonly errors: ErrorDecoders<UsersSetPhotoError> = [
      {
        on: "default",
        kind: "usersSetPhotoerrorschema1",
        decode: { kind: "json", schema: usersSetPhotoerrorschema1Schema },
      },
    ];
  }

  export type UsersSetPresenceRequest = {
    /** Authentication token. Requires scope: `users:write` */
    token: string;
    contentType: ContentType;
    /** Either `auto` or `away` */
    presence: string;
  };

  export class UsersSetPresenceError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usersSetPresenceerrorschema1", UsersSetPresenceerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsersSetPresenceError> = [
      {
        on: "default",
        kind: "usersSetPresenceerrorschema1",
        decode: { kind: "json", schema: usersSetPresenceerrorschema1Schema },
      },
    ];
  }
}
