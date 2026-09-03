import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  filesCommentsDeleteerrorschema1Schema,
  type FilesCommentsDeleteerrorschema1,
} from "../models/files-comments-deleteerrorschema1.js";
import {
  filesCommentsDeleteschemaSchema,
  type FilesCommentsDeleteschema,
} from "../models/files-comments-deleteschema.js";
import type { Servers } from "../servers.js";

export class FilesComments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  filesCommentsDelete(
    request: FilesComments.FilesCommentsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesCommentsDeleteschema, FilesComments.FilesCommentsDeleteError> {
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
        errorFactory: FilesComments.FilesCommentsDeleteError,
      },
      options,
    );
  }
}

export namespace FilesComments {
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
}
