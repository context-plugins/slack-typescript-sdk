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

export class Views {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  viewsOpen(
    request: Views.ViewsOpenRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Views.ViewsOpenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/views.open"),
        auth: this.#auth.slackAuth,
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

  viewsPublish(
    request: Views.ViewsPublishRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Views.ViewsPublishError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/views.publish"),
        auth: this.#auth.slackAuth,
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

  viewsPush(
    request: Views.ViewsPushRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Views.ViewsPushError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/views.push"),
        auth: this.#auth.slackAuth,
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

  viewsUpdate(
    request: Views.ViewsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Views.ViewsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/views.update"),
        auth: this.#auth.slackAuth,
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
    triggerId: string;
    view: string;
    token: string;
    contentType: ContentType;
  };

  export class ViewsOpenError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<ViewsOpenError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type ViewsPublishRequest = {
    userId: string;
    view: string;
    hash?: string;
    token: string;
    contentType: ContentType;
  };

  export class ViewsPublishError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<ViewsPublishError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type ViewsPushRequest = {
    triggerId: string;
    view: string;
    token: string;
    contentType: ContentType;
  };

  export class ViewsPushError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<ViewsPushError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type ViewsUpdateRequest = {
    viewId?: string;
    externalId?: string;
    view?: string;
    hash?: string;
    token: string;
    contentType: ContentType;
  };

  export class ViewsUpdateError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<ViewsUpdateError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
