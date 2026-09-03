import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  usersConversations(
    request: Users.UsersConversationsRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersConversationssuccessschema, Users.UsersConversationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users.conversations"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "exclude_archived", value: request.excludeArchived, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
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

  usersDeletePhoto(
    request: Users.UsersDeletePhotoRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersDeletePhotoschema, Users.UsersDeletePhotoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users.deletePhoto"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
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

  usersGetPresence(
    request: Users.UsersGetPresenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApImethodusersGetPresence, Users.UsersGetPresenceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users.getPresence"),
        auth: this.#auth.slackAuth,
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

  usersIdentity(
    request: Users.UsersIdentityRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Users.UsersIdentityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users.identity"),
        auth: this.#auth.slackAuth,
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

  usersInfo(
    request: Users.UsersInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersInfosuccessschema, Users.UsersInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users.info"),
        auth: this.#auth.slackAuth,
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

  usersList(
    request: Users.UsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersListschema, Users.UsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
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

  usersLookupByEmail(
    request: Users.UsersLookupByEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersLookupByEmailsuccessschema, Users.UsersLookupByEmailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users.lookupByEmail"),
        auth: this.#auth.slackAuth,
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

  usersProfileGet(
    request: Users.UsersProfileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersProfileGetschema, Users.UsersProfileGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/users.profile.get"),
        auth: this.#auth.slackAuth,
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

  usersProfileSet(
    request: Users.UsersProfileSetRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersProfileSetschema, Users.UsersProfileSetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users.profile.set"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  usersSetActive(
    request: Users.UsersSetActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersSetActiveschema, Users.UsersSetActiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users.setActive"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  usersSetPhoto(
    request: Users.UsersSetPhotoRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersSetPhotoschema, Users.UsersSetPhotoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users.setPhoto"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
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

  usersSetPresence(
    request: Users.UsersSetPresenceRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersSetPresenceschema, Users.UsersSetPresenceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/users.setPresence"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
    token?: string;
    user?: string;
    types?: string;
    excludeArchived?: boolean;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class UsersConversationsError extends ResponseError<
    Declared<"usersConversationserrorschema1", UsersConversationserrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersConversationsError> = [
      {
        on: [400, 599],
        kind: "usersConversationserrorschema1",
        decode: { kind: "json", schema: usersConversationserrorschema1Schema },
      },
    ];
  }

  export type UsersDeletePhotoRequest = {
    contentType: ContentType;
    token: string;
  };

  export class UsersDeletePhotoError extends ResponseError<
    Declared<"usersDeletePhotoerrorschema1", UsersDeletePhotoerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersDeletePhotoError> = [
      {
        on: [400, 599],
        kind: "usersDeletePhotoerrorschema1",
        decode: { kind: "json", schema: usersDeletePhotoerrorschema1Schema },
      },
    ];
  }

  export type UsersGetPresenceRequest = {
    token: string;
    user?: string;
    contentType: ContentType;
  };

  export class UsersGetPresenceError extends ResponseError<
    Declared<"usersCountserrorschema1", UsersCountserrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersGetPresenceError> = [
      {
        on: [400, 599],
        kind: "usersCountserrorschema1",
        decode: { kind: "json", schema: usersCountserrorschema1Schema },
      },
    ];
  }

  export type UsersIdentityRequest = {
    token?: string;
    contentType: ContentType;
  };

  export class UsersIdentityError extends ResponseError<
    Declared<"usersIdentityerrorschema1", UsersIdentityerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersIdentityError> = [
      {
        on: [400, 599],
        kind: "usersIdentityerrorschema1",
        decode: { kind: "json", schema: usersIdentityerrorschema1Schema },
      },
    ];
  }

  export type UsersInfoRequest = {
    token: string;
    includeLocale?: boolean;
    user?: string;
    contentType: ContentType;
  };

  export class UsersInfoError extends ResponseError<
    Declared<"usersInfoerrorschema1", UsersInfoerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersInfoError> = [
      {
        on: [400, 599],
        kind: "usersInfoerrorschema1",
        decode: { kind: "json", schema: usersInfoerrorschema1Schema },
      },
    ];
  }

  export type UsersListRequest = {
    token?: string;
    limit?: number;
    cursor?: string;
    includeLocale?: boolean;
    contentType: ContentType;
  };

  export class UsersListError extends ResponseError<
    Declared<"usersListerrorschema1", UsersListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersListError> = [
      {
        on: [400, 599],
        kind: "usersListerrorschema1",
        decode: { kind: "json", schema: usersListerrorschema1Schema },
      },
    ];
  }

  export type UsersLookupByEmailRequest = {
    token: string;
    email: string;
    contentType: ContentType;
  };

  export class UsersLookupByEmailError extends ResponseError<
    Declared<"usersLookupByEmailerrorschema1", UsersLookupByEmailerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersLookupByEmailError> = [
      {
        on: [400, 599],
        kind: "usersLookupByEmailerrorschema1",
        decode: { kind: "json", schema: usersLookupByEmailerrorschema1Schema },
      },
    ];
  }

  export type UsersProfileGetRequest = {
    token: string;
    includeLabels?: boolean;
    user?: string;
    contentType: ContentType;
  };

  export class UsersProfileGetError extends ResponseError<
    Declared<"usersProfileGeterrorschema1", UsersProfileGeterrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersProfileGetError> = [
      {
        on: [400, 599],
        kind: "usersProfileGeterrorschema1",
        decode: { kind: "json", schema: usersProfileGeterrorschema1Schema },
      },
    ];
  }

  export type UsersProfileSetRequest = {
    token: string;
    contentType: ContentType;
    name?: string;
    profile?: string;
    user?: string;
    value?: string;
  };

  export class UsersProfileSetError extends ResponseError<
    Declared<"usersProfileSeterrorschema1", UsersProfileSeterrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersProfileSetError> = [
      {
        on: [400, 599],
        kind: "usersProfileSeterrorschema1",
        decode: { kind: "json", schema: usersProfileSeterrorschema1Schema },
      },
    ];
  }

  export type UsersSetActiveRequest = {
    token: string;
    contentType: ContentType;
  };

  export class UsersSetActiveError extends ResponseError<
    Declared<"usersSetActiveerrorschema1", UsersSetActiveerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersSetActiveError> = [
      {
        on: [400, 599],
        kind: "usersSetActiveerrorschema1",
        decode: { kind: "json", schema: usersSetActiveerrorschema1Schema },
      },
    ];
  }

  export type UsersSetPhotoRequest = {
    contentType: ContentType;
    token: string;
    cropW?: string;
    cropX?: string;
    cropY?: string;
    image?: string;
  };

  export class UsersSetPhotoError extends ResponseError<
    Declared<"usersSetPhotoerrorschema1", UsersSetPhotoerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersSetPhotoError> = [
      {
        on: [400, 599],
        kind: "usersSetPhotoerrorschema1",
        decode: { kind: "json", schema: usersSetPhotoerrorschema1Schema },
      },
    ];
  }

  export type UsersSetPresenceRequest = {
    token: string;
    contentType: ContentType;
    presence: string;
  };

  export class UsersSetPresenceError extends ResponseError<
    Declared<"usersSetPresenceerrorschema1", UsersSetPresenceerrorschema1>
  > {
    static readonly errors: ErrorDecoders<UsersSetPresenceError> = [
      {
        on: [400, 599],
        kind: "usersSetPresenceerrorschema1",
        decode: { kind: "json", schema: usersSetPresenceerrorschema1Schema },
      },
    ];
  }
}
