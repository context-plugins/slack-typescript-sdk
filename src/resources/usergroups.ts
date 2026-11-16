import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  usergroupsCreateschemaInternalSchema,
  type UsergroupsCreateschema,
} from "../models/usergroups-createschema.js";
import {
  usergroupsDisableschemaInternalSchema,
  type UsergroupsDisableschema,
} from "../models/usergroups-disableschema.js";
import {
  usergroupsEnableschemaInternalSchema,
  type UsergroupsEnableschema,
} from "../models/usergroups-enableschema.js";
import {
  usergroupsListschemaInternalSchema,
  type UsergroupsListschema,
} from "../models/usergroups-listschema.js";
import {
  usergroupsUpdateschemaInternalSchema,
  type UsergroupsUpdateschema,
} from "../models/usergroups-updateschema.js";
import {
  usergroupsUsersListschemaInternalSchema,
  type UsergroupsUsersListschema,
} from "../models/usergroups-users-listschema.js";
import {
  usergroupsUsersUpdateschemaInternalSchema,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsCreate(
    request: Usergroups.UsergroupsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsCreateschema, ApiError> {
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
        success: { kind: "json", schema: usergroupsCreateschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsDisable(
    request: Usergroups.UsergroupsDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsDisableschema, ApiError> {
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
        success: { kind: "json", schema: usergroupsDisableschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsEnable(
    request: Usergroups.UsergroupsEnableRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsEnableschema, ApiError> {
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
        success: { kind: "json", schema: usergroupsEnableschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsList(
    request: Usergroups.UsergroupsListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsListschema, ApiError> {
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
        success: { kind: "json", schema: usergroupsListschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsUpdate(
    request: Usergroups.UsergroupsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUpdateschema, ApiError> {
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
        success: { kind: "json", schema: usergroupsUpdateschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsUsersList(
    request: Usergroups.UsergroupsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersListschema, ApiError> {
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
        success: { kind: "json", schema: usergroupsUsersListschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsUsersUpdate(
    request: Usergroups.UsergroupsUsersUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersUpdateschema, ApiError> {
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
        success: { kind: "json", schema: usergroupsUsersUpdateschemaInternalSchema },
        errorFactory: ApiError,
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

  export type UsergroupsDisableRequest = {
    /** Authentication token. Requires scope: `usergroups:write` */
    token: string;
    contentType: ContentType;
    /** The encoded ID of the User Group to disable. */
    usergroup: string;
    /** Include the number of users in the User Group. */
    includeCount?: boolean;
  };

  export type UsergroupsEnableRequest = {
    /** Authentication token. Requires scope: `usergroups:write` */
    token: string;
    contentType: ContentType;
    /** The encoded ID of the User Group to enable. */
    usergroup: string;
    /** Include the number of users in the User Group. */
    includeCount?: boolean;
  };

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

  export type UsergroupsUsersListRequest = {
    /** Authentication token. Requires scope: `usergroups:read` */
    token: string;
    /** The encoded ID of the User Group to update. */
    usergroup: string;
    /** Allow results that involve disabled User Groups. */
    includeDisabled?: boolean;
    contentType: ContentType;
  };

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
}
