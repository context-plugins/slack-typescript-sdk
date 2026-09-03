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

  dndEndDnd(
    request: Dnd.DndEndDndRequest,
    options?: RequestOptions,
  ): ApiPromise<DndEndDndschema, Dnd.DndEndDndError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/dnd.endDnd"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  dndEndSnooze(
    request: Dnd.DndEndSnoozeRequest,
    options?: RequestOptions,
  ): ApiPromise<DndEndSnoozeschema, Dnd.DndEndSnoozeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/dnd.endSnooze"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  dndInfo(
    request: Dnd.DndInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<DndInfoschema, Dnd.DndInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/dnd.info"),
        auth: this.#auth.slackAuth,
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

  dndSetSnooze(
    request: Dnd.DndSetSnoozeRequest,
    options?: RequestOptions,
  ): ApiPromise<DndSetSnoozeschema, Dnd.DndSetSnoozeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/dnd.setSnooze"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
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

  dndTeamInfo(
    request: Dnd.DndTeamInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Dnd.DndTeamInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/dnd.teamInfo"),
        auth: this.#auth.slackAuth,
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
    token: string;
    contentType: ContentType;
  };

  export class DndEndDndError extends ResponseError<
    Declared<"dndEndDnderrorschema1", DndEndDnderrorschema1>
  > {
    static readonly errors: ErrorDecoders<DndEndDndError> = [
      {
        on: [400, 599],
        kind: "dndEndDnderrorschema1",
        decode: { kind: "json", schema: dndEndDnderrorschema1Schema },
      },
    ];
  }

  export type DndEndSnoozeRequest = {
    token: string;
    contentType: ContentType;
  };

  export class DndEndSnoozeError extends ResponseError<
    Declared<"dndEndSnoozeerrorschema1", DndEndSnoozeerrorschema1>
  > {
    static readonly errors: ErrorDecoders<DndEndSnoozeError> = [
      {
        on: [400, 599],
        kind: "dndEndSnoozeerrorschema1",
        decode: { kind: "json", schema: dndEndSnoozeerrorschema1Schema },
      },
    ];
  }

  export type DndInfoRequest = {
    token?: string;
    user?: string;
    contentType: ContentType;
  };

  export class DndInfoError extends ResponseError<Declared<"dndInfoerrorschema1", DndInfoerrorschema1>> {
    static readonly errors: ErrorDecoders<DndInfoError> = [
      {
        on: [400, 599],
        kind: "dndInfoerrorschema1",
        decode: { kind: "json", schema: dndInfoerrorschema1Schema },
      },
    ];
  }

  export type DndSetSnoozeRequest = {
    contentType: ContentType;
    token: string;
    numMinutes: string;
  };

  export class DndSetSnoozeError extends ResponseError<
    Declared<"dndSetSnoozeerrorschema1", DndSetSnoozeerrorschema1>
  > {
    static readonly errors: ErrorDecoders<DndSetSnoozeError> = [
      {
        on: [400, 599],
        kind: "dndSetSnoozeerrorschema1",
        decode: { kind: "json", schema: dndSetSnoozeerrorschema1Schema },
      },
    ];
  }

  export type DndTeamInfoRequest = {
    token?: string;
    users?: string;
    contentType: ContentType;
  };

  export class DndTeamInfoError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<DndTeamInfoError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
