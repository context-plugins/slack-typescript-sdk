import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  usersProfileGet(
    request: UsersProfile.UsersProfileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersProfileGetschema, UsersProfile.UsersProfileGetError> {
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
        errorFactory: UsersProfile.UsersProfileGetError,
      },
      options,
    );
  }

  usersProfileSet(
    request: UsersProfile.UsersProfileSetRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersProfileSetschema, UsersProfile.UsersProfileSetError> {
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
        errorFactory: UsersProfile.UsersProfileSetError,
      },
      options,
    );
  }
}

export namespace UsersProfile {
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
}
