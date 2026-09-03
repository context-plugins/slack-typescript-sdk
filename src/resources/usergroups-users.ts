import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  usergroupsUsersList(
    request: UsergroupsUsers.UsergroupsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersListschema, UsergroupsUsers.UsergroupsUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/usergroups.users.list"),
        auth: this.#auth.slackAuth,
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

  usergroupsUsersUpdate(
    request: UsergroupsUsers.UsergroupsUsersUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersUpdateschema, UsergroupsUsers.UsergroupsUsersUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/usergroups.users.update"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
    token: string;
    usergroup: string;
    includeDisabled?: boolean;
    contentType: ContentType;
  };

  export class UsergroupsUsersListError extends ResponseError<
    Declared<"usergroupsUsersListerrorschema1", UsergroupsUsersListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsergroupsUsersListError> = [
      {
        on: [400, 599],
        kind: "usergroupsUsersListerrorschema1",
        decode: { kind: "json", schema: usergroupsUsersListerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsUsersUpdateRequest = {
    token: string;
    contentType: ContentType;
    usergroup: string;
    users: string;
    includeCount?: boolean;
  };

  export class UsergroupsUsersUpdateError extends ResponseError<
    Declared<"usergroupsUsersUpdateerrorschema1", UsergroupsUsersUpdateerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsergroupsUsersUpdateError> = [
      {
        on: [400, 599],
        kind: "usergroupsUsersUpdateerrorschema1",
        decode: { kind: "json", schema: usergroupsUsersUpdateerrorschema1Schema },
      },
    ];
  }
}
