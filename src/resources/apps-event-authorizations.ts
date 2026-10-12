import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class AppsEventAuthorizations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * apps_event_authorizations_list
   *
   * @remarks
   * Get a list of authorizations for the given event context. Each authorization represents an app
   * installation that the event is visible to.
   *
   * @returns Typical success response
   *
   * @throws {@link AppsEventAuthorizations.AppsEventAuthorizationsListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsEventAuthorizationsList(
    request: AppsEventAuthorizations.AppsEventAuthorizationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AppsEventAuthorizations.AppsEventAuthorizationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.event.authorizations.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "event_context", value: request.eventContext, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AppsEventAuthorizations.AppsEventAuthorizationsListError,
      },
      options,
    );
  }
}

export namespace AppsEventAuthorizations {
  export type AppsEventAuthorizationsListRequest = {
    eventContext: string;
    cursor?: string;
    limit?: number;
    /** Authentication token. Requires scope: `authorizations:read` */
    token: string;
    contentType: ContentType;
  };

  export class AppsEventAuthorizationsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AppsEventAuthorizationsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
