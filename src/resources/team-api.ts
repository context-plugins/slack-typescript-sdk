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
  teamAccessLogserrorschema1Schema,
  type TeamAccessLogserrorschema1,
} from "../models/team-access-logserrorschema1.js";
import { teamAccessLogsschemaSchema, type TeamAccessLogsschema } from "../models/team-access-logsschema.js";
import { teamInfoerrorschema1Schema, type TeamInfoerrorschema1 } from "../models/team-infoerrorschema1.js";
import { teamInfoschemaSchema, type TeamInfoschema } from "../models/team-infoschema.js";
import {
  teamIntegrationLogserrorschema1Schema,
  type TeamIntegrationLogserrorschema1,
} from "../models/team-integration-logserrorschema1.js";
import {
  teamIntegrationLogsschemaSchema,
  type TeamIntegrationLogsschema,
} from "../models/team-integration-logsschema.js";
import {
  teamProfileGeterrorschema1Schema,
  type TeamProfileGeterrorschema1,
} from "../models/team-profile-geterrorschema1.js";
import {
  teamProfileGetsuccessschemaSchema,
  type TeamProfileGetsuccessschema,
} from "../models/team-profile-getsuccessschema.js";
import type { Servers } from "../servers.js";

export class TeamApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  teamAccessLogs(
    request: TeamApi.TeamAccessLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamAccessLogsschema, TeamApi.TeamAccessLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/team.accessLogs"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "before", value: request.before, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamAccessLogsschemaSchema },
        errorFactory: TeamApi.TeamAccessLogsError,
      },
      options,
    );
  }

  teamBillableInfo(
    request: TeamApi.TeamBillableInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, TeamApi.TeamBillableInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/team.billableInfo"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: TeamApi.TeamBillableInfoError,
      },
      options,
    );
  }

  teamInfo(
    request: TeamApi.TeamInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamInfoschema, TeamApi.TeamInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/team.info"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "team", value: request.team, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamInfoschemaSchema },
        errorFactory: TeamApi.TeamInfoError,
      },
      options,
    );
  }

  teamIntegrationLogs(
    request: TeamApi.TeamIntegrationLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamIntegrationLogsschema, TeamApi.TeamIntegrationLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/team.integrationLogs"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "app_id", value: request.appId, schema: s.optional(s.string()) },
          { name: "change_type", value: request.changeType, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.string()) },
          { name: "service_id", value: request.serviceId, schema: s.optional(s.string()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamIntegrationLogsschemaSchema },
        errorFactory: TeamApi.TeamIntegrationLogsError,
      },
      options,
    );
  }

  teamProfileGet(
    request: TeamApi.TeamProfileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamProfileGetsuccessschema, TeamApi.TeamProfileGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/team.profile.get"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "visibility", value: request.visibility, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamProfileGetsuccessschemaSchema },
        errorFactory: TeamApi.TeamProfileGetError,
      },
      options,
    );
  }
}

export namespace TeamApi {
  export type TeamAccessLogsRequest = {
    token: string;
    before?: string;
    count?: string;
    page?: string;
    contentType: ContentType;
  };

  export class TeamAccessLogsError extends ResponseError<
    Declared<"teamAccessLogserrorschema1", TeamAccessLogserrorschema1>
  > {
    static readonly errors: ErrorDecoders<TeamAccessLogsError> = [
      {
        on: [400, 599],
        kind: "teamAccessLogserrorschema1",
        decode: { kind: "json", schema: teamAccessLogserrorschema1Schema },
      },
    ];
  }

  export type TeamBillableInfoRequest = {
    token: string;
    user?: string;
    contentType: ContentType;
  };

  export class TeamBillableInfoError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<TeamBillableInfoError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type TeamInfoRequest = {
    token: string;
    team?: string;
    contentType: ContentType;
  };

  export class TeamInfoError extends ResponseError<Declared<"teamInfoerrorschema1", TeamInfoerrorschema1>> {
    static readonly errors: ErrorDecoders<TeamInfoError> = [
      {
        on: [400, 599],
        kind: "teamInfoerrorschema1",
        decode: { kind: "json", schema: teamInfoerrorschema1Schema },
      },
    ];
  }

  export type TeamIntegrationLogsRequest = {
    token: string;
    appId?: string;
    changeType?: string;
    count?: string;
    page?: string;
    serviceId?: string;
    user?: string;
    contentType: ContentType;
  };

  export class TeamIntegrationLogsError extends ResponseError<
    Declared<"teamIntegrationLogserrorschema1", TeamIntegrationLogserrorschema1>
  > {
    static readonly errors: ErrorDecoders<TeamIntegrationLogsError> = [
      {
        on: [400, 599],
        kind: "teamIntegrationLogserrorschema1",
        decode: { kind: "json", schema: teamIntegrationLogserrorschema1Schema },
      },
    ];
  }

  export type TeamProfileGetRequest = {
    token: string;
    visibility?: string;
    contentType: ContentType;
  };

  export class TeamProfileGetError extends ResponseError<
    Declared<"teamProfileGeterrorschema1", TeamProfileGeterrorschema1>
  > {
    static readonly errors: ErrorDecoders<TeamProfileGetError> = [
      {
        on: [400, 599],
        kind: "teamProfileGeterrorschema1",
        decode: { kind: "json", schema: teamProfileGeterrorschema1Schema },
      },
    ];
  }
}
