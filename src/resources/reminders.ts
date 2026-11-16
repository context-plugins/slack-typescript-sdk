import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { remindersAddschemaInternalSchema, type RemindersAddschema } from "../models/reminders-addschema.js";
import {
  remindersCompleteschemaSchema,
  type RemindersCompleteschema,
} from "../models/reminders-completeschema.js";
import { remindersDeleteschemaSchema, type RemindersDeleteschema } from "../models/reminders-deleteschema.js";
import {
  remindersInfoschemaInternalSchema,
  type RemindersInfoschema,
} from "../models/reminders-infoschema.js";
import {
  remindersListschemaInternalSchema,
  type RemindersListschema,
} from "../models/reminders-listschema.js";
import type { Servers } from "../servers.js";

export class Reminders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * reminders_add
   *
   * @remarks
   * Creates a reminder.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  remindersAdd(
    request: Reminders.RemindersAddRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersAddschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reminders.add"),
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
            { name: "text", value: request.text, schema: s.string() },
            { name: "time", value: request.time, schema: s.string() },
            { name: "user", value: request.user, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: remindersAddschemaInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * reminders_complete
   *
   * @remarks
   * Marks a reminder as complete.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  remindersComplete(
    request: Reminders.RemindersCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersCompleteschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reminders.complete"),
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
          value: [{ name: "reminder", value: request.reminder, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: remindersCompleteschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * reminders_delete
   *
   * @remarks
   * Deletes a reminder.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  remindersDelete(
    request: Reminders.RemindersDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersDeleteschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reminders.delete"),
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
          value: [{ name: "reminder", value: request.reminder, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: remindersDeleteschemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * reminders_info
   *
   * @remarks
   * Gets information about a reminder.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  remindersInfo(
    request: Reminders.RemindersInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersInfoschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reminders.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "reminder", value: request.reminder, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: remindersInfoschemaInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * reminders_list
   *
   * @remarks
   * Lists all reminders created by or for a given user.
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  remindersList(
    request: Reminders.RemindersListRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersListschema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reminders.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [{ name: "token", value: request.token, schema: s.optional(s.string()) }],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: remindersListschemaInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Reminders {
  export type RemindersAddRequest = {
    /** Authentication token. Requires scope: `reminders:write` */
    token: string;
    contentType: ContentType;
    /** The content of the reminder */
    text: string;
    /**
     * When this reminder should happen: the Unix timestamp (up to five years from now), the number
     * of seconds until the reminder (if within 24 hours), or a natural language description (Ex.
     * "in 15 minutes," or "every Thursday")
     */
    time: string;
    /**
     * The user who will receive the reminder. If no user is specified, the reminder will go to user
     * who created it.
     */
    user?: string;
  };

  export type RemindersCompleteRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `reminders:write` */
    token?: string;
    /** The ID of the reminder to be marked as complete */
    reminder?: string;
  };

  export type RemindersDeleteRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `reminders:write` */
    token?: string;
    /** The ID of the reminder */
    reminder?: string;
  };

  export type RemindersInfoRequest = {
    /** Authentication token. Requires scope: `reminders:read` */
    token?: string;
    /** The ID of the reminder */
    reminder?: string;
    contentType: ContentType;
  };

  export type RemindersListRequest = {
    /** Authentication token. Requires scope: `reminders:read` */
    token?: string;
    contentType: ContentType;
  };
}
