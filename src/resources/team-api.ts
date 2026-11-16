import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import {
  teamAccessLogsschemaInternalSchema,
  type TeamAccessLogsschema,
} from "../models/team-access-logsschema.js";
import { teamInfoschemaInternalSchema, type TeamInfoschema } from "../models/team-infoschema.js";
import {
  teamIntegrationLogsschemaInternalSchema,
  type TeamIntegrationLogsschema,
} from "../models/team-integration-logsschema.js";
import {
  teamProfileGetsuccessschemaInternalSchema,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamAccessLogs(
    request: TeamApi.TeamAccessLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamAccessLogsschema, ApiError> {
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
        success: { kind: "json", schema: teamAccessLogsschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamBillableInfo(
    request: TeamApi.TeamBillableInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
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
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamInfo(request: TeamApi.TeamInfoRequest, options?: RequestOptions): ApiPromise<TeamInfoschema, ApiError> {
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
        success: { kind: "json", schema: teamInfoschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamIntegrationLogs(
    request: TeamApi.TeamIntegrationLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamIntegrationLogsschema, ApiError> {
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
        success: { kind: "json", schema: teamIntegrationLogsschemaInternalSchema },
        errorFactory: ApiError,
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
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamProfileGet(
    request: TeamApi.TeamProfileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamProfileGetsuccessschema, ApiError> {
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
        success: { kind: "json", schema: teamProfileGetsuccessschemaInternalSchema },
        errorFactory: ApiError,
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

  export type TeamBillableInfoRequest = {
    /** Authentication token. Requires scope: `admin` */
    token: string;
    /** A user to retrieve the billable information for. Defaults to all users. */
    user?: string;
    contentType: ContentType;
  };

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

  export type TeamProfileGetRequest = {
    /** Authentication token. Requires scope: `users.profile:read` */
    token: string;
    /** Filter by visibility. */
    visibility?: string;
    contentType: ContentType;
  };
}
