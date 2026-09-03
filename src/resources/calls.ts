import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  callsAdd(
    request: Calls.CallsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/calls.add"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
            { name: "date_start", value: request.dateStart, schema: s.optional(s.number()) },
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

  callsEnd(
    request: Calls.CallsEndRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsEndError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/calls.end"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "id", value: request.id, schema: s.string() },
            { name: "duration", value: request.duration, schema: s.optional(s.number()) },
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

  callsInfo(
    request: Calls.CallsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/calls.info"),
        auth: this.#auth.slackAuth,
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

  callsParticipantsAdd(
    request: Calls.CallsParticipantsAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsParticipantsAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/calls.participants.add"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  callsParticipantsRemove(
    request: Calls.CallsParticipantsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsParticipantsRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/calls.participants.remove"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  callsUpdate(
    request: Calls.CallsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Calls.CallsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/calls.update"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
    token: string;
    contentType: ContentType;
    externalUniqueId: string;
    joinUrl: string;
    externalDisplayId?: string;
    desktopAppJoinUrl?: string;
    dateStart?: number;
    title?: string;
    createdBy?: string;
    users?: string;
  };

  export class CallsAddError extends ResponseError<Declared<"defaulterrortemplate1", Defaulterrortemplate1>> {
    static readonly errors: ErrorDecoders<CallsAddError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type CallsEndRequest = {
    token: string;
    contentType: ContentType;
    id: string;
    duration?: number;
  };

  export class CallsEndError extends ResponseError<Declared<"defaulterrortemplate1", Defaulterrortemplate1>> {
    static readonly errors: ErrorDecoders<CallsEndError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type CallsInfoRequest = {
    id: string;
    token: string;
    contentType: ContentType;
  };

  export class CallsInfoError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<CallsInfoError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type CallsParticipantsAddRequest = {
    token: string;
    contentType: ContentType;
    id: string;
    users: string;
  };

  export class CallsParticipantsAddError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<CallsParticipantsAddError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type CallsParticipantsRemoveRequest = {
    token: string;
    contentType: ContentType;
    id: string;
    users: string;
  };

  export class CallsParticipantsRemoveError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<CallsParticipantsRemoveError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type CallsUpdateRequest = {
    token: string;
    contentType: ContentType;
    id: string;
    title?: string;
    joinUrl?: string;
    desktopAppJoinUrl?: string;
  };

  export class CallsUpdateError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<CallsUpdateError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
