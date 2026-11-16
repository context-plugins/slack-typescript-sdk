import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import {
  filesCommentsDeleteschemaSchema,
  type FilesCommentsDeleteschema,
} from "../models/files-comments-deleteschema.js";
import { filesDeleteschemaSchema, type FilesDeleteschema } from "../models/files-deleteschema.js";
import { filesInfoschemaInternalSchema, type FilesInfoschema } from "../models/files-infoschema.js";
import { filesListschemaInternalSchema, type FilesListschema } from "../models/files-listschema.js";
import {
  filesRevokePublicUrLschemaInternalSchema,
  type FilesRevokePublicUrLschema,
} from "../models/files-revoke-public-ur-lschema.js";
import {
  filesSharedPublicUrLschemaInternalSchema,
  type FilesSharedPublicUrLschema,
} from "../models/files-shared-public-ur-lschema.js";
import { filesUploadschemaInternalSchema, type FilesUploadschema } from "../models/files-uploadschema.js";
import type { Servers } from "../servers.js";

export class Files {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * files_comments_delete
   *
   * @remarks
   * Deletes an existing comment on a file.
   *
   * @returns Standard success response is very simple
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesCommentsDelete(
    request: Files.FilesCommentsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesCommentsDeleteschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files.comments.delete"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "file", value: request.file, schema: s.optional(s.string()) },
            { name: "id", value: request.id, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: filesCommentsDeleteschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * files_delete
   *
   * @remarks
   * Deletes a file.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesDelete(
    request: Files.FilesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesDeleteschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files.delete"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "file", value: request.file, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: filesDeleteschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * files_info
   *
   * @remarks
   * Gets information about a file.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesInfo(
    request: Files.FilesInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesInfoschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/files.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "file", value: request.file, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filesInfoschemaInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * files_list
   *
   * @remarks
   * List for a team, in a channel, or from a user with applied filters.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesList(
    request: Files.FilesListRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesListschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/files.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "ts_from", value: request.tsFrom, schema: s.optional(s.float64()) },
          { name: "ts_to", value: request.tsTo, schema: s.optional(s.float64()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.string()) },
          {
            name: "show_files_hidden_by_limit",
            value: request.showFilesHiddenByLimit,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filesListschemaInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * files_remote_add
   *
   * @remarks
   * Adds a file from a remote service
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteAdd(
    request: Files.FilesRemoteAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteInfo(
    request: Files.FilesRemoteInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteList(
    request: Files.FilesRemoteListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteRemove(
    request: Files.FilesRemoteRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteShare(
    request: Files.FilesRemoteShareRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRemoteUpdate(
    request: Files.FilesRemoteUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * files_revokePublicURL
   *
   * @remarks
   * Revokes public/external sharing access for a file
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesRevokePublicUrl(
    request: Files.FilesRevokePublicUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesRevokePublicUrLschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files.revokePublicURL"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "file", value: request.file, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: filesRevokePublicUrLschemaInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * files_sharedPublicURL
   *
   * @remarks
   * Enables a file for public/external sharing.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesSharedPublicUrl(
    request: Files.FilesSharedPublicUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesSharedPublicUrLschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files.sharedPublicURL"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "file", value: request.file, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: filesSharedPublicUrLschemaInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * files_upload
   *
   * @remarks
   * Uploads or creates a file.
   *
   * @returns Success response after uploading a file to a channel with an initial message
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesUpload(
    request: Files.FilesUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesUploadschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files.upload"),
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
            { name: "content", value: request.content, schema: s.optional(s.string()) },
            { name: "filetype", value: request.filetype, schema: s.optional(s.string()) },
            { name: "filename", value: request.filename, schema: s.optional(s.string()) },
            { name: "title", value: request.title, schema: s.optional(s.string()) },
            { name: "initial_comment", value: request.initialComment, schema: s.optional(s.string()) },
            { name: "channels", value: request.channels, schema: s.optional(s.string()) },
            { name: "thread_ts", value: request.threadTs, schema: s.optional(s.float64()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: filesUploadschemaInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Files {
  export type FilesCommentsDeleteRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `files:write:user` */
    token?: string;
    /** File to delete a comment from. */
    file?: string;
    /** The comment to delete. */
    id?: string;
  };

  export type FilesDeleteRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `files:write:user` */
    token?: string;
    /** ID of file to delete. */
    file?: string;
  };

  export type FilesInfoRequest = {
    /** Authentication token. Requires scope: `files:read` */
    token?: string;
    /** Specify a file by providing its ID. */
    file?: string;
    count?: string;
    page?: string;
    /**
     * The maximum number of items to return. Fewer than the requested number of items may be
     * returned, even if the end of the list hasn't been reached.
     */
    limit?: number;
    /**
     * Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal
     * to the `next_cursor` attribute returned by the previous request's `response_metadata`. This
     * parameter is optional, but pagination is mandatory: the default value simply fetches the
     * first "page" of the collection of comments.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export type FilesListRequest = {
    /** Authentication token. Requires scope: `files:read` */
    token?: string;
    /** Filter files created by a single user. */
    user?: string;
    /** Filter files appearing in a specific channel, indicated by its ID. */
    channel?: string;
    /** Filter files created after this timestamp (inclusive). */
    tsFrom?: number;
    /** Filter files created before this timestamp (inclusive). */
    tsTo?: number;
    /**
     * Filter files by type ([see below](#file_types)). You can pass multiple values in the types
     * argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the
     * list.
     */
    types?: string;
    count?: string;
    page?: string;
    /**
     * Show truncated file info for files hidden due to being too old, and the team who owns the
     * file being over the file limit.
     */
    showFilesHiddenByLimit?: boolean;
    contentType: ContentType;
  };

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

  export type FilesRemoteInfoRequest = {
    /** Authentication token. Requires scope: `remote_files:read` */
    token?: string;
    /** Specify a file by providing its ID. */
    file?: string;
    /** Creator defined GUID for the file. */
    externalId?: string;
    contentType: ContentType;
  };

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

  export type FilesRemoteRemoveRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `remote_files:write` */
    token?: string;
    /** Specify a file by providing its ID. */
    file?: string;
    /** Creator defined GUID for the file. */
    externalId?: string;
  };

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

  export type FilesRevokePublicUrlRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `files:write:user` */
    token?: string;
    /** File to revoke */
    file?: string;
  };

  export type FilesSharedPublicUrlRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `files:write:user` */
    token?: string;
    /** File to share */
    file?: string;
  };

  export type FilesUploadRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `files:write:user` */
    token?: string;
    /**
     * File contents via `multipart/form-data`. If omitting this parameter, you must submit
     * `content`.
     */
    file?: string;
    /** File contents via a POST variable. If omitting this parameter, you must provide a `file`. */
    content?: string;
    /** A [file type](/types/file#file_types) identifier. */
    filetype?: string;
    /** Filename of file. */
    filename?: string;
    /** Title of file. */
    title?: string;
    /** The message text introducing the file in specified `channels`. */
    initialComment?: string;
    /** Comma-separated list of channel names or IDs where the file will be shared. */
    channels?: string;
    /**
     * Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts`
     * value; use its parent instead.
     */
    threadTs?: number;
  };
}
