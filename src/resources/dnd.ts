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
import {
  dndEndDnderrorschema1Schema,
  type DndEndDnderrorschema1,
} from "../models/dnd-end-dnderrorschema1.js";
import { dndEndDndschemaSchema, type DndEndDndschema } from "../models/dnd-end-dndschema.js";
import {
  dndEndSnoozeerrorschema1Schema,
  type DndEndSnoozeerrorschema1,
} from "../models/dnd-end-snoozeerrorschema1.js";
import { dndEndSnoozeschemaSchema, type DndEndSnoozeschema } from "../models/dnd-end-snoozeschema.js";
import { dndInfoerrorschema1Schema, type DndInfoerrorschema1 } from "../models/dnd-infoerrorschema1.js";
import { dndInfoschemaSchema, type DndInfoschema } from "../models/dnd-infoschema.js";
import {
  dndSetSnoozeerrorschema1Schema,
  type DndSetSnoozeerrorschema1,
} from "../models/dnd-set-snoozeerrorschema1.js";
import { dndSetSnoozeschemaSchema, type DndSetSnoozeschema } from "../models/dnd-set-snoozeschema.js";
import type { Servers } from "../servers.js";

export class Dnd {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * dnd_endDnd
   *
   * @remarks
   * Ends the current user's Do Not Disturb session immediately.
   *
   * @returns Typical success response
   *
   * @throws {@link Dnd.DndEndDndError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndEndDnd(
    request: Dnd.DndEndDndRequest,
    options?: RequestOptions,
  ): ApiPromise<DndEndDndschema, Dnd.DndEndDndError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dnd.endDnd"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dndEndDndschemaSchema },
        errorFactory: Dnd.DndEndDndError,
      },
      options,
    );
  }

  /**
   * dnd_endSnooze
   *
   * @remarks
   * Ends the current user's snooze mode immediately.
   *
   * @returns Typical success response
   *
   * @throws {@link Dnd.DndEndSnoozeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndEndSnooze(
    request: Dnd.DndEndSnoozeRequest,
    options?: RequestOptions,
  ): ApiPromise<DndEndSnoozeschema, Dnd.DndEndSnoozeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dnd.endSnooze"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dndEndSnoozeschemaSchema },
        errorFactory: Dnd.DndEndSnoozeError,
      },
      options,
    );
  }

  /**
   * dnd_info
   *
   * @remarks
   * Retrieves a user's current Do Not Disturb status.
   *
   * @returns Typical success response
   *
   * @throws {@link Dnd.DndInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndInfo(
    request: Dnd.DndInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<DndInfoschema, Dnd.DndInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/dnd.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dndInfoschemaSchema },
        errorFactory: Dnd.DndInfoError,
      },
      options,
    );
  }

  /**
   * dnd_setSnooze
   *
   * @remarks
   * Turns on Do Not Disturb mode for the current user, or changes its duration.
   *
   * @returns Typical success response
   *
   * @throws {@link Dnd.DndSetSnoozeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndSetSnooze(
    request: Dnd.DndSetSnoozeRequest,
    options?: RequestOptions,
  ): ApiPromise<DndSetSnoozeschema, Dnd.DndSetSnoozeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dnd.setSnooze"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "num_minutes", value: request.numMinutes, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: dndSetSnoozeschemaSchema },
        errorFactory: Dnd.DndSetSnoozeError,
      },
      options,
    );
  }

  /**
   * dnd_teamInfo
   *
   * @remarks
   * Retrieves the Do Not Disturb status for up to 50 users on a team.
   *
   * @returns Typical success response
   *
   * @throws {@link Dnd.DndTeamInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndTeamInfo(
    request: Dnd.DndTeamInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Dnd.DndTeamInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/dnd.teamInfo"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "users", value: request.users, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Dnd.DndTeamInfoError,
      },
      options,
    );
  }
}

export namespace Dnd {
  export type DndEndDndRequest = {
    /** Authentication token. Requires scope: `dnd:write` */
    token: string;
    contentType: ContentType;
  };

  export class DndEndDndError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"dndEndDnderrorschema1", DndEndDnderrorschema1>>;

    static readonly errors: ErrorDecoders<DndEndDndError> = [
      {
        on: "default",
        kind: "dndEndDnderrorschema1",
        decode: { kind: "json", schema: dndEndDnderrorschema1Schema },
      },
    ];
  }

  export type DndEndSnoozeRequest = {
    /** Authentication token. Requires scope: `dnd:write` */
    token: string;
    contentType: ContentType;
  };

  export class DndEndSnoozeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"dndEndSnoozeerrorschema1", DndEndSnoozeerrorschema1>>;

    static readonly errors: ErrorDecoders<DndEndSnoozeError> = [
      {
        on: "default",
        kind: "dndEndSnoozeerrorschema1",
        decode: { kind: "json", schema: dndEndSnoozeerrorschema1Schema },
      },
    ];
  }

  export type DndInfoRequest = {
    /** Authentication token. Requires scope: `dnd:read` */
    token?: string;
    /** User to fetch status for (defaults to current user) */
    user?: string;
    contentType: ContentType;
  };

  export class DndInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"dndInfoerrorschema1", DndInfoerrorschema1>>;

    static readonly errors: ErrorDecoders<DndInfoError> = [
      {
        on: "default",
        kind: "dndInfoerrorschema1",
        decode: { kind: "json", schema: dndInfoerrorschema1Schema },
      },
    ];
  }

  export type DndSetSnoozeRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `dnd:write` */
    token: string;
    /** Number of minutes, from now, to snooze until. */
    numMinutes: string;
  };

  export class DndSetSnoozeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"dndSetSnoozeerrorschema1", DndSetSnoozeerrorschema1>>;

    static readonly errors: ErrorDecoders<DndSetSnoozeError> = [
      {
        on: "default",
        kind: "dndSetSnoozeerrorschema1",
        decode: { kind: "json", schema: dndSetSnoozeerrorschema1Schema },
      },
    ];
  }

  export type DndTeamInfoRequest = {
    /** Authentication token. Requires scope: `dnd:read` */
    token?: string;
    /** Comma-separated list of users to fetch Do Not Disturb status for */
    users?: string;
    contentType: ContentType;
  };

  export class DndTeamInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<DndTeamInfoError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
