import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  usergroupsCreate(
    request: Usergroups.UsergroupsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsCreateschema, Usergroups.UsergroupsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/usergroups.create"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  usergroupsDisable(
    request: Usergroups.UsergroupsDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsDisableschema, Usergroups.UsergroupsDisableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/usergroups.disable"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  usergroupsEnable(
    request: Usergroups.UsergroupsEnableRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsEnableschema, Usergroups.UsergroupsEnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/usergroups.enable"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  usergroupsList(
    request: Usergroups.UsergroupsListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsListschema, Usergroups.UsergroupsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/usergroups.list"),
        auth: this.#auth.slackAuth,
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

  usergroupsUpdate(
    request: Usergroups.UsergroupsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUpdateschema, Usergroups.UsergroupsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/usergroups.update"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  usergroupsUsersList(
    request: Usergroups.UsergroupsUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersListschema, Usergroups.UsergroupsUsersListError> {
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
        errorFactory: Usergroups.UsergroupsUsersListError,
      },
      options,
    );
  }

  usergroupsUsersUpdate(
    request: Usergroups.UsergroupsUsersUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UsergroupsUsersUpdateschema, Usergroups.UsergroupsUsersUpdateError> {
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
        errorFactory: Usergroups.UsergroupsUsersUpdateError,
      },
      options,
    );
  }
}

export namespace Usergroups {
  export type UsergroupsCreateRequest = {
    token: string;
    contentType: ContentType;
    name: string;
    channels?: string;
    description?: string;
    handle?: string;
    includeCount?: boolean;
  };

  export class UsergroupsCreateError extends ResponseError<
    Declared<"usergroupsCreateerrorschema1", UsergroupsCreateerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsergroupsCreateError> = [
      {
        on: [400, 599],
        kind: "usergroupsCreateerrorschema1",
        decode: { kind: "json", schema: usergroupsCreateerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsDisableRequest = {
    token: string;
    contentType: ContentType;
    usergroup: string;
    includeCount?: boolean;
  };

  export class UsergroupsDisableError extends ResponseError<
    Declared<"usergroupsDisableerrorschema1", UsergroupsDisableerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsergroupsDisableError> = [
      {
        on: [400, 599],
        kind: "usergroupsDisableerrorschema1",
        decode: { kind: "json", schema: usergroupsDisableerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsEnableRequest = {
    token: string;
    contentType: ContentType;
    usergroup: string;
    includeCount?: boolean;
  };

  export class UsergroupsEnableError extends ResponseError<
    Declared<"usergroupsEnableerrorschema1", UsergroupsEnableerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsergroupsEnableError> = [
      {
        on: [400, 599],
        kind: "usergroupsEnableerrorschema1",
        decode: { kind: "json", schema: usergroupsEnableerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsListRequest = {
    token: string;
    includeUsers?: boolean;
    includeCount?: boolean;
    includeDisabled?: boolean;
    contentType: ContentType;
  };

  export class UsergroupsListError extends ResponseError<
    Declared<"usergroupsListerrorschema1", UsergroupsListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsergroupsListError> = [
      {
        on: [400, 599],
        kind: "usergroupsListerrorschema1",
        decode: { kind: "json", schema: usergroupsListerrorschema1Schema },
      },
    ];
  }

  export type UsergroupsUpdateRequest = {
    token: string;
    contentType: ContentType;
    usergroup: string;
    handle?: string;
    description?: string;
    channels?: string;
    includeCount?: boolean;
    name?: string;
  };

  export class UsergroupsUpdateError extends ResponseError<
    Declared<"usergroupsUpdateerrorschema1", UsergroupsUpdateerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsergroupsUpdateError> = [
      {
        on: [400, 599],
        kind: "usergroupsUpdateerrorschema1",
        decode: { kind: "json", schema: usergroupsUpdateerrorschema1Schema },
      },
    ];
  }

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
