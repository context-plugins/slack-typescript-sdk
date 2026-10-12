import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * admin_emoji_add
   *
   * @remarks
   * Add an emoji.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminEmoji.AdminEmojiAddError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiAdd(
    request: AdminEmoji.AdminEmojiAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.emoji.add"),
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

  /**
   * admin_emoji_addAlias
   *
   * @remarks
   * Add an emoji alias.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminEmoji.AdminEmojiAddAliasError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiAddAlias(
    request: AdminEmoji.AdminEmojiAddAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddAliasError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.emoji.addAlias"),
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

  /**
   * admin_emoji_list
   *
   * @remarks
   * List emoji for an Enterprise Grid organization.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminEmoji.AdminEmojiListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiList(
    request: AdminEmoji.AdminEmojiListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.emoji.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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

  /**
   * admin_emoji_remove
   *
   * @remarks
   * Remove an emoji across an Enterprise Grid organization
   *
   * @returns Typical success response
   *
   * @throws {@link AdminEmoji.AdminEmojiRemoveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiRemove(
    request: AdminEmoji.AdminEmojiRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.emoji.remove"),
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

  /**
   * admin_emoji_rename
   *
   * @remarks
   * Rename an emoji.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminEmoji.AdminEmojiRenameError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminEmojiRename(
    request: AdminEmoji.AdminEmojiRenameRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiRenameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.emoji.rename"),
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
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /**
     * The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required,
     * although they may be included.
     */
    name: string;
    /**
     * The URL of a file to use as an image for the emoji. Square images under 128KB and with
     * transparent backgrounds work best.
     */
    url: string;
  };

  export class AdminEmojiAddError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiAddError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiAddAliasRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /**
     * The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required,
     * although they may be included.
     */
    name: string;
    /** The alias of the emoji. */
    aliasFor: string;
  };

  export class AdminEmojiAddAliasError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiAddAliasError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiListRequest = {
    /** Authentication token. Requires scope: `admin.teams:read` */
    token: string;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
     */
    cursor?: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    contentType: ContentType;
  };

  export class AdminEmojiListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiRemoveRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /**
     * The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required,
     * although they may be included.
     */
    name: string;
  };

  export class AdminEmojiRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiRemoveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminEmojiRenameRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /**
     * The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required,
     * although they may be included.
     */
    name: string;
    /** The new name of the emoji. */
    newName: string;
  };

  export class AdminEmojiRenameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminEmojiRenameError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
