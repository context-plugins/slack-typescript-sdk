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

export class FilesRemote {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  filesRemoteAdd(
    request: FilesRemote.FilesRemoteAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteAddError> {
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
        errorFactory: FilesRemote.FilesRemoteAddError,
      },
      options,
    );
  }

  filesRemoteInfo(
    request: FilesRemote.FilesRemoteInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteInfoError> {
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
        errorFactory: FilesRemote.FilesRemoteInfoError,
      },
      options,
    );
  }

  filesRemoteList(
    request: FilesRemote.FilesRemoteListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteListError> {
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
        errorFactory: FilesRemote.FilesRemoteListError,
      },
      options,
    );
  }

  filesRemoteRemove(
    request: FilesRemote.FilesRemoteRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteRemoveError> {
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
        errorFactory: FilesRemote.FilesRemoteRemoveError,
      },
      options,
    );
  }

  filesRemoteShare(
    request: FilesRemote.FilesRemoteShareRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteShareError> {
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
        errorFactory: FilesRemote.FilesRemoteShareError,
      },
      options,
    );
  }

  filesRemoteUpdate(
    request: FilesRemote.FilesRemoteUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteUpdateError> {
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
        errorFactory: FilesRemote.FilesRemoteUpdateError,
      },
      options,
    );
  }
}

export namespace FilesRemote {
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
}
