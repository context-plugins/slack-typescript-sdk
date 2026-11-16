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
import { dndEndDndschemaSchema, type DndEndDndschema } from "../models/dnd-end-dndschema.js";
import { dndEndSnoozeschemaSchema, type DndEndSnoozeschema } from "../models/dnd-end-snoozeschema.js";
import { dndInfoschemaSchema, type DndInfoschema } from "../models/dnd-infoschema.js";
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndEndDnd(request: Dnd.DndEndDndRequest, options?: RequestOptions): ApiPromise<DndEndDndschema, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndEndSnooze(
    request: Dnd.DndEndSnoozeRequest,
    options?: RequestOptions,
  ): ApiPromise<DndEndSnoozeschema, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndInfo(request: Dnd.DndInfoRequest, options?: RequestOptions): ApiPromise<DndInfoschema, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndSetSnooze(
    request: Dnd.DndSetSnoozeRequest,
    options?: RequestOptions,
  ): ApiPromise<DndSetSnoozeschema, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndTeamInfo(
    request: Dnd.DndTeamInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
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

  export type DndEndSnoozeRequest = {
    /** Authentication token. Requires scope: `dnd:write` */
    token: string;
    contentType: ContentType;
  };

  export type DndInfoRequest = {
    /** Authentication token. Requires scope: `dnd:read` */
    token?: string;
    /** User to fetch status for (defaults to current user) */
    user?: string;
    contentType: ContentType;
  };

  export type DndSetSnoozeRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `dnd:write` */
    token: string;
    /** Number of minutes, from now, to snooze until. */
    numMinutes: string;
  };

  export type DndTeamInfoRequest = {
    /** Authentication token. Requires scope: `dnd:read` */
    token?: string;
    /** Comma-separated list of users to fetch Do Not Disturb status for */
    users?: string;
    contentType: ContentType;
  };
}
