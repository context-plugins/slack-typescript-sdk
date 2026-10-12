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
   * @throws {@link Calls.CallsAddError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsAdd(
    request: Calls.CallsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsAddError> {
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
        errorFactory: Calls.CallsAddError,
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
   * @throws {@link Calls.CallsEndError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsEnd(
    request: Calls.CallsEndRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsEndError> {
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
        errorFactory: Calls.CallsEndError,
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
   * @throws {@link Calls.CallsInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsInfo(
    request: Calls.CallsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsInfoError> {
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
        errorFactory: Calls.CallsInfoError,
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
   * @throws {@link Calls.CallsParticipantsAddError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsParticipantsAdd(
    request: Calls.CallsParticipantsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsParticipantsAddError> {
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
        errorFactory: Calls.CallsParticipantsAddError,
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
   * @throws {@link Calls.CallsParticipantsRemoveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsParticipantsRemove(
    request: Calls.CallsParticipantsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsParticipantsRemoveError> {
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
        errorFactory: Calls.CallsParticipantsRemoveError,
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
   * @throws {@link Calls.CallsUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsUpdate(
    request: Calls.CallsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsUpdateError> {
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
        errorFactory: Calls.CallsUpdateError,
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

  export class CallsAddError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<CallsAddError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

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

  export class CallsEndError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<CallsEndError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type CallsInfoRequest = {
    /** `id` of the Call returned by the [`calls.add`](/methods/calls.add) method. */
    id: string;
    /** Authentication token. Requires scope: `calls:read` */
    token: string;
    contentType: ContentType;
  };

  export class CallsInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<CallsInfoError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

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

  export class CallsParticipantsAddError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<CallsParticipantsAddError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

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

  export class CallsParticipantsRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<CallsParticipantsRemoveError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

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

  export class CallsUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<CallsUpdateError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
