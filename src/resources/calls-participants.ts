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

export class CallsParticipants {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * calls_participants_add
   *
   * @remarks
   * Registers new participants added to a Call.
   *
   * @returns Typical success response
   *
   * @throws {@link CallsParticipants.CallsParticipantsAddError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsParticipantsAdd(
    request: CallsParticipants.CallsParticipantsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, CallsParticipants.CallsParticipantsAddError> {
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
        errorFactory: CallsParticipants.CallsParticipantsAddError,
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
   * @throws {@link CallsParticipants.CallsParticipantsRemoveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsParticipantsRemove(
    request: CallsParticipants.CallsParticipantsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, CallsParticipants.CallsParticipantsRemoveError> {
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
        errorFactory: CallsParticipants.CallsParticipantsRemoveError,
      },
      options,
    );
  }
}

export namespace CallsParticipants {
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
}
