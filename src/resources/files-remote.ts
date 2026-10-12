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

export class FilesRemote {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * files_remote_add
   *
   * @remarks
   * Adds a file from a remote service
   *
   * @returns Typical success response
   *
   * @throws {@link FilesRemote.FilesRemoteAddError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteAdd(
    request: FilesRemote.FilesRemoteAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files.remote.add"),
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
            { name: "token", value: request.token, schema: s.optional(s.string()) },
            { name: "external_id", value: request.externalId, schema: s.optional(s.string()) },
            { name: "title", value: request.title, schema: s.optional(s.string()) },
            { name: "filetype", value: request.filetype, schema: s.optional(s.string()) },
            { name: "external_url", value: request.externalUrl, schema: s.optional(s.string()) },
            { name: "preview_image", value: request.previewImage, schema: s.optional(s.string()) },
            {
              name: "indexable_file_contents",
              value: request.indexableFileContents,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: FilesRemote.FilesRemoteAddError,
      },
      options,
    );
  }

  /**
   * files_remote_info
   *
   * @remarks
   * Retrieve information about a remote file added to Slack
   *
   * @returns Typical success response
   *
   * @throws {@link FilesRemote.FilesRemoteInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteInfo(
    request: FilesRemote.FilesRemoteInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/files.remote.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "file", value: request.file, schema: s.optional(s.string()) },
          { name: "external_id", value: request.externalId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: FilesRemote.FilesRemoteInfoError,
      },
      options,
    );
  }

  /**
   * files_remote_list
   *
   * @remarks
   * Retrieve information about a remote file added to Slack
   *
   * @returns Typical success response
   *
   * @throws {@link FilesRemote.FilesRemoteListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteList(
    request: FilesRemote.FilesRemoteListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/files.remote.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "ts_from", value: request.tsFrom, schema: s.optional(s.float64()) },
          { name: "ts_to", value: request.tsTo, schema: s.optional(s.float64()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: FilesRemote.FilesRemoteListError,
      },
      options,
    );
  }

  /**
   * files_remote_remove
   *
   * @remarks
   * Remove a remote file.
   *
   * @returns Typical success response
   *
   * @throws {@link FilesRemote.FilesRemoteRemoveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteRemove(
    request: FilesRemote.FilesRemoteRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files.remote.remove"),
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
            { name: "token", value: request.token, schema: s.optional(s.string()) },
            { name: "file", value: request.file, schema: s.optional(s.string()) },
            { name: "external_id", value: request.externalId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: FilesRemote.FilesRemoteRemoveError,
      },
      options,
    );
  }

  /**
   * files_remote_share
   *
   * @remarks
   * Share a remote file into a channel.
   *
   * @returns Typical success response
   *
   * @throws {@link FilesRemote.FilesRemoteShareError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteShare(
    request: FilesRemote.FilesRemoteShareRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteShareError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/files.remote.share"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "file", value: request.file, schema: s.optional(s.string()) },
          { name: "external_id", value: request.externalId, schema: s.optional(s.string()) },
          { name: "channels", value: request.channels, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: FilesRemote.FilesRemoteShareError,
      },
      options,
    );
  }

  /**
   * files_remote_update
   *
   * @remarks
   * Updates an existing remote file.
   *
   * @returns Typical success response
   *
   * @throws {@link FilesRemote.FilesRemoteUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteUpdate(
    request: FilesRemote.FilesRemoteUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files.remote.update"),
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
            { name: "token", value: request.token, schema: s.optional(s.string()) },
            { name: "file", value: request.file, schema: s.optional(s.string()) },
            { name: "external_id", value: request.externalId, schema: s.optional(s.string()) },
            { name: "title", value: request.title, schema: s.optional(s.string()) },
            { name: "filetype", value: request.filetype, schema: s.optional(s.string()) },
            { name: "external_url", value: request.externalUrl, schema: s.optional(s.string()) },
            { name: "preview_image", value: request.previewImage, schema: s.optional(s.string()) },
            {
              name: "indexable_file_contents",
              value: request.indexableFileContents,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: FilesRemote.FilesRemoteUpdateError,
      },
      options,
    );
  }
}

export namespace FilesRemote {
  export type FilesRemoteAddRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `remote_files:write` */
    token?: string;
    /** Creator defined GUID for the file. */
    externalId?: string;
    /** Title of the file being shared. */
    title?: string;
    /** type of file */
    filetype?: string;
    /** URL of the remote file. */
    externalUrl?: string;
    /** Preview of the document via `multipart/form-data`. */
    previewImage?: string;
    /**
     * A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve
     * discovery of the remote file.
     */
    indexableFileContents?: string;
  };

  export class FilesRemoteAddError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<FilesRemoteAddError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteInfoRequest = {
    /** Authentication token. Requires scope: `remote_files:read` */
    token?: string;
    /** Specify a file by providing its ID. */
    file?: string;
    /** Creator defined GUID for the file. */
    externalId?: string;
    contentType: ContentType;
  };

  export class FilesRemoteInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<FilesRemoteInfoError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteListRequest = {
    /** Authentication token. Requires scope: `remote_files:read` */
    token?: string;
    /** Filter files appearing in a specific channel, indicated by its ID. */
    channel?: string;
    /** Filter files created after this timestamp (inclusive). */
    tsFrom?: number;
    /** Filter files created before this timestamp (inclusive). */
    tsTo?: number;
    /** The maximum number of items to return. */
    limit?: number;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class FilesRemoteListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<FilesRemoteListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteRemoveRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `remote_files:write` */
    token?: string;
    /** Specify a file by providing its ID. */
    file?: string;
    /** Creator defined GUID for the file. */
    externalId?: string;
  };

  export class FilesRemoteRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<FilesRemoteRemoveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteShareRequest = {
    /** Authentication token. Requires scope: `remote_files:share` */
    token?: string;
    /**
     * Specify a file registered with Slack by providing its ID. Either this field or `external_id`
     * or both are required.
     */
    file?: string;
    /**
     * The globally unique identifier (GUID) for the file, as set by the app registering the file
     * with Slack. Either this field or `file` or both are required.
     */
    externalId?: string;
    /** Comma-separated list of channel IDs where the file will be shared. */
    channels?: string;
    contentType: ContentType;
  };

  export class FilesRemoteShareError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<FilesRemoteShareError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteUpdateRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `remote_files:write` */
    token?: string;
    /** Specify a file by providing its ID. */
    file?: string;
    /** Creator defined GUID for the file. */
    externalId?: string;
    /** Title of the file being shared. */
    title?: string;
    /** type of file */
    filetype?: string;
    /** URL of the remote file. */
    externalUrl?: string;
    /** Preview of the document via `multipart/form-data`. */
    previewImage?: string;
    /** File containing contents that can be used to improve searchability for the remote file. */
    indexableFileContents?: string;
  };

  export class FilesRemoteUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<FilesRemoteUpdateError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
