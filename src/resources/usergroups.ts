import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  usergroupsCreateerrorschema1Schema,
  type UsergroupsCreateerrorschema1,
} from "../models/usergroups-createerrorschema1.js";
import {
  usergroupsCreateschemaSchema,
  type UsergroupsCreateschema,
} from "../models/usergroups-createschema.js";
import {
  usergroupsDisableerrorschema1Schema,
  type UsergroupsDisableerrorschema1,
} from "../models/usergroups-disableerrorschema1.js";
import {
  usergroupsDisableschemaSchema,
  type UsergroupsDisableschema,
} from "../models/usergroups-disableschema.js";
import {
  usergroupsEnableerrorschema1Schema,
  type UsergroupsEnableerrorschema1,
} from "../models/usergroups-enableerrorschema1.js";
import {
  usergroupsEnableschemaSchema,
  type UsergroupsEnableschema,
} from "../models/usergroups-enableschema.js";
import {
  usergroupsListerrorschema1Schema,
  type UsergroupsListerrorschema1,
} from "../models/usergroups-listerrorschema1.js";
import { usergroupsListschemaSchema, type UsergroupsListschema } from "../models/usergroups-listschema.js";
import {
  usergroupsUpdateerrorschema1Schema,
  type UsergroupsUpdateerrorschema1,
} from "../models/usergroups-updateerrorschema1.js";
import {
  usergroupsUpdateschemaSchema,
  type UsergroupsUpdateschema,
} from "../models/usergroups-updateschema.js";
import {
  usergroupsUsersListerrorschema1Schema,
  type UsergroupsUsersListerrorschema1,
} from "../models/usergroups-users-listerrorschema1.js";
import {
  usergroupsUsersListschemaSchema,
  type UsergroupsUsersListschema,
} from "../models/usergroups-users-listschema.js";
import {
  usergroupsUsersUpdateerrorschema1Schema,
  type UsergroupsUsersUpdateerrorschema1,
} from "../models/usergroups-users-updateerrorschema1.js";
import {
  usergroupsUsersUpdateschemaSchema,
  type UsergroupsUsersUpdateschema,
} from "../models/usergroups-users-updateschema.js";
import type { Servers } from "../servers.js";

export class Usergroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * usergroups_create
   *
   * @remarks
   * Create a User Group
   *
   * @returns Typical success response
   *
   * @throws {@link Usergroups.UsergroupsCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsCreate(
    request: Usergroups.UsergroupsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsCreateschema, Usergroups.UsergroupsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/usergroups.create"),
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
            { name: "name", value: request.name, schema: s.string() },
            { name: "channels", value: request.channels, schema: s.optional(s.string()) },
            { name: "description", value: request.description, schema: s.optional(s.string()) },
            { name: "handle", value: request.handle, schema: s.optional(s.string()) },
            { name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: usergroupsCreateschemaSchema },
        errorFactory: Usergroups.UsergroupsCreateError,
      },
      options,
    );
  }

  /**
   * usergroups_disable
   *
   * @remarks
   * Disable an existing User Group
   *
   * @returns Typical success response
   *
   * @throws {@link Usergroups.UsergroupsDisableError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsDisable(
    request: Usergroups.UsergroupsDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsDisableschema, Usergroups.UsergroupsDisableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/usergroups.disable"),
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
            { name: "usergroup", value: request.usergroup, schema: s.string() },
            { name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: usergroupsDisableschemaSchema },
        errorFactory: Usergroups.UsergroupsDisableError,
      },
      options,
    );
  }

  /**
   * usergroups_enable
   *
   * @remarks
   * Enable a User Group
   *
   * @returns Typical success response
   *
   * @throws {@link Usergroups.UsergroupsEnableError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsEnable(
    request: Usergroups.UsergroupsEnableRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsEnableschema, Usergroups.UsergroupsEnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/usergroups.enable"),
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
            { name: "usergroup", value: request.usergroup, schema: s.string() },
            { name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: usergroupsEnableschemaSchema },
        errorFactory: Usergroups.UsergroupsEnableError,
      },
      options,
    );
  }

  /**
   * usergroups_list
   *
   * @remarks
   * List all User Groups for a team
   *
   * @returns Typical success response
   *
   * @throws {@link Usergroups.UsergroupsListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsList(
    request: Usergroups.UsergroupsListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsListschema, Usergroups.UsergroupsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/usergroups.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "include_users", value: request.includeUsers, schema: s.optional(s.boolean()) },
          { name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) },
          { name: "include_disabled", value: request.includeDisabled, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usergroupsListschemaSchema },
        errorFactory: Usergroups.UsergroupsListError,
      },
      options,
    );
  }

  /**
   * usergroups_update
   *
   * @remarks
   * Update an existing User Group
   *
   * @returns Typical success response
   *
   * @throws {@link Usergroups.UsergroupsUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsUpdate(
    request: Usergroups.UsergroupsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUpdateschema, Usergroups.UsergroupsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/usergroups.update"),
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
            { name: "usergroup", value: request.usergroup, schema: s.string() },
            { name: "handle", value: request.handle, schema: s.optional(s.string()) },
            { name: "description", value: request.description, schema: s.optional(s.string()) },
            { name: "channels", value: request.channels, schema: s.optional(s.string()) },
            { name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) },
            { name: "name", value: request.name, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: usergroupsUpdateschemaSchema },
        errorFactory: Usergroups.UsergroupsUpdateError,
      },
      options,
    );
  }

  /**
   * usergroups_users_list
   *
   * @remarks
   * List all users in a User Group
   *
   * @returns Standard success response when used with a user token
   *
   * @throws {@link Usergroups.UsergroupsUsersListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsUsersList(
    request: Usergroups.UsergroupsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersListschema, Usergroups.UsergroupsUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/usergroups.users.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "usergroup", value: request.usergroup, schema: s.string() },
          { name: "include_disabled", value: request.includeDisabled, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usergroupsUsersListschemaSchema },
        errorFactory: Usergroups.UsergroupsUsersListError,
      },
      options,
    );
  }

  /**
   * usergroups_users_update
   *
   * @remarks
   * Update the list of users for a User Group
   *
   * @returns Typical success response
   *
   * @throws {@link Usergroups.UsergroupsUsersUpdateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsUsersUpdate(
    request: Usergroups.UsergroupsUsersUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersUpdateschema, Usergroups.UsergroupsUsersUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/usergroups.users.update"),
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
            { name: "usergroup", value: request.usergroup, schema: s.string() },
            { name: "users", value: request.users, schema: s.string() },
            { name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: usergroupsUsersUpdateschemaSchema },
        errorFactory: Usergroups.UsergroupsUsersUpdateError,
      },
      options,
    );
  }
}

export namespace Usergroups {
  export type UsergroupsCreateRequest = {
    /** Authentication token. Requires scope: `usergroups:write` */
    token: string;
    contentType: ContentType;
    /** A name for the User Group. Must be unique among User Groups. */
    name: string;
    /**
     * A comma separated string of encoded channel IDs for which the User Group uses as a default.
     */
    channels?: string;
    /** A short description of the User Group. */
    description?: string;
    /** A mention handle. Must be unique among channels, users and User Groups. */
    handle?: string;
    /** Include the number of users in each User Group. */
    includeCount?: boolean;
  };

  export class UsergroupsCreateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usergroupsCreateerrorschema1", UsergroupsCreateerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsergroupsCreateError> = [
      {
        on: "default",
        kind: "usergroupsCreateerrorschema1",
        decode: { kind: "json", schema: usergroupsCreateerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsDisableRequest = {
    /** Authentication token. Requires scope: `usergroups:write` */
    token: string;
    contentType: ContentType;
    /** The encoded ID of the User Group to disable. */
    usergroup: string;
    /** Include the number of users in the User Group. */
    includeCount?: boolean;
  };

  export class UsergroupsDisableError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usergroupsDisableerrorschema1", UsergroupsDisableerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsergroupsDisableError> = [
      {
        on: "default",
        kind: "usergroupsDisableerrorschema1",
        decode: { kind: "json", schema: usergroupsDisableerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsEnableRequest = {
    /** Authentication token. Requires scope: `usergroups:write` */
    token: string;
    contentType: ContentType;
    /** The encoded ID of the User Group to enable. */
    usergroup: string;
    /** Include the number of users in the User Group. */
    includeCount?: boolean;
  };

  export class UsergroupsEnableError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usergroupsEnableerrorschema1", UsergroupsEnableerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsergroupsEnableError> = [
      {
        on: "default",
        kind: "usergroupsEnableerrorschema1",
        decode: { kind: "json", schema: usergroupsEnableerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsListRequest = {
    /** Authentication token. Requires scope: `usergroups:read` */
    token: string;
    /** Include the list of users for each User Group. */
    includeUsers?: boolean;
    /** Include the number of users in each User Group. */
    includeCount?: boolean;
    /** Include disabled User Groups. */
    includeDisabled?: boolean;
    contentType: ContentType;
  };

  export class UsergroupsListError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usergroupsListerrorschema1", UsergroupsListerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsergroupsListError> = [
      {
        on: "default",
        kind: "usergroupsListerrorschema1",
        decode: { kind: "json", schema: usergroupsListerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsUpdateRequest = {
    /** Authentication token. Requires scope: `usergroups:write` */
    token: string;
    contentType: ContentType;
    /** The encoded ID of the User Group to update. */
    usergroup: string;
    /** A mention handle. Must be unique among channels, users and User Groups. */
    handle?: string;
    /** A short description of the User Group. */
    description?: string;
    /**
     * A comma separated string of encoded channel IDs for which the User Group uses as a default.
     */
    channels?: string;
    /** Include the number of users in the User Group. */
    includeCount?: boolean;
    /** A name for the User Group. Must be unique among User Groups. */
    name?: string;
  };

  export class UsergroupsUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usergroupsUpdateerrorschema1", UsergroupsUpdateerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsergroupsUpdateError> = [
      {
        on: "default",
        kind: "usergroupsUpdateerrorschema1",
        decode: { kind: "json", schema: usergroupsUpdateerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsUsersListRequest = {
    /** Authentication token. Requires scope: `usergroups:read` */
    token: string;
    /** The encoded ID of the User Group to update. */
    usergroup: string;
    /** Allow results that involve disabled User Groups. */
    includeDisabled?: boolean;
    contentType: ContentType;
  };

  export class UsergroupsUsersListError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usergroupsUsersListerrorschema1", UsergroupsUsersListerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsergroupsUsersListError> = [
      {
        on: "default",
        kind: "usergroupsUsersListerrorschema1",
        decode: { kind: "json", schema: usergroupsUsersListerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsUsersUpdateRequest = {
    /** Authentication token. Requires scope: `usergroups:write` */
    token: string;
    contentType: ContentType;
    /** The encoded ID of the User Group to update. */
    usergroup: string;
    /**
     * A comma separated string of encoded user IDs that represent the entire list of users for the
     * User Group.
     */
    users: string;
    /** Include the number of users in the User Group. */
    includeCount?: boolean;
  };

  export class UsergroupsUsersUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"usergroupsUsersUpdateerrorschema1", UsergroupsUsersUpdateerrorschema1>
    >;

    static readonly errors: ErrorDecoders<UsergroupsUsersUpdateError> = [
      {
        on: "default",
        kind: "usergroupsUsersUpdateerrorschema1",
        decode: { kind: "json", schema: usergroupsUsersUpdateerrorschema1Schema },
      },
    ];
  }
}
