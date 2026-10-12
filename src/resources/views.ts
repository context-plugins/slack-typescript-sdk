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

export class Views {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * views_open
   *
   * @remarks
   * Open a view for a user.
   *
   * @returns Typical success response includes the opened view payload.
   *
   * @throws {@link Views.ViewsOpenError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  viewsOpen(
    request: Views.ViewsOpenRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Views.ViewsOpenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/views.open"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "trigger_id", value: request.triggerId, schema: s.string() },
          { name: "view", value: request.view, schema: s.string() },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Views.ViewsOpenError,
      },
      options,
    );
  }

  /**
   * views_publish
   *
   * @remarks
   * Publish a static view for a User.
   *
   * @returns Typical success response includes the published view payload.
   *
   * @throws {@link Views.ViewsPublishError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  viewsPublish(
    request: Views.ViewsPublishRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Views.ViewsPublishError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/views.publish"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "user_id", value: request.userId, schema: s.string() },
          { name: "view", value: request.view, schema: s.string() },
          { name: "hash", value: request.hash, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Views.ViewsPublishError,
      },
      options,
    );
  }

  /**
   * views_push
   *
   * @remarks
   * Push a view onto the stack of a root view.
   *
   * @returns Typical success response includes the pushed view payload.
   *
   * @throws {@link Views.ViewsPushError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  viewsPush(
    request: Views.ViewsPushRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Views.ViewsPushError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/views.push"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "trigger_id", value: request.triggerId, schema: s.string() },
          { name: "view", value: request.view, schema: s.string() },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Views.ViewsPushError,
      },
      options,
    );
  }

  /**
   * views_update
   *
   * @remarks
   * Update an existing view.
   *
   * @returns Typical success response includes the updated view payload.
   *
   * @throws {@link Views.ViewsUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  viewsUpdate(
    request: Views.ViewsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Views.ViewsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/views.update"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "view_id", value: request.viewId, schema: s.optional(s.string()) },
          { name: "external_id", value: request.externalId, schema: s.optional(s.string()) },
          { name: "view", value: request.view, schema: s.optional(s.string()) },
          { name: "hash", value: request.hash, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Views.ViewsUpdateError,
      },
      options,
    );
  }
}

export namespace Views {
  export type ViewsOpenRequest = {
    /** Exchange a trigger to post to the user. */
    triggerId: string;
    /** A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
    view: string;
    /** Authentication token. Requires scope: `none` */
    token: string;
    contentType: ContentType;
  };

  export class ViewsOpenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<ViewsOpenError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type ViewsPublishRequest = {
    /** `id` of the user you want publish a view to. */
    userId: string;
    /** A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
    view: string;
    /** A string that represents view state to protect against possible race conditions. */
    hash?: string;
    /** Authentication token. Requires scope: `none` */
    token: string;
    contentType: ContentType;
  };

  export class ViewsPublishError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<ViewsPublishError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type ViewsPushRequest = {
    /** Exchange a trigger to post to the user. */
    triggerId: string;
    /** A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
    view: string;
    /** Authentication token. Requires scope: `none` */
    token: string;
    contentType: ContentType;
  };

  export class ViewsPushError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<ViewsPushError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type ViewsUpdateRequest = {
    /**
     * A unique identifier of the view to be updated. Either `view_id` or `external_id` is required.
     */
    viewId?: string;
    /**
     * A unique identifier of the view set by the developer. Must be unique for all views on a team.
     * Max length of 255 characters. Either `view_id` or `external_id` is required.
     */
    externalId?: string;
    /** A [view object](/reference/surfaces/views). This must be a JSON-encoded string. */
    view?: string;
    /** A string that represents view state to protect against possible race conditions. */
    hash?: string;
    /** Authentication token. Requires scope: `none` */
    token: string;
    contentType: ContentType;
  };

  export class ViewsUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<ViewsUpdateError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
