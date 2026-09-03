import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  remindersAdderrorschema1Schema,
  type RemindersAdderrorschema1,
} from "../models/reminders-adderrorschema1.js";
import { remindersAddschemaSchema, type RemindersAddschema } from "../models/reminders-addschema.js";
import {
  remindersCompleteerrorschema1Schema,
  type RemindersCompleteerrorschema1,
} from "../models/reminders-completeerrorschema1.js";
import {
  remindersCompleteschemaSchema,
  type RemindersCompleteschema,
} from "../models/reminders-completeschema.js";
import {
  remindersDeleteerrorschema1Schema,
  type RemindersDeleteerrorschema1,
} from "../models/reminders-deleteerrorschema1.js";
import { remindersDeleteschemaSchema, type RemindersDeleteschema } from "../models/reminders-deleteschema.js";
import {
  remindersInfoerrorschema1Schema,
  type RemindersInfoerrorschema1,
} from "../models/reminders-infoerrorschema1.js";
import { remindersInfoschemaSchema, type RemindersInfoschema } from "../models/reminders-infoschema.js";
import {
  remindersListerrorschema1Schema,
  type RemindersListerrorschema1,
} from "../models/reminders-listerrorschema1.js";
import { remindersListschemaSchema, type RemindersListschema } from "../models/reminders-listschema.js";
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

  remindersAdd(
    request: Reminders.RemindersAddRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersAddschema, Reminders.RemindersAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/reminders.add"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
        success: { kind: "json", schema: remindersAddschemaSchema },
        errorFactory: Reminders.RemindersAddError,
      },
      options,
    );
  }

  remindersComplete(
    request: Reminders.RemindersCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersCompleteschema, Reminders.RemindersCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/reminders.complete"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "reminder", value: request.reminder, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: remindersCompleteschemaSchema },
        errorFactory: Reminders.RemindersCompleteError,
      },
      options,
    );
  }

  remindersDelete(
    request: Reminders.RemindersDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersDeleteschema, Reminders.RemindersDeleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/reminders.delete"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "reminder", value: request.reminder, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: remindersDeleteschemaSchema },
        errorFactory: Reminders.RemindersDeleteError,
      },
      options,
    );
  }

  remindersInfo(
    request: Reminders.RemindersInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersInfoschema, Reminders.RemindersInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/reminders.info"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "reminder", value: request.reminder, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: remindersInfoschemaSchema },
        errorFactory: Reminders.RemindersInfoError,
      },
      options,
    );
  }

  remindersList(
    request: Reminders.RemindersListRequest,
    options?: RequestOptions,
  ): ApiPromise<RemindersListschema, Reminders.RemindersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/reminders.list"),
        auth: this.#auth.slackAuth,
        query: [{ name: "token", value: request.token, schema: s.optional(s.string()) }],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: remindersListschemaSchema },
        errorFactory: Reminders.RemindersListError,
      },
      options,
    );
  }
}

export namespace Reminders {
  export type RemindersAddRequest = {
    token: string;
    contentType: ContentType;
    text: string;
    time: string;
    user?: string;
  };

  export class RemindersAddError extends ResponseError<
    Declared<"remindersAdderrorschema1", RemindersAdderrorschema1>
  > {
    static readonly errors: ErrorDecoders<RemindersAddError> = [
      {
        on: [400, 599],
        kind: "remindersAdderrorschema1",
        decode: { kind: "json", schema: remindersAdderrorschema1Schema },
      },
    ];
  }

  export type RemindersCompleteRequest = {
    contentType: ContentType;
    token?: string;
    reminder?: string;
  };

  export class RemindersCompleteError extends ResponseError<
    Declared<"remindersCompleteerrorschema1", RemindersCompleteerrorschema1>
  > {
    static readonly errors: ErrorDecoders<RemindersCompleteError> = [
      {
        on: [400, 599],
        kind: "remindersCompleteerrorschema1",
        decode: { kind: "json", schema: remindersCompleteerrorschema1Schema },
      },
    ];
  }

  export type RemindersDeleteRequest = {
    contentType: ContentType;
    token?: string;
    reminder?: string;
  };

  export class RemindersDeleteError extends ResponseError<
    Declared<"remindersDeleteerrorschema1", RemindersDeleteerrorschema1>
  > {
    static readonly errors: ErrorDecoders<RemindersDeleteError> = [
      {
        on: [400, 599],
        kind: "remindersDeleteerrorschema1",
        decode: { kind: "json", schema: remindersDeleteerrorschema1Schema },
      },
    ];
  }

  export type RemindersInfoRequest = {
    token?: string;
    reminder?: string;
    contentType: ContentType;
  };

  export class RemindersInfoError extends ResponseError<
    Declared<"remindersInfoerrorschema1", RemindersInfoerrorschema1>
  > {
    static readonly errors: ErrorDecoders<RemindersInfoError> = [
      {
        on: [400, 599],
        kind: "remindersInfoerrorschema1",
        decode: { kind: "json", schema: remindersInfoerrorschema1Schema },
      },
    ];
  }

  export type RemindersListRequest = {
    token?: string;
    contentType: ContentType;
  };

  export class RemindersListError extends ResponseError<
    Declared<"remindersListerrorschema1", RemindersListerrorschema1>
  > {
    static readonly errors: ErrorDecoders<RemindersListError> = [
      {
        on: [400, 599],
        kind: "remindersListerrorschema1",
        decode: { kind: "json", schema: remindersListerrorschema1Schema },
      },
    ];
  }
}
