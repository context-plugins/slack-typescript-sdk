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
import type { Servers } from "../servers.js";

export class Calls {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * calls_add
   *
   * @remarks
   * Registers a new Call.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsAdd(
    request: Calls.CallsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/calls.add"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "external_unique_id", value: request.externalUniqueId, schema: s.string() },
            { name: "join_url", value: request.joinUrl, schema: s.string() },
            { name: "external_display_id", value: request.externalDisplayId, schema: s.optional(s.string()) },
            {
              name: "desktop_app_join_url",
              value: request.desktopAppJoinUrl,
              schema: s.optional(s.string()),
            },
            { name: "date_start", value: request.dateStart, schema: s.optional(s.int()) },
            { name: "title", value: request.title, schema: s.optional(s.string()) },
            { name: "created_by", value: request.createdBy, schema: s.optional(s.string()) },
            { name: "users", value: request.users, schema: s.optional(s.string()) },
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
   * calls_end
   *
   * @remarks
   * Ends a Call.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsEnd(
    request: Calls.CallsEndRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/calls.end"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "id", value: request.id, schema: s.string() },
            { name: "duration", value: request.duration, schema: s.optional(s.int()) },
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
   * calls_info
   *
   * @remarks
   * Returns information about a Call.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsInfo(
    request: Calls.CallsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/calls.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
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
   * calls_participants_add
   *
   * @remarks
   * Registers new participants added to a Call.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsParticipantsAdd(
    request: Calls.CallsParticipantsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/calls.participants.add"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "id", value: request.id, schema: s.string() },
            { name: "users", value: request.users, schema: s.string() },
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
   * calls_participants_remove
   *
   * @remarks
   * Registers participants removed from a Call.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsParticipantsRemove(
    request: Calls.CallsParticipantsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/calls.participants.remove"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "id", value: request.id, schema: s.string() },
            { name: "users", value: request.users, schema: s.string() },
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
   * calls_update
   *
   * @remarks
   * Updates information about a Call.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsUpdate(
    request: Calls.CallsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/calls.update"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "id", value: request.id, schema: s.string() },
            { name: "title", value: request.title, schema: s.optional(s.string()) },
            { name: "join_url", value: request.joinUrl, schema: s.optional(s.string()) },
            {
              name: "desktop_app_join_url",
              value: request.desktopAppJoinUrl,
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
}

export namespace Calls {
  export type CallsAddRequest = {
    /** Authentication token. Requires scope: `calls:write` */
    token: string;
    contentType: ContentType;
    /**
     * An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that
     * service.
     */
    externalUniqueId: string;
    /** The URL required for a client to join the Call. */
    joinUrl: string;
    /**
     * An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID
     * will be displayed in the Call object.
     */
    externalDisplayId?: string;
    /**
     * When supplied, available Slack clients will attempt to directly launch the 3rd-party Call
     * with this URL.
     */
    desktopAppJoinUrl?: string;
    /** Call start time in UTC UNIX timestamp format */
    dateStart?: number;
    /** The name of the Call. */
    title?: string;
    /**
     * The valid Slack user ID of the user who created this Call. When this method is called with a
     * user token, the `created_by` field is optional and defaults to the authed user of the token.
     * Otherwise, the field is required.
     */
    createdBy?: string;
    /**
     * The list of users to register as participants in the Call. [Read more on how to specify users
     * here](/apis/calls#users).
     */
    users?: string;
  };

  export type CallsEndRequest = {
    /** Authentication token. Requires scope: `calls:write` */
    token: string;
    contentType: ContentType;
    /**
     * `id` returned when registering the call using the [`calls.add`](/methods/calls.add) method.
     */
    id: string;
    /** Call duration in seconds */
    duration?: number;
  };

  export type CallsInfoRequest = {
    /** `id` of the Call returned by the [`calls.add`](/methods/calls.add) method. */
    id: string;
    /** Authentication token. Requires scope: `calls:read` */
    token: string;
    contentType: ContentType;
  };

  export type CallsParticipantsAddRequest = {
    /** Authentication token. Requires scope: `calls:write` */
    token: string;
    contentType: ContentType;
    /** `id` returned by the [`calls.add`](/methods/calls.add) method. */
    id: string;
    /**
     * The list of users to add as participants in the Call. [Read more on how to specify users
     * here](/apis/calls#users).
     */
    users: string;
  };

  export type CallsParticipantsRemoveRequest = {
    /** Authentication token. Requires scope: `calls:write` */
    token: string;
    contentType: ContentType;
    /** `id` returned by the [`calls.add`](/methods/calls.add) method. */
    id: string;
    /**
     * The list of users to remove as participants in the Call. [Read more on how to specify users
     * here](/apis/calls#users).
     */
    users: string;
  };

  export type CallsUpdateRequest = {
    /** Authentication token. Requires scope: `calls:write` */
    token: string;
    contentType: ContentType;
    /** `id` returned by the [`calls.add`](/methods/calls.add) method. */
    id: string;
    /** The name of the Call. */
    title?: string;
    /** The URL required for a client to join the Call. */
    joinUrl?: string;
    /**
     * When supplied, available Slack clients will attempt to directly launch the 3rd-party Call
     * with this URL.
     */
    desktopAppJoinUrl?: string;
  };
}
