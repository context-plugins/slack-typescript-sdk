import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
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
   * @throws {@link UsergroupsUsers.UsergroupsUsersListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsUsersList(
    request: UsergroupsUsers.UsergroupsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersListschema, UsergroupsUsers.UsergroupsUsersListError> {
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
        errorFactory: UsergroupsUsers.UsergroupsUsersListError,
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
   * @throws {@link UsergroupsUsers.UsergroupsUsersUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usergroupsUsersUpdate(
    request: UsergroupsUsers.UsergroupsUsersUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersUpdateschema, UsergroupsUsers.UsergroupsUsersUpdateError> {
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
        errorFactory: UsergroupsUsers.UsergroupsUsersUpdateError,
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
