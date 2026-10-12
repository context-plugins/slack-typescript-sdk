import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * files_comments_delete
   *
   * @remarks
   * Deletes an existing comment on a file.
   *
   * @returns Standard success response is very simple
   *
   * @throws {@link FilesComments.FilesCommentsDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesCommentsDelete(
    request: FilesComments.FilesCommentsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<FilesCommentsDeleteschema, FilesComments.FilesCommentsDeleteError> {
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
        errorFactory: FilesComments.FilesCommentsDeleteError,
      },
      options,
    );
  }
}

export namespace FilesComments {
  export type FilesCommentsDeleteRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `files:write:user` */
    token?: string;
    /** File to delete a comment from. */
    file?: string;
    /** The comment to delete. */
    id?: string;
  };

  export class FilesCommentsDeleteError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"filesCommentsDeleteerrorschema1", FilesCommentsDeleteerrorschema1>
    >;

    static readonly errors: ErrorDecoders<FilesCommentsDeleteError> = [
      {
        on: "default",
        kind: "filesCommentsDeleteerrorschema1",
        decode: { kind: "json", schema: filesCommentsDeleteerrorschema1Schema },
      },
    ];
  }
}
