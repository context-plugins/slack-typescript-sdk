import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  appsPermissionsResourcesListerrorschema1Schema,
  type AppsPermissionsResourcesListerrorschema1,
} from "../models/apps-permissions-resources-listerrorschema1.js";
import {
  appsPermissionsResourcesListsuccessschemaSchema,
  type AppsPermissionsResourcesListsuccessschema,
} from "../models/apps-permissions-resources-listsuccessschema.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import type { Servers } from "../servers.js";

export class AppsPermissionsResources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * apps_permissions_resources_list
   *
   * @remarks
   * Returns list of resource grants this app has on a team.
   *
   * @returns Typical successful paginated response
   *
   * @throws {@link AppsPermissionsResources.AppsPermissionsResourcesListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsPermissionsResourcesList(
    request: AppsPermissionsResources.AppsPermissionsResourcesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AppsPermissionsResourcesListsuccessschema,
    AppsPermissionsResources.AppsPermissionsResourcesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps.permissions.resources.list"),
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
        success: { kind: "json", schema: appsPermissionsResourcesListsuccessschemaSchema },
        errorFactory: AppsPermissionsResources.AppsPermissionsResourcesListError,
      },
      options,
    );
  }
}

export namespace AppsPermissionsResources {
  export type AppsPermissionsResourcesListRequest = {
    /** Authentication token. Requires scope: `none` */
    token: string;
    /**
     * Paginate through collections of data by setting the `cursor` parameter to a `next_cursor`
     * attribute returned by a previous request's `response_metadata`. Default value fetches the
     * first "page" of the collection.
     */
    cursor?: string;
    /** The maximum number of items to return. */
    limit?: number;
    contentType: ContentType;
  };

  export class AppsPermissionsResourcesListError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"appsPermissionsResourcesListerrorschema1", AppsPermissionsResourcesListerrorschema1>
    >;

    static readonly errors: ErrorDecoders<AppsPermissionsResourcesListError> = [
      {
        on: "default",
        kind: "appsPermissionsResourcesListerrorschema1",
        decode: { kind: "json", schema: appsPermissionsResourcesListerrorschema1Schema },
      },
    ];
  }
}
