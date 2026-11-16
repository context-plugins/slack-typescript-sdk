import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  usergroupsUsersListschemaInternalSchema,
  type UsergroupsUsersListschema,
} from "../models/usergroups-users-listschema.js";
import {
  usergroupsUsersUpdateschemaInternalSchema,
  type UsergroupsUsersUpdateschema,
} from "../models/usergroups-users-updateschema.js";
import type { Servers } from "../servers.js";

export class UsergroupsUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
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
    request: UsergroupsUsers.UsergroupsUsersListRequest,
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
    request: UsergroupsUsers.UsergroupsUsersUpdateRequest,
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

export namespace UsergroupsUsers {
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
