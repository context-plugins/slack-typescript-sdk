import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class AdminEmoji {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminEmojiAdd(
    request: AdminEmoji.AdminEmojiAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.emoji.add"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
            { name: "url", value: request.url, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminEmoji.AdminEmojiAddError,
      },
      options,
    );
  }

  adminEmojiAddAlias(
    request: AdminEmoji.AdminEmojiAddAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddAliasError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.emoji.addAlias"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
            { name: "alias_for", value: request.aliasFor, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminEmoji.AdminEmojiAddAliasError,
      },
      options,
    );
  }

  adminEmojiList(
    request: AdminEmoji.AdminEmojiListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.emoji.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminEmoji.AdminEmojiListError,
      },
      options,
    );
  }

  adminEmojiRemove(
    request: AdminEmoji.AdminEmojiRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.emoji.remove"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminEmoji.AdminEmojiRemoveError,
      },
      options,
    );
  }

  adminEmojiRename(
    request: AdminEmoji.AdminEmojiRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiRenameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.emoji.rename"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
            { name: "new_name", value: request.newName, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminEmoji.AdminEmojiRenameError,
      },
      options,
    );
  }
}

export namespace AdminEmoji {
  export type AdminEmojiAddRequest = {
    contentType: ContentType;
    token: string;
    name: string;
    url: string;
  };

  export class AdminEmojiAddError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiAddError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiAddAliasRequest = {
    contentType: ContentType;
    token: string;
    name: string;
    aliasFor: string;
  };

  export class AdminEmojiAddAliasError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiAddAliasError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiListRequest = {
    token: string;
    cursor?: string;
    limit?: number;
    contentType: ContentType;
  };

  export class AdminEmojiListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiRemoveRequest = {
    contentType: ContentType;
    token: string;
    name: string;
  };

  export class AdminEmojiRemoveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiRemoveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiRenameRequest = {
    contentType: ContentType;
    token: string;
    name: string;
    newName: string;
  };

  export class AdminEmojiRenameError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminEmojiRenameError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
