import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * team_accessLogs
   *
   * @remarks
   * Gets the access logs for the current team.
   *
   * @returns This response demonstrates pagination and two access log entries.
   *
   * @throws {@link TeamApi.TeamAccessLogsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamAccessLogs(
    request: TeamApi.TeamAccessLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamAccessLogsschema, TeamApi.TeamAccessLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team.accessLogs"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * team_billableInfo
   *
   * @remarks
   * Gets billable users information for the current team.
   *
   * @returns Typical success response
   *
   * @throws {@link TeamApi.TeamBillableInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamBillableInfo(
    request: TeamApi.TeamBillableInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, TeamApi.TeamBillableInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team.billableInfo"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * team_info
   *
   * @remarks
   * Gets information about the current team.
   *
   * @returns Typical success response
   *
   * @throws {@link TeamApi.TeamInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamInfo(
    request: TeamApi.TeamInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamInfoschema, TeamApi.TeamInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * team_integrationLogs
   *
   * @remarks
   * Gets the integration logs for the current team.
   *
   * @returns Typical success response
   *
   * @throws {@link TeamApi.TeamIntegrationLogsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamIntegrationLogs(
    request: TeamApi.TeamIntegrationLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamIntegrationLogsschema, TeamApi.TeamIntegrationLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team.integrationLogs"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * team_profile_get
   *
   * @remarks
   * Retrieve a team's profile.
   *
   * @returns Typical success response
   *
   * @throws {@link TeamApi.TeamProfileGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamProfileGet(
    request: TeamApi.TeamProfileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamProfileGetsuccessschema, TeamApi.TeamProfileGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team.profile.get"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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
    /** Authentication token. Requires scope: `admin` */
    token: string;
    /** End of time range of logs to include in results (inclusive). */
    before?: string;
    count?: string;
    page?: string;
    contentType: ContentType;
  };

  export class TeamAccessLogsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"teamAccessLogserrorschema1", TeamAccessLogserrorschema1>
    >;

    static readonly errors: ErrorDecoders<TeamAccessLogsError> = [
      {
        on: "default",
        kind: "teamAccessLogserrorschema1",
        decode: { kind: "json", schema: teamAccessLogserrorschema1Schema },
      },
    ];
  }

  export type TeamBillableInfoRequest = {
    /** Authentication token. Requires scope: `admin` */
    token: string;
    /** A user to retrieve the billable information for. Defaults to all users. */
    user?: string;
    contentType: ContentType;
  };

  export class TeamBillableInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<TeamBillableInfoError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type TeamInfoRequest = {
    /** Authentication token. Requires scope: `team:read` */
    token: string;
    /**
     * Team to get info on, if omitted, will return information about the current team. Will only
     * return team that the authenticated token is allowed to see through external shared channels
     */
    team?: string;
    contentType: ContentType;
  };

  export class TeamInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"teamInfoerrorschema1", TeamInfoerrorschema1>>;

    static readonly errors: ErrorDecoders<TeamInfoError> = [
      {
        on: "default",
        kind: "teamInfoerrorschema1",
        decode: { kind: "json", schema: teamInfoerrorschema1Schema },
      },
    ];
  }

  export type TeamIntegrationLogsRequest = {
    /** Authentication token. Requires scope: `admin` */
    token: string;
    /** Filter logs to this Slack app. Defaults to all logs. */
    appId?: string;
    /** Filter logs with this change type. Defaults to all logs. */
    changeType?: string;
    count?: string;
    page?: string;
    /** Filter logs to this service. Defaults to all logs. */
    serviceId?: string;
    /** Filter logs generated by this user’s actions. Defaults to all logs. */
    user?: string;
    contentType: ContentType;
  };

  export class TeamIntegrationLogsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"teamIntegrationLogserrorschema1", TeamIntegrationLogserrorschema1>
    >;

    static readonly errors: ErrorDecoders<TeamIntegrationLogsError> = [
      {
        on: "default",
        kind: "teamIntegrationLogserrorschema1",
        decode: { kind: "json", schema: teamIntegrationLogserrorschema1Schema },
      },
    ];
  }

  export type TeamProfileGetRequest = {
    /** Authentication token. Requires scope: `users.profile:read` */
    token: string;
    /** Filter by visibility. */
    visibility?: string;
    contentType: ContentType;
  };

  export class TeamProfileGetError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"teamProfileGeterrorschema1", TeamProfileGeterrorschema1>
    >;

    static readonly errors: ErrorDecoders<TeamProfileGetError> = [
      {
        on: "default",
        kind: "teamProfileGeterrorschema1",
        decode: { kind: "json", schema: teamProfileGeterrorschema1Schema },
      },
    ];
  }
}
