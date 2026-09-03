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
import {
  filesCommentsDeleteerrorschema1Schema,
  type FilesCommentsDeleteerrorschema1,
} from "../models/files-comments-deleteerrorschema1.js";
import {
  filesCommentsDeleteschemaSchema,
  type FilesCommentsDeleteschema,
} from "../models/files-comments-deleteschema.js";
import {
  filesDeleteerrorschema1Schema,
  type FilesDeleteerrorschema1,
} from "../models/files-deleteerrorschema1.js";
import { filesDeleteschemaSchema, type FilesDeleteschema } from "../models/files-deleteschema.js";
import { filesInfoerrorschema1Schema, type FilesInfoerrorschema1 } from "../models/files-infoerrorschema1.js";
import { filesInfoschemaSchema, type FilesInfoschema } from "../models/files-infoschema.js";
import { filesListerrorschema1Schema, type FilesListerrorschema1 } from "../models/files-listerrorschema1.js";
import { filesListschemaSchema, type FilesListschema } from "../models/files-listschema.js";
import {
  filesRevokePublicUrLerrorschema1Schema,
  type FilesRevokePublicUrLerrorschema1,
} from "../models/files-revoke-public-ur-lerrorschema1.js";
import {
  filesRevokePublicUrLschemaSchema,
  type FilesRevokePublicUrLschema,
} from "../models/files-revoke-public-ur-lschema.js";
import {
  filesSharedPublicUrLerrorschema1Schema,
  type FilesSharedPublicUrLerrorschema1,
} from "../models/files-shared-public-ur-lerrorschema1.js";
import {
  filesSharedPublicUrLschemaSchema,
  type FilesSharedPublicUrLschema,
} from "../models/files-shared-public-ur-lschema.js";
import {
  filesUploaderrorschema1Schema,
  type FilesUploaderrorschema1,
} from "../models/files-uploaderrorschema1.js";
import { filesUploadschemaSchema, type FilesUploadschema } from "../models/files-uploadschema.js";
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

  filesCommentsDelete(
    request: Files.FilesCommentsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesCommentsDeleteschema, Files.FilesCommentsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/files.comments.delete"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
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
        errorFactory: Files.FilesCommentsDeleteError,
      },
      options,
    );
  }

  filesDelete(
    request: Files.FilesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesDeleteschema, Files.FilesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/files.delete"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "file", value: request.file, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: filesDeleteschemaSchema },
        errorFactory: Files.FilesDeleteError,
      },
      options,
    );
  }

  filesInfo(
    request: Files.FilesInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesInfoschema, Files.FilesInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/files.info"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "file", value: request.file, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filesInfoschemaSchema },
        errorFactory: Files.FilesInfoError,
      },
      options,
    );
  }

  filesList(
    request: Files.FilesListRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesListschema, Files.FilesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/files.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "ts_from", value: request.tsFrom, schema: s.optional(s.number()) },
          { name: "ts_to", value: request.tsTo, schema: s.optional(s.number()) },
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
        success: { kind: "json", schema: filesListschemaSchema },
        errorFactory: Files.FilesListError,
      },
      options,
    );
  }

  filesRemoteAdd(
    request: Files.FilesRemoteAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/files.remote.add"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
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
        errorFactory: Files.FilesRemoteAddError,
      },
      options,
    );
  }

  filesRemoteInfo(
    request: Files.FilesRemoteInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/files.remote.info"),
        auth: this.#auth.slackAuth,
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
        errorFactory: Files.FilesRemoteInfoError,
      },
      options,
    );
  }

  filesRemoteList(
    request: Files.FilesRemoteListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/files.remote.list"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "channel", value: request.channel, schema: s.optional(s.string()) },
          { name: "ts_from", value: request.tsFrom, schema: s.optional(s.number()) },
          { name: "ts_to", value: request.tsTo, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Files.FilesRemoteListError,
      },
      options,
    );
  }

  filesRemoteRemove(
    request: Files.FilesRemoteRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/files.remote.remove"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
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
        errorFactory: Files.FilesRemoteRemoveError,
      },
      options,
    );
  }

  filesRemoteShare(
    request: Files.FilesRemoteShareRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteShareError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/files.remote.share"),
        auth: this.#auth.slackAuth,
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
        errorFactory: Files.FilesRemoteShareError,
      },
      options,
    );
  }

  filesRemoteUpdate(
    request: Files.FilesRemoteUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/files.remote.update"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
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
        errorFactory: Files.FilesRemoteUpdateError,
      },
      options,
    );
  }

  filesRevokePublicUrl(
    request: Files.FilesRevokePublicUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesRevokePublicUrLschema, Files.FilesRevokePublicUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/files.revokePublicURL"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "file", value: request.file, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: filesRevokePublicUrLschemaSchema },
        errorFactory: Files.FilesRevokePublicUrlError,
      },
      options,
    );
  }

  filesSharedPublicUrl(
    request: Files.FilesSharedPublicUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesSharedPublicUrLschema, Files.FilesSharedPublicUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/files.sharedPublicURL"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "file", value: request.file, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: filesSharedPublicUrLschemaSchema },
        errorFactory: Files.FilesSharedPublicUrlError,
      },
      options,
    );
  }

  filesUpload(
    request: Files.FilesUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesUploadschema, Files.FilesUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/files.upload"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
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
            { name: "thread_ts", value: request.threadTs, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: filesUploadschemaSchema },
        errorFactory: Files.FilesUploadError,
      },
      options,
    );
  }
}

export namespace Files {
  export type FilesCommentsDeleteRequest = {
    contentType: ContentType;
    token?: string;
    file?: string;
    id?: string;
  };

  export class FilesCommentsDeleteError extends ResponseError<
    Declared<"filesCommentsDeleteerrorschema1", FilesCommentsDeleteerrorschema1>
  > {
    static readonly errors: ErrorDecoders<FilesCommentsDeleteError> = [
      {
        on: [400, 599],
        kind: "filesCommentsDeleteerrorschema1",
        decode: { kind: "json", schema: filesCommentsDeleteerrorschema1Schema },
      },
    ];
  }

  export type FilesDeleteRequest = {
    contentType: ContentType;
    token?: string;
    file?: string;
  };

  export class FilesDeleteError extends ResponseError<
    Declared<"filesDeleteerrorschema1", FilesDeleteerrorschema1>
  > {
    static readonly errors: ErrorDecoders<FilesDeleteError> = [
      {
        on: [400, 599],
        kind: "filesDeleteerrorschema1",
        decode: { kind: "json", schema: filesDeleteerrorschema1Schema },
      },
    ];
  }

  export type FilesInfoRequest = {
    token?: string;
    file?: string;
    count?: string;
    page?: string;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class FilesInfoError extends ResponseError<
    Declared<"filesInfoerrorschema1", FilesInfoerrorschema1>
  > {
    static readonly errors: ErrorDecoders<FilesInfoError> = [
      {
        on: [400, 599],
        kind: "filesInfoerrorschema1",
        decode: { kind: "json", schema: filesInfoerrorschema1Schema },
      },
    ];
  }

  export type FilesListRequest = {
    token?: string;
    user?: string;
    channel?: string;
    tsFrom?: number;
    tsTo?: number;
    types?: string;
    count?: string;
    page?: string;
    showFilesHiddenByLimit?: boolean;
    contentType: ContentType;
  };

  export class FilesListError extends ResponseError<
    Declared<"filesListerrorschema1", FilesListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<FilesListError> = [
      {
        on: [400, 599],
        kind: "filesListerrorschema1",
        decode: { kind: "json", schema: filesListerrorschema1Schema },
      },
    ];
  }

  export type FilesRemoteAddRequest = {
    contentType: ContentType;
    token?: string;
    externalId?: string;
    title?: string;
    filetype?: string;
    externalUrl?: string;
    previewImage?: string;
    indexableFileContents?: string;
  };

  export class FilesRemoteAddError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<FilesRemoteAddError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteInfoRequest = {
    token?: string;
    file?: string;
    externalId?: string;
    contentType: ContentType;
  };

  export class FilesRemoteInfoError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<FilesRemoteInfoError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteListRequest = {
    token?: string;
    channel?: string;
    tsFrom?: number;
    tsTo?: number;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class FilesRemoteListError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<FilesRemoteListError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteRemoveRequest = {
    contentType: ContentType;
    token?: string;
    file?: string;
    externalId?: string;
  };

  export class FilesRemoteRemoveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<FilesRemoteRemoveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteShareRequest = {
    token?: string;
    file?: string;
    externalId?: string;
    channels?: string;
    contentType: ContentType;
  };

  export class FilesRemoteShareError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<FilesRemoteShareError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRemoteUpdateRequest = {
    contentType: ContentType;
    token?: string;
    file?: string;
    externalId?: string;
    title?: string;
    filetype?: string;
    externalUrl?: string;
    previewImage?: string;
    indexableFileContents?: string;
  };

  export class FilesRemoteUpdateError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<FilesRemoteUpdateError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type FilesRevokePublicUrlRequest = {
    contentType: ContentType;
    token?: string;
    file?: string;
  };

  export class FilesRevokePublicUrlError extends ResponseError<
    Declared<"filesRevokePublicUrLerrorschema1", FilesRevokePublicUrLerrorschema1>
  > {
    static readonly errors: ErrorDecoders<FilesRevokePublicUrlError> = [
      {
        on: [400, 599],
        kind: "filesRevokePublicUrLerrorschema1",
        decode: { kind: "json", schema: filesRevokePublicUrLerrorschema1Schema },
      },
    ];
  }

  export type FilesSharedPublicUrlRequest = {
    contentType: ContentType;
    token?: string;
    file?: string;
  };

  export class FilesSharedPublicUrlError extends ResponseError<
    Declared<"filesSharedPublicUrLerrorschema1", FilesSharedPublicUrLerrorschema1>
  > {
    static readonly errors: ErrorDecoders<FilesSharedPublicUrlError> = [
      {
        on: [400, 599],
        kind: "filesSharedPublicUrLerrorschema1",
        decode: { kind: "json", schema: filesSharedPublicUrLerrorschema1Schema },
      },
    ];
  }

  export type FilesUploadRequest = {
    contentType: ContentType;
    token?: string;
    file?: string;
    content?: string;
    filetype?: string;
    filename?: string;
    title?: string;
    initialComment?: string;
    channels?: string;
    threadTs?: number;
  };

  export class FilesUploadError extends ResponseError<
    Declared<"filesUploaderrorschema1", FilesUploaderrorschema1>
  > {
    static readonly errors: ErrorDecoders<FilesUploadError> = [
      {
        on: [400, 599],
        kind: "filesUploaderrorschema1",
        decode: { kind: "json", schema: filesUploaderrorschema1Schema },
      },
    ];
  }
}
